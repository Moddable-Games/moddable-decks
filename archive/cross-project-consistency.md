# Cross-Project Consistency Reference

Generated 2026-05-23. Maps every shared data point across the Moddable.Games ecosystem.

---

## 1. Game Facts

**Source of truth:** `nukes-rulebook/games/*/content/rulebook.md` frontmatter (synced to website via `npm run sync`)

All rulebook frontmatter verified 2026-05-23 against actual files.

### Nukes

| Field | Website (games-sync.json) | Deck | Rulebook memory | Status |
|-------|---------------------------|------|-----------------|--------|
| Players | 2–3 | 2–3 (slides 03, 07) | 2–3 | Aligned |
| Duration | 45+ min | 45+ MIN (slides 03, 07) | 45+ min | Aligned |
| Age | 12+ | 12+ (slide 03) | 12+ | Aligned |
| Version | 0.9.3 | v0.9.2 (slide 03 mock UI) | 0.9.3 | Deck stale |
| Tokens | — | 60 (slide 41) | 75 (25/player, 3 colours) | Deck WRONG — rulebook confirmed |
| Hex tiles | — | 19 (slide 41) | 44 | Deck WRONG — rulebook confirmed |
| Website game page players | 3 (mg-game-nukes-page.js) | — | — | Website wrong |
| Website game page age | 14+ (mg-game-nukes-page.js) | — | — | Website wrong |
| Website game page time | 60–90 min (mg-game-nukes-page.js) | — | — | Website wrong |

### Dungeon Chess

| Field | Website (games-sync.json) | Deck | Status |
|-------|---------------------------|------|--------|
| Players | 2–4 | 2–4P (slide 14) | Aligned |
| Duration | 30–120 min | 30 min (slide 14 battle mode) | Partial (deck shows battle only) |
| Age | 12+ | — | — |
| Version | 0.1.0 | — | — |
| Species names | Demonics, Wraiths, Knights, Verdants | Humans, Undead, Redskins, Greenskins | Contradiction |

### Mongo

| Field | Website (games-sync.json) | Deck | Status |
|-------|---------------------------|------|--------|
| Players | 3–6 | 3–6P (slide 07) | Aligned |
| Duration | 90 min | 90 MIN (slide 07) | Aligned |
| Status | playtest | PLAYTEST · Q3 2026 (slide 07) | Aligned |

### Endless Skies

| Field | Website (games-sync.json) | Deck | Status |
|-------|---------------------------|------|--------|
| Players | 1–4 | 1–4P (slide 07) | Aligned |
| Duration | 60 min | 60 MIN (slide 07) | Aligned |
| Status | dev | DESIGN · Q1 2027 (slide 07) | Aligned |

### Hyper Imperium

| Field | Website (games-sync.json) | Deck | Status |
|-------|---------------------------|------|--------|
| Duration | 4–6 hr | "under three hours" (slide 12) | Contradiction |
| Players | 3–6 | — | — |
| Base game | Twilight Imperium 4e | TWILIGHT IMPERIUM 4TH ED. (slide 12) | Aligned |

---

## 2. Team Info

**Source of truth:** `moddable-website/data/team.json`

| Handle | Name | Role (website) | Role (deck slide 17) | Bio match? |
|--------|------|----------------|----------------------|------------|
| mark | Mark Smalley | Founder · DM · Builder | FOUNDER · DM · BUILDER | Yes |
| kevin | Kevin Chand | Playtest · Growth · Ops | PLAYTEST · GROWTH · OPS | Yes |
| akmal | Akmal Fikri | Engine · Community | ENGINE · COMMUNITY | Yes |
| iqbal | Iqbal Ridzuan | Lead Artist · Creative | LEAD ARTIST · CREATIVE | Yes |

**Team size contradiction:**
- team.json: 4 members
- Website community page: "6 team humans"
- Website about page: "Six humans, no AI"
- Deck slide 29: "Team: 4"

---

## 3. Milestones / Roadmap

**Source of truth:** `moddable-website/js/mg-roadmap-page.js`

| # | Quarter | Text | In deck (slide 15) | Aligned? |
|---|---------|------|---------------------|----------|
| 0 | Q3 2026 | Nukes: first 500-unit print run ships | Yes | Yes |
| 1 | Q3 2026 | Moddable Chess: 4 variants playable online | Yes | Yes |
| 2 | Q4 2026 | Dungeon Chess: crowdfunding campaign live | Yes | Yes |
| 3 | Q1 2027 | Marketplace beta: creators upload + sell mods | Yes | Yes |
| 4 | Q2 2027 | Mongo: multiplayer playtest online | Yes | Yes |
| 5 | Q3 2027 | Print-on-demand pipeline live | Yes | Yes |

All milestones aligned (synced via deck-sync system).

---

## 4. Mods

**Source of truth:** `moddable-website/data/mods.json`

| Mod | Base Game | Deck (slide 12) | Website | Aligned? |
|-----|-----------|-----------------|---------|----------|
| Econopoly | Monopoly | 95%, LAUNCH READY | 95% complete — launch ready | Yes |
| Talisman: Hexed | Talisman 4e | 50%, playtest | — | — |
| Hyper Imperium | Twilight Imperium 4e | 25%, design phase | — | — |

---

## 5. URLs & Links

| URL | Referenced in | Exists? | Notes |
|-----|--------------|---------|-------|
| `https://moddable.games` | Deck (splash), website | Yes | Website root |
| `https://nukes.moddable.games` | Deck (slides 1,3,5,35,42,43) | Unverified | Subdomain — not in local projects |
| `moddable.games/tools/nukes` | Website (actual path) | Yes | — |
| `moddable.games/tool/nukes` | Deck (slide 03 mock) | No | Path mismatch: `/tool/` vs `/tools/` |
| `moddable.games/tool/decks` | Deck (slide 11) | No | Page doesn't exist |
| `moddable.games/tool/chess` | Deck (slide 11) | No | Page doesn't exist |
| `moddable.games/press` | Deck (slide 31) | No | No /press directory |
| `moddable.games/subscribe` | Deck (slide 37) | No | No /subscribe page |
| `discord.gg/moddable` | Deck (slide 37) | Unverified | Stored URL is discord.com/invite/WXENAywsQb |
| `youtube.com/@moddablegames` | Deck (slide 37) | Unverified | Channel may not exist |
| `bsky.app/moddablegames` | Deck (slide 37) | Unverified | URL format likely wrong |
| `team@moddable.games` | Deck (slides 1,19,29,contact) | Unverified | Email |
| `press@moddable.games` | Deck (slide 29) | Unverified | Email |
| `rules.moddable.games/dist/*` | Website (mg-core.js) | Unverified | Production rulebook hosting |

---

## 6. Species / Faction Names

**Source of truth: rulebook** (`nukes-rulebook/games/dungeon-chess/content/rulebook.md`)

The rulebook says: **Humans, Undead, Redskins, Greenskins**

| Project | Names used | Matches rulebook? |
|---------|-----------|-------------------|
| Rulebook (dungeon-chess) | Humans, Undead, Redskins, Greenskins | Source of truth |
| Deck (slide 14, species showcase) | Humans, Undead, Redskins, Greenskins | Yes |
| moddable-chess app (js/data.js) | Humans, Undead, Redskins, Greenskins | Yes |
| Website (mg-game-dungeon-chess-page.js) | Demonics, Wraiths, Knights, Verdants | No — STALE |

The website is the only project using old names. The CSS classes in the deck (`chip-race-knight`, `chip-race-wraith`, `chip-race-demonic`, `chip-race-verdant`) are vestiges of the old naming but don't display to users.

**Action:** Update website DC page to use Humans/Undead/Redskins/Greenskins. CSS class rename is low priority (internal only).

**Tracked in:** moddable-decks#16, moddable-website#38

---

## 7. Sync Mechanisms

| Direction | Mechanism | Command | What it syncs |
|-----------|-----------|---------|---------------|
| Rulebook → Website | npm run sync | `cd nukes-rulebook && npm run sync` | Game frontmatter → `data/games-sync.json` |
| Website → Deck | node script | `cd moddable-decks && node scripts/sync-data.js` | games, team, milestones, mods → `data/synced.json` |
| Deck → Website | Manual | — | Logo/asset propagation (copy files) |
| Website → Deck (runtime) | deck-sync.js | Automatic on page load | Hydrates `data-sync-*` attributes from synced.json |

**Gap:** No automated sync from rulebook directly to deck. Chain is: rulebook → website → deck (two hops).

---

## 8. Missing / Broken Links & Resources

### Pages that need building

| URL | Referenced in | What it should be |
|-----|--------------|-------------------|
| `moddable.games/press` | Deck slide 31 | Press kit download page with ZIP archive |
| `moddable.games/subscribe` | Deck slide 37 | Newsletter signup page |
| `moddable.games/tools/decks` | Deck slide 11 | Card deck builder tool |
| `moddable.games/tools/chess` | Deck slide 11 | Chess variant loader tool |

### Assets that need creating

| Asset | Referenced in | Status |
|-------|--------------|--------|
| Press kit ZIP archive | Deck slide 31 | Not created |
| One-page press release PDF | Deck slide 31 | Not created |
| Founder bio + backgrounder | Deck slide 31 | Not created |
| Fact sheet (deck as PDF) | Deck slide 31 | PDF export works but not hosted |
| Rulebook excerpt for press | Deck slide 31 | Not packaged |
| Gameplay b-roll (30s + 60s) | Deck slide 31 | Not created |
| 4K engine screenshots pack | Deck slide 31 | Not packaged |
| Hi-res founder headshots | Deck slide 31 | Team PNGs exist but not press-ready |
| Digital rulebook PDF ($15 tier) | Deck slide 21 | Exists in rulebook project, not hosted |

### Social accounts — unverified

| Account | Referenced in | Status |
|---------|--------------|--------|
| Discord: `discord.gg/moddable` | Deck slide 37 | May differ from stored URL |
| YouTube: `youtube.com/@moddablegames` | Deck slide 37 | Unverified if exists |
| Bluesky: `bsky.app/moddablegames` | Deck slide 37 | URL format likely wrong |
| `@moddablegames` handle | Deck slide 37 | Platform unspecified |
| BoardGameGeek page | Deck slide 24 (quote attribution) | Unverified |

### Features claimed as live but unverified

| Feature | Claimed in | Evidence |
|---------|-----------|----------|
| Card deck tool with 847 sessions/wk | Deck slide 11 | No tool page exists |
| Chess variant loader with 1,560 games/wk | Deck slide 11 | No tool page exists |
| 4 chess variants playable online | Deck slides 15, 26 | No chess tool exists |
| Dungeon Chess "LIVE PROTOTYPE · IN ENGINE" | Deck slide 14 | No playable link found |
| 3 bot difficulty tiers | Deck slide 6 | Likely aspirational |
| 4.2 star session rating | Deck slide 24 | No rating system visible |
| 500+ games played in alpha | Deck slides 24, 25 | Unverifiable |
| Econopoly 95% / LAUNCH READY | Deck slide 12 | No assets or page found |

### Path mismatches

| Correct path (website) | Wrong path (deck) | Fix needed |
|------------------------|-------------------|------------|
| `/tools/nukes` | `/tool/nukes` (slide 03) | Singular → plural |
| `/games/dungeon-chess/` | — | Not referenced in deck |
| `/community/` | — | Deck uses discord.gg directly |

---

## Tracked Issues

| Issue | Repo | What it resolves |
|-------|------|-----------------|
| #15 | moddable-decks | Nukes component/version contradictions |
| #16 | moddable-decks | DC species naming |
| #36 | moddable-website | Nukes age rating (14+ → 12+) |
| #37 | moddable-website | Nukes player count (3 → 2–3) |
| #38 | moddable-website | Sync DC species names |
| #39 | moddable-website | Team size (4 vs 6) |
| #40 | moddable-website | Hyper Imperium play time |
| #41 | moddable-website | Create /press page |
| #42 | moddable-website | Create /subscribe page |
