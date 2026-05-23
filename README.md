# Moddable.Games — Master Deck

A multi-audience HTML presentation system for Moddable.Games. One master deck, multiple filtered views for different audiences.

## Quick start

Open `index.html` in a browser. Arrow keys navigate between slides.

| URL | Audience | Slides |
|---|---|---|
| `?deck=opportunities` | Angels / partners | 20 |
| `?deck=crowdfunding` | Backers / campaign supporters | 15 |
| `?deck=internal` | Team (shows all slides + deck-membership pills) | 43 |
| `?deck=press` | Journalists / content creators | 11 |
| `?deck=partner` | Distributors / retail buyers | 10 |
| `?deck=expo` | Convention booth loop | 9 |
| `?deck=hiring` | Potential hires / collaborators | 7 |
| `?deck=product` | Per-game launch (customers) | 8 |
| No param | Splash page (no deck access) | — |

Works with GitHub Pages — deploy the repo root directly.

## Structure

```
index.html              The master deck (all 43 slides)
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
archive/                PDF export, print version, standalone, content.md
reference/              Design system UI kits + previews (proof-of-work)
```

## How filtering works

Each `<section>` slide has a `data-decks` attribute listing which audiences see it (e.g. `data-decks="opportunities internal crowdfunding"`). The `deck-filter.js` script reads `?deck=` from the URL, sets `data-deck-skip` on non-matching slides, and updates page numbers to reflect the filtered count.

## PDF generation

The `<deck-stage>` component supports `@media print` — use the browser's Print > Save as PDF (landscape, no margins) for a clean one-slide-per-page export. Skipped slides are excluded from print.

## Changelog

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
- Cross-project fact audit: 7 issues created on moddable-website (#36–42)

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
