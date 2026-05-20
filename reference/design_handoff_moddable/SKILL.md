---
name: moddable-design
description: Use this skill to generate well-branded interfaces and assets for Moddable.Games, a tabletop game modding community that publishes rulebook mods (for Catan, Monopoly, Talisman, etc.) and develops its own open-source moddable games. Either for production or throwaway prototypes/mocks/etc. Contains brand guidelines, colors, type, fonts, assets, and UI kit components.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

This skill captures Moddable.Games' design system — a derivative of Revolut's structural marketing design (two-mode canvas, pill CTAs, flat elevation, scarce-accent discipline), re-skinned with:
- The brand's RGB hexagonal cube (red top, green left, blue right) as the mark
- A pixel-display accent font (Press Start 2P) used sparingly for brand moments
- A cosmic-blue + hex-grid texture motif on dark hero bands
- Warm-ivory `#f5f4ef` catalogue mode (vs. Revolut's pure white) — leans parchment/rulebook
- A lore-heavy, witty voice (vs. Revolut's flat fintech tone)
- JetBrains Mono for stats, rule notation, and mod versions

Key files:
- `README.md` — full content/visual fundamentals and iconography rules. **Read this first.**
- `colors_and_type.css` — all tokens as CSS variables (`--mg-red`, `--mg-green`, `--mg-blue`, `--mg-cosmic-deep`, `--mg-hex-grid`, etc.) plus semantic typography classes (`.mg-display-xl`, `.mg-pixel-md`, `.mg-mono-md`, etc.).
- `assets/moddable-logo.png` — official wordmark + mark.
- `assets/brand-reference-cosmic-hex.png` — reference for hero treatment.
- `assets/icons/` — Lucide-derived UI icons.
- `preview/` — single-concept cards (type, colors, spacing, components, brand). Sanity-check reference.
- `ui_kits/marketing/` — Marketing site UI kit. Open `index.html` to see it interactively.
- `ui_kits/marketing/Hero Variations.html` — 2-3 hero directions on a design canvas.
- `ui_kits/mod-detail/` — Mod detail page surface.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Hard rules — repeat back to yourself before designing
1. Canvas is `#000000` for storytelling and **warm-ivory `#f5f4ef`** for catalogue. Not pure white.
2. All buttons are pills (`border-radius: 9999px`). Cards are 20px radius. Inputs are 12px. Small chips are 6px.
3. Use **ONE** of the three RGB primaries per surface — Mod Red (destructive/featured), Mod Green (go/new), Mod Blue (default brand). Never combine all three in the same viewport outside the logo itself.
4. **Press Start 2P** is the brand voice — use it once or twice per page maximum. Never for prose. Never for buttons that already have a clear job (use Inter 600 for those).
5. Body type is **Inter 400** (or 600 emphasis). Display is **Inter Tight 600**.
6. Stats, rule text, dice notation, mod versions → **JetBrains Mono**.
7. No drop shadows. Anywhere. Depth = canvas + cosmic-gradient + hex-grid texture.
8. The hex-grid SVG (`--mg-hex-grid`) belongs ONLY on dark hero bands. Don't paste it on cards or light bands.
9. Voice is playful and lore-heavy. Questions and verbs lead headlines. Exclamations are allowed sparingly — at most one per page.
10. Never recolour the cube mark, never rotate it, never flatten it to a 2D hex.
