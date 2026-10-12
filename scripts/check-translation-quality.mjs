import assert from 'node:assert/strict';
import { translations } from '../translations.js';
const placeholders = text => text.match(/\{count\}|__LANGUAGE__/g) || [];
for (const [language, dictionary] of Object.entries(translations)) {
  for (const [source, translated] of Object.entries(dictionary)) {
    assert.ok(typeof translated === 'string' && translated.trim(), `${language}: empty translation: ${source}`);
    assert.deepEqual(placeholders(translated), placeholders(source), `${language}: interpolation changed: ${source}`);
  }
}
for (const [source, translated] of Object.entries(translations.ta)) {
  if (/journal/i.test(source)) assert.ok(!translated.includes('பத்திரிகை'), `Tamil: personal journal mistranslated: ${source}`);
}
const brokenOdia = /(?<![\u0b00-\u0b7f])(?:ବୁ|ଦୁ|ପୁନ|ବିଶ୍|ଦାୟିତ୍|ଶ୍|ସ୍|କ|ପ|ଦ)\s+[A-Za-z]+\s+[\u0b00-\u0b7f]/u;
for (const [source, translated] of Object.entries(translations.or)) {
  assert.ok(!brokenOdia.test(translated), `Odia: corrupt mixed-script word: ${source}`);
}
console.log('PASS: nonempty dictionaries, interpolation preservation, Tamil journal wording and known Odia word-fragment regressions.');
