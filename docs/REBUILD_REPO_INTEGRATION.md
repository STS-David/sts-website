# Rebuild Repo Integration

## Final Rebuild Folder Structure

Active rebuild site structure currently lives inside `rebuild/`:

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

## What Was Added

The real coded multipage STS rebuild is already present in `rebuild/` and includes:

- homepage entry file
- real route folders for core pages
- shared styles
- shared scripts
- local logo SVG
- local favicon asset
- legal pages
- cookie consent runtime
- working Formspark contact integration

## Repo-Safe Path Status

Current path status is repo-safe for repository integration:

- page links are relative
- asset links are relative
- CSS and JS references are relative
- no local filesystem paths are embedded in the public rebuild files
- no localhost-only paths are embedded in the public rebuild files

Expected external service references still exist and are intentional:

- Formspark contact endpoint
- Microsoft booking URL

These are runtime integrations, not local path issues.

## Remaining Before Deployment

The rebuild is suitable for repository integration now, but a few items remain before any later deployment phase:

- remove leftover scaffold-only directories `rebuild/components/` and `rebuild/pages/` from versioned state if they are no longer needed
- run a final browser validation on the committed rebuild from repo context
- complete final deployment-specific metadata/path review when the actual hosting target is chosen

## Notes On Current Workspace

Two rebuild subtrees still appear as scaffold leftovers:

- `rebuild/components/`
- `rebuild/pages/`

They currently contain only `.gitkeep` placeholder files from the earlier scaffold, not active website code.

In this local OneDrive-backed workspace, those placeholder files are exposed as reparse-point items and did not delete cleanly during this integration pass. So the real finished site is already organized in `rebuild/`, but those scaffold placeholders may still need removal in a later cleanup step if they are tracked in git.
