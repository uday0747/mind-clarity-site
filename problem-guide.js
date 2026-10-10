import React from 'react';
import { Page, Contents } from './site-layout.js';
import problems from './problem-content.json' with { type: 'json' };
import discussion from './discussion-content.json' with { type: 'json' };
import teaching from './teaching-content.json' with { type: 'json' };
import { enquiryGroups } from './questions.js';
const e = React.createElement;
const explanations = [discussion.confidenceIdentity, teaching.cases[0].connection,
  enquiryGroups.at(-1).entries[3][1], discussion.enjoyment, discussion.familyRecovery,
  teaching.cases[3].connection, teaching.cases.find(item=>item.id==='money-relationships').connection,
  enquiryGroups[0].entries[1][1], problems.healthLimit, problems.worldLimit];
export function ProblemLinks({ compact = false }) {
  return e('section', { className:'home-section', 'aria-labelledby': compact ? 'life-concerns' : 'concern-list' },
    e('h2', {id:compact ? 'life-concerns' : 'concern-list'}, problems.homeTitle),
    e('div', {className:'topic-grid'}, problems.categories.map(category => e('article', {key:category.id},
      e('h3', null, e('a', {href:compact ? `/life-problems-and-self-enquiry#${category.id}` : category.href}, category.title)),
      e('p', null, category.concerns),
      category.id === 'health' && e('p', {className:'quiet-note'}, 'These are spiritual reflections, not treatment or a promise of particular outcomes. Appropriate professional support remains available when needed.')))),
    compact && e('a', {className:'text-link', href:'/life-problems-and-self-enquiry'}, problems.homeLink));
}
export default function ProblemGuide() {
  return e(Page, {eyebrow:'Self-enquiry · Uday Kumar’s teaching', title:problems.title, intro:problems.intro},
    e('p', null, teaching.statement), e('p', {className:'quiet-note'}, problems.scope),
    e('div', {className:'reading-grid'}, e(Contents, {items:problems.categories.map(c=>[c.id,c.title])}),
      e('div', {className:'reading-body'}, problems.categories.map((category,index)=>e('section', {key:category.id,id:category.id,className:'lesson'},
        e('h2', null, category.title), e('p', null, category.concerns), e('p', null, explanations[index]),
        e('a', {className:'text-link',href:category.href}, 'Explore a question in depth'))))),
    e('div', {className:'reading-links'},
      e('a', {href:'https://www.nimh.nih.gov/health/topics/depression'}, 'Depression: symptoms and treatment — NIMH'),
      e('a', {href:'https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety'}, 'Meditation: effectiveness and safety — NCCIH')),
    e('div', {className:'reading-links'}, e('a', {href:'/faq#enquiry-title'}, 'Find another answer'), e('a',{href:'/philosophy'},'Read the full philosophy')));
}
