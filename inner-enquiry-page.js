import React from 'react';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import { FutureExpansionsCard, CategoryPagination } from './category-helpers.js';

const e = React.createElement;
const p = text => e('p', null, text);

export default function InnerEnquiryPage() {
  const sections = [
    ['who-am-i', 'Who Am I? How to Begin Self-Enquiry'],
    ['meditation-silence', 'Meditation & Silence: Awareness without Performance'],
    ['four-paths', 'Four Paths to One Recognition'],
    ['sthitaprajna', 'Steady Wisdom (Sthitaprajna)'],
    ['witnessing', 'Remembering During Experience (Witnessing)']
  ];

  const futureItems = [
    'Moving from thinking into pure witnessing',
    'Maintaining inner silence amidst modern noise and digital distractions',
    'Spiritual equanimity vs emotional suppression'
  ];

  return e(Page, {
    eyebrow: 'Category 04 · Inner Enquiry & Practice',
    title: 'Inner Enquiry & Practice: Self-Realization & Equanimity',
    intro: 'Self-enquiry and meditation require no rigid timetables, severe austerities, or occult straining. They are the natural return to who you already are: the quiet, witnessing awareness behind every thought.',
    overview: 'Explore the internal contemplative tools of Mind Clarity: asking Who Am I, resting in effortless meditation, harmonizing Karma, Bhakti, Jnana and Raja Yoga, cultivating steady wisdom, and sustaining witnessing awareness in daily activity.'
  },
    e('div', { className: 'reading-grid' },
      e(Contents, { items: sections }),
      e('div', { className: 'reading-body' },
        e(Lesson, { id: 'who-am-i', number: '01', title: 'Who Am I? How to Begin Self-Enquiry' },
          p('Self-enquiry begins with pure curiosity about the experiencer. Every morning you wake up and assume "I am this name, this profession, this body with these worries."'),
          p('Mind Clarity asks: Who is aware of the name? Who observes the thoughts arising and disappearing? When you investigate honestly, you discover that you are not the thought, not the emotion, and not the physical body. You are the continuous awareness in which the entire world appears.'),
          p('You do not need an ashram, a complex manual, or an initiation to begin. In any ordinary moment—sitting with a cup of tea, waiting at a traffic light, or walking under trees—you can quietly ask: "Who is having this experience?" and notice the stillness that answers.'),
          e(Reflection, null, 'Right now, notice the space of awareness in which these words are being read. Are you the fleeting thought, or the silent awareness beholding it?')
        ),
        e(Lesson, { id: 'meditation-silence', number: '02', title: 'Meditation & Silence: Awareness without Performance' },
          p('Many spiritual seekers turn meditation into a stressful competitive sport: trying to stop every thought, achieve supernatural visions, or sit in agony for hours. This turns meditation into another egoic performance.'),
          p('True meditation in Mind Clarity is simple: quiet remembrance of the Creator. You sit comfortably, breathe naturally, and relax the effort to achieve anything. Thoughts may come and go like clouds across the vast blue sky. You do not fight them; you simply do not hold onto them.'),
          p('In that silence, the body rests deeply, the nervous system heals, and the living connection to existence becomes an effortless, unbroken reality.'),
          e(Reflection, null, 'Can you sit quietly for five minutes without demanding any mystical fireworks, resting simply in the warmth of existence?')
        ),
        e(Lesson, { id: 'four-paths', number: '03', title: 'Four Paths to One Recognition' },
          p('Ancient traditions spoke of four spiritual yogas: Karma (dedicated action), Bhakti (devotional love), Jnana (philosophical enquiry), and Raja Yoga (meditation and inner stillness). Often, schools argue over which path is superior.'),
          p('In the synthesis of Mind Clarity, all four paths meet naturally in one realization:'),
          e('ul', null,
            e('li', null, e('strong', null, 'Jnana Yoga:'), ' Knowing the root statement—that we are the Creator who designed and entered this play.'),
            e('li', null, e('strong', null, 'Bhakti Yoga:'), ' Seeing that same beloved divine reality looking out through every person, bird, tree, and child.'),
            e('li', null, e('strong', null, 'Karma Yoga:'), ' Fulfilling daily duties with excellence and generosity, knowing action is part of the unfolding script.'),
            e('li', null, e('strong', null, 'Raja Yoga:'), ' Resting in the pure, quiet witnessing awareness that remains untouched by passing storms.')
          ),
          e(Reflection, null, 'Which of these four dimensions feels most natural to you today? Notice how they all complement and deepen each other.')
        ),
        e(Lesson, { id: 'sthitaprajna', number: '04', title: 'Steady Wisdom (Sthitaprajna)' },
          p('The Bhagavad Gita speaks of the Sthitaprajna—the person of steady, unshakeable wisdom. Such a person does not become wildly arrogant when praise and victory arrive, nor crushed by despair when criticism and defeat strike.'),
          p('How is this steadiness achieved? Not by suppressing emotions or becoming a cold robot, but through deep understanding. If an actor plays a king on stage and is crowned with gold, he does not believe he owns an empire. If he plays a beggar and receives dry bread, he does not weep at night. He knows it is a play.'),
          e(Reflection, null, 'When praise or criticism came your way recently, how deeply did you identify with it? Can you rest in steady wisdom?')
        ),
        e(Lesson, { id: 'witnessing', number: '05', title: 'Remembering During Experience (Witnessing)' },
          p('Witnessing means living your life fully while keeping the flame of remembrance alive in the heart. When fear arises, you observe: "Fear is passing through this body; but I am the eternal awareness holding this moment."'),
          p('As witnessing matures, an extraordinary freedom opens up. You laugh fully, weep when sorrow comes, care deeply for your family, build your life—and never lose touch with your divine origin.'),
          e(Reflection, null, 'During your next conversation, can you remain as the silent witness listening both to your own words and the other person’s speech?')
        ),
        e(FutureExpansionsCard, { categoryTitle: 'Inner Enquiry & Practice', items: futureItems }),
        e(CategoryPagination, {
          prev: { href: '/daily-life', label: '03. Daily Life & Relationships' },
          next: { href: '/world-vision', label: '05. World Vision & The Yugas' }
        })
      )
    ),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' })
  );
}

