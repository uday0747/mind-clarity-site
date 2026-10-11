import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { scriptIntegrity } from './security-policy.mjs';

const live = process.argv.includes('--live');
const dist = process.argv.slice(2).find(arg => !arg.startsWith('--')) || fileURLToPath(new URL('../dist/', import.meta.url));
const { default: server } = await import(pathToFileURL(path.join(dist, 'server/index.js')).href);
const origin = 'https://mindclarity.co.in';
const request = (pathname, options) => live
  ? fetch(`${origin}${pathname}`, { ...options, redirect: 'manual', signal: AbortSignal.timeout(20000) })
  : server.fetch(new Request(`${origin}${pathname}`, options));
const bundle = readFileSync(path.join(dist, 'site.js'));
const integrity = scriptIntegrity(bundle);
const urls = [...readFileSync(path.join(dist, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
let checked = 0;
function checkHeaders(response, label) {
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff', label);
  assert.equal(response.headers.get('x-frame-options'), 'DENY', label);
  assert.equal(response.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', label);
  assert.match(response.headers.get('strict-transport-security'), /max-age=31536000/, label);
  assert.match(response.headers.get('permissions-policy'), /camera=\(\).*microphone=\(\).*geolocation=\(\)/, label);
  const csp = response.headers.get('content-security-policy');
  assert.match(csp, /default-src 'none'/, label);
  for (const directive of ['base-uri', 'object-src', 'frame-ancestors', 'form-action']) assert.ok(csp.includes(`${directive} 'none'`), `${label}: ${directive}`);
  assert.doesNotMatch(csp, /unsafe-inline|unsafe-eval|script-src 'self'/, label);
  assert.equal(response.headers.get('access-control-allow-origin'), null, label);
  checked++;
  return csp;
}
for (let offset = 0; offset < urls.length; offset += 6) {
  await Promise.all(urls.slice(offset, offset + 6).map(async pathname => {
    const response = await request(pathname);
    assert.equal(response.status, 200, pathname);
    const csp = checkHeaders(response, pathname);
    const html = await response.text();
    assert.equal(response.headers.get('cache-control'), 'private, no-store', `${pathname}: nonce is not cached`);
    assert.match(csp, /'nonce-[A-Za-z0-9+/]{24}'/, `${pathname}: cryptographically random response nonce`);
    assert.match(csp, /'strict-dynamic'/, pathname);
    assert.ok(html.includes(`integrity="${integrity}"`), `${pathname}: bundle integrity`);
    assert.ok(csp.includes(`'${integrity}'`), `${pathname}: external script authorized by hash`);
    for (const [, attributes, contents] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (!/\bsrc\s*=/.test(attributes)) {
        const nonce = attributes.match(/\bnonce="([^"]+)"/)?.[1];
        const approvedEdgeScript = live && nonce && csp.includes(`'nonce-${nonce}'`) && contents.startsWith('(function(){function c()');
        assert.ok(csp.includes(`'${scriptIntegrity(contents)}'`) || approvedEdgeScript, `${pathname}: inline script matches hash or Cloudflare nonce`);
      }
    }
    assert.doesNotMatch(html, /<style\b|\sstyle=|\son(?:click|load|error|submit)=/i, `${pathname}: no inline style/event exceptions`);
    assert.doesNotMatch(html, /(?:src|href)="http:\/\//i, `${pathname}: no insecure resources`);
  }));
}
for (const [pathname, status] of [['/page.css', 200], ['/site.js', 200], ['/assets/social-preview.jpg', 200], ['/index.html', 301], ['/contact', 410], ['/not-a-page', 404], ['/.env', 404], ['/.git/config', 404], ['/server/index.js', 404], ['/package.json', 404], ['/__proto__', 404], ['/constructor', 404], ['/toString', 404]]) {
  const response = await request(pathname);
  assert.equal(response.status, status, pathname);
  checkHeaders(response, pathname);
  const body = await response.arrayBuffer();
  if (pathname === '/site.js') assert.equal(scriptIntegrity(Buffer.from(body)), integrity, 'Live JavaScript matches its integrity hash');
}
for (const method of ['POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']) {
  for (const pathname of ['/', '/index.html', '/contact']) {
    const response = await request(pathname, { method });
    assert.equal(response.status, 405, `${method} ${pathname}`);
    assert.equal(response.headers.get('allow'), 'GET, HEAD');
    checkHeaders(response, `${method} ${pathname}`);
    await response.arrayBuffer();
  }
}
const head = await request('/', { method: 'HEAD' });
checkHeaders(head, 'HEAD');
assert.equal((await head.arrayBuffer()).byteLength, 0);
if (!live) {
  const second = await request('/');
  assert.notEqual(head.headers.get('content-security-policy'), second.headers.get('content-security-policy'), 'Fresh nonce for each response');
  const asset = await request('/site.js');
  const cached = await request('/site.js', { headers: { 'If-None-Match': asset.headers.get('etag') } });
  assert.equal(cached.status, 304);
  checkHeaders(cached, '304');
}
console.log(`PASS security (${live ? 'live' : 'local'}): ${urls.length} pages, exact script hashes/integrity, ${checked} response/header checks, private paths and rejected write methods.`);
