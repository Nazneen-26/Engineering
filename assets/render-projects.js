/* ---------- RENDER: PROJECTS ---------- */
const filters = [{key:'all',label:'All'},{key:'residential',label:'Residential'},{key:'commercial',label:'Commercial'},{key:'waterproofing',label:'Waterproofing'},{key:'structural',label:'Structural Repair'},{key:'renovation',label:'Renovation'}];
document.getElementById('filterBar').innerHTML = filters.map((f,i)=>`<button class="filter-btn ${i===0?'active':''}" data-f="${f.key}">${f.label}</button>`).join('');
const projGrid = document.getElementById('projGrid');
projGrid.innerHTML = projects.map(p=>`
  <a href="project-${p.slug}.html" class="proj-card reveal" data-cat="${p.cat}">
    <div class="proj-img"><img src="${p.img}" alt="${p.name}"><span class="proj-tag">${p.type}</span></div>
    <div class="proj-body">
      <h3>${p.name}</h3>
      <div class="proj-meta"><i class="fa-solid fa-location-dot"></i> ${p.loc}</div>
      <p>${p.desc}</p>
      <div class="proj-foot"><span>${p.date}</span><span>View Project <i class="fa-solid fa-arrow-right"></i></span></div>
    </div>
  </a>`).join('');
document.getElementById('filterBar').addEventListener('click', e=>{
  const btn = e.target.closest('.filter-btn'); if(!btn) return;
  [...document.querySelectorAll('.filter-btn')].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.f;
  [...projGrid.children].forEach(card=>{
    card.classList.toggle('hide', f!=='all' && card.dataset.cat!==f);
  });
});

