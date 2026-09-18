import React from 'react';
import Header from './site-header.js';
const e = React.createElement;
export function Footer() {
  return e('footer', { className: 'site-footer' },
    e('p', null, 'Mind Clarity', e('span', { className: 'footer-purpose' }, 'Understanding that becomes a way of living.')),
    e('div', { className: 'footer-links' },
      e('a', { href: 'mailto:pudaykumar12@gmail.com' }, 'Email'),
      e('a', { href: '/privacy.html' }, 'Privacy'),
      e('a', { href: '/consultation-info.html' }, 'Optional conversation')),
    e('small', null, '© 2026 Mind Clarity · Spiritual reflection and education.'));
}
export function Page({ eyebrow, title, intro, children, home = false }) {
  return e(React.Fragment, null,
    e('a', { className: 'skip-link', href: '#main-content' }, 'Skip to content'),
    e(Header),
    e('main', { id: 'main-content', tabIndex: -1, className: home ? 'home-main' : 'reading-main' },
      eyebrow && e('p', { className: 'eyebrow' }, eyebrow),
      e('h1', null, title),
      intro && e('p', { className: 'intro' }, intro),
      children),
    e(Footer));
}
export function Reflection({ children }) {
  return e('aside', { className: 'reflection', 'aria-label': 'Try this reflection' },
    e('p', { className: 'eyebrow' }, 'Try this now'), e('p', null, children));
}
export function Lesson({ id, number, title, children }) {
  return e('section', { id, className: 'lesson' },
    number && e('span', { className: 'lesson-number', 'aria-hidden': true }, number),
    e('h2', null, title), children);
}
export function Contents({ items }) {
  return e('nav', { className: 'reading-contents', 'aria-label': 'On this page' },
    e('p', { className: 'eyebrow' }, 'On this page'),
    e('ol', null, items.map(([id,title]) => e('li', { key: id }, e('a', { href: '#'+id }, title)))));
}
export const topics = [
  ['overthinking', 'When thoughts keep circling', 'Separate what happened from what you are imagining.'],
  ['conflict', 'When a conversation hurts', 'Understand the reaction and choose a clear response.'],
  ['self-judgment', 'When you judge yourself', 'Make room for learning, repair and a fresh action.'],
  ['decision', 'When a decision feels difficult', 'Look at the facts, your values and what you can do.']
];
export function TopicLinks({ samePage = false }) {
  return e('div', { className: 'topic-grid' }, topics.map(([id,title,description],i) =>
    e('a', { className: 'topic-link', key: id, href: (samePage ? '' : '/practice.html')+'#'+id },
      e('span', { className: 'topic-index', 'aria-hidden': true }, '0'+(i+1)),
      e('span', null, e('strong', null, title), e('span', null, description)),
      e('span', { 'aria-hidden': true }, '↗'))));
}
