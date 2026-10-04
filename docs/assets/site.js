(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (links && !links.querySelector('a[href="builds.html"]')) {
    const builds = document.createElement('a');
    builds.href = 'builds.html';
    builds.textContent = 'Builds';
    const current = window.location.pathname.split('/').pop();
    if (current === 'builds.html' || /^(batocera|recalbox|retropie|lakka)-build\.html$/.test(current)) {
      builds.setAttribute('aria-current', 'page');
    }
    const about = links.querySelector('a[href="about.html"]');
    if (about) links.insertBefore(builds, about);
    else links.appendChild(builds);
  }

  if (links && !links.querySelector('a[href="capabilities.html"]')) {
    const capabilities = document.createElement('a');
    capabilities.href = 'capabilities.html';
    capabilities.textContent = 'Capabilities';
    const current = window.location.pathname.split('/').pop();
    if (current === 'capabilities.html' || current === 'home-dashboard.html') {
      capabilities.setAttribute('aria-current', 'page');
    }
    const about = links.querySelector('a[href="about.html"]');
    if (about) links.insertBefore(capabilities, about);
    else links.appendChild(capabilities);
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
