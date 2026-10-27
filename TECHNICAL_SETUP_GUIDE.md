# Mind Clarity Website Setup & Deployment Guide

## Live Domains
- **Live URLs:** https://mindclarity.co.in/ and https://www.mindclarity.co.in/
- **Domain Registrar:** Wix (annual domain renewal only; nameservers pointed to Cloudflare).
- **Languages:** 18 languages supported (English /, Hindi /hi, Gujarati /gu, Telugu /te, etc.).
- **Canonical Domain:** https://mindclarity.co.in/

## Local Mac Mini Project
- **Local Directory:** /Users/udaykumarpinninti/Documents/ChatGPT/Mind Clarity Website
- **Runtime:** Node.js (v24+) and npm.
- **Launcher Shortcut:** Open Gemini.command launches local Gemini CLI at that directory.

## GitHub Version Control
- **Repository:** https://github.com/uday0747/mind-clarity-site
- **Branch:** main (tracked as github/main)
- **Authentication:** GitHub Personal Access Token saved in macOS Keychain for user uday0747.

## Cloudflare Pages Hosting & Edge Routing
- **Project Name:** mind-clarity-site (origin: https://mind-clarity-site.pages.dev/)
- **Custom Domains Registered:** Both mindclarity.co.in and www.mindclarity.co.in are registered and Active with automatic SSL.
- **DNS Records in Cloudflare:**
  - CNAME for www points to mind-clarity-site.pages.dev (Proxied).
  - CNAME for @ (apex) points to mind-clarity-site.pages.dev with CNAME Flattening (Proxied).
  - Old OpenAI/ChatGPT Sites A records (172.66.3.26, 162.159.143.30) were deleted.

## SEO, Search Engine & Crawl Rules
- **Homepage Title:** Mind Clarity | Uday Kumar's Spiritual Philosophy · Who Are We? (configured in index.html).
- **Robots Directives:** robots.txt has Disallow: /privacy and Disallow: /*/privacy to focus crawl budget on core teachings.
- **Sitemaps & Pings:**
  - Google Search Console: sitemap.xml submitted with Success status.
  - IndexNow: scripts/submit-indexnow.mjs pings 555+ URLs to Bing/Naver.

## Daily Publishing Command
From the project folder in Mac Mini Terminal, run:
npm run deploy

This automatically compiles 544 static pages, removes dist/server to comply with Cloudflare size limits, deploys directly to Cloudflare Pages production (--branch main), commits and pushes changes to GitHub, and submits updated URLs to IndexNow.
