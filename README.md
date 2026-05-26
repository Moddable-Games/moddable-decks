# Moddable.Games — Master Deck

A multi-audience HTML presentation system for Moddable.Games. One master deck, multiple filtered views for different audiences.

## Quick start

Open `index.html` in a browser. Arrow keys navigate between slides.

| URL | Audience | Slides |
|---|---|---|
| `?deck=opportunities` | Angels / partners | 25 |
| `?deck=crowdfunding` | Backers / campaign supporters | 19 |
| `?deck=internal` | Team (shows all slides + deck-membership pills) | 48 |
| `?deck=press` | Journalists / content creators | 13 |
| `?deck=partner` | Distributors / retail buyers | 12 |
| `?deck=expo` | Convention booth loop | 13 |
| `?deck=hiring` | Potential hires / collaborators | 7 |
| `?deck=product` | Per-game launch (customers) | 12 |
| No param | Splash page (no deck access) | — |

Works with GitHub Pages — deploy the repo root directly.

## Structure

```
index.html              The master deck (all 48 slides)
css/
  deck.css              Deck layout + component styles
  colors_and_type.css   Design tokens (colour, type, spacing)
js/
  deck-data.js          Deck definitions + slide metadata (API-readiness stage 1)
  deck-stage.js         Custom element: navigation, scaling, print
  deck-filter.js        Audience filtering, badges, slide numbering
assets/
  team/                 Transparent PNG cutouts
  dungeon-chess/        Dungeon Chess logo suite
  hex-horizon.jpg       Hero backdrop
  moddable-logo.png    Brand mark
fonts/                  Daggersquare, Inter, JetBrains Mono
scripts/                PDF generation (Puppeteer), version bump
```

## How filtering works

Each `<section>` slide has a `data-decks` attribute listing which audiences see it (e.g. `data-decks="opportunities internal crowdfunding"`). The `deck-filter.js` script reads `?deck=` from the URL, sets `data-deck-skip` on non-matching slides, and updates page numbers to reflect the filtered count.

## PDF generation

The `<deck-stage>` component supports `@media print` — use the browser's Print > Save as PDF (landscape, no margins) for a clean one-slide-per-page export. Skipped slides are excluded from print.

## Changelog

#### 2026-05-26
- Fixed PDF rendering: text-shadow caused dark rectangular bands in print — disabled in `@media print`
- Fixed PDF generation: headless Chrome rAF race condition caused blank PDFs for some decks
- Fixed slide 12 (Licensing): content overflow — compressed layout so "Why ShareAlike" section fits
- Added version system: `version.txt` + `scripts/bump.sh` propagating cache-busting `?v=` params
- Updated splash footer: licensing summary (CC-BY-SA 4.0 · Code MIT · Art proprietary)
- Updated tool URLs to web.moddable.games
- Added CNAME for decks.moddable.games
- Added ROADMAP tags to DC Adventures and Bots slides
- Removed fabricated traction stats from slide 11 (sessions/games per week)
- Closed issues #17, #18, #19, #24, #26, #28
- Created issues #29, #30, #31 for items requiring user assets
- Gitignored `reference/` and `archive/` for public release
- Updated README slide counts to match current 48-slide deck

#### 2026-05-24
- Full content review pass: verified ~30 factual claims with user
- Fixed engine version v0.4-alpha → v0.9.3 (slide 05)
- Fixed checkers stat: "30B" → "B+" (no defensible source for specific number)
- Fixed IGN URL slug: "crowdfunding" → "kickstarter" (verified article exists)
- Fixed dead Discord vanity link → working invite URL
- Fixed social handles: replaced non-existent Bluesky with real Instagram
- Replaced fabricated "4.2★ rating" with verified "$0 ad spend"
- Updated founded info: added UK incorporation (2025)
- Resolved marketplace blocker: building in-house
- Updated marketplace status: "scoping in progress"
- Removed inappropriate "fan-made" disclaimer from contact slide
- Removed content-review-checklist.md (all items now tracked in GitHub issues)
- Created issues #17–#26 covering all unverified/aspirational claims
- Cross-project issues created: moddable-chess #27–#28, website #43–#45, Nukes-Rulebook #25–#26

#### 2026-05-23
- Added title card slides before each game section (Nukes, Moddable Chess, Dungeon Chess) with proper logos
- Game logos sourced from moddable-website project (nukes-logo.png, mongo-logo.png, endless-skies-logo.png, moddable-chess-cube.svg)
- New species showcase slide (14b): 2x2 grid of Dungeon Chess prototype miniature art
- Renamed races → species on DC detail slide, updated mechanic callouts (Draft/Cannons/Terrain/Maps)
- Fixed external links missing `target="_blank" rel="noopener"`
- Converted changelog to date-headed bullet point format
- Self-hosted Google Fonts (Inter, Inter Tight, JetBrains Mono) — removed CDN dependency
- Slide transitions (300ms crossfade)
- Accessibility pass (ARIA roles, focus indicators, SVG labels)
- PDF export verified and fixed (deck badge hidden in print)
- Species images optimised (31MB → 1MB)
- Factual errors fixed (Nukes pipeline specs, WordPress claim, Discord count)
- Content review checklist generated (archive/content-review-checklist.md)
- Daggersquare font blocker resolved on internal slide
- 8 GitHub issues closed (#3, #4, #8, #9, #10, #12, #13, #14)
- Build-time data sync system: `scripts/sync-data.js` pulls from website JSON, `js/deck-sync.js` hydrates slides
- 23 data-sync attributes wired across slides 03, 07, 14, 15, 17
- Renamed "Nuke Chess" → "Nukes" throughout (10 instances)
- Dark card text contrast fix on ivory slides (CSS specificity)
- Social stats line width matched to 3-column grid
- Cross-project fact audit and fixes: version 0.9.3, 44 tiles, 75 tokens, Hyper Imperium 4–6hr, URL paths corrected
- Cross-project consistency document (archive/cross-project-consistency.md)
- Website stubs created: /press, /subscribe, /tools/decks, /tools/chess
- 15 total issues closed (8 deck + 7 website)

#### 2026-05-22
- Renamed all 132 numeric `is-N` classes to semantic names
- Consolidated CSS variables (game accents, deck-type colours, overlays)
- Team slide reworked: normalised photos to 800x1000 canvas with aligned heads, pop-out-of-card effect with shadow ground lines
- QR codes generated for expo slides (Nukes + Discord)
- Team data + assets propagated to moddable-website project

#### 2026-05-21
- Fixed footer overflow on 11 slides
- Fixed CSS specificity bug (ul.clean overriding .card-list margin)
- Card headings reduced to fit single lines in 3/4-col grids
- Dark-card text readability fix
- Community slide (36) columns aligned
- Data extraction: slide metadata to deck-data.js (API-readiness stage 1)
- 5 new deck types added (press, partner, expo, hiring, product)
- Crowdfunding deck expanded: stretch goals, social proof, why-back-us slides
- Removed Vision from crowdfunding
- SVG inline styles moved to CSS
- Fixed pre-existing SVG attribute corruption (x1/x2)
- Began is-N → semantic class rename (16 of 148 done)

#### 2026-05-20
- Inline styles extracted to deck.css (238 classes)
- Multi-audience filtering system added
- New slides: milestones, competitive + moat, pledge tiers, fulfilment, internal status/blockers/responsibilities

#### 2026-05-19
- Repo restructured
- Slides 18, 19 rewritten
- Team cutouts and Dungeon Chess logo integrated
