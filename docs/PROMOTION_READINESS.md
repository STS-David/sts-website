# Promotion Readiness

## Verdict

**Not ready for cutover yet.**

The rebuild is structurally much stronger and now covers the core public baseline, but promotion should wait until a short final verification pass is completed in the browser against the actual cutover checklist.

## Criteria Review

### 1. Route stability

**Conditionally acceptable, not fully verified**

- Shared transition interception has been hardened in `rebuild/scripts/transitions.js`.
- Internal routing, same-origin checks, modifier-click exclusion, and reduced-motion behavior are in place.
- The rebuild uses real multipage HTML routes and no longer depends on SPA-only routing for the coded path.

Why this is not fully cleared yet:
- Route behavior has been hardened in code, but there is still no browser-based regression pass confirming edge-case behavior across all rebuild routes.
- Existing hardening notes already call out that trailing-slash assumptions still depend on preview-server behavior.

### 2. Responsive safety

**Improved, but not fully signed off**

- Shared responsive corrections were added across `rebuild/styles/base.css`, `rebuild/styles/layout.css`, and `rebuild/styles/components.css`.
- Mobile nav, CTA stacking, five-card homepage systems, contact form spacing, and footer stacking were all specifically addressed.
- `docs/RESPONSIVE_QA.md` documents the corrections.

Why this is not fully cleared yet:
- The responsive pass was code-level correction only.
- The existing responsive QA note explicitly states that final confidence still requires manual browser/device checking at real phone and tablet widths.

### 3. Contact form stability

**Likely ready, but final promotion confidence still depends on one last live check**

- The contact form uses the real Formspark endpoint.
- The current `rebuild/scripts/contact.js` only shows success after `response.ok`.
- Validation, honeypot, privacy checkbox, error handling, and reset behavior are implemented cleanly.
- You previously confirmed that Formspark submissions are real and email notification works.

Why this is not fully cleared yet:
- For a promotion decision, this should still be reconfirmed once more from the actual rebuild route immediately before cutover, since contact is a business-critical path.

### 4. Transition stability

**Not yet fully proven**

- Transition logic has been narrowed to internal links only.
- External, `mailto:`, `tel:`, `_blank`, `download`, modified-click, and same-route cases are excluded.
- Reduced-motion handling exists.

Why this is not fully cleared yet:
- No browser verification has been recorded for page-to-page transitions across the rebuild routes after all recent shell, nav, footer, and legal-route changes.

### 5. Legal / footer completeness

**Structurally ready, pending content verification**

- `Impressum` and `Datenschutzerklärung` now exist as coded routes:
  - `rebuild/impressum/index.html`
  - `rebuild/datenschutz/index.html`
- Footer legal links are present across the rebuild shell.
- The contact page privacy label links to the coded privacy route.
- Public alpha/build/footer residue has been removed.

Why this is not fully cleared yet:
- The legal content was reconstructed from prior extracted site material and should be reviewed for final factual completeness before promotion.
- From the available repo evidence, address/chamber/supervisory details are not present, so if those are legally required for the real business setup, the current legal pages may still be incomplete.

### 6. Visual parity strength

**Not strong enough for automatic promotion yet**

- The rebuild now preserves the core STS identity:
  - dark technical atmosphere
  - glass shell
  - cyan/blue accent system
  - terminal treatment
  - transition overlay
- Many visual refinements have been completed across cards, FAQ, CTA system, surfaces, and responsive layout.

Why this is not fully cleared yet:
- Existing hardening documentation still states that final parity against `current-live/` is deferred.
- No final page-by-page browser parity review has been documented after the later visual passes.
- “Strong enough” parity is not yet evidenced by a deliberate comparison pass at desktop + mobile widths.

### 7. Absence of staging residue

**Mostly cleared**

- Public build markers, canonical-reference text, and “legal pages later” residue were removed from the coded shell.
- Legal/footer links are now public-facing rather than placeholder-facing.

Residual caution:
- No obvious public alpha/staging residue remains in the rebuilt HTML routes from the current code review.
- This criterion appears substantially satisfied.

### 8. Major card / layout weaknesses

**Improved, but not formally cleared**

- Homepage industry/principle cards, FAQ shell, pricing emphasis, contact card, and responsive stacking all received refinement passes.
- The most obvious structural weaknesses have been addressed in shared CSS.

Why this is not fully cleared yet:
- There is still no final browser-based review proving that no major layout weakness remains across the six rebuild pages at desktop, tablet, and phone sizes.

## Remaining Blockers

1. No final browser verification pass has been recorded for:
   - transitions
   - responsive behavior
   - desktop/tablet/mobile layout safety
   - final visual parity against `current-live/`

2. Legal pages exist, but factual/legal completeness still needs owner review before public promotion.

3. The rebuild shell is stable, but repeated header/footer markup across static pages still increases the chance of inconsistency if last-minute edits are made before cutover.

## Recommendation

**Do not promote `rebuild/` yet.**

## Final Pre-Cutover Tasks

1. Run a manual browser verification pass on all rebuild routes:
   - desktop
   - tablet
   - ~390px mobile

2. Confirm the cutover checklist in-browser:
   - contact form submits successfully from the rebuild route
   - transitions behave correctly on internal links
   - mobile nav opens/closes cleanly
   - no CTA overflow
   - no awkward card stacking
   - footer remains clean on all breakpoints

3. Do one explicit parity review against `current-live/` for:
   - homepage
   - solutions
   - pricing
   - about
   - contact
   - faq

4. Review the legal pages for final factual completeness before promotion.

## Promotion Trigger

Promote only after the four final pre-cutover tasks above are completed and no high-visibility issues remain.
