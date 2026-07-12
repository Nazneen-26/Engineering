/* ---------- RENDER: WHY CHOOSE US ---------- */
document.getElementById('whyGrid').innerHTML = whyItems.map(w => `
  <div class="why-card"><i class="fa-solid ${w.icon}"></i><h4>${w.title}</h4><p>${w.desc}</p></div>`).join('');

