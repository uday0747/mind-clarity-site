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

// Chinese script preferences must survive region and script subtags.
const { browserLanguage } = await import('../language-options.js');
const previousNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
try {
  for (const [tag, expected] of [
    ['zh-CN', 'zh-Hans'], ['zh-SG', 'zh-Hans'], ['zh', 'zh-Hans'],
    ['zh-TW', 'zh-Hant'], ['zh-HK', 'zh-Hant'], ['zh-MO', 'zh-Hant'],
    ['zh-Hans-TW', 'zh-Hans'], ['zh-Hant-CN', 'zh-Hant'],
    ['tr-TR', 'tr'], ['vi-VN', 'vi'], ['pl-PL', 'pl']
  ]) {
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { languages: [tag] } });
    assert.equal(browserLanguage(), expected, `Browser preference ${tag}`);
  }
} finally {
  if (previousNavigator) Object.defineProperty(globalThis, 'navigator', previousNavigator);
  else delete globalThis.navigator;
}
console.log('PASS: Chinese script/region preferences and Turkish/Vietnamese/Polish regional tags.');
for (const code of ['zh-Hans', 'zh-Hant', 'tr', 'vi', 'pl']) {
  for (const [source, text] of Object.entries(translations[code])) {
    assert.ok(!/ZX.{0,30}?ZX/u.test(text), `${code}: temporary translation marker remains`);
    if (source.includes('Mind Clarity')) assert.ok(text.includes('Mind Clarity'), `${code}: brand name must be retained`);
  }
}
console.log('PASS: new language dictionaries preserve the brand and contain no temporary translation markers.');
