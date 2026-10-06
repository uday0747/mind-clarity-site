// Progressive enhancement: reading, links and disclosures work without JavaScript.
export function enhanceNavigation(header) {
  if (!header || header.classList.contains('is-enhanced')) return;
  const button = header.querySelector('.menu-toggle');
  const nav = header.querySelector('nav');
  const mobile = window.matchMedia('(max-width: 900px)');
  let lastFocused = document.activeElement;
  const rememberFocus = event => { lastFocused = event.target; };
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
    // Some browsers blur a newly hidden element before firing the media change.
    const focused = document.activeElement === document.body ? lastFocused : document.activeElement;
    if (mobile.matches && nav.contains(focused)) button.focus();
    else if (!mobile.matches && focused === button) nav.querySelector('a[aria-current="page"], a').focus();
    setOpen(false);
  };
  button.addEventListener('click', toggle);
  header.addEventListener('focusout', leave);
  nav.addEventListener('click', navigate);
  document.addEventListener('keydown', escape);
  document.addEventListener('click', outside);
  document.addEventListener('focusin', rememberFocus);
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
    document.removeEventListener('focusin', rememberFocus);
    mobile.removeEventListener('change', resize);
    header.classList.remove('is-enhanced');
    setOpen(false);
  };
}
