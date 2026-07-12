/* ---------- NAV DROPDOWN (mobile tap-to-expand) ---------- */
document.querySelectorAll('.has-dropdown > a').forEach(a=>{
  a.addEventListener('click', e=>{
    if(window.innerWidth <= 1240){
      e.preventDefault();
      const menu = a.parentElement.querySelector('.dropdown-menu');
      const isOpen = menu.classList.contains('open');
      document.querySelectorAll('.dropdown-menu').forEach(m=>m.classList.remove('open'));
      if(!isOpen) menu.classList.add('open');
    }
  });
});

/* ---------- GENERIC FAQ ACCORDION ---------- */
function renderFaqAccordion(containerId, items){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = items.map((f,i)=>`
    <div class="faq-item ${i===0?'open':''}">
      <div class="faq-q"><span>${f.q}</span><i class="fa-solid fa-plus"></i></div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
  el.addEventListener('click', e=>{
    const item = e.target.closest('.faq-item'); if(!item) return;
    const wasOpen = item.classList.contains('open');
    [...el.children].forEach(c=>c.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
}

/* ---------- LIGHTBOX (gallery) ---------- */
function initLightbox(triggerSelector){
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `<button class="lightbox-close"><i class="fa-solid fa-xmark"></i></button><img src="" alt="">`;
  document.body.appendChild(overlay);
  const imgEl = overlay.querySelector('img');
  document.addEventListener('click', e=>{
    const trigger = e.target.closest(triggerSelector);
    if(trigger){
      const img = trigger.querySelector('img');
      if(img){ imgEl.src = img.src; overlay.classList.add('open'); }
    }
    if(e.target.closest('.lightbox-close') || e.target === overlay){
      overlay.classList.remove('open');
    }
  });
}
