import entry from './creator-entry-content.json' with { type: 'json' };
import { BenefitsSection } from './benefits-section.js';
import mission from './mission-content.json' with { type: 'json' };
import React from 'react';
import { mount } from './mount.js';
import { Page, Reflection, TopicLinks } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };
import { ProblemLinks } from './problem-guide.js';
import { EnquiryLinks } from './enquiry-pages.js';
import { PagePathContext } from './site-header.js';
import { pageLanguage } from './language-options.js';
import { introductionVideos } from './introduction-videos.js';
const e = React.createElement;
const firstExample = teaching.cases.find(item => item.id === 'self-judgment');
export function App() {
  const pathname = React.useContext(PagePathContext) ?? (typeof location === 'undefined' ? '/' : location.pathname);
  const introduction = introductionVideos[pageLanguage(pathname)];
  return e(Page, { home: true, eyebrow: 'Mind Clarity · Uday Kumar’s spiritual philosophy',
    title: mission.homeTitle, intro: teaching.statement },
    e('nav', { className: 'reading-links', 'aria-label': 'Choose a starting point' },
      e('a', { className: 'button', href: '/understanding-god' }, mission.understandLink)),
    e('p', { className: 'welcome-meaning' }, mission.homeMeaning),
    e('section', { className: 'home-section mission-story', 'aria-labelledby': 'story-title' },
      e('p', { className: 'eyebrow' }, mission.storyEyebrow),
      e('h2', { id: 'story-title' }, mission.storyTitle), e('p', null, mission.story), e('h3', null, entry.title), e('p', null, entry.identity), e('p', null, entry.example), e('p', null, mission.design),
      e('a', { className: 'text-link', href: '/understanding-god#story' }, mission.storyLink)),
    e(BenefitsSection, { compact: true }),
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
    introduction && e('section', { className: 'watch-lesson', 'aria-labelledby': 'watch-title' },
      e('div', null, e('h2', { id: 'watch-title' }, 'Watch the Mind Clarity introduction'),
        e('p', null, 'Explore Uday Kumar’s main teaching through a simple everyday example, then read and question the philosophy for yourself.')),
      e('a', { className: 'button secondary', href: introduction.href }, 'Watch the introduction on YouTube')),
    e('section', {className:'home-section learning-journey', 'aria-labelledby':'journey-title'},
      e('h2', {id:'journey-title'}, 'Explore at your own pace.'),
      e('ol', {className:'journey-steps'},
        e('li', null, e('h3', null, e('a', {href:'/understanding-god'}, mission.understandLink)), e('p', null, 'Begin with the story of one Creator entering many lives.')),
        e('li', null, e('h3', null, e('a', {href:'/practice#self-judgment'}, 'Explore an optional everyday example')), e('p', null, 'Connect the teaching with one ordinary scene or relationship.')),
        e('li', null, e('h3', null, e('a', {href:'/faq#enquiry-title'}, 'Find an answer to your question')), e('p', null, 'Browse the questions below. Open any question to read the full answer.')))),
    e('details', {className:'learning-library'}, e('summary', null, 'Explore the full learning library'),
      e('div', {className:'reading-links'}, e('a', {href:'/philosophy'}, 'Read the complete philosophy →'), e('a', {href:'/ashtavakra-gita'}, mission.ashtavakraLink), e('a', {href:'/philosophy#beautiful-world'}, 'The Beautiful World vision')),
      e(ProblemLinks, {compact:true, featured:true}), e(EnquiryLinks),
      e('section', {id:'practice', className:'home-section'}, e('h2', null, 'Return to the Creator within each scene.'), e(TopicLinks))),
    e('section', {className:'home-section author-introduction', 'aria-labelledby':'author-title'},
      e('h2', {id:'author-title'}, 'About Uday Kumar'),
      e('p', null, 'Uday Kumar shares his Creator-and-game philosophy through written discussions, clarifications, and everyday examples. This website adapts those explanations for reading and self-enquiry.'),
      e('p', {className:'quiet-note'}, 'Original statements and editorial explanations are distinguished. Questions and corrections are welcome.'),
      e('a', {className:'text-link',href:'/philosophy'}, 'Read the complete philosophy →')));
}
if (typeof document !== 'undefined') mount(App);
