import React from 'react';
import content from './understanding-god-content.json' with { type: 'json' };
import teaching from './teaching-content.json' with { type: 'json' };
import { Page, Contents, Reflection } from './site-layout.js';
const e = React.createElement;
export default function UnderstandingGod() {
  return e(Page, { eyebrow: 'Understanding and enquiry', title: content.title, intro: content.intro },
    e('p', null, teaching.statement),
    e('div', { className: 'reading-grid' },
      e(Contents, { items: content.sections.map(section => [section.id, section.title]) }),
      e('div', { className: 'reading-body' },
        ...content.sections.map(section => e('section', { id: section.id, key: section.id },
          e('h2', null, section.title),
          ...section.paragraphs.map(text => e('p', { key: text }, text)),
          section.links && e('ul', null, section.links.map(([label, href]) => e('li', { key: href }, e('a', { href }, label)))))),
        e(Reflection, null, content.reflection),
        e('a', { href: '/philosophy' }, 'Read Uday’s full philosophy'))));
}
