// Mind Clarity Interactive Studios (Phase 2 & Phase 3)
// Fully client-side, zero tracking, localized progressive enhancement.

(function() {
  // Phase 2: Viral Clarity Card Studio
  function initCardStudio() {
    const cardEls = document.querySelectorAll('[data-card-studio="true"]');
    if (!cardEls || cardEls.length === 0) return;
    cardEls.forEach(cardEl => {
      if (cardEl.dataset.initialized) return;
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
      "Sadness and compassion can be present without losing deeper clarity.",
      "Recognize the Self in all beings and all beings in the Self.",
      "Like an ocean unaffected by the rising and falling of waves, remain steady in who you are.",
      "In the Creator we live, move, and have our being. We share the same source."
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
      "ఈ ప్రపంచాన్ని నివసించడానికి ఒక అందమైన ప్రదేశంగా మార్చడమే మీ ముఖ్య లక్ష్యం కావాలి.",
      "అన్ని ప్రాణులలోని ఆత్మను, ఆత్మలోని అన్ని ప్రాణులను గుర్తించండి.",
      "తరంగాల ఒడిదుడుకులకు చలించని సముద్రంలా మీ అంతరంగంలో స్థిరంగా ఉండండి."
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
      "आपका मुख्य लक्ष्य इस दुनिया को रहने के लिए एक सुंदर जगह बनाना होना चाहिए।",
      "सभी प्राणियों में स्वयं को और स्वयं में सभी प्राणियों को पहचानें।",
      "लहरों के उठने-गिरने से अप्रभावित समुद्र की तरह अपने भीतर स्थिर रहें।"
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
                <button type="button" class="studio-btn toggle-active" id="cs-btn-sq">Square (Post · 1:1)</button>
                <button type="button" class="studio-btn" id="cs-btn-st">Story / WhatsApp Status (9:16)</button>
              </div>
            </div>
          </div>
          <div class="control-group">
            <span class="control-label">Visual Palette (4 Themes)</span>
            <div class="studio-toggle-group studio-palette-group">
              <button type="button" class="studio-btn toggle-active" id="cs-btn-p" title="Warm Parchment">Warm Parchment</button>
              <button type="button" class="studio-btn" id="cs-btn-e" title="Sacred Emerald">Sacred Emerald</button>
              <button type="button" class="studio-btn" id="cs-btn-s" title="Sunrise Gold">Sunrise Gold</button>
              <button type="button" class="studio-btn" id="cs-btn-n" title="Ocean Night">Ocean Night</button>
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
      const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
      const text = `"${q}"\n— Uday Kumar (Mind Clarity)\n\n${shareUrl}`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      statusMsg.textContent = 'Opened in WhatsApp!';
      setTimeout(() => { statusMsg.textContent = ''; }, 3500);
    };

    cardEl.querySelector('#cs-btn-cp').onclick = async () => {
      const q = quotes[selectedIdx] || quotes[0];
      const shareUrl = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : 'https://mindclarity.co.in/';
      const text = `"${q}"\n— Uday Kumar (Mind Clarity)\n${shareUrl}`;
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
    });
  }

  // Phase 3: Interactive Practice Studio
  function initPracticeStudio() {
    const pracEl = document.querySelector('[data-practice-studio="true"]');
    if (!pracEl || pracEl.dataset.initialized) return;
    pracEl.dataset.initialized = 'true';

    const lang = document.documentElement.lang || 'en';
    const journeyDaysEn = [
      {
        title: "Day 1 · Who am I? (Curiosity)",
        paragraphs: [
          "You are rushing through your day. The demands of work, family, and expectations press in. You feel defined entirely by whether you succeed or fail in these tasks.",
          "These roles are scenes in a game. You are the Creator who created this game of experiences and entered it. The roles change and pass, but the Creator who experiences them remains untouched.",
          "Take three slow breaths. Feel your feet on the ground. When you speak to the next person, remember that you are both the Creator playing different scenes."
        ]
      },
      {
        title: "Day 2 · The Game (Design & Acceptance)",
        paragraphs: [
          "Something does not go your way today. A plan falls through, an opportunity is missed, or someone cancels. Frustration and resistance arise immediately.",
          "Having designed the game before entering, we cannot change its design from inside. Resentment comes from demanding control over the unfolding design.",
          "Notice the frustration without fighting it. Do what is practically useful in the scene, and release the demand that life must follow your script."
        ]
      },
      {
        title: "Day 3 · The Roles (Separating Mistake from Identity)",
        paragraphs: [
          "You made a mistake, forgot a commitment, or stumbled. A harsh inner voice says: 'You are a failure. You never get it right.'",
          "A mistake belongs to a changing role. It is not the whole of who you are. The Creator who designed the game included mistakes, forgetting, and learning.",
          "Acknowledge the mistake plainly and repair it practically. Release the self-condemnation; it serves no one and only contracts your spirit."
        ]
      },
      {
        title: "Day 4 · The Other Person (Dissolving Hatred)",
        paragraphs: [
          "Someone criticizes you, disagrees sharply, or behaves selfishly. Your mind immediately labels them an opponent or adversary.",
          "To hate another is to hate yourself. There is no separate 'other' outside. The same Creator who animates your breath sits within them, playing a different role.",
          "Set healthy practical boundaries where needed, but hold no inward hatred. Realize: 'Your freedom stops where my shoulder starts; we are both the Creator.'",
        ]
      },
      {
        title: "Day 5 · The Movie (Feeling Without Getting Absorbed)",
        paragraphs: [
          "A sudden surge of grief, anxiety, or intoxicating praise overtakes you. It feels all-consuming, as if this moment is all that exists.",
          "When you leave a movie theater, you know it was a movie. Experience every scene with complete sincerity, but keep the theater exit in your awareness.",
          "Allow the feeling to move through without freezing it into your permanent identity. You are the screen on which the movie plays."
        ]
      },
      {
        title: "Day 6 · The Lotus (Inward Lightness & Possessions)",
        paragraphs: [
          "The pursuit of money, property, status, or comparison creates an exhausting treadmill of always needing more.",
          "Gold, diamonds, and status are small parts of our creation. They cannot make the Creator larger. Live like a lotus resting on water without being soaked.",
          "Enjoy good things when present, and work diligently. But let your inner worth rest on knowing who you are, not on what you accumulate."
        ]
      },
      {
        title: "Day 7 · The Beautiful World (Natural Compassion & Duty)",
        paragraphs: [
          "You look at the suffering, conflict, and confusion in the world and wonder: 'What is the point of living?'",
          "An awakened person cannot live happily while others suffer. Recognizing the shared Creator dissolves cruelty and inspires natural compassion and responsibility.",
          "Your primary aim is to make this world a beautiful place to live in. Carry that into today with one simple, unselfish act of kindness."
        ]
      }
    ];

    const journeyDaysTe = [
      {
        title: "01వ రోజు · నేను ఎవరు? (ఆత్మ విచారణ)",
        paragraphs: [
          "రోజంతా పనుల్లో మునిగిపోతూ, ఉద్యోగం, బాధ్యతలే మీరని భావిస్తున్నారు. ఆ పనుల్లో గెలుపు ఓటములే మీ గుర్తింపుగా మారి భారం అనిపిస్తుంది.",
          "ఈ పాత్రలన్నీ ఆటలోని సన్నివేశాలు మాత్రమే. అనుభవాల కోసం ఈ ఆటను సృష్టించి ప్రవేశించిన సృష్టికర్త మీరే. పాత్రలు మారుతాయి, కానీ చూసే సృష్టికర్త శాశ్వతంగా ఉంటారు.",
          "మూడు ప్రశాంతమైన శ్వాసలు తీసుకోండి. ఎదుటి వ్యక్తిని కలిసినప్పుడు, మీరిద్దరూ వేర్వేరు పాత్రలు పోషిస్తున్న ఒకే సృష్టికర్త అని గుర్తుంచుకోండి."
        ]
      },
      {
        title: "02వ రోజు · ఆట మరియు డిజైన్ (స్వీకారం)",
        paragraphs: [
          "ఈ రోజు ఏదో ఒక విషయం మీరు అనుకున్నట్లు జరగలేదు. కోపం, అసహనం, నిరాశ మనస్సులో వెంటనే మొదలవుతాయి.",
          "ఆటలోకి ప్రవేశించక ముందే డిజైన్ చేయబడింది. లోపల నుండి మనం డిజైన్‌ను మార్చలేము. సన్నివేశాన్ని మార్చాలని పట్టుబట్టడం వల్లే బాధ కలుగుతుంది.",
          "అసహనాన్ని గమనించండి. ప్రస్తుత సన్నివేశంలో చేయవలసిన ఆచరణాత్మక పని చేయండి, ఫలితంపై పట్టుదలను వదిలివేయండి."
        ]
      },
      {
        title: "03వ రోజు · పాత్రల గుర్తింపు (తప్పు నుంచి విముక్తి)",
        paragraphs: [
          "మీరు ఒక పొరపాటు చేశారు లేదా చెప్పిన సమయానికి చేయలేకపోయారు. 'నేను పనికిరానివాడిని' అని లోపల నింద మొదలవుతుంది.",
          "పొరపాటు అనేది మారుతున్న పాత్రకు చెందుతుంది, అది మీ అసలు గుర్తింపు కాదు. సృష్టికర్త ఆటలో నేర్చుకోవడం, మరచిపోవడం కూడా భాగమే.",
          "పొరపాటును నిజాయితీగా అంగీకరించి ఆచరణాత్మకంగా సరిదిద్దండి. కానీ ఆత్మ-ఖండనను వదిలేయండి."
        ]
      },
      {
        title: "04వ రోజు · ఎదుటి వ్యక్తి (ద్వేషం కరిగిపోవడం)",
        paragraphs: [
          "ఎవరో మీతో కఠినంగా ప్రవర్తించారు లేదా వ్యతిరేకించారు. వారిపై కోపం, శత్రుభావం వెంటనే కలుగుతాయి.",
          "ఇంకొకరిని ద్వేషించడం అంటే మిమ్మల్ని మీరు ద్వేషించుకోవడమే. బయట వేరే 'ఇతరులు' ఎవరూ లేరు; ఇద్దరిలోనూ ఉన్నది ఒకే సృష్టికర్త.",
          "సరిహద్దులు అవసరమైతే గౌరవంగా ఉంచండి, కానీ ద్వేషాన్ని పెంచుకోవద్దు. మీరిద్దరూ ఒకే మూలం నుండి వచ్చారు."
        ]
      },
      {
        title: "05వ రోజు · సినిమా రూపకం (తాదాత్మ్యం చెందకుండా జీవించడం)",
        paragraphs: [
          "ఒక బాధాకరమైన సంఘటన లేదా గొప్ప ప్రశంస ఎదురైంది. ఆ భావోద్వేగంలో పూర్తిగా కొట్టుకుపోతున్నారు.",
          "సినిమా చూసేటప్పుడు తెరపై జరిగేది అనుభవించినా, బయటకు వచ్చినప్పుడు అది సినిమా అని తెలుసు. జీవితాన్ని కూడా క్రీడా స్ఫూర్తితో గమనించండి.",
          "భావోద్వేగాలను స్వీకరించండి, కానీ అది మీ శాశ్వత సత్యం కాదని గుర్తుంచుకోండి. మీరు చూసే సాక్షి, తెర మాత్రమే."
        ]
      },
      {
        title: "06వ రోజు · తామర పువ్వు (అలౌకిక తేలికదనం)",
        paragraphs: [
          "డబ్బు, హోదా, ఆస్తులు, పోలికల ఒత్తిడి మిమ్మల్ని నిరంతరం అసంతృప్తికి గురిచేస్తున్నాయి.",
          "బంగారం, డబ్బు మన సృష్టిలోని చిన్న భాగాలు. అవి సృష్టికర్తను మరింత గొప్పగా చేయలేవు. కొలనులోని తామర పువ్వులా నీటిలో ఉంటూనే తడవకుండా జీవించండి.",
          "బాధ్యతలను చక్కగా నిర్వహించండి, కానీ మీ విలువ మీ ఆస్తులపై కాకుండా మీరు ఎవరో తెలుసుకోవడంపై ఆధారపడి ఉంటుంది."
        ]
      },
      {
        title: "07వ రోజు · అందమైన ప్రపంచం (సహజ కరుణ)",
        paragraphs: [
          "ప్రపంచంలోని బాధలు, గందరగోళం చూసి 'జీవితం ఎందుకు?' అని నిరాశ కలుగుతుంది.",
          "ఒక మేల్కొన్న వ్యక్తి ఇతరులు బాధపడుతుంటే ప్రశాంతంగా ఉండలేరు. అందరిలోనూ ఒకే సృష్టికర్తను చూడటం వల్ల సహజమైన దయ, బాధ్యత పుడతాయి.",
          "ఈ ప్రపంచాన్ని అందమైన ప్రదేశంగా మార్చడమే మీ ప్రధాన లక్ష్యం. ఈ రోజు ఒకరి పట్ల చిన్న దయ లేదా సహాయంతో ప్రారంభించండి."
        ]
      }
    ];

    const journeyDaysHi = [
      {
        title: "दिन 1 · मैं कौन हूँ? (जिज्ञासा)",
        paragraphs: [
          "दिन भर की भागदौड़ में काम और अपेक्षाओं का बोझ भारी लगता है। आप खुद को केवल अपनी सफलता या असफलता से परिभाषित महसूस करते हैं।",
          "ये रोल केवल खेल के दृश्य हैं। आप वही सृष्टिकर्ता हैं जिसने अनुभवों के लिए यह खेल बनाया और इसमें प्रवेश किया। रोल बदलते हैं, पर सृष्टिकर्ता अछूता रहता है।",
          "तीन गहरी साँसें लें। सामने वाले व्यक्ति से बात करते समय याद रखें कि आप दोनों एक ही खेल में अलग-अलग रोल निभा रहे हैं।"
        ]
      },
      {
        title: "दिन 2 · खेल और डिज़ाइन (स्वीकृति)",
        paragraphs: [
          "आज कोई योजना असफल हो गई या किसी ने मना कर दिया। भीतर तुरंत झुंझलाहट और प्रतिरोध जाग उठता है।",
          "खेल में आने से पहले ही इसका डिज़ाइन तय था। हम भीतर से इसे नहीं बदल सकते। पीड़ा दृश्य को जबरन बदलने की माँग से होती है।",
          "झुंझलाहट को बिना लड़े देखें। जो व्यावहारिक कदम उठाना है उठाएं, और परिणाम पर नियंत्रण की ज़िद छोड़ दें।"
        ]
      },
      {
        title: "दिन 3 · रोल की पहचान (गलती से मुक्ति)",
        paragraphs: [
          "आपसे कोई भूल हो गई। भीतर की आवाज़ कहती है: 'तुम असफल हो, तुमसे कुछ सही नहीं होता।'",
          "भूल किसी बदलते रोल की होती है, वह आपकी संपूर्ण पहचान नहीं है। खेल में सीखना और भूलना भी शामिल है।",
          "भूल को सहजता से स्वीकारें और व्यावहारिक रूप से सुधारें। लेकिन आत्म-निंदा को छोड़ दें; यह किसी के काम नहीं आती।"
        ]
      },
      {
        title: "दिन 4 · सामने वाला व्यक्ति (नफ़रत का अंत)",
        paragraphs: [
          "किसी ने आपसे कठोर बात कही या विरोध किया। मन तुरंत उन्हें विरोधी मान लेता है।",
          "दूसरे से नफ़रत करना खुद से नफ़रत करना है। बाहर कोई 'दूसरा' नहीं है; दोनों में एक ही सृष्टिकर्ता मौजूद है।",
          "ज़रूरत पड़ने पर व्यावहारिक सीमाएं तय करें, पर भीतर द्वेष न रखें। दोनों एक ही स्रोत से हैं।"
        ]
      },
      {
        title: "दिन 5 · फिल्म का उदाहरण (बिना उलझे जीना)",
        paragraphs: [
          "अचानक कोई दुख या बहुत बड़ी प्रशंसा मन को पूरी तरह घेर लेती है।",
          "सिनेमा हॉल से निकलते ही पता होता है कि वह सिर्फ एक फिल्म थी। खेल के हर दृश्य को पूरी निष्ठा से जिएं, लेकिन याद रखें कि यह एक खेल है।",
          "भावनाओं को बहने दें, उन्हें अपनी स्थायी पहचान न बनाएं। आप वह स्क्रीन हैं जिस पर फिल्म चल रही है।"
        ]
      },
      {
        title: "दिन 6 · कमल का फूल (हल्कापन)",
        paragraphs: [
          "धन, पद और तुलना की होड़ आपको लगातार थका रही है।",
          "सोना और धन हमारी रचना के छोटे हिस्से हैं। वे सृष्टिकर्ता को बड़ा नहीं बना सकते। पानी में रहकर भी बिना भीगे कमल की तरह जिएं।",
          "अपनी जिम्मेदारियों को अच्छे से निभाएं, पर अपनी गरिमा को सांसारिक वस्तुओं में न बांधें।"
        ]
      },
      {
        title: "दिन 7 · सुंदर संसार (सहज करुणा)",
        paragraphs: [
          "दुनिया का दुख और अशांति देखकर मन पूछता है: 'जीवन का उद्देश्य क्या है?'",
          "जब दूसरे पीड़ित हों, तो एक जागा हुआ व्यक्ति चैन से नहीं बैठ सकता। सबमें एक ही स्रोत को देखना सहज करुणा और उत्तरदायित्व जगाता है।",
          "आपका मुख्य उद्देश्य इस संसार को रहने के लिए सुंदर बनाना है। आज किसी के साथ एक निस्वार्थ भलाई करके इसकी शुरुआत करें।"
        ]
      }
    ];

    const journeyDays = lang === 'te' ? journeyDaysTe : (lang === 'hi' ? journeyDaysHi : journeyDaysEn);

    // Extract real everyday scenes already localized in HTML
    let cases = Array.from(document.querySelectorAll('#everyday-scenes details')).map(d => ({
      title: d.querySelector('summary')?.textContent?.trim() || 'Everyday Scene',
      paragraphs: Array.from(d.querySelectorAll('p')).map(p => p.textContent?.trim()).filter(Boolean)
    })).filter(c => c.paragraphs.length >= 2);

    if (cases.length === 0) {
      cases = Array.from(document.querySelectorAll('.lesson details')).map(d => ({
        title: d.querySelector('summary')?.textContent?.trim() || d.closest('.lesson')?.querySelector('h2')?.textContent?.trim() || 'Everyday Scene',
        paragraphs: Array.from(d.querySelectorAll('p')).map(p => p.textContent?.trim()).filter(Boolean)
      })).filter(c => c.paragraphs.length >= 2);
    }

    let activeMode = 'scenarios'; // 'scenarios' or 'journey'
    let activeCase = 0;

    function renderPractice() {
      const activeList = activeMode === 'journey' ? journeyDays : cases;
      const item = activeList[activeCase] || activeList[0];
      const savedNote = sessionStorage.getItem(`mindclarity_note_${activeMode}_${activeCase}`) || '';

      pracEl.innerHTML = `
        <div class="practice-studio-wrapper">
          <div class="practice-mode-bar" role="tablist" aria-label="Practice Mode">
            <button type="button" class="mode-tab ${activeMode === 'scenarios' ? 'mode-active' : ''}" id="pm-scenarios">
              <span>${lang === 'te' ? 'రోజువారీ పరిస్థితులు' : (lang === 'hi' ? 'दैनिक परिस्थितियाँ' : 'Everyday Scenarios')}</span>
            </button>
            <button type="button" class="mode-tab ${activeMode === 'journey' ? 'mode-active' : ''}" id="pm-journey">
              <span>${lang === 'te' ? '7 రోజుల సాధన ప్రయాణం' : (lang === 'hi' ? '7-दिवसीय साधना यात्रा' : '7-Day Contemplative Journey')}</span>
            </button>
          </div>

          <div class="scenario-selector-bar" role="tablist" aria-label="Difficulty scenarios">
            ${activeList.map((c, idx) => `
              <button type="button" role="tab" class="scenario-tab ${idx === activeCase ? 'tab-active' : ''}" data-idx="${idx}" aria-selected="${idx === activeCase}">
                <span class="tab-number">0${idx + 1}</span>
                <span class="tab-text">${c.title}</span>
              </button>
            `).join('')}
          </div>

          <div class="scenario-display-card" role="tabpanel">
            <div class="scenario-header">
              <div>
                <span class="scenario-eyebrow">${activeMode === 'journey' ? '7-Day Guided Journey' : 'Interactive Contemplation'}</span>
                <h3 class="scenario-title">${item.title}</h3>
              </div>
              <button type="button" class="button secondary small-btn practice-wa-btn" id="practice-share-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
                <span>Share on WhatsApp</span>
              </button>
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

      const pmScenarios = pracEl.querySelector('#pm-scenarios');
      if (pmScenarios) {
        pmScenarios.onclick = () => {
          activeMode = 'scenarios';
          activeCase = 0;
          renderPractice();
        };
      }

      const pmJourney = pracEl.querySelector('#pm-journey');
      if (pmJourney) {
        pmJourney.onclick = () => {
          activeMode = 'journey';
          activeCase = 0;
          renderPractice();
        };
      }

      pracEl.querySelectorAll('.scenario-tab').forEach(btn => {
        btn.onclick = () => {
          activeCase = parseInt(btn.dataset.idx, 10);
          renderPractice();
        };
      });

      const noteInput = pracEl.querySelector('#practice-note-textarea');
      if (noteInput) {
        noteInput.oninput = (e) => {
          sessionStorage.setItem(`mindclarity_note_${activeMode}_${activeCase}`, e.target.value);
        };
      }

      const clearBtn = pracEl.querySelector('#practice-note-clear');
      if (clearBtn) {
        clearBtn.onclick = () => {
          sessionStorage.removeItem(`mindclarity_note_${activeMode}_${activeCase}`);
          if (noteInput) noteInput.value = '';
        };
      }

      const waBtn = pracEl.querySelector('#practice-share-wa');
      if (waBtn) {
        waBtn.onclick = () => {
          const title = item.title;
          const p1 = item.paragraphs[0] || '';
          const p2 = item.paragraphs[1] || '';
          const p3 = item.paragraphs[2] || '';
          const currentUrl = window.location.origin + window.location.pathname + '#everyday-scenes';
          const text = activeMode === 'journey'
            ? `*Mind Clarity · 7-Day Journey (${title})*\n\n*The Scene:* ${p1}\n\n*Creator Remembrance:* ${p2}\n\n*Action:* ${p3}\n\nExplore at: ${currentUrl}`
            : `*Mind Clarity · Everyday Contemplation*\n"${title}"\n\n*The Scene:* ${p1}\n\n*Creator Remembrance:* ${p2}\n\nExplore at: ${currentUrl}`;
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
        };
      }
    }

    renderPractice();
  }

  initCardStudio();
  initPracticeStudio();
})();
