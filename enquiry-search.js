// Search the visible answers locally; no query leaves this page.
const normalize = text => text.toLowerCase().replace(/[\u064b-\u065f\u0670]/g, '').replace(/[^\p{L}\p{M}\p{N}]+/gu, ' ').trim().replace(/(^| )ال(?=[\u0621-\u064a])(?!له(?: |$))/g, '$1');
const ignored = new Set(['i','am','a','the','is','are','do','does','can','what','how','why','to','of','in','and','my','me','you','with','about','feel','feeling','help']);
const aliases = { lonely:'loneliness', angry:'anger', jealous:'jealousy', envious:'jealousy', envy:'jealousy', grieving:'grief', bereavement:'grief', sad:'sadness', worried:'worry', anxious:'anxiety', stressed:'stress', guilty:'guilt', ashamed:'shame', depressed:'depression', insecure:'insecurity' };
export function enquiryTerms(query) {
  return [...new Set(normalize(query).replace(/\b(?:i )?(?:cannot|can t|cant) stop thinking\b/g,'overthinking').split(' ').filter(term=>term&&!ignored.has(term)).map(term=>aliases[term]||term))];
}
export function enquiryScore(query, title, text, searchTerms = '') {
  const terms = enquiryTerms(query);
  if (!terms.length) return 1;
  const heading = enquiryTerms(title);
  const tags = enquiryTerms(searchTerms);
  const words = enquiryTerms(text);
  const contains = (list, term) => list.some(word => word.startsWith(term));
  const matches = terms.filter(term => contains(heading,term)||contains(tags,term)||contains(words,term));
  if (!matches.length) return 0;
  return matches.length * 10 + (matches.length===terms.length ? 20 : 0) + terms.reduce((sum,term)=>sum+(contains(heading,term)?6:contains(tags,term)?4:0),0);
}
export function enhanceEnquirySearch(root = document) {
  const input=root.querySelector('#enquiry-input'), controls=root.querySelector('#enquiry-controls'), fallback=root.querySelector('#enquiry-fallback'), status=root.querySelector('#enquiry-status');
  if (!input||!controls||!fallback||!status||controls.dataset.enhanced) return;
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
    for(const entry of entries){entry.score=enquiryScore(input.value,entry.title,entry.text,entry.tags);entry.element.hidden=!entry.score;if(entry.score)count++;}
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
