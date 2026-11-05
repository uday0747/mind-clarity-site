import React from 'react';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import { FutureExpansionsCard, CategoryPagination } from './category-helpers.js';

const e = React.createElement;
const p = text => e('p', null, text);

export default function WorldVisionPage() {
  const sections = [
    ['beautiful-world', 'A Beautiful World within the Game'],
    ['progression-yugas', 'The Progression of the Yugas'],
    ['technology-service', 'Technology in the Service of Experience'],
    ['central-intention', 'The Central Intention']
  ];

  const futureItems = [
    'Education and living in Satya Yuga',
    'Cooperation over survival struggle in future societies',
    'Living in deep harmony with nature and all living beings'
  ];

  return e(Page, {
    eyebrow: 'Category 05 · World Vision & The Yugas',
    title: 'World Vision & The Yugas: Evolution of Society & Satya Yuga',
    intro: 'Human history is not an endless, meaningless tragedy. It is an unfolding progression through cosmic cycles (Yugas), moving from the dense fog of Kali Yuga into the collective awakening of Satya Yuga.',
    overview: 'Explore the wider historical and societal vision of Mind Clarity: the transition from survival struggle to shared truth, using technology and AI to eliminate drudgery, and uniting behind the central intention of making this world a beautiful home.'
  },
    e('div', { className: 'reading-grid' },
      e(Contents, { items: sections }),
      e('div', { className: 'reading-body' },
        e(Lesson, { id: 'beautiful-world', number: '01', title: 'A Beautiful World within the Game' },
          p('Spiritual understanding does not reject the world or treat creation as an evil illusion to be discarded. This universe is a magnificent game of experiences crafted by the Creator.'),
          p('When individuals awaken to their shared divine origin, the way they treat this planet transforms completely. Nature, clean rivers, forests, animals, and cities are seen as expressions of our shared home. Caring for the earth and protecting each other becomes as natural as caring for one’s own body.'),
          e(Reflection, null, 'What is one concrete way you can contribute to the beauty and harmony of your immediate environment today?')
        ),
        e(Lesson, { id: 'progression-yugas', number: '02', title: 'The Progression of the Yugas' },
          p('The ancient concept of the Yugas describes the grand rhythmic breathing of cosmic consciousness:'),
          e('ul', null,
            e('li', null, e('strong', null, 'Kali Yuga:'), ' The age of dense forgetting, where beings experience intense separation, fear, cut-throat survival competition, and religious dogma.'),
            e('li', null, e('strong', null, 'The Transition:'), ' The dawn of global communication, interconnectedness, and the questioning of archaic divisions.'),
            e('li', null, e('strong', null, 'Satya Yuga:'), ' The age of truth and unity, where human beings live in conscious remembrance of the Creator, cooperating joyfully and living in harmony with all existence.')
          ),
          p('Satya Yuga does not arrive through external force or sudden supernatural miracles. It dawns in the world heart by heart, mind by mind, as people wake up from the dream of isolated ego.'),
          e(Reflection, null, 'When you observe the changes in global connectivity and consciousness today, do you see the signs of an awakening humanity?')
        ),
        e(Lesson, { id: 'technology-service', number: '03', title: 'Technology in the Service of Experience' },
          p('For thousands of years, most human beings spent their entire lives from sunrise to sunset in exhausting physical survival labor—hunting, plowing, manual factory shifts—leaving little time or energy for reflection and self-realization.'),
          p('Technology, automation, and Artificial Intelligence are not demonic threats within the design; they are tools created within the game to relieve human beings from repetitive survival drudgery. When machines do the heavy lifting, humanity is finally freed to create, love, explore consciousness, and live with genuine depth and warmth.'),
          e(Reflection, null, 'How can modern technology be harnessed in your own life to create more space for stillness, learning, and meaningful connection?')
        ),
        e(Lesson, { id: 'central-intention', number: '04', title: 'The Central Intention' },
          p('The central intention of Uday Kumar’s teaching is simple, clear, and uncompromising:'),
          e('blockquote', null, p('“To make this world a beautiful place for all people to live in peace, understanding, and genuine happiness.”')),
          p('Spiritual realization is never complete if it remains an abstract philosophy locked in books. It fulfills itself when it radiates into practical kindness, dissolving boundaries, and building a world where every child can grow up free from terror and sectarian hatred.'),
          e(Reflection, null, 'Can you align your thoughts and actions with this central intention: contributing to peace and happiness wherever you are?')
        ),
        e(FutureExpansionsCard, { categoryTitle: 'World Vision & The Yugas', items: futureItems }),
        e(CategoryPagination, {
          prev: { href: '/inner-enquiry', label: '04. Inner Enquiry & Practice' },
          next: { href: '/reflections', label: '06. Reflections & Ancient Dialogue' }
        })
      )
    ),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' })
  );
}

