import React from 'react';
import categoriesData from './categories-content.json' with { type: 'json' };

const e = React.createElement;

export function CategoriesSection() {
  return e('section', { className: 'home-section category-library-section', id: 'categories', 'aria-labelledby': 'categories-heading' },
    e('div', { className: 'category-library-header' },
      e('span', { className: 'story-eyebrow' }, 'Structured Learning & Future Vision'),
      e('h2', { id: 'categories-heading' }, categoriesData.title),
      e('p', { className: 'intro' }, categoriesData.subtitle)
    ),
    e('div', { className: 'categories-grid' },
      categoriesData.categories.map(cat =>
        e('article', { key: cat.id, className: 'category-card', id: `cat-${cat.id}` },
          e('div', { className: 'category-card-header' },
            e('span', { className: 'category-badge', 'aria-hidden': true }, cat.number),
            e('h3', null, cat.title),
            e('p', { className: 'category-theme' }, cat.theme)
          ),
          e('div', { className: 'category-topics-list' },
            e('h4', { className: 'topics-heading' }, 'Current Readings'),
            e('ul', null,
              cat.currentTopics.map(topic =>
                e('li', { key: topic.title },
                  e('a', { href: topic.href, className: 'topic-title-link' }, topic.title),
                  e('span', { className: 'topic-desc' }, topic.description)
                )
              )
            )
          ),
          e('div', { className: 'future-expansions-card' },
            e('div', { className: 'future-header' },
              e('span', { className: 'future-badge' }, 'In Preparation'),
              e('h4', null, cat.futureTitle)
            ),
            e('ul', { className: 'future-list' },
              cat.futureExpansions.map((item, idx) =>
                e('li', { key: idx },
                  e('span', { className: 'bullet-icon', 'aria-hidden': true }, '✦'),
                  e('span', null, item)
                )
              )
            )
          )
        )
      )
    )
  );
}
