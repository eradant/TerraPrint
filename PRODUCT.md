# Product

## Register

product

## Platform

web

## Users

A single maker/hobbyist — the project's owner — printing multi-color terrain models on an
AMS-equipped 3D printer. Context: iterating between the browser (select an area, tune color and
composition settings, generate) and the slicer (slice, inspect, print), often over multiple rounds
until a model is display-worthy. Fluent in slicer software; expects tool-grade density and
responsiveness, not hand-holding.

## Product Purpose

TerraPrint turns real-world terrain into print-ready, multi-color 3D models. It fetches elevation
and satellite/land-cover data for a map selection, meshes it into watertight per-color solids, and
exports 3MF (multi-color, AMS) or STL. Success is **print-ready on first slice**: the export loads
into Orca/Bambu with no mesh repair, no floating objects, no color gaps — the printed model is the
outcome, and anything that requires manual slicer surgery is a defect.

## Positioning

The full pipeline in one page: search → select → color → refine (paint, color-correct, snow) →
compose (frame, card, edge text, route, tiles) → export — entirely client-side, no signup, no
backend.

## Brand Personality

Precise, technical, quiet. An instrument, not an app: the terrain is the spectacle, the chrome
stays out of the way. Reference feel: slicer software (OrcaSlicer / Bambu Studio) — a
preview-centric dark workspace with dense, trustworthy right-panel controls where everything
serves the model.

## Anti-references

- The vibe-coded AI aesthetic: big radii, glows, gradient text, pill buttons, cream backgrounds,
  generic SaaS landing energy.
- Toy/gamified map apps: cartoon markers, confetti, badges — anything that undercuts the
  precision-instrument feel.

## Design Principles

1. **The terrain is the hero.** The map and 3D preview carry the visual weight; chrome is
   translucent, hairline, and monochrome so the data reads through it.
2. **Print-ready is the bar.** Every geometry feature ships watertight and slicer-verified;
   readouts (dimensions, triangle count, file size) surface consequences before they cost a print.
3. **Instrument, not app.** Monospace numerals, functional-only accent color, 150–250ms state
   motion, no decoration that doesn't inform.
4. **Every control earns its place.** Mode-driven visibility (only applicable settings show),
   occasional controls fold away, defaults are the recommended path.
5. **Familiar to a slicer user.** Vocabulary, density, and affordances match the tools the model
   flows into next — earned familiarity over novelty.

## Accessibility & Inclusion

Pragmatic, personal-tool level: readable contrast on the glass surfaces and respect for reduced
motion. No formal WCAG conformance target.
