import React from 'react';
import teaching from './teaching-content.json' with { type: 'json' };
import entry from './creator-entry-content.json' with { type: 'json' };
import content from './understanding-god-content.json' with { type: 'json' };
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import { FutureExpansionsCard, CategoryPagination } from './category-helpers.js';

const e = React.createElement;
const p = text => e('p', null, text);

export default function FoundationsPage() {
  const sections = [
    ['mula-siddhanta', 'The Root Statement (Mula Siddhanta)'],
    ['understanding-god', 'Understanding God & The Cosmic Story'],
    ['powers-behind', 'Why We Left Our Powers Behind'],
    ['one-shakti', 'One Creator, Many Roles']
  ];

  const futureItems = [
    'What existed before creation?',
    'Why contrast and limitation are necessary for rich experiences',
    'God as living shared reality vs. an external punishing ruler'
  ];

  return e(Page, {
    eyebrow: 'Category 01 · Foundations',
    title: 'The Foundations: Understanding God & Our Divine Identity',
    intro: 'The one Creator was alone before the multiplicity of experience. We created this game of experiences and entered it, leaving unrestricted powers behind. Having designed the game before entering, we cannot change its design from inside.',
    overview: 'Explore the fundamental root statement of Mind Clarity: why the universe was created, the shared divine identity within every living being, why powers were left behind, and how recognizing the eternal actor softens resentment and fear.'
  },
    e('div', { className: 'reading-grid' },
      e(Contents, { items: sections }),
      e('div', { className: 'reading-body' },
        e(Lesson, { id: 'mula-siddhanta', number: '01', title: 'The Root Statement (Mula Siddhanta)' },
          e('blockquote', null, p('“' + teaching.original + '”'), e('cite', null, 'Uday’s original statement · 16 September 2026')),
          p('The one Creator was alone before the multiplicity of experience. We made this game and entered its many lives and roles to experience it. “We are the creators” and “we are the Creator” express that same shared identity. God is not absent from the game: the source, the world of experience, and its deepest experiencer belong to one indivisible reality.'),
          e('h3', null, 'A complete design, experienced from within'),
          p('Having designed the game before entering, we cannot change its design from inside it. This includes the movement of time, forgetting, remembrance, effort, and learning. No individual can step outside the whole to replace its course. We do not know the next scene in advance.'),
          p('Deciding, speaking, repairing, and building still occur within life. They are themselves parts of the unfolding game. Remembering the Creator transforms how we understand each scene; it frees us from the anxious demand to control the total design.'),
          e(Reflection, null, 'Consider a small scene you wanted to unfold differently. Recall the Creator who designed and entered this game, whose design cannot be rewritten from inside. Can you distinguish participating in the scene from demanding control of the whole?')
        ),
        e(Lesson, { id: 'understanding-god', number: '02', title: 'Understanding God & The Cosmic Story' },
          p('Before the universe, there was only the Creator—one undivided reality. In that solitary existence, there was no second person to love, no surprise, no contrast, and no unfolding story. To experience life, the Creator designed a cosmic play of billions of forms, names, planets, and eras, and then willingly entered the game.'),
          p('God is not an outside ruler sitting in the clouds watching people suffer or rewarding selected followers. God is the very consciousness living in you, looking through your eyes right now, and experiencing every joy, sorrow, discovery, and lesson.'),
          p('When this is understood, the ancient feeling of religious guilt and terror dissolves. You do not have to beg an outside tyrant for mercy. You realize who you are, honor the journey of experience, and treat every other human being with the dignity of a shared origin.'),
          e(Reflection, null, 'When you look at your own life, what shifts when you see yourself not as an abandoned creature trying to survive, but as the Creator having this unique experience?')
        ),
        e(Lesson, { id: 'powers-behind', number: '03', title: 'Why We Left Our Powers Behind' },
          e('h3', null, entry.title),
          p(entry.identity),
          p(entry.example),
          p(entry.recognition),
          p('If a human character entered a game with omnipotence and omniscience—knowing every future scene and able to instantly rewrite reality with a thought—the game would immediately collapse. There would be no learning, no courage, no vulnerability, and no love. Contrast and limitation are the exact conditions that make experience real.'),
          e(Reflection, null, 'Consider a moment of hardship or difficulty. Does remembering why powers were set aside help you meet the moment with resilience rather than bitter resentment?')
        ),
        e(Lesson, { id: 'one-shakti', number: '04', title: 'One Creator, Many Roles' },
          p('From the root statement follows a distinction between who we are and the role we experience. A parent, friend, worker, or stranger is a role within the game. In this philosophy, the Creator is the shared identity through all of them.'),
          p('This is why recognition includes other people. Claiming a divine identity only for oneself would miss the same source in the person who disagrees. Both praise and criticism occur between roles within the same creation.'),
          p('For example, a colleague makes a mistake that affects your work. Notice the frustrated role, then recall the Creator in both lives. The mistake and the conversation about it are scenes in the game; neither gives a complete account of who either person is. Addressing the mistake is also part of that unfolding.'),
          e(Reflection, null, 'Recall a disagreement as an experience between roles. What changes when you recognize the same Creator in both people, while remembering that neither role stands outside the game to rewrite its design?')
        ),
        e(FutureExpansionsCard, { categoryTitle: 'The Foundations', items: futureItems }),
        e(CategoryPagination, {
          next: { href: '/rules-of-the-game', label: '02. The Rules of the Game' }
        })
      )
    ),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' })
  );
}

