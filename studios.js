// Mind Clarity Interactive Studios (Phase 2 & Phase 3)
// Fully client-side, zero tracking, localized progressive enhancement.

(function() {
  // Phase 2: Viral Clarity Card Studio
  function initCardStudio() {
    const cardEl = document.querySelector('[data-card-studio="true"]');
    if (!cardEl || cardEl.dataset.initialized) return;
    cardEl.dataset.initialized = 'true';

    const lang = document.documentElement.lang || 'en';
    const curatedEn = [
      "We are the Creator. We created this game of experiences and entered it, leaving unrestricted powers behind.",
      "To hate another is to hate yourself. There is no separate 'other' outside.",
      "Recognizing the same Creator in every person dissolves hatred and inspires natural compassion.",
      "Play the game like a game. When you leave the movie theater, you know it was a movie.",
      "A mistake belongs to a changing role. It is not the whole of who you are.",
      "Gold, diamonds, and money are small parts of our creation. They cannot make the Creator larger.",
      "We cannot rewrite the game from inside. But we can change how we meet each scene.",
      "Your freedom stops when my shoulder starts. We are both the Creator.",
      "A lotus in the pond — living within life with inward lightness.",
      "An enlightened person cannot live happily while others suffer — they are part of the same source.",
      "Devotion is respecting the Creator in the living person before you.",
      "Sadness and compassion can be present without losing deeper clarity."
    ];
    const curatedTe = [
      "మనం సృష్టికర్తలం. ఈ అనుభవాల ఆటను మనమే సృష్టించి, ఇందులోకి ప్రవేశించాము.",
      "ఇంకొకరిని ద్వేషించడం అంటే మనల్ని మనం ద్వేషించుకోవడమే. బయట వేరే 'ఇతరులు' ఎవరూ లేరు.",
      "ప్రతి వ్యక్తిలోనూ అదే సృష్టికర్తను గుర్తించడం ద్వేషాన్ని కరిగిస్తుంది, సహజమైన దయను నింపుతుంది.",
      "ఈ జీవితమనే ఆటను క్రీడా స్ఫూర్తితో ఆడు. సినిమా పూర్తయ్యాక అది సినిమా అని ఎలా గుర్తుంచుకుంటావో అలాగే జీవించు.",
      "పొరపాటు అనేది మారుతున్న పాత్రకు చెందుతుంది. అది మీ అసలు గుర్తింపు కాదు.",
      "జీవితమనే కొలనులో తామర పువ్వులా అలౌకికంగా జీవించు.",
      "లోపల నుండి మనం ఆట రూపకల్పనను మార్చలేము. కానీ ప్రతి సన్నివేశాన్ని మనం ఎలా స్వీకరిస్తామో మార్చవచ్చు.",
      "ఎదుటి వ్యక్తిలోని సృష్టికర్తను గౌరవించడమే నిజమైన భక్తి.",
      "ఈ ప్రపంచాన్ని నివసించడానికి ఒక అందమైన ప్రదేశంగా మార్చడమే మీ ముఖ్య లక్ష్యం కావాలి."
    ];
    const curatedHi = [
      "हम ही सृष्टिकर्ता हैं। हमने अनुभवों का यह खेल बनाया और इसमें प्रवेश किया।",
      "किसी दूसरे से नफ़रत करना खुद से नफ़रत करना है। बाहर कोई दूसरा नहीं है।",
      "हर व्यक्ति में उसी सृष्टिकर्ता को पहचानना नफ़रत को पिघला देता है और सहज करुणा जगाता है।",
      "खेल को खेल की तरह खेलो। थिएटर से बाहर आने पर आपको पता होता है कि यह सिर्फ एक फिल्म थी।",
      "गलती किसी बदलते हुए रोल की होती है। वह आपकी पूरी पहचान नहीं है।",
      "कमल की तरह जियो — जीवन में रहते हुए भी भीतर से मुक्त और हल्के।",
      "भीतर से हम खेल के डिज़ाइन को नहीं बदल सकते। लेकिन हम हर दृश्य का सामना कैसे करते हैं, इसे बदल सकते हैं।",
      "सामने वाले व्यक्ति में सृष्टिकर्ता का सम्मान करना ही सच्ची भक्ति है।",
      "आपका मुख्य लक्ष्य इस दुनिया को रहने के लिए एक सुंदर जगह बनाना होना चाहिए।"
    ];
    const curatedByLang = lang === 'te' ? curatedTe : (lang === 'hi' ? curatedHi : curatedEn);

    // Extract core translated quotes directly from the rendered page for 100% localization
    const pageQuotes = [
      document.querySelector('.governing-statement')?.textContent?.trim(),
      document.querySelector('.intro')?.textContent?.trim(),
      ...Array.from(document.querySelectorAll('.story-card p')).map(p => p.textContent?.trim())
    ].filter(Boolean);

    const quotes = Array.from(new Set([...curatedByLang, ...pageQuotes]));

    if (quotes.length === 0) {
      quotes.push('We are the Creator. We created this game of experiences and entered it.');
    }

    let selectedIdx = 0;
    let isStory = false;
    let currentPalette = 'parchment'; // 'parchment' | 'emerald' | 'sunrise' | 'night'

    cardEl.innerHTML = `
      <div class="studio-workspace">
        <div class="studio-controls" role="region" aria-label="Wisdom Card Studio">
          <div class="control-group">
            <span class="control-label">Wisdom Quote</span>
            <select class="studio-select" id="cs-quote-select" aria-label="Choose a teaching quote">
              ${quotes.map((q, i) => `<option value="${i}">"${q.length > 58 ? q.slice(0, 55) + '…' : q}"</option>`).join('')}
            </select>
          </div>
          <div class="control-row">
            <div class="control-group">
              <span class="control-label">Aspect Ratio</span>
              <div class="studio-toggle-group">
                <button type="button" class="studio-btn toggle-active" id="cs-btn-sq">Square 1:1</button>
                <button type="button" class="studio-btn" id="cs-btn-st">Story 9:16</button>
              </div>
            </div>
            <div class="control-group">
              <span class="control-label">Visual Palette</span>
              <div class="studio-toggle-group studio-palette-group">
                <button type="button" class="studio-btn toggle-active" id="cs-btn-p" title="Warm Parchment">Parchment</button>
                <button type="button" class="studio-btn" id="cs-btn-e" title="Sacred Emerald">Emerald</button>
                <button type="button" class="studio-btn" id="cs-btn-s" title="Sunrise Gold">Sunrise</button>
                <button type="button" class="studio-btn" id="cs-btn-n" title="Ocean Night">Night</button>
              </div>
            </div>
          </div>
          <div class="studio-actions">
            <button type="button" class="button studio-action-btn" id="cs-btn-dl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>Download (PNG)</span>
            </button>
            <button type="button" class="button whatsapp-studio-btn studio-action-btn" id="cs-btn-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
              <span>WhatsApp</span>
            </button>
            <button type="button" class="button secondary studio-action-btn" id="cs-btn-cp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy Quote</span>
            </button>
            <button type="button" class="button secondary studio-action-btn" id="cs-btn-sh">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span>Share</span>
            </button>
          </div>
          <p class="studio-status quiet-note" id="cs-status" role="status" aria-live="polite"></p>
        </div>
        <div class="studio-preview-wrapper">
          <canvas class="studio-canvas" id="cs-canvas" aria-label="Preview of wisdom quote card"></canvas>
        </div>
      </div>
    `;

    const canvas = cardEl.querySelector('#cs-canvas');
    const statusMsg = cardEl.querySelector('#cs-status');

    function renderCanvas() {
      const w = 1080;
      const h = isStory ? 1920 : 1080;
      const ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;

      const themes = {
        parchment: {
          bgGrad: ['#FAF8F2', '#F5F0E5', '#EDE5D5'],
          borderOuter: 'rgba(121, 91, 43, 0.35)',
          borderInner: 'rgba(121, 91, 43, 0.18)',
          accent: '#795B2B',
          text: '#183D36',
          footerText: 'rgba(38, 51, 46, 0.72)',
          footerLink: '#795B2B'
        },
        emerald: {
          bgGrad: ['#102A24', '#163B32', '#0C201C'],
          borderOuter: 'rgba(212, 175, 55, 0.45)',
          borderInner: 'rgba(212, 175, 55, 0.20)',
          accent: '#D4AF37',
          text: '#F5F5F0',
          footerText: 'rgba(245, 245, 240, 0.72)',
          footerLink: '#D4AF37'
        },
        sunrise: {
          bgGrad: ['#FFFDF2', '#FDF2D6', '#F8E6B8'],
          borderOuter: 'rgba(184, 134, 11, 0.45)',
          borderInner: 'rgba(184, 134, 11, 0.20)',
          accent: '#B8860B',
          text: '#2A1D0D',
          footerText: 'rgba(56, 42, 24, 0.75)',
          footerLink: '#B8860B'
        },
        night: {
          bgGrad: ['#0D1B2A', '#1B263B', '#08111D'],
          borderOuter: 'rgba(100, 255, 218, 0.45)',
          borderInner: 'rgba(100, 255, 218, 0.20)',
          accent: '#64FFDA',
          text: '#F0F4F8',
          footerText: 'rgba(224, 230, 237, 0.72)',
          footerLink: '#64FFDA'
        }
      };
      const theme = themes[currentPalette] || themes.parchment;

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, theme.bgGrad[0]);
      bg.addColorStop(0.5, theme.bgGrad[1]);
      bg.addColorStop(1, theme.bgGrad[2]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Borders
      ctx.strokeStyle = theme.borderOuter;
      ctx.lineWidth = 4;
      ctx.strokeRect(50, 50, w - 100, h - 100);

      ctx.strokeStyle = theme.borderInner;
      ctx.lineWidth = 1;
      ctx.strokeRect(62, 62, w - 124, h - 124);

      // Lotus Emblem
      ctx.save();
      const lotusY = isStory ? 260 : 160;
      ctx.translate(w / 2, lotusY);
      ctx.fillStyle = theme.accent;
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.ellipse(i * 20, -16, 10, 26, (i * Math.PI) / 12, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Brand Header
      ctx.fillStyle = theme.accent;
      ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      const headerY = isStory ? 340 : 230;
      ctx.fillText('MIND CLARITY · UDAY KUMAR', w / 2, headerY);

      // Quote Body
      const quoteText = quotes[selectedIdx] || quotes[0];
      const fontSize = isStory ? (quoteText.length > 90 ? 42 : 48) : (quoteText.length > 90 ? 36 : 42);
      ctx.fillStyle = theme.text;
      ctx.font = `italic 400 ${fontSize}px Georgia, "Noto Serif", serif`;

      const maxW = w - 240;
      const words = quoteText.split(/\s+/);
      const lines = [];
      let currentLine = '';

      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
        if (ctx.measureText(testLine).width > maxW && currentLine) {
          lines.push(currentLine);
          currentLine = words[i];
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      const lineHeight = fontSize * 1.55;
      const totalH = lines.length * lineHeight;
      const startY = (h / 2) - (totalH / 2) + 20;

      for (let l = 0; l < lines.length; l++) {
        ctx.fillText(lines[l], w / 2, startY + (l * lineHeight));
      }

      // Footer
      const footerY = isStory ? h - 220 : h - 140;
      ctx.fillStyle = theme.footerText;
      ctx.font = '400 22px Georgia, serif';
      ctx.fillText('We are the Creator. Remembering the shared source in all.', w / 2, footerY);

      ctx.fillStyle = theme.footerLink;
      ctx.font = '600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('mindclarity.co.in', w / 2, footerY + 40);
    }

    cardEl.querySelector('#cs-quote-select').onchange = (e) => {
      selectedIdx = parseInt(e.target.value, 10);
      renderCanvas();
    };

    const sqBtn = cardEl.querySelector('#cs-btn-sq');
    const stBtn = cardEl.querySelector('#cs-btn-st');
    sqBtn.onclick = () => {
      isStory = false;
      sqBtn.classList.add('toggle-active');
      stBtn.classList.remove('toggle-active');
      renderCanvas();
    };
    stBtn.onclick = () => {
      isStory = true;
      stBtn.classList.add('toggle-active');
      sqBtn.classList.remove('toggle-active');
      renderCanvas();
    };

    const paletteBtns = {
      parchment: cardEl.querySelector('#cs-btn-p'),
      emerald: cardEl.querySelector('#cs-btn-e'),
      sunrise: cardEl.querySelector('#cs-btn-s'),
      night: cardEl.querySelector('#cs-btn-n')
    };
    Object.entries(paletteBtns).forEach(([pal, btn]) => {
      if (!btn) return;
      btn.onclick = () => {
        currentPalette = pal;
        Object.values(paletteBtns).forEach(b => b.classList.remove('toggle-active'));
        btn.classList.add('toggle-active');
        renderCanvas();
      };
    });

    cardEl.querySelector('#cs-btn-dl').onclick = () => {
      try {
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = `mind-clarity-${isStory ? 'story' : 'square'}-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        statusMsg.textContent = 'Card downloaded successfully!';
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      } catch (err) {
        statusMsg.textContent = 'Right-click or hold the card image to save.';
      }
    };

    cardEl.querySelector('#cs-btn-wa').onclick = () => {
      const q = quotes[selectedIdx] || quotes[0];
      const text = `"${q}"\n— Uday Kumar (Mind Clarity)\n\nhttps://mindclarity.co.in/`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      statusMsg.textContent = 'Opened in WhatsApp!';
      setTimeout(() => { statusMsg.textContent = ''; }, 3500);
    };

    cardEl.querySelector('#cs-btn-cp').onclick = async () => {
      const q = quotes[selectedIdx] || quotes[0];
      const text = `"${q}"\n— Uday Kumar (Mind Clarity)\nhttps://mindclarity.co.in/`;
      try {
        await navigator.clipboard.writeText(text);
        statusMsg.textContent = 'Quote copied to clipboard!';
        setTimeout(() => { statusMsg.textContent = ''; }, 3500);
      } catch (err) {
        statusMsg.textContent = 'Select and copy the quote above.';
      }
    };

    cardEl.querySelector('#cs-btn-sh').onclick = () => {
      if (canvas.toBlob && navigator.share) {
        canvas.toBlob(blob => {
          if (!blob) return;
          const file = new File([blob], 'mind-clarity.png', { type: 'image/png' });
          navigator.share({
            title: 'Mind Clarity Wisdom Card',
            text: `"${quotes[selectedIdx]}" — Uday Kumar`,
            url: 'https://mindclarity.co.in/',
            files: [file]
          }).catch(() => {});
        }, 'image/png');
      } else {
        cardEl.querySelector('#cs-btn-dl').click();
      }
    };

    renderCanvas();
  }

  // Phase 3: Interactive Practice Studio
  function initPracticeStudio() {
    const pracEl = document.querySelector('[data-practice-studio="true"]');
    if (!pracEl || pracEl.dataset.initialized) return;
    pracEl.dataset.initialized = 'true';

    // Extract real everyday scenes already localized in HTML
    const cases = Array.from(document.querySelectorAll('#everyday-scenes details')).map(d => ({
      title: d.querySelector('summary')?.textContent?.trim() || 'Everyday Scene',
      paragraphs: Array.from(d.querySelectorAll('p')).map(p => p.textContent?.trim()).filter(Boolean)
    })).filter(c => c.paragraphs.length >= 2);

    if (cases.length === 0) return;

    let activeCase = 0;

    function renderPractice() {
      const item = cases[activeCase];
      const savedNote = sessionStorage.getItem(`mindclarity_note_${activeCase}`) || '';

      pracEl.innerHTML = `
        <div class="practice-studio-wrapper">
          <div class="scenario-selector-bar" role="tablist" aria-label="Everyday difficulty scenarios">
            ${cases.map((c, idx) => `
              <button type="button" role="tab" class="scenario-tab ${idx === activeCase ? 'tab-active' : ''}" data-idx="${idx}" aria-selected="${idx === activeCase}">
                <span class="tab-number">0${idx + 1}</span>
                <span class="tab-text">${c.title}</span>
              </button>
            `).join('')}
          </div>

          <div class="scenario-display-card" role="tabpanel">
            <div class="scenario-header">
              <span class="scenario-eyebrow">Interactive Contemplation</span>
              <h3 class="scenario-title">${item.title}</h3>
            </div>

            <div class="three-pillar-flow">
              <div class="pillar-box pillar-role">
                <span class="pillar-tag">1. The Role's Scene</span>
                <p>${item.paragraphs[0] || ''}</p>
              </div>
              <div class="pillar-arrow" aria-hidden="true">→</div>
              <div class="pillar-box pillar-creator">
                <span class="pillar-tag">2. Creator Remembrance</span>
                <p>${item.paragraphs[1] || ''}</p>
              </div>
              <div class="pillar-arrow" aria-hidden="true">→</div>
              <div class="pillar-box pillar-action">
                <span class="pillar-tag">3. Grounded Action</span>
                <p>${item.paragraphs[2] || item.paragraphs[1] || ''}</p>
              </div>
            </div>

            <div class="reflection-scratchpad">
              <label for="practice-note-textarea" class="scratchpad-label">
                <strong>Private Reflection:</strong> What does remembering the shared Creator reveal in this scene?
              </label>
              <textarea id="practice-note-textarea" class="scratchpad-textarea" rows="3" placeholder="Write your quiet reflection here (saved privately in your browser)...">${savedNote}</textarea>
              <div class="scratchpad-footer">
                <span class="scratchpad-privacy-note">🔒 Private to your browser · Never sent to any server</span>
                <button type="button" class="button secondary small-btn" id="practice-note-clear">Clear Note</button>
              </div>
            </div>
          </div>
        </div>
      `;

      pracEl.querySelectorAll('.scenario-tab').forEach(btn => {
        btn.onclick = () => {
          activeCase = parseInt(btn.dataset.idx, 10);
          renderPractice();
        };
      });

      const noteInput = pracEl.querySelector('#practice-note-textarea');
      if (noteInput) {
        noteInput.oninput = (e) => {
          sessionStorage.setItem(`mindclarity_note_${activeCase}`, e.target.value);
        };
      }

      const clearBtn = pracEl.querySelector('#practice-note-clear');
      if (clearBtn) {
        clearBtn.onclick = () => {
          sessionStorage.removeItem(`mindclarity_note_${activeCase}`);
          if (noteInput) noteInput.value = '';
        };
      }
    }

    renderPractice();
  }

  initCardStudio();
  initPracticeStudio();
})();
