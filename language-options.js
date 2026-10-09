// Published languages. Route availability does not imply a completed linguistic review.
export const languageOptions = [
  { code: 'en', nativeName: 'English', label: 'English' },
  { code: 'te', nativeName: 'తెలుగు', label: 'Telugu' },
  { code: 'hi', nativeName: 'हिन्दी', label: 'Hindi' },
  { code: 'es', nativeName: 'Español', label: 'Spanish' },
  { code: 'fr', nativeName: 'Français', label: 'French' },
  { code: 'pt', nativeName: 'Português', label: 'Portuguese' },
  { code: 'id', nativeName: 'Bahasa Indonesia', label: 'Indonesian' },
  { code: 'ar', nativeName: 'العربية', label: 'Arabic' },
];

export const languagePreferenceKey = 'mind-clarity-language';

export const localizedPageSlugs = new Set([
  'philosophy', 'practice', 'faq', 'reflections', 'privacy', 'consultation-info',
  'who-am-i-self-enquiry', 'surrender-free-will-and-design', 'meditation-and-self-realization', 'guilt-responsibility-and-boundaries', 'ai-fear-and-clarity',
]);

export function localizedPath(language, page = '') {
  if (language === 'en') return page ? `/${page}` : '/';
  return page ? `/${language}/${page}` : `/${language}`;
}

export function normalizedPath(pathname = '/') {
  const path = pathname.replace(/\/+$/, '');
  return path || '/';
}

export function pageLanguage(pathname = '/') {
  const path = normalizedPath(pathname);
  const code = path.split('/')[1];
  return languageOptions.some(option => option.code === code) ? code : path.endsWith('-telugu') ? 'te' : 'en';
}

export function languageVariants(pathname = '/') {
  const path = normalizedPath(pathname).replace(/\.html$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (languageOptions.some(option => option.code === parts[0])) parts.shift();
  let page = parts.join('/');
  if (page === 'ai-fear-and-clarity-telugu') page = 'ai-fear-and-clarity';
  if (!page || localizedPageSlugs.has(page)) {
    return Object.fromEntries(languageOptions.map(option => [option.code,
      option.code === 'te' && page === 'ai-fear-and-clarity'
        ? '/ai-fear-and-clarity-telugu' : localizedPath(option.code, page)]));
  }
  return { en: normalizedPath(pathname) };
}

export function languageOption(code) {
  return languageOptions.find(option => option.code === code) || languageOptions[0];
}

export function browserLanguage() {
  if (typeof navigator === 'undefined') return 'en';
  const languages = [...(navigator.languages || []), navigator.language].filter(Boolean);
  for (const value of languages) {
    const code = value.toLowerCase().split('-')[0];
    if (languageOptions.some(option => option.code === code)) return code;
  }
  return 'en';
}

export function storedLanguage() {
  if (typeof localStorage === 'undefined') return null;
  try {
    const value = localStorage.getItem(languagePreferenceKey);
    return languageOptions.some(option => option.code === value) ? value : null;
  } catch {
    return null;
  }
}

export function storeLanguage(code) {
  if (typeof localStorage === 'undefined') return;
  try { localStorage.setItem(languagePreferenceKey, code); } catch { /* private browsing */ }
}

