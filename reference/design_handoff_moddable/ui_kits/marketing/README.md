# Moddable.Games Marketing UI Kit

The public marketing canvas — the surfaces a visitor sees on moddable.games.

## Files

| File | What it is |
|---|---|
| `index.html` | Interactive demo. Opens on the dark cosmic hero, scroll to mod gallery → featured mod → news → community → footer. |
| `Hero Variations.html` | 3 hero directions on a design canvas — compare side-by-side. |
| `Buttons.jsx` | `<Btn>` — variants: primary, dark, outline-dark, outline-light, blue, green, red, pill. |
| `NavBar.jsx` | Top nav, 64px, dark canvas, logo + pixel Discord stinger + primary CTA. |
| `Hero.jsx` | Dark cosmic hero with hex-grid backdrop + pixel eyebrow + display headline. |
| `ModCard.jsx` + `ModGallery.jsx` | Signature mod card (RGB-coloured top stripe by category) + the 3-up gallery on warm-ivory. |
| `FeaturedMod.jsx` | Single full-bleed featured-mod band on dark with cube-glyph + stats row. |
| `NewsRow.jsx` | Three-up news/post tiles on warm-ivory. |
| `CommunityBand.jsx` | Discord/community CTA on dark with hex-grid floor. |
| `Footer.jsx` | Multi-column quicklinks + fan-disclaimer caption. |

## Conventions

- All buttons are pills. Cards are 20px radius. Mod cards have a 4px coloured top stripe keyed by category (Red = Total Conversion, Green = Rebalance, Blue = Reskin).
- The cosmic-blue gradient + hex-grid SVG belongs **only** on dark hero bands. Don't paste it on cards or light bands.
- Press Start 2P appears at most **twice per page** — once in the hero eyebrow, once in a section opener if needed.
- Mono is for stats (`3–5 players · 45 min · 12+`), mod versions (`v1.2.0`), file names (`rules.pdf`), dice (`2d6+1`).
