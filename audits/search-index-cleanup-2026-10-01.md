# Search indexing cleanup — 1 October 2026

Published source: `0af938f60937190ae66241fc6e873f6ea60e2644` (Site version 60).

## Evidence and fixes

The existing `https://www.mindclarity.co.in/` Google Search Console property was verified through the existing Google Analytics tag. Its Page indexing report, last updated 21 September 2026, listed seven indexed examples: the homepage, `/blank-1`, `/blank-2`, `/blank-3`, `/blank-4`, `/blog`, and `/book-online`. These examples explain the outdated search links better than the initial assumption that About and Services were the only affected addresses.

Contact and these six obsolete addresses now return HTTP 410 with `X-Robots-Tag: noindex`, including clean, trailing-slash, `.html`, query-string, www and non-www variants. Old `/blog/` descendants are retired as well. Unknown URLs return 404 with noindex. `/404` and `/404.html` now also return 404.

Current www URLs permanently redirect to HTTPS non-www URLs. Existing legacy redirects and HTML/slash variants resolve directly to their canonical destinations without introducing a www redirect chain. Contact remains excluded from generated assets and the six-page sitemap.

## Verification

`node scripts/audit-seo.mjs` and `node scripts/audit-seo.mjs --live` both passed: 125 route checks, six page metadata checks, 45 internal links/assets/fragments, CSS images, robots and sitemap. The build's existing content, metadata, navigation, accessibility structure and asset checks passed. Googlebot user-agent samples returned 200 for the homepage and 410 for Contact and `/blank-3`; a spoofed user agent is not proof of Google's actual crawl.

The canonical `https://mindclarity.co.in/` Search Console property was added and automatically verified through the same Analytics tag. Its sitemap was submitted and Google's detail report confirmed “Sitemap processed successfully,” last read 1 October 2026, with six discovered pages. The existing www sitemap was also resubmitted.

Four reversible temporary removal requests were submitted in the www property for the prefixes `/blank-`, `/blog`, `/book-online`, and `/contact`. Google states the requests cover www/non-www and HTTP/HTTPS variants. All four were visibly recorded as “Processing request” on 1 October 2026. No removal was requested for a current page or the whole domain.

## Remaining external processing

Google controls when removal requests finish and when its crawl and index reports update. The new canonical property's historical reports initially say they are processing data. Sitemap acceptance does not guarantee ranking or immediate indexing. Edge HTTP-to-HTTPS redirects are provided by the hosting platform; sampled HTTP requests returned 302 to HTTPS, with the server enforcing canonical HTTPS URLs afterwards.

Unrelated README edits and launch assets were preserved and excluded from the publication. The bundled Sites workflow helper became unavailable during this turn; source was instead pushed with a fresh short-lived credential held only in memory/stdin, the pushed SHA was verified, and validated output was packaged and published through the existing native Sites version/deployment tools.
