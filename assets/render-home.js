/* ---------- HOME: SERVICES PREVIEW (4) ---------- */
document.getElementById('servicesGridHome').innerHTML = services.slice(0,4).map(s => `
  <div class="svc-card reveal">
    <div class="svc-img">
      <img src="${s.img}" alt="${s.title}">
      <div class="svc-icon"><i class="fa-solid ${s.icon}"></i></div>
    </div>
    <div class="svc-body">
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="service-${s.slug}.html" class="svc-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </div>`).join('');

/* ---------- HOME: WHY CHOOSE US ---------- */
document.getElementById('whyGrid').innerHTML = whyItems.map(w => `
  <div class="why-card"><i class="fa-solid ${w.icon}"></i><h4>${w.title}</h4><p>${w.desc}</p></div>`).join('');

/* ---------- HOME: FEATURED PROJECTS (3) ---------- */
document.getElementById('projGridHome').innerHTML = projects.slice(0,3).map(p=>`
  <a href="project-${p.slug}.html" class="proj-card reveal">
    <div class="proj-img"><img src="${p.img}" alt="${p.name}"><span class="proj-tag">${p.type}</span></div>
    <div class="proj-body">
      <h3>${p.name}</h3>
      <div class="proj-meta"><i class="fa-solid fa-location-dot"></i> ${p.loc}</div>
      <p>${p.desc}</p>
      <div class="proj-foot"><span>${p.date}</span><span>View Project <i class="fa-solid fa-arrow-right"></i></span></div>
    </div>
  </a>`).join('');

/* ---------- HOME: TESTIMONIALS CAROUSEL ---------- */
const testiCard = document.getElementById('testiCard');
const testiNav = document.getElementById('testiNav');
let testiIdx = 0;
function renderTesti(){
  const t = testimonials[testiIdx];
  testiCard.innerHTML = `
    <div class="testi-stars">★★★★★</div>
    <p class="testi-quote">"${t.quote}"</p>
    <div class="testi-person"><img src="${t.img}" alt="${t.name}"><div><b>${t.name}</b><span>${t.loc}</span></div></div>`;
  testiNav.innerHTML = testimonials.map((_,i)=>`<span class="testi-dot ${i===testiIdx?'active':''}" data-i="${i}"></span>`).join('');
}
renderTesti();
document.getElementById('testiNext').addEventListener('click', ()=>{ testiIdx=(testiIdx+1)%testimonials.length; renderTesti(); });
document.getElementById('testiPrev').addEventListener('click', ()=>{ testiIdx=(testiIdx-1+testimonials.length)%testimonials.length; renderTesti(); });
testiNav.addEventListener('click', e=>{ const d=e.target.closest('.testi-dot'); if(!d) return; testiIdx=parseInt(d.dataset.i); renderTesti(); });
setInterval(()=>{ testiIdx=(testiIdx+1)%testimonials.length; renderTesti(); }, 6000);

/* ---------- HOME: FAQ ---------- */
renderFaqAccordion('faqList', faqs);
