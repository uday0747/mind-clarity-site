function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const colorPairs = [
  { fg: '#26332e', bg: '#faf8f2', role: 'Body text (--ink on --cream)' },
  { fg: '#183d36', bg: '#faf8f2', role: 'Headings (--deep on --cream)' },
  { fg: '#24574d', bg: '#faf8f2', role: 'Links (--green on --cream)' },
  { fg: '#795b2b', bg: '#faf8f2', role: 'Eyebrow text (--gold on --cream)' },
  { fg: '#53645b', bg: '#faf8f2', role: 'Muted text (--muted on --cream)' },
  { fg: '#53645b', bg: '#edf2ec', role: 'Muted text (--muted on --soft)' },
  { fg: '#53645b', bg: '#ffffff', role: 'Muted text (--muted on white)' },
  { fg: '#ffffff', bg: '#24574d', role: 'Primary button text (white on --green)' },
  { fg: '#24574d', bg: '#ffffff', role: 'Secondary button text (--green on white)' },
  { fg: '#24574d', bg: '#edf2ec', role: 'Secondary button text (--green on --soft)' },
  { fg: '#74633d', bg: '#f1f4ec', role: 'Discovery number (#74633d on #f1f4ec)' },
  { fg: '#795b2b', bg: '#edf2ec', role: 'Topic index / lesson number (--gold on --soft)' },
  { fg: '#183d36', bg: '#edf2ec', role: 'Heading / text (--deep on --soft)' },
  { fg: '#26332e', bg: '#edf2ec', role: 'Body text (--ink on --soft)' },
  { fg: '#26332e', bg: '#f6f0e4', role: 'Yuga text on #f6f0e4' },
  { fg: '#a88c4f', bg: '#f6f0e4', role: 'Yuga border/accent (#a88c4f on #f6f0e4)' },
  { fg: '#78978c', bg: '#ffffff', role: 'Input border (#78978c on white)' },
  { fg: '#78978c', bg: '#faf8f2', role: 'Input border (#78978c on --cream)' },
  { fg: '#d9e4dc', bg: '#faf8f2', role: 'Divider line (--line on --cream)' },
  { fg: '#527767', bg: '#f1f4ec', role: 'Roles illustration SVG (#527767 on #f1f4ec)' },
];

console.log('=== Color Contrast Analysis (WCAG 2.1) ===\n');
for (const p of colorPairs) {
  const ratio = contrastRatio(p.fg, p.bg);
  const aaNormal = ratio >= 4.5 ? 'PASS' : 'FAIL';
  const aaLarge = ratio >= 3.0 ? 'PASS' : 'FAIL';
  const aaaNormal = ratio >= 7.0 ? 'PASS' : 'FAIL';
  const aaaLarge = ratio >= 4.5 ? 'PASS' : 'FAIL';

  console.log(`${p.role}:`);
  console.log(`  Foreground: ${p.fg}, Background: ${p.bg}`);
  console.log(`  Contrast Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`  WCAG AA Normal (<18pt): ${aaNormal} | Large: ${aaLarge}`);
  console.log(`  WCAG AAA Normal: ${aaaNormal} | Large: ${aaaLarge}\n`);
}
