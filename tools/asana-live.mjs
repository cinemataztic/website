// Fetches the games from the Asana project "Live" and writes them, encrypted, to markets/live.enc.json for the hidden
// Markets pages (the "Playlist" link under Internal tools in the footer). Run by .github/workflows/asana-live.yml
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

async function fetchAll() {
    const tasks = [];
    let offset = '';
    do {
        const url = `https://app.asana.com/api/1.0/projects/${PROJECT}/tasks?limit=100&opt_fields=${fields}${offset ? `&offset=${offset}` : ''}`;
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
