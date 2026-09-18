// Progressive enhancement: reading, links and disclosures work without JavaScript.
export function enhanceNavigation(header) {
  if (!header || header.classList.contains('is-enhanced')) return;
  const button = header.querySelector('.menu-toggle');
  const nav = header.querySelector('nav');
  const mobile = window.matchMedia('(max-width: 760px)');
  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    button.textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
  };
  const toggle = () => setOpen(button.getAttribute('aria-expanded') !== 'true');
  const escape = (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  };
  const outside = (event) => { if (!header.contains(event.target)) setOpen(false); };
  const leave = (event) => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) setOpen(false);
  };
  const navigate = (event) => { if (event.target.closest('a')) setOpen(false); };
  const resize = () => {
    if (mobile.matches && nav.contains(document.activeElement)) button.focus();
    setOpen(false);
  };
  button.addEventListener('click', toggle);
  header.addEventListener('focusout', leave);
  nav.addEventListener('click', navigate);
  document.addEventListener('keydown', escape);
  document.addEventListener('click', outside);
  mobile.addEventListener('change', resize);
  header.classList.add('is-enhanced');
  // Keep fragment targets visible when text enlargement changes the sticky header.
  const measure = () => document.documentElement.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  const observer = new ResizeObserver(measure);
  observer.observe(header);
  measure();
  return () => {
    observer.disconnect();
    document.documentElement.style.removeProperty('--header-height');
    button.removeEventListener('click', toggle);
    header.removeEventListener('focusout', leave);
    nav.removeEventListener('click', navigate);
    document.removeEventListener('keydown', escape);
    document.removeEventListener('click', outside);
    mobile.removeEventListener('change', resize);
    header.classList.remove('is-enhanced');
    setOpen(false);
  };
}
