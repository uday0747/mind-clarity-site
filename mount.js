import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

// Production has complete HTML; development renders directly from source.
export function mount(Component) {
  if (typeof document === 'undefined') return;
  const root = document.getElementById('root');
  const view = React.createElement(Component);
  if (root.hasChildNodes()) hydrateRoot(root, view);
  else createRoot(root).render(view);
}
