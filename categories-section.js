import React from 'react';

const e = React.createElement;

const categoryCards = [
  {
    number: '01',
    title: 'The Foundations',
    theme: 'Understanding God, the Cosmic Story, and our True Divine Identity.',
    href: '/foundations',
    upcoming: '3 upcoming topics in preparation'
  },
  {
    number: '02',
    title: 'The Rules of the Game',
    theme: 'Time, Astrology, Free Will, and the Art of True Surrender.',
    href: '/rules-of-the-game',
    upcoming: '3 upcoming topics in preparation'
  },
  {
    number: '03',
    title: 'Daily Life & Relationships',
    theme: 'Bringing remembrance into real-world challenges, conflicts, and family.',
    href: '/daily-life',
    upcoming: '3 upcoming topics in preparation'
  },
  {
    number: '04',
    title: 'Inner Enquiry & Practice',
    theme: 'The tools of self-realization: stillness, witnessing, and equanimity.',
    href: '/inner-enquiry',
    upcoming: '3 upcoming topics in preparation'
  },
  {
    number: '05',
    title: 'World Vision & The Yugas',
    theme: 'Collective awakening, the evolution of society, and the future of humanity.',
    href: '/world-vision',
    upcoming: '3 upcoming topics in preparation'
  },
  {
    number: '06',
    title: 'Reflections & Ancient Dialogue',
    theme: 'In-depth essays, scriptural connections, and cultural reflections.',
    href: '/reflections',
    upcoming: '3 upcoming topics in preparation'
  }
];

export function CategoriesSection() {
  return e('section', { className: 'home-section category-library-section', id: 'categories', 'aria-labelledby': 'categories-heading' },
    e('div', { className: 'category-library-header' },
      e('span', { className: 'story-eyebrow' }, 'Structured Learning & Future Vision'),
      e('h2', { id: 'categories-heading' }, 'The 6 Core Categories of Mind Clarity'),
      e('p', { className: 'intro' }, 'Explore the complete teachings organized into 6 dedicated paths, each with its own focused readings and upcoming expansions.')
    ),
    e('div', { className: 'categories-grid' },
      categoryCards.map(cat =>
        e('article', { key: cat.number, className: 'category-card', id: `cat-${cat.number}` },
          e('div', { className: 'category-card-header' },
            e('span', { className: 'category-badge', 'aria-hidden': true }, cat.number),
            e('h3', null, cat.title),
            e('p', { className: 'category-theme' }, cat.theme)
          ),
          e('div', { className: 'category-card-footer' },
            e('a', { href: cat.href, className: 'button primary category-explore-btn' }, `Explore Category ${cat.number} →`),
            e('span', { className: 'category-upcoming-note' }, cat.upcoming)
          )
        )
      )
    )
  );
}
