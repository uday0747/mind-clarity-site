// Published languages. Route availability does not imply a completed linguistic review.
export const languageOptions = [
  { code: 'en', nativeName: 'English', label: 'English' },
  { code: 'te', nativeName: 'తెలుగు', label: 'Telugu' },
  { code: 'ta', nativeName: 'தமிழ்', label: 'Tamil' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', label: 'Kannada' },
  { code: 'ml', nativeName: 'മലയാളം', label: 'Malayalam' },
  { code: 'bn', nativeName: 'বাংলা', label: 'Bengali' },
  { code: 'mr', nativeName: 'मराठी', label: 'Marathi' },
  { code: 'gu', nativeName: 'ગુજરાતી', label: 'Gujarati' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', label: 'Punjabi' },
  { code: 'or', nativeName: 'ଓଡ଼ିଆ', label: 'Odia' },
  { code: 'as', nativeName: 'অসমীয়া', label: 'Assamese' },
  { code: 'ur', nativeName: 'اردو', label: 'Urdu' },
  { code: 'hi', nativeName: 'हिन्दी', label: 'Hindi' },
  { code: 'es', nativeName: 'Español', label: 'Spanish' },
  { code: 'fr', nativeName: 'Français', label: 'French' },
  { code: 'pt', nativeName: 'Português', label: 'Portuguese' },
  { code: 'id', nativeName: 'Bahasa Indonesia', label: 'Indonesian' },
  { code: 'de', nativeName: 'Deutsch', label: 'German' },
  { code: 'it', nativeName: 'Italiano', label: 'Italian' },
  { code: 'ru', nativeName: 'Русский', label: 'Russian' },
  { code: 'ja', nativeName: '日本語', label: 'Japanese' },
  { code: 'ko', nativeName: '한국어', label: 'Korean' },
  { code: 'zh-Hans', nativeName: '简体中文', label: 'Chinese (Simplified)' },
  { code: 'zh-Hant', nativeName: '繁體中文', label: 'Chinese (Traditional)' },
  { code: 'tr', nativeName: 'Türkçe', label: 'Turkish' },
  { code: 'vi', nativeName: 'Tiếng Việt', label: 'Vietnamese' },
  { code: 'pl', nativeName: 'Polski', label: 'Polish' },
  { code: 'nl', nativeName: 'Nederlands', label: 'Dutch' },
  { code: 'sv', nativeName: 'Svenska', label: 'Swedish' },
  { code: 'da', nativeName: 'Dansk', label: 'Danish' },
  { code: 'nb', nativeName: 'Norsk bokmål', label: 'Norwegian Bokmål' },
  { code: 'ro', nativeName: 'Română', label: 'Romanian' },
  { code: 'cs', nativeName: 'Čeština', label: 'Czech' },
  { code: 'ar', nativeName: 'العربية', label: 'Arabic' },
];

export const languagePreferenceKey = 'mind-clarity-language';

export const localizedPageSlugs = new Set([
  'ashtavakra-gita', 'understanding-god',
  'life-problems-and-self-enquiry', 'confidence-self-worth-and-self-enquiry', 'overthinking-worry-and-uncertainty',
  'philosophy', 'practice', 'faq', 'reflections', 'privacy',
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
    const tag = value.toLowerCase();
    const code = tag.split('-')[0] === 'zh'
      ? (/^zh-(?:hant(?:-|$)|tw(?:-|$)|hk(?:-|$)|mo(?:-|$))/.test(tag) ? 'zh-Hant' : 'zh-Hans')
      : tag.split('-')[0] === 'no' ? 'nb' : tag.split('-')[0];
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

