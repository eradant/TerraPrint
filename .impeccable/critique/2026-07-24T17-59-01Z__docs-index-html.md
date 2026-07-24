---
target: docs/index.html (Organic reskin)
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-07-24T17-59-01Z
slug: docs-index-html
---
## Design Health Score — 33/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | LED, loading+elapsed, step completion summaries, toasts, mesh-health, coord pill |
| 2 | Match System / Real World | 4 | Slicer-native vocab (filament, AMS, tiles, watertight) reads correctly |
| 3 | User Control and Freedom | 3 | Undo/cancel/reset/Escape present; no global settings undo |
| 4 | Consistency and Standards | 3 | Cohesive Organic system, but step numbering contradicts the real flow; token drift |
| 5 | Error Prevention | 3 | Confirms (hi-res, reset), constraints, failure-tolerant fetches |
| 6 | Recognition Rather Than Recall | 4 | Step summaries, legend swatches, frame chips, context tag, DRAW HERE callout |
| 7 | Flexibility and Efficiency | 3 | Free step nav, Esc/Cmd+Z, presets; few power shortcuts |
| 8 | Aesthetic and Minimalist Design | 3 | Cohesive and clean, but dense; 5 steps + intro wall of 5 |
| 9 | Error Recovery | 3 | Toasts with retry (Overpass busy), tolerant generation |
| 10 | Help and Documentation | 3 | Intro modal (reopenable), inline hints, tooltips |
| **Total** | | **33/40** | **Good — address weak areas, solid foundation** |

## Anti-Patterns Verdict
LLM: No absolute-ban slop. But the cream + terracotta + Caprasimo + big-radii family is a currently-SATURATED "cozy-warm AI" lane — first-order category-reflex risk. Saved by domain-specific content (terrain hero, circular filament swatches, instrument density) and execution quality; it was a deliberate user-provided brand, not a reflex.
Detector: 25 findings, 24 advisory + 1 warning (em-dash overuse). 12 undocumented colors, 9 off-ramp font sizes (9/10/14/16/21/23px), 3 off-scale radii. All design-system-doc drift, not user-facing defects.

## Priority Issues
- [P1] Step numbering contradicts the real workflow. Drawing a selection is the FIRST user action, but it's "Step 5 · Selected Area" at the bottom, while "Step 1 · Model" (sampling jargon) leads. Numbered badges imply a sequence that's backwards. Fix: make selection Step 1 (mockup's "Select"), reorder so numbers match the flow.
- [P2] Design-system drift. 6 off-ramp font sizes + ~10 undocumented literal colors. Fix: add the new steps/values to DESIGN.md or snap to the ramp.
- [P2] Cognitive load / density. 5 top-level steps + dense controls + a 5-item intro wall. Fix: consider folding "Model" (sampling) into Select/Export so the top level is the 4 mockup steps.
- [P3] Numeral-font inconsistency. Coord pill + range values use mono; step summaries ("150mm · 512 samples") use body font. Standardize measured values on mono.

## Persona Red Flags
Alex (Power User): free step-nav + Esc + Cmd+Z, settings persist — good. No keyboard shortcut for Generate/export; numbered badges imply a forced sequence it doesn't enforce.
Jordan (First-Timer): "Step 1 · Model" leads with exaggeration / samples-per-side jargon before "pick a place"; the real first action is step 5 at the bottom. Misleading order.
Sam (Accessibility): AA contrast verified, accent focus rings, accordion keyboard ops. But Leaflet draw + 3D orbit are mouse-driven (no keyboard path to select/rotate); completion uses sage+check (not color-only, good).

## Minor Observations
- em-dash overuse in hint/intro copy (detector warning).
- Intro is a 5-step wall of text; mockup's 4-step version is punchier.
- Preview panel lacks the mockup's footer (dims + filament swatch row + STL/3MF).

## Questions to Consider
- Should the numbered steps match the real order (Select first), or drop the numbers and keep free-form cards?
- Does "Model/sampling" need to be a top-level step, or fold into Select/Export?
- Is the cream-terracotta warmth distinct enough, or does the terrain need to carry more of the identity?
