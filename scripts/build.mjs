import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { build } from 'vite';
import { App } from '../app.js';
import { pages } from '../page-app.js';
import { PagePathContext } from '../site-header.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
await build({ configFile: path.join(root, 'vite.config.js'), root });
await build({ configFile: path.join(root, 'vite.home.config.js'), root });
// dist is generated in full only after both browser builds succeed.
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
const assets = ['page.css', 'react-home.css', 'assets-brand.png', 'assets-brand-desktop.png',
  'mind-clarity-mark.png', 'mind-clarity-mark-desktop.png', 'robots.txt', 'sitemap.xml'];
for (const asset of assets) await cp(path.join(root, asset), path.join(dist, asset));
await cp(path.join(root, 'dist-bundle/react-app.js'), path.join(dist, 'react-app.js'));
await cp(path.join(root, 'dist-home/home-react.js'), path.join(dist, 'home-react.js'));

const revision = async (name) => createHash('sha256').update(await readFile(path.join(dist, name))).digest('hex').slice(0, 12);
for (const [page, Component] of Object.entries({ index: App, ...pages })) {
  const template = await readFile(path.join(root, `${page}.html`), 'utf8');
  let head = template.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
  if (!head) throw new Error(`Missing head: ${page}.html`);
  head = head.replace(/<script type="module"[^>]*><\/script>/g, '');
  for (const css of ['page.css', 'react-home.css']) {
    head = head.replaceAll(`href="${css}"`, `href="${css}?v=${await revision(css)}"`);
  }
  const pathname = page === 'index' ? '/' : `/${page}`;
  const markup = renderToString(React.createElement(PagePathContext.Provider, { value: pathname }, React.createElement(Component)));
  const bundle = page === 'index' ? 'home-react.js' : 'react-app.js';
  const html = `<!doctype html>\n<html lang="en"><head>${head}</head><body><div id="root">${markup}</div><script defer src="${bundle}?v=${await revision(bundle)}"></script><noscript><style>.site-header nav{display:flex!important;flex-wrap:wrap}.menu-toggle{display:none!important}</style></noscript></body></html>\n`;
  await writeFile(path.join(dist, `${page}.html`), html);
}
for (const legacy of ['about.html', 'services.html']) await cp(path.join(root, legacy), path.join(dist, legacy));
console.log('Built 7 complete learning/support pages and 2 legacy redirects.');
