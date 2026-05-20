# Moddable.Games — Investor Pitch Deck

A 20-slide HTML pitch deck for Moddable.Games, targeting $250K–$500K from angel investors.

## Quick start

Open `index.html` in a browser. Arrow keys navigate between slides. Works with GitHub Pages — deploy the repo root directly.

## Structure

```
index.html          The deck (source of truth)
css/
  deck.css          Deck layout + component styles
  colors_and_type.css   Design tokens (colour, type, spacing)
js/
  deck-stage.js     Custom element handling navigation, scaling, print
assets/
  team/             Transparent PNG cutouts (Mark, Kevin, Akmal, Iqbal)
  dungeon-chess/    Dungeon Chess logo suite
  hex-horizon.jpg   Hero backdrop
  moddable-logo.png    Brand mark
fonts/              Daggersquare, Inter, JetBrains Mono
archive/            PDF export, print version, standalone, content.md
reference/          Design system UI kits + previews (proof-of-work appendix)
```

## The deck

| Slide | Title |
|---|---|
| 01 | Title |
| 02 | Mission |
| 03 | Nukes (first game) |
| 04 | Why hexagons |
| 05 | Online engine |
| 06 | Bots |
| 07 | Pipeline |
| 08 | Vision |
| 09 | Market size |
| 10 | Business models |
| 11 | Beyond hexes (traction) |
| 12 | Go-to-market (mods) |
| 13 | Chess |
| 14 | Dungeon Chess |
| 15 | 18-month milestones |
| 16 | Competitive landscape + moat |
| 17 | Team + credibility |
| 18 | Use of funds |
| 19 | The ask ($250K–$500K) |
| 20 | Contact |

## Investment structure

- **Equity**: Pre-seed stake in Moddable.Games (valuation negotiable)
- **Game royalties**: 5–15% net revenue share on a named title, capped at 3x return

## PDF generation

The `<deck-stage>` component supports `@media print` — use the browser's Print > Save as PDF (landscape, no margins) for a clean one-slide-per-page export.

## Changelog

| Date | Change |
|---|---|
| 2026-05-20 | CSS extraction complete (415 inline styles → external deck.css). Milestones, moat, and credibility slides added. |
| 2026-05-19 | Repo restructured. Slides 16, 18, 19 rewritten. Team cutouts, Dungeon Chess logo integrated. |
