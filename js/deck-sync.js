/**
 * deck-sync.js — Hydrates slide content from synced.json (build-time data from moddable-website).
 * Fallback-safe: if fetch fails, hardcoded HTML stays untouched.
 */
(function () {
  'use strict';

  const DATA_URL = 'data/synced.json';
  let _data = null;

  window.DeckSync = {
    game(slug) { return _data && _data.games && _data.games[slug]; },
    team(handle) { return _data && _data.team && _data.team.find(t => t.handle === handle); },
    milestones() { return _data && _data.milestones || []; },
    mods() { return _data && _data.mods || []; },
    ready: false
  };

  function hydrate() {
    if (!_data) return;

    document.querySelectorAll('[data-sync-game]').forEach(el => {
      const slug = el.getAttribute('data-sync-game');
      const field = el.getAttribute('data-sync-field');
      const game = _data.games && _data.games[slug];
      if (game && field && game[field] != null) {
        el.textContent = game[field];
      }
    });

    document.querySelectorAll('[data-sync-team]').forEach(el => {
      const handle = el.getAttribute('data-sync-team');
      const field = el.getAttribute('data-sync-field');
      const member = _data.team && _data.team.find(t => t.handle === handle);
      if (member && field && member[field] != null) {
        el.textContent = member[field];
      }
    });

    document.querySelectorAll('[data-sync-milestone]').forEach(el => {
      const idx = parseInt(el.getAttribute('data-sync-milestone'), 10);
      const field = el.getAttribute('data-sync-field');
      const ms = _data.milestones && _data.milestones[idx];
      if (ms && field && ms[field] != null) {
        el.textContent = ms[field];
      }
    });

    window.DeckSync.ready = true;
    document.dispatchEvent(new CustomEvent('deck-sync-ready', { detail: _data }));
  }

  fetch(DATA_URL)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(data => {
      _data = data;
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hydrate);
      } else {
        hydrate();
      }
    })
    .catch(() => {});
})();
