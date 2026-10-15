import http from 'node:http';
import { spawn } from 'node:child_process';

// Start chrome with remote debugging
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless',
  '--remote-debugging-port=9222',
  '--window-size=375,812',
  'http://127.0.0.1:4173/'
]);

await new Promise(r => setTimeout(r, 1500));

// Fetch CDP endpoints
const res = await fetch('http://127.0.0.1:9222/json');
const targets = await res.json();
console.log('Available targets:', targets.map(t => ({ type: t.type, url: t.url })));
const pageTarget = targets.find(t => t.type === 'page' && t.url.includes('127.0.0.1')) || targets.find(t => t.type === 'page');
const wsUrl = pageTarget?.webSocketDebuggerUrl;

console.log('WS Debugger URL:', wsUrl);

if (wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise(resolve => ws.onopen = resolve);

  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
    const msgId = id++;
    const handler = (evt) => {
      const data = JSON.parse(evt.data);
      if (data.id === msgId) {
        ws.removeEventListener('message', handler);
        resolve(data.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');

  // Evaluate script to get geometry and styles
  const evalResult = await send('Runtime.evaluate', {
    expression: `
      (function() {
        const header = document.querySelector('.site-header');
        const brand = document.querySelector('.brand');
        const button = document.querySelector('.menu-toggle');
        const tools = document.querySelector('.language-tools');
        const nav = document.querySelector('nav');
        
        return {
          windowInnerWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          header: {
            rect: header ? header.getBoundingClientRect() : null,
            classes: header ? header.className : null,
            computedDisplay: header ? getComputedStyle(header).display : null,
            computedFlexWrap: header ? getComputedStyle(header).flexWrap : null
          },
          brand: {
            rect: brand ? brand.getBoundingClientRect() : null,
            computedWidth: brand ? getComputedStyle(brand).width : null
          },
          button: {
            rect: button ? button.getBoundingClientRect() : null,
            computedDisplay: button ? getComputedStyle(button).display : null,
            computedVisibility: button ? getComputedStyle(button).visibility : null,
            computedOpacity: button ? getComputedStyle(button).opacity : null,
            computedWidth: button ? getComputedStyle(button).width : null,
            computedHeight: button ? getComputedStyle(button).height : null,
            text: button ? button.textContent : null,
            ariaExpanded: button ? button.getAttribute('aria-expanded') : null
          },
          tools: {
            rect: tools ? tools.getBoundingClientRect() : null
          }
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Evaluation Result:\n', JSON.stringify(evalResult.result.value, null, 2));

  // Also check console errors in the page!
  const logs = await send('Runtime.evaluate', {
    expression: 'window.errors || []',
    returnByValue: true
  });

  ws.close();
}

chrome.kill();
