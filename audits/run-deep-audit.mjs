import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const origin = 'https://mindclarity.co.in';

console.log('--- Starting Comprehensive Deep Audit ---');

// 1. Collect all HTML files
function getFiles(dir, base = '') {
  let results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'server') {
        results.push(...getFiles(path.join(dir, entry.name), rel));
      }
    } else if (entry.name.endsWith('.html')) {
      results.push(rel);
    }
  }
  return results;
}

const htmlFiles = getFiles(dist);
console.log(`Found ${htmlFiles.length} HTML pages in dist/`);

// Collect all existing files in dist
function getAllAssets(dir, base = '') {
  let assets = new Set();
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      for (const child of getAllAssets(path.join(dir, entry.name), rel)) {
        assets.add(child);
      }
    } else {
      assets.add('/' + rel);
    }
  }
  return assets;
}
const allDistAssets = getAllAssets(dist);
console.log(`Total public asset paths in dist/: ${allDistAssets.size}`);

// Read sitemap
const sitemapContent = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`Total URLs in sitemap.xml: ${sitemapUrls.length}`);

// Read robots.txt
const robotsContent = readFileSync(path.join(dist, 'robots.txt'), 'utf8');
console.log(`robots.txt contents:\n${robotsContent.trim()}`);

// Read _redirects
const redirectsContent = readFileSync(path.join(dist, '_redirects'), 'utf8');
const redirectRules = redirectsContent.trim().split('\n').map(line => line.trim().split(/\s+/));
const redirectMap = new Map(redirectRules.map(([from, to]) => [from, to]));
console.log(`Total redirect rules in _redirects: ${redirectRules.length}`);

// Map of page path -> Set of element IDs in that page
const pageIds = new Map();
const pageData = new Map();

for (const rel of htmlFiles) {
  const content = readFileSync(path.join(dist, rel), 'utf8');
  const pathname = '/' + (rel === 'index.html' ? '' : rel.replace(/\.html$/, ''));
  const ids = new Set([...content.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  pageIds.set(pathname, ids);
  // Also index under the filename path
  pageIds.set('/' + rel, ids);
  pageData.set(pathname, { rel, content, ids });
}

// Audit Results storage
const findings = {
  brokenInternalLinks: [],
  brokenFragmentLinks: [],
  missingAssets: [],
  emptyOrMissingAlt: [],
  headingHierarchyIssues: [],
  seoIssues: [],
  untranslatedPlaceholders: [],
  contentAnomalies: [],
  englishTeluguComparison: [],
};

// Check every page
for (const [pathname, { rel, content, ids }] of pageData.entries()) {
  const isEnglish = !pathname.match(/^\/(hi|es|fr|te|pt|id|ar|ta|kn|ml|bn|mr|gu|pa|or|as|ur|de|it|ru|ja|ko|zh-Hans|zh-Hant|tr|vi|pl|nl|sv|da|nb|ro|cs)(\/|$)/) && pathname !== '/ai-fear-and-clarity-telugu';
  const isTelugu = pathname.startsWith('/te') || pathname === '/ai-fear-and-clarity-telugu';

  // Check Headings
  const h1Matches = [...content.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length !== 1) {
    findings.headingHierarchyIssues.push({ page: pathname, issue: `Expected exactly 1 h1, found ${h1Matches.length}` });
  } else if (!h1Matches[0][1].trim()) {
    findings.headingHierarchyIssues.push({ page: pathname, issue: `h1 is empty` });
  }

  // Check empty headings
  const emptyHeadings = [...content.matchAll(/<(h[1-6])\b[^>]*>\s*<\/\1>/gi)];
  if (emptyHeadings.length > 0) {
    findings.headingHierarchyIssues.push({ page: pathname, issue: `Found empty headings: ${emptyHeadings.map(m => m[1]).join(', ')}` });
  }

  // Check SEO metadata
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch || !titleMatch[1].trim()) {
    findings.seoIssues.push({ page: pathname, issue: 'Missing or empty <title>' });
  }
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descMatch || !descMatch[1].trim()) {
    findings.seoIssues.push({ page: pathname, issue: 'Missing or empty meta description' });
  }
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  if (!canonicalMatch) {
    findings.seoIssues.push({ page: pathname, issue: 'Missing canonical link' });
  } else {
    const expectedCanonical = `${origin}${pathname === '/' ? '' : pathname}`;
    if (canonicalMatch[1] !== expectedCanonical) {
      findings.seoIssues.push({ page: pathname, issue: `Canonical mismatch: found ${canonicalMatch[1]}, expected ${expectedCanonical}` });
    }
  }

  // Check og metadata
  const ogTitle = content.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
  const ogDesc = content.match(/<meta\s+property="og:description"\s+content="([^"]*)"/i);
  const ogUrl = content.match(/<meta\s+property="og:url"\s+content="([^"]*)"/i);
  const ogImage = content.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i);
  if (!ogTitle) findings.seoIssues.push({ page: pathname, issue: 'Missing og:title' });
  if (!ogDesc) findings.seoIssues.push({ page: pathname, issue: 'Missing og:description' });
  if (!ogUrl) findings.seoIssues.push({ page: pathname, issue: 'Missing og:url' });
  if (!ogImage) findings.seoIssues.push({ page: pathname, issue: 'Missing og:image' });

  // Check structured data
  const ldJsonMatches = [...content.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (ldJsonMatches.length === 0) {
    findings.seoIssues.push({ page: pathname, issue: 'Missing JSON-LD structured data' });
  } else {
    for (const match of ldJsonMatches) {
      try {
        JSON.parse(match[1]);
      } catch (err) {
        findings.seoIssues.push({ page: pathname, issue: `Invalid JSON-LD syntax: ${err.message}` });
      }
    }
  }

  // Check images
  const imgMatches = [...content.matchAll(/<img\b([^>]*)>/gi)];
  for (const [tag, attrs] of imgMatches) {
    const srcMatch = attrs.match(/src="([^"]*)"/i);
    const altMatch = attrs.match(/alt="([^"]*)"/i);
    if (!altMatch) {
      findings.emptyOrMissingAlt.push({ page: pathname, img: tag, issue: 'Missing alt attribute' });
    } else if (altMatch[1].trim() === '') {
      findings.emptyOrMissingAlt.push({ page: pathname, img: tag, issue: 'Empty alt attribute' });
    }
    if (srcMatch) {
      const src = srcMatch[1];
      if (src.startsWith('/')) {
        const cleanSrc = src.split('?')[0];
        if (!allDistAssets.has(cleanSrc)) {
          findings.missingAssets.push({ page: pathname, asset: src, issue: 'Image file does not exist in dist/' });
        }
      }
    }
  }

  // Check sources in picture
  const sourceMatches = [...content.matchAll(/<source\b([^>]*)>/gi)];
  for (const [, attrs] of sourceMatches) {
    const srcsetMatch = attrs.match(/srcset="([^"]*)"/i);
    if (srcsetMatch) {
      const entries = srcsetMatch[1].split(',').map(s => s.trim().split(/\s+/)[0]);
      for (const entry of entries) {
        if (entry.startsWith('/')) {
          const cleanEntry = entry.split('?')[0];
          if (!allDistAssets.has(cleanEntry)) {
            findings.missingAssets.push({ page: pathname, asset: entry, issue: 'Picture source file does not exist in dist/' });
          }
        }
      }
    }
  }

  // Check links (href)
  const linkMatches = [...content.matchAll(/<a\b([^>]*)href="([^"]*)"([^>]*)>/gi)];
  for (const [, before, rawHref, after] of linkMatches) {
    const href = rawHref.trim();
    if (href.startsWith('#')) {
      // Local fragment link
      const anchor = href.slice(1);
      if (!ids.has(anchor)) {
        findings.brokenFragmentLinks.push({ page: pathname, href, issue: `Target anchor #${anchor} not found on same page` });
      }
    } else if (href.startsWith('/')) {
      const [targetPath, fragment] = href.split('#');
      const cleanPath = targetPath.split('?')[0];
      const normalizedTarget = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
      
      // Check if target page exists in pageIds or allDistAssets or redirectMap
      const existsAsPage = pageIds.has(normalizedTarget) || pageIds.has(normalizedTarget + '.html');
      const existsAsAsset = allDistAssets.has(cleanPath);
      const existsAsRedirect = redirectMap.has(cleanPath);

      if (!existsAsPage && !existsAsAsset && !existsAsRedirect) {
        findings.brokenInternalLinks.push({ page: pathname, href, issue: `Internal target ${cleanPath} does not exist in dist/ or redirects` });
      } else if (fragment && existsAsPage) {
        const targetIds = pageIds.get(normalizedTarget) || pageIds.get(normalizedTarget + '.html');
        if (targetIds && !targetIds.has(fragment)) {
          findings.brokenFragmentLinks.push({ page: pathname, href, issue: `Anchor #${fragment} not found on target page ${normalizedTarget}` });
        }
      }
    }
  }

  // Check language selector options
  const optionMatches = [...content.matchAll(/<option\b[^>]*value="([^"]*)"[^>]*data-href="([^"]*)"/gi)];
  for (const [, code, dataHref] of optionMatches) {
    const [targetPath, fragment] = dataHref.split('#');
    const cleanPath = targetPath.split('?')[0];
    const normalizedTarget = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
    const exists = pageIds.has(normalizedTarget) || pageIds.has(normalizedTarget + '.html');
    if (!exists) {
      findings.brokenInternalLinks.push({ page: pathname, href: dataHref, issue: `Language option [${code}] target ${dataHref} does not exist` });
    }
  }

  // Check untranslated placeholders
  const placeholderPatterns = [
    /__LANGUAGE__/,
    /ZX[A-Z0-9_]{2,20}ZX/,
    /\{count\}/,
    /undefined/,
    /NaN/,
    /\[object Object\]/,
  ];
  for (const pattern of placeholderPatterns) {
    if (pattern.test(content)) {
      // Ignore valid script code if any
      const match = content.match(pattern)[0];
      // Check if it's in user-visible HTML (not inside script)
      const outsideScript = content.replace(/<script\b[\s\S]*?<\/script>/gi, '');
      if (pattern.test(outsideScript)) {
        findings.untranslatedPlaceholders.push({ page: pathname, pattern: pattern.toString(), match });
      }
    }
  }
}

console.log('\n--- Link and Asset Validation Summary ---');
console.log(`Broken Internal Links: ${findings.brokenInternalLinks.length}`);
console.log(`Broken Fragment Links: ${findings.brokenFragmentLinks.length}`);
console.log(`Missing Assets: ${findings.missingAssets.length}`);
console.log(`Missing or Empty Alt text: ${findings.emptyOrMissingAlt.length}`);
console.log(`Heading Hierarchy Issues: ${findings.headingHierarchyIssues.length}`);
console.log(`SEO Issues: ${findings.seoIssues.length}`);
console.log(`Untranslated Placeholders: ${findings.untranslatedPlaceholders.length}`);

if (findings.brokenInternalLinks.length > 0) {
  console.log('Sample Broken Links:', findings.brokenInternalLinks.slice(0, 10));
}
if (findings.brokenFragmentLinks.length > 0) {
  console.log('Sample Broken Fragments:', findings.brokenFragmentLinks.slice(0, 10));
}
if (findings.missingAssets.length > 0) {
  console.log('Sample Missing Assets:', findings.missingAssets.slice(0, 10));
}
if (findings.headingHierarchyIssues.length > 0) {
  console.log('Sample Heading Issues:', findings.headingHierarchyIssues.slice(0, 10));
}
if (findings.seoIssues.length > 0) {
  console.log('Sample SEO Issues:', findings.seoIssues.slice(0, 10));
}
if (findings.untranslatedPlaceholders.length > 0) {
  console.log('Sample Placeholders:', findings.untranslatedPlaceholders.slice(0, 10));
}
