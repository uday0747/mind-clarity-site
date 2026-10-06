import { createServer } from 'node:http';
import { stat } from 'node:fs/promises';

const entry = new URL('../dist/server/index.js', import.meta.url);
const origin = 'http://127.0.0.1:4173';
let loadedAt;
let handler;
async function loadHandler() {
  const { mtimeMs } = await stat(entry);
  if (mtimeMs !== loadedAt) {
    handler = (await import(`${entry.href}?v=${mtimeMs}`)).default;
    loadedAt = mtimeMs;
  }
  return handler;
}
// Fail early with a useful message when no production build exists yet.
await loadHandler();
createServer(async (incoming, outgoing) => {
  try {
    incoming.resume();
    const request = new Request(new URL(incoming.url, origin), { method: incoming.method, headers: incoming.headers });
    const response = await (await loadHandler()).fetch(request);
    outgoing.writeHead(response.status, Object.fromEntries(response.headers));
    outgoing.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error('Preview could not serve the current build:', error.message);
    if (!outgoing.headersSent) outgoing.writeHead(503, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' });
    outgoing.end('The preview is rebuilding. Reload in a moment.');
  }
}).listen(4173, '127.0.0.1', () => console.log(`Local: ${origin}/ (production server)`));
