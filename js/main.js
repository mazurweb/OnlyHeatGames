// ─── RS3 Guide Hub — main.js ───────────────────────────────────

const STORE_KEY = 'rs3hub_v1';

// ─── Storage ────────────────────────────────────────────────────
function loadData() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch { return {}; }
}
function saveData(d) { localStorage.setItem(STORE_KEY, JSON.stringify(d)); }
function getFlag(id)          { return !!loadData()[id]; }
function setFlag(id, val)     { const d=loadData(); val ? d[id]=1 : delete d[id]; saveData(d); }

// ─── Active Nav ──────────────────────────────────────────────────
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const h = a.getAttribute('href') || '';
    a.classList.toggle('active', h === page || (page === '' && h === 'index.html'));
  });
}

// ─── Sidebar (sections within a page) ───────────────────────────
function initSidebar() {
  const btns = document.querySelectorAll('.sb-btn[data-sec]');
  const secs = document.querySelectorAll('.content-section');
  function show(id) {
    btns.forEach(b => b.classList.toggle('active', b.dataset.sec === id));
    secs.forEach(s => s.classList.toggle('active', s.id === id));
  }
  btns.forEach(b => b.addEventListener('click', () => show(b.dataset.sec)));
  if (btns.length) show(btns[0].dataset.sec);
}

// ─── Tab Bars ────────────────────────────────────────────────────
function initTabs(barSel, panelSel) {
  const btns   = document.querySelectorAll(barSel   + ' .tab-btn');
  const panels = document.querySelectorAll(panelSel + ' .tab-panel');
  function show(i) {
    btns.forEach((b,j)   => b.classList.toggle('active', j===i));
    panels.forEach((p,j) => p.classList.toggle('active', j===i));
  }
  btns.forEach((b,i) => b.addEventListener('click', () => show(i)));
  show(0);
}

// ─── Level Band Accordions ───────────────────────────────────────
function initBands() {
  document.querySelectorAll('.lband-hdr').forEach(hdr => {
    // open first by default
    const body    = hdr.nextElementSibling;
    const chevron = hdr.querySelector('.chevron');
    hdr.addEventListener('click', () => {
      const open = body.classList.toggle('open');
      chevron.classList.toggle('open', open);
    });
  });
  // Auto-open first band in each container
  document.querySelectorAll('.lband:first-child .lband-body').forEach(b => {
    b.classList.add('open');
    const chev = b.previousElementSibling.querySelector('.chevron');
    if (chev) chev.classList.add('open');
  });
}

// ─── Filter Buttons ──────────────────────────────────────────────
function initFilters(barSel, rowSel, attr) {
  const btns = document.querySelectorAll(barSel + ' .fbtn');
  btns.forEach(b => {
    b.addEventListener('click', () => {
      btns.forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      const f = b.dataset.filter;
      document.querySelectorAll(rowSel).forEach(row => {
        const v = row.dataset[attr] || '';
        row.style.display = (f === 'all' || v.includes(f)) ? '' : 'none';
      });
    });
  });
}

// ─── Checkbox Rows (table rows) ──────────────────────────────────
function initCheckRows(ns, total) {
  document.querySelectorAll(`[data-cid]`).forEach(row => {
    const id  = ns + '_' + row.dataset.cid;
    const chk = row.querySelector('.chk');
    if (!chk) return;
    if (getFlag(id)) { chk.classList.add('on'); row.classList.add('done'); }
    row.addEventListener('click', e => {
      if (e.target.tagName === 'A') return;
      const on = chk.classList.toggle('on');
      row.classList.toggle('done', on);
      setFlag(id, on);
      refreshProgress(ns, total);
    });
  });
  refreshProgress(ns, total);
}

// ─── Checklist Items (li elements) ──────────────────────────────
function initChecklists(ns) {
  document.querySelectorAll(`li[data-cid]`).forEach(li => {
    const id  = ns + '_' + li.dataset.cid;
    const chk = li.querySelector('.chk');
    if (!chk) return;
    if (getFlag(id)) { chk.classList.add('on'); li.classList.add('done'); }
    li.addEventListener('click', () => {
      const on = chk.classList.toggle('on');
      li.classList.toggle('done', on);
      setFlag(id, on);
    });
  });
}

// ─── Progress Bar Refresh ────────────────────────────────────────
function refreshProgress(ns, total) {
  const bar  = document.querySelector(`[data-ns="${ns}"]`);
  if (!bar) return;
  const d    = loadData();
  let done   = 0;
  for (let i = 1; i <= total; i++) if (d[ns+'_'+i]) done++;
  const fill = bar.querySelector('.prog-fill');
  const val  = bar.querySelector('.prog-val');
  if (fill) fill.style.width = total ? (done/total*100).toFixed(1)+'%' : '0%';
  if (val)  val.textContent  = done + ' / ' + total;
}

// ─── Auto-init on DOMContentLoaded ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initSidebar();
  initBands();
});
