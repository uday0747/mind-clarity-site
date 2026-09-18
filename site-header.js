import React, { createContext, useContext, useRef, useState } from 'react';

export const PagePathContext = createContext(null);

const e = React.createElement;
const links = [
  ['home', 'Home', '/index.html'],
  ['philosophy', 'Philosophy', '/philosophy.html'],
  ['faq', 'FAQ', '/faq.html'],
  ['contact', 'Contact', '/contact.html']
];
const pageLabels = {
  ...Object.fromEntries(links.map(([id, label]) => [id, label])),
  'consultation-info': 'Consultation information',
  privacy: 'Privacy'
};

// Sites redirects .html links to clean URLs; both forms identify the same page.
export function pageFromPath(pathname) {
  const page = pathname.replace(/\/+$/, '').split('/').pop().replace(/\.html$/, '');
  return !page || page === 'index' ? 'home' : page;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const providedPath = useContext(PagePathContext);
  const page = pageFromPath(providedPath ?? (typeof location === 'undefined' ? '/' : location.pathname));
  const pageLabel = pageLabels[page] || 'Mind Clarity';
  const secondaryPage = !links.some(([id]) => id === page);

  const closeOnEscape = (event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  };

  return e('header', { className: 'site-header', onKeyDown: closeOnEscape },
    e('a', { className: 'brand', href: '/index.html' }, 'Mind Clarity'),
    e('div', { className: `page-tools${secondaryPage ? ' page-tools-secondary' : ''}` },
      e('p', { className: 'page-location', 'aria-label': `Current page: ${pageLabel}` },
        e('span', null, 'Current page'),
        e('strong', null, pageLabel)
      ),
      e('button', {
        className: 'menu-toggle', type: 'button', ref: toggle,
        'aria-expanded': open, 'aria-controls': 'primary-navigation',
        onClick: () => setOpen((value) => !value)
      }, open ? 'Close menu' : 'Menu')
    ),
    e('nav', {
      id: 'primary-navigation', 'aria-label': 'Main navigation',
      className: open ? 'is-open' : ''
    }, links.map(([id, label, href]) => e('a', {
      key: id, href, 'aria-current': id === page ? 'page' : undefined,
      onClick: () => setOpen(false)
    }, label)))
  );
}
