export function createSiteServer(assets, redirects) {
  return {
    async fetch(request) {
      const url = new URL(request.url);
      if (['/contact', '/contact/', '/contact.html', '/contact.html/'].includes(url.pathname)) {
        return new Response(request.method === 'HEAD' ? null : '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page removed | Mind Clarity</title></head><body><main><h1>This page has been removed</h1><p>The Contact page is no longer part of Mind Clarity.</p><p><a href="/">Begin here</a> or explore the <a href="/practice">daily practice</a>.</p></main></body></html>', { status: 410, headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex', 'Cache-Control': 'public, max-age=0, must-revalidate' } });
      }
      if (redirects[url.pathname]) {
        url.pathname = redirects[url.pathname];
        return new Response(null, { status: 301, headers: { Location: url.href } });
      }
      if (!['GET', 'HEAD'].includes(request.method)) {
        return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
      }
      const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
      const asset = assets[pathname] || assets[`${pathname}.html`];
      const selected = asset || assets['/404.html'];
      const headers = {
        'Content-Type': selected.type,
        'Cache-Control': 'public, max-age=0, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      };
      if (!asset) headers['X-Robots-Tag'] = 'noindex';
      const body = request.method === 'HEAD' ? null : Uint8Array.from(atob(selected.data), character => character.charCodeAt(0));
      return new Response(body, { status: asset ? 200 : 404, headers });
    },
  };
}
