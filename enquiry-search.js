// Share the same progressive enhancement in development and static production.
export function enhanceEnquirySearch(root = document) {
  const input = root.querySelector('#enquiry-input');
  const controls = root.querySelector('#enquiry-controls');
  const fallback = root.querySelector('#enquiry-fallback');
  const status = root.querySelector('#enquiry-status');
  if (!input || !controls || !fallback || !status || controls.dataset.enhanced) return;
  const normalize = text => text.toLowerCase().replace(/[^\p{L}\p{M}\p{N}]+/gu, ' ').trim();
  const ignored = new Set(['i', 'am', 'a', 'the', 'is', 'are', 'do', 'does', 'can', 'what', 'how', 'why', 'to', 'of', 'in', 'and', 'my', 'me', 'you']);
  const entries = [...root.querySelectorAll('.compact-reading details')].map(element => ({
    element, words: normalize(element.textContent).split(' ')
  }));
  const groups = [...root.querySelectorAll('.compact-reading section')]
    .map(element => ({ element, entries: [...element.querySelectorAll('details')] }))
    .filter(group => group.entries.length);
  const filter = () => {
    const terms = normalize(input.value).split(' ').filter(term => term && !ignored.has(term));
    let count = 0;
    for (const { element, words } of entries) {
      const match = !terms.length || terms.some(term => words.some(word => word.startsWith(term)));
      element.hidden = !match;
      if (match) count++;
    }
    for (const group of groups) group.element.hidden = !group.entries.some(entry => !entry.hidden);
    status.textContent = !input.value.trim() ? '' : count
      ? (count === 1 ? status.dataset.single : status.dataset.plural).replace('{count}', String(count))
      : status.dataset.empty;
  };
  input.addEventListener('input', filter);
  filter();
  controls.dataset.enhanced = 'true';
  controls.hidden = false;
  fallback.hidden = true;
  return () => {
    input.removeEventListener('input', filter);
    for (const { element } of [...entries, ...groups]) element.hidden = false;
    status.textContent = '';
    controls.hidden = true;
    fallback.hidden = false;
    delete controls.dataset.enhanced;
  };
}
