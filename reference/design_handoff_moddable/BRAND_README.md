# Moddable.Games Design System

A design system for **Moddable.Games** — a tabletop game modding community that publishes rulebook mods for games you already own (Catan, Monopoly, Talisman, Twilight Imperium) and develops its own open-source moddable games.

> _"Creating games you already own."_

This system inherits its structural backbone from Revolut's marketing design language — **two-mode canvas, pill CTAs, flat elevation, scarce-accent discipline** — then re-skins everything for a tabletop-gaming, lore-friendly community.

---

## Sources

| Source | Location |
|---|---|
| Existing brand site | <https://moddable.games/> |
| Logo (white wordmark, for dark surfaces) | `assets/moddable-logo-white.png` (uploaded by user) |
| Logo (dark wordmark, for light surfaces) | `assets/moddable-logo.png` (uploaded by user) |
| Brand reference image (cosmic / hex-grid horizon) | `assets/brand-reference-cosmic-hex.png` (uploaded by user) |
| Structural design ancestry | Revolut marketing canvas spec (see `uploads/design.md`) |

No codebase or Figma was attached for Moddable.Games. The current website (WordPress + Astra theme) is being intentionally moved past — this system is a redesign, not a recreation.

---

## Index

| File | What's in it |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Agent-skill entry-point for `moddable-design`. |
| `colors_and_type.css` | All tokens (color, type, spacing, radius, the hex-grid SVG background motif) as CSS variables + semantic typography classes. |
| `assets/moddable-logo.png` | Dark wordmark + RGB cube — for light surfaces. |
| `assets/moddable-logo-white.png` | White wordmark + RGB cube — for dark surfaces. |
| `assets/brand-reference-cosmic-hex.png` | Reference for the cosmic-blue + hex-grid hero treatment. |
| `assets/icons/*.svg` | UI icon set (Lucide stand-in — same monoline 24×24 grid as the original system). |
| `preview/` | Single-concept design cards that render in the Design System tab. |
| `ui_kits/marketing/` | Marketing site UI kit — components + interactive `index.html`. |
| `ui_kits/marketing/Hero Variations.html` | Three hero directions side-by-side on a design canvas. |
| `ui_kits/marketing/Nuke Catan Explorations.html` | Four hero treatments for the Nuke Catan family illustration. |
| `ui_kits/mod-detail/index.html` | Mod detail page — Talisman: Hexed — rulebook viewer, downloads, components list, related mods. |
| `ui_kits/game-detail/index.html` | Game detail page — Endless Skies — hero, how-it-plays, mod hooks, community mods. |
| `ui_kits/tools/index.html` | The tabletop workbench — dice roller, name generator, score tracker. |
| `ui_kits/submit/index.html` | 3-step mod-submission form. |
| `uploads/design.md` | Ancestral Revolut spec, kept for traceability. |

---

## Content Fundamentals

Moddable's voice is **lore-heavy, witty, and warm** — the opposite of Revolut's flat declarative-fintech tone. Headlines lean into table-talk: _"Are you ready to nuke Catan?"_, _"The House Always Wins"_, _"Conquering the constraints of chess."_ Copy reads like a clever GM pitching the next campaign.

| Aspect | Pattern | Example |
|---|---|---|
| Voice | First-person plural ("we"); reader is "you" with occasional "fellow Moddables" | "We're creating games you already own." |
| Headline rhythm | Often a question or a punchy declarative + verb | "Are you ready to nuke Catan?" · "The dice are loaded." |
| Capitalisation | **Sentence case** for body + buttons. **Title Case** is _allowed_ on flagship mod names and the brand tagline. | "Talisman: Hexed" · "Beyond The Box" · "View the rules" |
| Verbs in CTAs | Strong imperative; sometimes thematic | "Roll into it" · "Download the rules" · "Join the table" · "Mod this game" |
| Italics | Used freely for emphasis + game titles | _Twilight Imperium_, _Catan_ |
| Exclamations | **Allowed** — sparingly, for the brand stinger and rare hype moments | "The house always wins!" — _at most once per page_ |
| Emoji | **Not in product UI.** Dice/cube/lightning icons live as SVG. Emoji is fine in Discord blurbs and community footer copy if you must. | — |
| Numerals | Digits; tabletop notation in mono (`2d6+1`, `3–5 players`, `45 min`) | — |
| Game stats | Set in `--mg-font-mono` (JetBrains Mono) — players · time · age | `3–5 players · 45 min · 12+` |
| Footer disclosure | Plain, slightly self-deprecating | "Moddable.Games is fan-made and not affiliated with Hasbro, Asmodee, Fantasy Flight, or any rights-holder." |

### Copy do's
- Lead headlines with a question or a verb.
- Embrace specifics — game titles, rule changes, component counts. _"4 new tile types, 12 reshuffled cards."_
- Use mono for any rule-text that mimics game language. It anchors the system in tabletop reality.

### Copy don'ts
- Don't bury the mod under marketing fluff — Moddables are here for rules and downloads, give them that first.
- Don't write like a video-game publisher ("EPIC NEW EXPERIENCE!"). The voice is closer to a board-game review zine.
- Don't use marketing-startup phrases ("game-changing", "revolutionary"). Especially not on a games site.

---

## Visual Foundations

### Canvas — two-mode rhythm (inherited)
Full-bleed bands switch between **true black** (`#000000`, storytelling — hero, featured mods, news) and **warm-ivory** (`#f5f4ef`, catalogue — mod gallery, FAQ, downloads). The warmth — vs. Revolut's pure white — pushes the system toward parchment-and-rulebook without breaking the structural backbone.

### Color vibe — RGB cube + cosmic mid-tone
The brand mark is a hexagonal cube with **red top, green left, blue right** faces. The system uses these as three distinct primaries, with **one per surface**:

- **Mod Blue** `#0c4f8d` — the default primary brand accent. Doubles as the cosmic-horizon color.
- **Mod Red** `#d11a1a` — destructive ("Nuke"), featured-tier mods, "Live update" tags.
- **Mod Green** `#3a9928` — go / new / "ready to play".

Plus a **cosmic-bright** (`#3a7be8`) used in hero gradients and the hex-grid texture overlay. The cosmic palette is decorative; the three RGB primaries are functional.

### Typography
- **Display + body**: Inter Tight 600 / Inter 400. Tight tracking on display sizes (same Revolut bones).
- **Pixel display** — **Daggersquare** (Iconian Fonts, hosted in `fonts/`) — for the **brand voice**. Reserved for the wordmark, hero eyebrows, and one structural moment per page (e.g. a section opener). **Never for prose.**
- **Mono** — `JetBrains Mono` — for stats, rule notation, mod versions (`v1.2.0`), dice (`2d6+1`), file types.

### Spacing
Base 4px, same scale as Revolut. Editorial: **88px section padding**, **120px on hero + featured bands**, **32px internal card padding**.

### Radius
- **Pills (`9999px`)** for all buttons (kept).
- **20px** for mod cards, plan cards, feature cards.
- **12px** for inputs, download tiles, component cards.
- **6px** (`sm`) — tightened from Revolut's 8px to feel slightly more aligned with pixel motif.
- **0px** for hero bands and the hex-grid surface texture.

### Elevation — still flat
**No drop shadows.** Depth comes from canvas switches and a single luminance step on dark (`#000000` → `#161721`). The cosmic-blue gradient on hero bands does its own atmospheric work — that's the only "depth" allowed.

### Hex-grid texture — _the new brand signature_
A subtle SVG hex-grid background overlay (provided as `--mg-hex-grid`) goes on dark hero bands and replaces the bare blackness with a structural-but-faint pattern. Always at low opacity (10–20%). Always over a vertical cosmic-blue gradient from `--mg-cosmic-deep` to black. This is where Moddable diverges hard from Revolut's pure flat blackness.

### Backgrounds
- **Hero (dark)**: vertical gradient (`--mg-cosmic-deep` → `--mg-canvas-dark`) + hex-grid overlay + optional electric-blue glow band on the horizon line.
- **Catalogue (light)**: solid `--mg-surface-soft` (warm ivory). No texture.
- **Featured mod**: solid `--mg-blue` block as a card surface (mirrors Revolut's featured-plan inversion).
- **No glassmorphism, no blur, no grain.**

### Imagery treatment
- **Cosmic hero**: galaxy gradients or hex-grid horizons (the brand reference).
- **Mod thumbnails**: photographic component shots (board, dice, cards) — square crops, 12px radius, slight cool cast to match.
- **Iconography is illustrative** (see Iconography section).

### Hover, press, focus
- **Hover** — buttons darken by ~10%; cards lift via a 1px hairline-colour shift (no shadow).
- **Press** — `--mg-red-deep` / `--mg-green-deep` / `--mg-blue-deep` swap in as the background. White-pill primary CTAs swap to `--mg-faint` on press.
- **Focus ring** — `outline: 2px solid var(--mg-blue-bright); outline-offset: 3px`. Always keyboard-visible.

### Animation
Still mostly static. When motion appears:
- Easing: `cubic-bezier(.2, .8, .2, 1)` (a softer ease-out than Revolut's).
- Duration: 180ms for hover, 360ms for reveal.
- Fade-and-rise is the default entry pattern. Plus one allowed exception: **hex-grid float** — a slow 30s background-position drift on the hero hex-grid, _imperceptible until you notice it_.

### Layout rules
- Content max-width **1200px**; hero bands break out full-bleed.
- Nav fixed at 64px tall, dark canvas.
- Mod gallery: 3-up at desktop → 2-up tablet → 1-up mobile.
- Each mod card carries a coloured top stripe in `--mg-red` / `--mg-green` / `--mg-blue` keyed to the mod's category (Reskin / Rebalance / Total Conversion). This is the system's signature card detail.

---

## Iconography

The brand mark itself — the **RGB hex cube** — is the primary visual identity moment. It appears at:
- 32px in the nav (wordmark beside it)
- ~120px as the hero centrepiece on the home page
- As a **die face** in the dice-roller tool (each face shows the cube glyph in a different orientation)

### UI icons
**Lucide** (CDN: `https://unpkg.com/lucide-static@latest/icons/`) is the substitute UI icon set — same 24×24 monoline grid, rounded caps, 2px stroke. Copied selectively into `assets/icons/`.

### Tabletop-specific iconography (build as needed)
- `d6`, `d8`, `d10`, `d12`, `d20` — die shapes
- `players` — 2-3 silhouettes
- `time` — clock
- `meeple` — board-game token silhouette
- `cube` — the brand mark, simplified

For now, these are placeholders or substituted with the closest Lucide glyph. **Flag**: a tabletop icon family doesn't exist yet — flag to the user when you reach for one.

### Emoji
- **Not in UI**. Not in mod descriptions. Not in buttons.
- **Allowed** in long-form news/blog body copy and the Discord-funnel block in the footer.

### Logo placement rules
- The full wordmark+mark goes in the dark nav, ~32px tall.
- The mark **alone** can be used at small sizes (favicon, social).
- **Never** rotate the cube. **Never** recolour the faces. **Never** flatten it to a 2D hex.

---

## Caveats (read before shipping)

1. **`Daggersquare` is the active brand pixel font** (Iconian Fonts, free for personal use — see `fonts/Daggersquare-EULA.txt`). It's the closest match to the Moddable.Games logo letterforms. **Commercial use may require a paid licence — verify with Iconian before shipping to production.** Other Google Fonts candidates (Silkscreen, Bungee, Workbench, etc.) are in `preview/brand-pixel-fonts.html` if Daggersquare's licence becomes a blocker.
2. **Tabletop icon family is now in `assets/icons/`** — `d4`, `d6`, `d8`, `d12`, `d20`, `meeple`, `players`, `time`, `hex`, `download`, `mod`, `roll`. Drawn at the same 24×24 / 2px-stroke spec as Lucide so the two sets sit happily together. Hand-drawn — happy to redo any that don't read.
3. **The mod gallery + featured-mod copy is now real** for Talisman: Hexed, Econopoly, Hyper Imperium. The other three (Nuke Catan, Conquering Constraints of Chess, Beyond the Box) are invented copy to fill the 3×2 grid — flag if you want them removed.
4. **Mod-card categories (Reskin / Rebalance / Total Conversion) are a design construct I introduced.** The real moddable.games groups mods by base game, not by mod-type. Adopting the RGB category system would give you a much sharper taxonomy — but it's a brand decision, not a fait accompli.
5. **No real component photography.** Mod thumbnails are stylised cosmic gradients. Swap in board/dice/component shots when you have them.
6. **Inherited from Revolut**: pill CTAs, flat elevation, scarce-accent discipline, 4px base spacing. If any of those feel too "fintech-minimal" and not enough "games-zine-warm", flag and we'll diverge.
