---
name: TerraPrint
description: Client-side terrain-to-3D-print pipeline — map, mesh, multi-color export
colors:
  bg: "#161826"
  bg-deep: "#12141F"
  bg-well: "#0F1017"
  surface: "#1A1C28"
  surface-2: "#232532"
  surface-hover: "#2A2C3A"
  line: "#3F424D"
  line-soft: "#292B31"
  ink-primary: "#E9E9ED"
  ink-2: "#B2B6CA"
  ink-secondary: "#9397AB"
  ink-muted: "#75798C"
  ink-disabled: "#595D6C"
  ink-button: "#CFD3E5"
  accent: "#9184D9"
  accent-bright: "#B5ABFC"
  accent-text: "#D2CEFD"
  accent-tint: "#2B2741"
  accent-tint-hover: "#2F2B48"
  accent-line: "#5D5294"
  topo-water: "#2D6ABF"
  topo-lowland: "#C47F17"
  topo-forest: "#3D8C40"
  topo-rock: "#8A6E5A"
  topo-alpine: "#C8C8C8"
  model-base: "#2B2D38"
  attribution-bg: "#1B1D29"
  # Leaflet.Draw ships one dark-ink sprite sheet. `filter` is the only lever that reaches a
  # background-image, so it hits the whole button — these three are the arithmetic inverses of
  # surface-2 / line / surface-hover / ink-muted, chosen so the filter lands back on the tokens.
  draw-btn-preinvert: "#DCDACD"
  draw-btn-preinvert-line: "#C0BDB2"
  draw-btn-preinvert-hover: "#D5D3C5"
  draw-btn-preinvert-hover-line: "#8A8673"
  attribution-link: "#7972A9"
  warning: "#D6A24A"
  danger: "#E5705F"
  success: "#6FB08A"
typography:
  wordmark:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 500
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    letterSpacing: "-0.015em"
  heading:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    letterSpacing: "-0.015em"
  tab:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "11.5px"
    fontWeight: 500
  button:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
  body:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 500
  kicker:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.1em"
  badge:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: "0.09em"
  caption:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 400
  micro:
    fontFamily: "'Inter', -apple-system, sans-serif"
    fontSize: "9px"
    fontWeight: 500
    letterSpacing: "0.05em"
  data:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
  data-figure:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
  data-instrument:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
  # The printed poster is a separate artifact from the app chrome. Its stacks are deliberately
  # generic: a downloaded SVG has no webfonts at a print shop, and Georgia/Helvetica/mono all
  # substitute invisibly. Never used in the UI.
  poster-print-display:
    fontFamily: "Georgia, 'Times New Roman', 'Liberation Serif', serif"
    fontWeight: 400
  poster-print-label:
    fontFamily: "'Helvetica Neue', Helvetica, Arial, 'Liberation Sans', sans-serif"
    fontWeight: 400
    letterSpacing: "0.09em"
  poster-print-data:
    fontFamily: "'SF Mono', Menlo, Consolas, 'DejaVu Sans Mono', monospace"
    fontWeight: 400
rounded:
  sm: "3px"
  chip: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "9px"
  md: "16px"
  lg: "20px"
  xl: "34px"
components:
  button:
    backgroundColor: "transparent"
    borderColor: "{colors.line}"
    textColor: "{colors.ink-button}"
    rounded: "{rounded.md}"
    padding: "7px 13px"
  button-primary:
    backgroundColor: "transparent"
    borderColor: "{colors.accent}"
    textColor: "{colors.accent-bright}"
    rounded: "{rounded.md}"
    padding: "7px 13px"
  button-primary-hover:
    backgroundColor: "rgba(145,132,217,0.12)"
    textColor: "{colors.accent-text}"
  button-primary-active:
    backgroundColor: "rgba(145,132,217,0.2)"
  input:
    backgroundColor: "{colors.surface-2}"
    borderColor: "{colors.line}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "7px 10px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
---

# Design System: TerraPrint

## 1. Overview

**Nocturne.** A dark instrument ground with one blurple accent, carried as line and glow and
almost never as a flood. The app is a workbench for a machine that makes a physical object, so
the chrome recedes and two things stay loud: the terrain, and what printing it will cost.

The layout is a **split bench**. The map half and the model half sit side by side, permanently,
separated by a single hairline the container paints. Under them, a 186px tabbed tray holds the
knobs that change the print. Everything else lives behind an **All settings** drawer. The user
never has to open a panel to find out what their model weighs.

Five rules carry the system:

1. **Line, not flood.** The accent is a 1px border, a 4px slider fill, a 2px tab underline, a
   thumb glow. The only accent *fills* in the whole app are the active segmented option, the
   selected radio row, the open All-settings button, and a toggle track when it is on.
2. **The ledger is always on.** Weight, time and AMS changes render in the model half, not in a
   collapsed card. Every figure comes from one `printEstimate` object, so the ledger and the
   export dialog can never disagree.
3. **Every knob states its cost.** A slider is never bare: under it sits what it costs in the
   units the user cares about — millimetres of bed margin, triangles, megabytes, layers.
4. **Elevation is an edge plus darkness.** One inset hairline ring and one soft shadow. Never a
   stack of shadows, never a glow used as depth.
5. **The data is not the theme.** Filament hexes and poster ink are real-world values. They
   never take a token and never re-theme.

## 2. Colors

### Ground and surface

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#161826` | App ground; the shell behind everything |
| `--bg-deep` | `#12141f` | Top bar, poster toolbar, tray-less chrome |
| `--bg-well` | `#0f1017` | Wells that hold content: 3D viewport, paint canvas, poster desk |
| `--surface` | `#1a1c28` | Panels, trays, drawers, dialogs |
| `--surface-2` | `#232532` | Inputs, chips, secondary rows, icon buttons |
| `--line` | `#3f424d` | Interactive borders (buttons, inputs, tiles) |
| `--line-soft` | `#292b31` | Structural dividers, panel edges, disabled borders |

### Action

| Token | Value | Use |
| --- | --- | --- |
| `--accent` | `#9184d9` | Primary-action borders, slider fills, active tab, brand mark, selection rect |
| `--accent-bright` | `#b5abfc` | Accent text and labels, slider thumbs, active icons |
| `--accent-text` | `#d2cefd` | Text on an accent-tinted fill |
| `--accent-tint` | `#2b2741` | Tinted fills for selected rows / active chips |
| `--accent-tint-hover` | `#2f2b48` | The same fill one step up, on hover |
| `--accent-line` | `#5d5294` | Quieter accent border (secondary accent buttons, status pills) |
| `--danger` | `#e5705f` | Destructive labels; border `rgba(229,112,95,.45)` |

There is one action color. A second accent would make the user ask what the difference means.

### Data — do not theme

Real filament hexes and real poster ink. They must survive any reskin unchanged.

| Band | Value |
| --- | --- |
| Water | `#2d6abf` |
| Lowland | `#c47f17` |
| Forest | `#3d8c40` |
| Rock / mid (5-band only) | `#8a6e5a` |
| Alpine | `#c8c8c8` |
| Model base (3D view only) | `#2b2d38` |

The poster sheet renders in literal ink — paper `#f7f3ea`, aperture frame `#cfc7b6`, aperture
well `#151821`, title `#20211f`, data `#6b6459`, credit `#8c8577`. It is a print artifact, not
UI: it never inherits the app theme, and Inter never enters it.

### Ink

| Token | Value | Use |
| --- | --- | --- |
| `--text` | `#e9e9ed` | Primary text, values |
| `--text-2` | `#b2b6ca` | Control labels |
| `--text-3` | `#9397ab` | Body copy, secondary labels |
| `--text-4` | `#75798c` | Captions, units, mono annotations, kickers |
| `--text-5` | `#595d6c` | Disabled text, empty-state strokes |
| `--text-btn` | `#cfd3e5` | Secondary button label |

### One theme

Nocturne is a single dark look. The light/dark toggle is gone: a second palette would need a
second set of contrast decisions for the same screen, and the terrain and filament colors — the
things that actually matter here — are tuned against this ground.

## 3. Typography

**Inter, weights 400 and 500 only.** Headings are 500 and never bolder; hierarchy is size and
space, not weight. Monospace is `ui-monospace, Menlo, monospace` and always carries
`font-variant-numeric: tabular-nums`, because these are numbers a user compares across rebuilds.

| Role | Spec |
| --- | --- |
| Wordmark | 500 / 14px / `-.01em` |
| Dialog title | 500 / 17–18px / `-.015em` |
| Panel title | 500 / 15–17px / `-.015em` |
| Section kicker | 500 / 10px / `.1em` / uppercase / `--text-4` |
| Viewport badge | 500 / 10px / `.09em` / uppercase / `--text-3` |
| Tab | 500 / 11.5px |
| Control label | 500 / 11px / `--text-2` |
| Body copy | 400 / 11.5–12px / 1.5–1.55 / `--text-3` |
| Caption | 400 / 10–10.5px / `--text-4` |
| Micro (tile label, map attribution) | 500 / 9–9.5px / `.05em` |
| Button | 500 / 12px (small: 11.5px) |
| Numeric value | mono 400 / 11px, tabular |
| Ledger figure | mono 400 / 13px, tabular |
| Instrument value (tray) | mono 400 / 15px, tabular |

## 4. Elevation

On a dark ground, elevation is an edge plus ambient darkness — never stacked shadows.

| Level | Value |
| --- | --- |
| Frame edge | `0 0 0 1px #3f424d` |
| Dialog | `0 0 0 1px #595d6c, 0 24px 60px rgba(0,0,0,.6)` |
| Drawer | `-1px 0 0 #3f424d, -24px 0 60px rgba(0,0,0,.5)` |
| Floating card | `0 0 0 1px #595d6c, 0 16px 40px rgba(0,0,0,.65)` |
| Accent glow (slider thumb) | `0 0 8px rgba(145,132,217,.6)` |
| Swatch ring (`--swatch-ring`) | `inset 0 0 0 1px rgba(0,0,0,.35)` |

The accent glow is the **only** glow in the system, and it is attached to the one control whose
position is the value: the slider thumb (plus Regenerate, when the mesh has gone stale). A glow
used anywhere else is decoration. `--swatch-ring` rings a filament hex against whatever surface
it lands on — it is part of the data device, not the chrome, which is why it is a flat black
alpha rather than a token color.

### The fading rule

Every divider spanning a full frame fades out at both ends:

```css
height: 1px;
background: linear-gradient(90deg, transparent, var(--line) 48px,
                            var(--line) calc(100% - 48px), transparent);
```

Inset 48px across the app frame, 16–24px inside a panel (matching its own padding) using
`--line-soft`. Short *marks* — the 2px active-tab underline, a selected-row bar — stay solid.
The fade is for rules, not marks.

## 5. Components

**Radii are 8 / 10 / 14px.** `999px` is now reserved for toggle tracks and slider tracks only —
it is no longer the button shape. Cards are 14px, not 24px.

- **Slider.** Header row: label (500 11px `--text-2`) left, value (mono 11px tabular) right.
  Track `4px`, radius 999, `--line`; fill `--accent` to the value; thumb `12px` circle in
  `--accent-bright` with the accent glow, scaling to ~14px on hover. Caption below at 10px
  `--text-4`, stating what the value costs.
- **Toggle.** Track `32×18`, radius 999 — on `--accent`, off `--line`. Knob `14px` at a 2px
  inset: on, right, `--bg`; off, left, `--text-2`.
- **Segmented control.** 1px `--line`, radius 8, `overflow:hidden`. Active option is `--bg` text
  on an `--accent` fill; inactive `--text-3`.
- **Buttons.** Primary — transparent, 1px `--accent`, `--accent-bright`. Secondary — transparent,
  1px `--line`, `--text-btn`. Destructive — 1px `rgba(229,112,95,.45)`, `--danger`. Disabled —
  1px `--line-soft`, `--text-5`, `cursor:default`, no hover.
- **Viewport badge.** 10px `.09em` uppercase `--text-3` on `--bg`, 1px `--line`, radius 6, pinned
  12px/11px inside a half.
- **Filament ledger.** Kicker, a 10px stacked bar (radius 3, segments sized by mass share in the
  filament colors), per-band masses in mono 10.5px, and — right-aligned — time and AMS changes in
  mono 13px over a `watertight · no floating parts` note.
- **Tray.** 186px: a 38px tab strip, the fading rule, then the controls. The Model tab uses the
  value-first instrument layout — value (mono 15px, right-aligned, 80px) · unit · label · track ·
  consequence — with the toggles and Regenerate in a 230px right region.

### Interaction states

Every interactive element gets a themed hover and press. No browser defaults anywhere.

- Secondary button: border → `--text-4`, background → `rgba(255,255,255,.03)`.
- Primary button: background → `rgba(145,132,217,.12)`, label → `--accent-text`.
- Pressed: `rgba(145,132,217,.2)`. No transform.
- Rows and chips: background → `--surface-2`, or `#2f2b48` when already accent-tinted.
- Focus: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }` — never the
  default blue ring.
- Transitions: 120ms color/opacity, 140–180ms movement, `cubic-bezier(.2,.8,.2,1)` for the
  drawer. Nothing above 200ms. `prefers-reduced-motion` makes state changes instant.

## 6. Do's and Don'ts

### Do

- Keep the map and the model on screen together. That pairing is the product.
- Put the print consequence where the model is, not behind a disclosure.
- Give every slider a consequence caption. A number with no unit of cost teaches nothing.
- Use mono + tabular numerals for anything a user will compare between runs.
- Let the drawer batch its edits and say how many are pending. Tray knobs apply on release;
  drawer edits apply on Apply.
- Re-theme third-party chrome (Leaflet controls, attribution, popups). Default widgets on this
  ground read as a bug.
- Mark the mesh stale when a geometry knob moves: dim the model, glow Regenerate, grey the
  ledger figures. Never auto-regenerate — the explicit Generate step is correct.

### Don't

- Don't flood the accent. If a surface is blurple, it had better be one of the four fills named
  above.
- Don't add a second action color, and don't use color alone to carry state.
- Don't theme the filament hexes or the poster ink. They are data and print.
- Don't use 999px on a button, or 24px on a card. Those were the old system.
- Don't push Inter into the poster sheet. It prints in serif and Helvetica for a reason.
- Don't stack shadows to fake depth on a dark ground.
- Don't reach for a spinner where a progress line on the thing being rebuilt would do.
