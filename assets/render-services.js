/* ---------- RENDER: SERVICES ---------- */
const servicesGrid = document.getElementById('servicesGrid');
servicesGrid.innerHTML = services.map(s => `
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

