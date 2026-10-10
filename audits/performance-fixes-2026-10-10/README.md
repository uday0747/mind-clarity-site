# Performance and discovery improvements — 10 October 2026

- Main philosophy is now an immediate homepage starting-point link in all eight languages. Existing enquiry remains primary.
- Google URL Inspection confirms English, Telugu and Hindi philosophy URLs are indexed. The October 4 aggregate report is stale; it lists philosophy as not indexed even though individual inspection confirms indexing.
- Sitemap retains all 120 canonical pages and now accurately marks today's philosophy updates in every language.
- Google Analytics `engaged_reading` key event configured with no monetary value, once per session. Site emits it after 60 seconds of visible-page time AND reaching at least 50% of main content. This approximates reading engagement; it cannot establish understanding.
- `reading_navigation` measures internal main-content links using destination paths. No question text, link text, query strings or fragments are included in custom events.
- Owner/test traffic can be excluded on each browser by visiting https://mindclarity.co.in/?mc_analytics=off. This browser setting persists on this origin until https://mindclarity.co.in/?mc_analytics=on is visited. Local previews automatically suppress Analytics. It does not change or delete historical data, and does not exclude other browsers/devices automatically.
- Canonical page location is supplied without query parameters.
- Public successful responses now allow 60 seconds of shared-cache freshness and 300 seconds of stale-while-revalidate; browser HTML still requires validation. Versioned assets remain immutable; errors remain uncached. Hosting intermediaries may override caching headers; this is not proof of CDN cache activation.
- Added Server-Timing for application handler duration to distinguish application work from network/platform latency. It excludes worker initialization and network transit.
- Production logs revealed an old AI article URL returning 404. Its exact old path and trailing-slash variant redirect permanently to the current AI learning page.
- Client enhancement bundle 8.40 KB raw / 3.34 KB gzip, increased from 7.60 KB raw for measurement. Budget adjusted to 9 KB.

Validation: 120 complete pages; 1,039 route checks; 668 internal references; metadata, robots, sitemap and conditional caching checks pass. Dedicated analytics checks cover owner/local exclusion, persistence, reset, blocked storage, sanitized URLs, hidden tabs and reading thresholds. Desktop navigation and 390px mobile homepage layout checked through Edge.

Initial latency remains variable and requires live follow-up after deployment; no Lighthouse or field Core Web Vitals score is claimed.
