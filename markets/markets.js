// Shared by the hidden Markets pages (markets/index.html, the country pages dk.html … ie.html and live.html):
// loads live.json (written every hour from Asana by tools/asana-live.mjs) and draws the lists and the timeline.
window.Markets = (() => {
    // The country pages, in menu order. "name" is the section of the market in the Asana project "Live"
    const COUNTRIES = [
        { code: 'dk', short: 'DK', name: 'Denmark' },
        { code: 'se', short: 'SE', name: 'Sweden' },
        { code: 'fi', short: 'FI', name: 'Finland' },
        { code: 'de', short: 'DE', name: 'Germany' },
        { code: 'pt', short: 'PT', name: 'Portugal' },
        { code: 'ie', short: 'IE', name: 'Ireland' },
    ];
    const pageOf = name => { const c = COUNTRIES.find(c => c.name === name); return c ? `${c.code}.html` : 'live.html'; };

    // Asana's colour names (the Product Type field) as colours that work on the dark site
    const COLORS = {
        'yellow': '#fcd02c', 'yellow-green': '#b6e07c', 'red': '#f97b6b', 'orange': '#f59a4f', 'yellow-orange': '#f6b54c',
        'pink': '#f58fc4', 'aqua': '#67d9d0', 'blue': '#7d9ef2', 'blue-green': '#4fd0b1', 'green': '#6fbf8a',
        'indigo': '#9b93f2', 'purple': '#c08ae0', 'magenta': '#e57ae5', 'cool-gray': '#a7b4b8',
    };
    const color = t => COLORS[t.color] || '#9a9a9a';

    // Today as YYYY-MM-DD in the viewer's own time zone (Asana dates have no time)
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const soon = (() => { const s = new Date(today + 'T12:00:00'); s.setDate(s.getDate() + 30); return s.toISOString().slice(0, 10); })();

    const isLive = t => !t.done && t.start <= today && t.due >= today;
    const startsSoon = t => !t.done && t.start > today && t.start <= soon;
    const fmt = iso => new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const updated = data => `Updated ${new Date(data.updated).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}`;

    // --- Login. The games are encrypted (see tools/asana-live.mjs): live.enc.json with the shared password (Playlist,
    // all markets) and live-dk.enc.json … live-ie.enc.json with a password per country (Market Tools, that country only).
    // The password itself is never stored: after login the key made from it is kept in this browser tab, or on this
    // device with "Keep me logged in", and is thrown away on "Log out" or when the password is changed.
    const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const store = {
        name: id => `marketsKey:${id}`,
        get(id) { try { return sessionStorage.getItem(this.name(id)) || localStorage.getItem(this.name(id)); } catch (e) { return null; } },
        set(id, v, keep) { try { (keep ? localStorage : sessionStorage).setItem(this.name(id), v); } catch (e) { /* storage unavailable */ } },
        drop(id) { try { sessionStorage.removeItem(this.name(id)); localStorage.removeItem(this.name(id)); } catch (e) { /* storage unavailable */ } },
        clear() { ['all', ...COUNTRIES.map(c => c.code)].forEach(id => this.drop(id)); },
    };
    async function keyFromPassword(password, file) {
        const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
        return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: b64(file.salt), iterations: file.iterations },
            base, { name: 'AES-GCM', length: 256 }, true, ['decrypt']);
    }
    async function open(file, key) {
        const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(file.iv) }, key, b64(file.data));
        return JSON.parse(new TextDecoder().decode(plain));
    }
    async function fetchFile(url) {
        const res = await fetch(url, { cache: 'no-cache' });
        return res.ok ? res.json() : null;
    }

    // The login screen, over the page until a password opens one of the files ({ id, file }, tried in order)
    function login(files, title, text) {
        return new Promise(resolve => {
            const box = document.createElement('div');
            box.className = 'mk-login';
            box.innerHTML = `
                <form class="mk-login__box" autocomplete="on">
                    <span class="mk-label">${title === 'Playlist' ? 'Internal tools' : 'Market Tools'}</span>
                    <h1 class="mk-login__title">${esc(title)}</h1>
                    <p class="mk-login__text">${esc(text)}</p>
                    <input type="text" name="username" value="cinemataztic-${esc(title.toLowerCase())}" autocomplete="username" hidden>
                    <label class="mk-login__label" for="mkPassword">Password</label>
                    <input class="mk-login__input" id="mkPassword" type="password" autocomplete="current-password" required>
                    <label class="mk-login__keep"><input type="checkbox" id="mkKeep"> Keep me logged in on this device</label>
                    <p class="mk-login__error" id="mkLoginError" hidden>Wrong password. Try again.</p>
                    <button class="mk-login__btn btn-shine" type="submit">Log in <i class="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i></button>
                </form>`;
            document.body.appendChild(box);
            document.documentElement.classList.add('mk-locked');
            const input = box.querySelector('#mkPassword'), error = box.querySelector('#mkLoginError'), btn = box.querySelector('button');
            input.focus();
            box.querySelector('form').addEventListener('submit', async e => {
                e.preventDefault();
                btn.disabled = true;
                error.hidden = true;
                for (const { id, file } of files) {
                    try {
                        const key = await keyFromPassword(input.value, file);
                        const data = await open(file, key);
                        const raw = new Uint8Array(await crypto.subtle.exportKey('raw', key));
                        store.set(id, `${file.salt}:${btoa(String.fromCharCode(...raw))}`, box.querySelector('#mkKeep').checked);
                        box.remove();
                        document.documentElement.classList.remove('mk-locked');
                        resolve({ ...data, full: id === 'all' });
                        return;
                    } catch (err) { /* not this file's password */ }
                }
                error.hidden = false;
                input.select();
                btn.disabled = false;
            });
        });
    }

    // Loads the games: with a saved key when there is one, otherwise after the login screen. On a country page
    // ("country" is its code) both the shared password and the country's own password work; "full" in the result
    // says which: true for all markets (Playlist), false for only this country (Market Tools).
    async function load(country) {
        const c = COUNTRIES.find(x => x.code === country);
        const files = [];
        const all = await fetchFile('live.enc.json');
        const own = c ? await fetchFile(`live-${c.code}.enc.json`) : null;
        if (all) files.push({ id: 'all', file: all });
        if (own) files.push({ id: c.code, file: own });
        if (!files.length) throw new Error('No games file');
        for (const { id, file } of files) {
            const saved = store.get(id);
            if (!saved || !saved.startsWith(`${file.salt}:`)) { store.drop(id); continue; }
            try {
                const key = await crypto.subtle.importKey('raw', b64(saved.split(':')[1]), 'AES-GCM', false, ['decrypt']);
                return { ...(await open(file, key)), full: id === 'all' };
            } catch (e) { store.drop(id); /* a new password: log in again */ }
        }
        // On a country page its own password is tried first
        return c
            ? login(files.reverse(), c.name, `Log in with the ${c.name} password to see the games in ${c.name}.`)
            : login(files, 'Playlist', 'Log in with the shared password to see the games in each market.');
    }

    // "Log out" in the top bar of every Markets page
    document.addEventListener('DOMContentLoaded', () => {
        const out = document.getElementById('mkLogout');
        if (out) out.addEventListener('click', () => { store.clear(); location.reload(); });
    });

    // The row of links to the other Markets pages; "current" is a country code, 'all' or 'markets'
    function nav(el, current) {
        const link = (href, label, on) => `<a class="mk-chip${on ? ' is-on' : ''}" href="${href}">${label}</a>`;
        el.innerHTML = [
            link('./', 'Markets', current === 'markets'),
            ...COUNTRIES.map(c => link(`${c.code}.html`, c.short, current === c.code)),
            link('live.html', 'All on one timeline', current === 'all'),
        ].join('');
    }

    // A list of games, each with a colour dot and a date
    const list = (games, when) => `<ul class="mk-list">${games.map(t =>
        `<li><span class="mk-dot" style="background:${color(t)}"></span><span>${esc(t.name)}</span><span>${when(t)}</span></li>`).join('')}</ul>`;

    // The colours of the product types used by these games
    function legend(el, games) {
        const types = new Map();
        games.forEach(t => { if (!types.has(t.type)) types.set(t.type, color(t)); });
        el.innerHTML = [...types].map(([name, c]) => `<span><span class="mk-dot" style="background:${c}"></span>${esc(name)}</span>`).join('');
    }

    // The timeline, a year at a time, for one or more markets. "ui" holds the year label and the two arrow buttons
    function timeline(el, ui, data, markets) {
        const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const DAY = 86400000;
        const ms = iso => Date.parse(iso + 'T00:00:00Z');
        const own = data.tasks.filter(t => markets.includes(t.market));
        const years = own.flatMap(t => [+t.start.slice(0, 4), +t.due.slice(0, 4)]);
        const firstYear = Math.min(...years, +today.slice(0, 4)), lastYear = Math.max(...years, +today.slice(0, 4));
        let year = +new URLSearchParams(location.search).get('year') || +today.slice(0, 4);

        ui.prev.addEventListener('click', () => { year--; draw(); });
        ui.next.addEventListener('click', () => { year++; draw(); });

        function draw() {
            year = Math.min(Math.max(year, firstYear), lastYear);
            ui.year.textContent = year;
            ui.prev.disabled = year <= firstYear;
            ui.next.disabled = year >= lastYear;
            // Keep the year in the address (but not this year), so a page can be linked to as it is
            const q = new URLSearchParams(location.search);
            if (year !== +today.slice(0, 4)) q.set('year', year); else q.delete('year');
            history.replaceState(null, '', q.toString() ? `?${q}` : location.pathname);

            const y0 = Date.UTC(year, 0, 1), y1 = Date.UTC(year + 1, 0, 1), span = y1 - y0;
            const pct = t => ((t - y0) / span) * 100;
            const head = `
                <div class="mk-tl__head">
                    <div class="mk-tl__row mk-tl__row--q">${[1, 2, 3, 4].map(n => `<div>Q${n} ${year}</div>`).join('')}</div>
                    <div class="mk-tl__row mk-tl__row--m">${MONTHS.map(m => `<div>${m}</div>`).join('')}</div>
                </div>`;

            const groups = markets.map(m => {
                // The games in this market that touch this year, packed into as few lanes as possible
                const games = own.filter(t => t.market === m && ms(t.due) + DAY > y0 && ms(t.start) < y1)
                    .sort((a, b) => a.start.localeCompare(b.start) || b.due.localeCompare(a.due));
                const lanes = [];
                games.forEach(t => {
                    const s = ms(t.start), e = ms(t.due) + DAY;
                    let lane = lanes.find(l => l.end + 4 * DAY <= s);
                    if (!lane) { lane = { end: 0, items: [] }; lanes.push(lane); }
                    lane.end = e;
                    lane.items.push(t);
                });
                const bars = lanes.map(l => `<div class="mk-tl__lane">${l.items.map(t => {
                    const s = Math.max(ms(t.start), y0), e = Math.min(ms(t.due) + DAY, y1);
                    const cls = ['mk-tl__item', t.done ? 'is-done' : '', ms(t.start) < y0 ? 'cut-start' : '', ms(t.due) + DAY > y1 ? 'cut-end' : ''].join(' ');
                    const tip = `${t.name}\n${fmt(t.start)} – ${fmt(t.due)}\n${t.type}${t.audience ? ` · ${t.audience}` : ''}${t.done ? '\nFinished' : isLive(t) ? '\nLive now' : ''}`;
                    return `<div class="${cls}" style="left:${pct(s)}%;width:${pct(e) - pct(s)}%;background:${color(t)}" title="${esc(tip)}">${t.done ? '<i class="fa-solid fa-check" aria-hidden="true"></i>' : ''}<span>${esc(t.name)}</span></div>`;
                }).join('')}</div>`).join('');
                const label = markets.length > 1
                    ? `<div class="mk-tl__group"><a href="${pageOf(m)}">${esc(m)}</a><small>${games.filter(isLive).length} live now · ${games.length} in ${year}</small></div>` : '';
                return `${label}${bars || '<p class="mk-tl__none">No games this year</p>'}`;
            }).join('');

            const t = ms(today) + DAY / 2;
            const todayLine = t >= y0 && t < y1 ? `<div class="mk-tl__today" style="left:${pct(t)}%"></div>` : '';
            el.innerHTML = `${head}<div class="mk-tl__body${markets.length > 1 ? '' : ' mk-tl__body--one'}">${todayLine}${groups}</div>`;
        }
        draw();
    }

    return { COUNTRIES, pageOf, color, today, isLive, startsSoon, fmt, esc, updated, load, nav, list, legend, timeline };
})();
