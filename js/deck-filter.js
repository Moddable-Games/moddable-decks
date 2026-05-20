(function () {
  var DECKS = {
    opportunities: { label: 'Opportunities', color: '#d11a1a' },
    crowdfunding: { label: 'Crowdfunding', color: '#3a9928' },
    internal: { label: 'Master Plan', color: '#0c4f8d' }
  };

  var params = new URLSearchParams(window.location.search);
  var activeDeck = params.get('deck');

  // No deck param = splash page
  if (!activeDeck || !DECKS[activeDeck]) {
    document.addEventListener('DOMContentLoaded', function () {
      var stage = document.querySelector('deck-stage');
      if (stage) stage.style.display = 'none';
      if (window.location.hash) history.replaceState(null, '', window.location.pathname);

      var splash = document.createElement('div');
      splash.innerHTML = ''
        + '<div style="position:fixed;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--mg-font-body);color:#fff;z-index:9999;">'
        + '  <img src="assets/moddable-logo-white.png" alt="Moddable.Games" style="height:48px;margin-bottom:48px;opacity:0.9;"/>'
        + '  <h1 style="font-family:var(--mg-font-display);font-size:64px;font-weight:600;letter-spacing:-1.5px;margin:0;text-align:center;line-height:1.1;">Making games<br/>you already own.</h1>'
        + '  <p style="font-size:22px;color:rgba(255,255,255,0.6);margin-top:24px;text-align:center;max-width:600px;">Moddable.Games is a tabletop ecosystem — open-source rulebooks, a hex-grid online engine, and a marketplace for modders.</p>'
        + '  <div style="margin-top:56px;display:flex;gap:16px;">'
        + '    <a href="https://moddable.games" style="display:inline-flex;align-items:center;height:56px;padding:0 32px;border-radius:9999px;background:var(--mg-blue);color:#fff;font-size:18px;font-weight:600;text-decoration:none;">Visit moddable.games</a>'
        + '    <a href="https://nukes.moddable.games" style="display:inline-flex;align-items:center;height:56px;padding:0 32px;border-radius:9999px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);color:#fff;font-size:18px;text-decoration:none;">Play Nukes</a>'
        + '  </div>'
        + '  <p style="margin-top:80px;font-family:var(--mg-font-mono);font-size:12px;color:rgba(255,255,255,0.3);letter-spacing:0.1em;">MODDABLE.GAMES IS FAN-MADE AND NOT AFFILIATED WITH ANY RIGHTS-HOLDER</p>'
        + '</div>';
      document.body.appendChild(splash);
    });
    return;
  }

  // Clamp hash to visible slide count — defer until after filtering
  var _clampHash = true;

  // SYNCHRONOUS — runs before deck-stage.js registers the custom element
  if (activeDeck !== 'internal') {
    var slides = document.querySelectorAll('deck-stage section[data-decks]');
    slides.forEach(function (slide) {
      var tags = slide.getAttribute('data-decks').split(' ');
      if (!tags.includes(activeDeck)) {
        slide.setAttribute('data-deck-skip', '');
      }
    });
  }

  // Deferred UI updates (need DOM fully ready)
  document.addEventListener('DOMContentLoaded', function () {
    // Update title slide eyebrow
    var titleEyebrow = document.querySelector('section[data-screen-label="01 Title"] .eyebrow');
    if (titleEyebrow) {
      titleEyebrow.innerHTML = '<span class="arrow">▲</span> MODDABLE.GAMES · ' + DECKS[activeDeck].label.toUpperCase() + ' · 2026';
    }

    // Badge (not for internal — internal gets per-slide pills instead)
    var badge = null;
    if (activeDeck !== 'internal') {
      badge = document.createElement('div');
      badge.textContent = DECKS[activeDeck].label;
      badge.style.cssText = 'position:fixed;top:12px;right:12px;z-index:9999;padding:6px 16px;border-radius:9999px;font-family:var(--mg-font-mono);font-size:12px;letter-spacing:0.1em;color:#fff;background:' + DECKS[activeDeck].color + ';opacity:0.85;pointer-events:none;';
      document.body.appendChild(badge);
    }

    // Renumber visible slides
    var visibleCount = 0;
    document.querySelectorAll('deck-stage section[data-decks]').forEach(function (slide) {
      if (!slide.hasAttribute('data-deck-skip')) visibleCount++;
    });
    var idx = 0;
    document.querySelectorAll('deck-stage section[data-decks]').forEach(function (slide) {
      if (!slide.hasAttribute('data-deck-skip')) {
        idx++;
        var pagenum = slide.querySelector('.pagenum');
        if (pagenum) {
          pagenum.textContent = (idx < 10 ? '0' : '') + idx + ' / ' + visibleCount;
        }
      }
    });

    // Patch shadow DOM: hide skipped thumbs + fix total counter
    function patchShadowDOM() {
      var stage = document.querySelector('deck-stage');
      if (stage && stage.shadowRoot) {
        var s = document.createElement('style');
        s.textContent = '.thumb[data-skip] { display: none !important; }';
        stage.shadowRoot.appendChild(s);

        var totalEl = stage.shadowRoot.querySelector('.total');
        if (totalEl) totalEl.textContent = String(visibleCount);
      } else {
        requestAnimationFrame(patchShadowDOM);
      }
    }
    setTimeout(patchShadowDOM, 100);

    // Per-slide deck membership pills (internal only)
    if (activeDeck === 'internal') {
      var TAG_COLORS = { opportunities: '#d11a1a', crowdfunding: '#3a9928' };
      document.querySelectorAll('deck-stage section[data-decks]').forEach(function (slide) {
        var tags = slide.getAttribute('data-decks').split(' ');
        var container = document.createElement('div');
        container.style.cssText = 'position:absolute;top:12px;right:12px;z-index:10;display:flex;gap:6px;';
        tags.forEach(function (tag) {
          if (tag === 'internal') return;
          if (!TAG_COLORS[tag]) return;
          var pill = document.createElement('span');
          pill.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
          pill.style.cssText = 'display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:9999px;font-family:var(--mg-font-mono);font-size:12px;letter-spacing:0.1em;color:#fff;background:' + TAG_COLORS[tag] + ';opacity:0.85;pointer-events:none;';
          container.appendChild(pill);
        });
        slide.appendChild(container);
      });
    }

    // Clamp hash if it exceeds visible slide count
    if (_clampHash && window.location.hash) {
      var hashNum = parseInt(window.location.hash.replace('#', ''), 10);
      if (hashNum > visibleCount) {
        history.replaceState(null, '', window.location.pathname + window.location.search + '#1');
        var stage2 = document.querySelector('deck-stage');
        if (stage2 && stage2.goto) stage2.goto(0);
      }
    }
  });
})();
