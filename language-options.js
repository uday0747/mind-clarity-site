// Languages with a complete, reviewed page set are added here. Keep the list
// small until every translated page preserves the meaning of the teaching.
export const languageOptions = [
  { code: 'en', nativeName: 'English', label: 'English' },
  { code: 'te', nativeName: 'తెలుగు', label: 'Telugu' },
];

export const languagePreferenceKey = 'mind-clarity-language';

const variants = {
  'ai-fear-and-clarity': {
    en: '/ai-fear-and-clarity',
    te: '/ai-fear-and-clarity-telugu',
  },
  'ai-fear-and-clarity-telugu': {
    en: '/ai-fear-and-clarity',
    te: '/ai-fear-and-clarity-telugu',
  },
};

export function normalizedPath(pathname = '/') {
  const path = pathname.replace(/\/+$/, '');
  return path || '/';
}

export function pageLanguage(pathname = '/') {
  return normalizedPath(pathname).endsWith('-telugu') ? 'te' : 'en';
}

export function languageVariants(pathname = '/') {
  const page = normalizedPath(pathname).replace(/^\//, '').replace(/\.html$/, '');
  return variants[page] || { en: normalizedPath(pathname) };
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
