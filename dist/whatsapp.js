(function () {
  var link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = 'https://wa.me/919989766517?text=' + encodeURIComponent('Hello Uday, I would like to know more about Mind Clarity.');
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Chat with Uday on WhatsApp');
  link.innerHTML = '<span aria-hidden="true">◔</span> Chat on WhatsApp';
  var style = document.createElement('style');
  style.textContent = '.whatsapp-float{position:fixed;right:22px;bottom:22px;z-index:20;display:inline-flex;align-items:center;gap:8px;padding:12px 16px;border-radius:999px;background:#168c4b;color:#fff;text-decoration:none;font:bold 14px Arial,sans-serif;box-shadow:0 10px 24px rgba(15,70,40,.24);transition:transform .2s ease,background .2s ease}.whatsapp-float:hover{background:#11753e;transform:translateY(-2px)}.whatsapp-float span{font-size:18px;line-height:1}@media(max-width:600px){.whatsapp-float{right:14px;bottom:14px;padding:11px 13px;font-size:13px}}';
  document.head.appendChild(style);
  document.body.appendChild(link);
})();
