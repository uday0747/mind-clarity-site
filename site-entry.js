import { enhanceLanguagePicker, enhanceNavigation } from './site-ui.js';
import { enhanceEnquirySearch } from './enquiry-search.js';
import { enhanceSharing } from './share-ui.js';

enhanceNavigation(document.querySelector('.site-header'));
enhanceLanguagePicker();
enhanceEnquirySearch();
enhanceSharing(document.querySelector('.share-lesson'));
