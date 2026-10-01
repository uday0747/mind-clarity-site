import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import server from '../dist/server/index.js';

const live = process.argv.includes('--live');
const origin = 'https://mindclarity.co.in';
const sitemap = readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const request = url => live ? fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(20000) }) : server.fetch(new Request(url));
const cases = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  cases.push([url, 200]);
  cases.push([`https://www.mindclarity.co.in${path}`, 301, url]);
  const variants = path === '/' ? ['/index', '/index.html'] : [`${path}.html`, `${path}/`, `${path}.html/`];
  for (const host of ['mindclarity.co.in', 'www.mindclarity.co.in']) {
    for (const variant of variants) cases.push([`https://${host}${variant}?ref=seo-check`, 301, `${url}?ref=seo-check`]);
  }
}
for (const [oldPath, target] of [['about', 'philosophy'], ['services', 'consultation-info']]) {
  for (const host of ['mindclarity.co.in', 'www.mindclarity.co.in']) {
    for (const suffix of ['', '/', '.html', '.html/']) cases.push([`https://${host}/${oldPath}${suffix}`, 301, `${origin}/${target}`]);
  }
}
for (const host of ['mindclarity.co.in', 'www.mindclarity.co.in']) {
  for (const path of ['contact', 'blank-1', 'blank-2', 'blank-3', 'blank-4', 'blog', 'book-online']) {
    for (const suffix of ['', '/', '.html', '.html/']) cases.push([`https://${host}/${path}${suffix}?ref=google`, 410]);
  }
  cases.push([`https://${host}/blog/old-article`, 410]);
}
for (const path of ['/404', '/404.html', '/nonexistent-seo-audit', '/server/index.js', '/.env']) cases.push([`${origin}${path}`, 404]);
let checked = 0;
for (let offset = 0; offset < cases.length; offset += 6) {
  await Promise.all(cases.slice(offset, offset + 6).map(async ([url, status, target]) => {
    const response = await request(url);
    assert.equal(response.status, status, url);
    if (target) assert.equal(response.headers.get('location'), target, `${url}: destination`);
    if ([404, 410].includes(status)) assert.equal(response.headers.get('x-robots-tag'), 'noindex', `${url}: indexing exclusion`);
    await response.arrayBuffer();
    checked++;
  }));
}
const resources = new Set([`${origin}/robots.txt`, `${origin}/sitemap.xml`]);
const htmlByURL = new Map();
for (const url of urls) {
  const response = await request(url);
  const html = await response.text();
  htmlByURL.set(url, html);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `${url}: canonical`);
  assert.ok(html.includes(`property="og:url" content="${url}"`), `${url}: social URL`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${url}: heading`);
  assert.doesNotMatch(html, /name="robots" content="noindex"/, `${url}: indexable`);
  for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = new URL(reference.replaceAll('&amp;', '&'), url);
    if (target.origin === origin) resources.add(target.href);
  }
  for (const [, srcset] of html.matchAll(/srcset="([^"]+)"/gi)) {
    for (const candidate of srcset.split(',')) resources.add(new URL(candidate.trim().split(/\s+/)[0], url).href);
  }
}
for (const url of resources) {
  const target = new URL(url);
  const response = await request(url);
  assert.equal(response.status, 200, `${url}: reachable internal resource`);
  const body = await response.text();
  if (target.hash) assert.ok(body.includes(`id="${target.hash.slice(1)}"`), `${url}: fragment exists`);
  if (target.pathname.endsWith('.css')) {
    for (const [, reference] of body.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      const image = await request(new URL(reference, url));
      assert.equal(image.status, 200, `${url}: CSS image ${reference}`);
      await image.arrayBuffer();
    }
  }
  if (target.pathname === '/sitemap.xml') assert.equal(body.trim(), sitemap.trim(), 'Live sitemap matches published source');
}
console.log(`PASS (${live ? 'live' : 'local'}): ${checked} route checks, ${urls.length} page metadata checks, ${resources.size} internal links/assets/fragments, CSS images, robots and sitemap.`);
