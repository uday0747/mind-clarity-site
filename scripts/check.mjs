import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { enquiryTopics } from '../enquiry-topics.js';
import { questions, enquiryGroups } from '../questions.js';

const dist = process.argv[2] || fileURLToPath(new URL('../dist/', import.meta.url));
const pages = ['ai-fear-and-clarity-telugu', 'reflections', 'ai-fear-and-clarity', 'index', 'philosophy', 'practice', 'faq', 'consultation-info', 'privacy', ...enquiryTopics.map(topic => topic.slug)];
assert.ok(!existsSync(path.join(dist, 'contact.html')), 'Retired Contact page is not published');
const resolveLocal = (url) => {
  const pathname = new URL(url, 'https://mindclarity.co.in/').pathname;
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
  assert.doesNotMatch(html, /href="\/[^"#?]*\.html(?:["#?])/, `${page}: navigation uses canonical paths`);
  assert.doesNotMatch(html, /href="\/contact(?:["/#?]|\.html)/, `${page}: no links to retired Contact page`);
  const canonical = `https://mindclarity.co.in/${page === 'index' ? '' : page}`;
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${page}: correct canonical`);
  const title = html.match(/<title>([^<]+)<\/title>/)[1];
  assert.ok(html.includes(`property="og:title" content="${title}"`), `${page}: social title matches page`);
  assert.ok(html.includes(`property="og:url" content="${canonical}"`), `${page}: social URL matches canonical`);
  assert.equal((html.match(/property="og:title"/g) || []).length, 1, `${page}: no duplicate metadata`);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1] || '{}');
  if (page === 'faq') {
    const entries = [...questions, ...enquiryGroups.flatMap(group => group.entries)];
    const faqSchema = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)]
      .map(match => JSON.parse(match[1])).find(item => item['@type'] === 'FAQPage');
    assert.equal((html.match(/<details[ >]/g) || []).length, entries.length, 'Every FAQ answer is rendered');
    assert.deepEqual(faqSchema.mainEntity.map(item => [item.name, item.acceptedAnswer.text]), entries, 'FAQ structured data matches the reviewed answers');
    assert.equal(new Set(entries.map(([question]) => question)).size, entries.length, 'FAQ questions are unique');
    assert.ok(html.includes('id="evidence-notes"'), 'FAQ research notes are rendered');
  }
  assert.equal(schema['@graph']?.[1]?.url, canonical, `${page}: valid structured data`);
  assert.equal((html.match(/googletagmanager\.com\/gtag\/js/g) || []).length, 1, `${page}: one analytics loader`);
  assert.equal((html.match(/aria-current="page"/g) || []).length, ['privacy', 'consultation-info', 'contact'].includes(page) ? 0 : 1, `${page}: active navigation`);
  assert.doesNotMatch(html, /src="(?:app|page-app|home-react|react-app)\.js/, `${page}: no full-page browser runtime`);
  assert.match(html, /<script defer src="\/site\.js\?v=[a-f0-9]+"/, `${page}: versioned navigation enhancement`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    assert.ok(resolveLocal(url), `${page}: broken reference ${url}`);
    const target = new URL(url, 'https://mindclarity.co.in/');
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
for (const [legacy, destination] of [['about','philosophy'],['services','consultation-info']]) {
  const html = readFileSync(path.join(dist, `${legacy}.html`), 'utf8');
  assert.ok(html.includes(`content="0;url=/${destination}"`) && html.includes('noindex'), `${legacy}: legacy redirect fallback`);
}
const redirects = readFileSync(path.join(dist, '_redirects'), 'utf8');
for (const [legacy, destination] of [['about', 'philosophy'], ['services', 'consultation-info']]) {
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
assert.ok(readFileSync(path.join(dist, 'site.js')).length < 5000, 'Navigation JavaScript stays below 5 KB');
for (const file of readdirSync(path.join(dist, 'assets'))) {
  assert.ok(readFileSync(path.join(dist, 'assets', file)).length < 150000, `${file}: optimized image stays below 150 KB`);
}
console.log(`PASS: ${pages.length} complete pages, retired Contact page absent, 2 redirects, navigation, fragments, assets, metadata, analytics and sitemap.`);
