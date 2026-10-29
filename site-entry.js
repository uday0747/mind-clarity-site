import { enhanceReadingAnalytics } from './reading-analytics.js';
import { enhanceLanguagePicker, enhanceNavigation, enhanceContents, enhanceAnalyticsPreference, enhanceQuestionLinks } from './site-ui.js';
import { enhanceSharing } from './share-ui.js';

enhanceNavigation(document.querySelector('.site-header'));
enhanceLanguagePicker();
enhanceContents();
enhanceAnalyticsPreference();
enhanceQuestionLinks();

enhanceSharing(document.querySelector('.share-lesson'));

if (document.querySelector('[data-card-studio="true"], [data-practice-studio="true"]')) {
  const script = document.createElement('script');
  script.src = '/studios.js?v=20261029i';
  script.defer = true;
  document.head.appendChild(script);
}

enhanceReadingAnalytics();
