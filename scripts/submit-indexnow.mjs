import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';

// Run after deployment. This publishes notifications, not website content.
const root = new URL('../', import.meta.url);
const key = (await readFile(new URL('indexnow-key.txt', root), 'utf8')).trim();
assert.match(key, /^[a-zA-Z0-9-]{8,128}$/);
const sitemap = await readFile(new URL('dist/sitemap.xml', root), 'utf8');
const current = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const retiredPaths = ['/blank-1', '/blank-2', '/blank-3', '/blank-4', '/contact', '/blog', '/book-online', '/service-page/discover-your-empowerment', '/service-page/virtual-consultation', '/service-page/discovery-call'];
const receipts = [];
for (const host of ['mindclarity.co.in', 'www.mindclarity.co.in']) {
  const keyLocation = `https://${host}/indexnow-key.txt`;
  const verification = await fetch(keyLocation, { redirect: 'error', signal: AbortSignal.timeout(30000) });
  assert.equal(verification.status, 200, `Key verification on ${host}`);
  assert.equal((await verification.text()).trim(), key, `Key content on ${host}`);
  const urls = host === 'mindclarity.co.in' ? [...current, `https://${host}/about.html`, ...retiredPaths.map(p => `https://${host}${p}`)] : ['/', '/about.html', ...retiredPaths].map(p => `https://${host}${p}`);
  const urlList = [...new Set(urls)];
  assert.ok(urlList.length <= 10000 && urlList.every(url => new URL(url).hostname === host));
  const response = await fetch('https://www.bing.com/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
    signal: AbortSignal.timeout(60000),
  });
  const receipt = { host, submittedAt: new Date().toISOString(), count: urlList.length, status: response.status, response: (await response.text()).slice(0,2000), urls: urlList };
  receipts.push(receipt);
  await mkdir(new URL('audits/', root), { recursive: true });
  await writeFile(new URL('audits/indexnow-submission-2026-10-15.json', root), JSON.stringify(receipts, null, 2));
  console.log(`${host}: ${urlList.length} URLs submitted; HTTP ${response.status}${response.status === 202 ? ' (ownership validation pending)' : ''}`);
  assert.ok([200,202].includes(response.status), `IndexNow rejected ${host}: HTTP ${response.status}`);
}
console.log('Notification receipts saved. Acceptance does not guarantee indexing or immediate removal.');
