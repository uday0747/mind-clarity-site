(function () {
  var disabled = !['mindclarity.co.in', 'www.mindclarity.co.in', 'mind-clarity-uday.udaykum.chatgpt.site'].includes(location.hostname);
  try {
    var choice = new URLSearchParams(location.search).get('mc_analytics');
    if (choice === 'off') localStorage.setItem('mc-analytics-disabled', '1');
    if (choice === 'on') localStorage.removeItem('mc-analytics-disabled');
    disabled = disabled || localStorage.getItem('mc-analytics-disabled') === '1';
  } catch (_) {}
  window.mcAnalyticsDisabled = disabled;
  if (disabled) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  var loader = document.createElement('script');
  loader.async = true;
  loader.src = 'https://www.googletagmanager.com/gtag/js?id=G-VP82MGE7SK';
  document.head.appendChild(loader);
  window.gtag('js', new Date());
  window.gtag('config', 'G-VP82MGE7SK', {page_location: location.origin + location.pathname});
})();
