---
target: docs/index.html
total_score: 27
p0_count: 0
p1_count: 3
timestamp: 2026-07-22T21-06-33Z
slug: docs-index-html
---
Method: dual-agent (A: ac85afc9919656d45 · B: ad4344937d70610ef)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | LED + toast + progressive `showLoading()` are strong. Long fetches show a running count but no elapsed time / bar. |
| 2 | Match System / Real World | 3 | Speaks the target user's slicer language ("AMS," "3MF," "watertight"). Some domain jargon leaks ("Terrarium data") without inline explanation. |
| 3 | User Control and Freedom | 3 | Undo/escape in Paint (6591), Escape stack on modals (6843), reset defaults. But **no cancel for a running Generate/Tile job** — once started, it runs to completion. |
| 4 | Consistency and Standards | 3 | Component vocabulary is coherent. Detector caught 38 token drifts (colors, font-sizes, radii off the DESIGN.md scale) — small individually, systematic in aggregate. |
| 5 | Error Prevention | 2 | High-res confirm gate exists; export handlers guard on `State.meshData`. But no confirm on 64-tile jobs; no predicted triangle count / MB on the Generate button. |
| 6 | Recognition Rather Than Recall | 3 | Every control labeled; every slider has a live tabular-mono readout. Downside: Frame Style select (line 1041) has 8 named options with no preview thumbnails. |
| 7 | Flexibility and Efficiency | 2 | Enter/Space on headers, Esc on modals, Cmd/Z in Paint, Enter in search. **No shortcut for Generate**, no `?` for shortcut list, no "regenerate with same settings." |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained, serious, on-brand. Loses a point for the Imagery & Color section fully expanded (~30 controls of equal visual weight). |
| 9 | Error Recovery | 2 | `toast('Error generating model: ' + e.message)` at 6110, 6218, 6233, 6252 surfaces raw JS errors after long-running fetches. No suggested fix, no retry button. |
| 10 | Help and Documentation | 3 | First-visit intro reads like operator instructions, persistent `?` reopens it, inline hints on non-obvious sliders. No searchable help, no `?` hotkey. |
| **Total** | | **27/40** | **Acceptable–Good boundary — solid instrument foundation, real gaps in prevention/recovery/efficiency** |

Honest read: high in the Acceptable band (20–27), knocking on Good. The gap to a 32 is entirely (a) error prevention/recovery, (b) keyboard efficiency for the power user, (c) taming the density spike in Imagery & Color, and (d) closing the detector-caught token-drift set.

## Anti-Patterns Verdict

**Start here.** Does this look AI-generated?

**LLM assessment (Assessment A):** No. This is a hand-built instrument. Token discipline is real (`--radius` and `--radius-lg` collapsed to the same 2px value — a design decision, not autocomplete); the One Orange Rule holds (Signal Orange lives on `.btn-primary`, LED working state, focus rings, slider/rocker thumbs, nowhere decorative); Sepia is structure-only (chevrons, neatline, hairlines); Hydro is water-only (`.sub-head-hydro` at 166 and the Paint Water button). The rocker checkbox is custom-built in CSS with layered radial-gradient thumbs (222–245) rather than borrowed from a component library. The marginalia + neatline are executed cartographically with hemisphere-aware coord formatting in mono tabular numerals. None of the absolute bans fire: no side-stripe borders, no gradient text, no glassmorphism, no hero-metric template, no tracked uppercase eyebrow above every section, no numbered section markers. This isn't AI slop.

The **real slips** — where the code drifts from DESIGN.md's stated rules:

1. **Alpha loading overlay + modal backdrop.** `#loading-overlay { background: rgba(20,18,14,0.86); }` (478) and `.modal { background: rgba(0,0,0,0.55); }` (1232) both violate the Solid Surface Rule.
2. **Paint palette color chips are `border-radius: 6px`** (6349). DESIGN.md §6: "no radii above 2px." Every other radius in the file is 2px.
3. **Boundary popup "Use as cutout" button** hard-codes `#FF4D1C` and `#000` inside a Leaflet popup (3079, 3084) — the popup escapes the CSS class system, so tokens can't apply, but hex-in-JS is still drift.
4. **`accent-color: var(--accent)` inline on 15+ panel checkboxes** — dead CSS (the rocker override at 221–245 already handles the visual) and a fallback trap: any checkbox outside `#side-panel` would render as a round native OS checkbox tinted orange, not a Quad Bench rocker.
5. **Inline-styled hint spans** (`<span style="color:var(--text-muted);font-size:11px;">(…)</span>`) repeat 20+ times in the HTML. Should be a `.hint` class.
6. **A second amber `#f0b429`** appears twice (1569, 1622) — visually near the documented `--warning-amber: #F0A020` but not the same value. Real drift, not a token substitution.
7. **A lighter sepia `#d9b98c`** at line 551 sits close to Contour Sepia but isn't the token value — should live in a `--sepia-lit` token, not hard-coded.

**Deterministic scan (Assessment B):** 41 findings from `detect.mjs` (39 advisory, 2 warning). All catch drift, none catch decorative slop.

| Rule | Count | Where |
|---|---|---|
| `design-system-color` (color outside DESIGN.md) | 22 | 81, 99, 269, 284, 326, 388, 418, 442, 507, 551, 552×2, 1232, 1569, 1622, 3078, 3079, 3084, 6350×2, 6351×2 |
| `design-system-font-size` (off type ramp) | 13 | 147, 181 (`9px` chevrons), 215, 333, 412, 450, 495, 519, 582, 1189, 1237, 1250, 5850 (mostly `12px` and `15px`) |
| `design-system-radius` (off scale) | 3 | 270, 285 (`1px` slider ticks), 6349 (`6px` paint chip) |
| `flat-type-hierarchy` | 1 (warning) | 9 sizes across `9–15px` including half-pixel `11.5px` / `12.5px` steps |
| `em-dash-overuse` | 1 (warning) | 20 em-dashes in body text; many are cartographic marginalia rather than prose cadence |

Where the two assessments **agree** (highest-confidence findings):
- Paint chip `border-radius: 6px` at 6349 → break of the Solid Surface / 2px-radius rule (both A and B).
- Boundary popup hard-coded colors at 3078–3084 (both A and B).
- Header wordmark hard-coded `#fff` at 99 rather than the ink token (both A and B).
- Modal backdrop alpha at 1232 (both — A as Solid Surface Rule violation, B as undocumented color).

Where B **caught what A missed**:
- The `12px` font-size drift is systematic (13 instances), not one-off — this is a phantom "13th step" on a ramp that DESIGN.md only defines at 10/11/13/14px. Either add `12px` to the ramp explicitly or replace the 13 sites with 11 or 13.
- The second amber `#f0b429` (1569, 1622) is a real color-drift, not the documented `#F0A020`.
- A tan/sepia `#d9b98c` at 551 that should be tokenized.

**False positives / defensible drift** (from B, spot-checked):
- Alpha blacks (`rgba(0,0,0,0.5/0.55/0.6/0.9)`) inside `<canvas>` / Leaflet UI overrides (lines 3078–3084, 6350–6351) are defensible — canvas draw calls can't reference CSS vars. Still worth extracting to JS constants at least.
- `#d9b98c` at 551 is very likely a lit-sepia used intentionally on the marginalia; legitimate, but the *literal* is drift and should be tokenized.
- Nine font sizes across the CSS (9–15px) is not necessarily bad on an instrument panel — but the presence of `11.5px` and `12.5px` half-steps reads as fine-tuning drift, not a designed ramp.

**Visual overlays:** No reliable user-visible overlay is available — no browser-automation tool exposed in this session and no dev server running. The deterministic scan above is the fallback signal.

## Overall Impression

TerraPrint is a genuinely committed instrument. The Quad Bench vocabulary lives in the code, not just the spec: the LED, the marginalia, the mono tabular numerals, the sepia neatline, the rocker checkboxes, the sticky Generate footer. What's holding it back from Good/Excellent isn't identity — it's the moments at the *edges* of the primary flow: the empty first-visit map with no visible way to start drawing, the long-fetch valley with no elapsed time or cancel, and the raw `e.message` toast at the exact instant a user has invested 90 seconds waiting.

**Single biggest opportunity:** protect the peak-end. The Generate → Preview transition is emotionally correct; harden everything that happens when it goes wrong. Fix the error-recovery path (H9, currently a 2) and add a cancel for long jobs (H3), and the score jumps to 30/40 without touching the design.

## What's Working

1. **The `Led` module (1474–1485) is a signature detail that pays off.** Three states, tabular hover-titled, driven from the same `showLoading` pipeline. Reduced-motion converts blink to steady-on (561–567). One 8px dot doing the work of a whole status bar — exactly what PRODUCT.md means by "instrument, not app."
2. **The selection-info footer (5846–5906) is print-consequence dense.** Physical mm × mm × mm, triangle count, and a calibrated 3MF file-size estimate (line 5895: `estMB = s.triangles * 22e-6`), plus a repair-status glyph. This is slicer-fluent readout; no AI-slop dashboard would show `≈ MB` before download.
3. **The Paint modal's undo semantics.** `_pushUndo()` snapshots the entire mask *before* a stroke (6584, 6628), so Cmd/Z reverts the whole stroke, not one pixel. Undo history clears on every modal open (6277). The kind of correctness detail that makes an instrument trustworthy.

## Priority Issues

### [P1] Raw exception messages surface in the primary error path
- **Why it matters:** `toast('Error generating model: ' + e.message)` at 6110 (and 6218 tiles / 6233 STL / 6252 3MF) fires after long-running fetches — the highest-stakes moment the toast layer serves. A user just waited 60–120s and gets "Error generating model: Failed to fetch" or a raw TypeError. No fix, no retry, no context. This is the peak-end break.
- **Fix:** Classify errors before display. Network errors → "Elevation service is slow — retry?" with an inline Retry button. Geometry errors → user-actionable ("Selection too small to mesh at 512 — try Resolution 256"). Keep the raw `e.message` in `console.error` only.
- **Suggested command:** `/impeccable harden`

### [P1] No visible affordance to start drawing on first-time land
- **Why it matters:** After the intro closes on first visit, the Leaflet.Draw toolbar sits silently in the top-right of the map with no callout. The only prompt ("Draw a rectangle on the map to select an area.") lives 300px away in the left panel. Jordan bounces here; Mo hunts on their fourth visit.
- **Fix:** When `!State.selectedBounds`, overlay a small sepia `→` chevron or `[Draw here →]` label anchored to the draw-rectangle button. Remove after first successful selection. Dead-simple — no pulse, no confetti.
- **Suggested command:** `/impeccable onboard`

### [P1] Frame Style select has 8 options with no preview
- **Why it matters:** Line 1041 offers Custom, Museum, Field map, Display tray, Medallion, Minimal slab, Gallery, Plaque — chosen blind. Working-memory violation (8 > 4) and names are evocative but non-obvious (how does "Field map" differ from "Museum" in mm?). Every wrong pick costs a full Generate.
- **Fix:** Replace the `<select>` with a 4×2 grid of tiny SVG silhouettes (60×40) showing each frame's characteristic outline. Selected chip inverts to a Signal Orange border. Keeps density high, makes it recognition-first.
- **Suggested command:** `/impeccable layout`

### [P2] Long-fetch valley: no elapsed time, no cancel
- **Why it matters:** `showLoading('Fetching tiles… 12/64')` is informative on count but not time, and a running Generate/Tile job cannot be aborted. LED blinks orange, spinner turns. Tiling can be 5+ minutes of wait. H3 (User Control) fails; peak-end erodes.
- **Fix:** Add a mono tabular elapsed counter (`01:14`) next to `#loading-text`. Add a Cancel button below the spinner wired to an `AbortController` in the fetch pipeline. On cancel: `Led.set('')`, restore `#selection-info`, toast "Generate cancelled."
- **Suggested command:** `/impeccable clarify`

### [P2] Token drift is systematic (41 detector findings)
- **Why it matters:** Individually small; in aggregate this is how AI-slop drifts back in on future edits. Every hard-coded color and off-ramp font size widens the door for future contributors (or future Claude) to add another. The biggest specific slips: alpha loading overlay + modal backdrop break the Solid Surface Rule; the paint chip `border-radius: 6px` breaks the 2px rule; the second amber `#f0b429` at 1569/1622 breaks the four-ink-role palette; 13 sites use `12px` on a ramp that doesn't include it; the inline-styled hint span pattern (~20 sites) should be a `.hint` class.
- **Fix:** Three passes: (1) opaque `#loading-overlay` and `.modal` backgrounds using `--face-deep`; (2) add a `.hint` class and replace the inline pattern; (3) either add `12px` to DESIGN.md's ramp or replace the 13 sites; (4) tokenize the lit-sepia at 551 and unify the amber to the documented `#F0A020`; (5) delete every dead inline `accent-color: var(--accent)` on the rockers; (6) change paint chip radius from 6px to 2px.
- **Suggested command:** `/impeccable polish`

## Persona Red Flags

### Alex (Impatient Power User)
- **No keyboard shortcut for Generate** — the most common action requires a mouse click on a bottom-left sticky button. Add `⌘/Ctrl+Return`.
- **No shortcut to open Paint Water** (Cmd/Z works only after Paint is open).
- **No `?` hotkey to open the shortcut list.** Header `?` button is mouse-only.
- **No "regenerate with same settings" affordance.** After a param tweak, Alex scrolls to the setting, edits, then scrolls back to the sticky Generate footer. A floating `⟳ Regenerate` next to the LED would kill three scrolls per iteration.
- **Reset Defaults uses `confirm()`** (1422) — the exact "redundant confirmation for a low-risk action" the persona flags.

### Sam (Accessibility)
- **Rocker checkboxes have no visible focus indicator on the well.** The global focus-visible rule (558) lands on the `<input>`, but the thumb is a background image on the same element — the focus outline may render outside the 28×15 well.
- **Section-header keyboard support exists but no `aria-expanded`.** Enter/Space toggle works (6839–6841) and `role="button"` is set, but screen readers announce "button" without collapsed/expanded state.
- **Rocker on/off is conveyed by thumb position + color alone** — no label change, no `aria-checked` mirroring.
- **Selection-info footer is not `aria-live`.** When mesh completes and the box populates with triangle count + dimensions, a screen reader user won't hear the announcement.
- **LED conveys state via color only.** `title` attr updates (1480–1481) but titles are tooltip-only.

### Mo, the AMS Hobbyist (project-specific persona)
- **Wins:** The Selection-info readout with mm × mm × mm dimensions, triangle count, and calibrated MB estimate is exactly what a slicer-fluent user needs. LED + toast confirming triangle count on Generate (6105) speaks the right currency. Named export files (1509–1522) respect a working directory.
- **Red flags:**
  - **No triangle-count budget on the Generate button.** `_confirmHighRes()` (6079–6082) fires on 1024 res, but a 1024-res mesh with 8×8 tiling is 64× that. Show predicted tri count and MB on the Generate label ("Generate — ≈480k tri, ≈11 MB").
  - **No per-color triangle/volume breakdown after Generate.** The 3MF export knows per-object counts (`objects` at 6242) but the toast only says total. Add "3MF · 4 objects (Water 12k, Lowland 89k, Forest 210k, Alpine 74k)" to the model card.
  - **No layer-count preview at their intended slicer layer height** — "≈340 layers at 0.2mm" would collapse a whole browser→slicer round-trip.
  - **Frame Style names don't map to slicer consequences.** Show `+g` filament next to each frame preset.
  - **Tiling shows tile count but no total time estimate.** 64 tiles = 8+ minutes, but "assembled ≈ 300×150 mm" doesn't warn about wall-clock.

## Minor Observations

- The **inline hint span pattern** (`<span style="color:var(--text-muted);font-size:11px;">(…)</span>`, ~20 sites) should be promoted to a `.hint` class.
- **Header wordmark:** `.logo svg { color: #fff }` (99) overrides `currentColor` — one hard-coded white in a tokenized system.
- **Preview close `✕` button** (1219) has no title/aria-label; `Preview.close()` also destroys unsaved paint edits without warning.
- **`#map-search` input** has no as-you-type place suggestions; a mistyped mountain returns "Location not found."
- **Tiling's photo-color-per-tile-seams warning** flashes as a toast; should be an inline callout in the tiling section when a photographic source is selected.
- **`Settings.reset()` uses native `confirm()`** (1422) — jarring dialog inside a bench-styled app; should be a bench modal.
- **`Boundaries` popup button** (3078) uses `font: 600 12px sans-serif` — hard-coded font stack breaks the type system.
- **Route color default `#E8442A`** (1171) is a hair off Signal Orange — if it's data-only that's fine, but in UI preview it reads as "not-quite the accent."
- **9 distinct font sizes across CSS** including `11.5px` and `12.5px` half-steps — the detector's `flat-type-hierarchy` warning is worth spot-checking against DESIGN.md's ramp.

## Questions to Consider

1. **Should Generate live on the map, not in the panel?** The primary action currently sits at the bottom of a 320px-wide left rail. On a wide monitor Mo's eye is on the map. A single Generate chip anchored bottom-center-of-map would put the trigger where the attention already is.
2. **Does "print-ready on first slice" mean the app should refuse to Generate settings that will produce a broken print?** Today the app *warns* about high res and shows post-hoc repair stats. It doesn't ever block. A defensible instrument would grey out Generate with a live tooltip: "Base 1mm × Vert exag 5× on 15m of relief → walls too thin; raise Base to 3mm."
3. **Should the 3D preview take over the map on Generate, then step aside when the user goes to iterate?** Currently the preview docks bottom-right. On first Generate — the peak moment — it should probably fill; escape or click-map returns to iterate. Makes the peak feel like a reward rather than "another panel opened."
4. **Is the intro modal doing enough work?** Five numbered steps in a modal that fires *before* the user sees the app. Callout dots on the actual interface (pointing at the search bar, draw toolbar, color-source select, Generate footer, preview panel) with a "Skip tour" pill would keep the content and kill the modal-as-first-thought.
5. **What if the Frame Style select were replaced by literal SVG paper cutouts?** Eight physical frame silhouettes in sepia line-work, chosen by clicking, no dropdown. More "quad sheet catalog" and it kills the recognition problem.
