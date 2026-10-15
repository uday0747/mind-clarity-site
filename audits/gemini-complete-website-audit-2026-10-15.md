# Complete Evidence-Based Website Audit — Mind Clarity Website

**Audit Date:** 15 October 2026 (Local time: IST)  
**Auditor:** Gemini Coding Assistant (Pair Programming Audit)  
**Public Website:** https://mindclarity.co.in  
**Project ID:** `appgprj_6aaa961f044c819187e5fba7ce5448c7`  
**Git Branch / Commit:** `main` (clean working tree on tracked source; untracked audit artifacts in `audits/`)  
**Scope:** Complete workspace inspection, static build validation (544 pages in 34 language variants), automated headless browser test harness execution (1,088 route checks @ desktop/mobile + 11 interactive test suites), local production preview server verification, and in-depth audit of English, Telugu, and RTL variants.

---

## 1. Executive Summary

A comprehensive, evidence-based audit of the **Mind Clarity Website** was conducted in the active local workspace. The site is a high-performance, calm, self-guided spiritual philosophy website sharing Uday Kumar's Creator-and-game understanding.

### Overall Assessment
The technical foundation, SEO compliance, route integrity, and translation scaffolding are remarkably sound:
- **Build & Static Structure:** Generates 544 complete prerendered HTML pages across 34 language variants plus 2 legacy redirects (`/about` & `/services`) and 410 Gone handlers for retired Wix endpoints (`/contact`, `/blog`, etc.).
- **Zero Broken Links or Assets:** Automated traversal across all 544 built pages verified **0 broken internal links**, **0 broken fragment anchors**, and **0 missing local asset files** (CSS, JS, icons, WebP images).
- **Structural English/Telugu Parity:** All 16 core pages in English have an exact structural counterpart in Telugu with identical section counts, details disclosure counts, anchor IDs, and language-specific video bindings.
- **Performance & Security:** The public client-side footprint is exceptionally lightweight (visitor bundle `site.js` is 8.03 KB uncompressed / 3.20 KB gzip; no React hydration in production). Zero third-party web fonts (system font fallbacks). Strict Content Security Policy with cryptographic response nonces, subresource integrity (SRI), and no inline script/style execution.
- **Automated Browser Interactions & Zero Errors:** Executed comprehensive automated Playwright browser tests across all 544 canonical routes at both desktop (1280x800) and mobile (375x812) viewports (1,088 route checks total). Confirmed **100% pass rate**, **0 horizontal overflows**, **0 console errors**, **0 uncaught page errors**, and **0 failed network requests**. Confirmed 11/11 interactive suites passed (mobile menu open/close and Escape focus restoration, keyboard Tab/skip-link navigation, native disclosure toggles, FAQ hash deep-link auto-expansion in English & Telugu, language dropdown switching, browser language suggestion banners, and isolated privacy analytics controls).
- **Audit Findings:** The audit identified 2 confirmed metadata inconsistencies between English and Telugu, 1 minor non-text UI contrast boundary issue, and several opportunities for accessibility enhancement, detailed below with exact file and line references.

---

## 2. Source of Truth, Build, and Verification Baseline

### 2.1 Source of Truth
- **Homepage Source:** `app.js` (governing story, discovery cards, 3 everyday scene disclosures, learning journey, library).
- **Secondary Pages & Routing:** `page-app.js` (15 secondary routes including Philosophy, Practice, FAQ, Reflections, Privacy, Ashtavakra Gita, Understanding God, and 7 thematic self-enquiry guides).
- **Core Teaching & Siddhanta:** `teaching-content.json` (exact governing statement, original Mula Siddhanta, 5 practice steps, 6 worked examples).
- **Questions & Categorized FAQ:** `questions.js` (70 questions with full answers and stable IDs).
- **Localized Content & Dictionaries:** `translations/*.json` (33 translated dictionaries), `translations/metadata-new.json`, `localized-core.js`, `localized-more.js`, `localized-ai.js`.
- **UI & Layout Components:** `site-header.js`, `site-layout.js`, `site-ui.js`, `site-entry.js`, `share-learning.js`, `share-ui.js`, `reading-analytics.js`.
- **Styling:** `page.css` (global design tokens, editorial typography, responsive layouts) and `react-home.css` (homepage-specific cards).
- **Production Server & Routing:** `site-server.js` (Cloudflare Worker server handler, security headers, canonical redirects, immutable caching, 304 conditional responses).
- **Build Pipeline:** `scripts/build.mjs` (prerenders static HTML via `renderToStaticMarkup`, compiles client enhancement bundle, compiles sitemap with hreflang alternates, and validates staging before moving to `dist/`).

### 2.2 Build & Verification Commands
- **Environment:** Node.js v24.19.0, pnpm v11.25.0 (`/Users/udaykumarpinninti/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin`).
- **Build Command:** `pnpm build` (`node scripts/build.mjs`) — successfully rebuilt 544 pages in ~28 seconds.
- **Check Suite:** `pnpm check` executes 7 validation scripts in sequence:
  1. `check-translation-quality.mjs`: dictionary completeness, placeholder preservation, Tamil journal & Odia word regression checks.
  2. `check.mjs`: 544 complete pages, unique element IDs, single H1, canonicals, hreflang alternates, structural parity.
  3. `audit-seo.mjs`: 4,703 automated route checks, redirects, 3,650 internal links/fragments, conditional caching, HEAD handling.
  4. `check-discovery.mjs`: 59 concern queries, phrase matching, ranking algorithms.
  5. `check-reading-analytics.mjs`: owner exclusion (`mc_analytics=off`), query sanitization, visibility detection.
  6. `check-audit-fixes.mjs`: stable question IDs, section numbering, sequential lessons, article index.
  7. `check-security.mjs`: 574 response/header checks, CSP nonces/hashes, blocked private paths (`/.env`, `/.git`, `package.json`).
- **Local Preview Server:** `node scripts/preview.mjs` serving production build locally at `http://127.0.0.1:4173/`.

### 2.3 Automated Browser Test Harness Baseline
- **Harness Script:** `audits/browser-test-harness.mjs`
- **Engine:** Google Chrome (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`) driven via `playwright-core` (`/Users/udaykumarpinninti/.local/share/mind-clarity-browser-tests/node_modules/playwright-core/index.mjs`) on Node.js v24.22.0.
- **Execution Mode:** Isolated browser contexts with custom pages, bounded navigation and interaction timeouts (15s / 10s), headless execution without attaching to existing Chrome tabs or downloading external binaries.
- **Listener Telemetry:** Pre-navigation attachment of `console` (filtering `error`), `pageerror` (uncaught exceptions), and `requestfailed` (network drops).
- **Machine-Readable Artifact:** `audits/browser-test-results-2026-10-15.json` with 12 visual screenshots in `audits/browser-screenshots/`.

### 2.4 Repository Status
`git status` confirms:
- Branch `main`.
- Untracked files: `Open Gemini.command`, `audits/traffic-fixes-2026-10-14.md`, `audits/traffic-fixes-2026-10-14/`, and audit scripts/evidence in `audits/`.
- No tracked source code files were modified during this audit.

---

## 3. Prioritized Audit Findings

### Priority 1: Confirmed Content & SEO Metadata Inconsistencies

#### Finding 1.1: Homepage Title and Description Divergence in Telugu
- **Classification:** Confirmed Defect / Content Inconsistency
- **Location:**
  - `translations/metadata-new.json:233-236`
  - Generated output: `dist/te.html:86`
- **Evidence:**
  - English Homepage (`dist/index.html`):
    - Title: `<title>Who Are We? Creator and the Game | Mind Clarity</title>`
    - Description: `<meta name="description" content="Explore who we are through Uday Kumar’s Creator-and-game philosophy: remembrance, oneness across lives, respect across faiths, and everyday self-enquiry.">`
    - H1: `<h1>Who are we?</h1>`
  - Telugu Homepage (`dist/te.html`):
    - H1: `<h1>మనం ఎవరం?</h1>` (Accurate translation of "Who are we?")
    - Title: `<title>విశ్వాసం, విజయం, తెలివితేటలు మరియు ఏకత్వం | Mind Clarity</title>` (Translates to: *"Confidence, success, intelligence and oneness | Mind Clarity"*)
    - Description: `"ఉదయ్ కుమార్ క్రియేటర్ అండ్ గేమ్ టీచింగ్ మరియు మేధస్సు మరియు శ్రేయస్సు గురించి దాని దృక్పథం ద్వారా విశ్వాసం, విజయం, సంబంధాలు, ఏకత్వం మరియు అంతర్గత శాంతిని అన్వేషించండి."` (Focuses on confidence, success, relationships, intelligence, and well-being).
- **Impact:** Search engine snippets for the Telugu homepage display the older theme of "Confidence and Success" rather than matching the current governing H1 ("మనం ఎవరం? / Who are we?") and mission statement.
- **Reproduction Steps:**
  1. Inspect `<title>` and `<meta name="description">` in `dist/index.html`.
  2. Inspect `<title>` and `<meta name="description">` in `dist/te.html`.
  3. Notice the title and description do not translate the English homepage metadata.
- **Proposed Fix:**
  Update `translations/metadata-new.json` under `te[""]`:
  - Title: `"మనం ఎవరం? సృష్టికర్త మరియు ఆట | Mind Clarity"`
  - Description: `"ఉదయ్ కుమార్ సృష్టికర్త-మరియు-ఆట తత్వం ద్వారా మనం ఎవరో అన్వేషించండి: స్మరణ, జీవితాలలో ఏకత్వం, మతాల పట్ల గౌరవం మరియు రోజువారీ ఆత్మవిచారణ."`

---

#### Finding 1.2: Missing Brand Suffix on Secondary Telugu Page Titles
- **Classification:** Confirmed Inconsistency
- **Location:**
  - `translations/metadata-new.json:225-232`
  - Generated output: `dist/te/ashtavakra-gita.html:86` and `dist/te/understanding-god.html:86`
- **Evidence:**
  - `dist/te/ashtavakra-gita.html`:
    `<title>అష్టావక్ర గీత: అనుభవంలో చైతన్యం</title>` (Missing ` | Mind Clarity`)
  - `dist/te/understanding-god.html`:
    `<title>అనుభవాల ఆట ద్వారా దేవుణ్ణి అర్థం చేసుకోవడం</title>` (Missing ` | Mind Clarity`)
  - By comparison, English versions:
    `<title>Ashtavakra Gita and Creator Awareness | Mind Clarity</title>`
    `<title>Understanding God and the Game of Experiences | Mind Clarity</title>`
  - And all other 14 Telugu pages (Philosophy, Practice, FAQ, Reflections, etc.) include ` | Mind Clarity`.
- **Impact:** Search results and browser tab titles for these two Telugu pages lack the brand anchor.
- **Reproduction Steps:**
  1. View `<title>` in `dist/te/ashtavakra-gita.html`.
  2. View `<title>` in `dist/te/understanding-god.html`.
- **Proposed Fix:**
  In `translations/metadata-new.json` under `te`:
  - `ashtavakra-gita.title`: `"అష్టావక్ర గీత: అనుభవంలో చైతన్యం | Mind Clarity"`
  - `understanding-god.title`: `"అనుభవాల ఆట ద్వారా దేవుణ్ణి అర్థం చేసుకోవడం | Mind Clarity"`

---

### Priority 2: Accessibility & Color Contrast (WCAG 2.1 AA vs AAA)

#### Finding 2.1: Non-Text UI Border Contrast on `--cream` Header Background
- **Classification:** Confirmed Minor Accessibility Deviation
- **Location:** `page.css:29` (`.language-picker select { border: 1px solid #78978c; ... }`), `page.css:1` (`--cream: #faf8f2`).
- **Evidence:**
  - Calculated luminance:
    - `#78978c` (relative luminance $L_1 = 0.297$)
    - `#faf8f2` (relative luminance $L_2 = 0.942$)
    - Contrast ratio: **2.99:1**
  - WCAG 2.1 Success Criterion 1.4.11 (Non-text Contrast) requires at least **3.0:1** for visual information required to identify user interface components (such as form field borders).
  - Note: On pure white (`#ffffff`), the border achieves **3.18:1** (PASS), but inside the sticky header, its background is `--cream` (`#faf8f2`).
- **Impact:** Low-vision users in bright ambient light may have difficulty perceiving the boundary of the language dropdown input.
- **Reproduction Steps:**
  1. Inspect `.language-picker select` element in header.
  2. Compute contrast ratio between `#78978c` and `--cream` (`#faf8f2`). Ratio is 2.99:1 (threshold 3.0:1).
- **Proposed Fix:**
  In `page.css:29`, adjust the border color slightly from `#78978c` to `#6e9084` or `#64867b`, yielding a contrast ratio of **3.4:1** on `--cream`.

---

#### Finding 2.2: Eyebrows, Lesson Numbers, and Muted Text Contrast (WCAG AA vs AAA)
- **Classification:** Accessibility Clarification / Enhancement Opportunity
- **Location:** `page.css:17` (`.eyebrow`), `page.css:66` (`.topic-index, .lesson-number`), `page.css:102` (`.quiet-note`).
- **Evidence:**
  - Gold text `--gold` (`#795b2b`) on `--cream` (`#faf8f2`): **5.91:1** (WCAG AA PASS; WCAG AAA FAIL for text < 18pt).
  - Gold text `--gold` (`#795b2b`) on `--soft` (`#edf2ec`): **5.54:1** (WCAG AA PASS; WCAG AAA FAIL).
  - Muted text `--muted` (`#53645b`) on `--cream` (`#faf8f2`): **5.92:1** (WCAG AA PASS; WCAG AAA FAIL).
  - Discovery number `#74633d` on `#f1f4ec`: **5.26:1** (WCAG AA PASS; WCAG AAA FAIL).
  - Body text (`#26332e` on `--cream`): **12.39:1** (WCAG AAA PASS).
  - Headings (`#183d36` on `--cream`): **11.24:1** (WCAG AAA PASS).
  - Primary button (`#ffffff` on `#24574d`): **8.25:1** (WCAG AAA PASS).
- **Impact:** All text comfortably passes WCAG AA (>= 4.5:1). For strict WCAG AAA certification on small notes and metadata, higher contrast would be required.
- **Proposed Fix:** Retain current palette for calm aesthetic unless strict WCAG AAA compliance is an explicit requirement.

---

### Priority 3: Responsive Desktop & Mobile Layouts

#### Finding 3.1: Mobile Header Height and Dynamic Scroll Padding
- **Classification:** Layout Observation / Mobile Usability
- **Location:** `page.css:4, 18, 111-125, 159-167`, `site-ui.js:48-51`.
- **Visual Evidence:** `audits/mobile-en.png`, `audits/mobile-te.png`, `audits/mobile-faq-te.png`.
- **Analysis:**
  - At 375px mobile viewport, the sticky header wraps into multiple lines:
    1. Row 1: Brand logo + "Mind Clarity"
    2. Row 2: Language selector dropdown
    3. Row 3: Language suggestion banner (when browser language preferences trigger a suggestion)
  - When the suggestion displays, the sticky header height expands to ~101px.
  - The script dynamically monitors this using a `ResizeObserver`:
    `document.documentElement.style.setProperty('--header-height', ...)`
    and `html { scroll-padding-top: calc(var(--header-height, 95px) + 20px) }`.
  - On small screens (320px–375px), this occupies over 15% of vertical viewport height before scrolling.
- **Proposed Fix:** Consider hiding or collapsing the language suggestion once dismissed or on scroll, or placing the language picker inside the mobile menu drawer on viewports <= 480px.

---

### Priority 4: Content Consistency & Terminology

#### Finding 4.1: Source Material Description Accuracy
- **Classification:** Content Consistency
- **Location:** `enquiry-pages.js:15`, `translations/es.json:789`, `translations/te.json:792`, `README.md:131`.
- **Evidence:**
  - English topic guides state: *"Adapted from Uday Kumar’s written discussions and clarifications."*
  - As established in prior audits and `README.md:131`, preserved historical discussions are text transcripts; no original audio recording exists for those discussions.
  - Verification: In `translations/te.json`, the phrasing is `"ఉదయ్ కుమార్ రాతపూర్వక చర్చలు, వివరణల నుండి గ్రహించబడింది"` (accurately referencing written discussions).

---

## 4. Verification Details & Checks Passed

### 4.1 Internal Links & Assets Traversal
An exhaustive, recursive crawler (`audits/run-deep-audit.mjs`) examined all 547 HTML files in `dist/`:
- **Broken Internal Links:** **0**. Every internal link (`href="/..."`) resolves to an existing file in `dist/` or a configured 301 redirect.
- **Broken Fragment Anchors:** **0**. Every anchor reference (`#anchor` on same or cross-page) matches an existing `id` attribute on the target page.
- **Missing Asset References:** **0**. All `<img src>`, `<picture><source srcset>`, `<link rel="stylesheet">`, and `<script src>` point to existing static assets with content hashes.
- **Image Alt Attributes:** All content images (`/assets/pond-fallback.jpg`, etc.) have descriptive, localized `alt` attributes. Decorative SVGs use `aria-hidden="true" focusable="false"`.

### 4.2 English vs. Telugu Structural Parity
A side-by-side comparison (`audits/check-en-te-parity.mjs`) of all 16 page pairs confirmed:
- `index` / `te`: Exactly 12 sections, 9 disclosures each.
- `philosophy` / `te/philosophy`: Exactly 21 sections, 22 disclosures each.
- `practice` / `te/practice`: Exactly 9 sections, 8 disclosures each.
- `faq` / `te/faq`: Exactly 13 sections, 71 disclosures each (all 70 FAQ questions + evidence notes).
- `understanding-god` / `te/understanding-god`: Exactly 8 sections, 1 disclosure each.
- `ashtavakra-gita` / `te/ashtavakra-gita`: Exactly 5 sections, 0 disclosures each.
- `reflections` / `te/reflections`: Exactly 0 sections (article cards layout).
- `privacy` / `te/privacy`: Exactly 1 section each.
- The 7 self-enquiry guides: Identical section structure across all 7 topics.
- **Anchor IDs:** Zero missing IDs between English and Telugu across the entire site.
- **Video Bindings:** English pages link to English YouTube video (`XmOWrhEnGM8`); Telugu pages link to Telugu YouTube video (`kdquEeK9wto`).

### 4.3 SEO, Sitemap, and Canonicals
- **Sitemap:** `dist/sitemap.xml` contains all **544 canonical URLs**, each with `<lastmod>` and reciprocal `<xhtml:link rel="alternate" hreflang="..." href="...">` entries for all 34 supported language variants, plus `x-default` pointing to the English equivalent.
- **Robots.txt:** Correctly formatted with `User-agent: *`, `Allow: /`, and `Sitemap: https://mindclarity.co.in/sitemap.xml`.
- **Canonicals:** Every public page includes a self-canonical `<link rel="canonical" href="https://mindclarity.co.in/...">` matching its protocol, host, and path.
- **Social Tags:** All pages include `og:title`, `og:description`, `og:url`, `og:image`, `og:image:width: 1200`, and `og:image:height: 800`.
- **Structured Data:** Valid JSON-LD schemas verified across all pages (`WebSite`, `WebPage`, `BreadcrumbList`, and `FAQPage`).

### 4.4 Security & Server Headers
Local production preview server testing verified:
- **Content-Security-Policy:** Strictly enforced (`default-src 'none'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'none'`). External scripts are constrained to subresource integrity (SRI) hashes and per-response cryptographically random nonces (`script-src 'nonce-...' 'strict-dynamic'`).
- **HTTP Security Headers:** `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security: max-age=31536000`, `Permissions-Policy` disabling unused APIs.
- **Method Restrictions:** POST, PUT, DELETE, PATCH, OPTIONS return `405 Method Not Allowed`.
- **Secret & Path Protection:** `/.env`, `/.git/config`, `/server/index.js`, `/package.json`, `/__proto__` return 404 with `noindex`.
- **Retired Wix URLs:** `/contact`, `/blog`, `/book-online`, `/blank-1` to `blank-4` return `410 Gone` with `X-Robots-Tag: noindex`.
- **Redirects:** Legacy `/about` 301 redirects to `/philosophy`; `/services` 301 redirects to `/`.

### 4.5 Automated Browser Route Crawl & Interactive UI Test Suites
A full-spectrum automated browser test harness (`audits/browser-test-harness.mjs`) was executed against the local production preview server (`http://127.0.0.1:4173/`):

#### 4.5.1 Comprehensive Route Crawl (Desktop & Mobile)
- **Routes Tested:** All 544 canonical URLs tested at both Desktop (1280x800) and Mobile (375x812) viewports (**1,088 total route checks**).
- **Assertions Evaluated Per Route:**
  1. Response status is HTTP 200.
  2. Element `<header class="site-header">` exists and is attached to the DOM.
  3. Element `<main id="main-content">` exists and is attached to the DOM.
  4. Exactly one `<h1>` element exists on the page.
  5. Horizontal overflow check: `document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1`.
- **Results:**
  - **Passed Checks:** **1,088 / 1,088 (100% PASS)**
  - **Horizontal Overflows Detected:** **0** (desktop and mobile layouts stay strictly within viewport boundaries across all 544 canonical routes).
  - **Console Errors Recorded:** **0**
  - **Page Errors (Uncaught Exceptions) Recorded:** **0**
  - **Failed Network Requests Recorded:** **0**

#### 4.5.2 Interactive Feature Test Suites (11 / 11 PASSED)
1. **Mobile Menu Drawer & Focus Restoration (English - 375x812):**
   - Clicked menu toggle button (`.menu-toggle`).
   - Verified `nav#primary-navigation` received `.is-open`, the toggle attribute changed to `aria-expanded="true"`, and its label changed to `"Close menu"`.
   - Pressed `Escape` key. Verified menu closed (`aria-expanded="false"`, label reverted to `"Menu"`), and keyboard focus successfully restored to the `.menu-toggle` button (`document.activeElement === toggle`).
2. **Mobile Menu Drawer & Focus Restoration (Telugu - 375x812):**
   - Verified initial toggle button label in Telugu: `"మెను"` with `aria-expanded="false"`.
   - Clicked toggle; verified menu opened, `aria-expanded="true"`, and label became `"మెనును మూసివేయండి"`.
   - Pressed `Escape` key; verified menu closed and keyboard focus returned to `.menu-toggle`.
3. **Keyboard Tab & Skip Link Navigation (Desktop - 1280x800):**
   - Navigated to `/`.
   - Pressed `Tab` key; verified `.skip-link` became focused (`document.activeElement.classList.contains('skip-link')`).
   - Pressed `Enter` key; verified browser scrolled to `#main-content`, and keyboard focus shifted to `main#main-content` (`tabindex="-1"` received focus).
4. **Native Details / Summary Disclosures (Desktop - 1280x800):**
   - Navigated to `/`. Located closed native `<details>` element in everyday scenes section.
   - Clicked `<summary>`; verified `details.open === true`. Clicked again; verified `details.open === false`.
5. **FAQ Deep-Link Auto-Expansion (English - Desktop):**
   - Navigated directly to `/faq#life-confidence`.
   - Verified the target question `<details id="life-confidence">` auto-expanded upon page initialization and was visible.
   - Changed the current page hash to `#life-thoughts`; verified that question expanded.
6. **FAQ Deep-Link Auto-Expansion (Telugu - Desktop):**
   - Navigated directly to `/te/faq#life-confidence`.
   - Verified the corresponding Telugu question `<details id="life-confidence">` auto-expanded (`details.open === true`).
7. **Language Switching via Dropdown & Persistence:**
   - Navigated to `/practice` and selected `'te'` in `#language-select`.
   - Verified navigation to `/te/practice`, the selected value, and `localStorage.getItem('mind-clarity-language') === 'te'`.
8. **Browser Language Suggestion Banner:**
   - In an isolated browser context with `locale: 'te-IN'`, loaded English homepage `/`.
   - Verified `#language-suggestion` was visible, contained `తెలుగు`, and linked to `/te`.
9. **Privacy Analytics Preference Controls:**
   - In an isolated browser context, loaded `/privacy`.
   - Navigated to `/privacy?mc_analytics=off#analytics-preferences`; verified `localStorage.getItem('mc-analytics-disabled') === '1'` and status `"Preference: analytics disabled."`.
   - Navigated to the equivalent URL with `mc_analytics=on`; verified the storage key was removed and status returned to `"Preference: analytics allowed."`. Link clicks and cookie values were not asserted by this test.
10. **Representative RTL Layouts (Arabic & Urdu):**
    - Navigated to `/ar` and `/ur`.
    - Verified `html[dir="rtl"]` attribute, right-to-left layout direction, and brand isolation (`.brand[dir="ltr"]` for "Mind Clarity").
11. **Visual Renderings & Artifacts:**
    - Twelve viewport screenshots were saved under `audits/browser-screenshots/`: English/Telugu homepages at desktop and mobile, Arabic/Urdu homepages at desktop, and selected interaction states.

**Interpretation limits:** Route geometry was sampled after `domcontentloaded`; it does not guarantee the absence of later layout shifts. Error monitoring excluded failed Google Analytics/Tag Manager requests, and the screenshot-only test did not attach error listeners. The zero-error totals refer to monitored local test sessions, not every possible visitor session or third-party service. These checks do not certify WCAG compliance.

---

## 5. Coverage and Explicit Untested Areas

### 5.1 Verified Coverage
| Component | Coverage |
|---|---|
| Total Pages Audited | 544 public canonical HTML pages across 34 language variants + 2 legacy redirects + 404 |
| Browser Route Crawl (Desktop & Mobile) | 1,088 checks (544 routes @ 1280x800 + 544 routes @ 375x812) — **100% PASS** |
| Horizontal Layout Overflows | **0 detected** across all 1,088 desktop and mobile route loads |
| Browser Console / Page / Network Errors | **0 console errors**, **0 uncaught exceptions**, **0 failed network requests** |
| Interactive Browser Test Suites | **11 / 11 test suites passed** (Menu, Keyboard, Disclosures, FAQ deep links, Language, Privacy, RTL) |
| High-Resolution Browser Screenshots | 12 reference screenshots captured in `audits/browser-screenshots/` |
| Internal Links Checked | 3,650 internal links and anchors (100% verified) |
| Assets Checked | 567 dist asset paths (100% verified) |
| English / Telugu Structural Parity | 16 page pairs (100% verified) |
| SEO Metadata & Structured Data | 544 pages (100% verified) |
| Response Headers & CSP | 574 response and header checks (100% verified) |

### 5.2 Explicitly Untested Areas (Remaining Out of Scope / Real-World Limits)
In accordance with audit constraints and real-world boundaries, the following areas remain unverified:
1. **Subagent Sandbox Limitation vs. Standalone Playwright Execution:**
   - *Limitation:* The IDE's built-in `browser_subagent` tool failed because its internal sandbox environment lacks outbound internet access to download Playwright browser binaries from the Playwright CDN (`404 Not Found`).
   - *Resolution & Verification:* This was resolved by creating and executing an automated standalone Playwright harness (`audits/browser-test-harness.mjs`) utilizing the local `playwright-core` library and system Google Chrome binary. All automated browser routes (1,088 checks) and all 11 interactive test suites were fully executed and passed with machine-readable telemetry recorded in `audits/browser-test-results-2026-10-15.json`.
2. **Physical Device Touch & Gesture Testing:**
   - Real touch response, momentum scrolling, and virtual keyboard behavior on actual iOS (WebKit) and Android (Blink) devices were not tested on physical hardware.
3. **Screen Reader Vocalization:**
   - Visual and DOM inspection confirmed ARIA attributes (`aria-expanded`, `aria-label`, `aria-controls`, `aria-hidden`, `role="status"`). However, actual speech audio output in macOS VoiceOver, iOS VoiceOver, NVDA, or TalkBack was not recorded.
4. **End-to-End Payment & External Form Submissions:**
   - As mandated by the audit instructions, real forms were not submitted and third-party payment gateways (Razorpay `rzp.io` link) were not transacted.
5. **Real-World Live Google Analytics Reporting:**
   - The GA4 loader script was verified statically and under simulated conditions (`scripts/check-reading-analytics.mjs`), confirming owner opt-out (`mc_analytics=off`). Live dashboard receipt of production hits in Google Analytics was not confirmed in this audit.
6. **Edge CDN Dynamic Rewrites:**
   - While the local Worker handler (`site-server.js`) was tested, edge CDN modifications (such as Cloudflare automatic email obfuscation, Polish, or Rocket Loader) in the live production environment were not tested against live network requests.

---

## 6. Actionable Recommendations Summary

1. **Fix Telugu Homepage Metadata:**
   Update `translations/metadata-new.json` (`te[""]`) to align Title and Description with the updated English "Who are we? / Creator and the Game" theme.
2. **Add Brand Suffix to Telugu Ashtavakra & Understanding God Pages:**
   Append ` | Mind Clarity` to `title` for `ashtavakra-gita` and `understanding-god` under `te` in `translations/metadata-new.json`.
3. **Enhance Language Picker Border Contrast:**
   Slightly darken the dropdown border from `#78978c` to `#6e9084` in `page.css:29` to exceed the 3.0:1 non-text contrast threshold on `--cream`.
4. **Retain Static Build & Strict Security:**
   Continue utilizing `pnpm check` and the zero-React production architecture, which guarantees high security, zero client-side hydration errors, and fast page loads.
