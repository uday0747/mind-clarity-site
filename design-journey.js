import React from 'react';
import journey from './design-journey-content.json' with { type: 'json' };
const e = React.createElement;
export { journey };
export function AstrologyExplanation({ heading = 'h3' }) {
  return e(React.Fragment, null,
    e('p', null, journey.astrology),
    e(heading, null, journey.periodTitle), e('p', null, journey.period),
    e(heading, null, journey.planetsTitle), e('p', null, journey.planets),
    e('details', { className: 'discovery-reveal astrology-sources' },
      e('summary', null, journey.sources),
      e('ul', null,
        e('li', null, e('a', { href: 'https://www.wisdomlib.org/hinduism/book/brihat-jataka-by-varahamihira-sanskrit-english/d/doc1501584.html', hrefLang: 'en' }, journey.classicalSource)),
        e('li', null, e('a', { href: 'https://learn.acharyajyotish.com/learn/dashas/vimshottari-dasha/', hrefLang: 'en' }, journey.timingSource)))));
}
