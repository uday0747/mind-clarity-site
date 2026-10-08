import { questions, enquiryGroups } from '../questions.js';
import { enquiryTopics } from '../enquiry-topics.js';

// Titles, descriptions and canonicals in each source HTML remain the source of truth.
export function completeMetadata(head) {
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = head.match(/name="description" content="([^"]+)"/)?.[1];
  const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!title || !description || !canonical) throw new Error('Missing page metadata');
  const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
  const reflection = /\/ai-fear-and-clarity(?:-telugu)?$/.test(canonical);
  const language = canonical.endsWith('-telugu') ? 'te' : 'en';
  if (reflection) {
    // Keep the reviewed English/Telugu pair reciprocal and give crawlers a
    // neutral fallback without relying on client-side language detection.
    head = head.replace(/\s*<link rel="alternate" hreflang="(?:en|te|x-default)"[^>]*>/g, '');
    head += `\n<link rel="alternate" hreflang="en" href="https://mindclarity.co.in/ai-fear-and-clarity" />`;
    head += `\n<link rel="alternate" hreflang="te" href="https://mindclarity.co.in/ai-fear-and-clarity-telugu" />`;
    head += `\n<link rel="alternate" hreflang="x-default" href="https://mindclarity.co.in/ai-fear-and-clarity" />`;
  }
  // Retain existing social images; regenerate only text fields from the page metadata.
  head = head.replace(/\s*<meta (?:property|name)="(?:og:(?:type|site_name|title|description|url)|twitter:(?:title|description|card))"[^>]*>/g, '');
  head = head.replace(/\s*<link rel="preload" as="image"[^>]*>/g, '');
  if (!head.includes('name="color-scheme"')) head += '\n<meta name="color-scheme" content="light" />';
  const tags = [
    ['property', 'og:type', reflection ? 'article' : 'website'], ['property', 'og:site_name', 'Mind Clarity'],
    ['property', 'og:title', title], ['property', 'og:description', description], ['property', 'og:url', canonical],
    ['name', 'twitter:card', head.includes('og:image') ? 'summary_large_image' : 'summary'],
    ['name', 'twitter:title', title], ['name', 'twitter:description', description]
  ];
  const graph = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', '@id': 'https://mindclarity.co.in/#website', name: 'Mind Clarity', url: 'https://mindclarity.co.in/', inLanguage: 'en' },
      { '@type': canonical.endsWith('/reflections') ? 'CollectionPage' : 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: decode(title), description: decode(description), inLanguage: language, isPartOf: { '@id': 'https://mindclarity.co.in/#website' } }
    ]
  };
  const topic = enquiryTopics.find(topic => canonical.endsWith('/' + topic.slug));
  const author = { '@type': 'Person', '@id': 'https://mindclarity.co.in/#uday-kumar', name: 'Uday Kumar' };
  graph['@graph'][1].author = author;
  if (reflection) {
    graph['@graph'][1].mainEntity = { '@id': `${canonical}#article` };
    graph['@graph'].push({ '@type': 'BlogPosting', '@id': `${canonical}#article`,
      headline: decode(title).replace(/ \| Mind Clarity$/, ''), description: decode(description),
      author, publisher: { '@id': 'https://mindclarity.co.in/#website' },
      datePublished: '2026-10-03', dateModified: '2026-10-03',
      image: 'https://mindclarity.co.in/assets-brand-desktop.png',
      mainEntityOfPage: { '@id': `${canonical}#webpage` }, inLanguage: language });
    tags.push(['property', 'article:published_time', '2026-10-03'],
      ['property', 'article:modified_time', '2026-10-03']);
    graph['@graph'].push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Mind Clarity', item: 'https://mindclarity.co.in/' },
      { '@type': 'ListItem', position: 2, name: 'Reflections', item: 'https://mindclarity.co.in/reflections' },
      { '@type': 'ListItem', position: 3, name: decode(title).replace(/ \| Mind Clarity$/, ''), item: canonical }
    ] });
  }
  if (canonical.endsWith('/reflections')) {
    graph['@graph'][1].mainEntity = { '@type': 'ItemList', itemListElement: [
      { '@type': 'ListItem', position: 1, url: 'https://mindclarity.co.in/ai-fear-and-clarity', name: 'Artificial Intelligence, Fear and Clarity' },
      { '@type': 'ListItem', position: 2, url: 'https://mindclarity.co.in/ai-fear-and-clarity-telugu', name: 'కృత్రిమ మేధస్సు, భయం, స్పష్టమైన అవగాహన' }
    ] };
  }
  if (topic) {
    graph['@graph'].push({ '@type': 'Article', '@id': `${canonical}#article`, headline: topic.title,
      description: topic.description, author, datePublished: '2026-10-01', dateModified: '2026-10-01',
      mainEntityOfPage: { '@id': `${canonical}#webpage` }, inLanguage: 'en' });
    graph['@graph'].push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Mind Clarity', item: 'https://mindclarity.co.in/' },
      { '@type': 'ListItem', position: 2, name: 'Questions and answers', item: 'https://mindclarity.co.in/faq' },
      { '@type': 'ListItem', position: 3, name: topic.title, item: canonical }
    ] });
  }
  const faq = canonical.endsWith('/faq') ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    // Semantic description of visible answers, not a promise of Google FAQ rich results.
    mainEntity: [...questions, ...enquiryGroups.flatMap(group => group.entries)].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }))
  } : null;
  const schemas = [`<script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>`];
  if (faq) schemas.push(`<script type="application/ld+json">${JSON.stringify(faq).replaceAll('<', '\\u003c')}</script>`);
  return head + '\n' + tags.map(([attribute, key, value]) => `<meta ${attribute}="${key}" content="${value}" />`).join('\n') + '\n' + schemas.join('\n') + '\n';
}
