import { interfaceFor } from './interface-copy.js';
import React, { useContext } from 'react';
import Header, { PagePathContext } from './site-header.js';
import ShareLearning from './share-learning.js';
import { localizedPath, pageLanguage } from './language-options.js';
import teaching from './teaching-content.json' with { type: 'json' };
const e = React.createElement;
export function Footer({ language = 'en' }) {
  const ui = interfaceFor(language);
  const localized = ['hi', 'es', 'fr', 'te', 'pt', 'id', 'ar'].includes(language);
  return e('footer', { className: 'site-footer', lang: language },
    e('p', null, 'Mind Clarity', e('span', { className: 'footer-purpose' }, ui.footerPurpose)),
    e('div', { className: 'footer-links' },
      language === 'en' && e('a', { href: 'https://www.youtube.com/@mindclaritywebsite' }, ui.youtube),
      e('a', { href: 'mailto:pudaykumar12@gmail.com' }, ui.email),
      e('a', { href: localized ? localizedPath(language, 'privacy') : '/privacy' }, ui.privacy),
      e('a', { href: localized ? localizedPath(language, 'consultation-info') : '/consultation-info' }, ui.conversation)),
    e('small', null, ui.copyright));
}
export function Page({ eyebrow, title, intro, children, home = false, lang, share = true }) {
  const pathname = useContext(PagePathContext) ?? (typeof location === 'undefined' ? '/' : location.pathname);
  const documentLanguage = lang || pageLanguage(pathname);
  const uiLanguage = ['hi', 'es', 'fr', 'te', 'pt', 'id', 'ar'].includes(documentLanguage) ? documentLanguage : 'en';
  const ui = interfaceFor(uiLanguage);
  const basePath = pathname.replace(/^\/(hi|es|fr|te|pt|id|ar)(?=\/)/, '').replace(/\.html$/, '').replace(/\/$/, '');
  const canShare = share && !['/privacy', '/consultation-info'].includes(basePath);
  return e(React.Fragment, null,
    e('a', { className: 'skip-link', href: '#main-content', lang: uiLanguage }, ui.skip),
    e(Header),
    e('main', { id: 'main-content', lang: documentLanguage, tabIndex: -1, className: home ? 'home-main' : 'reading-main' },
      eyebrow && e('p', { className: 'eyebrow' }, eyebrow),
      e('h1', null, title),
      intro && e('p', { className: 'intro' }, intro),
      children,
      canShare && e(ShareLearning, { pathname, title })),
    e(Footer, { language: uiLanguage }));
}
export function Reflection({ children, label = 'Try this reflection', prompt = 'Try this now' }) {
  return e('aside', { className: 'reflection', 'aria-label': label },
    e('p', { className: 'eyebrow' }, prompt), e('p', null, children));
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
