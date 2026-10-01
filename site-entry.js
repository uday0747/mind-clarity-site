import { enhanceNavigation } from './site-ui.js';
enhanceNavigation(document.querySelector('.site-header'));
const input = document.querySelector('#enquiry-input');
if (input) {
  const entries = [...document.querySelectorAll('.compact-reading details')];
  const status = document.querySelector('#enquiry-status');
  const normalize = text => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const ignored = new Set(['i', 'am', 'a', 'the', 'is', 'are', 'do', 'does', 'can', 'what', 'how', 'why', 'to', 'of', 'in', 'and', 'my', 'me', 'you']);
  input.addEventListener('input', () => {
    const terms = normalize(input.value).split(' ').filter(term => term && !ignored.has(term));
    let count = 0;
    for (const entry of entries) {
      const text = normalize(entry.textContent);
      const match = !terms.length || terms.some(term => text.split(' ').some(word => word.startsWith(term)));
      entry.hidden = !match;
      if (match) count++;
    }
    for (const section of document.querySelectorAll('.compact-reading section')) {
      section.hidden = ![...section.querySelectorAll('details')].some(entry => !entry.hidden);
    }
    status.textContent = !input.value.trim() ? '' : count ? `${count} related answers. Open a question below to read Uday’s explanation.` : 'No recorded answer matches yet. Try a shorter topic, or browse the questions by clearing this field. This tool does not invent an answer.';
  });
}
