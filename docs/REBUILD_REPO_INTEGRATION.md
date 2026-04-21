# Rebuild Repo Integration

## Status Update

`rebuild/` is no longer the operational source of truth for the site.

The authoritative deployable frontend now lives at the repo root:

- `/index.html`
- route folders at repo root
- `/styles/`
- `/scripts/`
- `/assets/`

`rebuild/` should be treated as a snapshot/reference copy unless it is deliberately regenerated from the root site.

## Final Rebuild Folder Structure

Snapshot rebuild site structure still exists inside `rebuild/`:

- `rebuild/index.html`
- `rebuild/about/index.html`
- `rebuild/solutions/index.html`
- `rebuild/pricing/index.html`
- `rebuild/contact/index.html`
- `rebuild/faq/index.html`
- `rebuild/impressum/index.html`
- `rebuild/datenschutz/index.html`
- `rebuild/agb/index.html`
- `rebuild/cookies/index.html`
- `rebuild/styles/`
  - `tokens.css`
  - `base.css`
  - `layout.css`
  - `components.css`
  - `utilities.css`
- `rebuild/scripts/`
  - `booking.js`
  - `consent-bootstrap.js`
  - `consent.js`
  - `contact.js`
  - `effects.js`
  - `faq.js`
  - `nav.js`
  - `terminal.js`
  - `transitions.js`
- `rebuild/assets/logo/sts-logo.svg`
- `rebuild/assets/icons/favicon.svg`
- `rebuild/.nojekyll`
- `rebuild/README.md`

## Drift Warning

Because root and `rebuild/` contain duplicated pages and shared styles, maintenance becomes risky as soon as both trees are edited independently.

Confirmed drift exists in:

- `/pricing/index.html` vs `/rebuild/pricing/index.html`
- `/styles/components.css` vs `/rebuild/styles/components.css`
- `/styles/layout.css` vs `/rebuild/styles/layout.css`

## Operational Rule Going Forward

- Make frontend edits in the root site only.
- Treat `rebuild/` as reference-only until a deliberate resync/regeneration task is performed.
- Do not assume matching filenames across root and `rebuild/` are still identical.

## Notes On Current Workspace

Two rebuild subtrees still appear as scaffold leftovers:

- `rebuild/components/`
- `rebuild/pages/`

They currently contain only `.gitkeep` placeholder files from the earlier scaffold.
