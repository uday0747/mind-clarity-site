(() => {
  const markCurrentPage = () => {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach((link) => {
      const target = new URL(link.href, location.href).pathname.split('/').pop() || 'index.html';
      const active = target === current || (current === 'index.html' && target === '');
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };
  markCurrentPage();
  const observer = new MutationObserver(markCurrentPage);
  observer.observe(document.body, { childList: true, subtree: true });
  window.setTimeout(() => observer.disconnect(), 5000);
})();
