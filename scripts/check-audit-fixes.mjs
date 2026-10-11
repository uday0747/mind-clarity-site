import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { questionById, questions, enquiryGroups } from '../questions.js';
import { enquiryTopics } from '../enquiry-topics.js';
import { enquiryScore } from '../enquiry-search.js';
import { translateText } from '../translations.js';
import { enhanceLanguagePicker } from '../site-ui.js';

const dist = process.argv[2] || fileURLToPath(new URL('../dist/', import.meta.url));
assert.equal(Object.keys(questionById).length, questions.length, 'every core question has a stable identity');
assert.ok(questions.every(entry => entry?.length === 2), 'all displayed questions resolve');
assert.equal(questions[0], questionById.begin, 'foundational browsing starts with where to begin');
for (const [slug, ids] of [
  ['who-am-i-self-enquiry', ['begin','shared-identity']],
  ['surrender-free-will-and-design', ['effort']],
  ['meditation-and-self-realization', ['quiet-mind']],
  ['guilt-responsibility-and-boundaries', ['boundaries']]
]) {
  const entries = enquiryTopics.find(topic => topic.slug === slug).entries;
  for (const id of ids) assert.ok(entries.includes(questionById[id]), `${slug}: ${id} remains related`);
  assert.ok(!entries.includes(questionById['ai-creator']), `${slug}: no accidental AI question`);
}
const entries = [...questions, ...enquiryGroups.flatMap(group => group.entries)];
for (const [language, query] of [
  ['en','How can I feel more confidence in myself?'],
  ['es','¿Cómo puedo sentir más confianza en mí?'],
  ['fr','Comment puis-je avoir plus confiance en moi ?'],
  ['pt','Como posso sentir mais confiança em mim?'],
  ['hi','मैं अपने आप में अधिक आत्मविश्वास कैसे महसूस कर सकता हूँ?'],
  ['te','నా ఆత్మవిశ్వాసం ఎలా పెంచుకోవాలి?'],
  ['id','Bagaimana saya bisa lebih percaya diri?'],
  ['ar','كيف يمكنني الشعور بمزيد من الثقة بنفسي؟']
]) {
  const scores = entries.map(([q,a]) => ({q, score:enquiryScore(query,translateText(q,language),translateText(a,language),'',language)})).filter(entry => entry.score).sort((a,b)=>b.score-a.score);
  assert.ok(scores.length > 0 && scores.length <= 12, `${language}: focused confidence query returns a useful set (${scores.length})`);
  assert.ok(scores.slice(0,3).some(entry => /confidence|self-worth/.test(entry.q)), `${language}: confidence answer ranks near the top`);
  assert.ok(entries.every(([q,a]) => enquiryScore('zzzzzz',translateText(q,language),translateText(a,language),'',language) === 0), `${language}: unknown query has no matches`);
}
for (const language of ['en','hi','es','fr','te','pt','id','ar']) {
  const prefix = language === 'en' ? '' : `${language}/`;
  for (const page of ['philosophy','practice']) {
    const html = readFileSync(path.join(dist, `${prefix}${page}.html`),'utf8');
    const sectionIds = [...html.matchAll(/<section id="([^"]+)" class="lesson">/g)].map(match => match[1]);
    const numbers = [...html.matchAll(/class="lesson-number" aria-hidden="true">(\d+)/g)].map(match=>match[1]);
    assert.deepEqual(numbers,sectionIds.map((_,index)=>String(index+1).padStart(2,'0')),`${prefix}${page}: every lesson is sequential`);
    assert.ok(sectionIds.length === (page === 'practice' ? 9 : 18));
    assert.match(html,/data-reading-minutes="true">\d+</,`${prefix}${page}: reading time is generated`);
    assert.match(html,/class="contents-disclosure" open=""/,`${prefix}${page}: contents remain usable before enhancement`);
  }
  const reflection=readFileSync(path.join(dist,`${prefix}reflections.html`),'utf8');
  assert.match(reflection,/class="reflection-card"/,`${prefix}reflections: article index`);
  assert.doesNotMatch(reflection,/id="fear"/,`${prefix}reflections: not a duplicated full article`);
  const privacy=readFileSync(path.join(dist,`${prefix}privacy.html`),'utf8');
  assert.match(privacy,/mc_analytics=off#analytics-preferences/,`${prefix}privacy: usable opt-out`);
  assert.match(privacy,/data-allowed=/,`${prefix}privacy: localized preference feedback`);
}
// A preferred browser language must offer a choice without replacing an explicit URL.
let suggested, redirected=false;
Object.defineProperty(globalThis, 'navigator', {configurable:true, value:{languages:['te-IN'],language:'te-IN'}});
globalThis.localStorage={getItem:()=>null};
globalThis.window={location:{search:'',hash:'#five-minutes',replace:()=>{redirected=true;}}};
const select={dataset:{currentLanguage:'en'},value:'en',options:[{value:'en',dataset:{href:'/practice'}},{value:'te',dataset:{href:'/te/practice'}}],addEventListener(){},removeEventListener(){}};
const suggestion={hidden:true,textContent:'',append(link){suggested=link;}};
globalThis.document={querySelector:selector=>selector==='#language-select'?select:suggestion,createElement:()=>({})};
enhanceLanguagePicker();
assert.equal(redirected,false,'explicit language URL is respected');
assert.equal(suggested.href,'/te/practice#five-minutes','suggested language keeps the section link');
console.log('PASS: stable related questions, eight-language search, section numbering, article index, privacy preferences and language choice.');
