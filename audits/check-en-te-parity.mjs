import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');

const pairs = [
  { slug: 'index', enPath: 'index.html', tePath: 'te.html' },
  { slug: 'ashtavakra-gita', enPath: 'ashtavakra-gita.html', tePath: 'te/ashtavakra-gita.html' },
  { slug: 'understanding-god', enPath: 'understanding-god.html', tePath: 'te/understanding-god.html' },
  { slug: 'philosophy', enPath: 'philosophy.html', tePath: 'te/philosophy.html' },
  { slug: 'practice', enPath: 'practice.html', tePath: 'te/practice.html' },
  { slug: 'faq', enPath: 'faq.html', tePath: 'te/faq.html' },
  { slug: 'reflections', enPath: 'reflections.html', tePath: 'te/reflections.html' },
  { slug: 'privacy', enPath: 'privacy.html', tePath: 'te/privacy.html' },
  { slug: 'life-problems-and-self-enquiry', enPath: 'life-problems-and-self-enquiry.html', tePath: 'te/life-problems-and-self-enquiry.html' },
  { slug: 'confidence-self-worth-and-self-enquiry', enPath: 'confidence-self-worth-and-self-enquiry.html', tePath: 'te/confidence-self-worth-and-self-enquiry.html' },
  { slug: 'overthinking-worry-and-uncertainty', enPath: 'overthinking-worry-and-uncertainty.html', tePath: 'te/overthinking-worry-and-uncertainty.html' },
  { slug: 'who-am-i-self-enquiry', enPath: 'who-am-i-self-enquiry.html', tePath: 'te/who-am-i-self-enquiry.html' },
  { slug: 'surrender-free-will-and-design', enPath: 'surrender-free-will-and-design.html', tePath: 'te/surrender-free-will-and-design.html' },
  { slug: 'meditation-and-self-realization', enPath: 'meditation-and-self-realization.html', tePath: 'te/meditation-and-self-realization.html' },
  { slug: 'guilt-responsibility-and-boundaries', enPath: 'guilt-responsibility-and-boundaries.html', tePath: 'te/guilt-responsibility-and-boundaries.html' },
  { slug: 'ai-fear-and-clarity', enPath: 'ai-fear-and-clarity.html', tePath: 'ai-fear-and-clarity-telugu.html' },
];

console.log('Comparing English and Telugu Page Pairs:');

const results = [];

for (const pair of pairs) {
  const enFile = path.join(dist, pair.enPath);
  const teFile = path.join(dist, pair.tePath);

  if (!existsSync(enFile)) {
    console.error(`Missing EN file: ${enFile}`);
    continue;
  }
  if (!existsSync(teFile)) {
    console.error(`Missing TE file: ${teFile}`);
    continue;
  }

  const enHtml = readFileSync(enFile, 'utf8');
  const teHtml = readFileSync(teFile, 'utf8');

  const enH1 = enHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim();
  const teH1 = teHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim();

  const enTitle = enHtml.match(/<title>([^<]+)<\/title>/)?.[1];
  const teTitle = teHtml.match(/<title>([^<]+)<\/title>/)?.[1];

  const enIds = [...enHtml.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  const teIds = [...teHtml.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);

  const enSections = [...enHtml.matchAll(/<section\b[^>]*>/g)].length;
  const teSections = [...teHtml.matchAll(/<section\b[^>]*>/g)].length;

  const enDetails = [...enHtml.matchAll(/<details\b[^>]*>/g)].length;
  const teDetails = [...teHtml.matchAll(/<details\b[^>]*>/g)].length;

  const enCanonical = enHtml.match(/rel="canonical" href="([^"]*)"/)?.[1];
  const teCanonical = teHtml.match(/rel="canonical" href="([^"]*)"/)?.[1];

  // Video check
  const enVideo = enHtml.match(/href="https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^"]*)"/)?.[1];
  const teVideo = teHtml.match(/href="https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^"]*)"/)?.[1];

  // Id difference
  const missingInTe = enIds.filter(id => !teIds.includes(id));
  const missingInEn = teIds.filter(id => !enIds.includes(id));

  results.push({
    slug: pair.slug,
    enCanonical,
    teCanonical,
    enTitle,
    teTitle,
    enH1,
    teH1,
    enSections,
    teSections,
    enDetails,
    teDetails,
    missingInTe,
    missingInEn,
    enVideo,
    teVideo
  });
}

for (const r of results) {
  console.log(`\n=== [${r.slug}] ===`);
  console.log(`EN Title: ${r.enTitle}`);
  console.log(`TE Title: ${r.teTitle}`);
  console.log(`EN H1: ${r.enH1}`);
  console.log(`TE H1: ${r.teH1}`);
  console.log(`Sections (EN/TE): ${r.enSections} / ${r.teSections}`);
  console.log(`Details (EN/TE): ${r.enDetails} / ${r.teDetails}`);
  if (r.enVideo || r.teVideo) {
    console.log(`YouTube Video EN: ${r.enVideo || 'none'} | TE: ${r.teVideo || 'none'}`);
  }
  if (r.missingInTe.length > 0) {
    console.log(`IDs in EN but missing in TE: ${r.missingInTe.join(', ')}`);
  }
  if (r.missingInEn.length > 0) {
    console.log(`IDs in TE but missing in EN: ${r.missingInEn.join(', ')}`);
  }
}
