// Hero heading animation, used on every page with a big heading in #hero.
// Load it at the end of <body> (not deferred), so the heading is prepared before the page is drawn.
// Off for reduced motion. To remove it from a page, delete that page's <script src="assets/js/hero-fade.js">.
//
// CENTRE_FIRST = true (since 2026-11-16, an experiment):
//   1. the heading appears alone, centred across the hero on the height where it ends up, line by line
//   2. it glides left to its place, each line going from centred to left-aligned
//   3. the label above it and the text beside it (.hero-copy) fade in
//   4. then the buttons
// CENTRE_FIRST = false: the earlier version. The heading fades in line by line where it stands, and the label
//   and text fade in after. To drop the experiment, set it to false and bump hero-fade.js?v= on the pages.
const CENTRE_FIRST = true;

(function heroFadeIn() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = document.getElementById('hero');
    const h1 = hero && hero.querySelector('h1');
    // Only plain text and <br> in the heading; anything else is left alone
    if (!h1 || [...h1.children].some(el => el.tagName !== 'BR')) return;

    const LINE_MS = CENTRE_FIRST ? 900 : 1000, LINE_GAP = CENTRE_FIRST ? 160 : 140;
    const HOLD_MS = 600, MOVE_MS = 1100, BUTTON_GAP = 550;
    const style = document.createElement('style');
    style.textContent = `
        .hx-wait { visibility: hidden; }
        .hx-line { display: block; overflow: hidden; overflow: visible clip; padding-bottom: 0.1em; margin-bottom: -0.1em; }
        .hx-line > span { display: ${CENTRE_FIRST ? 'inline-block' : 'block'}; animation: hx-up ${LINE_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        @keyframes hx-up { from { transform: translateY(105%); opacity: 0; } to { transform: none; opacity: 1; } }
        .hx-fade { animation: hx-fade ${CENTRE_FIRST ? 800 : 900}ms ease-out both; }
        @keyframes hx-fade { from { opacity: 0; transform: translateY(${CENTRE_FIRST ? 14 : 12}px); } to { opacity: 1; transform: none; } }
    `;
    document.head.appendChild(style);

    const original = h1.innerHTML;
    const label = h1.previousElementSibling;
    const copy = [...hero.querySelectorAll('.hero-copy > *')];
    const hasButton = el => el.matches('a, button') || !!el.querySelector('a, button');
    h1.classList.add('hx-wait');
    if (label) label.classList.add('hx-wait');
    copy.forEach(p => p.classList.add('hx-wait'));

    function fadeIn(el, at) {
        el.classList.remove('hx-wait');
        el.classList.add('hx-fade');
        el.style.animationDelay = `${at}ms`;
    }

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
        h1.innerHTML = lines.map((l, i) => `<span class="hx-line"><span style="animation-delay:${start + i * LINE_GAP}ms">${l.join(' ')}</span></span>`).join('');
        const linesDone = start + (lines.length - 1) * LINE_GAP + LINE_MS;
        let restoreAt;

        if (CENTRE_FIRST) {
            // The pages' fit-text script leaves a heading with this class alone (the shifted lines would look like overflow)
            h1.classList.add('hx-moving');
            // Centre each line on the widest, and the whole heading across the hero (only sideways)
            const rows = [...h1.querySelectorAll('.hx-line')];
            const widths = rows.map(r => r.firstElementChild.getBoundingClientRect().width);
            const widest = Math.max(...widths);
            rows.forEach((r, i) => { r.style.transform = `translateX(${(widest - widths[i]) / 2}px)`; });
            const hb = hero.getBoundingClientRect(), b = h1.getBoundingClientRect();
            h1.style.transform = `translateX(${(hb.left + hb.width / 2) - (b.left + widest / 2)}px)`;
            h1.classList.remove('hx-wait');
            // Glide to the left
            const moveAt = linesDone + HOLD_MS;
            setTimeout(() => {
                [h1, ...rows].forEach(el => { el.style.transition = `transform ${MOVE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`; el.style.transform = 'none'; });
            }, moveAt);
            // Label and text, then the buttons
            const textAt = moveAt + MOVE_MS - 150;
            if (label) fadeIn(label, textAt);
            copy.forEach(p => fadeIn(p, hasButton(p) ? textAt + BUTTON_GAP : textAt));
            restoreAt = moveAt + MOVE_MS + 100;
        } else {
            h1.classList.remove('hx-wait');
            if (label) fadeIn(label, start);
            copy.forEach((p, i) => fadeIn(p, start + lines.length * LINE_GAP + 150 + i * 120));
            restoreAt = linesDone + 100;
        }

        // Afterwards the heading gets its own markup back, so it wraps freely when the window is resized
        // (and the pages' fit-text script measures it again, so a long word that is too wide still shrinks)
        setTimeout(() => {
            h1.innerHTML = original;
            h1.style.transform = h1.style.transition = '';
            h1.classList.remove('hx-moving');
            window.dispatchEvent(new Event('resize'));
        }, restoreAt);
    }

    // Measure the lines with the real font, not a fallback (but never wait more than 600ms)
    let done = false;
    const go = () => { if (!done) { done = true; afterIntro(run); } };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
    setTimeout(go, 600);

    // On the first visit to the front page the splash intro (intro.js) covers the page for about 1.3s.
    // Wait until it lifts (html loses its "intro" class), so the heading animates where it can be seen
    function afterIntro(fn) {
        const root = document.documentElement;
        if (!root.classList.contains('intro')) { fn(); return; }
        const watch = new MutationObserver(() => {
            if (root.classList.contains('intro')) return;
            watch.disconnect();
            setTimeout(fn, 150);
        });
        watch.observe(root, { attributes: true, attributeFilter: ['class'] });
    }
})();
