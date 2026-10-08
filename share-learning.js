import React, { useEffect, useRef } from 'react';
import { enhanceSharing } from './share-ui.js';
import { interfaceFor, pageLanguage } from './language-options.js';
import { translateText } from './translations.js';
const e = React.createElement;

export default function ShareLearning({ pathname, title }) {
  const root = useRef(null);
  useEffect(() => enhanceSharing(root.current), []);
  const language = pageLanguage(pathname);
  const copy = interfaceFor(language).share || interfaceFor('en').share;
  const translatedTitle = translateText(title, language);
  const url = `https://mindclarity.co.in${pathname.replace(/\.html$/, '').replace(/^\/index$/, '/')}`;
  return e('aside', { className: 'share-lesson', ref: root, lang: pageLanguage(pathname), 'aria-labelledby': 'share-title', 'data-share-copied': copy.copied, 'data-share-fallback': copy.fallback },
    e('h2', { id: 'share-title' }, copy.title),
    e('p', null, copy.body),
    e('label', { htmlFor: 'share-url' }, copy.label),
    e('div', { className: 'share-actions' },
      e('input', { id: 'share-url', type: 'url', readOnly: true, value: url, 'aria-describedby': 'share-help' }),
      e('button', { type: 'button', className: 'button secondary', 'data-copy-link': true, hidden: true }, copy.copy),
      e('a', { href: `mailto:?subject=${encodeURIComponent(`${translatedTitle} | Mind Clarity`)}&body=${encodeURIComponent(`${copy.body}\n\n${url}`)}` }, copy.email)),
    e('p', { id: 'share-help', className: 'quiet-note' }, copy.help),
    e('p', { className: 'share-status', role: 'status', 'aria-live': 'polite' }));
}
