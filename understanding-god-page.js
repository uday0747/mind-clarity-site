import React from 'react';
import { journey, AstrologyExplanation } from './design-journey.js';
import content from './understanding-god-content.json' with { type: 'json' };
import teaching from './teaching-content.json' with { type: 'json' };
import { Page, Contents, Reflection } from './site-layout.js';
const e = React.createElement;
export default function UnderstandingGod() {
  const sections = [...content.sections];
  sections.splice(3, 0,
    {id:'design-and-time', title:journey.designTitle, paragraphs:[journey.design]},
    {id:'astrology', title:journey.astrologyTitle, paragraphs:[], astrology:true},
    {id:'reasoning', title:journey.reasonTitle, paragraphs:[journey.reason]},
    {id:'connection', title:journey.connectionTitle, paragraphs:[journey.connection, journey.joy]});
  return e(Page, { eyebrow: 'Understanding and enquiry', title: content.title, intro: content.intro },
    e('p', null, teaching.statement),
    e('div', { className: 'reading-grid' },
      e(Contents, { items: sections.map(section => [section.id, section.title]) }),
      e('div', { className: 'reading-body' },
        ...sections.map(section => e('section', { id: section.id, key: section.id },
          e('h2', null, section.title),
          section.astrology && e(AstrologyExplanation),
          ...section.paragraphs.map(text => e('p', { key: text }, text)),
          section.links && e('ul', null, section.links.map(([label, href]) => e('li', { key: href }, e('a', { href }, label)))))),
        e(Reflection, null, content.reflection),
        e('a', { href: '/philosophy' }, 'Read Uday’s full philosophy'))),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' }));
}
