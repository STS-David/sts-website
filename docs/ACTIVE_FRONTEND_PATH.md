# Active Frontend Path

## Current Reality
- Authoritative deployable frontend: repo root multi-page site
- Authoritative entry files:
  - `/index.html`
  - `/about/index.html`
  - `/solutions/index.html`
  - `/pricing/index.html`
  - `/contact/index.html`
  - `/faq/index.html`
- Authoritative shared assets:
  - `/styles/`
  - `/scripts/`
  - `/assets/`

## Drift Status
- Root and `/rebuild` are not fully in sync.
- `index.html` is currently identical between both trees, but duplicated page and shared-style files have drifted.
- Confirmed drift exists in:
  - `/pricing/index.html` vs `/rebuild/pricing/index.html`
  - `/styles/components.css` vs `/rebuild/styles/components.css`
  - `/styles/layout.css` vs `/rebuild/styles/layout.css`

## Operational Rule
- Root is authoritative.
- `/rebuild` is no longer an active implementation target.
- Do not make parallel frontend edits in both trees.
- If `/rebuild` must be kept, regenerate or resync it from root intentionally after root changes are complete.

## Path Roles
### Authoritative live code
- `/index.html`
- route folders at repo root
- `/styles/`
- `/scripts/`
- `/assets/`

Use this path for stabilization, preview validation, and deployment work.

### Reference-only legacy copies
- `/rebuild/`
- `/current-live/`
- `/archive/legacy-modular/`

These paths may still be useful for history or comparison, but they are not the active frontend source of truth.

## Maintenance Guardrail
Before editing frontend code, confirm the file lives in the root site tree.

If the same file exists under `/rebuild`, treat that duplicate as stale unless a deliberate resync task has been declared.
