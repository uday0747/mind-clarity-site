// Languages with a complete, reviewed page set are added here. Keep the list
// small until every translated page preserves the meaning of the teaching.
export const languageOptions = [
  { code: 'en', nativeName: 'English', label: 'English' },
  { code: 'te', nativeName: 'తెలుగు', label: 'Telugu' },
  { code: 'hi', nativeName: 'हिन्दी', label: 'Hindi' },
  { code: 'es', nativeName: 'Español', label: 'Spanish' },
  { code: 'fr', nativeName: 'Français', label: 'French' },
];

export const languagePreferenceKey = 'mind-clarity-language';

const variants = {
  '/': { en: '/', hi: '/hi', es: '/es', fr: '/fr' },
  '/hi': { en: '/', hi: '/hi', es: '/es', fr: '/fr' },
  '/es': { en: '/', hi: '/hi', es: '/es', fr: '/fr' },
  '/fr': { en: '/', hi: '/hi', es: '/es', fr: '/fr' },
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
  const path = normalizedPath(pathname);
  const localized = path.match(/^\/(hi|es|fr)(?:\/|$)/);
  return localized?.[1] || (path.endsWith('-telugu') ? 'te' : 'en');
}

export function languageVariants(pathname = '/') {
  const path = normalizedPath(pathname).replace(/\.html$/, '') || '/';
  const page = path.replace(/^\//, '');
  return variants[path] || variants[page] || { en: normalizedPath(pathname) };
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

export const interfaceCopy = {
  en: {
    language: 'Language', skip: 'Skip to content', mainNav: 'Main navigation', menu: 'Menu', openMenu: 'Open menu', closeMenu: 'Close menu',
    nav: { home: 'Begin here', philosophy: 'Philosophy', practice: 'Daily practice', faq: 'Questions', reflections: 'Reflections' },
    labels: { home: 'Begin here', philosophy: 'Philosophy', practice: 'Daily practice', faq: 'Questions', reflections: 'Reflections' },
    more: 'More reviewed translations are being added.',
    footerPurpose: 'Remembering the Creator within the game of experiences.',
    youtube: 'Mind Clarity on YouTube', email: 'Email', privacy: 'Privacy', conversation: 'Optional conversation',
    copyright: '© 2026 Mind Clarity · Spiritual reflection and education.',
  },
  hi: {
    language: 'भाषा', skip: 'सामग्री पर जाएँ', mainNav: 'मुख्य नेविगेशन', menu: 'मेनू', openMenu: 'मेनू खोलें', closeMenu: 'मेनू बंद करें',
    nav: { home: 'शुरुआत यहाँ से', philosophy: 'दर्शन', practice: 'दैनिक अभ्यास', faq: 'प्रश्न', reflections: 'चिन्तन' },
    labels: { home: 'शुरुआत यहाँ से', philosophy: 'दर्शन', practice: 'दैनिक अभ्यास', faq: 'प्रश्न', reflections: 'चिन्तन' },
    more: 'अधिक समीक्षित अनुवाद जोड़े जा रहे हैं।',
    footerPurpose: 'अनुभवों के खेल में सृष्टिकर्ता को स्मरण करना।',
    youtube: 'YouTube पर Mind Clarity', email: 'ईमेल', privacy: 'गोपनीयता', conversation: 'वैकल्पिक बातचीत',
    copyright: '© 2026 Mind Clarity · आध्यात्मिक चिन्तन और शिक्षा।',
  },
  es: {
    language: 'Idioma', skip: 'Ir al contenido', mainNav: 'Navegación principal', menu: 'Menú', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
    nav: { home: 'Comenzar aquí', philosophy: 'Filosofía', practice: 'Práctica diaria', faq: 'Preguntas', reflections: 'Reflexiones' },
    labels: { home: 'Comenzar aquí', philosophy: 'Filosofía', practice: 'Práctica diaria', faq: 'Preguntas', reflections: 'Reflexiones' },
    more: 'Estamos incorporando más traducciones revisadas.',
    footerPurpose: 'Recordar al Creador dentro del juego de las experiencias.',
    youtube: 'Mind Clarity en YouTube', email: 'Correo electrónico', privacy: 'Privacidad', conversation: 'Conversación opcional',
    copyright: '© 2026 Mind Clarity · Reflexión espiritual y educación.',
  },
  fr: {
    language: 'Langue', skip: 'Aller au contenu', mainNav: 'Navigation principale', menu: 'Menu', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
    nav: { home: 'Commencer ici', philosophy: 'Philosophie', practice: 'Pratique quotidienne', faq: 'Questions', reflections: 'Réflexions' },
    labels: { home: 'Commencer ici', philosophy: 'Philosophie', practice: 'Pratique quotidienne', faq: 'Questions', reflections: 'Réflexions' },
    more: 'D’autres traductions relues sont en préparation.',
    footerPurpose: 'Se souvenir du Créateur au sein du jeu des expériences.',
    youtube: 'Mind Clarity sur YouTube', email: 'E-mail', privacy: 'Confidentialité', conversation: 'Conversation facultative',
    copyright: '© 2026 Mind Clarity · Réflexion spirituelle et éducation.',
  },
};

export function interfaceFor(code = 'en') {
  return interfaceCopy[code] || interfaceCopy.en;
}
