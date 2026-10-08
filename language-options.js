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
    hi: '/hi/ai-fear-and-clarity',
    es: '/es/ai-fear-and-clarity',
    fr: '/fr/ai-fear-and-clarity',
  },
  'ai-fear-and-clarity-telugu': {
    en: '/ai-fear-and-clarity',
    te: '/ai-fear-and-clarity-telugu',
  },
  'hi/ai-fear-and-clarity': {
    en: '/ai-fear-and-clarity', te: '/ai-fear-and-clarity-telugu', hi: '/hi/ai-fear-and-clarity', es: '/es/ai-fear-and-clarity', fr: '/fr/ai-fear-and-clarity',
  },
  'es/ai-fear-and-clarity': {
    en: '/ai-fear-and-clarity', te: '/ai-fear-and-clarity-telugu', hi: '/hi/ai-fear-and-clarity', es: '/es/ai-fear-and-clarity', fr: '/fr/ai-fear-and-clarity',
  },
  'fr/ai-fear-and-clarity': {
    en: '/ai-fear-and-clarity', te: '/ai-fear-and-clarity-telugu', hi: '/hi/ai-fear-and-clarity', es: '/es/ai-fear-and-clarity', fr: '/fr/ai-fear-and-clarity',
  },
};

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
  const localized = path.match(/^\/(hi|es|fr)(?:\/|$)/);
  return localized?.[1] || (path.endsWith('-telugu') ? 'te' : 'en');
}

export function languageVariants(pathname = '/') {
  const path = normalizedPath(pathname).replace(/\.html$/, '') || '/';
  const page = path.replace(/^\//, '');
  if (variants[path] || variants[page]) return variants[path] || variants[page];
  const localizedRoute = path.match(/^\/(hi|es|fr)\/(.+)$/);
  const basePage = localizedRoute?.[2];
  if (localizedPageSlugs.has(basePage) || localizedPageSlugs.has(page)) {
    const sourcePage = basePage || page;
    return { en: localizedPath('en', sourcePage), hi: localizedPath('hi', sourcePage), es: localizedPath('es', sourcePage), fr: localizedPath('fr', sourcePage) };
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

export const interfaceCopy = {
  en: {
    language: 'Language', chooseLanguage: 'Choose language', skip: 'Skip to content', mainNav: 'Main navigation', menu: 'Menu', openMenu: 'Open menu', closeMenu: 'Close menu',
    browserPrefers: 'Your browser prefers', openIn: 'Open this page in', currentlyAvailable: current => `This page is currently available in ${current}; reviewed translations are being added.`,
    nav: { home: 'Begin here', philosophy: 'Philosophy', practice: 'Daily practice', faq: 'Questions', reflections: 'Reflections' },
    labels: { home: 'Begin here', philosophy: 'Philosophy', practice: 'Daily practice', faq: 'Questions', reflections: 'Reflections' },
    more: 'More reviewed translations are being added.',
    footerPurpose: 'Remembering the Creator within the game of experiences.',
    youtube: 'Mind Clarity on YouTube', email: 'Email', privacy: 'Privacy', conversation: 'Optional conversation',
    copyright: '© 2026 Mind Clarity · Spiritual reflection and education.',
  },
  hi: {
    language: 'भाषा', chooseLanguage: 'भाषा चुनें', skip: 'सामग्री पर जाएँ', mainNav: 'मुख्य नेविगेशन', menu: 'मेनू', openMenu: 'मेनू खोलें', closeMenu: 'मेनू बंद करें',
    browserPrefers: 'आपके ब्राउज़र की पसंद', openIn: 'यह पृष्ठ इसमें खोलें', currentlyAvailable: current => `यह पृष्ठ अभी ${current} में उपलब्ध है; समीक्षित अनुवाद जोड़े जा रहे हैं।`,
    nav: { home: 'शुरुआत यहाँ से', philosophy: 'दर्शन', practice: 'दैनिक अभ्यास', faq: 'प्रश्न', reflections: 'चिन्तन' },
    labels: { home: 'शुरुआत यहाँ से', philosophy: 'दर्शन', practice: 'दैनिक अभ्यास', faq: 'प्रश्न', reflections: 'चिन्तन' },
    more: 'अधिक समीक्षित अनुवाद जोड़े जा रहे हैं।',
    footerPurpose: 'अनुभवों के खेल में सृष्टिकर्ता को स्मरण करना।',
    youtube: 'YouTube पर Mind Clarity', email: 'ईमेल', privacy: 'गोपनीयता', conversation: 'वैकल्पिक बातचीत',
    copyright: '© 2026 Mind Clarity · आध्यात्मिक चिन्तन और शिक्षा।',
  },
  es: {
    language: 'Idioma', chooseLanguage: 'Elegir idioma', skip: 'Ir al contenido', mainNav: 'Navegación principal', menu: 'Menú', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
    browserPrefers: 'Tu navegador prefiere', openIn: 'Abrir esta página en', currentlyAvailable: current => `Esta página está disponible en ${current}; estamos incorporando traducciones revisadas.`,
    nav: { home: 'Comenzar aquí', philosophy: 'Filosofía', practice: 'Práctica diaria', faq: 'Preguntas', reflections: 'Reflexiones' },
    labels: { home: 'Comenzar aquí', philosophy: 'Filosofía', practice: 'Práctica diaria', faq: 'Preguntas', reflections: 'Reflexiones' },
    more: 'Estamos incorporando más traducciones revisadas.',
    footerPurpose: 'Recordar al Creador dentro del juego de las experiencias.',
    youtube: 'Mind Clarity en YouTube', email: 'Correo electrónico', privacy: 'Privacidad', conversation: 'Conversación opcional',
    copyright: '© 2026 Mind Clarity · Reflexión espiritual y educación.',
  },
  fr: {
    language: 'Langue', chooseLanguage: 'Choisir la langue', skip: 'Aller au contenu', mainNav: 'Navigation principale', menu: 'Menu', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu',
    browserPrefers: 'Votre navigateur préfère', openIn: 'Ouvrir cette page en', currentlyAvailable: current => `Cette page est actuellement disponible en ${current} ; d’autres traductions relues sont en préparation.`,
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
