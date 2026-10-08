export function enhanceSharing(root) {
  const button = root?.querySelector('[data-copy-link]');
  const input = root?.querySelector('#share-url');
  const status = root?.querySelector('.share-status');
  if (!button || !input || !status || button.dataset.enhanced || !navigator.clipboard?.writeText) return;
  const copy = async () => {
    const copied = root.dataset.shareCopied || 'Link copied. Paste it wherever you would like to share it.';
    const fallback = root.dataset.shareFallback || 'Select and copy the link above to share it.';
    try {
      await navigator.clipboard.writeText(input.value);
      status.textContent = copied;
    } catch {
      input.focus();
      input.select();
      status.textContent = fallback;
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
