// Published languages. Route availability does not imply a completed linguistic review.
export const languageOptions = [
  { code: 'en', nativeName: 'English', label: 'English' },
  { code: 'te', nativeName: 'తెలుగు', label: 'Telugu' },
  { code: 'hi', nativeName: 'हिन्दी', label: 'Hindi' },
  { code: 'es', nativeName: 'Español', label: 'Spanish' },
  { code: 'fr', nativeName: 'Français', label: 'French' },
];

export const languagePreferenceKey = 'mind-clarity-language';

const variants = {
  '/': { en: '/', te: '/te', hi: '/hi', es: '/es', fr: '/fr' },
  '/te': { en: '/', te: '/te', hi: '/hi', es: '/es', fr: '/fr' },
  '/hi': { en: '/', te: '/te', hi: '/hi', es: '/es', fr: '/fr' },
  '/es': { en: '/', te: '/te', hi: '/hi', es: '/es', fr: '/fr' },
  '/fr': { en: '/', te: '/te', hi: '/hi', es: '/es', fr: '/fr' },
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
    hi: '/hi/ai-fear-and-clarity', es: '/es/ai-fear-and-clarity', fr: '/fr/ai-fear-and-clarity',
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
  const localized = path.match(/^\/(hi|es|fr|te)(?:\/|$)/);
  return localized?.[1] || (path.endsWith('-telugu') ? 'te' : 'en');
}

export function languageVariants(pathname = '/') {
  const path = normalizedPath(pathname).replace(/\.html$/, '') || '/';
  const page = path.replace(/^\//, '');
  if (variants[path] || variants[page]) return variants[path] || variants[page];
  const localizedRoute = path.match(/^\/(hi|es|fr|te)\/(.+)$/);
  const basePage = localizedRoute?.[2];
  if (localizedPageSlugs.has(basePage) || localizedPageSlugs.has(page)) {
    const sourcePage = basePage || page;
    return { en: localizedPath('en', sourcePage), te: localizedPath('te', sourcePage), hi: localizedPath('hi', sourcePage), es: localizedPath('es', sourcePage), fr: localizedPath('fr', sourcePage) };
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
    browserPrefers: 'Your browser prefers', openIn: 'Open this page in', currentlyAvailable: current => `This page is currently available in ${current}; translations are being improved.`,
    nav: { home: 'Begin here', philosophy: 'Philosophy', practice: 'Daily practice', faq: 'Questions', reflections: 'Reflections' },
    labels: { home: 'Begin here', philosophy: 'Philosophy', practice: 'Daily practice', faq: 'Questions', reflections: 'Reflections' },
    more: 'More translations are being improved.',
    footerPurpose: 'Remembering the Creator within the game of experiences.',
    youtube: 'Mind Clarity on YouTube', email: 'Email', privacy: 'Privacy', conversation: 'Optional conversation',
    share: { title: 'Share a useful lesson', body: 'If someone comes to mind, send them this page and let them explore at their own pace.', label: 'Link to this page', copy: 'Copy link', email: 'Share by email', help: 'You can select and copy the link. No account is needed to read it.', copied: 'Link copied. Paste it wherever you would like to share it.', fallback: 'Select and copy the link above to share it.' },
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
    share: { title: 'एक उपयोगी सीख साझा करें', body: 'यदि किसी का ध्यान आए, तो यह पृष्ठ उन्हें भेजें और उन्हें अपनी गति से समझने दें।', label: 'इस पृष्ठ का लिंक', copy: 'लिंक कॉपी करें', email: 'ईमेल से साझा करें', help: 'आप लिंक चुनकर कॉपी कर सकते हैं। इसे पढ़ने के लिए किसी खाते की आवश्यकता नहीं है।', copied: 'लिंक कॉपी हो गया। इसे जहाँ चाहें वहाँ पेस्ट करें।', fallback: 'ऊपर दिए लिंक को चुनकर कॉपी करें।' },
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
    share: { title: 'Comparte una enseñanza útil', body: 'Si piensas en alguien, envíale esta página para que pueda explorarla a su propio ritmo.', label: 'Enlace a esta página', copy: 'Copiar enlace', email: 'Compartir por correo', help: 'Puedes seleccionar y copiar el enlace. No necesitas una cuenta para leerlo.', copied: 'Enlace copiado. Pégalo donde quieras compartirlo.', fallback: 'Selecciona y copia el enlace de arriba para compartirlo.' },
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
    share: { title: 'Partager un enseignement utile', body: 'Si quelqu’un vous vient à l’esprit, envoyez-lui cette page pour qu’il puisse l’explorer à son rythme.', label: 'Lien vers cette page', copy: 'Copier le lien', email: 'Partager par e-mail', help: 'Vous pouvez sélectionner et copier le lien. Aucun compte n’est nécessaire pour le lire.', copied: 'Lien copié. Collez-le où vous souhaitez le partager.', fallback: 'Sélectionnez et copiez le lien ci-dessus pour le partager.' },
    copyright: '© 2026 Mind Clarity · Réflexion spirituelle et éducation.',
  },
  te: {
    language: 'భాష', chooseLanguage: 'భాషను ఎంచుకోండి', skip: 'విషయానికి వెళ్లండి', mainNav: 'ప్రధాన నావిగేషన్', menu: 'మెను', openMenu: 'మెనును తెరవండి', closeMenu: 'మెనును మూసివేయండి',
    browserPrefers: 'మీ బ్రౌజర్ ప్రాధాన్యత', openIn: 'ఈ పేజీని ఇందులో తెరవండి', currentlyAvailable: current => `ఈ పేజీ ప్రస్తుతం ${current}లో అందుబాటులో ఉంది; సమీక్షించిన అనువాదాలు జోడించబడుతున్నాయి.`,
    nav: { home: 'ఇక్కడ ప్రారంభించండి', philosophy: 'తత్వం', practice: 'దైనందిన సాధన', faq: 'ప్రశ్నలు', reflections: 'చింతనలు' },
    labels: { home: 'ఇక్కడ ప్రారంభించండి', philosophy: 'తత్వం', practice: 'దైనందిన సాధన', faq: 'ప్రశ్నలు', reflections: 'చింతనలు' },
    more: 'మరిన్ని సమీక్షించిన అనువాదాలు జోడించబడుతున్నాయి.', footerPurpose: 'అనుభవాల ఆటలో సృష్టికర్తను గుర్తుంచుకోవడం.', youtube: 'YouTubeలో Mind Clarity', email: 'ఈమెయిల్', privacy: 'గోప్యత', conversation: 'ఐచ్ఛిక సంభాషణ', copyright: '© 2026 Mind Clarity · ఆధ్యాత్మిక చింతన మరియు విద్య.',
    share: { title: 'ఉపయోగకరమైన పాఠాన్ని పంచుకోండి', body: 'ఎవరైనా గుర్తుకు వస్తే, ఈ పేజీని వారికి పంపి తమ వేగంతో అన్వేషించనివ్వండి.', label: 'ఈ పేజీ లింక్', copy: 'లింక్ కాపీ చేయండి', email: 'ఈమెయిల్ ద్వారా పంచుకోండి', help: 'మీరు లింక్‌ను ఎంచుకుని కాపీ చేయవచ్చు. చదవడానికి ఖాతా అవసరం లేదు.', copied: 'లింక్ కాపీ అయింది. ఎక్కడ కావాలంటే అక్కడ పేస్ట్ చేయండి.', fallback: 'పంచుకోవడానికి పై లింక్‌ను ఎంచుకుని కాపీ చేయండి.' },
  },
};

export function interfaceFor(code = 'en') {
  return interfaceCopy[code] || interfaceCopy.en;
}
