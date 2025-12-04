/* public/js/app.js
   Handles: form loading, client validation, search/filter, sorting, copy-to-clipboard,
   toasts, modal delete (AJAX), and highlight new row.
*/

(function () {
  // helpers
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const toasts = $('#toasts');

  function showToast(message, type = 'success', ttl = 3000) {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = message;
    toasts.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 300);
    }, ttl);
  }

  // Create form handling
  const form = $('#createForm');
  const createBtn = $('#createBtn');
  const formError = $('#formError');
  if (form) {
    form.addEventListener('submit', async (ev) => {
      // client-side validation: target must be present
      ev.preventDefault();
      formError.hidden = true;
      const data = new FormData(form);
      const target = data.get('target')?.trim();
      const code = data.get('code')?.trim();

      if (!target) {
        formError.textContent = 'Please enter a target URL.';
        formError.hidden = false;
        return;
      }

      // simple pattern check for code
      if (code && !/^[A-Za-z0-9]{6,8}$/.test(code)) {
        formError.textContent = 'Custom code must be 6-8 alphanumeric characters.';
        formError.hidden = false;
        return;
      }

      // show loading
      createBtn.classList.add('loading');
      createBtn.disabled = true;
      try {
        // submit via normal POST (so server uses existing flow) but show UX by using fetch
        const payload = { target, code };
        // POST to /create (web route); server returns redirect to /code/:code - we will follow
        const res = await fetch(form.action, {
          method: form.method || 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        // If server redirects (location header), browsers wouldn't auto-follow for fetch.
        // We handle status codes: if 200/201 server responded with json or redirect path.
        if (res.redirected) {
          location.href = res.url;
          return;
        }

        // if server responded with 409 or 400, show message
        if (!res.ok) {
          const json = await res.json().catch(() => null);
          showToast((json && (json.error || json.message)) || `Create failed (${res.status})`, 'error');
          createBtn.classList.remove('loading');
          createBtn.disabled = false;
          return;
        }

        // If success, server usually redirects; fallback: reload
        location.reload();
      } catch (err) {
        console.error(err);
        showToast('Network error', 'error');
        createBtn.classList.remove('loading');
        createBtn.disabled = false;
      }
    });
  }

  // Search / filter
  const searchInput = $('#searchInput');
  const table = $('#linksTable');
  if (searchInput && table) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      $$('#linksTable tbody tr').forEach((tr) => {
        const code = (tr.querySelector('.code-cell')?.textContent || '').toLowerCase();
        const target = (tr.querySelector('.target-cell')?.textContent || '').toLowerCase();
        if (!q || code.includes(q) || target.includes(q)) {
          tr.style.display = '';
        } else {
          tr.style.display = 'none';
        }
      });
    });
  }

  // Sort by clicks
  const sortBtn = $('#sortBtn');
  if (sortBtn && table) {
    let asc = false;
    sortBtn.addEventListener('click', () => {
      const tbody = table.tBodies[0];
      const rows = Array.from(tbody.rows);
      rows.sort((a, b) => {
        const av = parseInt(a.querySelector('.clicks')?.textContent || '0', 10);
        const bv = parseInt(b.querySelector('.clicks')?.textContent || '0', 10);
        return asc ? av - bv : bv - av;
      });
      rows.forEach((r) => tbody.appendChild(r));
      asc = !asc;
      sortBtn.textContent = `Sort by clicks ${asc ? '↑' : '↓'}`;
    });
  }

  // Copy button (uses navigator.clipboard)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const text = btn.getAttribute('data-copy').replace('/ ', '/'); // small fix if space inserted
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard');
    }).catch(() => {
      showToast('Copy failed', 'error');
    });
  });

  // Modal delete flow (AJAX)
  const modal = $('#modal');
  const modalCode = $('#modalCode');
  const modalConfirm = $('#modalConfirm');
  const modalCancel = $('#modalCancel');
  let pendingDeleteCode = null;

  // open modal when delete-btn clicked
  document.addEventListener('click', (e) => {
    const dbtn = e.target.closest('.delete-btn');
    if (!dbtn) return;
    pendingDeleteCode = dbtn.getAttribute('data-code');
    modalCode.textContent = pendingDeleteCode;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  // close modal
  const closeModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    pendingDeleteCode = null;
  };
  modal.addEventListener('click', (e) => {
    if (e.target.matches('[data-close]') || e.target === modal) closeModal();
  });
  modalCancel?.addEventListener('click', closeModal);

  // confirm delete: POST to /delete (web route) using fetch
  modalConfirm?.addEventListener('click', async () => {
    if (!pendingDeleteCode) return closeModal();
    modalConfirm.disabled = true;
    try {
      const res = await fetch('/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: pendingDeleteCode })
      });
      if (!res.ok) {
        showToast('Delete failed', 'error');
        modalConfirm.disabled = false;
        return;
      }
      // remove row from DOM with fade
      const row = document.getElementById(`row-${pendingDeleteCode}`);
      if (row) {
        row.style.transition = 'opacity .22s ease, transform .22s ease';
        row.style.opacity = '0';
        row.style.transform = 'scale(.98)';
        setTimeout(() => row.remove(), 240);
      }
      showToast(`Deleted ${pendingDeleteCode}`);
      closeModal();
    } catch (err) {
      console.error(err);
      showToast('Delete error', 'error');
      modalConfirm.disabled = false;
    }
  });

  // highlight newly created row if present (from server-side)
  const created = window.__TINYLINK && window.__TINYLINK.created;
  if (created) {
    const r = document.getElementById(`row-${created}`);
    if (r) {
      r.classList.add('new-row');
      // scroll into view
      r.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // remove highlight after 4s
      setTimeout(() => r.classList.remove('new-row'), 4500);
      showToast('Short URL created', 'success');
    }
  }

  // copy on stats page if present
  const copyStat = $('#copyStat');
  if (copyStat) {
    copyStat.addEventListener('click', (e) => {
      const text = copyStat.getAttribute('data-copy').replace('/ ', '/');
      navigator.clipboard.writeText(text).then(() => showToast('Copied link'), () => showToast('Copy failed', 'error'));
    });
  }

  // Graceful keyboard handling: ESC closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.getAttribute('aria-hidden') === 'false') closeModal();
    }
  });
})();
