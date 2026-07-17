---
name: TerraPrint
description: Client-side terrain-to-3D-print pipeline — map, mesh, multi-color export
colors:
  void-black: "#000000"
  glass-panel: "#0A0C0EC7"
  glass-heavy: "#080A0CE0"
  surface-raise: "#FFFFFF0A"
  surface-hover: "#FFFFFF14"
  hairline: "#FFFFFF12"
  hairline-strong: "#FFFFFF24"
  ink-primary: "#E8ECF0"
  ink-secondary: "#98A2AB"
  ink-muted: "#6E7981"
  signal-blue: "#4D9FFF"
  signal-blue-bright: "#70B3FF"
  topo-water: "#2D6ABF"
  topo-lowland: "#C47F17"
  topo-forest: "#3D8C40"
  topo-alpine: "#C8C8C8"
  warning-amber: "#F0A020"
  danger-red: "#F85149"
  success-green: "#3FB950"
typography:
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.4px"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "1.2px"
  data:
    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
rounded:
  sm: "4px"
  lg: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
components:
  button:
    backgroundColor: "{colors.surface-raise}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "7px 14px"
  button-hover:
    backgroundColor: "{colors.surface-hover}"
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#000000"
    rounded: "{rounded.sm}"
    padding: "7px 14px"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-bright}"
  input:
    backgroundColor: "#00000073"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
---

# Design System: TerraPrint

## 1. Overview

**Creative North Star: "The Cartographer's Light Table"**

A dark surface with the living map shining through translucent overlays. Every piece of chrome —
the settings column, the search bar, the 3D preview — is tracing film laid over the light table:
blurred glass, hairline edges, quiet gray ink. The terrain is the only thing allowed to be
colorful; the interface's job is to disappear into the task, the way a slicer's viewport chrome
disappears around the model.

The system is dense and trustworthy in the manner of OrcaSlicer/Bambu Studio: many controls
visible, tightly packed, every one labeled and predictable. It explicitly rejects the vibe-coded
AI aesthetic — big radii, glows, gradient text, pill buttons — and anything toy-like or gamified.
Familiarity is the feature; strangeness without purpose is the failure mode.

**Key Characteristics:**
- Full-bleed map with floating translucent glass chrome (blur 14–18px, saturate 1.15)
- Monochrome interface; color is reserved for data (terrain) and function (Signal Blue)
- Sharp 4px radii, hairline 1px borders at 7–14% white
- Monospace tabular numerals on every numeric readout
- Accordion-organized dense control panel, mode-driven visibility

## 2. Colors

A monochrome glass system over black, with one functional accent and a data palette that belongs
to the terrain, not the chrome.

### Primary
- **Signal Blue** (#4D9FFF): the color that means "active" and nothing else. Primary action
  buttons, focus rings, range/checkbox accents, the active accordion state. Hover brightens to
  **Signal Blue Bright** (#70B3FF). Never decorative — no blue borders, headers, or washes.

### Neutral
- **Void Black** (#000000): page ground and header; the light table itself.
- **Glass Panel** (#0A0C0EC7) / **Glass Heavy** (#080A0CE0): translucent chrome surfaces, always
  paired with backdrop blur. Heavy is for readability-critical layers (toasts, modal toolbars, the
  sticky footer).
- **Surface Raise** (#FFFFFF0A) / **Surface Hover** (#FFFFFF14): button and control fills — white
  alpha, never opaque gray.
- **Hairline** (#FFFFFF12) / **Hairline Strong** (#FFFFFF24): every border in the system.
- **Ink Primary** (#E8ECF0) / **Ink Secondary** (#98A2AB) / **Ink Muted** (#6E7981): three-step
  text ramp — content, supporting labels, hints. Lifted a step in the 2026-07 contrast pass so
  muted copy survives bright imagery bleeding through the glass.

### Tertiary
- **Topo palette** — Water (#2D6ABF), Lowland (#C47F17), Forest (#3D8C40), Alpine (#C8C8C8):
  the default print-color bands. These are *data* colors: they appear in swatches, legends, and
  the model itself, never in chrome.
- **Warning** (#F0A020): non-fatal mesh-health and caution states.
- **Danger** (#F85149) / **Success** (#3FB950): destructive actions and health/progress states
  only, at low-alpha fills with colored text.

### Named Rules
**The Functional Blue Rule.** Signal Blue appears only where it means action, focus, or active
state. If removing the blue wouldn't remove information, it shouldn't be blue.

**The Hairline Rule.** Borders are 1px white-alpha hairlines. No colored borders, no 2px+ accents,
no side-stripes.

## 3. Typography

**Body Font:** system sans (-apple-system → Segoe UI → Helvetica)
**Data Font:** ui-monospace (SF Mono → Menlo → Consolas)

**Character:** One quiet sans for everything verbal; a monospace voice for everything numeric.
The pairing is contrast-by-function, not by style — words explain, numbers measure.

### Hierarchy
- **Title** (600, 14px, 0.4px tracking): the wordmark and modal titles. This system has no
  display tier; nothing shouts.
- **Label** (600, 10px, 1.2px tracking, UPPERCASE): section headers, sub-heads, preview header.
  The strongest structural voice in the panel.
- **Body** (400, 13px): control labels, options, buttons.
- **Data** (400, 11–12px, tabular-nums, monospace): slider values, number inputs, coordinates,
  dimensions, file sizes, tile info — every numeral the user reads.

### Named Rules
**The Mono Numerals Rule.** Any value a user might compare or re-read (mm, meters, counts, sizes)
renders in the data font with tabular numerals. A proportional numeral in a readout is a bug.

## 4. Elevation

Depth comes from **translucency, not shadows**: layers closer to the user are more blurred and
more opaque (glass → glass-heavy), separated by hairlines. The map glowing through a panel *is*
the depth cue. Shadows are near-absent — one soft ambient (0 16px 56px rgba(0,0,0,0.6)) under the
floating 3D preview, and nothing else. Buttons, cards, and inputs are flat at every state.

### Named Rules
**The Glass Over Shadow Rule.** To lift a surface, increase its glass opacity and blur — never add
a drop shadow. If a new surface needs a shadow to read, its glass values are wrong.

## 5. Components

Dense and trustworthy: many controls, tight vertical rhythm, no control asking for attention until
it's relevant.

### Buttons
- **Shape:** sharp, gently eased corners (4px), 1px hairline-strong border
- **Default:** Surface Raise fill, Ink Primary text (13px/500), 7px 14px padding
- **Hover:** Surface Hover fill, border to 22% white; 150ms background/border transition
- **Primary:** Signal Blue fill, black text (600) — one per view region
- **Danger / Success:** transparent fill with 35%-alpha colored border and colored text;
  low-alpha colored fill on hover
- **Small:** 5px 10px padding, 12px text

### Inputs / Fields
- **Style:** 45%-alpha black fill, hairline border, 4px radius, 6px 10px padding
- **Numbers:** data font, tabular
- **Focus:** border shifts to 50%-alpha Signal Blue; no glow, no ring shadow
- **Ranges:** native sliders with Signal Blue accent-color; value chip right-aligned in data font

### Cards / Containers
- **Panel:** floating glass column (320px) with 6px radius, hairline border, internal accordion
  sections separated by hairlines — sections are flat groups, never nested cards
- **Sub-folds:** hairline-top rows with rotating ▾ chevron for occasional controls
- **Sticky footer:** glass-heavy, carries the primary action and readouts

### Navigation
- **Header:** solid black bar, hairline bottom, SRL mark + wordmark left, utility buttons right
- **Accordion:** uppercase Label-tier headers, chevron rotates -90° when collapsed, state persists

### Signature: Glass overlays
Search bar, 3D preview (drag-resizable, fullscreen), toast, and loading scrim all share the glass
recipe: glass fill + backdrop blur + hairline border + 6px radius. Modals (paint editors, intro)
use glass-heavy with near-opaque grounds for tool work.

## 6. Do's and Don'ts

### Do:
- **Do** keep the terrain the hero: chrome stays monochrome glass; only data and function get color.
- **Do** use monospace tabular numerals for every readout (The Mono Numerals Rule).
- **Do** hold radii at 4px (6px only for floating containers) and borders at 1px hairlines.
- **Do** keep state transitions 150–250ms, easing out; motion conveys state, never decoration.
- **Do** show only applicable settings — mode-driven visibility over disabled clutter.

### Don't:
- **Don't** ship the vibe-coded AI aesthetic (PRODUCT.md, verbatim): "big radii, glows, gradient
  text, pill buttons, cream backgrounds, generic SaaS landing energy."
- **Don't** add anything toy-like or gamified: "cartoon markers, confetti, badges — anything that
  undercuts the precision-instrument feel."
- **Don't** use Signal Blue decoratively — no blue section headers, borders, or background washes.
- **Don't** add drop shadows to lift surfaces (The Glass Over Shadow Rule).
- **Don't** use display fonts, orchestrated page-load choreography, or custom scrollbars/form
  controls where native ones work.
