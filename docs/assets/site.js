(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (links) {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const usePages = new Set([
      'use-rlb.html','getting-started.html','guides.html','protect-original-sd.html',
      'resume-protection.html','reconcile-retained-content.html','r36-max-walkthrough.html'
    ]);
    const understandPages = new Set([
      'understand-rlb.html','workspaces.html','preservation.html','knowledge.html',
      'knowledge-sources.html','knowledge-explorer.html','capabilities.html','home-dashboard.html',
      'device-readiness.html','deployment.html','bios-manager.html','library-health.html',
      'import.html','review.html','library.html','media.html'
    ]);

    links.innerHTML = '';

    const addLink = (href, text, active) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = text;
      if (active) a.setAttribute('aria-current', 'page');
      links.appendChild(a);
    };

    addLink('./', 'Home', current === '' || current === 'index.html');
    addLink('use-rlb.html', 'Use RLB', usePages.has(current));
    addLink('understand-rlb.html', 'Understand RLB', understandPages.has(current));
    addLink('builds.html', 'Builds', current === 'builds.html' || /^(batocera|recalbox|retropie|lakka)-build\.html$/.test(current));
    addLink('about.html', 'About', current === 'about.html');
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
