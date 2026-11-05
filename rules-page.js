import React from 'react';
import { journey, AstrologyExplanation } from './design-journey.js';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import { FutureExpansionsCard, CategoryPagination } from './category-helpers.js';

const e = React.createElement;
const p = text => e('p', null, text);

export default function RulesPage() {
  const sections = [
    ['why-act', 'If Everything is Designed, Why Act?'],
    ['astrology', 'Time & Planetary Cycles (Astrology)'],
    ['movie-and-lotus', 'The Movie and the Lotus'],
    ['releasing-control', 'Quieting the Mind & Releasing Control']
  ];

  const futureItems = [
    'Understanding Karma within a pre-designed game',
    'Why difficult periods occur in the planetary cycle',
    'Surrender as effortless understanding, not passive helplessness'
  ];

  return e(Page, {
    eyebrow: 'Category 02 · The Rules of the Game',
    title: 'The Rules of the Game: Time, Design & Surrender',
    intro: 'Having designed the game before entering, we cannot change its design from inside. Surrender is not passive defeat; it is the effortless understanding that frees you from the exhausting struggle against reality.',
    overview: 'Learn why effort, learning, and choices are natural parts of the unfolding script, how planetary time moves human emotions automatically, and how true surrender brings unshakeable inner peace.'
  },
    e('div', { className: 'reading-grid' },
      e(Contents, { items: sections }),
      e('div', { className: 'reading-body' },
        e(Lesson, { id: 'why-act', number: '01', title: 'If Everything is Designed, Why Act?' },
          p('A common doubt arises: "If the design is fixed, why should I make an effort, study, or work?"'),
          p('The answer of Mind Clarity is profound: effort, thinking, choosing, and learning are not outside the design; they are the very way the design unfolds through you. A seed does not say "if the tree is designed, why sprout?" Sprouting is the expression of the design.'),
          p('Surrender does not mean becoming passive, helpless, or tolerating injustice. You act with your full capacity, make decisions, set boundaries, and care for those around you—while letting go of the anxious obsession to dictate the total outcome of the world.'),
          e(Reflection, null, 'What task or responsibility are you facing today? Can you give it your honest effort while releasing the burden of needing to control what comes next?')
        ),
        e(Lesson, { id: 'astrology', number: '02', title: 'Time & Planetary Cycles (Astrology)' },
          e(AstrologyExplanation),
          p(journey.design),
          p('Planetary movements and astrological dashas operate as cosmic clocks within the game. Just as winter brings cold and monsoon brings rain without consulting personal preferences, planetary periods shift human moods, opportunities, and tests automatically.'),
          p('When a person does not know the design, they blame themselves or others for sudden periods of heavy emotion or obstacles. But when you understand planetary time, you recognize: "This is a seasonal chapter of the game." You stay calm, endure the phase with patience, and know that clarity returns when the cycle moves.'),
          e(Reflection, null, journey.question)
        ),
        e(Lesson, { id: 'movie-and-lotus', number: '03', title: 'The Movie and the Lotus' },
          e('h3', null, 'Remembering that it is a movie'),
          p('When you watch a film in a theater, tragic scenes may bring tears to your eyes, and thrilling moments may make your heart race. Yet all along, you know in the quiet background of your mind that it is light moving on a screen. The screen itself is never burned by the fires in the story, nor drowned by the ocean waves.'),
          p('The lotus flower grows in the muddy waters of the pond, yet its petals remain completely dry, fragrant, and unstained by the surrounding mud. In the same way, the awakened person lives fully in the world, engages in relationships, works, and cares deeply—while remaining inwardly untouched by the passing scenes of praise, blame, gain, or loss.'),
          e(Reflection, null, 'Recall a recent event that felt overwhelming. Can you step back into the seat of the viewer and see it as a scene on the screen of your consciousness?')
        ),
        e(Lesson, { id: 'releasing-control', number: '04', title: 'Quieting the Mind & Releasing Control' },
          p(journey.reason),
          journey.reasonNote && p(journey.reasonNote),
          p(journey.connection),
          journey.connectionNote && p(journey.connectionNote),
          p(journey.joy),
          p('The ceaseless chatter of the mind is caused by the impossible demand to predict and control the next scene. The moment you remember that the game was already perfectly crafted by the Creator, the compulsive need to control falls away, and deep natural quiet returns.'),
          e(Reflection, null, 'Notice what happens when you pause right now and release the urge to fix or control the future for just sixty seconds.')
        ),
        e(FutureExpansionsCard, { categoryTitle: 'The Rules of the Game', items: futureItems }),
        e(CategoryPagination, {
          prev: { href: '/foundations', label: '01. The Foundations' },
          next: { href: '/daily-life', label: '03. Daily Life & Relationships' }
        })
      )
    ),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' })
  );
}

