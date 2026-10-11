import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { enhanceReadingAnalytics } from '../reading-analytics.js';
const bootstrap = readFileSync(new URL('../analytics-bootstrap.js', import.meta.url), 'utf8');
function load(hostname, search = '', initial = {}, blocked = false) {
  const saved = { ...initial }, scripts = [];
  const context = { location: {hostname, search, origin: `https://${hostname}`, pathname: '/philosophy'}, URLSearchParams, Date,
    localStorage: {getItem: key => {if(blocked) throw Error(); return saved[key];}, setItem: (key,value) => {if(blocked) throw Error(); saved[key]=value;}, removeItem: key => delete saved[key]},
    document: {createElement: () => ({}), head: {appendChild: script => scripts.push(script)}}, window: {} };
  vm.runInNewContext(bootstrap, context);
  return {context, saved, scripts};
}
assert.equal(load('127.0.0.1').scripts.length, 0);
const owner = load('mindclarity.co.in', '?mc_analytics=off');
assert.equal(owner.scripts.length, 0);
assert.equal(load('mindclarity.co.in', '', owner.saved).scripts.length, 0);
assert.equal(load('mindclarity.co.in', '?mc_analytics=on', owner.saved).scripts.length, 1);
const normal = load('mindclarity.co.in', '?question=private');
assert.equal(normal.scripts.length, 1);
assert.equal(normal.context.window.dataLayer[1][2].page_location, 'https://mindclarity.co.in/philosophy');
assert.equal(load('mindclarity.co.in', '', {}, true).scripts.length, 1);
assert.equal(load('mindclarity.co.in', '?mc_analytics=off', {}, true).scripts.length, 0, 'Opt-out takes effect even when storage is blocked');
const events = [], listeners = {};
let tick, cleared = false, top = 0;
globalThis.window = {gtag: (...args) => events.push(args)};
globalThis.location = {pathname: '/philosophy', origin: 'https://mindclarity.co.in', href: 'https://mindclarity.co.in/philosophy'};
globalThis.innerHeight = 500;
globalThis.document = {visibilityState: 'hidden', documentElement: {lang:'en'}, querySelector: () => ({getBoundingClientRect: () => ({top, height: 2000})}), addEventListener: (name, handler) => listeners[name]=handler};
globalThis.setInterval = fn => {tick=fn; return 1;};
globalThis.clearInterval = () => {cleared=true;};
enhanceReadingAnalytics();
for(let i=0;i<20;i++) tick();
assert.equal(events.length, 0, 'Hidden tabs do not accrue reading time');
document.visibilityState='visible';
for(let i=0;i<12;i++) tick();
assert.equal(events.length, 0, '60 seconds without reading depth does not qualify');
top=-600; tick();
assert.equal(events[0][1], 'engaged_reading');
assert.equal(cleared, true);
listeners.click({target:{closest:()=>({href:'https://mindclarity.co.in/practice?question=private#example'})}});
assert.equal(events[1][2].destination_path, '/practice');
assert.ok(!JSON.stringify(events).includes('private'));
console.log('PASS: owner exclusion, persistence/reset, local preview exclusion, blocked storage, query sanitization, hidden tabs and reading thresholds.');
