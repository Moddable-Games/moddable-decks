# Dungeon Chess — Brand Brief & Asset Guide

## Project Overview

**Game Name:** Dungeon Chess  
**Tagline:** Asymmetrical Skirmishes & Dungeon Crawling  
**Stage:** Online game (current) → Crowdfunded tabletop version (planned)  
**Industry:** Tabletop / board game publishing  

### Concept
Dungeon Chess is a hybrid game merging chess mechanics with dungeon-crawl asymmetry. Players control asymmetric factions with unique movement rules, navigating dungeon environments rather than a standard chessboard. The name and visual identity must speak to both chess players and tabletop RPG / dungeon crawl fans simultaneously.

---

## Brand Identity

### Approved Logo
The approved logo (files in this ZIP) was generated via **Recraft.ai** using the prompt below. It features:
- A **chess knight helmet** rendered as a dark fantasy great helm, with the horse profile of the chess knight visible as the plume/rear of the helmet — a deliberate visual pun merging both themes
- Clean **two-colour silhouette**: deep charcoal/navy (`#12121C`) and aged gold (`#B08D2D`)
- Wordmark: **DUNGEON CHESS** in a premium serif typeface, all-caps, gold, set below the icon with tightened spacing

### Colour Palette
| Swatch | Name | Hex | Usage |
|---|---|---|---|
| ■ | Deep Dungeon | `#12121C` | Primary dark, backgrounds |
| ■ | Aged Gold | `#B08D2D` | Primary accent, wordmark, tagline rules |
| ■ | Parchment White | `#F5F0E8` | Light backgrounds, reversed text |
| ■ | Iron Grey | `#3A3A4A` | Secondary dark, supporting text |

### Typography
- **Wordmark:** Serif, all-caps, wide tracking — consistent with the Recraft output. Closest free equivalents: **IM Fell English**, **Cinzel**, or **Cormorant SC** (Google Fonts)
- **Tagline:** Same serif family, smaller, widely tracked, gold, flanked by thin horizontal rules
- **Body / UI:** Clean sans-serif for digital contexts (e.g. Inter, DM Sans)

---

## Asset Files in This Package

| Filename | Description | Dimensions | Use Case |
|---|---|---|---|
| `01_logo_transparent_tightened.png` | Master logo, transparent bg, tightened icon/wordmark spacing | 1280×783px | Primary logo file |
| `02_logo_all_gold.png` | Flat gold silhouette, transparent bg | 1280×783px | Single-colour print, embossing |
| `03_logo_all_white.png` | Flat white silhouette, transparent bg | 1280×783px | Dark backgrounds, reversed use |
| `04_logo_black.png` | Flat black silhouette, transparent bg | 1280×783px | Monochrome print, fax/legal |
| `05_logo_white_on_dark.png` | White logo on `#12121C` background | 1340×903px | Social media, email headers |
| `06_favicon_icon_512.png` | Helm icon only, square crop | 512×512px | App icon, favicon, avatar |
| `07_favicon_icon_192.png` | Helm icon only, square crop | 192×192px | Web manifest, small avatar |
| `08_kickstarter_banner_1600x900.png` | White logo centred on dark textured bg | 1600×900px | Kickstarter / campaign header |
| `09_logo_with_tagline_transparent.png` | Master logo + tagline, transparent bg | 1280×873px | Full lockup with tagline |
| `10_logo_tagline_on_dark.png` | Full lockup + tagline on dark bg | 1400×993px | Campaign use, dark contexts |

### Usage Notes
- Always maintain clear space around the logo equal to the height of the "D" in DUNGEON on all sides
- Never stretch, recolour, or add effects to the master files
- For backgrounds other than white or `#12121C`, use the all-gold or all-white flat variants
- The tagline font in files 09/10 is a system serif fallback — for pixel-perfect tagline rendering, re-add the tagline in a vector editor (Inkscape, Illustrator, Affinity Designer) using Cinzel or Cormorant SC

---

## Logo Generation — Learnings for Future Claude Projects

### What Worked

**Claude (claude.ai) cannot generate professional logos via SVG.** SVG paths are hand-coded coordinates — the output looks like crude clip-art, not a designed mark. Do not attempt logo creation via SVG in Claude.

**The correct workflow is:**
1. Use Claude to develop the creative brief, concept direction, and colour palette
2. Use **Recraft.ai** (recraft.ai) to generate the actual logo — it has a dedicated **Logo** output mode that produces clean vector-quality marks
3. Return the generated image to Claude for post-processing (background removal, colour variants, resizing, ZIP packaging)

### Recraft.ai Prompt That Produced the Approved Logo

```
Professional tabletop game logo for "Dungeon Chess". Icon: a chess knight 
helmet reimagined as a dark fantasy great helm with visor slots, rendered 
as a bold flat vector mark. Style: dark fantasy, heraldic, premium. Colour 
palette: deep charcoal and aged gold. No background. Clean single icon 
paired with serif wordmark "DUNGEON CHESS".
```

**Key prompt principles for Recraft logo generation:**
- Specify **one single icon concept** — Recraft performs poorly with multiple or complex icon briefs
- Use the word **"flat vector"** to avoid rendered/photographic outputs
- Say **"No background"** explicitly to get a transparent result
- Name the **exact wordmark text** you want — Recraft will typeset it
- Include **colour palette** as descriptive words ("aged gold", "deep charcoal") not hex codes
- Specify the **industry/style** ("dark fantasy", "heraldic", "premium") for appropriate aesthetic

### Alternative Tools (if Recraft unavailable)
- **Midjourney** with `--style raw` and `--no background` — good for icon concepts, less reliable for clean wordmarks
- **Adobe Firefly** — good vector output, requires Adobe subscription
- **Looka.com** — more templated but faster for full brand kits
- **Human designer** via 99designs or Dribbble — best for bespoke quality, 5–10 day turnaround

### Post-Processing Claude Can Handle Well
Once a logo image is generated externally and uploaded, Claude (with Python/Pillow) can reliably:
- Remove white or solid-colour backgrounds (transparent PNG export)
- Generate flat colour variants (all-gold, all-white, all-black)
- Crop icon-only versions for favicons
- Resize for specific platform dimensions (Kickstarter 1600×900, app icon 512×512, etc.)
- Add simple text elements (taglines, rules) — note: font matching is approximate unless exact font files are available
- Package everything into a ZIP

### Python/Pillow Background Removal — Key Technique
```python
from PIL import Image
import numpy as np

img = Image.open("logo.png").convert("RGBA")
data = np.array(img)
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

tolerance = 30
is_white = (r > 255-tolerance) & (g > 255-tolerance) & (b > 255-tolerance)
whiteness = np.minimum(r, np.minimum(g, b)).astype(float)
alpha_mask = np.where(is_white, ((255-whiteness)/tolerance*255).clip(0,255).astype(np.uint8), 255)
data[:,:,3] = np.where(is_white, alpha_mask, a)

Image.fromarray(data).save("logo_transparent.png")
```
The `tolerance` value (30 works well for clean white backgrounds) controls how aggressively near-white pixels are made transparent — increase for slightly off-white backgrounds, decrease if the logo itself contains light colours that are being incorrectly removed.

---

## Future Development Notes

- The **shield/crest concept** (a heraldic shield quartered like a chessboard with a chess king centred on it) was identified as a strong alternative icon direction — worth generating in Recraft if a second logo variant is needed
- For the **crowdfunding campaign**, the Kickstarter banner (`08_`) should be updated with campaign-specific copy (funding goal, dates) in a separate design pass
- A **colour version of the logo** (rather than two-tone charcoal/gold) could be explored for digital-first contexts — deep purple/teal dungeon palette could work well alongside the existing gold
- Consider commissioning a **custom serif wordmark** from a type designer to fully own the typography rather than relying on a generated or system font

---

*Brief compiled from a Claude (claude.ai) conversation — May 2026*
