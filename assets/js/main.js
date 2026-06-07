/* ═══════════════════════════════════════════
   THEME — Dark / Light toggle
   ═══════════════════════════════════════════ */

/**
 * Initialise theme on page load.
 * Called from an inline <script> in <head> (before paint)
 * so users never see a flash of the wrong theme.
 *
 * Priority:  localStorage  →  OS preference  →  light
 */
function initTheme() {
  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

/** Toggle between light ↔ dark and persist the choice. */
function toggleTheme() {
  var html = document.documentElement;
  var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}


/* ═══════════════════════════════════════════
   MOBILE NAVIGATION — hamburger menu
   ═══════════════════════════════════════════ */

function toggleMenu() {
  var navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('closed');
}


/* ═══════════════════════════════════════════
   PUBLICATIONS — expand / collapse
   ═══════════════════════════════════════════ */

/**
 * Toggle an abstract or BibTeX block inside a publication item.
 *
 * @param {HTMLElement} btn  – the button that was clicked
 * @param {string}      type – 'abs' or 'bib'
 */
function toggleEl(btn, type) {
  var item = btn.closest('.pub-item');
  if (!item) return;
  var cls = type === 'abs' ? 'pub-abstract' : 'pub-bibtex';
  var el  = item.querySelector('.' + cls);
  if (el) el.classList.toggle('open');
}


/* ═══════════════════════════════════════════
   ABOUT — load bio text from content/about.txt
   ═══════════════════════════════════════════ */

function renderAboutContent(container, html) {
  container.innerHTML = html;
}

function loadAboutContent() {
  var container = document.getElementById('about-content');
  if (!container) return;

  var fallback = window.ABOUT_HTML;
  var canFetch = location.protocol === 'http:' || location.protocol === 'https:';

  if (!canFetch) {
    if (fallback) renderAboutContent(container, fallback);
    else container.innerHTML = '<p>Unable to load about text.</p>';
    return;
  }

  fetch(new URL('content/about.txt', location.href))
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load about text');
      return res.text();
    })
    .then(function (html) {
      renderAboutContent(container, html);
    })
    .catch(function () {
      if (fallback) renderAboutContent(container, fallback);
      else container.innerHTML = '<p>Unable to load about text.</p>';
    });
}


/* ═══════════════════════════════════════════
   FADE-IN ON SCROLL  (IntersectionObserver)
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  loadAboutContent();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
