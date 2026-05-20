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
      var splash = document.getElementById('splash');
      if (splash) splash.removeAttribute('hidden');
    });
    return;
  }

  // Clamp hash to visible slide count
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

  // Deferred UI updates
  document.addEventListener('DOMContentLoaded', function () {
    // Update title slide eyebrow
    var titleEyebrow = document.querySelector('section[data-screen-label="01 Title"] .eyebrow');
    if (titleEyebrow) {
      titleEyebrow.innerHTML = '<span class="arrow">▲</span> MODDABLE.GAMES · ' + DECKS[activeDeck].label.toUpperCase() + ' · 2026';
    }

    // Badge (not for internal)
    if (activeDeck !== 'internal') {
      var badge = document.createElement('div');
      badge.className = 'deck-badge deck-badge-' + activeDeck;
      badge.textContent = DECKS[activeDeck].label;
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

    // Per-slide deck-membership pills (internal only)
    if (activeDeck === 'internal') {
      document.querySelectorAll('deck-stage section[data-decks]').forEach(function (slide) {
        var tags = slide.getAttribute('data-decks').split(' ');
        var container = document.createElement('div');
        container.className = 'deck-pills';
        tags.forEach(function (tag) {
          if (tag === 'internal') return;
          var pill = document.createElement('span');
          pill.className = 'deck-pill deck-pill-' + tag;
          pill.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
          container.appendChild(pill);
        });
        slide.appendChild(container);
      });
    }

    // Hide skipped thumbnails in shadow DOM
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
