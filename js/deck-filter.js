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

  // Block search engines from all decks except press
  if (activeDeck !== 'press') {
    var noindex = document.createElement('meta');
    noindex.name = 'robots';
    noindex.content = 'noindex, nofollow';
    document.head.appendChild(noindex);
  }

  var allSections = Array.from(document.querySelectorAll('deck-stage section[data-decks]'));

  // Generate slug from screen label (strip leading number, lowercase, hyphenate)
  function slugify(label) {
    return label.replace(/^\d+\s*/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  // Assign data-slide-id to every slide
  allSections.forEach(function (slide) {
    var label = slide.getAttribute('data-screen-label') || '';
    slide.setAttribute('data-slide-id', slugify(label));
  });

  // Mark non-matching slides as skipped
  if (activeDeck !== 'internal') {
    allSections.forEach(function (slide) {
      var tags = slide.getAttribute('data-decks').split(' ');
      if (!tags.includes(activeDeck)) {
        slide.setAttribute('data-deck-skip', '');
      }
    });
  }

  // Renumber visible slides
  var visibleCount = 0;
  var visibleSlides = [];
  allSections.forEach(function (slide) {
    if (!slide.hasAttribute('data-deck-skip')) {
      visibleCount++;
      visibleSlides.push(slide);
    }
  });
  visibleSlides.forEach(function (slide, i) {
    var label = ((i + 1) < 10 ? '0' : '') + (i + 1) + ' / ' + visibleCount;
    slide.querySelectorAll('.pagenum').forEach(function (el) {
      el.textContent = label;
    });
  });

  // Resolve initial hash — support both slug and numeric
  var initialHash = window.location.hash.replace('#', '');
  var startAbsIndex = 0;
  if (initialHash) {
    var numericHash = parseInt(initialHash, 10);
    if (!isNaN(numericHash) && String(numericHash) === initialHash) {
      // Numeric hash: find Nth visible slide
      var target = Math.min(Math.max(numericHash, 1), visibleCount) - 1;
      startAbsIndex = allSections.indexOf(visibleSlides[target]);
    } else {
      // Slug hash: find matching slide
      for (var i = 0; i < allSections.length; i++) {
        if (allSections[i].getAttribute('data-slide-id') === initialHash && !allSections[i].hasAttribute('data-deck-skip')) {
          startAbsIndex = i;
          break;
        }
      }
    }
  }

  // Update title eyebrow
  var titleEyebrow = document.querySelector('section[data-slide-id="title"] .eyebrow');
  if (titleEyebrow) {
    titleEyebrow.innerHTML = '<span class="arrow">▲</span> MODDABLE.GAMES · ' + DECKS[activeDeck].label.toUpperCase() + ' · 2026';
  }

  // Helper: get visible index from absolute index
  function visibleIndexOf(absIndex) {
    var vis = 0;
    for (var i = 0; i <= absIndex; i++) {
      if (!allSections[i].hasAttribute('data-deck-skip')) vis++;
    }
    return vis;
  }

  // Deferred UI (badge, pills, shadow DOM patching, initial navigation)
  document.addEventListener('DOMContentLoaded', function () {

    if (activeDeck === 'internal') {
      allSections.forEach(function (slide) {
        var tags = slide.getAttribute('data-decks').split(' ');
        var container = document.createElement('div');
        container.className = 'deck-pills';
        tags.forEach(function (tag) {
          if (tag === 'internal') return;
          var pill = document.createElement('a');
          pill.className = 'deck-pill deck-pill-' + tag;
          pill.textContent = DECKS[tag] ? DECKS[tag].label : tag;
          pill.href = '?deck=' + tag + '#' + slide.getAttribute('data-slide-id');
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
          stage.addEventListener('slidechange', function (e) {
            var absIndex = e.detail.index;
            var visIdx = visibleIndexOf(absIndex);
            currentEl.textContent = String(visIdx);
            var slug = allSections[absIndex].getAttribute('data-slide-id');
            history.replaceState(null, '', window.location.pathname + window.location.search + '#' + slug);
          });
          currentEl.textContent = String(visibleIndexOf(startAbsIndex) || 1);
        }
        // Navigate to initial slide if hash was provided
        if (startAbsIndex > 0 && stage.goTo) {
          stage.goTo(startAbsIndex);
        }
      } else {
        requestAnimationFrame(patchShadowDOM);
      }
    }
    setTimeout(patchShadowDOM, 100);
  });
})();
