import React, { useEffect, useRef } from 'react';
import { enhanceSharing } from './share-ui.js';
const e = React.createElement;

export default function ShareLearning({ pathname, title }) {
  const root = useRef(null);
  useEffect(() => enhanceSharing(root.current), []);
  const url = `https://mindclarity.co.in${pathname.replace(/\.html$/, '').replace(/^\/index$/, '/')}`;
  return e('aside', { className: 'share-lesson', ref: root, lang: 'en', 'aria-labelledby': 'share-title' },
    e('h2', { id: 'share-title' }, 'Share a useful lesson'),
    e('p', null, 'If someone comes to mind, send them this page and let them explore at their own pace.'),
    e('label', { htmlFor: 'share-url' }, 'Link to this page'),
    e('div', { className: 'share-actions' },
      e('input', { id: 'share-url', type: 'url', readOnly: true, value: url, 'aria-describedby': 'share-help' }),
      e('button', { type: 'button', className: 'button secondary', 'data-copy-link': true, hidden: true }, 'Copy link'),
      e('a', { href: `mailto:?subject=${encodeURIComponent(`${title} | Mind Clarity`)}&body=${encodeURIComponent(`A free reflection from Mind Clarity, exploring Uday Kumar’s spiritual philosophy.\n\n${url}`)}` }, 'Share by email')),
    e('p', { id: 'share-help', className: 'quiet-note' }, 'You can select and copy the link. No account is needed to read it.'),
    e('p', { className: 'share-status', role: 'status', 'aria-live': 'polite' }));
}
