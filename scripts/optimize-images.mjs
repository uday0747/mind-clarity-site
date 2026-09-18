// Optional asset maintenance: pass a local Sharp package directory if it is not installed.
// Generated assets are committed; normal builds require no image-processing dependency.
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const require = createRequire(import.meta.url);
const sharp = require(process.argv[2] || 'sharp');
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'assets');
await mkdir(output, { recursive: true });
for (const [source, name, widths] of [
  ['assets-brand.png', 'pond-mobile', [480, 960]],
  ['assets-brand-desktop.png', 'pond-desktop', [640, 960]]
]) {
  for (const width of widths) {
    await sharp(path.join(root, source)).resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 }).toFile(path.join(output, `${name}-${width}.webp`));
  }
}
await sharp(path.join(root, 'assets-brand-desktop.png')).resize({ width: 960 })
  .jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(output, 'pond-fallback.jpg'));
for (const [source, name, width] of [
  ['mind-clarity-mark.png', 'favicon-32', 32],
  ['mind-clarity-mark-desktop.png', 'mark-68', 68],
  ['mind-clarity-mark-desktop.png', 'apple-touch-icon', 180]
]) {
  await sharp(path.join(root, source)).resize(width, width)
    .png({ compressionLevel: 9, palette: true }).toFile(path.join(output, `${name}.png`));
}
console.log('Optimized responsive artwork, logo and icons. Original images preserved.');
