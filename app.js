import React from 'react';
import { mount } from './mount.js';
import { Page, Reflection, TopicLinks } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };
import { ProblemLinks } from './problem-guide.js';
import { EnquiryLinks } from './enquiry-pages.js';
import { PagePathContext } from './site-header.js';
import { pageLanguage } from './language-options.js';
const e = React.createElement;
const firstExample = teaching.cases.find(item => item.id === 'self-judgment');
export function App() {
  const pathname = React.useContext(PagePathContext) ?? (typeof location === 'undefined' ? '/' : location.pathname);
  const showVideos = pageLanguage(pathname) === 'en';
  return e(Page, { home: true, eyebrow: 'Mind Clarity · Uday Kumar’s spiritual philosophy',
    title: 'Begin with a question: Who am I?', intro: teaching.statement },
    e('nav', { className: 'reading-links', 'aria-label': 'Choose a starting point' },
      e('a', { className: 'button', href: '/who-am-i-self-enquiry' }, 'Begin with a question: Who am I?'),
      e('a', { href: '/philosophy' }, 'Read the complete philosophy →'),
      e('a', { href: '/faq#enquiry-title' }, 'Find an answer to your question')),
    e(ProblemLinks, {compact:true, featured:true}),
    e('p', { className: 'welcome-meaning' }, 'Here, “Creator” means the shared source appearing as every life, beyond our separate personalities. Remembering, questioning, choosing, and caring also unfold within the game. You are welcome to explore this spiritual perspective and question it.'),
    e('p', { className: 'quiet-note' }, 'Free to explore. No account, payment, journal, or prescribed routine is needed.'),
    e('section', { className: 'first-practice', 'aria-labelledby': 'first-practice-title' },
      e('div', null, e('p', { className: 'eyebrow' }, 'See the teaching in ordinary life'),
        e('h2', { id: 'first-practice-title' }, 'A mistake is not your whole identity.'),
        e('p', null, firstExample.scene),
        e('p', null, 'In this teaching, the missed call belongs to a passing role. Remember the Creator who designed and entered the game, whose total design cannot be rewritten from inside. The person affected shares that same source. An apology and practical repair also belong within the unfolding game; you cannot demand their forgiveness.'),
        e('p', { className: 'quiet-note' }, 'What does remembering that connection change in how you respond? Notice honestly what changes, what does not, or what questions remain.'),
        e('a', { className: 'text-link', href: '/practice#self-judgment' }, 'Explore the complete example')),
      e('figure', { className: 'practice-image' },
        e('picture', null,
          e('source', { media: '(min-width: 901px)', type: 'image/webp', srcSet: '/assets/pond-desktop-640.webp 640w, /assets/pond-desktop-960.webp 960w', sizes: '(min-width: 1180px) 441px, 40vw' }),
          e('source', { type: 'image/webp', srcSet: '/assets/pond-mobile-480.webp 480w, /assets/pond-mobile-960.webp 960w', sizes: 'calc(100vw - 92px)' }),
          e('img', { src: '/assets/pond-fallback.jpg', alt: 'A quiet moment beside a lotus pond', width: 600, height: 400, fetchPriority: 'high', decoding: 'async' })),
        e('figcaption', null, 'The lotus: within life, with light attachment to its passing scenes.'))),
    showVideos && e('section', { className: 'watch-lesson', 'aria-labelledby': 'watch-title' },
      e('div', null, e('h2', { id: 'watch-title' }, 'Prefer a short video?'),
        e('p', null, 'Watch “A Mistake Is Not Your Whole Identity” on the Mind Clarity YouTube channel, then explore the example in your own life.')),
      e('a', { className: 'button secondary', href: 'https://www.youtube.com/shorts/p1JyKo3vKeE' }, 'Watch on YouTube')),
    e(EnquiryLinks),
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
