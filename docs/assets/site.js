(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const parts = window.location.pathname.split('/').filter(Boolean);
  const current = parts[parts.length - 1] && parts[parts.length - 1].includes('.') ? parts[parts.length - 1] : 'index.html';
  const locale = parts.includes('fr') ? 'fr' : (parts.includes('es') ? 'es' : 'en');

  const labels = {
    en: { home: 'Home', use: 'Use RLB', understand: 'Understand RLB', builds: 'Builds', about: 'About' },
    fr: { home: 'Accueil', use: 'Utiliser RLB', understand: 'Comprendre RLB', builds: 'Versions', about: 'À propos' },
    es: { home: 'Inicio', use: 'Usar RLB', understand: 'Entender RLB', builds: 'Versiones', about: 'Acerca de' }
  }[locale];

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
  const translatedPages = new Set(['index.html','use-rlb.html','understand-rlb.html','builds.html','about.html']);

  if (links) {
    links.innerHTML = '';

    const addLink = (href, text, active, className) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = text;
      if (className) a.className = className;
      if (active) a.setAttribute('aria-current', 'page');
      links.appendChild(a);
    };

    addLink('./', labels.home, current === 'index.html');
    addLink('use-rlb.html', labels.use, usePages.has(current));
    addLink('understand-rlb.html', labels.understand, understandPages.has(current));
    addLink('builds.html', labels.builds, current === 'builds.html' || /^(batocera|recalbox|retropie|lakka)-build\.html$/.test(current));
    addLink('about.html', labels.about, current === 'about.html');

    const divider = document.createElement('span');
    divider.textContent = '│';
    divider.setAttribute('aria-hidden', 'true');
    divider.style.opacity = '0.45';
    divider.style.alignSelf = 'center';
    links.appendChild(divider);

    const localizedTarget = translatedPages.has(current) ? current : 'index.html';
    const enHref = locale === 'en' ? (current === 'index.html' ? './' : current) : `../${localizedTarget === 'index.html' ? '' : localizedTarget}`;
    const frHref = locale === 'fr' ? (current === 'index.html' ? './' : current) : (locale === 'en' ? `fr/${localizedTarget === 'index.html' ? '' : localizedTarget}` : `../fr/${localizedTarget === 'index.html' ? '' : localizedTarget}`);
    const esHref = locale === 'es' ? (current === 'index.html' ? './' : current) : (locale === 'en' ? `es/${localizedTarget === 'index.html' ? '' : localizedTarget}` : `../es/${localizedTarget === 'index.html' ? '' : localizedTarget}`);

    addLink(enHref, 'EN', locale === 'en', 'language-link');
    addLink(frHref, 'FR', locale === 'fr', 'language-link');
    addLink(esHref, 'ES', locale === 'es', 'language-link');
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
