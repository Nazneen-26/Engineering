/* ---------- RENDER: TESTIMONIALS ---------- */
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
let testiAuto = setInterval(()=>{ testiIdx=(testiIdx+1)%testimonials.length; renderTesti(); }, 6000);

