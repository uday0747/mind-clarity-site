export function createSiteServer(assets, redirects) {
  const decodedAssets = new Map();
  const publicAssets = new Map(Object.entries(assets));
  const publicRedirects = new Map(Object.entries(redirects));
  const securityHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Strict-Transport-Security': 'max-age=31536000',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), hid=(), bluetooth=(), display-capture=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Content-Security-Policy': "default-src 'none'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'none'",
  };
  function htmlHeaders(csp = securityHeaders['Content-Security-Policy']) {
    // Cloudflare parses this per-response nonce and applies it to its own bot
    // detection scripts. HTML is never cached, so the nonce is not reused.
    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(18))));
    csp = /(?:^|; )script-src /.test(csp)
      ? csp.replace(/script-src ([^;]+)/, (_, sources) => `script-src ${sources.replace("'none'", '').trim()} 'nonce-${nonce}'${sources.includes("'strict-dynamic'") ? '' : " 'strict-dynamic'"}`)
      : `${csp}; script-src 'nonce-${nonce}' 'strict-dynamic'`;
    return { ...securityHeaders, 'Content-Security-Policy': csp, 'Cache-Control': 'private, no-store' };
  }
  return {
    async fetch(request) {
      const started = performance.now();
      const url = new URL(request.url);
      if (!['GET', 'HEAD'].includes(request.method)) {
        return new Response('Method not allowed', { status: 405, headers: { ...securityHeaders, 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', Allow: 'GET, HEAD' } });
      }
      const retired = ['/contact', '/blank-1', '/blank-2', '/blank-3', '/blank-4', '/blog', '/book-online'];
      const normalized = url.pathname.replace(/\/$/, '').replace(/\.html$/, '');
      if (retired.includes(normalized) || url.pathname.startsWith('/blog/') || url.pathname.startsWith('/service-page/')) {
        return new Response(request.method === 'HEAD' ? null : '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page removed | Mind Clarity</title></head><body><main><h1>This page has been removed</h1><p>This page is no longer part of Mind Clarity.</p><p><a href="/">Begin here</a> or explore the <a href="/practice">daily practice</a>.</p></main></body></html>', { status: 410, headers: { ...htmlHeaders(), 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' } });
      }
      const canonicalHost = ['mindclarity.co.in', 'www.mindclarity.co.in'].includes(url.hostname);
      const redirectPath = publicRedirects.get(url.pathname) || (url.pathname.endsWith('.html/') ? publicRedirects.get(url.pathname.slice(0, -1)) : null);
      // IndexNow must verify ownership on both indexed hostnames directly.
      const indexNowVerification = url.pathname === '/indexnow-key.txt';
      if (redirectPath || (canonicalHost && (url.protocol !== 'https:' || (url.hostname !== 'mindclarity.co.in' && !indexNowVerification)))) {
        if (redirectPath) url.pathname = redirectPath;
        if (canonicalHost) {
          url.hostname = 'mindclarity.co.in';
          url.protocol = 'https:';
          url.port = '';
        }
        return new Response(null, { status: 301, headers: { ...securityHeaders, Location: url.href } });
      }
      const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
      const asset = pathname === '/404.html' || pathname === '/404' ? null : publicAssets.get(pathname) || publicAssets.get(`${pathname}.html`);
      const selected = asset || publicAssets.get('/404.html');
      const isHTML = selected.type.startsWith('text/html');
      // Only the build's current content hash qualifies for immutable caching.
      const versioned = asset && /\.(?:css|js)$/.test(pathname) && url.searchParams.get('v') === asset.revision;
      const headers = {
        ...securityHeaders,
        'Content-Type': selected.type,
        'Cache-Control': versioned ? 'public, max-age=31536000, immutable' : asset ? 'public, max-age=0, s-maxage=60, stale-while-revalidate=300' : 'public, max-age=0, must-revalidate',
        ...(isHTML ? htmlHeaders(selected.csp) : {}),
      };
      if (!asset) headers['X-Robots-Tag'] = 'noindex';
      if (asset && !isHTML) {
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
