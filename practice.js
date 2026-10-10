import mission from './mission-content.json' with { type: 'json' };
import React from 'react';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };
const e = React.createElement;
const p = text => e('p', null, text);
export default function Practice() {
  const contents = [['five-minutes', 'Remember the whole teaching'], ...teaching.cases.map(({id,title}) => [id,title]), ['faith-and-division', mission.practicePeaceTitle], ['daily', 'Return throughout the day']];
  return e(Page, { eyebrow: 'Daily practice · Exploring Uday Kumar’s philosophy', title: 'Remember the Creator within each experience.', intro: teaching.statement },
    p(mission.practiceIntro),
    e('div', { className: 'reading-links' }, e('a', { href: '/philosophy#mula-siddhanta' }, 'Read the root statement and its meaning')),
    e('div', { className: 'reading-grid' }, e(Contents, {items: contents}), e('div', {className: 'reading-body'},
      e(Lesson, { id: 'five-minutes', number: '01', title: 'Remember the whole teaching' },
        p(teaching.meaning),
        e('details', null, e('summary', null, 'Explore the teaching in a daily experience'),
          e('ol', { className: 'practice-steps' }, teaching.steps.map(([title,text]) => e('li', {key:title}, e('strong', null, title + '. '), text))),
          e(Reflection, null, teaching.practiceReflection)),
        p('The examples below are optional ways to explore the teaching, not conditions for realization. You do not need to write anything. If reflection becomes overwhelming, stop and return to an ordinary activity or suitable support. No particular feeling has to appear for enquiry to be honest.')),
      ...teaching.cases.map((item, i) => e(Lesson, { key:item.id, id:item.id, number:String(i + 2).padStart(2, '0'), title:item.title },
        p(item.connection),
        e('details', null, e('summary', null, 'Worked example: ' + item.example),
          e('h3', null, 'The scene'), p(item.scene),
          e('h3', null, 'Remembering the Creator'), p(item.remember),
          e('h3', null, 'Participating within the game'), p(item.participation)),
        e(Reflection, null, item.reflection))),
      e('section', {id:'faith-and-division', className:'lesson'}, e('h2', null, mission.practicePeaceTitle),
        p(mission.practicePeaceScene), p(mission.practicePeaceRemember), p(mission.practicePeaceResponse),
        e(Reflection, null, mission.practicePeaceReflection)),
      e(Lesson, { id:'daily', number:'08', title:'Return throughout the day' },
        p('The intended state is remembrance of the Creator while the game continues. A conversation, a mistake, or a quiet moment can be an occasion to return to the whole statement. The practice belongs within the unfolding; it does not rewrite the design.'),
        e('h3', null, 'An evening reflection'),
        e('ul', null, ...[
          'Which scene absorbed me so completely that a passing role became my whole identity?',
          'Where did I demand that the game unfold differently, and what did remembering its fixed design mean to me?',
          'Did I recognize the same Creator in another person? How did that affect the relationship?',
          'When I returned to the central understanding, what changed in my experience—and what did not?'
        ].map(text => e('li', {key:text}, text))),
        p('Return to the teaching without turning the day into a score. Its intended movement is from remembrance toward natural care. A difficult emotion or an unresolved question is something to examine, not evidence of personal failure.'),
        e('div', {className:'reading-links'}, e('a', {href:'/philosophy#living'}, 'Living with the understanding'), e('a', {href:'/faq'}, 'Questions about the game')),
        e('p', {className:'quiet-note'}, 'These are spiritual reflections, not treatment or a promise of particular outcomes. Appropriate professional support remains available when needed.')))));
}
