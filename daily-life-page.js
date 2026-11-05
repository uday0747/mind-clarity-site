import React from 'react';
import mission from './mission-content.json' with { type: 'json' };
import discussion from './discussion-content.json' with { type: 'json' };
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import { FutureExpansionsCard, CategoryPagination } from './category-helpers.js';

const e = React.createElement;
const p = text => e('p', null, text);

export default function DailyLifePage() {
  const sections = [
    ['two-levels', 'Seeing the Same Creator in Everyone'],
    ['conflict', 'When a Conversation Hurts (Conflict)'],
    ['guilt-boundaries', 'Guilt, Responsibility & Boundaries'],
    ['money-work', 'Possessions, Wealth & Work'],
    ['faith-harmony', 'Religious Harmony & Questioning Division']
  ];

  const futureItems = [
    'Dealing with grief, loss, and loneliness',
    'Parenting and raising children with Creator-awareness',
    'Workplace pressure and competition without losing inner peace'
  ];

  return e(Page, {
    eyebrow: 'Category 03 · Daily Life & Relationships',
    title: 'Daily Life & Relationships: Living the Understanding',
    intro: 'Recognizing the same Creator in every person dissolves hatred, softens grief and resentment, and inspires natural compassion and practical responsibility in family, work, and community.',
    overview: 'Explore how spiritual philosophy translates into everyday human living: resolving interpersonal friction, setting clear boundaries without malice, handling money and career honestly, and moving past sectarian divisions.'
  },
    e('div', { className: 'reading-grid' },
      e(Contents, { items: sections }),
      e('div', { className: 'reading-body' },
        e(Lesson, { id: 'two-levels', number: '01', title: 'Seeing the Same Creator in Everyone' },
          p('The most transformative practical step in Mind Clarity is recognizing the single shared Creator looking out through the eyes of the person standing before you—especially when you disagree with them.'),
          p('Hatred and grudge thrive only when you believe other people are fundamentally separate aliens competing for your survival. When you see that both you and they are roles played by the same one source within a pre-designed script, hostility dissolves naturally.'),
          p('This does not mean accepting abusive conduct. At the level of the role, practical boundaries, clear communication, and protection of others remain essential. But the malice, bitter hatred, and desire for revenge leave the heart completely.'),
          e(Reflection, null, 'Think of someone with whom you have experienced tension. Can you recognize that beneath their personality and flaws, the exact same Creator is experiencing that life?')
        ),
        e(Lesson, { id: 'conflict', number: '02', title: 'When a Conversation Hurts (Conflict)' },
          p('In family and workplace life, words are spoken that wound the ego. The instinct of the disconnected role is to strike back immediately with sarcasm, anger, or silent withdrawal.'),
          p('Mind Clarity teaches you to pause in the middle of the storm. Notice the sensation in the chest or throat; recognize it as an emotion occurring to the temporary role. The eternal Creator within you cannot be insulted, degraded, or diminished by human words.'),
          p('From this inner steadiness, you can respond with calm clarity. You can say "what you said was unfair and unacceptable" without screaming, or choose not to engage when an argument is futile. Dignity comes from knowing who you are.'),
          e(Reflection, null, 'Recall a painful conversation. Did the hurt belong to the temporary character’s pride, or to your real divine identity?')
        ),
        e(Lesson, { id: 'guilt-boundaries', number: '03', title: 'Guilt, Responsibility & Boundaries' },
          p('Many people carry a lifetime of hidden guilt over past mistakes, or allow themselves to be exploited because they confuse kindness with having no boundaries.'),
          p('In this understanding, a mistake was a scene that unfolded in the past. Self-punishment and endless regret do not repair anything; they only deepen the illusion of helplessness. Take practical responsibility, repair what can be repaired honestly, apologize where needed, and move forward.'),
          p('Setting a boundary is not hatred. You can say "no" to a request, walk away from toxic behavior, or lock your door at night with complete goodwill in your heart. True compassion includes respecting the well-being of the body and mind in your care.'),
          e(Reflection, null, 'Is there an old regret you have been punishing yourself for? Can you take practical learning from it and release the self-inflicted punishment?')
        ),
        e(Lesson, { id: 'money-work', number: '04', title: 'Possessions, Wealth & Work' },
          p('Money, houses, and tools are parts of the physical world designed to support human experience and creative work. They become causes of misery only when matter overshadows human beings.'),
          p('When a person defines their entire worth by their bank account or possessions, they become prisoners of anxiety. But when you understand that all wealth belongs to the creation, you work with enthusiasm, produce value, earn honestly, and share generously without grasping fear.'),
          e(Reflection, null, 'Are you using possessions to serve life and human connection, or are possessions defining your peace of mind?')
        ),
        e(Lesson, { id: 'faith-harmony', number: '05', title: 'Religious Harmony & Questioning Division' },
          p(mission.practicePeaceScene),
          p(mission.practicePeaceRemember),
          p(mission.practicePeaceResponse),
          p('Truth is universal. Whether someone calls the source Ishwara, Allah, God, Brahman, or Consciousness, there is only one reality. Refusing violence and sectarian hatred is the true mark of spiritual maturity.'),
          e(Reflection, null, mission.practicePeaceReflection)
        ),
        e(FutureExpansionsCard, { categoryTitle: 'Daily Life & Relationships', items: futureItems }),
        e(CategoryPagination, {
          prev: { href: '/rules-of-the-game', label: '02. The Rules of the Game' },
          next: { href: '/inner-enquiry', label: '04. Inner Enquiry & Practice' }
        })
      )
    ),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' })
  );
}

