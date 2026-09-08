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

Warm, tactile, encouraging — a field guide for making, not a cold instrument. The "Organic"
system: a cream paper ground, soft rounded surface cards, one earthy terracotta for action, sage
for nature/water, Caprasimo display headings over Figtree. The terrain is still the spectacle and
the chrome still serves the model, but the mood is approachable and craft-like rather than
industrial. The workflow reads as friendly numbered step cards.

## Anti-references

- Cold, industrial dark-instrument UI (the prior "Quad Bench" direction): charcoal faceplates,
  mechanical snaps, mono-everything, hard 2px corners. Warmth and roundness are the point now.
- Generic SaaS-cream slop: gradient text, glows, hero-metric templates, tracked-eyebrow-on-every-
  section. Organic warmth is carried by Caprasimo, terracotta, and real terrain — not by decoration.
- Toy/gamified map apps: cartoon markers, confetti, badges — playful is fine, childish is not.

## Design Principles

1. **The terrain is the hero.** The map and 3D preview carry the visual weight; the chrome is
   quiet around them — solid warm surfaces, hairline rules, and one accent — so nothing competes
   with the data.
2. **Print-ready is the bar.** Every geometry feature ships watertight and slicer-verified;
   readouts (dimensions, triangle count, file size) surface consequences before they cost a print.
3. **Warm, but exact.** The mood is a field guide for making, not a cold instrument — rounded
   surfaces, Caprasimo, terracotta. The precision lives in the data: monospace tabular numerals on
   every comparable value, functional-only accent color, 120–250ms state motion, and no decoration
   that doesn't inform.
4. **Every control earns its place.** Mode-driven visibility (only applicable settings show),
   occasional controls fold away, defaults are the recommended path.
5. **Familiar to a slicer user.** Vocabulary, density, and affordances match the tools the model
   flows into next — earned familiarity over novelty.

## Accessibility & Inclusion

Pragmatic, personal-tool level: readable contrast on the glass surfaces and respect for reduced
motion. No formal WCAG conformance target.
