# Tamil, Kannada and Malayalam — 11 October 2026

Added `/ta`, `/kn` and `/ml`, each with all 16 current learning/support pages: 48 new pages and 176 pages overall in 11 languages. Telugu remains available as the existing South Indian language set. This rollout covers the four major South Indian literary languages; it does not claim coverage of every language spoken in southern India.

Each new dictionary includes the 850 source keys used in the existing Telugu dictionary, plus shared interface and metadata strings (894 entries). Drafts used Google Translate on public website copy. Editorial corrections covered the singular shared Creator statement, surrender versus accepting harm, consent and accountability, decisions versus theatrical acting, remembrance, brand preservation and the difference between asking forgiveness and demanding it. Remaining English sentence fragments were translated individually. These are machine-assisted translations with targeted editorial review, not independent native-speaker certification or a claim of exhaustive linguistic review.

The complete English source components are rendered through the strict translation compiler. Page structure, anchors, disclosures, all 70 FAQ questions/answers and FAQ structured data are checked against the English source. Translated navigation, sharing controls, privacy choices, regional browser-language suggestions, reciprocal hreflang links, canonicals, sitemap entries and canonical redirects include the new languages.

Verification:

- Production build: 176 complete pages; 1,575 HTTP route checks; 176 page metadata checks; 1,079 internal links, assets and fragments; 206 security response/header checks passed.
- Native confidence searches `தன்னம்பிக்கை`, `ಆತ್ಮವಿಶ್ವಾಸ`, `ആത്മവിശ്വാസം` returned two relevant answers each in browser checks. Malayalam unknown search returned zero, and clearing restored all 70 answers. Native queries are included in the existing search regression check.
- All 48 new pages checked in the production preview at 320 and 1280 pixel widths: 96 checks, no missing heading or horizontal overflow. Additional 390 pixel home/FAQ checks passed.
- Tamil mobile menu opened with translated navigation; Escape closed it and returned focus to the button.
- Regional language detection (`ta-IN`, `kn-IN`, `ml-IN`), translated practice routes, placeholder preservation and absence of remaining English sentence runs passed.
- The language/search additions bring the progressive enhancement bundle to 12,141 bytes (5.19 KB gzip reported by Vite); its budget is now 13,000 bytes for eleven languages, increased from 12,000. Translation dictionaries are build-time inputs, not downloads required for reading.

Publication is established separately by the successful Sites deployment result. This record establishes local verification, not native-language certification, indexing, traffic or field performance.
