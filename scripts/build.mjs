import { cp, mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
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
  'mind-clarity-mark.png', 'mind-clarity-mark-desktop.png', 'assets', 'robots.txt', 'sitemap.xml'];
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
await rm(path.join(root, 'dist'), { recursive: true, force: true });
await rename(dist, path.join(root, 'dist'));
console.log('Built 7 complete learning/support pages and 2 legacy redirects.');
