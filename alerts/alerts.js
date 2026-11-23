// Alerts (alerts/index.html): draws the dashboard of the Asana project "Alerts" from alerts.enc.json, which
// tools/asana-live.mjs writes every hour (only the counts, encrypted with the shared password).
// Rings are SVG; the bar charts are HTML, lit like the audience chart on products.html.
(function () {
    const M = window.Markets;
    // Asana's colour names, as colours that work on the dark site (the same as on the Markets pages, plus a few)
    const COLORS = {
        'yellow': '#fcd02c', 'yellow-green': '#b6e07c', 'red': '#f97b6b', 'orange': '#f59a4f', 'yellow-orange': '#f6b54c',
        'pink': '#f58fc4', 'hot-pink': '#f06fb5', 'aqua': '#67d9d0', 'blue': '#7d9ef2', 'blue-green': '#4fd0b1', 'green': '#6fbf8a',
        'indigo': '#9b93f2', 'purple': '#c08ae0', 'magenta': '#e57ae5', 'cool-gray': '#a7b4b8', 'none': '#bdbdbd', '': '#bdbdbd', 'other': '#bdbdbd',
    };
    const color = c => COLORS[c] || '#bdbdbd';
    const esc = M.esc;
    const short = n => n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K` : String(n);
    const dm = day => `${day.slice(8, 10)}/${day.slice(5, 7)}`;

    // --- A ring: slices are [name, colour, count]
    let ringId = 0;
    function ring(slices, opts = {}) {
        const total = slices.reduce((n, s) => n + s[2], 0);
        const id = `ring${ringId++}`;
        const R = 78, W = 30, C = 2 * Math.PI * R;
        let at = 0;
        const parts = slices.map(([name, c, n]) => {
            const len = (n / total) * C;
            const mid = (at + len / 2) / C * 2 * Math.PI - Math.PI / 2;
            const seg = { name, c: color(c), n, dash: `${Math.max(len - (slices.length > 1 ? 1.5 : 0), 0.001)} ${C}`, off: -at, x: 100 + R * Math.cos(mid), y: 100 + R * Math.sin(mid), share: n / total };
            at += len;
            return seg;
        });
        const svg = total ? `
            <svg viewBox="0 0 200 200" class="al-ring__svg" role="img" aria-label="${esc(opts.label || '')}">
                <defs>
                    <radialGradient id="${id}l" cx="30%" cy="22%" r="85%">
                        <stop offset="0" stop-color="#fff" stop-opacity="0.32"/><stop offset="0.45" stop-color="#fff" stop-opacity="0.04"/>
                        <stop offset="1" stop-color="#000" stop-opacity="0.32"/>
                    </radialGradient>
                </defs>
                <g transform="rotate(-90 100 100)">
                    ${parts.map((p, i) => `<circle class="al-seg" data-i="${i}" cx="100" cy="100" r="${R}" fill="none" stroke="${p.c}" stroke-width="${W}" stroke-dasharray="${p.dash}" stroke-dashoffset="${p.off}" style="--glow:${p.c}"><title>${esc(p.name)}: ${p.n}</title></circle>`).join('')}
                    <circle cx="100" cy="100" r="${R}" fill="none" stroke="url(#${id}l)" stroke-width="${W}" pointer-events="none"/>
                    <circle cx="100" cy="100" r="${R + W / 2 - 0.5}" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1" pointer-events="none" stroke-dasharray="${C * 0.35} ${C}" stroke-dashoffset="${C * 0.55}"/>
                </g>
                ${parts.filter(p => p.share >= 0.035).map(p => `<text x="${p.x}" y="${p.y}" class="al-ring__num">${short(p.n)}</text>`).join('')}
                <text x="100" y="100" class="al-ring__total">${short(total)}</text>
            </svg>` : '<p class="al-none">No alerts</p>';
        const legend = total ? `<ul class="al-legend">${parts.map(p => `<li><span style="background:${p.c};--glow:${p.c}"></span>${esc(p.name)}</li>`).join('')}</ul>` : '';
        return `<div class="al-ring">${svg}${legend}</div>`;
    }

    // --- Bars: columns of [label, segments of [name, colour, count]]; the legend lists the series
    function bars(columns, series, opts = {}) {
        const max = Math.max(1, ...columns.map(c => c[1].reduce((n, s) => n + s[2], 0)));
        const step = max > 60 ? 50 : max > 12 ? 5 : max > 6 ? 2 : 1;
        const top = Math.ceil(max / step) * step;
        const grid = Array.from({ length: Math.floor(top / step) + 1 }, (_, i) => i * step);
        const cols = columns.map(([label, segs]) => {
            const sum = segs.reduce((n, s) => n + s[2], 0);
            const tip = segs.filter(s => s[2]).map(s => `${esc(s[0])}: ${s[2]}`).join(' · ');
            return `<div class="al-col"${tip ? ` title="${dm(label)} · ${tip}"` : ''}>
                <div class="al-stack" style="height:${(sum / top) * 100}%">
                    <span class="al-col__sum">${sum}</span>
                    ${segs.filter(s => s[2]).reverse().map(s => `<div class="al-bar" style="flex-grow:${s[2]};background-color:${color(s[1])};--glow:${color(s[1])}">${opts.inner !== false && s[2] / top > 0.07 ? `<span>${s[2]}</span>` : ''}</div>`).join('')}
                </div>
                <span class="al-col__label">${dm(label)}</span>
            </div>`;
        }).join('');
        const legend = series.length > 1 ? `<ul class="al-legend al-legend--side">${series.map(([name, c]) => `<li><span style="background:${color(c)};--glow:${color(c)}"></span>${esc(name)}</li>`).join('')}</ul>` : '';
        return `<div class="al-bars">
            <div class="al-scroll"><div class="al-plot" style="--cols:${columns.length}">
                ${grid.map(g => `<div class="al-grid" style="bottom:${(g / top) * 100}%"><span>${g}</span></div>`).join('')}
                <div class="al-cols">${cols}</div>
            </div></div>
            ${legend}
        </div>`;
    }

    const card = (title, body, wide) => `<section class="al-card${wide ? ' al-card--wide' : ''}"><h2 class="al-card__title">${esc(title)}</h2>${body}</section>`;

    window.drawAlerts = function (el, d) {
        const game = bars(d.game.days.map((day, i) => [day, d.game.series.map(([name, c, counts]) => [name, c, counts[i]])]), d.game.series);
        const hacker = d.hacker.length ? bars(d.hacker.map(([day, n]) => [day, [['Hacker', 'indigo', n]]]), [], { inner: false }) : '<p class="al-none">No hacker alerts</p>';
        el.innerHTML = [
            card('Total tasks by completion status', ring([['Completed', 'indigo', d.done], ['Incomplete', 'yellow-green', d.total - d.done]].filter(s => s[2]), { label: 'Completion status' })),
            card('Alerts by Client this month', ring(d.clientsMonth)),
            card('Alerts by Client – Since 01/07/26', ring(d.clientsSince)),
            card('Game alerts in the last 31 days (Not prize-related)', game, true),
            card('Hacker', hacker, true),
            card('Type of alert', ring(d.types)),
            card('Alerts by marked', ring(d.markets)),
            card('Alerts by marked the last 24 hours', ring(d.markets24h)),
            ...d.cinemas.map(([country, s]) => card(`${country} by cinema`, ring(s))),
        ].join('');

        // Hovering a slice or its legend lights both up
        el.querySelectorAll('.al-ring').forEach(r => {
            const segs = r.querySelectorAll('.al-seg'), items = r.querySelectorAll('.al-legend li');
            const on = i => { segs.forEach((s, j) => s.classList.toggle('is-dim', i !== null && j !== i)); items.forEach((li, j) => li.classList.toggle('is-dim', i !== null && j !== i)); };
            segs.forEach((s, i) => { s.addEventListener('mouseenter', () => on(i)); s.addEventListener('mouseleave', () => on(null)); });
            items.forEach((li, i) => { li.addEventListener('mouseenter', () => on(i)); li.addEventListener('mouseleave', () => on(null)); });
        });
    };
})();
