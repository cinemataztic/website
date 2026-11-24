// Fetches the games from the Asana project "Live" and writes them, encrypted, to markets/live.enc.json for the hidden
// Markets pages (the "Playlist" link under Internal tools in the footer). It also writes the counts of the
// Asana project "Alerts" to alerts/alerts.enc.json (the "Alerts" link) and of "Support" to support/support.enc.json (the
// "Support Dashboard" link), see the end of this file. Run by .github/workflows/asana-live.yml
// every hour. Needs two GitHub secrets, given as environment variables (never put them in a file):
//   ASANA_TOKEN        an Asana personal access token
//   MARKETS_PASSWORD   the shared password for the Markets pages (Playlist); opens all markets
//   MARKETS_PASSWORD_DK, _SE, _FI, _DE, _PT, _IE
//                      a password per country (Market Tools); opens only that country's page and games
//
// Only what the pages show leaves Asana: name, market (the section), dates, done or not, product type and audience.
// Prices, invoices and other fields stay in Asana. The games are never written unencrypted, as the repository is public.
//
// Locally: ASANA_TOKEN=... MARKETS_PASSWORD=... node tools/asana-live.mjs

import { writeFile, readFile } from 'node:fs/promises';
import { webcrypto as crypto } from 'node:crypto';

const PROJECT = '1211768436736888';      // Asana project "Live"
const SKIP_SECTIONS = ['New Bookings'];   // sections that are not a market
const SKIP_TYPES = ['Pitch'];             // Product Types that are not shown
const OUT = new URL('../markets/live.enc.json', import.meta.url);
const ITERATIONS = 310000;                // PBKDF2-SHA256, the same in markets/markets.js
// The Market Tools pages, as in markets/markets.js: code and the Asana section of the market
const COUNTRIES = [
    { code: 'dk', name: 'Denmark' }, { code: 'se', name: 'Sweden' }, { code: 'fi', name: 'Finland' },
    { code: 'de', name: 'Germany' }, { code: 'pt', name: 'Portugal' }, { code: 'ie', name: 'Ireland' },
];

const token = process.env.ASANA_TOKEN;
const password = process.env.MARKETS_PASSWORD;
if (!token) { console.error('ASANA_TOKEN is not set'); process.exit(1); }
if (!password) { console.error('MARKETS_PASSWORD is not set'); process.exit(1); }

const fields = [
    'name', 'start_on', 'due_on', 'completed', 'memberships.project.gid', 'memberships.section.name',
    'custom_fields.name', 'custom_fields.enum_value.name', 'custom_fields.enum_value.color',
].join(',');

async function fetchAll(project = PROJECT, optFields = fields) {
    const tasks = [];
    let offset = '';
    do {
        const url = `https://app.asana.com/api/1.0/projects/${project}/tasks?limit=100&opt_fields=${optFields}${offset ? `&offset=${offset}` : ''}`;
        const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } });
        if (!res.ok) throw new Error(`Asana answered ${res.status}: ${await res.text()}`);
        const body = await res.json();
        tasks.push(...body.data);
        offset = body.next_page ? body.next_page.offset : '';
    } while (offset);
    return tasks;
}

// --- Encryption: AES-GCM with a key from the password (PBKDF2-SHA256), as the browser decrypts it with WebCrypto ---
const b64 = buf => Buffer.from(buf).toString('base64');
const unb64 = s => new Uint8Array(Buffer.from(s, 'base64'));
async function keyFor(salt, pass) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
async function decrypt(file, pass) {
    const key = await keyFor(unb64(file.salt), pass);
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(file.iv) }, key, unb64(file.data));
    return JSON.parse(new TextDecoder().decode(plain));
}
async function encrypt(payload, salt, pass) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await keyFor(salt, pass), new TextEncoder().encode(JSON.stringify(payload)));
    return { v: 1, kdf: 'PBKDF2-SHA256', iterations: ITERATIONS, salt: b64(salt), iv: b64(iv), data: b64(data) };
}

// --- The games ---
const field = (t, name) => (t.custom_fields || []).find(f => f.name === name)?.enum_value || null;
const sectionOf = t => (t.memberships || []).find(m => m.project?.gid === PROJECT)?.section?.name || '';

const raw = await fetchAll();
const tasks = raw.map(t => {
    const type = field(t, 'Product Type');
    const due = t.due_on || t.start_on;
    return {
        name: t.name.trim(),
        market: sectionOf(t),
        start: t.start_on || due,
        due,
        done: !!t.completed,
        type: type ? type.name : '',
        color: type ? type.color : '',
        audience: field(t, 'Audience')?.name || '',
    };
// Games only: tasks without a Product Type are admin tasks ("Opret … i produktions plan", "Take … down" and the like),
// and pitches are not games that run
}).filter(t => t.market && !SKIP_SECTIONS.includes(t.market) && t.due && t.type && !SKIP_TYPES.includes(t.type))
  .sort((a, b) => a.start.localeCompare(b.start) || a.name.localeCompare(b.name));

// Markets in the order of the sections in Asana
const markets = [...new Set(raw.map(sectionOf))].filter(m => m && !SKIP_SECTIONS.includes(m) && tasks.some(t => t.market === m));

// Writes one encrypted file, but only (and so only commits) when its games changed. The old file is opened with the
// password; when it can't be (first run, or a new password), a new salt is made, and anyone logged in logs in again.
async function save(out, pass, payload, label) {
    let old = null, salt = null;
    try {
        const file = JSON.parse(await readFile(out, 'utf8'));
        old = await decrypt(file, pass);
        salt = unb64(file.salt);
    } catch { /* no file yet, or another password */ }
    if (old && JSON.stringify(old.tasks) === JSON.stringify(payload.tasks) && JSON.stringify(old.markets) === JSON.stringify(payload.markets)) {
        console.log(`${label}: no changes (${payload.tasks.length} games)`);
        return;
    }
    salt = salt || crypto.getRandomValues(new Uint8Array(16));
    await writeFile(out, JSON.stringify(await encrypt({ updated: new Date().toISOString(), ...payload }, salt, pass)) + '\n');
    console.log(`${label}: wrote ${payload.tasks.length} games (encrypted)`);
}

// Playlist: all markets, with the shared password
await save(OUT, password, { markets, tasks }, 'All markets');

// Market Tools: a file per country with only its own games, each with its own password (MARKETS_PASSWORD_DK, …).
// A country without a password is left out (its page then only opens with the shared password).
for (const c of COUNTRIES) {
    const pass = process.env[`MARKETS_PASSWORD_${c.code.toUpperCase()}`];
    if (!pass) { console.log(`${c.name}: no MARKETS_PASSWORD_${c.code.toUpperCase()}, skipped`); continue; }
    if (pass === password) { console.error(`${c.name}: its password is the shared password; give it its own`); process.exit(1); }
    const own = tasks.filter(t => t.market === c.name);
    await save(new URL(`../markets/live-${c.code}.enc.json`, import.meta.url), pass, { markets: [c.name], tasks: own }, c.name);
}

// --- Alerts (alerts/index.html, the "Alerts" link under Internal tools): the charts of the dashboard of the Asana
// project "Alerts". Only the counts leave Asana, not the alerts themselves. Encrypted with the shared password and the
// same salt as live.enc.json, so one login opens Playlist, Intra and Alerts.
const ALERTS = '1213415935916920';           // Asana project "Alerts"
const ALERTS_OUT = new URL('../alerts/alerts.enc.json', import.meta.url);
const CLIENTS_SINCE = '2026-07-01';          // "Alerts by Client - Since 01/07/26"
const GAME_DAYS = 31;                        // "Game alerts in the last 31 days"
const TOP = 7;                               // slices in a ring before the rest goes into "Other"
// The cinema rings: the country and its value in the "Marked" field
const CINEMA_MARKETS = [['Denmark', 'BioSpil - DK'], ['Germany', 'REDyPLAY - DE'], ['Finland', 'Leffapeli - FI'],
    ['Ireland', 'CineGame - IE'], ['Portugal', 'CineGame - PT'], ['Sweden', 'CineGame - SE']];

const dayOf = iso => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Copenhagen' }).format(new Date(iso)); // YYYY-MM-DD, Danish time
const now = new Date();
const today = dayOf(now.toISOString());
const addDays = (day, n) => { const d = new Date(day + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };

const alerts = (await fetchAll(ALERTS, 'created_at,completed,custom_fields.name,custom_fields.enum_value.name,custom_fields.enum_value.color')).map(t => {
    const f = name => field(t, name);
    return { at: t.created_at, day: dayOf(t.created_at), done: !!t.completed, type: f('Type of Alert'), market: f('Marked'), cinema: f('Cinema'), client: f('Client') };
});

// Slices of a ring: [name, colour, count], biggest first; with "top", the rest is put together as "Other"
function slices(list, key, top) {
    const m = new Map();
    list.forEach(a => { const v = a[key]; if (!v || !v.name) return; const s = m.get(v.name) || [v.name, v.color || '', 0]; s[2]++; m.set(v.name, s); });
    const all = [...m.values()].sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
    if (!top || all.length <= top + 1) return all;
    return [...all.slice(0, top), ['Other', 'other', all.slice(top).reduce((n, s) => n + s[2], 0)]];
}

// Game alerts: "Game did not complete" per day and market, the last 31 days
const gameDays = Array.from({ length: GAME_DAYS }, (_, i) => addDays(today, i - GAME_DAYS + 1));
const games = alerts.filter(a => a.type?.name === 'Game did not complete' && a.day >= gameDays[0]);
const gameSeries = slices(games, 'market').map(([name, color]) => [name, color, gameDays.map(d => games.filter(a => a.day === d && a.market?.name === name).length)]);

// Hacker: alerts per day, from the first day with one to the last
const hackers = alerts.filter(a => a.type?.name === 'Hacker').map(a => a.day).sort();
const hackerDays = [];
for (let d = hackers[0]; hackers.length && d <= hackers[hackers.length - 1]; d = addDays(d, 1)) hackerDays.push([d, hackers.filter(h => h === d).length]);

const since24h = new Date(now - 86400000).toISOString();
const dashboard = {
    total: alerts.length,
    done: alerts.filter(a => a.done).length,
    clientsMonth: slices(alerts.filter(a => a.day.slice(0, 7) === today.slice(0, 7)), 'client', TOP),
    clientsSince: slices(alerts.filter(a => a.day >= CLIENTS_SINCE), 'client', TOP),
    game: { days: gameDays, series: gameSeries },
    hacker: hackerDays,
    types: slices(alerts, 'type'),
    markets: slices(alerts, 'market', TOP),
    markets24h: slices(alerts.filter(a => a.at >= since24h), 'market', TOP),
    cinemas: CINEMA_MARKETS.map(([country, market]) => [country, slices(alerts.filter(a => a.market?.name === market), 'cinema', TOP)]),
};

// Written (and so committed) only when a count changed
{
    const live = JSON.parse(await readFile(OUT, 'utf8'));
    let old = null;
    try {
        const file = JSON.parse(await readFile(ALERTS_OUT, 'utf8'));
        if (file.salt === live.salt) { const { updated, ...counts } = await decrypt(file, password); old = counts; }
    } catch { /* no file yet, or a new password */ }
    if (old && JSON.stringify(old) === JSON.stringify(dashboard)) console.log(`Alerts: no changes (${alerts.length} alerts)`);
    else {
        await writeFile(ALERTS_OUT, JSON.stringify(await encrypt({ updated: now.toISOString(), ...dashboard }, unb64(live.salt), password)) + '\n');
        console.log(`Alerts: wrote the dashboard of ${alerts.length} alerts (encrypted)`);
    }
}

// --- Support Dashboard (support/index.html, the "Support Dashboard" link under Internal tools): the charts of the
// dashboard of the Asana project "Support". Like Alerts: only the counts, encrypted with the shared password and salt.
const SUPPORT = '1210672026118849';          // Asana project "Support"
const SUPPORT_OUT = new URL('../support/support.enc.json', import.meta.url);
const SUPPORT_DAYS = 31;                     // "Last month's inquiries"
const HIDDEN_INQUIRIES = ['CineCard'];       // not shown on the Asana dashboard, so left out here too
// The country rings, in the order of the dashboard: [title, the value in the "M - Support" field]
const SUPPORT_COUNTRIES = [['SE', 'Sweden'], ['DK', 'Denmark'], ['DE', 'Germany'], ['FI', 'Finland'], ['PT', 'Portugal'], ['IE', 'Ireland']];

const tickets = (await fetchAll(SUPPORT, 'created_at,completed,custom_fields.name,custom_fields.enum_value.name,custom_fields.enum_value.color')).map(t => {
    const inquiry = field(t, 'inquiry - Support');
    return { day: dayOf(t.created_at), country: field(t, 'M - Support'), inquiry: inquiry && !HIDDEN_INQUIRIES.includes(inquiry.name) ? inquiry : null };
});
const supportDays = Array.from({ length: SUPPORT_DAYS }, (_, i) => addDays(today, i - SUPPORT_DAYS + 1));
const recent = tickets.filter(t => t.day >= supportDays[0]);
// The countries in the order of the field's options in Asana (Denmark, Sweden, Finland, Germany, Ireland, Portugal …)
const countryOrder = ['Denmark', 'Sweden', 'Finland', 'Germany', 'Ireland', 'Portugal', 'Australia', 'New Zealand'];
const byCountryOrder = s => s.sort((a, b) => countryOrder.indexOf(a[0]) - countryOrder.indexOf(b[0]));
const support = {
    total: tickets.length,
    monthCountries: byCountryOrder(slices(recent, 'country')),
    monthDays: supportDays.map(d => [d, recent.filter(t => t.day === d).length]),
    inquiries: slices(tickets, 'inquiry'),
    countries: byCountryOrder(slices(tickets, 'country')),
    perCountry: SUPPORT_COUNTRIES.map(([code, name]) => [code, slices(tickets.filter(t => t.country?.name === name), 'inquiry')]),
};

// Written (and so committed) only when a count changed
{
    const live = JSON.parse(await readFile(OUT, 'utf8'));
    let old = null;
    try {
        const file = JSON.parse(await readFile(SUPPORT_OUT, 'utf8'));
        if (file.salt === live.salt) { const { updated, ...counts } = await decrypt(file, password); old = counts; }
    } catch { /* no file yet, or a new password */ }
    if (old && JSON.stringify(old) === JSON.stringify(support)) console.log(`Support: no changes (${tickets.length} tickets)`);
    else {
        await writeFile(SUPPORT_OUT, JSON.stringify(await encrypt({ updated: now.toISOString(), ...support }, unb64(live.salt), password)) + '\n');
        console.log(`Support: wrote the dashboard of ${tickets.length} tickets (encrypted)`);
    }
}
