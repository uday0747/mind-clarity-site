import React from 'react';
import { mount } from './mount.js';
import { Page, Reflection, TopicLinks } from './site-layout.js';
const e = React.createElement;
export function App() {
  return e(Page, { home: true, eyebrow: 'Begin with your own experience',
    title: 'Pause. What do you notice?', intro: 'A thought appears. A feeling follows. Before you respond, there is a moment to see more clearly. Begin there.' },
    e('section', { className: 'first-practice', 'aria-labelledby': 'first-practice-title' },
      e('div', null, e('p', { className: 'eyebrow' }, 'One minute of reflection'),
        e('h2', { id: 'first-practice-title' }, 'Bring one small situation to mind.'),
        e('ol', { className: 'practice-steps' },
          e('li', null, e('strong', null, 'Notice.'), ' Name the feeling or thought, without needing to push it away.'),
          e('li', null, e('strong', null, 'Look again.'), ' What do you know happened? What are you assuming?'),
          e('li', null, e('strong', null, 'Choose.'), ' What is one kind, responsible action you can take?')),
        e('a', { className: 'button', href: '/practice.html#five-minutes' }, 'Continue the five-minute practice')),
      e('figure', { className: 'practice-image' },
        e('picture', null,
          e('source', { media: '(min-width: 761px)', type: 'image/webp', srcSet: '/assets/pond-desktop-640.webp 640w, /assets/pond-desktop-960.webp 960w', sizes: '(min-width: 1180px) 441px, 40vw' }),
          e('source', { type: 'image/webp', srcSet: '/assets/pond-mobile-480.webp 480w, /assets/pond-mobile-960.webp 960w', sizes: 'calc(100vw - 92px)' }),
          e('img', { src: '/assets/pond-fallback.jpg', alt: 'A quiet moment beside a lotus pond', width: 600, height: 400, fetchPriority: 'high', decoding: 'async' })),
        e('figcaption', null, 'Let understanding begin in an ordinary moment.'))),
    e('section', { id: 'practice', className: 'home-section' },
      e('p', { className: 'eyebrow' }, 'Bring clarity into everyday life'),
      e('h2', null, 'Start with what is on your mind.'),
      e(TopicLinks)),
    e('section', { className: 'home-section philosophy-intro' },
      e('div', null, e('p', { className: 'eyebrow' }, 'Explore the philosophy'),
        e('h2', null, 'One Shakti. Many expressions of life.'),
        e('p', null, 'Mind Clarity begins with the understanding that one source appears as every being and experience. Witnessing is noticing what moves through us; compassion is recognising the same life in another; responsibility is how we act.'),
        e('a', { className: 'text-link', href: '/philosophy.html' }, 'Read the complete philosophy →')),
      e(Reflection, null, 'Remember a disagreement. Can you recognise the other person’s humanity and still be clear about the action or boundary that is needed?')),
    e('section', { className: 'home-section' },
      e('p', { className: 'eyebrow' }, 'From understanding to action'),
      e('h2', null, 'Make one part of today more beautiful.'),
      e('p', null, 'Listen without interrupting. Repair a mistake. Care for a shared place. Choose one act you can carry out today, then notice what changes.'),
      e('div', { className: 'reading-links' },
        e('a', { href: '/philosophy.html#beautiful-world' }, 'The Beautiful World vision'),
        e('a', { href: '/faq.html' }, 'Questions while exploring'))));
}
if (typeof document !== 'undefined') mount(App);
