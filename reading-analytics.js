// Only page paths and fixed event names are measured; never question text.
export function enhanceReadingAnalytics() {
  if (window.mcAnalyticsDisabled || typeof window.gtag !== 'function') return;
  const send = (name, params = {}) => window.gtag('event', name, {
    page_path: location.pathname, language: document.documentElement.lang,
    transport_type: 'beacon', ...params,
  });
  let seconds = 0, deepest = 0, sent = false;
  const timer = setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    seconds += 5;
    const main = document.querySelector('main');
    if (!main) return;
    const rect = main.getBoundingClientRect();
    deepest = Math.max(deepest, Math.min(1, Math.max(0, (innerHeight - rect.top) / rect.height)));
    if (!sent && seconds >= 60 && deepest >= 0.5) {
      sent = true;
      send('engaged_reading', {visible_seconds: seconds, reading_depth: 50});
      clearInterval(timer);
    }
  }, 5000);
  document.addEventListener('click', event => {
    const link = event.target.closest('main a[href]');
    if (!link) return;
    const target = new URL(link.href, location.href);
    if (target.origin === location.origin && target.pathname !== location.pathname) {
      send('reading_navigation', {destination_path: target.pathname});
    }
  });
}
