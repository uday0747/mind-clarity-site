import { defineConfig } from 'vite';
import { readFile } from 'node:fs/promises';
import { enquiryTopics } from './enquiry-topics.js';

export default defineConfig({
  appType: 'mpa',
  plugins: [{
    name: 'enquiry-page-development',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url, 'http://localhost');
        const slug = url.pathname.replace(/^\//, '').replace(/\/$/, '').replace(/\.html$/, '');
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
