import React, { createContext, useContext, useEffect, useRef } from 'react';
import { enhanceNavigation } from './site-ui.js';
import { enquiryTopics } from './enquiry-topics.js';
import { languageOption, languageOptions, languageVariants, pageLanguage } from './language-options.js';
export const PagePathContext = createContext(null);
const e = React.createElement;
const links = [
  ['home', 'Begin here', '/'],
  ['philosophy', 'Philosophy', '/philosophy'],
  ['practice', 'Daily practice', '/practice'],
  ['faq', 'Questions', '/faq'],
  ['reflections', 'Reflections', '/reflections']
];
const labels = { ...Object.fromEntries(links.map(([id,label])=>[id,label])), contact: 'Contact', privacy: 'Privacy', 'consultation-info': 'Optional conversation' };
export function pageFromPath(pathname) {
  const page = pathname.replace(/\/+$/, '').split('/').pop().replace(/\.html$/, '');
  return !page || page === 'index' ? 'home' : page;
}
export default function Header() {
  const header = useRef(null);
  useEffect(() => enhanceNavigation(header.current), []);
  const provided = useContext(PagePathContext);
  const pathname = provided ?? (typeof location === 'undefined' ? '/' : location.pathname);
  const current = pageFromPath(pathname);
  const page = ['ai-fear-and-clarity', 'ai-fear-and-clarity-telugu'].includes(current) ? 'reflections' : enquiryTopics.some(topic => topic.slug === current) ? 'faq' : current;
  const currentLanguage = pageLanguage(pathname);
  const variants = languageVariants(pathname);
  const availableLanguages = languageOptions.filter(option => variants[option.code]);
  return e('header', { className: 'site-header', ref: header, lang: 'en' },
    e('a', { className: 'brand', href: '/' }, 'Mind Clarity'),
    e('button', { className: 'menu-toggle', type: 'button', 'aria-expanded': false,
      'aria-label': 'Open menu', 'aria-controls': 'primary-navigation' }, 'Menu'),
    e('nav', { id: 'primary-navigation', 'aria-label': 'Main navigation' },
      links.map(([id,label,href])=>e('a', { key:id, href, 'aria-current': id===page?'page':undefined },label))),
    e('p', { className: 'mobile-page' }, labels[page] || 'Mind Clarity'),
    e('div', { className: 'language-tools' },
      e('label', { className: 'language-picker', htmlFor: 'language-select' },
        e('span', null, 'Language'),
        e('select', { id: 'language-select', 'aria-label': 'Choose language', 'data-current-language': currentLanguage, defaultValue: currentLanguage },
          availableLanguages.map(option => e('option', { key: option.code, value: option.code, 'data-href': variants[option.code] }, option.nativeName)))),
      availableLanguages.length === 1 && e('span', { className: 'language-note' }, `More reviewed translations are being added.`),
      e('p', { className: 'language-suggestion', id: 'language-suggestion', hidden: true, role: 'status', 'aria-live': 'polite' })
    ));
}
