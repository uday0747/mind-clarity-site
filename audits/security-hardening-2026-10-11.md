# Security hardening — 11 October 2026

## Website changes

- Every current HTML page has an enforced hash-based Content Security Policy. Executable inline scripts and the first-party JavaScript bundle are authorized by their exact SHA-256 hashes; the bundle also has Subresource Integrity. No `unsafe-inline` or `unsafe-eval` exceptions are enabled.
- Restrict styles, images and connections to the site's actual requirements, including existing Google Analytics without advertising endpoints. Disallow frames, plugins, form submissions, workers, inline event handlers and base URL overrides. Analytics preferences retain their existing behavior.
- Add HTTPS Strict Transport Security (one year, without unverified subdomain/preload commitments), clickjacking protection, a referrer policy, permission restrictions and opener isolation. Apply headers to normal, cached, redirect, removed, missing and rejected-method responses.
- Only GET and HEAD are accepted, including at redirect and retired routes. Source/private file paths remain unavailable.
- Use Maps for assets and redirects so inherited names such as `constructor` and `__proto__` cannot be mistaken for public assets.
- Pin direct build dependencies to the existing checked versions. Override `source-map-js` to patched version 1.2.2. The npm advisory endpoint reported no known advisories for the 45 packages checked after the update. This build-only dependency is not part of the deployed Worker or browser runtime.
- Keep local development and preview bound to loopback.

## Verification

- Full build: 128 pages, 1,167 route cases, 788 internal references, search, reading analytics, translations, SEO and cache behavior passed.
- Security regression checks: all 128 pages, exact inline and external script hashes, 158 response/header cases, unavailable private paths and rejected write methods passed locally.
- Browser preview: question search works under the enforced policy; no security policy errors appeared in the checked console.
- A pattern scan of 271 tracked text files found no high-confidence private keys or recognized API/GitHub secret patterns. This is a limited check, not proof that all possible secrets are absent.
- Sites reports owner access with no additional editors in the returned editor list. Public readership is preserved.

## Computer findings and actions

- Enabled the macOS application firewall and stealth mode; both were verified by the system command-line tools.
- Changed the password requirement after screen saver/display sleep from five minutes to Immediately; verified in System Settings after the owner's local authentication.
- Gatekeeper, System Integrity Protection and authenticated root were already enabled.
- System Settings shows File Sharing, Screen Sharing, Remote Login, Remote Management and other inspected sharing services off.
- FileVault was off at the initial check; setup was handed to the owner for private authentication and recovery-key handling. Verify completion separately.
- The update service offers macOS Sequoia 15.8.1 and Safari 27.0 for this installed macOS 15.6.1. Restart-dependent installation remains to be completed when the owner can save work.
- No Time Machine destination is configured. A backup destination must be chosen by the owner.

## Limits and remaining account work

No malware clearance or guarantee against hacking is claimed. Account multifactor authentication, domain registrar protection, recovery methods, router settings and provider-managed denial-of-service controls were not changed or verified through the available interfaces. These need the owner's account/device access. Do not expose passwords or recovery keys in this repository or chat.

References: [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP), [Google Analytics CSP requirements](https://developers.google.com/tag-platform/security/guides/csp), [patched dependency advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q), [Apple firewall](https://support.apple.com/guide/mac-help/block-connections-to-your-mac-with-a-firewall-mh34041/mac), [Apple FileVault](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac).
