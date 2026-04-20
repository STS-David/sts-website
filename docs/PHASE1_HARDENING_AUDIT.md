# Phase 1 Hardening Audit

## What Was Fixed

- Hardened shared route transitions in `rebuild/scripts/transitions.js`.
- Limited transition interception to internal same-origin links only.
- Ignored modifier-clicks, external links, `mailto:`, `tel:`, `download`, `_blank`, `javascript:` links, and same-route clicks.
- Added reduced-motion-safe route behavior by skipping the overlay delay when reduced motion is preferred.
- Added a real mobile navigation pattern for all `rebuild/` pages.
- Added a shared mobile nav controller in `rebuild/scripts/nav.js`.
- Standardized shared script loading across rebuild routes with `defer`.
- Replaced inline booking handlers with shared `data-booking-trigger` behavior in `rebuild/scripts/booking.js`.
- Kept the existing Formspark contact integration intact.
- Removed visible staging/internal footer labels such as build markers and canonical reference text.
- Removed public placeholder footer text about legal pages coming later.
- Reduced fragile inline styling by moving repeated CTA and layout styles into shared CSS classes.
- Normalized public shell labels to feel product-facing rather than internal where they were visibly exposed.

## What Remains Fragile

- Header and footer markup is still duplicated across the page files instead of being generated from shared partials.
- The rebuild still relies on plain static HTML route files, so future structural updates must be propagated manually across pages.
- Transition routing assumes consistent trailing-slash behavior from the preview server.
- There is still no automated browser regression coverage for transitions, navigation, or contact form submission.
- Shared visual parity with `current-live/` is improved but not yet fully audited at a pixel/detail level across all breakpoints.

## What Is Deferred

- Promoting `rebuild/` to the root preview path.
- Full multipage template extraction or partial/include system.
- Legal page implementation.
- Deeper accessibility pass beyond the mobile nav, FAQ toggles, and current form validation states.
- Browser/device QA pass for edge-case navigation behavior and motion tuning.
- Final parity polish against `current-live/` for spacing, glow intensity, and micro-interaction timing.
