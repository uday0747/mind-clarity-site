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
import { enquiryTopics } from '../enquiry-topics.js';
import { pageLanguage } from '../language-options.js';
import { translateMarkup } from './translate-markup.mjs';
import additionalMeta from '../translations/metadata-new.json' with { type: 'json' };
import { localizedMeta } from '../localized-core.js';
import { localizedMoreMeta } from '../localized-more.js';
import { localizedAIMeta } from '../localized-ai.js';
import { contentSecurityPolicy, scriptIntegrity } from './security-policy.mjs';

const allLocalizedMeta = Object.fromEntries(['hi', 'es', 'fr', 'te', 'pt', 'id', 'ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur'].map(language => [language, {
  ...localizedMeta[language], ...localizedMoreMeta[language], ...localizedAIMeta[language], ...additionalMeta[language],
}]));

const root = fileURLToPath(new URL('../', import.meta.url));
await build({ configFile: path.join(root, 'vite.config.js'), root });
await mkdir(path.join(root, '.sites-runtime'), { recursive: true });
const dist = await mkdtemp(path.join(root, '.sites-runtime/build-'));
const assets = ['page.css', 'react-home.css', 'assets-brand.png', 'assets-brand-desktop.png',
  'mind-clarity-mark.png', 'mind-clarity-mark-desktop.png', 'assets', 'robots.txt', 'sitemap.xml', '_redirects', '404.html'];
for (const asset of assets) await cp(path.join(root, asset), path.join(dist, asset), { recursive: true });
await cp(path.join(root, 'dist-bundle/site.js'), path.join(dist, 'site.js'));
const bundleIntegrity = scriptIntegrity(await readFile(path.join(dist, 'site.js')));

const revision = async (name) => createHash('sha256').update(await readFile(path.join(dist, name))).digest('hex').slice(0, 12);
for (const [page, Component] of Object.entries({ index: App, ...pages })) {
  const topic = enquiryTopics.find(topic => topic.slug === page);
  const localizedRoute = page.match(/^(hi|es|fr|te|pt|id|ar|ta|kn|ml|bn|mr|gu|pa|or|as|ur)\/(.+)$/) || (['te', 'pt', 'id', 'ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur'].includes(page) ? [page, page, ''] : null);
  const localizedTopic = localizedRoute && enquiryTopics.find(topic => topic.slug === localizedRoute[2]);
  const templatePage = ['te', 'pt', 'id', 'ar', 'ta', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa', 'or', 'as', 'ur'].includes(page) ? 'index' : page.split('/').pop();
  let template = await readFile(path.join(root, `${topic || localizedTopic ? 'faq' : templatePage}.html`), 'utf8');
  if (localizedRoute) {
    const [, language, basePage] = localizedRoute;
    const meta = allLocalizedMeta[language]?.[basePage];
    if (!meta) throw new Error(`Missing localized metadata: ${page}`);
    const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
    template = template.replace(/<title>[^<]+<\/title>/, `<title>${escape(meta.title)}</title>`)
      .replace(/name="description" content="[^"]+"/, `name="description" content="${escape(meta.description)}"`)
      .replace(/rel="canonical" href="https:\/\/mindclarity\.co\.in\/[^\"]*"/, `rel="canonical" href="https://mindclarity.co.in/${page}"`)
      .replace(/property="og:title" content="[^"]+"/, `property="og:title" content="${escape(meta.title)}"`)
      .replace(/property="og:description" content="[^"]+"/, `property="og:description" content="${escape(meta.description)}"`)
      .replace(/property="og:url" content="[^"]+"/, `property="og:url" content="https://mindclarity.co.in/${page}"`);
  }
  if (topic) {
    const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
    template = template.replace(/<title>[^<]+<\/title>/, `<title>${escape(topic.seoTitle || topic.title)} | Mind Clarity</title>`)
      .replace(/name="description" content="[^"]+"/, `name="description" content="${escape(topic.description)}"`)
      .replace('rel="canonical" href="https://mindclarity.co.in/faq"', `rel="canonical" href="https://mindclarity.co.in/${topic.slug}"`);
  }
  let head = template.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
  if (!head) throw new Error(`Missing head: ${page}.html`);
  head = completeMetadata(head);
  const analyticsBootstrap = await readFile(path.join(root, 'analytics-bootstrap.js'), 'utf8');
  head = head.replace(/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js[^"]*"><\/script>\s*<script>[\s\S]*?<\/script>/, `<script>${analyticsBootstrap}</script>`);
  head = head.replaceAll('href="mind-clarity-mark.png"', 'href="/assets/favicon-32.png"');
  head += '<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />';
  head = head.replace(/[\t ]+$/gm, '');
  head = head.replace(/<script type="module"[^>]*><\/script>/g, '');
  for (const css of ['page.css', 'react-home.css']) {
    head = head.replaceAll(`href="${css}"`, `href="/${css}?v=${await revision(css)}"`);
  }
  const pathname = page === 'index' ? '/' : `/${page}`;
  const language = pageLanguage(pathname);
  const sourcePage = page === 'ai-fear-and-clarity-telugu' ? 'ai-fear-and-clarity' : language !== 'en' ? (page.split('/')[1] || 'index') : page;
  const sourceComponent = sourcePage === 'index' ? App : pages[sourcePage];
  let markup = renderToStaticMarkup(React.createElement(PagePathContext.Provider, { value: pathname }, React.createElement(language === 'en' ? Component : sourceComponent)));
  const readingText = markup.replace(/<aside\b[^>]*class="share-lesson"[^>]*>[\s\S]*?<\/aside>/g, '').match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || markup;
  const readingMinutes = Math.max(1, Math.ceil(readingText.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean).length / 200));
  const articleText = renderToStaticMarkup(React.createElement(pages['ai-fear-and-clarity']));
  const articleMinutes = Math.max(1, Math.ceil(articleText.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length / 200));
  markup = markup.replace(/(<span data-reading-minutes="true"([^>]*)>)–(<\/span>)/g, (_, open, attributes, close) => open + (attributes.includes('data-reading-article') ? articleMinutes : readingMinutes) + close);
  if (language !== 'en') markup = translateMarkup(markup, language);
  const html = `<!doctype html>\n<html lang="${pageLanguage(pathname)}"${['ar', 'ur'].includes(language) ? ' dir="rtl"' : ''}><head>${head}</head><body><div id="root">${markup}</div><script defer src="/site.js?v=${await revision('site.js')}" integrity="${bundleIntegrity}" crossorigin="anonymous"></script></body></html>\n`;
  const outputFile = path.join(dist, `${page}.html`);
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, html);
}
for (const legacy of ['about.html', 'services.html']) await cp(path.join(root, legacy), path.join(dist, legacy));
// Check the complete staged output before replacing the last working build.
execFileSync(process.execPath, [path.join(root, 'scripts/check.mjs'), dist], { stdio: 'inherit' });
execFileSync(process.execPath, [path.join(root, 'scripts/check-discovery.mjs')], { stdio:'inherit' });
execFileSync(process.execPath, [path.join(root, 'scripts/check-reading-analytics.mjs')], { stdio:'inherit' });
execFileSync(process.execPath, [path.join(root, 'scripts/check-audit-fixes.mjs'), dist], { stdio:'inherit' });
// Serve explicit HTTP redirects even on hosts that ignore static _redirects files.
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg' };
const serverAssets = {};
async function collectAssets(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}/${entry.name}`;
    if (entry.isDirectory()) await collectAssets(path.join(directory, entry.name), relative);
    else if (entry.name !== '_redirects') {
      const bytes = await readFile(path.join(directory, entry.name));
      serverAssets[relative] = { type: types[path.extname(entry.name)] || 'application/octet-stream',
        data: bytes.toString('base64'), size: bytes.length,
        revision: createHash('sha256').update(bytes).digest('hex').slice(0, 12),
        ...(path.extname(entry.name) === '.html' ? { csp: contentSecurityPolicy(bytes.toString('utf8'), bundleIntegrity) } : {}) };
    }
  }
}
await collectAssets(dist);
const redirects = Object.fromEntries((await readFile(path.join(dist, '_redirects'), 'utf8')).trim().split('\n').map(line => line.trim().split(/\s+/).slice(0, 2)));
await mkdir(path.join(dist, 'server'));
const serverSource = await readFile(path.join(root, 'site-server.js'), 'utf8');
await writeFile(path.join(dist, 'server/index.js'), `${serverSource}\nexport default createSiteServer(${JSON.stringify(serverAssets)}, ${JSON.stringify(redirects)});\n`);
execFileSync(process.execPath, [path.join(root, 'scripts/audit-seo.mjs'), dist], { stdio: 'inherit' });
execFileSync(process.execPath, [path.join(root, 'scripts/check-security.mjs'), dist], { stdio: 'inherit' });
await rm(path.join(root, 'dist'), { recursive: true, force: true });
await rename(dist, path.join(root, 'dist'));
console.log(`Built ${1 + Object.keys(pages).length} complete learning/support pages and 2 legacy redirects; Contact is retired.`);
