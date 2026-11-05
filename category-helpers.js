import React from 'react';

const e = React.createElement;

export function FutureExpansionsCard({ categoryTitle, items }) {
  return e('section', { className: 'future-expansions-card', 'aria-labelledby': 'future-heading' },
    e('div', { className: 'future-header' },
      e('span', { className: 'future-badge' }, 'In Preparation'),
      e('h2', { id: 'future-heading' }, `Future Expansions · ${categoryTitle}`)
    ),
    e('p', { className: 'quiet-note' }, 'Upcoming reflections and writings in preparation for this category by Uday Kumar:'),
    e('ul', { className: 'future-list' },
      items.map((item, idx) =>
        e('li', { key: idx },
          e('span', { className: 'bullet-icon', 'aria-hidden': true }, '✦'),
          e('span', null, item)
        )
      )
    )
  );
}

export function CategoryPagination({ prev, next }) {
  return e('nav', { className: 'category-pagination reading-links', 'aria-label': 'Category navigation' },
    prev ? e('a', { href: prev.href, className: 'button secondary' },
      e('span', { 'aria-hidden': true }, '← '),
      prev.label
    ) : null,
    next ? e('a', { href: next.href, className: 'button secondary' },
      next.label,
      e('span', { 'aria-hidden': true }, ' →')
    ) : null
  );
}

