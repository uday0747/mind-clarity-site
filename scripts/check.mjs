import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = ['index', 'philosophy', 'practice', 'faq', 'contact', 'consultation-info', 'privacy'];
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
  assert.equal((html.match(/googletagmanager\.com\/gtag\/js/g) || []).length, 1, `${page}: one analytics loader`);
  assert.equal((html.match(/aria-current="page"/g) || []).length, ['privacy', 'consultation-info', 'contact'].includes(page) ? 0 : 1, `${page}: active navigation`);
  assert.doesNotMatch(html, /src="(?:app|page-app)\.js"/, `${page}: production bundle`);
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
  if (['index','philosophy','practice','faq'].includes(page)) {
    const main = html.match(/<main[\s\S]*?<\/main>/)[0];
    assert.doesNotMatch(main, /href="[^"]*(?:consultation-info|wa\.me|rzp\.io)|₹500|Book a|Donate/, `${page}: independent learning, no sales funnel`);
  }
}
for (const [legacy, destination] of [['about','philosophy'],['services','consultation-info']]) {
  const html = readFileSync(path.join(dist, `${legacy}.html`), 'utf8');
  assert.ok(html.includes(`content="0;url=/${destination}.html"`) && html.includes('noindex'), `${legacy}: legacy redirect`);
}
for (const css of ['page.css', 'react-home.css']) {
  for (const [, url] of readFileSync(path.join(dist, css), 'utf8').matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    assert.ok(resolveLocal(url), `CSS: missing ${url}`);
  }
}
const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, pages.length);
for (const page of pages) assert.ok(sitemap.includes(`https://mindclarity.co.in/${page === 'index' ? '' : page}</loc>`));
assert.ok(!readdirSync(dist).some((file) => ['app.js', 'page-app.js', 'node_modules', '.env'].includes(file)), 'No raw source or private files in the public output');
console.log('PASS: 7 complete pages, 2 redirects, navigation, cross-page fragments, learning-first CTAs, assets, metadata, analytics and sitemap.');
