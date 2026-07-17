---
name: TerraPrint
description: Client-side terrain-to-3D-print pipeline — map, mesh, multi-color export
colors:
  bench: "#191714"
  faceplate: "#24211B"
  faceplate-deep: "#201D17"
  surface-raise: "#2E2A22"
  surface-hover: "#37322A"
  contour-sepia: "#A8794A"
  rule: "#A8794A4D"
  rule-strong: "#A8794A8C"
  ink-primary: "#ECE7DE"
  ink-secondary: "#ADA598"
  ink-muted: "#9A9285"
  signal-orange: "#FF4D1C"
  signal-orange-bright: "#FF6A3D"
  hydro-blue: "#4D9FFF"
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
  sm: "2px"
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
    backgroundColor: "{colors.signal-orange}"
    textColor: "#000000"
    rounded: "{rounded.sm}"
    padding: "7px 14px"
  button-primary-hover:
    backgroundColor: "{colors.signal-orange-bright}"
  input:
    backgroundColor: "{colors.bench}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
---

# Design System: TerraPrint

## 1. Overview

**Creative North Star: "The Quad Bench"**

A Teenage Engineering instrument faceplate bolted to an evening workbench, framing a USGS quad
sheet. Every surface is **solid, opaque, matte** — warm charcoal panels with warm-white silk-screen
ink, sepia contour rules for structure, and one loud Signal Orange for action. The glass era is
over: nothing blurs, nothing floats translucently. The map is the quad sheet; the chrome is the
hardware holding it down.

The system is mechanical and trustworthy: controls snap rather than glide, switches rock, sliders
run on ruler-tick tracks, and a status LED in the header tells you at a glance whether the
instrument is idle, working, done, or fault. It rejects the vibe-coded AI aesthetic — big radii,
glows, gradient text, pills, cream — and anything toy-like; it also now rejects decorative
translucency, its own former material.

**Key Characteristics:**
- Solid faceplate docked flush-left; full-bleed map framed by a sepia neatline with corner ticks
- Selection coordinates printed as map marginalia, quad-sheet style
- Four ink roles: orange = action, hydro = water, sepia = structure, green = success
- Mechanical motion: 100–150ms snaps, out-expo, LED state signaling
- 2px radii, warm charcoal surfaces, monospace tabular numerals on every readout

## 2. Colors

Four deliberate ink roles over warm charcoal — a full palette where every color has exactly one job.

### Primary
- **Signal Orange** (#FF4D1C): THE action color. Generate/Apply, working LED, focus rings, slider
  thumbs, engaged switch thumbs, active paint chip. Hover: **Signal Orange Bright** (#FF6A3D).
  6.3:1 with black button text.

### Secondary
- **Hydro Blue** (#4D9FFF): the water role — Water sub-head, Paint Water button ink. Everything
  that touches water in the UI speaks this ink; nothing else does.

### Tertiary
- **Contour Sepia** (#A8794A): structure — section rules, accordion chevrons, neatline, corner
  ticks, marginalia, slider tick tracks. The quad sheet's skeleton; never body text.
- **Topo palette** (Water/Lowland/Forest/Alpine) — the print-color data bands, in swatches and
  legends only.
- **Success Green** (#3FB950) — LED done-state, mesh-sealed health. **Warning** (#F0A020),
  **Danger** (#F85149) as before.

### Neutral
- **Bench** (#191714): page ground, header, input wells. **Faceplate** (#24211B) / **Faceplate
  Deep** (#201D17): panel, modals / footer, toasts, map controls. **Surface Raise / Hover**
  (#2E2A22 / #37322A): control fills. All solid — no alpha surfaces.
- **Ink Primary / Secondary / Muted** (#ECE7DE / #ADA598 / #9A9285): silk-screen text ramp,
  contrast-verified 13.0 / 6.6 / 5.2 : 1 on the faceplate.

### Named Rules
**The One Orange Rule.** Signal Orange is action and only action. If it isn't a control the user
fires or a state the machine is in, it isn't orange.

**The Ink Roles Rule.** Four roles, one job each: orange acts, hydro is water, sepia structures,
green succeeds. A color used outside its role is a defect.

**The Solid Surface Rule.** No translucent chrome, no backdrop blur, no alpha surfaces. Depth
comes from surface steps (bench → faceplate → raise) and sepia rules.

## 3. Typography

**Body Font:** system sans (-apple-system → Segoe UI → Helvetica)
**Data Font:** ui-monospace (SF Mono → Menlo → Consolas)

**Character:** silk-screened hardware labels — one quiet sans printed on the faceplate, monospace
for everything measured. Unchanged in structure from the previous system; re-inked warm.

### Hierarchy
- **Title** (600, 14px, 0.4px): wordmark, modal titles. No display tier; instruments don't shout.
- **Label** (600, 10px, 1.2px, UPPERCASE): section headers and sub-heads — the stamped voice.
- **Body** (400, 13px): control labels, options, buttons.
- **Data** (400, 11–12px, tabular mono): every numeral, including the map marginalia.

### Named Rules
**The Mono Numerals Rule.** Any value a user might compare or re-read renders in the data font
with tabular numerals — including coordinates printed on the map.

## 4. Elevation

Depth is **physical, not optical**: surfaces step lighter as they rise (bench → faceplate → raised
control), separated by sepia rules. There is no blur and no translucency anywhere. Shadows remain
near-absent — the one ambient shadow under the floating 3D preview (a device with a bezel sitting
on the bench) survives; everything else is flat at every state, with press feedback as a 1px
downward translate.

### Named Rules
**The Bench Step Rule.** To lift a surface, step its charcoal one level lighter and rule its edge
in sepia. Never add blur; never add a shadow.

## 5. Components

Mechanical and trustworthy: everything snaps, nothing glides decoratively.

### Buttons
- **Shape:** flat, 2px radius, 1px rule border
- **Default:** Surface Raise fill, Ink Primary 13px/500; hover steps to Surface Hover with a
  stronger sepia border; **active presses down 1px**
- **Primary:** Signal Orange fill, black text — one per view region
- **Danger/Success:** transparent fill, 35%-alpha colored border + colored text

### Switches (checkboxes)
- **Rocker style:** 28×15px well in bench charcoal, 9px thumb that snaps left (muted) to right
  (orange) in 120ms; engaged well warms slightly. No pseudo-elements — layered backgrounds.

### Sliders
- **Ruler-tick tracks:** 1px sepia baseline + ticks at 10% intervals; 9×16px Signal Orange thumb
  with a 1px dark edge. Fader, not pill.

### Inputs / Fields
- **Style:** recessed bench-charcoal well, 1px rule, 2px radius; numbers in data font
- **Focus:** border shifts to 55%-alpha Signal Orange; no glow

### Status LED (signature)
8px header LED: off (dark umber) → **working** (orange, 0.9s two-step blink; steady under
reduced-motion) → **ok** (green, 2s hold) → **err** (red, 2.5s hold). Driven by the loading
pipeline; titles announce state on hover.

### Quad-sheet framing (signature)
The map carries a 1px sepia **neatline** (inset, clearing the faceplate) with graticule corner
crosses, and the selection's coordinates print as **marginalia** along the bottom edge in sepia-lit
mono — data living where a printed quad would put it.

### Navigation
- **Header:** bench bar, sepia rule, SRL mark + wordmark + LED left, utility buttons right
- **Accordion:** stamped uppercase labels, sepia chevrons snapping -90° when collapsed; state persists

## 6. Do's and Don'ts

### Do:
- **Do** keep every chrome surface solid and matte; depth is a surface step + sepia rule.
- **Do** reserve orange for action (The One Orange Rule) and hydro ink for water contexts only.
- **Do** snap: 100–150ms, out-expo, press-down feedback; LED carries long-running state.
- **Do** keep numerals mono-tabular everywhere, including map marginalia.
- **Do** frame the map cartographically — the neatline and marginalia are identity, not decoration.

### Don't:
- **Don't** reintroduce translucency, backdrop blur, or alpha surfaces — the former glass system
  is an anti-reference now.
- **Don't** ship the vibe-coded AI aesthetic (PRODUCT.md, verbatim): "big radii, glows, gradient
  text, pill buttons, cream backgrounds, generic SaaS landing energy."
- **Don't** add anything toy-like or gamified: "cartoon markers, confetti, badges."
- **Don't** use orange decoratively, sepia for body text, or radii above 2px (LED excepted — it's
  physically round).
- **Don't** ease bouncily or animate longer than 150ms for state feedback.
