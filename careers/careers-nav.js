// CAREERS LEFT MENU
// The pages of the careers area, in menu order, grouped under small headings. Uses the docs menu
// look (docs/docs.css). A new page (for example a job) is added here and gets its own .html file
// in the careers folder.
//   title  shown in the menu
//   file   the page's file in the careers folder
const docsMenu = [
    {
        group: "",   // no heading over Home, but the space is kept so Home stays where it is
        pages: [
            { title: "Home", file: "index.html" }
        ]
    },
    {
        group: "Jobs",
        pages: [
            { title: "Browse jobs", file: "jobs.html" },
            { title: "Game Artist Intern", file: "game-artist-intern.html" },
            { title: "AI Intern", file: "ai-intern.html" }
        ]
    }
];

// Draws the menu into #docsNav and marks the page you are on. On phones the menu folds into a
// "Docs menu" button above the page text (see docs.css).
(function () {
    const nav = document.getElementById('docsNav');
    if (!nav) return;
    const here = location.pathname.split('/').pop() || 'index.html';
    const esc = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    nav.innerHTML = docsMenu.map(g => `
        <div class="docs-nav-group">
            <span class="docs-nav-heading"${g.group ? '' : ' style="visibility: hidden" aria-hidden="true"'}>${g.group ? esc(g.group) : '&nbsp;'}</span>
            ${g.pages.map(p => `<a href="${esc(p.file)}" class="docs-nav-link${p.file === here ? ' is-current' : ''}"${p.file === here ? ' aria-current="page"' : ''}>${esc(p.title)}</a>`).join('')}
        </div>`).join('');
    // A closed <details> hides its menu, so on big screens (no fold-out) it is kept open
    const fold = nav.closest('details');
    const wide = window.matchMedia('(min-width: 1024px)');
    const syncFold = () => { if (fold) fold.open = wide.matches; };
    syncFold();
    wide.addEventListener('change', syncFold);
    const current = docsMenu.flatMap(g => g.pages).find(p => p.file === here);
    const label = document.getElementById('docsNavLabel');
    if (label && current) label.textContent = current.title;
})();
