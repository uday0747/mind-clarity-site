import { enhanceReadingAnalytics } from './reading-analytics.js';
import { enhanceLanguagePicker, enhanceNavigation, enhanceContents, enhanceAnalyticsPreference, enhanceQuestionLinks } from './site-ui.js';
import { enhanceSharing } from './share-ui.js';

enhanceNavigation(document.querySelector('.site-header'));
enhanceLanguagePicker();
enhanceContents();
enhanceAnalyticsPreference();
enhanceQuestionLinks();

enhanceSharing(document.querySelector('.share-lesson'));

enhanceReadingAnalytics();
