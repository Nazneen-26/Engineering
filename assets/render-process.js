/* ---------- RENDER: PROCESS ---------- */
const processGrid = document.getElementById('processGrid');
processGrid.innerHTML = process.map((p,i)=>`
  <div class="proc-step" data-i="${i}">
    <div class="proc-dot"><i class="fa-solid ${p.icon}"></i></div>
    <div class="proc-num">STEP 0${i+1}</div>
    <h4>${p.title}</h4>
  </div>`).join('');

