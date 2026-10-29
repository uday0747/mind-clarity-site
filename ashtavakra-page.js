import React from 'react';
import research from './ashtavakra-research.json' with { type: 'json' };
import teaching from './teaching-content.json' with { type: 'json' };
import { Page, Reflection } from './site-layout.js';
const e = React.createElement;
export default function AshtavakraResearch() {
  return e(Page, { eyebrow: 'Scriptural research', title: research.title, intro: research.intro },
    e('div', { className: 'compact-reading' },
      e('p', null, teaching.statement),
      e('p', null, e('a', { href: '/understanding-god' }, 'How Uday’s game story makes this understanding concrete')),
      ...research.entries.map(entry => e('section', { key: entry.title },
        e('h2', null, entry.title), e('p', null, entry.text),
        e('ul', null, entry.links.map(([label, href]) => e('li', { key: href }, e('a', { href }, label)))))),
      e('p', { className: 'quiet-note' }, research.scope),
      e(Reflection, null, research.reflection),
      e('a', { href: '/philosophy#research-connections' }, 'Continue exploring the philosophy and its sources')),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' }));
}
