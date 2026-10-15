import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const screenshotsDir = path.join(root, 'audits/browser-screenshots');
mkdirSync(screenshotsDir, { recursive: true });

const playwrightPath = '/Users/udaykumarpinninti/.local/share/mind-clarity-browser-tests/node_modules/playwright-core/index.mjs';
const { chromium } = await import(playwrightPath);

const origin = 'http://127.0.0.1:4173';
const sitemap = readFileSync(path.join(root, 'dist/sitemap.xml'), 'utf8');
const canonicalPaths = [...sitemap.matchAll(/<loc>https:\/\/mindclarity\.co\.in([^<]*)<\/loc>/g)].map(m => m[1] || '/');

console.log(`Loaded ${canonicalPaths.length} canonical routes from sitemap.xml.`);

const results = {
  timestamp: new Date().toISOString(),
  origin,
  browser: 'Google Chrome (Playwright Chromium)',
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  totalRoutes: canonicalPaths.length,
  stats: {
    routeChecksDesktop: 0,
    routeChecksMobile: 0,
    routeChecksPassed: 0,
    routeChecksFailed: 0,
    interactionChecks: 0,
    interactionPassed: 0,
    interactionFailed: 0,
    totalConsoleErrors: 0,
    totalPageErrors: 0,
    totalFailedRequests: 0,
  },
  failures: [],
  consoleErrors: [],
  pageErrors: [],
  failedRequests: [],
  interactionResults: [],
  screenshots: []
};

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
});

console.log('Chromium browser instance launched successfully.');

// Helper to attach error listeners
function monitorPage(page, label = '') {
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const entry = { label, url: page.url(), text: msg.text(), location: msg.location() };
      results.consoleErrors.push(entry);
      results.stats.totalConsoleErrors++;
    }
  });
  page.on('pageerror', err => {
    const entry = { label, url: page.url(), message: err.message, stack: err.stack };
    results.pageErrors.push(entry);
    results.stats.totalPageErrors++;
  });
  page.on('requestfailed', req => {
    // Ignore aborted analytics or expected connection cancellations
    const url = req.url();
    const failure = req.failure()?.errorText || 'Unknown error';
    if (!url.includes('google-analytics') && !url.includes('googletagmanager')) {
      const entry = { label, pageUrl: page.url(), requestUrl: url, failure };
      results.failedRequests.push(entry);
      results.stats.totalFailedRequests++;
    }
  });
}

// -------------------------------------------------------------
// 1. ROUTE CRAWL TEST (All 544 routes at Desktop and Mobile)
// -------------------------------------------------------------
console.log('\n--- Step 1: Automated Route Crawl across all canonical routes ---');

// Batch route testing to be efficient yet thorough
const BATCH_SIZE = 8;

async function testRouteBatch(routes, viewport, modeLabel) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  monitorPage(page, modeLabel);

  for (const route of routes) {
    const targetUrl = `${origin}${route}`;
    if (viewport.width === 1280) results.stats.routeChecksDesktop++;
    else results.stats.routeChecksMobile++;

    try {
      const response = await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
      assert.ok(response, `${targetUrl}: No response received`);
      assert.equal(response.status(), 200, `${targetUrl}: HTTP status ${response.status()}`);

      const check = await page.evaluate(() => {
        const header = document.querySelector('.site-header');
        const main = document.querySelector('main#main-content');
        const h1 = document.querySelectorAll('h1');
        const scrollW = document.documentElement.scrollWidth;
        const clientW = document.documentElement.clientWidth;
        return {
          hasHeader: !!header,
          hasMain: !!main,
          h1Count: h1.length,
          h1Text: h1[0]?.textContent?.trim() || '',
          scrollW,
          clientW,
          hasOverflow: scrollW > clientW
        };
      });

      assert.ok(check.hasHeader, `${targetUrl}: missing header.site-header`);
      assert.ok(check.hasMain, `${targetUrl}: missing main#main-content`);
      assert.equal(check.h1Count, 1, `${targetUrl}: expected exactly 1 h1, found ${check.h1Count}`);
      assert.ok(check.h1Text.length > 0, `${targetUrl}: h1 is empty`);
      assert.equal(check.hasOverflow, false, `${targetUrl}: horizontal overflow detected (${check.scrollW}px > ${check.clientW}px)`);

      results.stats.routeChecksPassed++;
    } catch (err) {
      results.stats.routeChecksFailed++;
      results.failures.push({
        type: 'route_check',
        mode: modeLabel,
        route,
        error: err.message
      });
      console.error(`FAIL [${modeLabel}] ${route}: ${err.message}`);
    }
  }

  await context.close();
}

console.log('Testing desktop viewports (1280x800)...');
for (let i = 0; i < canonicalPaths.length; i += BATCH_SIZE) {
  const batch = canonicalPaths.slice(i, i + BATCH_SIZE);
  await testRouteBatch(batch, { width: 1280, height: 800 }, 'desktop');
  if ((i + BATCH_SIZE) % 80 === 0 || i + BATCH_SIZE >= canonicalPaths.length) {
    console.log(`  Desktop progress: ${Math.min(i + BATCH_SIZE, canonicalPaths.length)} / ${canonicalPaths.length}`);
  }
}

console.log('Testing mobile viewports (375x812)...');
for (let i = 0; i < canonicalPaths.length; i += BATCH_SIZE) {
  const batch = canonicalPaths.slice(i, i + BATCH_SIZE);
  await testRouteBatch(batch, { width: 375, height: 812 }, 'mobile');
  if ((i + BATCH_SIZE) % 80 === 0 || i + BATCH_SIZE >= canonicalPaths.length) {
    console.log(`  Mobile progress: ${Math.min(i + BATCH_SIZE, canonicalPaths.length)} / ${canonicalPaths.length}`);
  }
}

console.log(`Route Crawl Completed:
  Desktop checked: ${results.stats.routeChecksDesktop}
  Mobile checked: ${results.stats.routeChecksMobile}
  Passed: ${results.stats.routeChecksPassed}
  Failed: ${results.stats.routeChecksFailed}`);

// -------------------------------------------------------------
// 2. INTERACTION & ACCESSIBILITY TESTS
// -------------------------------------------------------------
console.log('\n--- Step 2: Interactive Browser Testing ---');

async function runInteractionTest(name, fn) {
  results.stats.interactionChecks++;
  try {
    await fn();
    results.stats.interactionPassed++;
    results.interactionResults.push({ name, status: 'PASSED' });
    console.log(`  ✓ ${name}`);
  } catch (err) {
    results.stats.interactionFailed++;
    results.interactionResults.push({ name, status: 'FAILED', error: err.message });
    results.failures.push({ type: 'interaction', name, error: err.message });
    console.error(`  ✗ ${name}: ${err.message}`);
  }
}

// 2.1 Mobile Menu Open / Close & Escape Key Focus Restoration (English)
await runInteractionTest('Mobile Menu Open/Close & Escape Focus (English)', async () => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-menu-en');

  await page.goto(`${origin}/`, { waitUntil: 'load' });
  const button = page.locator('.menu-toggle');
  await assert.rejects(async () => {
    // Verify button is rendered and enhanced
    const isVisible = await button.isVisible();
    assert.ok(isVisible, 'Menu toggle button is visible');
  }).catch(() => {}); // handled by assertion below

  assert.ok(await button.isVisible(), 'Menu toggle button is visible on mobile');
  assert.equal(await button.getAttribute('aria-expanded'), 'false');
  assert.equal(await button.textContent(), 'Menu');

  // Click to open menu
  await button.click();
  assert.equal(await button.getAttribute('aria-expanded'), 'true');
  assert.equal(await button.textContent(), 'Close menu');
  assert.ok(await page.locator('nav#primary-navigation.is-open').isVisible(), 'Navigation drawer is open');

  const menuShot = path.join(screenshotsDir, 'mobile-menu-open-en.png');
  await page.screenshot({ path: menuShot });
  results.screenshots.push('mobile-menu-open-en.png');

  // Press Escape to close menu
  await page.keyboard.press('Escape');
  assert.equal(await button.getAttribute('aria-expanded'), 'false');
  assert.equal(await button.textContent(), 'Menu');
  assert.equal(await page.locator('nav#primary-navigation').isVisible(), false, 'Navigation drawer is closed');

  // Verify focus returned to menu-toggle button
  const focusedTag = await page.evaluate(() => document.activeElement?.className);
  assert.ok(focusedTag.includes('menu-toggle'), `Focus restored to menu-toggle, got: ${focusedTag}`);

  await context.close();
});

// 2.2 Mobile Menu Open / Close & Escape Key Focus Restoration (Telugu)
await runInteractionTest('Mobile Menu Open/Close & Escape Focus (Telugu)', async () => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-menu-te');

  await page.goto(`${origin}/te`, { waitUntil: 'load' });
  const button = page.locator('.menu-toggle');
  assert.ok(await button.isVisible(), 'Telugu menu button is visible on mobile');
  assert.equal(await button.getAttribute('aria-expanded'), 'false');
  assert.equal(await button.textContent(), 'మెను');

  // Click to open Telugu menu
  await button.click();
  assert.equal(await button.getAttribute('aria-expanded'), 'true');
  assert.equal(await button.textContent(), 'మెనును మూసివేయండి');
  assert.ok(await page.locator('nav#primary-navigation.is-open').isVisible(), 'Telugu nav drawer is open');

  const menuTeShot = path.join(screenshotsDir, 'mobile-menu-open-te.png');
  await page.screenshot({ path: menuTeShot });
  results.screenshots.push('mobile-menu-open-te.png');

  // Press Escape to close
  await page.keyboard.press('Escape');
  assert.equal(await button.getAttribute('aria-expanded'), 'false');
  assert.equal(await button.textContent(), 'మెను');

  // Verify focus returned
  const focusedTag = await page.evaluate(() => document.activeElement?.className);
  assert.ok(focusedTag.includes('menu-toggle'), `Focus restored to menu-toggle, got: ${focusedTag}`);

  await context.close();
});

// 2.3 Keyboard Tab Navigation & Skip Link
await runInteractionTest('Keyboard Tab & Skip Link Navigation', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-skip-link');

  await page.goto(`${origin}/`, { waitUntil: 'load' });

  // Tab once into the document
  await page.keyboard.press('Tab');
  const activeClass = await page.evaluate(() => document.activeElement?.className);
  assert.ok(activeClass.includes('skip-link'), `First Tab focuses .skip-link, got: ${activeClass}`);

  // Take screenshot of focused skip link
  const skipShot = path.join(screenshotsDir, 'skip-link-focused.png');
  await page.screenshot({ path: skipShot });
  results.screenshots.push('skip-link-focused.png');

  // Press Enter to activate skip link
  await page.keyboard.press('Enter');
  const activeMain = await page.evaluate(() => document.activeElement?.id);
  assert.equal(activeMain, 'main-content', `Skip link activates and moves focus to #main-content`);

  await context.close();
});

// 2.4 Native Details Disclosure Toggling (Home page)
await runInteractionTest('Native Details Disclosure Toggling', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-disclosure');

  await page.goto(`${origin}/`, { waitUntil: 'load' });
  const details = page.locator('#why-no-powers details').first();
  assert.equal(await details.getAttribute('open'), null, 'Disclosure is initially closed');

  // Click summary
  await details.locator('summary').click();
  assert.equal(await details.getAttribute('open'), '', 'Disclosure expands on click');

  // Click again to close
  await details.locator('summary').click();
  assert.equal(await details.getAttribute('open'), null, 'Disclosure closes on second click');

  await context.close();
});

// 2.5 FAQ Deep-Link Auto-Expansion (English & Telugu)
await runInteractionTest('FAQ Deep-Link Auto-Expansion (English: #life-confidence)', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-faq-deeplink-en');

  await page.goto(`${origin}/faq#life-confidence`, { waitUntil: 'load' });
  const question = page.locator('details#life-confidence');
  assert.ok(await question.isVisible(), 'Targeted FAQ question is visible');
  assert.equal(await question.getAttribute('open'), '', 'Targeted question is auto-expanded by hash');

  const faqShotEn = path.join(screenshotsDir, 'faq-deeplink-expanded-en.png');
  await page.screenshot({ path: faqShotEn });
  results.screenshots.push('faq-deeplink-expanded-en.png');

  // Hash change to #life-thoughts
  await page.evaluate(() => { window.location.hash = '#life-thoughts'; });
  const secondQuestion = page.locator('details#life-thoughts');
  assert.equal(await secondQuestion.getAttribute('open'), '', 'Second question expands on hashchange');

  await context.close();
});

await runInteractionTest('FAQ Deep-Link Auto-Expansion (Telugu: #life-confidence)', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-faq-deeplink-te');

  await page.goto(`${origin}/te/faq#life-confidence`, { waitUntil: 'load' });
  const question = page.locator('details#life-confidence');
  assert.ok(await question.isVisible(), 'Targeted Telugu FAQ question is visible');
  assert.equal(await question.getAttribute('open'), '', 'Telugu question is auto-expanded by hash');

  const faqShotTe = path.join(screenshotsDir, 'faq-deeplink-expanded-te.png');
  await page.screenshot({ path: faqShotTe });
  results.screenshots.push('faq-deeplink-expanded-te.png');

  await context.close();
});

// 2.6 Language Switching via Dropdown & Preference Persistence
await runInteractionTest('Language Switching via Dropdown & Storage', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-lang-switch');

  await page.goto(`${origin}/practice`, { waitUntil: 'load' });
  assert.equal(await page.locator('#language-select').inputValue(), 'en');

  // Change language to Telugu
  await page.selectOption('#language-select', 'te');
  await page.waitForURL(`${origin}/te/practice`);

  assert.equal(page.url(), `${origin}/te/practice`, 'URL navigated to /te/practice');
  assert.equal(await page.locator('#language-select').inputValue(), 'te');

  // Verify persistence in localStorage
  const savedLang = await page.evaluate(() => localStorage.getItem('mind-clarity-language'));
  assert.equal(savedLang, 'te', 'Selected language stored in localStorage');

  await context.close();
});

// 2.7 Browser Language Suggestion Banner
await runInteractionTest('Browser Language Suggestion Banner (Telugu browser on English URL)', async () => {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    locale: 'te-IN'
  });
  const page = await context.newPage();
  monitorPage(page, 'interaction-lang-suggestion');

  await page.goto(`${origin}/`, { waitUntil: 'load' });
  const suggestion = page.locator('#language-suggestion');
  assert.equal(await suggestion.isHidden(), false, 'Language suggestion banner is shown');
  const suggestionText = await suggestion.textContent();
  assert.ok(suggestionText.includes('తెలుగు'), `Suggestion banner offers Telugu, got: ${suggestionText}`);

  const link = suggestion.locator('a');
  assert.equal(await link.getAttribute('href'), '/te', 'Suggestion links to /te');

  await context.close();
});

// 2.8 Privacy Page Analytics Controls & Status Updates
await runInteractionTest('Privacy Page Analytics Opt-Out and Reset Controls', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-privacy-analytics');

  // Initial visit: allowed
  await page.goto(`${origin}/privacy`, { waitUntil: 'load' });
  const status = page.locator('#analytics-choice-status');
  assert.ok(await status.isVisible());
  assert.equal(await status.textContent(), 'Preference: analytics allowed.');

  // Opt-out via URL parameter
  await page.goto(`${origin}/privacy?mc_analytics=off#analytics-preferences`, { waitUntil: 'load' });
  const disabledValue = await page.evaluate(() => localStorage.getItem('mc-analytics-disabled'));
  assert.equal(disabledValue, '1', 'mc-analytics-disabled set in localStorage');
  assert.equal(await status.textContent(), 'Preference: analytics disabled.');

  const privacyShot = path.join(screenshotsDir, 'privacy-optout-status.png');
  await page.screenshot({ path: privacyShot });
  results.screenshots.push('privacy-optout-status.png');

  // Reset to allowed via URL parameter
  await page.goto(`${origin}/privacy?mc_analytics=on#analytics-preferences`, { waitUntil: 'load' });
  const restoredValue = await page.evaluate(() => localStorage.getItem('mc-analytics-disabled'));
  assert.equal(restoredValue, null, 'mc-analytics-disabled removed from localStorage');
  assert.equal(await status.textContent(), 'Preference: analytics allowed.');

  await context.close();
});

// 2.9 Representative RTL Routes (Arabic & Urdu) Layout Check
await runInteractionTest('Representative RTL Routes (Arabic /ar & Urdu /ur)', async () => {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  monitorPage(page, 'interaction-rtl');

  for (const [code, slug] of [['ar', '/ar'], ['ur', '/ur']]) {
    await page.goto(`${origin}${slug}`, { waitUntil: 'load' });
    const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
    assert.equal(dir, 'rtl', `${slug} sets html[dir="rtl"]`);

    // Verify LTR isolation for numbers/brands
    const brandDir = await page.evaluate(() => getComputedStyle(document.querySelector('.brand')).direction);
    assert.equal(brandDir, 'ltr', `${slug} keeps brand in LTR`);

    const shotName = `desktop-home-${code}.png`;
    await page.screenshot({ path: path.join(screenshotsDir, shotName) });
    results.screenshots.push(shotName);
  }

  await context.close();
});

// 2.10 High-Resolution Responsive Viewports
await runInteractionTest('Visual Renderings (Desktop & Mobile for English & Telugu)', async () => {
  for (const [lang, pathSuffix] of [['en', ''], ['te', 'te']]) {
    // Desktop 1280x800
    const dCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const dPage = await dCtx.newPage();
    await dPage.goto(`${origin}/${pathSuffix}`, { waitUntil: 'load' });
    const dShot = `desktop-home-${lang}.png`;
    await dPage.screenshot({ path: path.join(screenshotsDir, dShot) });
    results.screenshots.push(dShot);
    await dCtx.close();

    // Mobile 375x812
    const mCtx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const mPage = await mCtx.newPage();
    await mPage.goto(`${origin}/${pathSuffix}`, { waitUntil: 'load' });
    const mShot = `mobile-home-${lang}.png`;
    await mPage.screenshot({ path: path.join(screenshotsDir, mShot) });
    results.screenshots.push(mShot);
    await mCtx.close();
  }
});

await browser.close();

// Save Machine-Readable Output
const jsonPath = path.join(root, 'audits/browser-test-results-2026-10-15.json');
writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf8');

console.log(`\n========================================`);
console.log(`BROWSER AUDIT COMPLETE!`);
console.log(`Routes Checked: ${results.stats.routeChecksDesktop} (Desktop) + ${results.stats.routeChecksMobile} (Mobile) = ${results.stats.routeChecksDesktop + results.stats.routeChecksMobile}`);
console.log(`Route Check Passes: ${results.stats.routeChecksPassed}`);
console.log(`Route Check Failures: ${results.stats.routeChecksFailed}`);
console.log(`Interaction Checks: ${results.stats.interactionChecks} (Passed: ${results.stats.interactionPassed}, Failed: ${results.stats.interactionFailed})`);
console.log(`Console Errors Captured: ${results.stats.totalConsoleErrors}`);
console.log(`Page Errors Captured: ${results.stats.totalPageErrors}`);
console.log(`Failed Requests: ${results.stats.totalFailedRequests}`);
console.log(`Machine-readable output saved to: ${jsonPath}`);
console.log(`Screenshots saved to: ${screenshotsDir}`);
console.log(`========================================\n`);
