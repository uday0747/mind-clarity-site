import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { enquiryTopics } from '../enquiry-topics.js';
import { questions, enquiryGroups } from '../questions.js';
import { localizedPageSlugs, languageVariants } from '../language-options.js';
import { translations, translateText } from '../translations.js';
import { introductionVideos } from '../introduction-videos.js';

const dist = process.argv[2] || fileURLToPath(new URL('../dist/', import.meta.url));
const inventory = JSON.parse(readFileSync(new URL('../translations/source-inventory.json', import.meta.url), 'utf8')).items;
for (const [language, dictionary] of Object.entries(translations)) {
  for (const source of inventory) assert.ok(typeof dictionary[source] === 'string' && dictionary[source].trim(), `${language}: source text has a translation: ${source}`);
}
const localizedPages = ['hi', 'es', 'fr', 'pt', 'id', 'ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur', 'de', 'it', 'ru', 'ja', 'ko'].flatMap(language => [...localizedPageSlugs].map(page => `${language}/${page}`));
const teluguPages = ['te', ...[...localizedPageSlugs].filter(page => page !== 'ai-fear-and-clarity').map(page => `te/${page}`)];
const pages = ['ai-fear-and-clarity-telugu', 'reflections', 'ai-fear-and-clarity', 'index', 'hi', 'es', 'fr', 'pt', 'id', 'ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur', 'de', 'it', 'ru', 'ja', 'ko', ...teluguPages, ...localizedPages, 'philosophy', 'ashtavakra-gita', 'understanding-god', 'practice', 'faq', 'privacy', ...enquiryTopics.map(topic => topic.slug)];
assert.ok(!existsSync(path.join(dist, 'contact.html')), 'Retired Contact page is not published');
const resolveLocal = (url, base = 'https://mindclarity.co.in/') => {
  const pathname = new URL(url, base).pathname;
  const file = path.join(dist, pathname === '/' ? 'index.html' : pathname.replace(/^\//, ''));
  return existsSync(file) || existsSync(`${file}.html`);
};
for (const page of pages) {
  const html = readFileSync(path.join(dist, `${page}.html`), 'utf8');
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: no duplicate element IDs`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${page}: one visible heading`);
  assert.match(html, /id="main-content"/, `${page}: complete prerendered content`);
  assert.match(html, /<title>[^<]+<\/title>/, `${page}: title`);
  assert.match(html, /name="description" content="[^"]+"/, `${page}: description`);
  assert.match(html, /rel="canonical"/, `${page}: canonical`);
  assert.match(html, /id="language-select"/, `${page}: language selector`);
  for (const code of ['en','te','hi','es','fr','pt','id','ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur', 'de', 'it', 'ru', 'ja', 'ko']) {
    const hasAlternate = Object.keys(languageVariants(`/${page === 'index' ? '' : page}`)).length > 1;
    assert.equal((html.match(new RegExp(`hreflang="${code}"`, 'g')) || []).length, hasAlternate ? 1 : 0, `${page}: alternates match available translations for ${code}`);
    assert.equal(new RegExp(`value="${code}"`).test(html), code in languageVariants(`/${page === 'index' ? '' : page}`), `${page}: ${code} selection matches route availability`);
  }
  assert.doesNotMatch(html, /href="\/[^"#?]*\.html(?:["#?])/, `${page}: navigation uses canonical paths`);
  assert.doesNotMatch(html, /href="\/contact(?:["/#?]|\.html)/, `${page}: no links to retired Contact page`);
  const canonical = `https://mindclarity.co.in/${page === 'index' ? '' : page}`;
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${page}: correct canonical`);
  const title = html.match(/<title>([^<]+)<\/title>/)[1];
  assert.ok(html.includes(`property="og:title" content="${title}"`), `${page}: social title matches page`);
  assert.ok(html.includes(`property="og:url" content="${canonical}"`), `${page}: social URL matches canonical`);
  assert.equal((html.match(/property="og:title"/g) || []).length, 1, `${page}: no duplicate metadata`);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1] || '{}');
  const locale = page.match(/^(hi|es|fr|te|pt|id|ar|ta|kn|ml|bn|mr|gu|pa|or|as|ur|de|it|ru|ja|ko)(?:\/|$)/)?.[1] || (page === 'ai-fear-and-clarity-telugu' ? 'te' : 'en');
  if (page === 'index') assert.match(html, /id="watch-title"/, 'English homepage retains the video section');
  if (introductionVideos[locale]) {
    assert.ok(html.includes(`href="${introductionVideos[locale].href}"`), `${page}: introduction video matches page language`);
    const otherLanguage = locale === 'en' ? 'te' : 'en';
    assert.ok(!html.includes(introductionVideos[otherLanguage].href), `${page}: no introduction in the wrong language`);
    if (page === 'te') assert.match(html, /id="watch-title"/, 'Telugu homepage includes the introduction video section');
  }
  if (locale !== 'en') {
    const sourcePage = page === 'ai-fear-and-clarity-telugu' ? 'ai-fear-and-clarity' : page.split('/')[1] || 'index';
    let english = readFileSync(path.join(dist, `${sourcePage}.html`), 'utf8');
    // English and Telugu have their own introductions; other translations retain the written teaching.
    if (sourcePage === 'index' && locale !== 'te') english = english.replace(/<section\b[^>]*class="watch-lesson"[^>]*>[\s\S]*?<\/section>/, '');
    if (locale !== 'te') assert(!/href="https:\/\/(?:www\.)?youtube\.com\//.test(html), `${page}: no English-only YouTube links on translated pages`);
    const main = text => text.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
    const structure = text => [...main(text).matchAll(/<\/?(section|h[1-6]|p|details|summary|ul|ol|li|blockquote|figure|figcaption)\b[^>]*>/g)].map(match => match[0].replace(/\s[^>]*>/, '>'));
    assert.deepEqual(structure(html), structure(english), `${page}: every English section, paragraph, example and disclosure is retained in order`);
    const mainIds = text => [...main(text).matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(mainIds(html), mainIds(english), `${page}: English contents anchors and controls are retained`);
    if (sourcePage === 'faq') {
      const entries = [...questions, ...enquiryGroups.flatMap(group => group.entries)];
      const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)].map(match => JSON.parse(match[1])).find(item => item['@type'] === 'FAQPage');
      assert.deepEqual(faqSchema.mainEntity.map(item => [item.name, item.acceptedAnswer.text]), entries.map(entry => entry.map(text => translateText(text, locale))), `${page}: translated FAQ metadata matches all full answers`);
      assert.doesNotMatch(html, /id="enquiry-(?:input|controls|status)"/, `${page}: retired question search is absent`);
    }
  }
  if (page === 'faq') {
    assert.doesNotMatch(html, /type="search"/, 'Questions use topic browsing without search');
    assert.match(html, /id="enquiry-fallback"/, 'Question browsing instructions remain visible');
    const entries = [...questions, ...enquiryGroups.flatMap(group => group.entries)];
    const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)]
      .map(match => JSON.parse(match[1])).find(item => item['@type'] === 'FAQPage');
    assert.equal((html.match(/<details[ >]/g) || []).length, entries.length, 'Every FAQ answer is rendered');
    assert.deepEqual(faqSchema.mainEntity.map(item => [item.name, item.acceptedAnswer.text]), entries, 'FAQ structured data matches the reviewed answers');
    assert.equal(new Set(entries.map(([question]) => question)).size, entries.length, 'FAQ questions are unique');
    assert.ok(html.includes('id="evidence-notes"'), 'FAQ research notes are rendered');
  }
  if (['ar','ur'].includes(locale)) assert.match(html, new RegExp(`<html lang="${locale}" dir="rtl">`), `${page}: right-to-left flow`);
  if (page === 'te' || /^te\//.test(page)) {
    assert.match(html, /<html lang="te">/, `${page}: document language`);
    assert.equal((html.match(/hreflang="x-default"/g) || []).length, 1, `${page}: has an x-default alternate`);
    assert.match(html, /data-href="\/te(?:\/[^\"]+)?"/, `${page}: language selector includes Telugu route`);
  }
  if (page === 'ai-fear-and-clarity-telugu') {
    assert.match(html, /<html lang="te">/, 'Telugu article keeps its document language');
    assert.equal((html.match(/hreflang="x-default"/g) || []).length, 1, 'Telugu article has an x-default alternate');
    for (const tag of ['header', 'footer']) assert.match(html, new RegExp(`<${tag}[^>]*lang="te"`), `Telugu ${tag} is labelled on Telugu article`);
    assert.match(html, /class="skip-link"[^>]*lang="te"/, 'Telugu skip link is labelled');
  }
  if (page === 'ai-fear-and-clarity') {
    assert.equal((html.match(/hreflang="x-default"/g) || []).length, 1, 'English article has an x-default alternate');
    assert.match(html, /data-href="\/ai-fear-and-clarity-telugu"/, 'English article links to the Telugu alternate');
  }
  if (['hi', 'es', 'fr', 'pt', 'id', 'ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur', 'de', 'it', 'ru', 'ja', 'ko'].includes(page)) {
    assert.match(html, new RegExp(`<html lang="${page}"(?: dir="rtl")?>`), `${page}: document language`);
    assert.equal((html.match(/hreflang="x-default"/g) || []).length, 1, `${page}: has an x-default alternate`);
    for (const alternate of ['/hi', '/es', '/fr']) assert.match(html, new RegExp(`data-href="${alternate}"`), `${page}: language selector includes ${alternate}`);
  }
if (/^(hi|es|fr|pt|id|ar|ta|kn|ml|bn|mr|gu|pa|or|as|ur|de|it|ru|ja|ko)\//.test(page)) {
    const [language, basePage] = page.split('/');
    assert.match(html, new RegExp(`<html lang="${language}"(?: dir="rtl")?>`), `${page}: document language`);
    assert.equal((html.match(/hreflang="x-default"/g) || []).length, 1, `${page}: has an x-default alternate`);
    const alternates = [`/hi/${basePage}`, `/es/${basePage}`, `/fr/${basePage}`, basePage === 'ai-fear-and-clarity' ? '/ai-fear-and-clarity-telugu' : `/te/${basePage}`];
    for (const alternate of alternates) {
      assert.match(html, new RegExp(`data-href="${alternate}"`), `${page}: language selector includes ${alternate}`);
    }
  }
  assert.equal(schema['@graph']?.[1]?.url, canonical, `${page}: valid structured data`);
  assert.equal((html.match(/googletagmanager\.com\/gtag\/js/g) || []).length, 1, `${page}: one analytics loader`);
  assert.equal((html.match(/aria-current="page"/g) || []).length, ['privacy', 'consultation-info', 'contact'].includes(page.split('/').pop()) ? 0 : 1, `${page}: active navigation`);
  assert.doesNotMatch(html, /(?:consultation-info|rzp\.io|Razorpay|₹500)/, `${page}: retired paid-conversation links and terms are absent`);
  assert.match(html, /href="https:\/\/wa\.me\/919989766517"/, `${page}: WhatsApp contact remains available`);
  assert.match(html, /href="mailto:pudaykumar12@gmail\.com"/, `${page}: email contact remains available`);
  assert.doesNotMatch(html, /src="(?:app|page-app|home-react|react-app)\.js/, `${page}: no full-page browser runtime`);
  assert.match(html, /<script defer src="\/site\.js\?v=[a-f0-9]+"/, `${page}: versioned navigation enhancement`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    assert.ok(resolveLocal(url, canonical), `${page}: broken reference ${url}`);
    const target = new URL(url, canonical);
    if (target.hash) {
      const file = path.join(dist, target.pathname.replace(/^\//, '') || 'index.html');
      assert.ok(readFileSync(existsSync(file) ? file : `${file}.html`, 'utf8').includes(`id="${target.hash.slice(1)}"`), `${page}: broken cross-page fragment ${url}`);
    }
  }
  for (const [, hash] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes(`id="${hash}"`), `${page}: missing fragment ${hash}`);
  }
  for (const [, srcset] of html.matchAll(/(?:srcset|imagesrcset)="([^"]+)"/gi)) {
    for (const candidate of srcset.split(',')) assert.ok(resolveLocal(candidate.trim().split(/\s+/)[0]), `${page}: broken responsive image ${candidate}`);
  }
  if (['index','philosophy','practice','faq'].includes(page)) {
    const main = html.match(/<main[\s\S]*?<\/main>/)[0];
    assert.doesNotMatch(main, /href="[^"]*(?:consultation-info|wa\.me|rzp\.io)|₹500|Book a|Donate/, `${page}: independent learning, no sales funnel`);
  }
}
for (const [legacy, destination] of [['about','philosophy'],['services','']]) {
  const html = readFileSync(path.join(dist, `${legacy}.html`), 'utf8');
  assert.ok(html.includes(`content="0;url=/${destination}"`) && html.includes('noindex'), `${legacy}: legacy redirect fallback`);
}
const redirects = readFileSync(path.join(dist, '_redirects'), 'utf8');
for (const [legacy, destination] of [['about', 'philosophy'], ['services', '']]) {
  for (const suffix of ['', '.html', '/']) assert.ok(redirects.split('\n').includes(`/${legacy}${suffix} /${destination} 301`), `${legacy}${suffix}: permanent redirect`);
}
for (const page of pages) assert.ok(redirects.split('\n').includes(`/${page}.html /${page === 'index' ? '' : page} 301`), `${page}: permanent canonical redirect`);
assert.match(readFileSync(path.join(dist, '404.html'), 'utf8'), /name="robots" content="noindex"/, 'Missing pages stay out of search');
for (const css of ['page.css', 'react-home.css']) {
  for (const [, url] of readFileSync(path.join(dist, css), 'utf8').matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    assert.ok(resolveLocal(url), `CSS: missing ${url}`);
  }
}
const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
assert.ok(!sitemap.includes('/contact'), 'Retired Contact page is absent from sitemap');
assert.equal((sitemap.match(/<loc>/g) || []).length, pages.length);
for (const page of pages) assert.ok(sitemap.includes(`https://mindclarity.co.in/${page === 'index' ? '' : page}</loc>`));
assert.ok(!readdirSync(dist).some((file) => ['app.js', 'page-app.js', 'node_modules', '.env'].includes(file)), 'No raw source or private files in the public output');
// Language selection, privacy preferences and reading disclosures share a 10 KB budget.
assert.ok(readFileSync(path.join(dist, 'site.js')).length < 10000, 'Progressive enhancement JavaScript stays below 10 KB');
for (const file of readdirSync(path.join(dist, 'assets'))) {
  assert.ok(readFileSync(path.join(dist, 'assets', file)).length < 150000, `${file}: optimized image stays below 150 KB`);
}
console.log(`PASS: ${pages.length} complete pages, retired Contact page absent, 2 redirects, navigation, fragments, assets, metadata, analytics and sitemap.`);
