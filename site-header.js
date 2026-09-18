import React, { createContext, useContext, useRef, useState } from 'react';
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
  const [open,setOpen] = useState(false);
  const toggle = useRef(null);
  const provided = useContext(PagePathContext);
  const page = pageFromPath(provided ?? (typeof location === 'undefined' ? '/' : location.pathname));
  return e('header', { className: 'site-header', onKeyDown: event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  } },
    e('a', { className: 'brand', href: '/index.html' }, 'Mind Clarity'),
    e('button', { className: 'menu-toggle', ref: toggle, type: 'button', 'aria-expanded': open,
      'aria-label': open ? 'Close menu' : 'Menu',
      'aria-controls': 'primary-navigation', onClick: ()=>setOpen(!open) }, open ? 'Close' : 'Menu'),
    e('nav', { id: 'primary-navigation', 'aria-label': 'Main navigation', className: open ? 'is-open' : '' },
      links.map(([id,label,href])=>e('a', { key:id, href, 'aria-current': id===page?'page':undefined, onClick:()=>setOpen(false) },label))),
    e('p', { className: 'mobile-page' }, labels[page] || 'Mind Clarity'));
}
