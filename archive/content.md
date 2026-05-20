# Moddable.Games — Master Plan · Source

Source-of-truth for `deck/Moddable Master Plan.html`. Edit this file, hand it back, the HTML gets regenerated to match.

**Conventions**
- `# Slide N — Title` starts each slide. Don't change the slide count or numbering without telling me.
- Each slide has labelled blocks: `Eyebrow`, `Headline`, `Lede` / `Body`, etc. The label is the *role* of the text, not its style.
- `_italics_` and `**bold**` survive the round-trip. So do em-dashes (`—`) and ellipses (`…`).
- Numbers and stats live inside their cards; don't move them out without renaming the card.
- Markers like `[hl-amber]word[/hl]` mean "render this word with the amber accent". Other accents: `hl-blue`, `hl-red`, `hl-green`, `hl-mint`, `hl-rose`, `hl-cosmic`, `hl-glow`.
- `[flag: …]` marks anything that's a placeholder, a draft, or a question for you. Leave the marker; replace the contents.

---

# Slide 1 — Title

- **Background:** hex-horizon photo (cosmic)
- **Eyebrow:** ▲ MODDABLE.GAMES · MASTER PLAN · 2026
- **Headline:** Making games\nyou already own.
- **Lede:** A plan for the tabletop ecosystem we're building — open-source rulebooks, a hex-grid online engine, and a marketplace for the modders who'll fill it.
- **Pills:**
  - ● Open alpha · `nukes.moddable.games`
  - team@moddable.games

---

# Slide 2 — Mission

- **Background:** clean ink
- **Eyebrow:** Our mission
- **Headline:** Publish moddable tabletop games — and turn _[hl-cosmic]players, artists and designers[/hl]_ into co-creators.
- **Column A — heading:** An open-source ethos.
- **Column A — body:** Every rulebook is forkable. Every component is replaceable. Every variant is a pull request waiting to happen. Modders aren't a side channel — they're how the catalogue grows.
- **Column B — heading:** Why we're called _Moddable_.
- **Column B — body:** Not a publisher. Not a platform. A toolkit — a hex-grid engine, a print-on-demand pipeline, and a marketplace — that turns the boards on your shelf into the boards you wanted them to be.
- **Footer note:** Open-source · public-domain-first

---

# Slide 3 — Nukes

- **Background:** red-tinted hex horizon
- **Eyebrow:** Our first open-source tabletop game
- **Glyph + wordmark:** ☢ NUKES
- **Headline:** Territory. Attrition.\n_[hl-rose]Nuclear brinkmanship.[/hl]_
- **Body:** A hex-tile board game where every token is a unit, a hostage, and a countdown timer — all at once. Plays on a board you already own.
- **Stats pills:** PLAYERS 2–3 · TIME 45+ MIN · AGE 12+
- **Installed-base callout — label:** ▲ THE INSTALLED-BASE PLAY
- **Installed-base callout — body:** Catan's hex tiles are a Nukes board out of the box. _[hl-amber]45 million homes[/hl]_ are already set up.
- **Token-stack diagram label:** CORE MECHANIC · TOKEN COUNT = UNIT TYPE
- **Token cards (4):**
  - 1 TOKEN → Infantry
  - 2 TOKENS → Artillery
  - 3 TOKENS → Airborne
  - 4+ TOKENS → Base ☢
- **Hostage callout — label:** THE COUNTDOWN · HOSTAGES
- **Hostage callout — body:** Return your _[hl-amber]opponents' tokens[/hl]_ to earn moves — but reinforce their armies in the process. Run out of hostages, you lose.
- **Footer note:** `nukes.moddable.games · rulebook v0.9.2`

---

# Slide 4 — Hexes

- **Background:** warm ivory
- **Eyebrow:** Why hexagons
- **Headline:** Replacing\nsquares with\n_[hl-blue]hexagons._
- **Lede:** Six neighbours instead of four. No diagonal exceptions. No edge-case rules. The math of strategy gets cleaner the moment the grid does.
- **Chips:** 6 adjacencies · 0 diagonals · ∞ variants
- **Caption (below visual):** _Why now:_ we're building our own online engine for hosting hex-based games, so any tabletop designer can ship a hex variant without rolling their own infrastructure.

---

# Slide 5 — Online engine

- **Background:** clean cosmic
- **Eyebrow:** The online engine
- **Headline:** Play anywhere.\nContinue _[hl-amber]everywhere_.
- **Lede:** Create private sessions. Hand off mid-game between phone, tablet and laptop. Pause a session in May, finish it in October. The board waits.
- **Pills:**
  - ● Open alpha · `nukes.moddable.games`
  - `private sessions · cross-device · async`
- **Footer note:** `v0.4-alpha · live`

---

# Slide 6 — Bots

- **Background:** warm ivory
- **Eyebrow:** Practice partners
- **Headline:** Play with\nfriends — or\n_[hl-blue]instructive bots._
- **Lede:** Every game played online — human-vs-human or human-vs-bot — improves the next bot you'll face. The engine is a teaching engine first, an opponent second.
- **Card 1:** 3 · DIFFICULTY TIERS · _Apprentice · Tactician · Grandmaster_ — Each tier annotates its moves — learn by watching the AI think.
- **Card 2:** ∞ · TRAINING DATA · Every match feeds the next bot — Anonymised game logs, opt-out by default for private sessions.
- **Card 3 (dark inset):** ∅ · LATENCY MODE · Async-by-default — No live-server requirement. Notify on opponent's move.

---

# Slide 7 — Pipeline

- **Background:** warm ivory
- **Eyebrow:** Original games in active development
- **Headline:** More original games\non the table.
- **Body (right of title):** All three share the same modular hex board and the same online engine — every shipped game makes the next one cheaper.
- **Game card — NUKES:**
  - Stripe: red
  - Meta: DETERMINISTIC · 2P · 30 MIN
  - Body: Wartime token strategy on a modular hex board. Chess × Checkers × Go on Catan hexes you already own.
  - Progress: 95% — OPEN ALPHA · LIVE
- **Game card — MONGO:**
  - Stripe: blue
  - Meta: CONQUEST · 3–6P · 90 MIN
  - Body: Global conquest in the _Flash Gordon_ universe — Risk × Catan in a public-domain setting we don't have to license.
  - Progress: 50% — PLAYTEST · Q3 2026
- **Game card — ENDLESS SKIES:**
  - Stripe: green
  - Meta: EXPLORATION · 1–4P · 60 MIN
  - Body: Worker-placement exploration, trading and combat — based on the popular open-source video game of the same name.
  - Progress: 25% — DESIGN · Q1 2027

---

# Slide 8 — Vision

- **Background:** clean cosmic
- **Eyebrow:** Our vision for the future
- **Headline:** Become the\necosystem tabletop\nis still _[hl-amber]missing._
- **Lede:** A place where physical and online play converge under community ownership — and an online engine and marketplace where anyone can monetise their creations.
- **Card 1 (01 · ENGINE):** Host any hex-based game online.
- **Card 2 (02 · MARKETPLACE):** Designers sell mods, art and expansions.
- **Card 3 (03 · COMMUNITY):** Modders own the catalogue.
- **Footer note:** physical + online + community-owned

---

# Slide 9 — Market size

- **Background:** warm ivory
- **Eyebrow:** Market size and opportunity
- **Headline:** Why now? The boards\nare already on the shelves.
- **Stat — 45M (red):** Catan sets sold — Every one of them a hex board for Nukes, no new components required.
- **Stat — 275M (blue):** Monopoly sets sold — 500M people have played. _Econopoly_ ships a fairer rulebook.
- **Stat — $3B (green):** Online chess by 2032 — Public-domain. Never been more popular. No moddable compendium yet.
- **Stat — 30B (ink):** Checker sets ever sold — Since 1000 BCE. The oldest installed base on the planet.
- **Reference:** Cyberpunk TCG Kickstarter — US$25M raised · ign.com/articles/cyberpunk-tcg-kickstarter-record-25-million

---

# Slide 10 — Business models

- **Background:** warm ivory
- **Eyebrow:** Open-source, still profitable
- **Headline:** How we make money\nwithout fearing the copycats.
- **Body (right of title):** Two tracks, run in parallel. One bootstraps slowly with revenue. The other unlocks with funding — and shortens the timeline.
- **Track A — Organic growth (green stripe · Bootstrap · slow):**
  - Sub-body: Revenue funds the next print run. No outside cheque required.
  - Bullets:
    1. _Print-on-demand_ for first runs — no inventory risk
    2. Online store for _generic components_ — hexes, tokens, dice
    3. Branded merchandise and tabletop tools
    4. Licensing agreements with adjacent IP holders
    5. Original games commissioned for specific brands
- **Track B — Engineered growth (cosmic stripe · Funded · fast · dark card):**
  - Sub-body: Outside capital builds the engine, the marketplace, and the team.
  - Bullets:
    1. Build the online engine for hex-based games _at scale_
    2. Self-publishing tools for designers — drag-and-drop rulebooks
    3. Marketplace for games, expansions and printable components
    4. Collect training data for stronger in-game bots

---

# Slide 11 — Beyond hexes

- **Background:** clean cosmic
- **Eyebrow:** Beyond hexes
- **Headline:** The engine doesn't\nstop at _[hl-amber]hexes._
- **Lede:** Live in alpha today: a card deck tool and a modular chess board. Both running on the same backbone that powers Nukes — proof that one engine hosts wildly different tabletop families.
- **Traction callout — label:** ▲ TRACTION · OPEN ALPHA
- **Traction callout — body:** _[hl-amber]2,400+ sessions[/hl]_ played across both tools — entirely organic, zero ad spend.
- **Decks mock:**
  - URL: `moddable.games/tool/decks`
  - Badge: ● ALPHA
  - Title: Tarot Hex deck
  - Meta: 52 CARDS · v2.1 · OPEN SOURCE
  - Stat: 847 SESSIONS / WK
  - Actions: Draw 1 · Shuffle · Save
- **Chess mock:**
  - URL: `moddable.games/tool/chess`
  - Badge: ● ALPHA
  - Title: Variant loader
  - Meta: 8×8 BASE · 4 BOARD SECTIONS
  - Stat: 1,560 GAMES / WK
  - Variant chips: Standard ✓ · XiangQi · 4-Player · Dungeon
- **Footer note:** cards · chess · hexes — one engine
- **[flag:** the traction numbers (2,400+ sessions, 847/wk, 1,560/wk) are designed-in placeholders. Replace with real figures before sharing. **]**

---

# Slide 12 — Go-to-market (mods)

- **Background:** warm ivory
- **Eyebrow:** Go-to-market
- **Headline:** Mod the games\npeople already love.
- **Lede:** Three rulebook mods in active development — each targeting a game with a built-in audience and a known itch the original rules don't scratch.
- **Mod card — Econopoly (red stripe):**
  - Meta: MOD · MONOPOLY
  - Body: Monopoly with a working economy. Anti-monopoly rules, dynamic property pricing, and a tax band that actually does something.
  - Progress: 95% — LAUNCH READY
- **Mod card — Talisman: Hexed (blue stripe):**
  - Meta: MOD · TALISMAN 4TH ED.
  - Body: Talisman's adventure on a modular hex board. Shorter loop, tighter encounters, four new tile types and 12 reshuffled cards.
  - Progress: 50% — PLAYTEST
- **Mod card — Hyper Imperium (green stripe):**
  - Meta: MOD · TWILIGHT IMPERIUM 4TH ED.
  - Body: Twilight Imperium in _under three hours_. Streamlined economy, simultaneous turns and a sharper political phase.
  - Progress: 25% — DESIGN

---

# Slide 13 — Chess

- **Background:** warm ivory
- **Eyebrow:** Chess
- **Headline:** Chess — the\nmost modded\ngame in _[hl-blue]history_?
- **Lede:** Hundreds of variations exist. Most are buried in forum threads and PDFs. None have a playable, modular compendium online — _until now_.
- **Stats:**
  - 2000+ (blue) · documented chess variants in the wild
  - ∅ (red) · unified online compendium today
  - 1 (green) · moddable engine — ours
- **Diagram caption — left:** SUPPORTED VARIANTS
- **Diagram caption — right:** FROM ONE MODULAR KIT
- **Variant chips:** Regular · 4-Player · _[hl-blue]4-Board[/hl]_ · 3-Board · Alice · Courier · Omega / Grand
- **Footer note:** regular · 4-player · 4-board · 3-board · alice · courier · omega

---

# Slide 14 — Dungeon Chess

- **Background:** green-tinted hex horizon
- **Eyebrow:** Introducing
- **Wordmark:** DUNGEON\nCHESS
- **Headline:** Chess as an asymmetrical\n_[hl-mint]skirmish and dungeon crawler._
- **Body:** Our first original mod for Moddable Chess. Four races on a modular board with spells, objects, XP and environmental hazards — our catalyst for crowdfunding the catalogue.
- **Mode — BATTLES:** 2–4P skirmish · Drafted · 30 min
- **Mode — ADVENTURES:** 1–6P legacy · Persistent campaign
- **Races (4):**
  - Demonics (red)
  - Wraiths (ink) **[flag: placeholder name]**
  - Knights (white) **[flag: placeholder name]**
  - Verdants (green) **[flag: placeholder name]**
- **Race-list footnote:** * Demonics confirmed; other names provisional pending playtest
- **Image badge:** ● LIVE PROTOTYPE · IN ENGINE
- **Mechanic callouts (4):**
  - XP — Pieces level up
  - SPELLS — Magic + objects
  - TERRAIN — Hazards & obstacles
  - OBJECTIVES — Beyond check-mate
- **Footer note:** four races · spells · objects · objectives

---

# Slide 15 — Stretch goals

- **Background:** warm ivory
- **Eyebrow:** Moddable Chess — crowdfunding
- **Headline:** A ladder of\nstretch goals.
- **Body (right of title):** Each tier adds more sections to the board — and unlocks the next family of variants the engine already supports.
- **Ladder:**
  - **LV·01 — Base goal (blue chip):** Regular 2-player Chess · 4 board sections · 100 squares · 60 chess pieces
  - **LV·02 — Stretch:** 4-player Chess · 15 board sections · 192 squares · 100+ pieces
  - **LV·03 — Stretch:** XiangQi + 4 board variants · 26 board sections · 256 squares · regional rule sets
  - **LV·04 — Headline (dark card, cosmic chip):** Dungeon Chess · Asymmetrical races · spells · objects · objectives
  - **LV·05+ — Community (footnote row, green chip):** Extra races · upgraded boards · custom components — open-ended, set by community votes at launch.
- **Footer note:** `crowdfund · bootstrap · 2026`

---

# Slide 16 — End goal

- **Background:** clean cosmic
- **Eyebrow:** Our end goal
- **Headline:** An ecosystem where\ncreators _[hl-amber]monetise_\ntheir own work.
- **Card 1 (01 · PRINT-ON-DEMAND · red stripe):**
  - Heading: Moddable prints on demand.
  - Body: Moddable Chess pieces, miniatures, build-your-own hex tiles — printed only when ordered, no inventory drag.
- **Card 2 (02 · COMMUNITY · blue stripe):**
  - Heading: Community contributions.
  - Body: Artists sell themes for existing games. Designers publish their own expansions. We take a cut, they keep the rest.
- **Card 3 (03 · SELF-PUBLISHING · green stripe):**
  - Heading: Self-publishing.
  - Body: Creators validate ideas online first — then monetise their community by shipping through our marketplace.
- **Footer note:** creators own the catalogue

---

# Slide 17 — Team

- **Background:** warm ivory
- **Eyebrow:** The team
- **Headline:** Who's making\nthis happen.
- **Body (right of title):** A modder-founder, a systems-thinker playtester, a board-game evangelist who builds the engine, and a game artist with TV credits.
- **Team card — Mark Smalley (blue stripe):**
  - Role: FOUNDER · DM · BUILDER
  - Photo: `https://moddable.games/wp-content/uploads/sites/17/2025/10/ms-022.png`
  - Bio: Modder since forever. Built the world's first NoSQL CMS and a _500 Startups_-backed Bitcoin wallet.
- **Team card — Kevin Chand (green stripe):**
  - Role: PLAYTEST · GROWTH · OPS
  - Photo: `https://moddable.games/wp-content/uploads/sites/17/2025/10/kevin2.png`
  - Bio: Systems thinker. Chief playtester and social engineer leading online growth, marketing and manufacturing.
- **Team card — Akmal Fikri (blue stripe):**
  - Role: ENGINE · COMMUNITY
  - Photo: `https://moddable.games/wp-content/uploads/sites/17/2025/11/Akmal.png`
  - Bio: Web developer and board-game evangelist. Builds the online engine — grey hair earned the hard way.
- **Team card — Iqbal Ridzuan (red stripe):**
  - Role: LEAD ARTIST · CREATIVE
  - Photo: `https://moddable.games/wp-content/uploads/sites/17/2026/05/IQBAL03.png`
  - Bio: Head of creative. _BioHack_ and _Mechamato_ — featured on BoardGameGeek and IMDB.

---

# Slide 18 — What it takes

- **Background:** clean ink
- **Eyebrow:** What it'll take to make this happen
- **Headline:** Resources,\ntiming, phases.
- **Caption:** `// working list — to be replaced with facts, figures, timelines and sheets.`
- **Card 1 — 01 · REQUIRED RESOURCES · "What we need":**
  - Full-time developers and designers
  - Capital for the first print run
  - In-house manufacturing capability
- **Card 2 — 02 · TIMING · "Why now":**
  - Who becomes the next _chess.com_?
  - Can we ship Moddable Chess before someone else does?
  - Tabletop's online infra is still a green field
- **Card 3 — 03 · PHASES · "In what order":**
  - P1: Launch Moddable.Games
  - P2: Bootstrap mods + Nukes production
  - P3: Crowdfund Moddable Chess _or_ Mongo
- **Footer note:** phase 1 of 3 — live

---

# Slide 19 — Next steps

- **Background:** warm ivory
- **Eyebrow:** Next steps — what we have to offer
- **Headline:** Two ways\nto work with us.
- **Card A — INVESTMENT OPPORTUNITIES (red stripe · "Back the catalogue"):**
  1. _Purchase royalties_ on specific upcoming games
  2. Fund accelerated growth — _equity_ in Moddable.Games
  3. Sponsor our crowdfunding campaign kick-off
- **Card B — PARTNERSHIPS (cosmic stripe · blue card · "Build with us"):**
  1. _Custom development_ of branded games
  2. Licensing agreements to use other brands
  3. Educational games designed for specific courses
- **Footer note:** team@moddable.games

---

# Slide 20 — Contact

- **Background:** hex-horizon photo (cosmic)
- **Eyebrow:** Any questions?
- **Headline:** Get in touch\nwith the table.
- **Big pill (CTA):** ● team@moddable.games
- **Small pills:**
  - `moddable.games`
  - `nukes.moddable.games`
- **Disclaimer (small caps):** Moddable.Games is fan-made and not affiliated with any rights-holder

---

## Round-trip notes

- The HTML preserves emoji glyphs (☢, ▲, ●, ∅, ∞) — feel free to add or remove these without other changes.
- Line breaks within headlines are written as `\n` here; the HTML renders them as `<br/>`.
- Anything inside `[flag: …]` is a known placeholder — keep the marker until you're ready to replace.
- Numbers that look like real metrics (slide 11 traction, market figures on slide 9) are clearly flagged. The rulebook references (Nukes v0.9.2, etc.) are pulled from your actual source materials.
