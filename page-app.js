import React, { useEffect } from 'react';
import { mount } from './mount.js';
import { pageFromPath } from './site-header.js';
import { Page } from './site-layout.js';
import Philosophy from './philosophy-content.js';
import AIReflection from './ai-reflection.js';
import TeluguAIReflection from './ai-reflection-te.js';
import Practice from './practice.js';
import teaching from './teaching-content.json' with { type: 'json' };
import { questions, enquiryGroups } from './questions.js';
import { enquiryPages, EnquiryLinks } from './enquiry-pages.js';
import { enhanceEnquirySearch } from './enquiry-search.js';
import { HindiHome, SpanishHome, FrenchHome } from './localized-home.js';
import { localizedComponents } from './localized-core.js';
import { localizedMoreComponents } from './localized-more.js';
const e = React.createElement;
const p = (text) => e('p', null, text);
const email = () => e('a', { href: 'mailto:pudaykumar12@gmail.com' }, 'pudaykumar12@gmail.com');
function Reflections() {
  return e(Page, { eyebrow: 'Reflections by Uday Kumar', title: 'Reflections on life and the Creator', intro: teaching.statement },
    p('Explore contemporary questions through the Creator-and-game teaching. These articles invite enquiry into life, technology, uncertainty, and our connection with one another.'),
    e('section', { className: 'compact-reading' },
      e('p', { className: 'eyebrow' }, '3 October 2026 · Technology and spiritual enquiry'),
      e('h2', null, e('a', { href: '/ai-fear-and-clarity' }, 'Can we meet artificial intelligence with clarity instead of fear?')),
      p('A reflection on the Creator’s unfolding design, worries about work, the hope of reducing hardship, and gratitude for the intelligence expressed through invention.'),
      e('a', { className: 'text-link', href: '/ai-fear-and-clarity' }, 'Read the article'), e('p', null, e('a', { href: '/ai-fear-and-clarity-telugu', lang: 'te', hrefLang: 'te' }, 'తెలుగులో చదవండి'))));
}
function FAQ() {
  useEffect(() => enhanceEnquirySearch(), []);
  return e(Page, { eyebrow: 'Questions about the teaching', title: 'Self-enquiry and enlightenment: questions and answers', intro: teaching.statement },
    e('section', { className: 'enquiry-search', 'aria-labelledby': 'enquiry-title' },
      e('h2', { id: 'enquiry-title' }, 'Start with your question'),
      p('No journal or prescribed timetable is needed. Bring your curiosity: Who am I? What does this teaching mean? These answers are edited from Uday Kumar’s discussions; you are welcome to question them.'),
      e('p', { id: 'enquiry-fallback', className: 'quiet-note' }, 'Browse the questions below. Open any question to read the full answer.'),
      e('div', { id: 'enquiry-controls', hidden: true },
      e('label', { htmlFor: 'enquiry-input' }, 'Find an answer in the teaching'),
      e('input', { id: 'enquiry-input', type: 'search', maxLength: 300, placeholder: 'Try: surrender, astrology, guilt, health…', 'aria-describedby': 'enquiry-help' }),
      e('p', { id: 'enquiry-help', className: 'quiet-note' }, 'This is a local answer finder, not a generative AI chatbot. Your search stays in this page and is not saved or sent to a model.'),
      e('p', { id: 'enquiry-status', role: 'status', 'aria-live': 'polite' }))),
    e('div', { className: 'compact-reading' }, questions.map(([q,a]) => e('details', { key: q }, e('summary', null, q), p(a))),
      ...enquiryGroups.map(group => e('section', { key: group.title }, e('h2', null, group.title), ...group.entries.map(([q,a]) => e('details', { key: q }, e('summary', null, q), p(a))))),
      e('section', { 'aria-labelledby': 'evidence-notes' },
        e('h2', { id: 'evidence-notes' }, 'Research and its limits'),
        p('Spiritual teaching, personal experience, and research answer different kinds of questions. The sources below support specific findings; they do not establish that we created the universe or that enlightenment guarantees health, wealth, or correct decisions.'),
        e('p', null, e('a', { href: 'https://www.insead.edu/faculty-research/publications/journal-articles/debiasing-mind-through-meditation-mindfulness-and' }, 'Mindfulness and sunk-cost bias — INSEAD'), ': four studies suggest that mindfulness can reduce the tendency to let unrecoverable past costs drive a present decision. This is a specific decision-making benefit, not proof that every choice will be right.'),
        e('p', null, e('a', { href: 'https://bear.warrington.ufl.edu/brenner/mar7588/Papers/kahneman-klein-2009.pdf' }, 'Conditions for intuitive expertise — Kahneman and Klein (PDF)'), ': skilled intuition depends on opportunities to learn reliable patterns. Subjective certainty alone does not establish accuracy.'),
        e('p', null, e('a', { href: 'https://isha.sadhguru.org/yoga/meditations/science-of-meditation/' }, 'Sadhguru’s meditation account'), ' is a first-person account, separate from the ', e('a', { href: 'https://public-isha.sadhguru.org/research-center/publications/Shambhavi-EEG.pdf' }, 'EEG study of nine Isha practitioners (PDF)'), '. The study reported changes in electrical activity, not clinical brain death or a validated measure of enlightenment.'),
        e('p', null, e('a', { href: 'https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety' }, 'Meditation: effectiveness and safety — NCCIH'), ': some practices may help with stress and other symptoms, but evidence and individual experiences vary. Meditation is not a replacement for appropriate healthcare.'),
        p('Found a factual error or a misattributed quotation? Please share the passage and a source by email so it can be checked.'), e('p', null, email())),
      e('div', { className: 'reading-links' }, e('a', { href: '/practice' }, 'Try a daily practice'), e('a', { href: '/philosophy#mula-siddhanta' }, 'Read the root statement'))),
    e(EnquiryLinks),
    e('p', { className: 'reading-links' }, e('a', { href: '/ai-fear-and-clarity' }, 'Read the reflection: Can we meet artificial intelligence with clarity instead of fear?')));
}
function Consultation() {
  return e(Page, { eyebrow: 'An optional last step', title: 'A personal conversation', intro: 'The teaching centres on the Creator within the game of experiences. Its explanations and practices are freely available here. If you have explored them and still prefer a personal conversation, the existing option is described below.' },
    e('div', { className: 'compact-reading' },
      e('h2', null, 'Practical details'), p('An introductory reflection conversation is 30 minutes and ₹500. The available formats are phone, Zoom, WhatsApp call, or offline by arrangement. Availability is 9 am–10 pm (IST). Individual or group conversations can be discussed case by case.'),
      e('p', null, 'Arrange a suitable time before paying: ', email(), ' or ', e('a', { href: 'https://wa.me/919989766517' }, 'WhatsApp +91 9989766517'), '.'),
      p('This is spiritual reflection and personal development, not therapy or crisis support.'),
      e('h2', null, 'Payment information'), e('p', null, 'After arranging the conversation, the existing ', e('a', { href: 'https://rzp.io/rzp/8BpoM63h' }, 'Razorpay payment page'), ' is available. If you have paid, share only your payment reference. Never send card numbers, bank details, OTPs, or passwords.'),
      p('If the same customer accidentally pays twice for the same introductory conversation, the duplicate payment will be refunded within 1–2 days.'),
      e('a', { href: '/practice' }, 'Continue learning independently')));
}
function Privacy() {
  return e(Page, { eyebrow: 'Your information', title: 'Privacy information' },
    e('div', { className: 'compact-reading' },
      e('h2', null, 'Reading and reflection'), p('The learning pages require no account, booking, or submission. The reflection prompts do not collect or store your answers. If you choose to write, use your own notebook or a tool of your choice.'),
      e('h2', null, 'Question finder'), p('The question finder filters answers in your browser. Its text is not saved, placed in the URL, sent to a model, or included in analytics events by this tool. It is not a live AI conversation. General website analytics still operate as described below.'),
      e('h2', null, 'Information you choose to send'), p('Mind Clarity receives information you choose to share by email or WhatsApp. Please do not send card numbers, bank details, OTPs, or passwords.'),
      e('h2', null, 'Analytics'), p('This website uses Google Analytics to understand general visitor activity. It is not used to provide medical or psychological profiling.'),
      e('h2', null, 'Optional payments'), p('Payments for optional conversations are processed by Razorpay. Mind Clarity does not request or store your full payment credentials.'),
      e('h2', null, 'Questions'), e('p', null, 'For privacy questions, contact ', email(), '.')));
}
export const pages = { hi: HindiHome, es: SpanishHome, fr: FrenchHome, 'ai-fear-and-clarity-telugu': TeluguAIReflection, reflections: Reflections, 'ai-fear-and-clarity': AIReflection, philosophy: Philosophy, practice: Practice, faq: FAQ, 'consultation-info': Consultation, privacy: Privacy, ...enquiryPages, ...localizedComponents, ...localizedMoreComponents };
if (typeof document !== 'undefined') {
  const Component = pages[pageFromPath(location.pathname)];
  if (Component) mount(Component);
}
