# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# TerraPrint

Client-side terrain-to-3D-print pipeline. The entire live app is a single file — `docs/index.html`
— with no build step, no bundler, no package manager. It is served as-is via GitHub Pages from the
`docs/` directory.

## Dev workflow

- **Edit** `docs/index.html` directly. There is no compile step.
- **Run locally**: open `docs/index.html` in a browser, or `python3 -m http.server 8000` from
  `docs/` and visit `http://localhost:8000/` (a local server is only needed if you want to test
  something that requires a real origin).
- **Deploy**: push to `main`; GitHub Pages serves `docs/index.html`.
- **No tests, no linter, no CI.** Verify changes by loading the page and running the full pipeline:
  search a place → draw a selection → Generate → inspect the 3D preview → export STL/3MF.
- The root-level `index.html` is a legacy prototype that is **not** served. Edit `docs/index.html`.

## File layout

`docs/index.html` is structured as three contiguous regions (line numbers approximate — grep to
confirm before editing):

- **CSS** — lines ~14–587 (`<style>…</style>`). All design tokens live in `:root` custom properties
  matching DESIGN.md.
- **HTML body** — lines ~589–1288. Header (LED, wordmark, utility buttons), left faceplate panel
  with collapsible sections, full-bleed map, floating 3D preview, modals.
- **JavaScript** — lines ~1289–6858 (`<script>…</script>`). Organized as namespaced object
  literals (`const Foo = { … }`) rather than classes or ES modules — see below.

External libraries are loaded from public CDNs in `<head>`: Leaflet 1.9.4 + leaflet-draw 1.0.4
(map + selection tools), three.js r128 (3D preview), JSZip 3.10.1 (3MF packaging). Bootstrapping
happens in `initApp()` at the bottom of the script; it polls until `L`, `THREE`, and `JSZip` are
defined, then calls `MapModule.init()`, `Preview.init()`, `Settings.restore()`, `Settings.attach()`.

## JS module map

Every capability lives in a top-level object. Find them with `grep -n "^const [A-Z]" docs/index.html`.
Rough pipeline order:

1. **Data / state**: `State` (selection, elevation grid, mesh, per-pixel overrides), `Settings`
   (persisted UI values), `Intro`, `Led`, `toast`, `showLoading`/`hideLoading`.
2. **Map + selection**: `MapModule` (Leaflet init, draw controls, imagery-source switching),
   `Geocode` (place search), `IMAGERY_SOURCES` (EOX Sentinel-2 vs. USGS NAIP), `drawTileGrid`.
3. **Fetching**: `Elevation` (AWS Terrarium PNG tiles → Float32 heightmap; `terrainZoomForBounds`
   picks z11–z15 by selection span), `Satellite` (basemap RGB extraction), `Landcover`
   (ESA WorldCover classification), `WaterDetection`, `Buildings` (OSM), `Gpx`, `Boundaries`.
4. **Color science**: `kmeansRGB`, `rgbToLab`, `adjustExposure`, `bilateralRGB`, `slicLabels`,
   `classifyLandcover`, band config helpers (`getBandConfig`, `ADV_DEFAULT_COLORS`,
   `winterizeBands`, `applyFramePreset`).
5. **Mesh + export**: `MeshGen` (elevation grid → watertight per-band meshes with base, walls,
   optional stepping/tiling/frames), `MeshRepair`, `STLExport` (single-color single-object),
   `ThreeMFExport` (multi-color multi-object with per-band color overlap governed by
   `COLOR_OVERLAP_MM` / `CAP_BASE_OVERLAP_MM`).
6. **UI + preview**: `Preview` (three.js scene), `UI` (panel wiring, generate/export handlers),
   `Paint` (water paint + color-correct modal), `Advanced` (per-band elevation thresholds).

The core invariant is **print-ready is the bar**: `MeshGen` output must load into a slicer without
repair, floating objects, or color gaps. Anything touching mesh topology, base thickness, band
overlaps, or the disc/boundary shape masks should be tested against that bar before shipping.

## Design Context

Strategic and visual context for any design work lives in:

- **PRODUCT.md** — register (product), platform (web), users, purpose, positioning, brand
  personality, anti-references, and the five design principles. Read before UI changes.
- **DESIGN.md** — the visual system ("The Quad Bench"): solid instrument surfaces, four ink roles
  (Signal Orange action / Hydro Blue water / Contour Sepia structure / green success), rocker
  switches, ruler sliders, status LED, quad-sheet neatline + marginalia, and the named rules
  (One Orange, Ink Roles, Solid Surface, Mono Numerals, Bench Step).

Core design principles, abbreviated: the terrain is the hero; print-ready is the bar; instrument,
not app; every control earns its place; familiar to a slicer user. Anti-references: the vibe-coded
AI aesthetic (big radii, glows, gradient text, pills, cream) and toy/gamified map apps.
