import React from 'react';
import { mount } from './mount.js';
import { pageFromPath } from './site-header.js';
import { Page } from './site-layout.js';
import Philosophy from './philosophy-content.js';
import Practice from './practice.js';
const e = React.createElement;
const p = (text) => e('p', null, text);
const email = () => e('a', { href: 'mailto:pudaykumar12@gmail.com' }, 'pudaykumar12@gmail.com');
const questions = [
  ['Do I have to accept the philosophy to benefit from the practices?', 'No. Begin with what you can observe: a thought, a feeling, an assumption, and a response. You can practise attention and responsibility while holding a different spiritual view or none at all.'],
  ['What does enlightenment mean here?', 'It is the aspiration toward clearer understanding of self and experience, expressed in the way we live. A website cannot certify or guarantee awakening. Reading is a beginning; honest enquiry, practical care, and your own discernment matter.'],
  ['If everything is already designed, why make an effort?', 'In this philosophy, effort, learning, and change are themselves part of the unfolding. We do not know the future. Within ordinary life, choices have consequences, so preventing harm, seeking help, and making repair remain meaningful.'],
  ['Does seeing oneness mean accepting harmful behaviour?', 'No. Recognizing someone’s humanity is different from agreeing with an action. You can be compassionate and still say no, set a boundary, leave an unsafe situation, or seek protection.'],
  ['Is witnessing the same as ignoring feelings?', 'No. Notice the feeling without demanding that it disappear. Then examine the situation and choose a response. Witnessing is clearer participation, not numbness, suppression, or withdrawal.'],
  ['What if my mind will not become quiet?', 'You do not need a silent mind to begin. Notice one thought, one sensation, or one sound. If a practice is uncomfortable or overwhelming, stop and return to an ordinary activity. There is no test to pass.'],
  ['How can I tell whether the practice is useful?', 'Look for ordinary changes: did you check an assumption, listen more carefully, keep a boundary, or repair a mistake? Review what actually happened. A useful experience does not have to prove the whole worldview.'],
  ['Can this solve every problem or replace therapy?', 'No. These are educational reflections, not medical or psychological treatment. Some difficulties need practical, social, legal, or professional support. Seeking suitable help is consistent with responsibility, not a failure of understanding.'],
  ['Where should I begin?', 'Choose one small, current difficulty and use the five-minute practice. Try one action, notice its effect, and return to the relevant philosophy section when you want to understand the idea more deeply.']
];
function FAQ() {
  return e(Page, { eyebrow: 'Questions for understanding', title: 'Keep your questions open.', intro: 'These answers help connect the philosophy with ordinary life. You are welcome to question the ideas and reach your own conclusions.' },
    e('div', { className: 'compact-reading' }, questions.map(([q,a]) => e('details', { key: q }, e('summary', null, q), p(a))),
      e('div', { className: 'reading-links' }, e('a', { href: '/practice.html' }, 'Try a daily practice'), e('a', { href: '/philosophy.html' }, 'Read the complete philosophy'))));
}
function Contact() {
  return e(Page, { eyebrow: 'A quiet way to reach us', title: 'Contact', intro: 'The lessons and practices are here to use independently. For a question about the website, a correction, or a practical note, you can send an email.' },
    e('div', { className: 'compact-reading' }, e('p', null, email()), p('There is no requirement to introduce yourself, book a conversation, or share a personal story to use this website.'), e('a', { href: '/practice.html' }, 'Return to the practices')));
}
function Consultation() {
  return e(Page, { eyebrow: 'An optional last step', title: 'A personal conversation', intro: 'The philosophy, examples, and practices are available without a consultation. If you have explored them and still prefer a conversation, the existing option is described here.' },
    e('div', { className: 'compact-reading' },
      e('h2', null, 'Practical details'), p('An introductory reflection conversation is 30 minutes and ₹500. The available formats are phone, Zoom, WhatsApp call, or offline by arrangement. Availability is 9 am–10 pm (IST). Individual or group conversations can be discussed case by case.'),
      e('p', null, 'Arrange a suitable time before paying: ', email(), ' or ', e('a', { href: 'https://wa.me/919989766517' }, 'WhatsApp +91 9989766517'), '.'),
      p('This is spiritual reflection and personal development, not therapy or crisis support.'),
      e('h2', null, 'Payment information'), e('p', null, 'After arranging the conversation, the existing ', e('a', { href: 'https://rzp.io/rzp/8BpoM63h' }, 'Razorpay payment page'), ' is available. If you have paid, share only your payment reference. Never send card numbers, bank details, OTPs, or passwords.'),
      p('If the same customer accidentally pays twice for the same introductory conversation, the duplicate payment will be refunded within 1–2 days.'),
      e('a', { href: '/practice.html' }, 'Continue learning independently')));
}
function Privacy() {
  return e(Page, { eyebrow: 'Your information', title: 'Privacy information' },
    e('div', { className: 'compact-reading' },
      e('h2', null, 'Reading and reflection'), p('The learning pages require no account, booking, or submission. The reflection prompts do not collect or store your answers. If you choose to write, use your own notebook or a tool of your choice.'),
      e('h2', null, 'Information you choose to send'), p('Mind Clarity receives information you choose to share by email or WhatsApp. Please do not send card numbers, bank details, OTPs, or passwords.'),
      e('h2', null, 'Analytics'), p('This website uses Google Analytics to understand general visitor activity. It is not used to provide medical or psychological profiling.'),
      e('h2', null, 'Optional payments'), p('Payments for optional conversations are processed by Razorpay. Mind Clarity does not request or store your full payment credentials.'),
      e('h2', null, 'Questions'), e('p', null, 'For privacy questions, contact ', email(), '.')));
}
export const pages = { philosophy: Philosophy, practice: Practice, faq: FAQ, contact: Contact, 'consultation-info': Consultation, privacy: Privacy };
if (typeof document !== 'undefined') {
  const Component = pages[pageFromPath(location.pathname)];
  if (Component) mount(Component);
}
