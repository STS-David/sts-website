# COOKIE_AND_SVG_IMPLEMENTATION

## Cookie consent

- Cookie name: `sts_cookie_consent`
- Consent states:
  - `necessary`
  - `all`
  - `custom`
- Categories prepared:
  - `necessary`
  - `statistics`
  - `marketing`

## Bootstrap flow

- Early bootstrap runs from:
  - `rebuild/scripts/consent-bootstrap.js`
- It is loaded in `<head>` on all rebuild pages before any later script loading path.
- The bootstrap:
  - reads the first-party consent cookie
  - normalizes the consent object
  - exposes `window.STSConsentState`
  - sets `document.documentElement.dataset.stsConsentState`

## Consent manager

- Shared manager file:
  - `rebuild/scripts/consent.js`
- It renders:
  - the first-visit banner
  - the settings panel
- Buttons implemented:
  - `Nur notwendige`
  - `Alle akzeptieren`
  - `Einstellungen`
  - `Auswahl speichern`
- Footer reopen label:
  - `Cookie-Einstellungen`

## Script blocking and activation

- Optional scripts must not be loaded directly with normal `<script src="...">` tags.
- The gating path uses inert script tags:

```html
<script
    type="text/plain"
    data-consent="statistics"
    data-src="https://example.com/optional-script.js">
</script>
```

- `necessary` only:
  - optional scripts remain inert
- `all` or `custom` with allowed categories:
  - matching inert scripts are converted into live script tags and injected

## Current live behavior inside rebuild

- Necessary local scripts remain active without consent:
  - navigation
  - transitions
  - booking trigger handling
  - FAQ behavior
  - terminal behavior
  - contact form handling
- No active statistics or marketing scripts were added in this pass.
- This means the consent layer is real and ready, while the optional categories remain empty until explicitly used.

## How to add future statistics or marketing scripts

1. Do not add the optional script directly as a normal live `<script src="...">`.
2. Add it as an inert script tag with `type="text/plain"`.
3. Set `data-consent="statistics"` or `data-consent="marketing"`.
4. Use `data-src="..."` for external files, or inline content inside the tag if needed.
5. Keep necessary/local functionality outside this optional path.

## SVG logo

- SVG asset path:
  - `rebuild/assets/logo/sts-logo.svg`
- The temporary `STS` block mark in header/footer lockups was replaced with the shared local SVG.
- Brand text remains alongside the logo to preserve the current shell identity.

## Updated components and pages

- Shared assets/scripts/styles:
  - `rebuild/assets/logo/sts-logo.svg`
  - `rebuild/scripts/consent-bootstrap.js`
  - `rebuild/scripts/consent.js`
  - `rebuild/styles/components.css`
- Updated rebuild pages:
  - `rebuild/index.html`
  - `rebuild/solutions/index.html`
  - `rebuild/pricing/index.html`
  - `rebuild/about/index.html`
  - `rebuild/contact/index.html`
  - `rebuild/faq/index.html`
  - `rebuild/impressum/index.html`
  - `rebuild/datenschutz/index.html`
  - `rebuild/agb/index.html`
  - `rebuild/cookies/index.html`

## Notes

- The working Formspark contact flow was left unchanged.
- The consent layer is custom and code-first, with no WordPress or plugin dependency.
