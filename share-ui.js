export function enhanceSharing(root) {
  const button = root?.querySelector('[data-copy-link]');
  const input = root?.querySelector('#share-url');
  const status = root?.querySelector('.share-status');
  if (!button || !input || !status || button.dataset.enhanced || !navigator.clipboard?.writeText) return;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(input.value);
      status.textContent = 'Link copied. Paste it wherever you would like to share.';
    } catch {
      input.focus();
      input.select();
      status.textContent = 'Select and copy the link above to share it.';
    }
  };
  button.addEventListener('click', copy);
  button.dataset.enhanced = 'true';
  button.hidden = false;
  return () => {
    button.removeEventListener('click', copy);
    button.hidden = true;
    delete button.dataset.enhanced;
  };
}
