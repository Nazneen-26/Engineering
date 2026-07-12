/* ---------- RENDER: BEFORE/AFTER ---------- */
const baTabs = document.getElementById('baTabs');
const beforeImg = document.getElementById('beforeImg');
const afterImg = document.getElementById('afterImg');
function setBA(i){
  beforeImg.src = beforeAfter[i].before;
  afterImg.src = beforeAfter[i].after;
  [...baTabs.children].forEach((el,idx)=>el.classList.toggle('active', idx===i));
}
baTabs.innerHTML = beforeAfter.map((b,i)=>`<button class="ba-tab ${i===0?'active':''}" data-i="${i}">${b.label}</button>`).join('');
baTabs.addEventListener('click', e=>{
  const btn = e.target.closest('.ba-tab'); if(!btn) return;
  setBA(parseInt(btn.dataset.i));
});
setBA(0);

/* compare slider drag */
const compareBox = document.getElementById('compareBox');
const compareSlider = document.getElementById('compareSlider');
let dragging = false;
function moveSlider(clientX){
  const rect = compareBox.getBoundingClientRect();
  let pct = ((clientX - rect.left) / rect.width) * 100;
  pct = Math.max(0, Math.min(100, pct));
  compareSlider.style.left = pct + '%';
  afterImg.style.clipPath = `inset(0 0 0 ${pct}%)`;
}
compareSlider.addEventListener('mousedown', ()=>dragging=true);
compareBox.addEventListener('mousedown', e=>{dragging=true; moveSlider(e.clientX);});
window.addEventListener('mousemove', e=>{ if(dragging) moveSlider(e.clientX); });
window.addEventListener('mouseup', ()=>dragging=false);
compareBox.addEventListener('touchstart', e=>{dragging=true; moveSlider(e.touches[0].clientX);});
compareBox.addEventListener('touchmove', e=>{ if(dragging) moveSlider(e.touches[0].clientX); });
window.addEventListener('touchend', ()=>dragging=false);

