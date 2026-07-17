---
target: docs/index.html
total_score: 27
p0_count: 1
p1_count: 3
timestamp: 2026-07-17T02-31-10Z
slug: docs-index-html
---
Method: dual-agent (A: design-review agent · B: detector agent)

# Design Health Score — 27/40 (Acceptable, upper edge)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Staged loading text + model card are strong; no cancel/progress for long stages; water-detect failure silent |
| 2 | Match System / Real World | 3 | Slicer-native vocabulary; but coordinate readout hardcodes °N/°W (wrong hemispheres, double negatives) |
| 3 | User Control and Freedom | 2 | Paint undo good; no cancel on Generate, no Escape anywhere, Apply re-runs full pipeline silently |
| 4 | Consistency and Standards | 3 | Token discipline excellent; emoji icons, #f0a020 one-off, coords not in mono font, stale &lt;title&gt; |
| 5 | Error Prevention | 3 | High-res confirm + size readouts; typed inputs bypass min/max |
| 6 | Recognition Rather Than Recall | 3 | Everything labeled, mode-driven visibility, persistence |
| 7 | Flexibility and Efficiency | 2 | No caching between Generates (full refetch each run); no shortcuts; preview unreopenable after close |
| 8 | Aesthetic and Minimalist Design | 3 | Dense-by-intent holds; Composition w/ frame ≈24 controls; two selects exceed 4 options |
| 9 | Error Recovery | 2 | Good imagery fallbacks w/ toasts; elevation tile failures SILENT → wrong model; raw e.message in toasts |
| 10 | Help and Documentation | 3 | Strong intro modal + inline micro-copy; no deeper reference |
| **Total** | | **27/40** | **Acceptable — significant improvements before it feels finished** |

## Anti-Patterns Verdict

**LLM assessment:** Not AI slop — the glass is earned (panels float over a live map; translucency carries information), radii 4/6px, hairlines, one permitted shadow, no gradient text/pills/glows. Two tells of slippage: (1) **color emoji as icons** (🖌 🎨 ⬇ ✓ ⚠ in buttons/toasts) — the most recognizable vibe-coded marker and the only chrome color in a monochrome system, hitting both stated anti-references; (2) **off-system one-offs** — #f0a020 warning color, #f0b429 amber selection, bright-white Leaflet controls reading as "default library styles."

**Deterministic scan:** 28 findings (3 warnings, 25 advisories), exit 2. Corroborates the one-off colors (design-system-color ×6) and flags a 9-size font cluster (flat-type-hierarchy) — mostly intentional instrument density, but 11.5/12.5px steps are inline-style drift (182 inline style attributes). The `transition: width` warning (line 378) lands in `.progress-bar-fill` — **dead CSS** per Assessment A, so it's moot but confirms cruft. False positives correctly identified: Leaflet control overrides, JS string literals (Leaflet draw color, canvas swatch gradients), em-dash count inflated by code comments.

**Visual overlays:** skipped — no browser automation exposed; findings are source-level only. Contrast items below flagged "needs visual check."

## Overall Impression

An authored instrument, not template output: the design system is real, disciplined, and matches its own DESIGN.md. The gaps are engineering-adjacent UX: failure honesty (silent elevation errors), loop economics (full refetch per Generate), and the unglamorous 80% of accessibility. The single biggest opportunity: make the iterate loop cheap (cache rasters) — it converts the product's core motion from "commit and wait" toward "live instrument."

## What's Working

1. **Mode-driven visibility** — the panel genuinely reshapes around the chosen workflow; the OrcaSlicer feel is implemented, not claimed.
2. **Consequence-forward readouts** — physical mm / triangles / calibrated MB before export; high-res confirm with real math. Fulfills "print-ready is the bar."
3. **Failure-tolerant color pipeline** — imagery→elevation fallbacks with plain-language toasts; buildings/GPX failures never abort a model.

## Priority Issues

1. **[P0] Silent elevation failure → confidently wrong model.** Tile `onerror` resolves silently; offline/blocked runs produce a flat heightfield that still toasts "mesh sealed." Worst failure mode for a print-first tool. **Fix:** count failed tiles; abort with named count; promote water-detect catch to a toast. **Command:** /impeccable harden
2. **[P1] Core loop refetches the network every Generate.** Changing base thickness re-downloads elevation, Overpass, imagery, land cover for identical bounds. Taxes the exact iteration loop the product exists for; hammers Overpass. **Fix:** cache rasters keyed (bounds, zoom, res, source); invalidate on selection change. Paint Apply becomes near-instant. **Command:** /impeccable optimize
3. **[P1] Muted/secondary text on 72% glass over bright terrain.** #565F67 ≈3:1 over black; over blurred snow/desert it can collapse below 1.5:1. Coordinates, units, statuses live at this tier. **Fix:** promote load-bearing text to secondary+; raise glass opacity or add scrim behind text column. **Command:** /impeccable audit → polish
4. **[P1] No keyboard path; a11y ≈ zero.** Drag-only selection blocks keyboard users at step 2; accordion/h3s, folds, palette chips are unfocusable divs; no Escape; no live regions (all toasts invisible to SR). **Fix:** buttons for headers/chips, one Escape handler, numeric bounds entry, aria-live on #toast. **Command:** /impeccable audit
5. **[P2] &lt;768px silently amputates the product.** Panel display:none removes Generate/exports with no message; map+search still work → dead-end sessions. **Fix (min):** glass banner naming the desktop requirement; better: bottom-sheet panel. **Command:** /impeccable adapt

## Persona Red Flags

**Alex (power user):** pays full network cost on every tweak; zero shortcuts; preview unreopenable after close; no numeric selection nudge; (good: high-res confirm doesn't nag).
**Sam (accessibility):** hard-blocked at drag-only selection; unfocusable custom controls; no live regions — the entire status channel is silent; the only ARIA in 6,074 lines is the logo label.
**Slicer-Fluent Maker (project persona):** export toast says "4 color solids" even in 8-color mode — accuracy slip in the message that matters most; no band→filament-slot mapping before the slicer (legend CSS exists but is dead); "exported with gaps" warning names no remedy knob (Color overlap / Detail).

## Minor Observations

- &lt;title&gt; still "Oregon Terrain Model Generator"; product is global.
- Coordinates: not mono (violates own Mono Numerals Rule), wrong hemisphere suffixes.
- Dead CSS: .progress-bar-*, .legend-row, .grid-tooltip.
- 182 inline style attributes bypass the token system (drift vector; source of the 9-size font cluster).
- Paint chip selection uses blue glow ring + scale — the one banned pop in the system.
- No prefers-reduced-motion guard despite PRODUCT.md committing to it.
- Empty state says "rectangle"; circles supported.
- Search limit=1: "Springfield" flies somewhere unstated.
- Frame preset select: 8 options; color source: 5 — both exceed the 4-option working-memory line.

## Questions to Consider

1. Why does Generate exist? With raster caching, re-cluster + re-mesh could run debounced after any settings change — every slider becomes WYSIWYG against the preview.
2. Should the slicer be trusted as the second half of the UI? Named 3MF materials matching AMS slots + a color legend would make first-slice success verifiable before leaving the page.
3. Is the panel organized by pipeline internals rather than user decisions (where / how big / what colors / how presented)? Reorganizing around decisions could dissolve the cognitive-load failures without removing capability.
