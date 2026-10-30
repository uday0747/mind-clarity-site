import React from 'react';
import journey from './design-journey-content.json' with { type: 'json' };
import research from './research-content.json' with { type: 'json' };
import { Page, Reflection } from './site-layout.js';
import { enquiryTopics } from './enquiry-topics.js';
const e = React.createElement;
export function EnquiryLinks() {
  return e('section', { className: 'home-section', 'aria-labelledby': 'enquiry-guides' },
    e('h2', { id: 'enquiry-guides' }, 'Explore a question in depth'),
    e('div', { className: 'topic-grid' }, enquiryTopics.map(topic => e('article', { key: topic.slug },
      e('h3', null, e('a', { href: `/${topic.slug}` }, topic.title)), e('p', null, topic.description)))));
}
function EnquiryPage({ topic }) {
  return e(Page, { eyebrow: 'Self-enquiry · Uday Kumar’s teaching', title: topic.title, intro: topic.answer, overview: topic.description },
    e('nav', { 'aria-label': 'Breadcrumb', className: 'reading-links' }, e('a', { href: '/' }, 'Mind Clarity'), e('a', { href: '/faq' }, 'Questions and answers')),
    e('p', { className: 'quiet-note' }, 'Teaching: Uday Kumar · Adapted from his written discussions and clarifications · Updated 11 October 2026. Explore how understanding the Creator carries into this question and the way we participate in life.'),
    e('article', { className: 'compact-reading' },
      ...topic.sections.map(([heading,text]) => e('section', { key: heading }, e('h2', null, heading), e('p', null, text))),
      topic.slug === 'meditation-and-self-realization' ? e('section', null, e('p', null, research.process), e('p', null, e('a', {href:'/philosophy#research-connections'}, research.link))) : null,
      e('h2', null, 'Related questions'),
      ...topic.entries.map(([q,a]) => e('section', { key: q }, e('h3', null, q), e('p', null, a))),
      e(Reflection, null, topic.reflection),
      e('section', {className:'journey-connection'}, e('h2', null, journey.connectionTitle),
        e('p', null, journey.connection),
        journey.connectionNote && e('p', {className:'quiet-note'}, journey.connectionNote),
        e('div', {className:'reading-links'}, e('a', {href:'/philosophy#astrology'}, journey.astrologyTitle), e('a', {href:'/philosophy#reasoning'}, journey.reasonTitle))),
      e('div', { className: 'reading-links' }, e('a', { href: topic.practiceLink }, 'Explore an optional everyday example'), e('a', { href: '/philosophy' }, 'Read the full philosophy'), e('a', { href: '/faq#enquiry-title' }, 'Find another answer'))),
    e(EnquiryLinks),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' }));
}
export const enquiryPages = Object.fromEntries(enquiryTopics.map(topic => [topic.slug, () => e(EnquiryPage, {topic})]));
