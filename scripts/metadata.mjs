import { questions, enquiryGroups } from '../questions.js';
import { enquiryTopics } from '../enquiry-topics.js';
import { localizedPageSlugs, pageLanguage } from '../language-options.js';

// Titles, descriptions and canonicals in each source HTML remain the source of truth.
export function completeMetadata(head) {
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = head.match(/name="description" content="([^"]+)"/)?.[1];
  const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!title || !description || !canonical) throw new Error('Missing page metadata');
  const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
  const reflection = /\/ai-fear-and-clarity(?:-telugu)?$/.test(canonical);
  const canonicalPath = new URL(canonical).pathname.replace(/\/$/, '') || '/';
  const language = pageLanguage(canonicalPath);
  const localizedHome = ['/', '/hi', '/es', '/fr', '/te'].includes(canonicalPath);
  const localizedRoute = canonicalPath.match(/^\/(hi|es|fr|te)\/([^/]+)$/);
  const localizedPage = reflection ? null : localizedRoute?.[2] || (!localizedRoute && localizedPageSlugs.has(canonicalPath.slice(1)) ? canonicalPath.slice(1) : null);
  if (reflection) {
    // Keep the English/Telugu pair and add the new translated article routes.
    head = head.replace(/\s*<link rel="alternate" hreflang="(?:en|te|hi|es|fr|x-default)"[^>]*>/g, '');
    const articleAlternates = [
      ['en', 'https://mindclarity.co.in/ai-fear-and-clarity'],
      ['te', 'https://mindclarity.co.in/ai-fear-and-clarity-telugu'],
      ['hi', 'https://mindclarity.co.in/hi/ai-fear-and-clarity'],
      ['es', 'https://mindclarity.co.in/es/ai-fear-and-clarity'],
      ['fr', 'https://mindclarity.co.in/fr/ai-fear-and-clarity'],
      ['x-default', 'https://mindclarity.co.in/ai-fear-and-clarity'],
    ];
    head += '\n' + articleAlternates.map(([code, url]) => `<link rel="alternate" hreflang="${code}" href="${url}" />`).join('\n');
  }
  if (localizedHome) {
    head = head.replace(/\s*<link rel="alternate" hreflang="(?:en|hi|es|fr|te|x-default)"[^>]*>/g, '');
    const homeAlternates = [
      ['en', 'https://mindclarity.co.in/'],
      ['hi', 'https://mindclarity.co.in/hi'],
      ['es', 'https://mindclarity.co.in/es'],
      ['fr', 'https://mindclarity.co.in/fr'],
      ['te', 'https://mindclarity.co.in/te'],
      ['x-default', 'https://mindclarity.co.in/'],
    ];
    head += '\n' + homeAlternates.map(([code, url]) => `<link rel="alternate" hreflang="${code}" href="${url}" />`).join('\n');
  }
  if (localizedPage && localizedPageSlugs.has(localizedPage)) {
    head = head.replace(/\s*<link rel="alternate" hreflang="(?:en|hi|es|fr|te|x-default)"[^>]*>/g, '');
    const pageAlternates = [
      ['en', `https://mindclarity.co.in/${localizedPage}`],
      ['hi', `https://mindclarity.co.in/hi/${localizedPage}`],
      ['es', `https://mindclarity.co.in/es/${localizedPage}`],
      ['fr', `https://mindclarity.co.in/fr/${localizedPage}`],
      ...(localizedPage === 'faq' ? [['te', `https://mindclarity.co.in/te/${localizedPage}`]] : []),
      ['x-default', `https://mindclarity.co.in/${localizedPage}`],
    ];
    head += '\n' + pageAlternates.map(([code, url]) => `<link rel="alternate" hreflang="${code}" href="${url}" />`).join('\n');
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
      { '@type': canonicalPath === '/reflections' ? 'CollectionPage' : 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: decode(title), description: decode(description), inLanguage: language, isPartOf: { '@id': 'https://mindclarity.co.in/#website' } }
    ]
  };
  const topic = enquiryTopics.find(topic => canonicalPath === '/' + topic.slug);
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
  if (canonicalPath === '/reflections') {
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
  const faq = canonicalPath === '/faq' ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    // Semantic description of visible answers, not a promise of Google FAQ rich results.
    mainEntity: [...questions, ...enquiryGroups.flatMap(group => group.entries)].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }))
  } : null;
  const schemas = [`<script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>`];
  if (faq) schemas.push(`<script type="application/ld+json">${JSON.stringify(faq).replaceAll('<', '\\u003c')}</script>`);
  return head + '\n' + tags.map(([attribute, key, value]) => `<meta ${attribute}="${key}" content="${value}" />`).join('\n') + '\n' + schemas.join('\n') + '\n';
}
