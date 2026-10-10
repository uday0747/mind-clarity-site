// Progressive enhancement: reading, links and disclosures work without JavaScript.
import { browserLanguage, languageOption, storeLanguage, storedLanguage } from './language-options.js';

export function enhanceNavigation(header) {
  if (!header || header.classList.contains('is-enhanced')) return;
  const button = header.querySelector('.menu-toggle');
  const nav = header.querySelector('nav');
  const mobile = window.matchMedia('(max-width: 900px)');
  const menuLabel = button.dataset.menuLabel || 'Menu';
  const openLabel = button.dataset.openLabel || 'Open menu';
  const closeLabel = button.dataset.closeLabel || 'Close menu';
  let lastFocused = document.activeElement;
  const rememberFocus = event => { lastFocused = event.target; };
  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? closeLabel : openLabel);
    button.textContent = open ? closeLabel : menuLabel;
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

export function enhanceLanguagePicker() {
  const select = document.querySelector('#language-select');
  if (!select) return;
  const suggestion = document.querySelector('#language-suggestion');
  const current = select.dataset.currentLanguage || select.value || 'en';
  const browserPrefers = select.dataset.browserPrefers || 'Your browser prefers';
  const openIn = select.dataset.openIn || 'Open this page in';
  const currentlyAvailable = currentName => (select.dataset.currentlyAvailable || 'This page is currently available in __LANGUAGE__; reviewed translations are being added.').replace('__LANGUAGE__', currentName);
  const options = [...select.options];
  const stored = storedLanguage();
  const preferred = stored || browserLanguage();
  const target = options.find(option => option.value === preferred && option.value !== current && option.dataset.href);

  // Negotiate ordinary English entry pages. Explicit translated URLs stay
  // readable in their own language, including arrivals from search results.
  // A saved English choice also lets visitors override browser detection.
  if (current === 'en' && target) {
    window.location.replace(target.dataset.href + window.location.search + window.location.hash);
    return;
  }

  if (suggestion && preferred !== current) {
    const language = languageOption(preferred);
    if (target) {
      suggestion.textContent = `${browserPrefers} ${language.nativeName}. `;
      const link = document.createElement('a');
      link.href = target.dataset.href + window.location.search + window.location.hash;
      link.textContent = `${openIn} ${language.nativeName}`;
      suggestion.append(link);
    } else {
      const currentName = languageOption(current).nativeName;
      suggestion.textContent = `${browserPrefers} ${language.nativeName}. ${currentlyAvailable(currentName)}`;
    }
    suggestion.hidden = false;
  }

  const change = () => {
    const option = select.selectedOptions[0];
    if (!option) return;
    storeLanguage(option.value);
    if (option.dataset.href && option.dataset.href !== window.location.pathname) {
      window.location.assign(option.dataset.href + window.location.search + window.location.hash);
    }
  };
  select.addEventListener('change', change);
  return () => select.removeEventListener('change', change);
}
