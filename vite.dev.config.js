import { defineConfig } from 'vite';
import { readFile } from 'node:fs/promises';
import { enquiryTopics } from './enquiry-topics.js';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from './app.js';
import { pages } from './page-app.js';
import { PagePathContext } from './site-header.js';
import { pageLanguage } from './language-options.js';
import { translateMarkup } from './scripts/translate-markup.mjs';

export default defineConfig({
  appType: 'mpa',
  plugins: [{
    name: 'enquiry-page-development',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url, 'http://localhost');
        const slug = url.pathname.replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '');
        // Localized previews use the same complete English source and strict
        // dictionaries as production, rather than legacy abridged components.
        const language = pageLanguage(url.pathname);
        if (language !== 'en' && pages[slug] && ['GET', 'HEAD'].includes(request.method)) {
          try {
            const base = slug === 'ai-fear-and-clarity-telugu' ? 'ai-fear-and-clarity' : slug.split('/')[1] || 'index';
            const component = base === 'index' ? App : pages[base];
            const source = renderToStaticMarkup(React.createElement(PagePathContext.Provider, { value: `/${slug}` }, React.createElement(component)));
            const template = await readFile(new URL(`${enquiryTopics.some(topic => topic.slug === base) ? 'faq' : base}.html`, import.meta.url), 'utf8');
            const head = template.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/href="(page.css|react-home.css|mind-clarity-mark.png)"/g, 'href="/$1"');
            const html = `<!doctype html><html lang="${language}"${['ar', 'ur'].includes(language) ? ' dir="rtl"' : ''}><head>${head}</head><body><div id="root">${translateMarkup(source, language)}</div><script type="module" src="/site-entry.js"></script></body></html>`;
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.end(request.method === 'HEAD' ? undefined : await server.transformIndexHtml(url.pathname, html));
          } catch (error) { next(error); }
          return;
        }
        const topic = enquiryTopics.find(topic => topic.slug === slug);
        if (!topic || !['GET', 'HEAD'].includes(request.method)) return next();
        try {
          const template = await readFile(new URL('./faq.html', import.meta.url), 'utf8');
          const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
          const html = template.replace(/<title>[^<]+<\/title>/, `<title>${escape(topic.title)} | Mind Clarity</title>`)
            .replace(/name="description" content="[^"]+"/, `name="description" content="${escape(topic.description)}"`)
            .replace('rel="canonical" href="https://mindclarity.co.in/faq"', `rel="canonical" href="https://mindclarity.co.in/${topic.slug}"`)
            .replace('href="page.css"', 'href="/page.css"').replace('src="page-app.js"', 'src="/page-app.js"');
          response.setHeader('Content-Type', 'text/html; charset=utf-8');
          response.end(request.method === 'HEAD' ? undefined : await server.transformIndexHtml(url.pathname, html));
        } catch (error) { next(error); }
      });
    }
  }],
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
  preview: { host: '127.0.0.1', port: 4173, strictPort: true },
  build: { outDir: 'dist' }
});
