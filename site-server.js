export function createSiteServer(assets, redirects) {
  const decodedAssets = new Map();
  return {
    async fetch(request) {
      const started = performance.now();
      const url = new URL(request.url);
      const retired = ['/contact', '/blank-1', '/blank-2', '/blank-3', '/blank-4', '/blog', '/book-online'];
      const normalized = url.pathname.replace(/\/$/, '').replace(/\.html$/, '');
      if (retired.includes(normalized) || url.pathname.startsWith('/blog/')) {
        return new Response(request.method === 'HEAD' ? null : '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page removed | Mind Clarity</title></head><body><main><h1>This page has been removed</h1><p>This page is no longer part of Mind Clarity.</p><p><a href="/">Begin here</a> or explore the <a href="/practice">daily practice</a>.</p></main></body></html>', { status: 410, headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex', 'Cache-Control': 'public, max-age=0, must-revalidate' } });
      }
      const canonicalHost = ['mindclarity.co.in', 'www.mindclarity.co.in'].includes(url.hostname);
      const redirectPath = redirects[url.pathname] || (url.pathname.endsWith('.html/') ? redirects[url.pathname.slice(0, -1)] : null);
      if (redirectPath || (canonicalHost && (url.hostname !== 'mindclarity.co.in' || url.protocol !== 'https:'))) {
        if (redirectPath) url.pathname = redirectPath;
        if (canonicalHost) {
          url.hostname = 'mindclarity.co.in';
          url.protocol = 'https:';
          url.port = '';
        }
        return new Response(null, { status: 301, headers: { Location: url.href } });
      }
      if (!['GET', 'HEAD'].includes(request.method)) {
        return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
      }
      const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
      const asset = pathname === '/404.html' || pathname === '/404' ? null : assets[pathname] || assets[`${pathname}.html`];
      const selected = asset || assets['/404.html'];
      // Only the build's current content hash qualifies for immutable caching.
      const versioned = asset && /\.(?:css|js)$/.test(pathname) && url.searchParams.get('v') === asset.revision;
      const headers = {
        'Content-Type': selected.type,
        'Cache-Control': versioned ? 'public, max-age=31536000, immutable' : asset ? 'public, max-age=0, s-maxage=60, stale-while-revalidate=300' : 'public, max-age=0, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      };
      if (!asset) headers['X-Robots-Tag'] = 'noindex';
      if (asset) {
        headers.ETag = `"${asset.revision}"`;
        const candidates = (request.headers.get('If-None-Match') || '').split(',').map(tag => tag.trim().replace(/^W\//, ''));
        if (candidates.includes('*') || candidates.includes(headers.ETag)) return new Response(null, { status: 304, headers });
      }
      headers['Content-Length'] = String(selected.size);
      if (request.method !== 'HEAD' && !decodedAssets.has(selected)) {
        decodedAssets.set(selected, Uint8Array.from(atob(selected.data), character => character.charCodeAt(0)));
      }
      headers['Server-Timing'] = `app;dur=${(performance.now() - started).toFixed(2)}`;
      const body = request.method === 'HEAD' ? null : decodedAssets.get(selected);
      return new Response(body, { status: asset ? 200 : 404, headers });
    },
  };
}
