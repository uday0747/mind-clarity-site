import { execSync } from 'node:child_process';

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
// Run chrome with remote debugging or evaluate script
const cmd = `"${chrome}" --headless --window-size=375,812 --dump-dom http://127.0.0.1:4173/`;
const output = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });

const headerMatch = output.match(/<header\b[^>]*>[\s\S]*?<\/header>/i);
console.log('Header from dump-dom:\n', headerMatch ? headerMatch[0] : 'No header found');

const isEnhanced = output.includes('is-enhanced');
console.log('\nDoes header contain "is-enhanced"?:', isEnhanced);

// Also check CSP and site.js
const hasSiteJs = output.includes('src="/site.js');
console.log('Does HTML contain site.js?:', hasSiteJs);
