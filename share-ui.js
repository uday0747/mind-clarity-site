export function enhanceSharing(root) {
  const button=root?.querySelector('[data-copy-link]'), input=root?.querySelector('#share-url'), status=root?.querySelector('.share-status');
  if(!button||!input||!status||button.dataset.enhanced)return;
  const email=root.querySelector('a[href^="mailto:"]');
  const whatsapp=root.querySelector('a[data-whatsapp-share]');
  const base=input.value.split('#')[0];
  const originalEmail=email?.getAttribute('href');
  const originalWhatsApp=whatsapp?.getAttribute('href');
  const sync=()=>{
    input.value=base+window.location.hash;
    if(email&&originalEmail){
      const url=new URL(originalEmail);
      url.searchParams.set('body',url.searchParams.get('body').replace(base,input.value));
      email.href=url.href;
    }
    if(whatsapp&&originalWhatsApp){
      const url=new URL(originalWhatsApp);
      url.searchParams.set('text',url.searchParams.get('text').replace(base,input.value));
      whatsapp.href=url.href;
    }
  };
  const copy=async()=>{
    sync();
    try{await navigator.clipboard.writeText(input.value);status.textContent=root.dataset.shareCopied;}
    catch{input.focus();input.select();status.textContent=root.dataset.shareFallback;}
  };
  window.addEventListener('hashchange',sync);sync();
  if(navigator.clipboard?.writeText){button.addEventListener('click',copy);button.hidden=false;}
  button.dataset.enhanced='true';
  return()=>{
    window.removeEventListener('hashchange',sync);button.removeEventListener('click',copy);
    input.value=base;if(email&&originalEmail)email.setAttribute('href',originalEmail);
    if(whatsapp&&originalWhatsApp)whatsapp.setAttribute('href',originalWhatsApp);
    button.hidden=true;delete button.dataset.enhanced;
  };
}
