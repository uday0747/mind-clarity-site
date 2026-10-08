import React, { useContext } from 'react';
import Header, { PagePathContext } from './site-header.js';
import ShareLearning from './share-learning.js';
import teaching from './teaching-content.json' with { type: 'json' };
const e = React.createElement;
export function Footer() {
  return e('footer', { className: 'site-footer', lang: 'en' },
    e('p', null, 'Mind Clarity', e('span', { className: 'footer-purpose' }, 'Remembering the Creator within the game of experiences.')),
    e('div', { className: 'footer-links' },
      e('a', { href: 'https://www.youtube.com/@mindclaritywebsite' }, 'Mind Clarity on YouTube'),
      e('a', { href: 'mailto:pudaykumar12@gmail.com' }, 'Email'),
      e('a', { href: '/privacy' }, 'Privacy'),
      e('a', { href: '/consultation-info' }, 'Optional conversation')),
    e('small', null, '© 2026 Mind Clarity · Spiritual reflection and education.'));
}
export function Page({ eyebrow, title, intro, children, home = false, lang }) {
  const pathname = useContext(PagePathContext) ?? (typeof location === 'undefined' ? '/' : location.pathname);
  const canShare = !['/privacy', '/consultation-info'].includes(pathname.replace(/\.html$/, '').replace(/\/$/, ''));
  return e(React.Fragment, null,
    e('a', { className: 'skip-link', href: '#main-content', lang: 'en' }, 'Skip to content'),
    e(Header),
    e('main', { id: 'main-content', lang, tabIndex: -1, className: home ? 'home-main' : 'reading-main' },
      eyebrow && e('p', { className: 'eyebrow' }, eyebrow),
      e('h1', null, title),
      intro && e('p', { className: 'intro' }, intro),
      children,
      canShare && e(ShareLearning, { pathname, title })),
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
export function Contents({ items, label = 'On this page' }) {
  return e('nav', { className: 'reading-contents', 'aria-label': label },
    e('p', { className: 'eyebrow' }, label),
    e('ol', null, items.map(([id,title]) => e('li', { key: id }, e('a', { href: '#'+id }, title)))));
}
export const topics = teaching.cases.map(({ id, title, description }) => [id, title, description]);
export function TopicLinks({ samePage = false }) {
  return e('div', { className: 'topic-grid' }, topics.map(([id,title,description],i) =>
    e('a', { className: 'topic-link', key: id, href: (samePage ? '' : '/practice')+'#'+id },
      e('span', { className: 'topic-index', 'aria-hidden': true }, '0'+(i+1)),
      e('span', null, e('strong', null, title), e('span', null, description)),
      e('span', { 'aria-hidden': true }, '↗'))));
}
