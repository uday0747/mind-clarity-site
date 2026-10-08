import React from 'react';
import { Page } from './site-layout.js';

const e = React.createElement;

// These first-batch pages translate the entry experience and central teaching.
// Longer lessons remain linked in English until their full translations are
// reviewed for spiritual and cultural accuracy.
export const localizedHomeCopy = {
  hi: {
    eyebrow: 'Mind Clarity · उदय कुमार का आध्यात्मिक दर्शन',
    title: 'एक प्रश्न से शुरू करें: मैं कौन हूँ?',
    statement: 'हम ही सृष्टिकर्ता हैं। हमने अनुभवों का यह खेल बनाया और इसमें प्रवेश किया। इसमें प्रवेश करने से पहले इसकी रूपरेखा तय कर लेने के कारण, खेल के भीतर से हम इसकी रूपरेखा बदल नहीं सकते।',
    meaning: 'यहाँ “सृष्टिकर्ता” से आशय उस साझा स्रोत से है जो हर जीवन के रूप में प्रकट होता है, हमारी अलग-अलग व्यक्तित्वों से परे। स्मरण करना, प्रश्न पूछना, चुनना और देखभाल करना भी इसी खेल के आगे बढ़ने का हिस्सा हैं। आप इस आध्यात्मिक दृष्टिकोण को खोज सकते हैं और इस पर प्रश्न भी उठा सकते हैं।',
    free: 'यह सीखना निःशुल्क है। पढ़ने के लिए किसी खाते, भुगतान, डायरी या निर्धारित दिनचर्या की आवश्यकता नहीं है।',
    start: 'दैनिक जीवन के एक उदाहरण से शुरू करें', question: 'अपने प्रश्न का उत्तर खोजें',
    practiceEyebrow: 'साधारण जीवन में इस शिक्षा को देखें', exampleTitle: 'एक गलती आपकी पूरी पहचान नहीं है।',
    scene: 'आपने कहा था कि फोन करेंगे, लेकिन भूल गए। किसी को असुविधा हुई। विचार “मैं भूल गया” से बदलकर “मैं असफल हूँ” हो जाता है।',
    body: 'इस शिक्षा में छूटी हुई कॉल एक बदलती हुई भूमिका का अनुभव है। उस सृष्टिकर्ता को याद करें जिसने खेल बनाया और उसमें प्रवेश किया, जिसकी पूरी रूपरेखा भीतर से फिर नहीं लिखी जा सकती। जिस व्यक्ति को असुविधा हुई, वह भी उसी स्रोत की अभिव्यक्ति है। माफी माँगना और व्यावहारिक सुधार करना भी इसी आगे बढ़ते खेल का हिस्सा है; आप दूसरे से क्षमा की माँग नहीं कर सकते।',
    reflection: 'उस संबंध को याद रखने से आपकी प्रतिक्रिया में क्या बदलता है? ईमानदारी से देखें कि क्या बदला, क्या नहीं बदला, या कौन से प्रश्न बाकी हैं।',
    explore: 'पूरा उदाहरण देखें', videoTitle: 'छोटा वीडियो पसंद है?',
    videoBody: 'Mind Clarity के YouTube चैनल पर “A Mistake Is Not Your Whole Identity” देखें और फिर अपने जीवन में इस उदाहरण को देखें।', videoLink: 'YouTube पर देखें',
    philosophyEyebrow: 'दर्शन को समझें', philosophyTitle: 'हर संबंध में वही सृष्टिकर्ता।',
    philosophyBody: 'इस शिक्षा में जो व्यक्ति आपसे सहमत है और जो आपको चुनौती देता है, दोनों का स्रोत एक ही है। इस संबंध को याद रखना स्वाभाविक देखभाल का आधार बनता है। बातचीत, निर्णय और सुधार उस खेल के अनुभव हैं जिसकी पूरी रूपरेखा हम भीतर से नहीं बदल सकते।', philosophyLink: 'पूरा दर्शन पढ़ें →',
    worldEyebrow: 'सुंदर दुनिया का संकल्प', worldTitle: 'उस सृष्टि की देखभाल करें जिसे हम साझा करते हैं।',
    worldBody: 'उदय की आशा है कि स्वयं को सृष्टिकर्ता के रूप में पहचानना हमारे अनुभवों के साथ संबंध बदल दे। वस्तुएँ सृष्टि का छोटा हिस्सा हैं; लोग और प्रकृति हमारी चिंता से बाहर नहीं हैं। देखभाल करना आगे बढ़ते खेल में भाग लेना है।', worldLink: 'सुंदर दुनिया की दृष्टि', questionsLink: 'खोजते समय प्रश्न',
    details: 'विस्तृत सीखने वाले पृष्ठ अभी अंग्रेज़ी में उपलब्ध हैं। हम प्रत्येक अनुवाद को अर्थ और आध्यात्मिक संदर्भ के लिए धीरे-धीरे तैयार कर रहे हैं।',
  },
  es: {
    eyebrow: 'Mind Clarity · la filosofía espiritual de Uday Kumar',
    title: 'Comienza con una pregunta: ¿quién soy?',
    statement: 'Somos el Creador. Creamos este juego de experiencias y entramos en él. Como diseñamos su estructura antes de entrar, no podemos cambiarla desde dentro del juego.',
    meaning: 'Aquí, “Creador” significa la fuente compartida que aparece como cada vida, más allá de nuestras personalidades separadas. Recordar, preguntar, elegir y cuidar también forman parte del despliegue del juego. Puedes explorar esta perspectiva espiritual y cuestionarla.',
    free: 'La exploración es gratuita. No necesitas una cuenta, un pago, un diario ni una rutina establecida para leer.',
    start: 'Comienza con un ejemplo cotidiano', question: 'Encuentra una respuesta a tu pregunta',
    practiceEyebrow: 'Mira la enseñanza en la vida cotidiana', exampleTitle: 'Un error no es toda tu identidad.',
    scene: 'Dijiste que llamarías, pero lo olvidaste. Alguien tuvo que arreglárselas sin ti. El pensamiento cambia de “lo olvidé” a “soy un fracaso”.',
    body: 'En esta enseñanza, la llamada olvidada pertenece a un papel pasajero. Recuerda al Creador que diseñó el juego y entró en él, cuya estructura total no puede reescribirse desde dentro. La persona afectada comparte esa misma fuente. Una disculpa y una reparación práctica también forman parte del juego que se despliega; no puedes exigir su perdón.',
    reflection: '¿Qué cambia en tu respuesta al recordar esa conexión? Observa con honestidad qué cambia, qué no cambia y qué preguntas permanecen.',
    explore: 'Explora el ejemplo completo', videoTitle: '¿Prefieres un vídeo breve?',
    videoBody: 'Mira “A Mistake Is Not Your Whole Identity” en el canal de Mind Clarity en YouTube y después explora el ejemplo en tu propia vida.', videoLink: 'Ver en YouTube',
    philosophyEyebrow: 'Explora la filosofía', philosophyTitle: 'El mismo Creador en cada relación.',
    philosophyBody: 'En esta enseñanza, la persona que está de acuerdo contigo y la que te desafía comparten la misma fuente. Recordar esa conexión es la base de una atención que puede surgir de manera natural. Las conversaciones, las decisiones y la reparación son experiencias dentro de un juego cuya estructura total no podemos reescribir.', philosophyLink: 'Lee la filosofía completa →',
    worldEyebrow: 'La intención de un mundo hermoso', worldTitle: 'Cuida la creación que compartimos.',
    worldBody: 'La esperanza de Uday es que reconocernos como el Creador cambie nuestra relación con todo lo que experimentamos. Las posesiones son pequeñas partes de la creación; las personas y la naturaleza no quedan fuera de nuestra preocupación. Cuidarlas es participar en el juego que se despliega.', worldLink: 'La visión de un mundo hermoso', questionsLink: 'Preguntas para explorar',
    details: 'Las páginas de estudio más extensas están disponibles por ahora en inglés. Estamos preparando cada traducción paso a paso para cuidar el significado y el contexto espiritual.',
  },
  fr: {
    eyebrow: 'Mind Clarity · la philosophie spirituelle d’Uday Kumar',
    title: 'Commencez par une question : qui suis-je ?',
    statement: 'Nous sommes le Créateur. Nous avons créé ce jeu d’expériences et nous y sommes entrés. L’ayant conçu avant d’y entrer, nous ne pouvons pas en modifier la conception depuis l’intérieur du jeu.',
    meaning: 'Ici, le « Créateur » désigne la source commune qui apparaît comme chaque vie, au-delà de nos personnalités séparées. Se souvenir, questionner, choisir et prendre soin des autres font aussi partie du déroulement du jeu. Vous pouvez explorer cette perspective spirituelle et la remettre en question.',
    free: 'L’exploration est gratuite. Aucun compte, paiement, journal ni routine imposée n’est nécessaire pour lire.',
    start: 'Commencer par un exemple de la vie quotidienne', question: 'Trouver une réponse à votre question',
    practiceEyebrow: 'Voir l’enseignement dans la vie ordinaire', exampleTitle: 'Une erreur ne résume pas toute votre identité.',
    scene: 'Vous aviez dit que vous appelleriez, puis vous avez oublié. Quelqu’un a dû s’adapter. La pensée passe de « j’ai oublié » à « je suis un échec ».',
    body: 'Dans cet enseignement, l’appel manqué appartient à un rôle qui passe. Souvenez-vous du Créateur qui a conçu le jeu et y est entré, et dont la conception totale ne peut pas être réécrite depuis l’intérieur. La personne touchée partage cette même source. Présenter des excuses et réparer concrètement font aussi partie du jeu qui se déploie ; vous ne pouvez pas exiger son pardon.',
    reflection: 'Que change le souvenir de cette connexion dans votre manière de répondre ? Observez honnêtement ce qui change, ce qui ne change pas et les questions qui restent.',
    explore: 'Explorer l’exemple complet', videoTitle: 'Vous préférez une courte vidéo ?',
    videoBody: 'Regardez « A Mistake Is Not Your Whole Identity » sur la chaîne YouTube de Mind Clarity, puis explorez cet exemple dans votre propre vie.', videoLink: 'Regarder sur YouTube',
    philosophyEyebrow: 'Explorer la philosophie', philosophyTitle: 'Le même Créateur dans chaque relation.',
    philosophyBody: 'Dans cet enseignement, la personne qui est d’accord avec vous et celle qui vous met au défi partagent la même source. Se souvenir de cette connexion est la base d’un soin qui peut surgir naturellement. Les conversations, les décisions et la réparation sont des expériences dans un jeu dont nous ne pouvons pas réécrire la conception totale.', philosophyLink: 'Lire la philosophie complète →',
    worldEyebrow: 'L’intention d’un monde magnifique', worldTitle: 'Prendre soin de la création que nous partageons.',
    worldBody: 'Uday espère que nous reconnaître comme le Créateur transformera notre relation avec tout ce que nous vivons. Les possessions sont de petites parties de la création ; les personnes et la nature ne sont pas en dehors de notre attention. En prendre soin, c’est participer au jeu qui se déploie.', worldLink: 'La vision d’un monde magnifique', questionsLink: 'Questions à explorer',
    details: 'Les pages d’étude plus longues sont pour le moment disponibles en anglais. Nous préparons chaque traduction progressivement afin de préserver le sens et le contexte spirituel.',
  },
};

export function LocalizedHome({ language }) {
  const t = localizedHomeCopy[language];
  return e(Page, { home: true, lang: language, share: false, eyebrow: t.eyebrow, title: t.title, intro: t.statement },
    e('p', { className: 'welcome-meaning' }, t.meaning),
    e('p', { className: 'quiet-note' }, t.free),
    e('nav', { className: 'reading-links', 'aria-label': t.start },
      e('a', { className: 'button', href: '#first-practice-title' }, t.start),
      e('a', { href: '/faq#enquiry-title' }, t.question)),
    e('section', { className: 'first-practice', 'aria-labelledby': 'first-practice-title' },
      e('div', null,
        e('p', { className: 'eyebrow' }, t.practiceEyebrow),
        e('h2', { id: 'first-practice-title' }, t.exampleTitle),
        e('p', null, t.scene), e('p', null, t.body),
        e('p', { className: 'quiet-note' }, t.reflection),
        e('a', { className: 'text-link', href: '/practice#self-judgment' }, t.explore)),
      e('figure', { className: 'practice-image' },
        e('picture', null,
          e('source', { media: '(min-width: 901px)', type: 'image/webp', srcSet: '/assets/pond-desktop-640.webp 640w, /assets/pond-desktop-960.webp 960w', sizes: '(min-width: 1180px) 441px, 40vw' }),
          e('source', { type: 'image/webp', srcSet: '/assets/pond-mobile-480.webp 480w, /assets/pond-mobile-960.webp 960w', sizes: 'calc(100vw - 92px)' }),
          e('img', { src: '/assets/pond-fallback.jpg', alt: t.exampleTitle, width: 600, height: 400, fetchPriority: 'high', decoding: 'async' })),
        e('figcaption', null, t.worldTitle))),
    e('section', { className: 'watch-lesson', 'aria-labelledby': 'watch-title' },
      e('div', null, e('h2', { id: 'watch-title' }, t.videoTitle), e('p', null, t.videoBody)),
      e('a', { className: 'button secondary', href: 'https://www.youtube.com/shorts/p1JyKo3vKeE' }, t.videoLink)),
    e('section', { className: 'home-section philosophy-intro' },
      e('div', null, e('p', { className: 'eyebrow' }, t.philosophyEyebrow), e('h2', null, t.philosophyTitle), e('p', null, t.philosophyBody), e('a', { className: 'text-link', href: '/philosophy' }, t.philosophyLink))),
    e('section', { className: 'home-section' },
      e('p', { className: 'eyebrow' }, t.worldEyebrow), e('h2', null, t.worldTitle), e('p', null, t.worldBody),
      e('div', { className: 'reading-links' }, e('a', { href: '/philosophy#beautiful-world' }, t.worldLink), e('a', { href: '/faq' }, t.questionsLink))),
    e('p', { className: 'translation-note quiet-note' }, t.details));
}

export const HindiHome = () => e(LocalizedHome, { language: 'hi' });
export const SpanishHome = () => e(LocalizedHome, { language: 'es' });
export const FrenchHome = () => e(LocalizedHome, { language: 'fr' });
