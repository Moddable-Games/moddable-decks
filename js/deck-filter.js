(function () {
  var DATA = window.DeckData;
  if (!DATA) return;

  var DECKS = DATA.decks;
  var params = new URLSearchParams(window.location.search);
  var activeDeck = params.get('deck');

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

  // Mark non-matching slides as skipped (synchronous — DOM is available)
  if (activeDeck !== 'internal') {
    var slides = document.querySelectorAll('deck-stage section[data-decks]');
    slides.forEach(function (slide) {
      var tags = slide.getAttribute('data-decks').split(' ');
      if (!tags.includes(activeDeck)) {
        slide.setAttribute('data-deck-skip', '');
      }
    });
  }

  // Renumber visible slides immediately (DOM exists since scripts are at end of body)
  var visibleCount = 0;
  document.querySelectorAll('deck-stage section[data-decks]').forEach(function (slide) {
    if (!slide.hasAttribute('data-deck-skip')) visibleCount++;
  });
  var idx = 0;
  document.querySelectorAll('deck-stage section[data-decks]').forEach(function (slide) {
    if (!slide.hasAttribute('data-deck-skip')) {
      idx++;
      var label = (idx < 10 ? '0' : '') + idx + ' / ' + visibleCount;
      slide.querySelectorAll('.pagenum').forEach(function (el) {
        el.textContent = label;
      });
    }
  });

  // Update title eyebrow
  var titleEyebrow = document.querySelector('section[data-screen-label="01 Title"] .eyebrow');
  if (titleEyebrow) {
    titleEyebrow.innerHTML = '<span class="arrow">▲</span> MODDABLE.GAMES · ' + DECKS[activeDeck].label.toUpperCase() + ' · 2026';
  }

  // Deferred UI (badge, pills, shadow DOM patching)
  document.addEventListener('DOMContentLoaded', function () {
    if (activeDeck !== 'internal') {
      var badge = document.createElement('div');
      badge.className = 'deck-badge deck-badge-' + activeDeck;
      badge.textContent = DECKS[activeDeck].label;
      document.body.appendChild(badge);
    }

    if (activeDeck === 'internal') {
      var allSlides = Array.from(document.querySelectorAll('deck-stage section[data-decks]'));
      allSlides.forEach(function (slide, slideIndex) {
        var tags = slide.getAttribute('data-decks').split(' ');
        var container = document.createElement('div');
        container.className = 'deck-pills';
        tags.forEach(function (tag) {
          if (tag === 'internal') return;
          var pill = document.createElement('a');
          pill.className = 'deck-pill deck-pill-' + tag;
          pill.textContent = DECKS[tag] ? DECKS[tag].label : tag;
          var posInDeck = allSlides.slice(0, slideIndex + 1).filter(function (s) {
            return s.getAttribute('data-decks').split(' ').indexOf(tag) !== -1;
          }).length;
          pill.href = '?deck=' + tag + '#' + posInDeck;
          container.appendChild(pill);
        });
        slide.appendChild(container);
      });
    }

    function patchShadowDOM() {
      var stage = document.querySelector('deck-stage');
      if (stage && stage.shadowRoot) {
        var s = document.createElement('style');
        s.textContent = '.thumb[data-skip] { display: none !important; }';
        stage.shadowRoot.appendChild(s);
        var totalEl = stage.shadowRoot.querySelector('.total');
        if (totalEl) totalEl.textContent = String(visibleCount);
        var currentEl = stage.shadowRoot.querySelector('.current');
        if (currentEl && activeDeck !== 'internal') {
          var allSections = Array.from(document.querySelectorAll('deck-stage section[data-decks]'));
          stage.addEventListener('slidechange', function (e) {
            var absIndex = e.detail.index;
            var visIndex = 0;
            for (var i = 0; i <= absIndex; i++) {
              if (!allSections[i].hasAttribute('data-deck-skip')) visIndex++;
            }
            currentEl.textContent = String(visIndex);
            history.replaceState(null, '', window.location.pathname + window.location.search + '#' + visIndex);
          });
          var initIndex = parseInt(currentEl.textContent, 10) - 1;
          var visInit = 0;
          for (var i = 0; i <= initIndex && i < allSections.length; i++) {
            if (!allSections[i].hasAttribute('data-deck-skip')) visInit++;
          }
          currentEl.textContent = String(visInit || 1);
        }
      } else {
        requestAnimationFrame(patchShadowDOM);
      }
    }
    setTimeout(patchShadowDOM, 100);

    if (window.location.hash) {
      var hashNum = parseInt(window.location.hash.replace('#', ''), 10);
      if (hashNum > visibleCount) {
        history.replaceState(null, '', window.location.pathname + window.location.search + '#1');
        var stage2 = document.querySelector('deck-stage');
        if (stage2 && stage2.goto) stage2.goto(0);
      }
    }
  });
})();
