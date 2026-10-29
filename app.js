import guide from './guided-home-content.json' with { type: 'json' };
import { journey, AstrologyExplanation } from './design-journey.js';
import discussion from './discussion-content.json' with { type: 'json' };
import yuga from './yuga-content.json' with { type: 'json' };
import entry from './creator-entry-content.json' with { type: 'json' };
import { BenefitsSection } from './benefits-section.js';
import benefits from './benefits-content.json' with { type: 'json' };
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
export function App() {
  const pathname = React.useContext(PagePathContext) ?? (typeof location === 'undefined' ? '/' : location.pathname);
  const introduction = introductionVideos[pageLanguage(pathname)];
  return e(Page, { home: true, eyebrow: 'Mind Clarity · Uday Kumar’s spiritual philosophy',
    title: mission.homeTitle, intro: mission.homeIdentity },
    e('p', {className:'governing-statement'}, teaching.statement),
    e('p', {className:'quiet-note'}, journey.title),
    e('nav', { className: 'discovery-path', 'aria-label': 'Choose a starting point' },
      e('a', { href: '#identity-and-roles' }, mission.homeTitle),
      e('a', { href: '#why-no-powers' }, guide.powers),
      e('a', { href: '#design-and-time' }, journey.designTitle),
      e('a', { href: '#astrology' }, journey.astrologyTitle),
      e('a', { href: '#examine-the-game' }, journey.reasonTitle),
      e('a', { href: '#everyday-scenes' }, guide.choose)),
    e('section', { className: 'home-section three-card-story' },
      e('div', { className: 'story-header' },
        e('span', { className: 'story-eyebrow' }, mission.homeTitle),
        e('h2', { className: 'story-title-text' }, journey.title)
      ),
      e('div', { className: 'three-card-grid' },
        e('div', { className: 'story-card' },
          e('span', { className: 'card-number' }, '01'),
          e('h3', null, mission.homeTitle),
          e('p', null, journey.identity)
        ),
        e('div', { className: 'story-card' },
          e('span', { className: 'card-number' }, '02'),
          e('h3', null, guide.powers),
          e('p', null, journey.design)
        ),
        e('div', { className: 'story-card' },
          e('span', { className: 'card-number' }, '03'),
          e('h3', null, journey.reasonTitle),
          e('p', null, journey.reason)
        )
      )
    ),
    e('div', { className: 'clarity-card-studio-section', 'data-card-studio': 'true' }),
    e('section', { className: 'home-section discovery-card', id: 'identity-and-roles', 'aria-labelledby': 'roles-title' },
      e('span', { className: 'discovery-number', 'aria-hidden': true }, '01'),
      e('h2', { id: 'roles-title' }, guide.roles),
      e('p', null, journey.identity),
      e('svg', { className: 'roles-illustration', viewBox:'0 0 400 130', 'aria-hidden':true, focusable:'false' },
        e('path', { d:'M200 25 L70 65 M200 25 L200 65 M200 25 L330 65', fill:'none', stroke:'currentColor', strokeWidth:2 }),
        e('circle', { cx:200, cy:22, r:16, fill:'currentColor' }),
        ...[70,200,330].map(x => e('g', {key:x}, e('circle', {cx:x,cy:78,r:14,fill:'currentColor'}), e('path', {d:`M${x-26} 120 Q${x} 85 ${x+26} 120`, fill:'none',stroke:'currentColor',strokeWidth:5,strokeLinecap:'round'})))),
      e('p', null, guide.analogy),
      e('details', { className: 'discovery-reveal' }, e('summary', null, guide.simpler),
        e('p', null, entry.identity), e('p', null, entry.recognition))),
    e('section', { className: 'home-section discovery-card', id: 'why-no-powers', 'aria-labelledby': 'powers-title' },
      e('span', { className: 'discovery-number', 'aria-hidden': true }, '02'),
      e('h2', { id: 'powers-title' }, guide.imagine),
      e('p', { className: 'discovery-question' }, guide.question),
      e('details', { className: 'discovery-reveal' },
        e('summary', null, guide.powers), e('p', null, entry.example)),
      e('details', { className: 'discovery-reveal' },
        e('summary', null, guide.simpler), e('p', null, mission.story))),
    e('section', { className: 'home-section journey-step', id: 'design-and-time', 'aria-labelledby': 'design-title' },
      e('span', { className: 'discovery-number', 'aria-hidden': true }, '03'),
      e('h2', { id: 'design-title' }, journey.designTitle), e('p', null, journey.design),
      e('a', { className: 'text-link', href: '/surrender-free-will-and-design' }, 'Explore a question in depth')),
    e('section', { className: 'home-section journey-step', id: 'astrology', 'aria-labelledby': 'astrology-title' },
      e('span', { className: 'discovery-number', 'aria-hidden': true }, '04'),
      e('h2', { id: 'astrology-title' }, journey.astrologyTitle), e(AstrologyExplanation),
      e('a', { className: 'text-link', href: '/philosophy#astrology' }, 'Read the complete philosophy →')),
    e('section', { className: 'home-section journey-step', id: 'examine-the-game', 'aria-labelledby': 'reason-title' },
      e('span', { className: 'discovery-number', 'aria-hidden': true }, '05'),
      e('h2', { id: 'reason-title' }, journey.reasonTitle), e('p', null, journey.reason),
      e(Reflection, null, journey.question)),
    e('section', { className: 'first-practice', id:'everyday-scenes', 'aria-labelledby':'first-practice-title' },
      e('div', null,
        e('span', { className: 'discovery-number', 'aria-hidden':true }, '06'),
        e('h2', { id:'first-practice-title' }, guide.choose),
        e('h3', null, journey.connectionTitle), e('p', null, journey.connection),
        e('p', null, 'Connect the teaching with one ordinary scene or relationship.'),
        e('details', { className: 'discovery-reveal', name:'everyday-scene' },
          e('summary', null, 'Confidence through knowing who we are'), e('p', null, discussion.confidenceExample),
          e('p', { className:'quiet-note' }, discussion.confidenceReflection)),
        ...['conflict','self-judgment'].map(id => {
          const item=teaching.cases.find(example => example.id===id);
          return e('details', { key:id, className:'discovery-reveal', name:'everyday-scene' },
            e('summary', null, item.title), e('p', null, item.scene), e('p', null, item.remember),
            e('p', null, item.participation),
            e('a', { className:'text-link', href:'/practice#'+id }, 'Explore the complete example'));
        })),
      e('figure', { className: 'practice-image' },
        e('picture', null,
          e('source', { media: '(min-width: 901px)', type: 'image/webp', srcSet: '/assets/pond-desktop-640.webp 640w, /assets/pond-desktop-960.webp 960w', sizes: '(min-width: 1180px) 441px, 40vw' }),
          e('source', { type: 'image/webp', srcSet: '/assets/pond-mobile-480.webp 480w, /assets/pond-mobile-960.webp 960w', sizes: 'calc(100vw - 92px)' }),
          e('img', { src: '/assets/pond-fallback.jpg', alt: 'A quiet moment beside a lotus pond', width: 600, height: 400, fetchPriority: 'high', decoding: 'async' })),
        e('figcaption', null, 'The lotus: within life, with light attachment to its passing scenes.'))),
    e('div', { className: 'interactive-practice-section', 'data-practice-studio': 'true' }),
    e(BenefitsSection, { compact: true }),
    e('section', { className: 'home-section yuga-introduction', id: 'clarity-and-yugas', 'aria-labelledby': 'yuga-title' },
      e('h2', { id: 'yuga-title' }, yuga.title),
      e('details', { className: 'discovery-reveal' }, e('summary', null, 'The Beautiful World vision'),
        e('ol', { className: 'yuga-steps' }, ['Kali Yuga', 'Dwapara Yuga', 'Treta Yuga', 'Satya Yuga'].map(name => e('li', {key:name}, name))),
        e('p', null, yuga.personal), e('p', null, yuga.vision))),
    e('section', { className:'home-section discovery-reflection', id:'one-reflection', 'aria-labelledby':'reflection-title' },
      e('h2', {id:'reflection-title'}, 'Try this reflection'),
      e('h3', null, journey.joyTitle), e('p', null, journey.joy),
      e('p', null, guide.reflection),
      e('div', {className:'reading-links'}, e('a', {className:'button', href:'/practice'}, 'Explore an optional everyday example'),
        e('a', {className:'text-link', href:'/faq#enquiry-title'}, 'Find an answer to your question'))),
    e('details', { className:'home-section discovery-reveal', id:'story' },
      e('summary', {id:'story-title'}, mission.storyTitle), e('p', null, mission.story), e('p', null, mission.design),
      e('a', {className:'text-link', href:'/understanding-god#story'}, mission.storyLink)),
    introduction && e('section', { className: 'watch-lesson', 'aria-labelledby': 'watch-title' },
      e('div', null, e('h2', { id: 'watch-title' }, 'Watch the Mind Clarity introduction'),
        e('p', null, 'Explore Uday Kumar’s main teaching through a simple everyday example, then read and question the philosophy for yourself.')),
      e('a', { className: 'button secondary', href: introduction.href }, 'Watch the introduction on YouTube')),
    e('section', {className:'home-section learning-journey', 'aria-labelledby':'journey-title'},
      e('h2', {id:'journey-title'}, 'Explore at your own pace.'),
      e('ol', {className:'journey-steps'},
        e('li', null, e('h3', null, e('a', {href:'/understanding-god'}, mission.understandLink)), e('p', null, 'Begin with the story of one Creator entering many lives.')),
        e('li', null, e('h3', null, e('a', {href:'/philosophy'}, 'Read the complete philosophy →'))),
        e('li', null, e('h3', null, e('a', {href:'/practice#self-judgment'}, 'Explore an optional everyday example')), e('p', null, 'Connect the teaching with one ordinary scene or relationship.')),
        e('li', null, e('h3', null, e('a', {href:'/faq#enquiry-title'}, 'Find an answer to your question')), e('p', null, 'Browse the questions below. Open any question to read the full answer.')))),
    e('details', {className:'learning-library'}, e('summary', null, 'Explore the full learning library'),
      e('div', {className:'reading-links'}, e('a', {href:'/philosophy'}, 'Read the complete philosophy →'), e('a', {href:'/ashtavakra-gita'}, mission.ashtavakraLink), e('a', {href:'/philosophy#beautiful-world'}, 'The Beautiful World vision')),
      e(ProblemLinks, {compact:true, featured:true}), e(EnquiryLinks),
      e('section', {id:'practice', className:'home-section'}, e('h2', null, 'Return to the Creator within each scene.'), e(TopicLinks))),
    e('section', { className: 'home-section purpose-section', id: 'why-this-exists', 'aria-labelledby': 'purpose-title' },
      e('h2', { id: 'purpose-title' }, mission.purposeTitle),
      e('p', null, mission.purpose)),
    e('section', {className:'home-section author-introduction', 'aria-labelledby':'author-title'},
      e('h2', {id:'author-title'}, 'About Uday Kumar'),
      e('p', null, 'Uday Kumar shares his Creator-and-game philosophy through written discussions, clarifications, and everyday examples. This website adapts those explanations for reading and self-enquiry.'),
      e('p', {className:'quiet-note'}, 'Original statements and editorial explanations are distinguished. Questions and corrections are welcome.'),
      e('a', {className:'text-link',href:'/philosophy'}, 'Read the complete philosophy →')));
}
if (typeof document !== 'undefined') mount(App);
