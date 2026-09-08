---
name: TerraPrint
description: Client-side terrain-to-3D-print pipeline — map, mesh, multi-color export
colors:
  bg: "#F5EAD8"
  surface: "#EBDDC5"
  surface-deep: "#E3D4BA"
  surface-raise: "#F1E7D5"
  surface-hover: "#E7D8BD"
  ink-primary: "#201E1D"
  ink-secondary: "#645C50"
  ink-muted: "#675D50"
  accent: "#C67139"
  accent-hover: "#B2622D"
  accent-ink: "#8C491A"
  accent-fill: "#A35726"
  accent-fill-hover: "#97511F"
  accent-fill-active: "#8C491A"
  placeholder: "#645C50"
  accent-2: "#7A8A5E"
  sage-100: "#F0FAE1"
  neutral-100: "#F9F4ED"
  neutral-200: "#EEE7DB"
  neutral-400: "#C0B6A5"
  neutral-800: "#474238"
  topo-water: "#2D6ABF"
  topo-lowland: "#C47F17"
  topo-forest: "#3D8C40"
  topo-alpine: "#C8C8C8"
  warning: "#C98A2B"
  danger: "#B3402F"
  success: "#728157"
typography:
  wordmark:
    fontFamily: "'Caprasimo', Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
  headline:
    fontFamily: "'Caprasimo', Georgia, serif"
    fontSize: "23px"
    fontWeight: 400
  heading:
    fontFamily: "'Caprasimo', Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Caprasimo', Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
  subtitle:
    fontFamily: "'Caprasimo', Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
  button:
    fontFamily: "'Caprasimo', Georgia, serif"
    fontSize: "14px"
    fontWeight: 400
  body:
    fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Figtree', -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
  kicker:
    fontFamily: "'Figtree', -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.08em"
  data:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
  micro:
    fontFamily: "'Figtree', -apple-system, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.1em"
  chevron:
    fontFamily: "'Figtree', -apple-system, sans-serif"
    fontSize: "9px"
    fontWeight: 400
  # The printed poster is a separate artifact from the app chrome. Its stacks are deliberately
  # generic: a downloaded SVG has no webfonts at a print shop, and Georgia/Helvetica/mono all
  # substitute invisibly, where Caprasimo would substitute loudly. Never used in the UI.
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
  pill: "999px"
  md: "16px"
  lg: "24px"
  xl: "32px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
components:
  button:
    backgroundColor: "transparent"
    borderColor: "{colors.neutral-400}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  button-primary:
    backgroundColor: "{colors.accent-fill}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.accent-fill-hover}"
  button-primary-active:
    backgroundColor: "{colors.accent-fill-active}"
  input:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  card:
    backgroundColor: "{colors.neutral-100}"
    rounded: "{rounded.lg}"
---

# Design System: TerraPrint

## 1. Overview

**The Organic Field Guide.** TerraPrint is a client-side pipeline that turns a map selection into a
print-ready, multi-color 3D terrain model. The interface is a warm paper workbench: a solid cream
ground, softly rounded surface cards, one earthy terracotta reserved for action, and sage for the
things that grow or flow. The terrain — the map, the 3D preview, the color bands — carries the
visual weight; the chrome is quiet, tactile and legible around it.

The register is **product**: design serves the task. The user is a maker iterating between browser
and slicer, often for many rounds. Density and earned familiarity beat novelty. Success is
*print-ready on first slice*, so every readout that predicts a print's cost (dimensions, triangle
count, filament estimate, fit warnings) is part of the design, not decoration.

**Key characteristics**
- Solid warm surfaces at every level — no translucency, no backdrop blur, no glass.
- Generous pill radii (999px on controls, 16–32px on cards); nothing is hard-cornered.
- Caprasimo display serif for the wordmark, step headings and buttons; Figtree for everything else.
- One terracotta for action, one sage for nature/success — and a separate, untouchable
  filament palette for data.
- A numbered accordion of step cards that reads as a workflow, not a settings dump.

## 2. Colors

Strategy: **Restrained.** Warm tinted neutrals carry the surfaces; a single accent carries action.

### Surfaces
Five warm neutral steps, all fully opaque: `bg` #F5EAD8 (page), `surface` #EBDDC5 (panel),
`surface-deep` #E3D4BA (footers, map controls, wells), `surface-raise` #F1E7D5 and
`surface-hover` #E7D8BD (control fills). Depth is a **surface step plus a hairline rule** —
never a shadow stack, never alpha.

### Action
**Terracotta** is the one action color. It appears in three roles, and the distinction is
load-bearing:
- `accent` #C67139 — accent as a **surface**: toggle tracks, slider fills, focus rings, borders.
  These owe only 3:1 against the page, which it clears at 4.16:1.
- `accent-fill` #A35726 — accent **behind text**: filled primary buttons. Cream #FAF6EF on it is
  4.94:1. `accent` itself is only 3.35:1 with that text, which is why the two are separate tokens.
  Hover #97511F, active #8C491A.
- `accent-ink` #8C491A — terracotta **as text** on the page ground (5:1).

**Sage** `accent-2` #7A8A5E is the second voice: the brand mark, completed-step pills, water and
land-cover contexts. It is never an action color.

### Data — do not theme
`topo-water` #2D6ABF, `topo-lowland` #C47F17, `topo-forest` #3D8C40, `topo-alpine` #C8C8C8 are
**real filament hexes**. They appear in swatches, legends, the 3D preview and the exported 3MF.
They are data, not palette: they do not shift between light and dark, and they are never
substituted for aesthetic reasons.

### Ink
`ink-primary` #201E1D, `ink-secondary` #645C50, `ink-muted` #675D50, plus `placeholder` #645C50.
Body text clears 4.5:1 on every surface it sits on; placeholders are explicitly tokenized because
the browser default (#757575) does not.

### Dark theme
A full parallel ramp under `:root[data-theme="dark"]` and `prefers-color-scheme`. Terracotta is
replaced by **blue** #3D7FC4 (surface) / #3672B0 (behind text) — warm accents muddy on a dark
ground. Surfaces invert to #1C1A17 / #201D1A; the filament palette does not move.

## 3. Typography

Two families on a genuine contrast axis — a display serif against a humanist sans.

- **Caprasimo** (display serif, 400): wordmark, step headings, buttons, the intro headline.
  Used deliberately as brand voice; it is the one place this product register bends its own rule
  about display faces in controls.
- **Figtree** (400/500/600/700): every label, control, hint and paragraph.
- **System mono** (`ui-monospace, SF Mono, Menlo`) with `tabular-nums`: every numeral a user might
  compare or re-read — dimensions, coordinates, elevations, triangle counts, fit readouts.

Fixed rem/px steps, not fluid clamps: this is dense product UI viewed at a consistent size.
Scale in use: 23px intro headline · 19px wordmark · 17px step heading · 14px button · 13px body ·
12px label/mono · 11px hint · 10–11px uppercase sub-head (0.08em tracking).

**The mono numerals rule.** Any value that gets compared renders in the mono face with tabular
figures, so columns of numbers stay aligned as they change.

## 4. Elevation

Depth is **physical, not optical**. Surfaces step lighter as they rise (page → panel → card →
raised control), separated by hairline rules. There is no translucency and no backdrop blur
anywhere in the app, by policy.

Three shadow tokens exist (`shadow-sm/md/lg`, all `color-mix` on #2E2B25) and are used sparingly:
the floating 3D preview panel, modals, and the toast. Everything else earns its depth from the
surface step and a 1px hairline.

Layering follows a semantic ramp rather than arbitrary values:
map chrome (200–700) → panel (900) → mobile note (950) → preview (1000) → poster overlay (1500) →
paint modal (2000) → intro modal (3000) → toast (3500).

## 5. Components

**Buttons.** One pill shape at every size. `.btn` is a transparent outline; `.btn-primary` is the
filled terracotta (at `accent-fill`); `.btn-ghost` drops the border; `.btn-danger` tints toward
`danger`. Caprasimo, 14px. Hover lifts the background by a 7% ink mix; active darkens the fill.

**Inputs and selects.** Pill-radius, `neutral-100` fill, hairline border. Focus swaps the border to
`accent`. Numerals render mono with tabular figures.

**Pill toggles.** 38×22 track with a sliding white thumb, terracotta when on. Layered backgrounds
only — no pseudo-elements — for cross-engine reliability.

**Ruler sliders.** A `linear-gradient` fill to the thumb over a sage track, with the numeric value
in a mono readout to the right.

**Step cards.** The panel is a numbered accordion. Each section is a rounded card with a
counter-driven step dot; a completed section collapses, the dot becomes a sage checkmark, and a
one-line summary of its settings replaces the body. Headings are `h2` and keyboard-operable
(`role="button"`, Enter/Space).

**Chip grids.** A hidden input carries the value so settings persistence keeps working, with a row
of SVG-thumbnail buttons as the interaction surface. Used for frame style, poster paper and poster
theme.

**Accessible naming.** Every control has a programmatic name — a `<label for>`, a wrapping label, or
an `aria-label` where the control's meaning lives in an adjacent swatch or row rather than in text.

**Focus.** One rule, everywhere: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`.

**Motion.** 120–250ms, `--ease-mech` (`cubic-bezier(0.22, 1, 0.36, 1)`), transform and opacity only.
A global `prefers-reduced-motion` block collapses every duration to 0.01ms; no information is ever
gated on an animation completing. The 3D preview renders on demand — it parks its render loop when
the camera is still.

## 6. Do's and Don'ts

### Do
- **Do** keep every surface solid and warm; depth is a surface step plus a hairline rule.
- **Do** reserve terracotta for action, and pick the right accent token for the job — `accent` for
  surfaces, `accent-fill` behind text, `accent-ink` as text.
- **Do** keep the filament palette (`topo-*`) untouched across themes. It is data.
- **Do** set every numeral a user might compare in the mono face with tabular figures.
- **Do** give every control a programmatic name, and let `:focus-visible` show one consistent ring.
- **Do** surface the consequences of a setting (size, triangle count, fit, cost) before it costs a print.

### Don't
- **Don't** reintroduce the retired "Quad Bench" direction: charcoal faceplates, Signal Orange,
  mono-everything, 2px corners. PRODUCT.md names it an anti-reference.
- **Don't** add translucency, backdrop blur, or alpha surfaces.
- **Don't** ship the SaaS-cream slop set: gradient text, glows, hero-metric blocks, or a tracked
  eyebrow above every section.
- **Don't** use terracotta decoratively, or sage for actions.
- **Don't** put accent behind text without using `accent-fill` — plain `accent` fails contrast there.
- **Don't** let the poster SVG inherit screen theme tokens. It is a print artifact: literal hexes
  only, so a dark-mode viewer never exports a dark sheet.
