/* ---------- RENDER: MASONRY GALLERY ---------- */
const galleryCats = [
  {key:'all',label:'All'},
  {key:'before-after',label:'Before & After'},
  {key:'waterproofing',label:'Waterproofing'},
  {key:'structural',label:'Structural Repair'},
  {key:'renovation',label:'Renovation'},
  {key:'completed',label:'Completed Projects'},
  {key:'in-progress',label:'Work in Progress'},
];
document.getElementById('galleryFilter').innerHTML = galleryCats.map((c,i)=>
  `<button class="filter-btn ${i===0?'active':''}" data-f="${c.key}">${c.label}</button>`).join('');

const masonryGrid = document.getElementById('masonryGrid');
masonryGrid.innerHTML = galleryItems.map(g=>`
  <div class="masonry-item" data-cat="${g.cat}">
    <img src="${g.img}" alt="${g.label}">
    <div class="m-label">${g.label}</div>
  </div>`).join('');

document.getElementById('galleryFilter').addEventListener('click', e=>{
  const btn = e.target.closest('.filter-btn'); if(!btn) return;
  [...document.querySelectorAll('#galleryFilter .filter-btn')].forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.f;
  [...masonryGrid.children].forEach(item=>{
    item.classList.toggle('hide', f!=='all' && item.dataset.cat!==f);
  });
});

initLightbox('.masonry-item');
