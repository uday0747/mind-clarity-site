import { createHash } from 'node:crypto';

export const scriptIntegrity = bytes => `sha256-${createHash('sha256').update(bytes).digest('base64')}`;

// Hashes are generated from the exact deployed bytes, never request input.
export function contentSecurityPolicy(html, bundleIntegrity) {
  const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(([, attributes]) => !/\bsrc\s*=/.test(attributes))
    .map(([, , contents]) => `'${scriptIntegrity(contents)}'`);
  if (html.includes('src="/site.js?')) hashes.push(`'${bundleIntegrity}'`);
  return [
    "default-src 'none'",
    hashes.length ? `script-src ${[...new Set(hashes)].join(' ')} 'strict-dynamic'` : "script-src 'none'",
    "script-src-attr 'none'",
    "style-src 'self'",
    "style-src-attr 'none'",
    "img-src 'self' https://www.googletagmanager.com https://*.google-analytics.com",
    "font-src 'self'",
    "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com",
    "base-uri 'none'",
    "object-src 'none'",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'none'",
    "worker-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}
