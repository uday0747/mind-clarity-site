import { questions } from '../questions.js';

// Titles, descriptions and canonicals in each source HTML remain the source of truth.
export function completeMetadata(head) {
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = head.match(/name="description" content="([^"]+)"/)?.[1];
  const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!title || !description || !canonical) throw new Error('Missing page metadata');
  const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
  // Retain existing social images; regenerate only text fields from the page metadata.
  head = head.replace(/\s*<meta (?:property|name)="(?:og:(?:type|site_name|title|description|url)|twitter:(?:title|description|card))"[^>]*>/g, '');
  head = head.replace(/\s*<link rel="preload" as="image"[^>]*>/g, '');
  if (!head.includes('name="color-scheme"')) head += '\n<meta name="color-scheme" content="light" />';
  const tags = [
    ['property', 'og:type', 'website'], ['property', 'og:site_name', 'Mind Clarity'],
    ['property', 'og:title', title], ['property', 'og:description', description], ['property', 'og:url', canonical],
    ['name', 'twitter:card', head.includes('og:image') ? 'summary_large_image' : 'summary'],
    ['name', 'twitter:title', title], ['name', 'twitter:description', description]
  ];
  const graph = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', '@id': 'https://mindclarity.co.in/#website', name: 'Mind Clarity', url: 'https://mindclarity.co.in/', inLanguage: 'en' },
      { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: decode(title), description: decode(description), inLanguage: 'en', isPartOf: { '@id': 'https://mindclarity.co.in/#website' } }
    ]
  };
  const faq = canonical.endsWith('/faq') ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: questions.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }))
  } : null;
  const schemas = [`<script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>`];
  if (faq) schemas.push(`<script type="application/ld+json">${JSON.stringify(faq).replaceAll('<', '\\u003c')}</script>`);
  return head + '\n' + tags.map(([attribute, key, value]) => `<meta ${attribute}="${key}" content="${value}" />`).join('\n') + '\n' + schemas.join('\n') + '\n';
}
