export function createSiteServer(assets, redirects) {
  return {
    async fetch(request) {
      const url = new URL(request.url);
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
