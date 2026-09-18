import React, { createContext, useContext, useEffect, useRef } from 'react';
import { enhanceNavigation } from './site-ui.js';
export const PagePathContext = createContext(null);
const e = React.createElement;
const links = [
  ['home', 'Begin here', '/index.html'],
  ['philosophy', 'Philosophy', '/philosophy.html'],
  ['practice', 'Daily practice', '/practice.html'],
  ['faq', 'Questions', '/faq.html']
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
  const page = pageFromPath(provided ?? (typeof location === 'undefined' ? '/' : location.pathname));
  return e('header', { className: 'site-header', ref: header },
    e('a', { className: 'brand', href: '/index.html' }, 'Mind Clarity'),
    e('button', { className: 'menu-toggle', type: 'button', 'aria-expanded': false,
      'aria-label': 'Open menu', 'aria-controls': 'primary-navigation' }, 'Menu'),
    e('nav', { id: 'primary-navigation', 'aria-label': 'Main navigation' },
      links.map(([id,label,href])=>e('a', { key:id, href, 'aria-current': id===page?'page':undefined },label))),
    e('p', { className: 'mobile-page' }, labels[page] || 'Mind Clarity'));
}
