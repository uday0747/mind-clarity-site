import React from 'react';
import { Page, Contents, Lesson, Reflection } from './site-layout.js';
import teaching from './teaching-content.json' with { type: 'json' };
const e = React.createElement;
const p = text => e('p', null, text);
export default function Practice() {
  const contents = [['five-minutes', 'Remember the whole teaching'], ...teaching.cases.map(({id,title}) => [id,title]), ['daily', 'Return throughout the day']];
  return e(Page, { eyebrow: 'Daily practice · Exploring Uday Kumar’s philosophy', title: 'Remember the Creator within each experience.', intro: teaching.statement },
    p('Each exercise explores this same understanding in a different scene. Begin with a small, ordinary event. The invitation is to understand the teaching and examine your experience honestly; words repeated without understanding are only words.'),
    e('div', { className: 'reading-links' }, e('a', { href: '/philosophy#mula-siddhanta' }, 'Read the root statement and its meaning')),
    e('div', { className: 'reading-grid' }, e(Contents, {items: contents}), e('div', {className: 'reading-body'},
      e(Lesson, { id: 'five-minutes', number: '01', title: 'A five-minute return to the teaching' },
        p(teaching.meaning),
        e('ol', { className: 'practice-steps' }, teaching.steps.map(([title,text]) => e('li', {key:title}, e('strong', null, title + '. '), text))),
        e(Reflection, null, teaching.practiceReflection),
        p('You can reflect silently or write privately. If the exercise becomes overwhelming, stop and return to an ordinary activity or suitable support. No particular feeling has to appear for the reflection to be honest.')),
      ...teaching.cases.map((item, i) => e(Lesson, { key:item.id, id:item.id, number:String(i + 2).padStart(2, '0'), title:item.title },
        p(item.connection),
        e('details', null, e('summary', null, 'Worked example: ' + item.example),
          e('h3', null, 'The scene'), p(item.scene),
          e('h3', null, 'Remembering the Creator'), p(item.remember),
          e('h3', null, 'Participating within the game'), p(item.participation)),
        e(Reflection, null, item.reflection))),
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
