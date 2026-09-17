(() => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((link) => {
    const target = new URL(link.href, location.href).pathname.split('/').pop() || 'index.html';
    if (target === current || (current === 'index.html' && target === '')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
