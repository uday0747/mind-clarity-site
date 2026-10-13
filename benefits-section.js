import React from 'react';
import benefits from './benefits-content.json' with { type: 'json' };
const e = React.createElement;
export function BenefitsSection({ compact = false } = {}) {
  return e('section', { id: 'benefits', className: 'home-section', 'aria-labelledby': 'benefits-title' },
    e('h2', { id: 'benefits-title' }, benefits.title),
    e('p', null, benefits.intro), e('p', null, benefits.state),
    e('div', { className: 'path-grid' }, benefits.items.map(item =>
      e('div', { key: item.title }, e('h3', null, item.title), e('p', null, item.text)))),
    !compact && e('div', { id: 'benefits-design' }, e('h3', null, benefits.designTitle),
      e('p', null, benefits.design), e('p', null, benefits.effort)),
    e('p', { className: 'quiet-note' }, benefits.note),
    compact && e('a', { className: 'text-link', href: '/philosophy#benefits' }, benefits.link));
}
