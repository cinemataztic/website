// Hero heading fade-in, used on every page with a big heading in #hero.
// Each line of the heading, as it wraps on this screen, slides up out of an invisible edge and fades in,
// 140ms after the one before; the label above and the text beside it (.hero-copy) fade in after.
// Load it at the end of <body> (not deferred), so the heading is prepared before the page is drawn.
// Off for reduced motion. To remove it from a page, delete that page's <script src="assets/js/hero-fade.js">.
(function heroFadeIn() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const h1 = document.querySelector('#hero h1');
    // Only plain text and <br> in the heading; anything else is left alone
    if (!h1 || [...h1.children].some(el => el.tagName !== 'BR')) return;

    const style = document.createElement('style');
    style.textContent = `
        .hx-wait { visibility: hidden; }
        .hx-line { display: block; overflow: hidden; padding-bottom: 0.1em; margin-bottom: -0.1em; }
        .hx-line > span { display: block; animation: hx-up 1000ms cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        @keyframes hx-up { from { transform: translateY(105%); opacity: 0; } to { transform: none; opacity: 1; } }
        .hx-fade { animation: hx-fade 900ms ease-out both; }
        @keyframes hx-fade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    `;
    document.head.appendChild(style);

    const original = h1.innerHTML;
    const label = h1.previousElementSibling;
    const copy = [...document.querySelectorAll('#hero .hero-copy > *')];
    h1.classList.add('hx-wait');
    if (label) label.classList.add('hx-wait');
    copy.forEach(p => p.classList.add('hx-wait'));

    function run() {
        // Arriving through the page transition, wait until its panel starts to lift
        const start = document.documentElement.classList.contains('pt-covered') ? 300 : 100;
        // Find the lines as they wrap here: wrap every word, then group the words by their top edge
        const parts = original.split(/<br\s*\/?>/i);
        h1.innerHTML = parts.map(p => p.trim().split(/\s+/).filter(Boolean).map(w => `<span class="hx-word" style="display:inline-block">${w}</span>`).join(' ')).join('<br>');
        const lines = [];
        let top = null;
        h1.querySelectorAll('.hx-word').forEach(w => {
            if (w.offsetTop !== top) { lines.push([]); top = w.offsetTop; }
            lines[lines.length - 1].push(w.innerHTML);
        });
        h1.innerHTML = lines.map((l, i) => `<span class="hx-line"><span style="animation-delay:${start + i * 140}ms">${l.join(' ')}</span></span>`).join('');
        h1.classList.remove('hx-wait');
        if (label) { label.classList.remove('hx-wait'); label.classList.add('hx-fade'); label.style.animationDelay = `${start}ms`; }
        copy.forEach((p, i) => {
            p.classList.remove('hx-wait');
            p.classList.add('hx-fade');
            p.style.animationDelay = `${start + lines.length * 140 + 150 + i * 120}ms`;
        });
        // Afterwards the heading gets its own markup back, so it wraps freely when the window is resized
        setTimeout(() => { h1.innerHTML = original; }, start + lines.length * 140 + 1100);
    }

    // Measure the lines with the real font, not a fallback (but never wait more than 600ms)
    let done = false;
    const go = () => { if (!done) { done = true; run(); } };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
    setTimeout(go, 600);
})();
