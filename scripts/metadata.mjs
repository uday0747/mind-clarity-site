import { questions, enquiryGroups } from '../questions.js';
import { enquiryTopics } from '../enquiry-topics.js';
import { localizedPageSlugs, pageLanguage, languageVariants } from '../language-options.js';
import problems from '../problem-content.json' with { type: 'json' };
import { translateText } from '../translations.js';
import { readFileSync } from 'node:fs';

// Reviewed content/link update dates, shared with the canonical sitemap.
const pageUpdates = new Map([...readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8')
  .matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(match => [match[1], match[2]]));

// Titles, descriptions and canonicals in each source HTML remain the source of truth.
export function completeMetadata(head) {
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = head.match(/name="description" content="([^"]+)"/)?.[1];
  const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!title || !description || !canonical) throw new Error('Missing page metadata');
  const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
  const isFeel = /\/why-we-entered-to-feel$/.test(canonical);
  const isAIFear = /\/ai-fear-and-clarity(?:-telugu)?$/.test(canonical);
  const reflection = isFeel || isAIFear;
  const canonicalPath = new URL(canonical).pathname.replace(/\/$/, '') || '/';
  const language = pageLanguage(canonicalPath);
  const localizedRoute = canonicalPath.match(/^\/(hi|es|fr|te|pt|id|ar|ta|kn|ml|bn|mr|gu|pa|or|as|ur|de|it|ru|ja|ko|zh-Hans|zh-Hant|tr|vi|pl|nl|sv|da|nb|ro|cs)\/([^/]+)$/);
  const localizedPage = reflection ? null : localizedRoute?.[2] || (!localizedRoute && localizedPageSlugs.has(canonicalPath.slice(1)) ? canonicalPath.slice(1) : null);
  const alternates = languageVariants(canonicalPath);
  if (Object.keys(alternates).length > 1) {
    head = head.replace(/\s*<link rel="alternate" hreflang="[^"]*"[^>]*>/g, '');
    const pairs = [...Object.entries(alternates), ['x-default', alternates.en]];
    head += '\n' + pairs.map(([code, path]) => `<link rel="alternate" hreflang="${code}" href="https://mindclarity.co.in${path}" />`).join('\n');
  }
  // One compressed image and one set of dimensions for every sharing surface.
  head = head.replace(/\s*<meta (?:property|name)="(?:og:image(?::(?:width|height|type|alt))?|twitter:image(?::alt)?)"[^>]*>/g, '');
  head = head.replace(/\s*<meta (?:property|name)="(?:og:(?:type|site_name|title|description|url)|twitter:(?:title|description|card))"[^>]*>/g, '');
  head = head.replace(/\s*<link rel="preload" as="image"[^>]*>/g, '');
  if (!head.includes('name="color-scheme"')) head += '\n<meta name="color-scheme" content="light" />';
  const tags = [
    ['property', 'og:type', reflection ? 'article' : 'website'], ['property', 'og:site_name', 'Mind Clarity'],
    ['property', 'og:title', title], ['property', 'og:description', description], ['property', 'og:url', canonical],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', title], ['name', 'twitter:description', description],
    ['property', 'og:image', 'https://mindclarity.co.in/assets/social-preview.jpg'],
    ['property', 'og:image:width', '1200'], ['property', 'og:image:height', '800'],
    ['property', 'og:image:type', 'image/jpeg'], ['property', 'og:image:alt', 'Mind Clarity'],
    ['name', 'twitter:image', 'https://mindclarity.co.in/assets/social-preview.jpg'],
    ['name', 'twitter:image:alt', 'Mind Clarity']
  ];
  const graph = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', '@id': 'https://mindclarity.co.in/#website', name: 'Mind Clarity', url: 'https://mindclarity.co.in/', inLanguage: Object.keys(languageVariants('/')), publisher: { '@id':'https://mindclarity.co.in/#uday-kumar' } },
      { '@type': (canonicalPath === '/reflections' || localizedPage === 'reflections') || canonicalPath.endsWith('/life-problems-and-self-enquiry') ? 'CollectionPage' : 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: decode(title), description: decode(description), inLanguage: language, isPartOf: { '@id': 'https://mindclarity.co.in/#website' } }
    ]
  };
  const topic = enquiryTopics.find(topic => canonicalPath === '/' + topic.slug || localizedPage === topic.slug);
  const author = { '@type': 'Person', '@id': 'https://mindclarity.co.in/#uday-kumar', name: 'Uday Kumar', url:'https://mindclarity.co.in/#author-title' };
  graph['@graph'][1].author = author;
  graph['@graph'][1].dateModified = pageUpdates.get(canonical);
  graph['@graph'][1].primaryImageOfPage = { '@type':'ImageObject', url:'https://mindclarity.co.in/assets/social-preview.jpg', width:1200, height:800 };
  if (reflection) {
    const home = languageVariants('/')[language];
    const index = languageVariants('/reflections')[language];
    graph['@graph'][1].mainEntity = { '@id': `${canonical}#article` };
    graph['@graph'].push({ '@type': 'BlogPosting', '@id': `${canonical}#article`,
      headline: decode(title).replace(/ \| Mind Clarity$/, ''), description: decode(description),
      author, publisher: { '@id': 'https://mindclarity.co.in/#website' },
      datePublished: isFeel ? '2026-10-31' : '2026-10-03', dateModified: isFeel ? '2026-10-31' : '2026-10-11',
      image: 'https://mindclarity.co.in/assets/social-preview.jpg',
      mainEntityOfPage: { '@id': `${canonical}#webpage` }, inLanguage: language });
    tags.push(['property', 'article:published_time', isFeel ? '2026-10-31' : '2026-10-03'],
      ['property', 'article:modified_time', isFeel ? '2026-10-31' : '2026-10-11']);
    graph['@graph'].push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Mind Clarity', item: `https://mindclarity.co.in${home}` },
      { '@type': 'ListItem', position: 2, name: translateText('Reflections', language), item: `https://mindclarity.co.in${index}` },
      { '@type': 'ListItem', position: 3, name: decode(title).replace(/ \| Mind Clarity$/, ''), item: canonical }
    ] });
  }
  if (canonicalPath === '/reflections' || localizedPage === 'reflections') {
    const article1 = languageVariants('/why-we-entered-to-feel')[language];
    const article2 = languageVariants('/ai-fear-and-clarity')[language];
    graph['@graph'][1].mainEntity = { '@type': 'ItemList', itemListElement: [
      { '@type': 'ListItem', position: 1, url: `https://mindclarity.co.in${article1}`, name: translateText('From Survival to Satya: Why We Entered to Feel, Technology’s Role, and the Timing of Awakening', language) },
      { '@type': 'ListItem', position: 2, url: `https://mindclarity.co.in${article2}`, name: translateText('Can we meet artificial intelligence with clarity instead of fear?', language) }
    ] };
  }
  if (topic) {
    const prefix = language === 'en' ? '' : `/${language}`;
    graph['@graph'][1].about = topic.slug === 'life-problems-and-self-enquiry'
      ? problems.categories.map(category => ({ '@type':'Thing', name:translateText(category.title, language) }))
      : { '@type':'Thing', name:decode(title).replace(/ \| Mind Clarity$/, '') };
    if (topic.slug === 'life-problems-and-self-enquiry') {
      graph['@graph'][1].mainEntity = { '@type':'ItemList', itemListElement:problems.categories.map((category,index)=>({
        '@type':'ListItem', position:index+1, name:translateText(category.title, language), url:`${canonical}#${category.id}` })) };
    } else {
      graph['@graph'][1].mainEntity = { '@id':`${canonical}#article` };
      graph['@graph'].push({ '@type': 'Article', '@id': `${canonical}#article`, headline:decode(title).replace(/ \| Mind Clarity$/, ''),
        description:decode(description), author, datePublished:topic.published || '2026-10-01', dateModified:topic.modified || '2026-10-11',
        mainEntityOfPage: { '@id': `${canonical}#webpage` }, inLanguage:language });
    }
    graph['@graph'].push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Mind Clarity', item: `https://mindclarity.co.in${prefix || '/'}` },
      { '@type': 'ListItem', position: 2, name:translateText('Questions and answers', language), item: `https://mindclarity.co.in${prefix}/faq` },
      { '@type': 'ListItem', position: 3, name:decode(title).replace(/ \| Mind Clarity$/, ''), item: canonical }
    ] });
  }
  const faq = canonicalPath === '/faq' || localizedPage === 'faq' ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    // Semantic description of visible answers, not a promise of Google FAQ rich results.
    inLanguage: language,
    mainEntity: [...questions, ...enquiryGroups.flatMap(group => group.entries)].map(([name, text]) => ({ '@type': 'Question', name: translateText(name, language), acceptedAnswer: { '@type': 'Answer', text: translateText(text, language) } }))
  } : null;
  // Other reading pages use the same visible home/current-page hierarchy.
  const homePath = languageVariants('/')[language];
  if (canonicalPath !== homePath && !graph['@graph'].some(item => item['@type'] === 'BreadcrumbList')) {
    graph['@graph'].push({ '@type':'BreadcrumbList', itemListElement:[
      { '@type':'ListItem', position:1, name:'Mind Clarity', item:`https://mindclarity.co.in${homePath}` },
      { '@type':'ListItem', position:2, name:decode(title).replace(/ \| Mind Clarity$/, ''), item:canonical }
    ] });
  }
  graph['@graph'].push(author);
  const schemas = [`<script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>`];
  if (faq) schemas.push(`<script type="application/ld+json">${JSON.stringify(faq).replaceAll('<', '\\u003c')}</script>`);
  return head + '\n' + tags.map(([attribute, key, value]) => `<meta ${attribute}="${key}" content="${value}" />`).join('\n') + '\n' + schemas.join('\n') + '\n';
}
