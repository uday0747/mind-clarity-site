import { translations } from '../translations.js';
import { localizedPageSlugs, localizedPath } from '../language-options.js';
const decode = value => value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (whole, name) => {
  if (name[0] === '#') return String.fromCodePoint(parseInt(name.slice(name[1].toLowerCase() === 'x' ? 2 : 1), name[1].toLowerCase() === 'x' ? 16 : 10));
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[name] ?? whole;
});
const encode = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
const exempt = text => !/[\p{L}]/u.test(text) || ['Mind Clarity', 'pudaykumar12@gmail.com', 'WhatsApp +91 9989766517'].includes(text);
export function translateMarkup(markup, language) {
  const dictionary = translations[language];
  if (!dictionary) throw new Error(`Unknown language: ${language}`);
  const text = raw => {
    const source = decode(raw).trim();
    if (!source || exempt(source)) return raw;
    const translated = dictionary[source];
    if (!translated) throw new Error(`Missing ${language} translation: ${source}`);
    return encode(decode(raw).replace(source, translated));
  };
  const localLink = raw => {
    const url = decode(raw);
    if (!url.startsWith('/') || url.startsWith('//')) return raw;
    const match = url.match(/^\/([^?#]*)(.*)$/);
    const slug = match[1];
    if (!slug) return localizedPath(language) + match[2];
    if (slug === 'ai-fear-and-clarity') return (language === 'te' ? '/ai-fear-and-clarity-telugu' : localizedPath(language, slug)) + match[2];
    if (localizedPageSlugs.has(slug)) return localizedPath(language, slug) + match[2];
    return raw;
  };
  // Chrome is rendered from shared locale-aware components. Translate only the
  // English main content; preserve the already localized sharing component.
  return markup.replace(/(<main\b[^>]*>)([\s\S]*?)(<\/main>)/, (_, open, body, close) => {
    const shares=[];
    body = body.replace(/<aside\b[^>]*class="share-lesson"[^>]*>[\s\S]*?<\/aside>/g, share => {shares.push(share); return `<!--SHARE${shares.length-1}-->`;});
    body = body.split(/(<[^>]*>)/g).map(token => {
      if (!token.startsWith('<')) return text(token);
      return token.replace(/\b(href|alt|aria-label|placeholder|data-single|data-plural|data-empty)="([^"]*)"/g, (all, key, value) => `${key}="${key === 'href' ? (/\bhreflang=/.test(token) ? value : localLink(value)) : text(value)}"`);
    }).join('');
    body = body.replace(/<!--SHARE(\d+)-->/g,(_,i)=>shares[+i]);
    return open + body + close;
  });
}
