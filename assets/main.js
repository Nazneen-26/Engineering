/* ---------- NAV SCROLL + BURGER ---------- */
const navEl = document.getElementById('nav');
const toTopEl = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
  if(navEl) navEl.classList.toggle('scrolled', window.scrollY > 40);
  if(toTopEl) toTopEl.classList.toggle('show', window.scrollY > 500);
});
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if(burger && navLinks){
  burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    navLinks.classList.remove('open');
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }));
}

/* ---------- SCROLL TO TOP ---------- */
if(toTopEl) toTopEl.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ---------- FORM SUBMIT (contact page only) ---------- */
const quoteForm = document.getElementById('quoteForm');
if(quoteForm){
  quoteForm.addEventListener('submit', e=>{
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Request Sent — We will Call You Shortly';
    btn.style.opacity = 0.85;
    setTimeout(()=>{ btn.innerHTML = original; btn.style.opacity = 1; e.target.reset(); }, 3200);
  });
}

/* ---------- REVEAL ON SCROLL + COUNTERS + PROCESS FILL ---------- */
const revealEls = document.querySelectorAll('.reveal, .svc-card, .proj-card');
revealEls.forEach(el=>el.classList.add('reveal'));

const counters = document.querySelectorAll('.counter');
function animateCounter(el){
  const target = parseInt(el.dataset.target);
  const dur = 1400;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now-start)/dur, 1);
    el.textContent = Math.floor(p*(2-p) * target);
    if(p<1) requestAnimationFrame(tick); else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const procSteps = document.querySelectorAll('.proc-step');
const processFill = document.getElementById('processFill');

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      if(entry.target.classList.contains('reveal')) entry.target.classList.add('visible');
      if(entry.target.classList.contains('counter') && !entry.target.dataset.done){
        entry.target.dataset.done = "1";
        animateCounter(entry.target);
      }
      if(entry.target.classList.contains('proc-step') && processFill){
        const i = parseInt(entry.target.dataset.i);
        processFill.style.width = ((i+1)/procSteps.length*100) + '%';
      }
    }
  });
}, {threshold:0.25});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
counters.forEach(el=>io.observe(el));
procSteps.forEach(el=>io.observe(el));
