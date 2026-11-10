import React from 'react';
import categoriesData from './categories-content.json' with { type: 'json' };

const e = React.createElement;

const categoryHrefs = {
  '01': '/foundations',
  '02': '/rules-of-the-game',
  '03': '/daily-life',
  '04': '/inner-enquiry',
  '05': '/world-vision',
  '06': '/reflections'
};

export function CategoriesSection() {
  return e('section', { className: 'home-section category-library-section', id: 'categories', 'aria-labelledby': 'categories-heading' },
    e('div', { className: 'category-library-header' },
      e('span', { className: 'story-eyebrow' }, 'Structured Learning & Future Vision'),
      e('h2', { id: 'categories-heading' }, 'The 6 Core Categories of Mind Clarity'),
      e('p', { className: 'intro' }, 'Explore the complete teachings organized into 6 dedicated paths, each with its own focused readings and upcoming expansions.')
    ),
    e('div', { className: 'categories-grid' },
      categoriesData.categories.map(cat =>
        e('article', { key: cat.number, className: 'category-card', id: `cat-${cat.number}` },
          e('div', { className: 'category-card-header' },
            e('span', { className: 'category-badge', 'aria-hidden': true }, cat.number),
            e('h3', null, cat.title),
            e('p', { className: 'category-theme' }, cat.theme)
          ),
          e('div', { className: 'category-topics-list' },
            e('h4', { className: 'topics-heading' }, 'Current Readings'),
            e('ul', null,
              cat.currentTopics.slice(0, 3).map((topic, idx) =>
                e('li', { key: idx },
                  e('a', { href: topic.href, className: 'topic-title-link' }, topic.title)
                )
              )
            )
          ),
          e('div', { className: 'category-card-footer' },
            e('a', { href: categoryHrefs[cat.number], className: 'button primary category-explore-btn' }, `Explore Category ${cat.number} →`),
            e('div', { className: 'category-upcoming-wrapper' },
              e('span', { className: 'future-badge' }, 'Future Expansions'),
              e('span', { className: 'category-upcoming-note' }, cat.futureExpansions[0])
            )
          )
        )
      )
    )
  );
}
