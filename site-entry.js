import { enhanceReadingAnalytics } from './reading-analytics.js';
import { enhanceLanguagePicker, enhanceNavigation, enhanceContents, enhanceAnalyticsPreference } from './site-ui.js';
import { enhanceEnquirySearch } from './enquiry-search.js';
import { enhanceSharing } from './share-ui.js';

enhanceNavigation(document.querySelector('.site-header'));
enhanceLanguagePicker();
enhanceContents();
enhanceAnalyticsPreference();
enhanceEnquirySearch();
enhanceSharing(document.querySelector('.share-lesson'));

enhanceReadingAnalytics();
