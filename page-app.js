import React from 'react';
import { mount } from './mount.js';
import { pageFromPath } from './site-header.js';
import { Page } from './site-layout.js';
import Philosophy from './philosophy-content.js';
import Practice from './practice.js';
import teaching from './teaching-content.json' with { type: 'json' };
import { questions } from './questions.js';
const e = React.createElement;
const p = (text) => e('p', null, text);
const email = () => e('a', { href: 'mailto:pudaykumar12@gmail.com' }, 'pudaykumar12@gmail.com');
function FAQ() {
  return e(Page, { eyebrow: 'Questions about the teaching', title: 'Understanding the Creator and the game.', intro: teaching.statement },
    e('div', { className: 'compact-reading' }, questions.map(([q,a]) => e('details', { key: q }, e('summary', null, q), p(a))),
      e('div', { className: 'reading-links' }, e('a', { href: '/practice.html' }, 'Try a daily practice'), e('a', { href: '/philosophy.html#mula-siddhanta' }, 'Read the root statement'))));
}
function Contact() {
  return e(Page, { eyebrow: 'A quiet way to reach us', title: 'Contact', intro: 'The lessons and practices are here to use independently. For a question about the website, a correction, or a practical note, you can send an email.' },
    e('div', { className: 'compact-reading' }, e('p', null, email()), p('There is no requirement to introduce yourself, book a conversation, or share a personal story to use this website.'), e('a', { href: '/practice.html' }, 'Return to the practices')));
}
function Consultation() {
  return e(Page, { eyebrow: 'An optional last step', title: 'A personal conversation', intro: 'The teaching centres on the Creator within the game of experiences. Its explanations and practices are freely available here. If you have explored them and still prefer a personal conversation, the existing option is described below.' },
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
