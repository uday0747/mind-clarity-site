import { cp, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'vite';
import { App } from '../app.js';
import { pages } from '../page-app.js';
import { PagePathContext } from '../site-header.js';
import { completeMetadata } from './metadata.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
await build({ configFile: path.join(root, 'vite.config.js'), root });
await mkdir(path.join(root, '.sites-runtime'), { recursive: true });
const dist = await mkdtemp(path.join(root, '.sites-runtime/build-'));
const assets = ['page.css', 'react-home.css', 'assets-brand.png', 'assets-brand-desktop.png',
  'mind-clarity-mark.png', 'mind-clarity-mark-desktop.png', 'assets', 'robots.txt', 'sitemap.xml', '_redirects', '404.html'];
for (const asset of assets) await cp(path.join(root, asset), path.join(dist, asset), { recursive: true });
await cp(path.join(root, 'dist-bundle/site.js'), path.join(dist, 'site.js'));

const revision = async (name) => createHash('sha256').update(await readFile(path.join(dist, name))).digest('hex').slice(0, 12);
for (const [page, Component] of Object.entries({ index: App, ...pages })) {
  const template = await readFile(path.join(root, `${page}.html`), 'utf8');
  let head = template.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
  if (!head) throw new Error(`Missing head: ${page}.html`);
  head = completeMetadata(head);
  head = head.replaceAll('href="mind-clarity-mark.png"', 'href="/assets/favicon-32.png"');
  head += '<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />';
  head = head.replace(/[\t ]+$/gm, '');
  head = head.replace(/<script type="module"[^>]*><\/script>/g, '');
  for (const css of ['page.css', 'react-home.css']) {
    head = head.replaceAll(`href="${css}"`, `href="${css}?v=${await revision(css)}"`);
  }
  const pathname = page === 'index' ? '/' : `/${page}`;
  const markup = renderToStaticMarkup(React.createElement(PagePathContext.Provider, { value: pathname }, React.createElement(Component)));
  const html = `<!doctype html>\n<html lang="en"><head>${head}</head><body><div id="root">${markup}</div><script defer src="/site.js?v=${await revision('site.js')}"></script></body></html>\n`;
  await writeFile(path.join(dist, `${page}.html`), html);
}
for (const legacy of ['about.html', 'services.html']) await cp(path.join(root, legacy), path.join(dist, legacy));
// Check the complete staged output before replacing the last working build.
execFileSync(process.execPath, [path.join(root, 'scripts/check.mjs'), dist], { stdio: 'inherit' });
// Serve explicit HTTP redirects even on hosts that ignore static _redirects files.
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg' };
const serverAssets = {};
async function collectAssets(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}/${entry.name}`;
    if (entry.isDirectory()) await collectAssets(path.join(directory, entry.name), relative);
    else if (entry.name !== '_redirects') serverAssets[relative] = { type: types[path.extname(entry.name)] || 'application/octet-stream', data: (await readFile(path.join(directory, entry.name))).toString('base64') };
  }
}
await collectAssets(dist);
const redirects = Object.fromEntries((await readFile(path.join(dist, '_redirects'), 'utf8')).trim().split('\n').map(line => line.trim().split(/\s+/).slice(0, 2)));
await mkdir(path.join(dist, 'server'));
const serverSource = await readFile(path.join(root, 'site-server.js'), 'utf8');
await writeFile(path.join(dist, 'server/index.js'), `${serverSource}\nexport default createSiteServer(${JSON.stringify(serverAssets)}, ${JSON.stringify(redirects)});\n`);
await rm(path.join(root, 'dist'), { recursive: true, force: true });
await rename(dist, path.join(root, 'dist'));
console.log('Built 7 complete learning/support pages and 2 legacy redirects.');
