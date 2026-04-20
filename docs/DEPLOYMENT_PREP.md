# Deployment Prep

## Final Deploy Structure

The root-level static deploy tree now mirrors the authoritative `rebuild/` site:

- `index.html`
- `about/index.html`
- `solutions/index.html`
- `pricing/index.html`
- `contact/index.html`
- `faq/index.html`
- `impressum/index.html`
- `datenschutz/index.html`
- `agb/index.html`
- `cookies/index.html`
- `styles/`
  - `tokens.css`
  - `base.css`
  - `layout.css`
  - `components.css`
  - `utilities.css`
- `scripts/`
  - `booking.js`
  - `consent-bootstrap.js`
  - `consent.js`
  - `contact.js`
  - `effects.js`
  - `faq.js`
  - `nav.js`
  - `terminal.js`
  - `transitions.js`
- `assets/`
  - `icons/`
  - `logo/`
- `.nojekyll`

The following source/reference areas were intentionally left untouched:

- `rebuild/`
- `current-live/`
- `docs/`
- `archive/`

## Path Fixes Made

- Replaced the old root placeholder entry with the real homepage from `rebuild/`.
- Mirrored the rebuild page folders to root-level static route folders for GitHub Pages compatibility.
- Mirrored root-level `styles/`, `scripts/`, and `assets/` directly from `rebuild/`.
- Kept all route, asset, CSS, and JS paths relative for static hosting.
- Kept the working Formspark action path unchanged.
- Kept the cookie consent runtime unchanged except for previously completed path-safe behavior inside `rebuild/scripts/consent.js`, which was then mirrored to root deployment.
- Added root `.nojekyll` so GitHub Pages serves the static folders directly.

## Manual Verification After Deployment

The structure is ready for GitHub Pages-style static hosting, but these items should still be checked once the deployed URL is live:

- contact form submission from `/contact/`
- cookie consent persistence across route changes
- cookie/legal links from the consent UI
- booking link opening correctly from deployed pages
- final route checks for:
  - `/`
  - `/solutions/`
  - `/pricing/`
  - `/about/`
  - `/contact/`
  - `/faq/`
  - `/impressum/`
  - `/datenschutz/`
  - `/agb/`
  - `/cookies/`

## Remaining Deployment Risk

Current remaining risk is low and mostly operational:

- external services still need real deployed-URL verification:
  - Formspark
  - Microsoft booking link
- Google Fonts are still externally loaded in the current HTML heads, so the deploy is static-safe but not fully self-hosted
- no automated post-deploy browser regression check exists yet
