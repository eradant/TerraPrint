# Confirmed Design Brief — "The Quad Bench" (2026-07-17)

New visual identity replacing "The Cartographer's Light Table" glass system. Confirmed by the user
in full (orange as THE action color throughout, not the quieter blue-keeps-focus variant).

## Direction
- **Anchors:** Teenage Engineering hardware × vintage USGS quad sheets. Evening-workshop dark.
- **Material:** solid, opaque, matte — glass/blur fully retired. Bench `~#1B1A18`, faceplate `~#26241F`,
  warm-white silk-screen ink. Radii 0–2px.
- **Color strategy: Full palette, four roles:**
  - Signal Orange `~#FF4D1C` — action: Generate/Apply, working/active states, focus, slider thumbs.
  - Hydro Blue (existing topo-water family) — everything water.
  - Contour Sepia `~#A8794A` — structure: rules, ticks, neatline, marginalia.
  - Vegetation Green — success/health (mesh sealed, print-ready).

## Layout
- Panel docks flush-left as a solid faceplate (no float, no radius, hard edge); map fills the rest.
- Map gets a 1px sepia **neatline** with corner ticks; selection coordinates render as **marginalia**
  along the map's bottom edge (hemisphere-correct formatter reused).
- 3D preview = device screen: solid bezel, inset screen, corner **status LED**.
- Section headers = silk-screen stamps (existing label tier re-inked, sepia rule-offs). IA unchanged.

## States & Motion
- Header status LED: blinks orange while generating/tiling (reduced-motion: steady-on), green 2s on
  success, red on error. Mechanical motion: 100–150ms snaps, no easing theatrics.
- Checkboxes → CSS rocker switches; ranges → ruler-tick tracks with orange thumbs; buttons flat,
  pressed = 1px translate + ink darken. Disabled = 35% ink.
- Intro modal restyled as an operator's card. All existing a11y work (Escape, focusability,
  aria-live, reduced-motion) carries over untouched.

## Scope
Whole-app chrome (panel, header, search, preview, modals, Leaflet controls, toasts, intro),
production fidelity. Map tiles/terrain content and the accordion IA untouched. System fonts stay;
SRL mark unchanged. DESIGN.md + design.json to be rewritten under the new North Star after build.

## Implementation references
colorize.md (four-role discipline), typeset.md (label tier), animate.md (LED/mechanical motion),
product register rules.
