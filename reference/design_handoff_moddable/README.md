# Moddable.Games — Handoff for Claude Code

This document is the **developer-facing manifest** for implementing the Moddable.Games marketing site from the design references in this project. Read this alongside `README.md` (brand fundamentals) and `colors_and_type.css` (tokens).

---

## What's in this bundle

Everything in this project is a **design reference**, not production code. Files are working HTML prototypes that render with React + Babel (in-browser transpile) — useful for clicking through, screenshotting, and reading. They are **not how the production app should be built**. Re-implement them in the target codebase's framework using its own design system and conventions.

| Path | Status |
|---|---|
| `README.md` | **This file** — developer-facing handoff manifest with data shapes, component inventory, content audit. |
| `BRAND_README.md` | Brand context — voice, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens as CSS variables + semantic typography classes. **Lift this directly.** |
| `assets/` | Brand assets — logo (white + dark), hex horizon backdrop, family illustration, tabletop + UI icons. **Lift these directly.** |
| `fonts/Daggersquare.otf` | Brand pixel font. **Personal-use licence only — verify commercial use before shipping.** |
| `preview/` | Design system reference cards. Type, colour, spacing, components. **Not for production — reference only.** |
| `ui_kits/` | Full-page design references for every product surface. **Reference only.** |
| `ui_kits/marketing/registry.jsx` | Master mod + game registry. **Use the data shapes; replace data source with your CMS.** |

---

## Pages built (and where they live)

| Surface | File | Status |
|---|---|---|
| Marketing home | `ui_kits/marketing/index.html` | Reference design |
| Hero variations (canvas) | `ui_kits/marketing/Hero Variations.html` | Exploration |
| Nuke Catan hero explorations | `ui_kits/marketing/Nuke Catan Explorations.html` | Exploration |
| Mods index | `ui_kits/mods/index.html` | Reference design |
| Mod detail (FULL TEMPLATE) | `ui_kits/mod-detail/index.html` | Reference for **Talisman: Hexed** |
| Mod detail (stub template) | `ui_kits/mods/mod.html?slug=…` | Stub for 8 other mods |
| Games index | `ui_kits/games/index.html` | Reference design |
| Game detail (FULL TEMPLATE) | `ui_kits/game-detail/index.html` | Reference for **Endless Skies** |
| Game detail (stub) | `ui_kits/games/{mongo,nukes}.html` | Stubs |
| News index | `ui_kits/news/index.html` | Reference design |
| News post | `ui_kits/news/post.html` | Reference for **Nuking Catan** |
| Tools index | `ui_kits/tools/index.html` | Reference design |
| Tools: TI | `ui_kits/tools/twilight-imperium/index.html` | Reference design |
| Tools: Talisman | `ui_kits/tools/talisman/index.html` | Reference design |
| Tools: Nukes | `ui_kits/tools/nukes/index.html` | Reference design |
| Submit a mod | `ui_kits/submit/index.html` | Reference design |
| About | `ui_kits/about/index.html` | Reference design |
| Team | `ui_kits/team/index.html` | Reference design |
| Community | `ui_kits/community/index.html` | Reference design |
| Web3 | `ui_kits/web3/index.html` | Reference design |

---

## Data shapes

### `Mod`

```ts
type ModCategory = "Reskin" | "Rebalance" | "Total conversion";

interface Mod {
  slug: string;              // url-safe id, e.g. "talisman-hexed"
  title: string;             // may contain inline <em> for emphasis
  category: ModCategory;
  baseGame: string;          // e.g. "Talisman 4e (revised)"
  body: string;              // short paragraph for cards + listings
  stats: string;             // mono-text line, e.g. "3–6 players · 4–6 hr · 14+"
  href: string;              // URL to the mod detail page

  // Detail-page fields
  version?: string;          // e.g. "v2.0.1"
  designer?: string;         // e.g. "@ascelot" or "Moddable team"
  updated?: string;          // ISO date or human "Apr 2024"
  rulesPdfUrl?: string;
  printAndPlayUrl?: string;
  sections?: ModSection[];   // for the rule sections on the detail page
  components?: ComponentGroup[];

  // Editorial flag — used by stub template to show a warning badge.
  real: boolean;
}

interface ModSection { id: string; title: string; body: string; }
interface ComponentGroup { kind: "Required" | "Printable" | "House"; list: string[]; }
```

Category → colour mapping (the signature card detail):

| Category | Top stripe / badge | Token |
|---|---|---|
| Total conversion | Red `#d11a1a` | `--mg-red` |
| Rebalance | Green `#3a9928` | `--mg-green` |
| Reskin | Blue `#0c4f8d` | `--mg-blue` |

### `Game`

```ts
interface Game {
  slug: string;
  title: string;
  body: string;             // tagline / one-paragraph blurb
  stats: string;            // "2–4 players · 60–90 min · 12+"
  href: string;
  color: string;            // hex — used for accent on cards
  version?: string;
  releasedAt?: string;
  steps?: GameStep[];       // "How it plays" steps
  modHooks?: ModHook[];     // technical hooks for the modding workflow
  communityMods?: Mod[];    // related mods of this game
}

interface GameStep   { n: string; title: string; body: string; }
interface ModHook    { name: string; desc: string; }
```

### `NewsPost`

```ts
interface NewsPost {
  slug: string;
  title: string;
  cat: string;              // category — maps to the "Hot Topics" sidebar
  date: string;             // "May 12, 2026"
  excerpt: string;          // short blurb for the index
  body: string;             // markdown/HTML for the post page
  cover: string;            // hex colour OR image URL for the cover panel
  author: { handle: string; name: string };
}
```

### `TeamMember`

```ts
interface TeamMember {
  handle: string;           // "@ascelot"
  name: string;             // first name
  role: string;             // "Founder · rules"
  bio: string;
  color: string;            // hex — avatar gradient base
}
```

---

## Component inventory

Components live in `ui_kits/marketing/*.jsx` and are loaded as `<script type="text/babel">` tags. Each exports to `window` so it's globally available across script files.

| Component | File | Props | Notes |
|---|---|---|---|
| `<Btn>` | `Buttons.jsx` | `variant`: primary, dark, blue, green, red, outline-dark, outline-light, soft, pill, pill-dark · `onClick` · standard button props | All pills (`border-radius: 9999px`). 48px tall by default. |
| `<NavBar>` | `NavBar.jsx` | `activeSection?` · `onNav?` · `here?` | Responsive — hamburger at <900px. Auto-detects active section from URL. |
| `<Hero>` | `Hero.jsx` | _none_ | Hex-horizon parallax backdrop + dual CTA. |
| `<HexHorizon>` | `HexHorizon.jsx` | `height`, `intensity`: full/muted/low, `children` | Reusable hero-backdrop wrapper. |
| `<NukeCatanFeature>` | `NukeCatanFeature.jsx` | _none_ | The illustration-led Nuke Catan section. |
| `<ModCard>` | `ModCard.jsx` | spread of `Mod` | Signature card with category top-stripe. |
| `<ModGallery>` | `ModGallery.jsx` | _none_ | 3-up filterable grid for the home page. Reads from `SAMPLE_MODS` (local) — re-wire to your CMS. |
| `<FeaturedMod>` | `FeaturedMod.jsx` | _none_ | Cobalt cube-glyph featured callout. |
| `<NewsRow>` | `NewsRow.jsx` | _none_ | 3-up news tiles on warm-ivory. |
| `<CommunityBand>` | `CommunityBand.jsx` | _none_ | Discord CTA on hex horizon. |
| `<Footer>` | `Footer.jsx` | _none_ | Multi-column quicklinks + fan-disclaimer. |
| `<PageHero>` | `about/PageHero.jsx` | `eyebrow`, `title`, `lede`, `accent`, `withHorizon` | Reusable interior-page hero. |
| `<Prose>`, `<ProseTitle>`, `<ProseP>` | `about/PageHero.jsx` | `children` | Editorial prose primitives. |

### Specialist (single-use) components
- **Mod Detail** (`ui_kits/mod-detail/index.html`): `ModHeader`, `RulesSection`, `ComponentsList`, `RelatedMods`.
- **Game Detail** (`ui_kits/game-detail/index.html`): `GameHero`, `StatsBar`, `HowItWorks`, `ModHooks`, `CommunityMods`.
- **Tools** (`ui_kits/tools/Tools.jsx`): `DiceRoller`, `NameGenerator`, `ScoringTracker`, `DieFace`, `CubeDie`, `PolyDie`, `NumberFace`.
- **News** (`ui_kits/news/`): `PostCard`, `FeaturedPost`, `PostCover`, `Sidebar`, `PostHeader`, `PostBody`.
- **Submit** (`ui_kits/submit/index.html`): `Field`, `CategoryPicker`, `FileDrop`, `SubmitForm`.

---

## Design tokens (quick reference)

All defined in `colors_and_type.css`. Lift the file directly.

### Colours
```
--mg-red          #d11a1a   Mod Red — destructive, featured, "Nuke", Total Conversion
--mg-green        #3a9928   Mod Green — go, new, Rebalance category
--mg-blue         #0c4f8d   Mod Blue — primary brand accent, Reskin category
--mg-canvas-dark  #000000   True black storytelling canvas
--mg-canvas-light #f5f4ef   Warm-ivory catalogue canvas (NOT pure white)
--mg-surface-elevated #161721  Dark card lift, cosmic-tinted
--mg-cosmic-deep  #0a0d2a   Hero gradient origin
--mg-cosmic-bright #3a7be8  Horizon glow
--mg-cosmic-glow  #6fb5ff   Hex grid highlight
```
Plus full ink/charcoal/mute/stone/faint text ramp + accent variants.

### Typography
- **Inter Tight 600** for display (clamp from 24 to 136px, LH 1.0, negative tracking)
- **Inter 400/600** for body
- **Daggersquare** for pixel-display brand moments (max 1-2× per page, never prose)
- **JetBrains Mono** for stats, mod versions, dice notation, file types

### Spacing
4px base. xxs/xs/sm/md/lg/xl/xxl/xxxl/block/section = 4/6/8/14/16/24/32/48/80/88px.

### Radius
none/sm/md/lg/xl/full = 0/6/12/20/28/9999px. All buttons full, cards 20, inputs 12.

### Elevation
**Zero drop shadows.** Depth via canvas switches + cosmic gradients + hex-grid only.

---

## Content audit: real vs invented

The live site is at <https://moddable.games>. Most copy in this design is **invented or paraphrased**. Use this audit to know what to replace with real content before launch.

### Real (lifted from moddable.games)
- Three real mod entries: **Talisman: Hexed**, **Econopoly**, **Hyper Imperium** (titles + base game + categorisation accurate; pitch text paraphrased)
- News article titles + dates + categories (12 real posts from `/news/`)
- Brand strap "Strictly written by humans" (lifted from real OG meta tags)
- Real Hot Topics taxonomy + counts on the news index
- Real News Archive month list
- Logo, hex horizon backdrop, Nuke Catan family illustration (user-supplied)

### Invented / placeholder (replace before launch)
- **All news post bodies** — paraphrased from the live opening lines, not full articles
- **All team members** (Riley, Sam, Joel, Tess, Kit, Ben) — handles, roles, bios all made up
- **All Discord channels** (`#general`, `#mod-pitches`, etc.) + member counts
- **All mod-jam history** (#1 Carcassonne / #2 Risk / #3 Catan)
- **Web3 positions** — "on-chain rulebook hashes", "distributed playtesting" etc. are speculative
- **Original game details** (Endless Skies stats, mod hooks, faction list) — invented from the brand promise of "built to be modded"
- **6 invented mods** beyond the 3 real ones (Nuke Catan, Conquering the constraints of chess, Beyond the box, Cattle drives, Catan: lunar colony, Cataclysm)
- **Twilight Imperium faction colour-mapping** in the faction picker (TI4 actually uses player colours, not faction colours)
- **Talisman encounter text** in the quick-draw tool — paraphrased from real flavour
- **Mod-card categories** (Reskin / Rebalance / Total Conversion) — a design construct I introduced; the live site groups mods by base game

### Stub pages
- 8 mod-detail stubs (`ui_kits/mods/{slug}.html`) — placeholder with a CTA to the full Talisman: Hexed template
- 2 game-detail stubs (`ui_kits/games/{mongo,nukes}.html`) — placeholder with a CTA to the full Endless Skies template

---

## State management

The HTML prototypes use React local state (`useState`) for all interactivity — no global store, no API calls. For production:

- **Mods, Games, NewsPosts, TeamMembers** should come from a CMS (WordPress headless, Sanity, Contentful — your choice).
- **Forms** (submit-a-mod, scoring tracker) need real persistence. Submit-a-mod form currently submits to a local success state.
- **Tools** (dice roller, name generator, faction picker, hex board, objective tracker, target picker, fallout tracker, agenda voter) are purely client-side — no persistence needed unless you want session-history.
- **NavBar** auto-detects active section from `window.location.pathname` — replace with your router's active-route check.

---

## Hard rules (repeat back to yourself before building anything new)

1. Canvas is `#000000` storytelling and **warm-ivory `#f5f4ef`** catalogue. **Not pure white.**
2. All buttons are pills (`border-radius: 9999px`). Cards 20px. Inputs 12px.
3. **One** RGB primary per surface — never combine all three outside the logo.
4. **Daggersquare** for brand moments — max 1-2× per page, never prose.
5. **No drop shadows.** Anywhere.
6. **Hex Horizon backdrop** is scarce — main hero + community band + game-detail header + news header. Other surfaces use flat black with radial-glow gradients keyed to context.
7. Voice is playful + lore-heavy. Sentence-case. Exclamations max once per page. **No emoji in UI.**

---

## Outstanding before production launch

| | |
|---|---|
| 🔒 **Daggersquare commercial licence** | Personal-use only. Contact Iconian Fonts. |
| 📱 **Responsive mobile pass** | Nav has hamburger; grids reflow via `auto-fit`. Each page worth a manual mobile-resize test. |
| 🎨 **Real component photography** | Mod thumbs are stylised cosmic gradients. Real board/dice photos would lift the gallery considerably. |
| ♿ **Accessibility audit** | Focus rings + semantic HTML are in place. No screen-reader / contrast / keyboard-only audit done. |
| 📝 **Real content swap** | See "Real vs invented" audit above. |
| 🧪 **Form validation** | Submit form has no field-level validation. |
| 🌀 **Error / empty / loading states** | Mostly missing across data-driven views. |
| 🚧 **Stub detail pages** | 8 mod + 2 game stubs need full content + (in some cases) full template wiring. |
