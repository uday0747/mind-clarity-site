import React from 'react';
import { mount } from './mount.js';
import { Page, Reflection, TopicLinks } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };
import { EnquiryLinks } from './enquiry-pages.js';
const e = React.createElement;
export function App() {
  return e(Page, { home: true, eyebrow: 'Mind Clarity · Uday Kumar’s spiritual philosophy',
    title: 'We are the Creator.', intro: teaching.statement },
    e('p', { className: 'quiet-note' }, teaching.meaning),
    e(EnquiryLinks),
    e('div', { className: 'reading-links' }, e('a', { href: '/philosophy#mula-siddhanta' }, 'Understand the root statement'), e('a', { href: '/practice#movie-lotus' }, 'Explore the movie and lotus')),
    e('section', { className: 'first-practice', 'aria-labelledby': 'first-practice-title' },
      e('div', null, e('p', { className: 'eyebrow' }, 'One minute of reflection'),
        e('h2', { id: 'first-practice-title' }, 'Remember who is experiencing this scene.'),
        e('ol', { className: 'practice-steps' },
          e('li', null, e('strong', null, 'Recall the teaching.'), ' We are the Creator who entered this game for experiences. Its design cannot be rewritten from inside.'),
          e('li', null, e('strong', null, 'Notice the role.'), ' Bring a small event to mind. Which feeling or role has become your whole identity? What next scene are you demanding?'),
          e('li', null, e('strong', null, 'Return to remembrance.'), ' Recall the same Creator in yourself and others. Notice whether that changes how you meet the scene. Your response, too, unfolds within the game.')),
        e('a', { className: 'button', href: '/practice#five-minutes' }, 'Continue the five-minute practice')),
      e('figure', { className: 'practice-image' },
        e('picture', null,
          e('source', { media: '(min-width: 761px)', type: 'image/webp', srcSet: '/assets/pond-desktop-640.webp 640w, /assets/pond-desktop-960.webp 960w', sizes: '(min-width: 1180px) 441px, 40vw' }),
          e('source', { type: 'image/webp', srcSet: '/assets/pond-mobile-480.webp 480w, /assets/pond-mobile-960.webp 960w', sizes: 'calc(100vw - 92px)' }),
          e('img', { src: '/assets/pond-fallback.jpg', alt: 'A quiet moment beside a lotus pond', width: 600, height: 400, fetchPriority: 'high', decoding: 'async' })),
        e('figcaption', null, 'The lotus: within life, with light attachment to its passing scenes.'))),
    e('section', { id: 'practice', className: 'home-section' },
      e('p', { className: 'eyebrow' }, 'One teaching in everyday experiences'),
      e('h2', null, 'Return to the Creator within each scene.'),
      e(TopicLinks)),
    e('section', { className: 'home-section philosophy-intro' },
      e('div', null, e('p', { className: 'eyebrow' }, 'Explore the philosophy'),
        e('h2', null, 'The same Creator in every relationship.'),
      e('p', null, 'In this teaching, the person who agrees with you and the person who challenges you share the same source. Remembering that connection is the basis for care arising naturally. Conversations, decisions, and repair are all experiences within the game whose total design we cannot rewrite.'),
        e('a', { className: 'text-link', href: '/philosophy' }, 'Read the complete philosophy →')),
      e(Reflection, null, 'Remember a disagreement as a scene within the game. Which role felt threatened? Recall the same Creator in both people and the design you cannot rewrite. What changes in how you listen or respond?')),
    e('section', { className: 'home-section' },
      e('p', { className: 'eyebrow' }, 'The Beautiful World intention'),
      e('h2', null, 'Care for the creation we share.'),
      e('p', null, 'Uday’s hope is that recognizing ourselves as the Creator changes our relationship with everything we experience. Possessions become small parts of creation; people and nature are no longer outside our concern. Caring for them is participation within the unfolding game. Consider one relationship or place: what does remembering the shared Creator reveal about how you meet it?'),
      e('div', { className: 'reading-links' },
        e('a', { href: '/philosophy#beautiful-world' }, 'The Beautiful World vision'),
        e('a', { href: '/faq' }, 'Questions while exploring'))));
}
if (typeof document !== 'undefined') mount(App);
