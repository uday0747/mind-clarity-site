import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { languageVariants, pageLanguage } from '../language-options.js';

const live = process.argv.includes('--live');
const dist = process.argv.slice(2).find(argument => !argument.startsWith('--')) || fileURLToPath(new URL('../dist/', import.meta.url));
const { default: server } = await import(pathToFileURL(path.join(dist, 'server/index.js')).href);
const origin = 'https://mindclarity.co.in';
const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const sitemapDates = new Map([...sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(match => [match[1],match[2]]));
assert.equal(sitemapDates.size, urls.length, 'Every canonical page has a reviewed update date');
const request = url => live ? fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(20000) }) : server.fetch(new Request(url));
const cases = [
  [`${origin}/post/artificial-super-intelligence-and-enlightened-human-being`, 301, `${origin}/ai-fear-and-clarity`],
  [`${origin}/post/artificial-super-intelligence-and-enlightened-human-being/`, 301, `${origin}/ai-fear-and-clarity`],
];
for (const url of urls) {
  const path = new URL(url).pathname;
  cases.push([url, 200]);
  cases.push([`https://www.mindclarity.co.in${path}`, 301, url]);
  const variants = path === '/' ? ['/index', '/index.html'] : [`${path}.html`, `${path}/`, `${path}.html/`];
  for (const host of ['mindclarity.co.in', 'www.mindclarity.co.in']) {
    for (const variant of variants) cases.push([`https://${host}${variant}?ref=seo-check`, 301, `${url}?ref=seo-check`]);
  }
}
for (const [oldPath, target] of [['about', 'philosophy'], ['services', '']]) {
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
// Retired conversation URLs go directly to the matching language homepage.
for (const language of ['en','hi','es','fr','te','pt','id','ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur', 'de', 'it', 'ru', 'ja', 'ko', 'zh-Hans', 'zh-Hant', 'tr', 'vi', 'pl']) {
  const prefix = language === 'en' ? '' : `/${language}`;
  for (const host of ['mindclarity.co.in','www.mindclarity.co.in']) {
    for (const suffix of ['', '/', '.html', '.html/']) cases.push([`https://${host}${prefix}/consultation-info${suffix}`,301,`${origin}${prefix || '/'}`]);
  }
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
  const pathname = new URL(url).pathname;
  const language = pageLanguage(pathname);
  for (const [code, alternate] of Object.entries(languageVariants(pathname))) {
    const target = `${origin}${alternate}`;
    assert.ok(urls.includes(target), `${url}: language alternate is a current canonical page`);
    assert.ok(html.includes(`hreflang="${code}" href="${target}"`), `${url}: accurate ${code} alternate`);
  }
  assert.equal((html.match(/property="og:image"/g) || []).length, 1, `${url}: one social image`);
  assert.match(html, /og:image:width" content="1200"/, `${url}: correct image width`);
  assert.match(html, /og:image:height" content="800"/, `${url}: correct image height`);
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1])['@graph'];
  const modified = sitemapDates.get(url);
  assert.equal(graph[1].dateModified, modified, `${url}: schema and sitemap update dates agree`);
  assert.deepEqual(graph[0].inLanguage.sort(), Object.keys(languageVariants('/')).sort(), `${url}: site languages reflect actual translations`);
  for (const breadcrumb of graph.filter(item => item['@type'] === 'BreadcrumbList')) {
    const entries = breadcrumb.itemListElement;
    assert.equal(entries[0].item, `${origin}${languageVariants('/')[language]}`, `${url}: breadcrumb begins in this language`);
    assert.equal(entries.at(-1).item, url, `${url}: breadcrumb ends at this page`);
    assert.ok(entries.every(item => urls.includes(item.item)), `${url}: breadcrumb targets remain published`);
  }
  assert.doesNotMatch(html, /analytics and payments|análises e pagamentos|analyses? et paiements|consultation-info|rzp\.io|Razorpay|₹500/i, `${url}: no retired commercial metadata`);
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

if (!live) {
  const localRequest = (pathname, options) => server.fetch(new Request(`${origin}${pathname}`, options));
  for (const pathname of ['/', '/page.css', '/site.js', '/assets/pond-desktop-640.webp']) {
    const first = await localRequest(pathname);
    const bytes = await first.arrayBuffer();
    const etag = first.headers.get('etag');
    if (pathname === '/') {
      assert.equal(etag, null, 'Nonce-bearing HTML is not conditionally cached');
      assert.equal(first.headers.get('cache-control'), 'private, no-store');
    } else assert.match(etag, /^"[a-f0-9]{12}"$/, `${pathname}: content validator`);
    assert.equal(Number(first.headers.get('content-length')), bytes.byteLength, `${pathname}: byte length`);
    const head = await localRequest(pathname, { method: 'HEAD' });
    assert.equal(head.status, 200);
    assert.equal(head.headers.get('etag'), etag);
    assert.equal(head.headers.get('content-length'), first.headers.get('content-length'));
    assert.equal((await head.arrayBuffer()).byteLength, 0);
    for (const validator of etag ? [etag, `W/${etag}`, `"older-version", ${etag}`, '*'] : ['*']) {
      const cached = await localRequest(pathname, { headers: { 'If-None-Match': validator } });
      assert.equal(cached.status, etag ? 304 : 200, `${pathname}: safe cache behavior`);
      if (etag) assert.equal((await cached.arrayBuffer()).byteLength, 0);
    }
    assert.equal((await localRequest(pathname, { headers: { 'If-None-Match': '"old"' } })).status, 200);
    if (/\.(css|js)$/.test(pathname)) {
      const versioned = await localRequest(`${pathname}?v=${etag.slice(1, -1)}`);
      assert.match(versioned.headers.get('cache-control'), /max-age=31536000, immutable/);
      const stale = await localRequest(`${pathname}?v=old`);
      assert.doesNotMatch(stale.headers.get('cache-control'), /immutable/);
    } else assert.doesNotMatch(first.headers.get('cache-control'), /immutable/);
  }
  const missing = await localRequest('/nonexistent', { method: 'HEAD' });
  assert.equal(missing.status, 404);
  assert.equal((await missing.arrayBuffer()).byteLength, 0);
  const post = await localRequest('/', { method: 'POST' });
  assert.equal(post.status, 405);
  assert.equal(post.headers.get('allow'), 'GET, HEAD');
  console.log('PASS: conditional caching, current/stale asset versions, HEAD responses and unsupported methods.');
}
