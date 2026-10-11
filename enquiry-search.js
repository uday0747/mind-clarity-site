// Search the visible answers locally; no query leaves this page.
const normalize = text => text.toLowerCase().replace(/[\u064b-\u065f\u0670]/g, '').replace(/[^\p{L}\p{M}\p{N}]+/gu, ' ').trim().replace(/(^| )ال(?=[\u0621-\u064a])(?!له(?: |$))/g, '$1');
const commonWords = {
  en: 'i am a an the is are do does can could what how why to of in and my me you with about feel feeling help would should more myself',
  es: 'yo soy un una el la los las es son puedo puede pueden como que por porque para de del en y mi mis me con sobre sentir siento ayuda mas mí',
  fr: 'je suis un une le la les est sont peux peut comment pourquoi que quoi de du des en et mon ma mes moi me avec sur sentir sens aide plus avoir puis',
  pt: 'eu sou um uma o a os as é são posso pode como que porque por para de do da em e meu minha me mim com sobre sentir sinto ajuda mais',
  id: 'saya aku adalah sebuah yang bisa dapat bagaimana mengapa apa untuk di dan dengan tentang merasa lebih diri sendiri membantu',
  hi: 'मैं मुझे मेरा मेरी मेरे हम क्या कैसे क्यों है हैं हो हूँ हूं सकता सकती सकते में पर से और को की का के अपने आप मदद महसूस अधिक कर',
  te: 'నేను నాకు నా మనం ఏమిటి ఎలా ఎందుకు ఉంది ఉన్నారు చేయగలను చేయాలి లో తో కోసం మరియు గురించి మరింత అనిపిస్తుంది అనుభూతి సహాయం',
  ta: 'நான் எனக்கு எப்படி மேலும் முடியும்',
  kn: 'ನಾನು ನನಗೆ ಹೇಗೆ ಹೆಚ್ಚು ನನ್ನಲ್ಲಿ',
  ml: 'ഞാൻ എനിക്ക് എങ്ങനെ കൂടുതൽ എന്നിൽ',
  ar: 'انا ان انا هو هي نحن كيف لماذا ما ماذا هل يمكن يمكنني في من الى على عن مع و او هذا هذه اكثر اشعر اكون لدي لي نفسي شعور بمزيد بنفسي'
};
const normalizeWord = text => normalize(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const ignored = Object.fromEntries(Object.entries(commonWords).map(([language, words]) => [language, new Set(normalizeWord(words).split(' '))]));
const aliases = {
  en: { lonely:'loneliness', angry:'anger', jealous:'jealousy', envious:'jealousy', envy:'jealousy', grieving:'grief', bereavement:'grief', sad:'sadness', worried:'worry', anxious:'anxiety', stressed:'stress', guilty:'guilt', ashamed:'shame', depressed:'depression', insecure:'insecurity' },
  es: { confiado:'confianza', inseguro:'inseguridad', ansioso:'ansiedad', preocupado:'preocupacion', preocupaciones:'preocupacion', enojado:'ira', enfadado:'ira', triste:'tristeza', solo:'soledad' },
  fr: { confiant:'confiance', inquiete:'inquietude', inquiet:'inquietude', anxieux:'anxiete', triste:'tristesse', seul:'solitude' },
  pt: { confiante:'confianca', ansioso:'ansiedade', preocupado:'preocupacao', preocupacoes:'preocupacao', sozinho:'solidao', triste:'tristeza' },
  id: { khawatir:'kekhawatiran', cemas:'kecemasan', sedih:'kesedihan', kesepian:'kesepian', marah:'kemarahan' },
  hi: { चिंतित:'चिंता', गुस्सा:'क्रोध', अकेला:'अकेलापन' },
  te: { కోపంగా:'కోపం', ఒంటరిగా:'ఒంటరితనం', ఆందోళనగా:'ఆందోళన' },
  ar: { قلقا:'قلق', غاضب:'غضب', حزينا:'حزن', وحيدا:'وحدة', واثق:'ثقة' }
};
export function enquiryTerms(query, language = 'en') {
  const words = normalizeWord(query).replace(/\b(?:i )?(?:cannot|can t|cant) stop thinking\b/g,'overthinking').split(' ');
  return [...new Set(words.filter(term => term && !(ignored[language] || ignored.en).has(term)).map(term => aliases[language]?.[term] || term))];
}
export function enquiryScore(query, title, text, searchTerms = '', language = 'en') {
  if (!query.trim()) return 1;
  const terms = enquiryTerms(query, language);
  if (!terms.length) return 0;
  const heading = enquiryTerms(title, language), tags = enquiryTerms(searchTerms, language), words = enquiryTerms(text, language);
  // Short fragments must match a complete word; longer terms may match grammatical endings.
  const contains = (list, term) => list.some(word => word === term || (term.length >= 3 && word.startsWith(term)));
  const matches = terms.filter(term => contains(heading, term) || contains(tags, term) || contains(words, term));
  const meaningful = terms.filter(term => contains(heading, term) || contains(tags, term));
  if (!matches.length || matches.length < Math.ceil(terms.length / 2)) return 0;
  if (terms.length > 1 && !meaningful.length && matches.length !== terms.length) return 0;
  return matches.length * 10 + (matches.length === terms.length ? 20 : 0) + terms.reduce((sum,term) => sum + (contains(heading,term) ? 6 : contains(tags,term) ? 4 : 0), 0);
}
export function enhanceEnquirySearch(root = document) {
  const input=root.querySelector('#enquiry-input'), controls=root.querySelector('#enquiry-controls'), fallback=root.querySelector('#enquiry-fallback'), status=root.querySelector('#enquiry-status');
  if (!input||!controls||!fallback||!status||controls.dataset.enhanced) return;
  const language = root.documentElement?.lang || root.ownerDocument?.documentElement.lang || 'en';
  const entries=[...root.querySelectorAll('.compact-reading details')].map(element=>({element,title:element.querySelector('summary')?.textContent||'',text:element.textContent,tags:element.dataset.searchTerms||'',score:1}));
  const groups=[...root.querySelectorAll('.compact-reading section')].map(element=>({element,entries:entries.filter(entry=>element.contains(entry.element)),score:1})).filter(group=>group.entries.length);
  const records=new Map([...entries,...groups].map(record=>[record.element,record]));
  const containers=[...new Set(entries.map(entry=>entry.element.parentElement))].map(parent=>({parent,children:[...parent.children]}));
  const order = (container, searching) => {
    const candidates=container.children.filter(child=>records.has(child));
    if(searching) candidates.sort((a,b)=>records.get(b).score-records.get(a).score);
    let index=0;
    for(const child of container.children) container.parent.append(records.has(child)?candidates[index++]:child);
  };
  const filter=()=>{
    const searching=!!input.value.trim();
    let count=0;
    for(const entry of entries){entry.score=enquiryScore(input.value,entry.title,entry.text,entry.tags,language);entry.element.hidden=!entry.score;if(entry.score)count++;}
    for(const group of groups){group.score=Math.max(...group.entries.map(entry=>entry.score));group.element.hidden=!group.score;}
    for(const container of containers)order(container,searching);
    status.textContent=!searching?'':count?(count===1?status.dataset.single:status.dataset.plural).replace('{count}',String(count)):status.dataset.empty;
  };
  const openTarget=()=>{
    let id;try{id=decodeURIComponent(window.location.hash.slice(1));}catch{return;}
    const target=entries.find(entry=>entry.element.id===id);
    if(target) target.element.open=true;
  };
  input.addEventListener('input',filter);
  window.addEventListener('hashchange',openTarget);
  filter();openTarget();
  controls.dataset.enhanced='true';controls.hidden=false;fallback.hidden=true;
  return()=>{
    input.removeEventListener('input',filter);window.removeEventListener('hashchange',openTarget);
    for(const {element} of [...entries,...groups])element.hidden=false;
    for(const container of containers)order(container,false);
    status.textContent='';controls.hidden=true;fallback.hidden=false;delete controls.dataset.enhanced;
  };
}
