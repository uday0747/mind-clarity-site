import React from 'react';
import { mount } from './mount.js';
import Header from './site-header.js';
const e = React.createElement;
function Card({ title, children, link, linkText }) { return e('article', { className: 'card' }, e('h3', null, title), e('p', null, children), link && e('a', { href: link }, linkText)); }
export function App() { return e(React.Fragment, null,
  e('a', { className: 'skip-link', href: '#main-content' }, 'Skip to content'), e(Header),
  e('main', { id: 'main-content', tabIndex: -1 },
    e('section', { className: 'hero' }, e('div', null,
      e('div', { className: 'eyebrow' }, 'Self-understanding · Compassion · Responsibility'),
      e('h1', null, 'A clearer mind.', e('br'), 'A kinder way to live.'),
      e('p', null, 'Mind Clarity is a place to pause, understand your experience, and discover a more responsible way forward.'),
      e('div', { className: 'actions' }, e('a', { className: 'button primary', href: 'philosophy.html' }, 'Begin with the philosophy'), e('a', { className: 'button secondary', href: '#practice' }, 'Try a reflection')),
      e('p', { className: 'intro' }, 'You do not need to consult anyone to begin. Read, reflect, question, and find your own next step.')
    ), e('figure', { className: 'orb brand-photo' }, e('img', { src: 'assets-brand.png', alt: 'A person meditating beside a lotus pond at dawn' }))),
    e('section', { className: 'band' }, e('div', { className: 'wrap' }, e('div', { className: 'eyebrow' }, 'A place to begin'), e('h2', null, 'Clarity that participates in life'), e('p', { className: 'intro' }, 'The aim is not to escape everyday life. It is to see thoughts, feelings, relationships and circumstances more clearly, then respond with care.'), e('div', { className: 'cards' },
      e(Card, { title: 'Notice what is happening' }, 'Pause before the automatic reaction. Observe the thought, feeling, expectation or story shaping the moment.'),
      e(Card, { title: 'Make space for perspective' }, 'Witness your experience without needing to suppress it or immediately believe every thought.'),
      e(Card, { title: 'Choose a responsible response' }, 'Bring insight into relationships, decisions, boundaries, repair and practical action.')))),
    e('section', { id: 'practice' }, e('div', { className: 'wrap' }, e('div', { className: 'eyebrow' }, 'A small practice'), e('h2', null, 'One question for today'), e('p', { className: 'intro' }, 'Think of one situation you want to make more beautiful. Ask: “What am I feeling? What is actually happening? What response would reduce avoidable harm?”'), e('p', null, 'You can write for five minutes, sit quietly, or have a respectful conversation. Keep what is useful and question what is not.'), e('div', { className: 'cards' },
      e(Card, { title: 'Explore the philosophy', link: 'philosophy.html', linkText: 'Read the perspective →' }, 'Learn about one Shakti, witnessing, surrender, compassion and responsibility.'),
      e(Card, { title: 'Read common questions', link: 'faq.html', linkText: 'Open the FAQ →' }, 'Find clear answers about reflection, personal responsibility and support.'),
      e(Card, { title: 'Keep your own discernment', link: 'privacy.html', linkText: 'Read the boundaries →' }, 'Spiritual ideas are invitations to explore, not substitutes for professional care or your own judgment.')))),
    e('section', { className: 'band' }, e('div', { className: 'wrap' }, e('div', { className: 'eyebrow' }, 'A wider intention'), e('h2', null, 'A beautiful world'), e('p', { className: 'intro' }, 'A beautiful world includes inner clarity, kind relationships, protected nature, accessible learning and technology that reduces unnecessary burdens so people have more time for awareness, creativity and joy.'), e('a', { className: 'button secondary', href: 'philosophy.html#beautiful-world' }, 'Explore the vision'))),
    e('footer', null, e('div', { className: 'wrap' }, e('div', null, '© 2026 Mind Clarity', e('br'), e('small', null, 'For reflection and education. Not a substitute for professional care.')), e('div', null, e('a', { href: 'privacy.html' }, 'Privacy'), ' · ', e('a', { href: 'contact.html' }, 'Email'), ' · ', e('a', { href: 'consultation-info.html' }, 'Personal conversation')))))); }
mount(App);
