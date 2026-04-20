# Active Frontend Path

## Current Reality
- Active standalone entry: `index.html`
- Active runtime styling: `current-live/css/style.css`
- Active runtime behavior/content: `current-live/js/app-live.js`
- Live-state reference shell: `current-live/html-shell/homepage-shell.html`

## Repo Separation
### Current live runtime
- `index.html`
- `current-live/css/`
- `current-live/js/`
- `current-live/notes/`

Use this path for stabilization, GitHub Pages preview, and parity work.

### Legacy modular reference
- `archive/legacy-modular/`

Keep this as historical reference only. Do not route active preview logic through it.

### Future rebuild workspace
- `rebuild/components/`
- `rebuild/pages/`
- `rebuild/styles/`
- `rebuild/scripts/`

Use this for the later real multi-page rebuild after the extracted runtime is stable enough to port cleanly.

## Recommended Active Structure
```text
/
  index.html                    # active standalone shell
  current-live/
    css/
      style.css                 # active shell/design hardening
      styles.css                # compatibility alias for older references
    js/
      app-live.js               # active runtime
    notes/                      # live-state notes
    html-shell/                 # reference snapshot only
  docs/
    ACTIVE_FRONTEND_PATH.md     # active-path contract
  archive/
    legacy-modular/             # archived reference
  rebuild/                      # future coded multi-page workspace
```

## What Should Stay Active
- `index.html`
- `current-live/css/style.css`
- `current-live/js/app-live.js`
- `docs/`

## What Should Be Reference-Only
- `current-live/html-shell/`
- `archive/legacy-modular/`

## First Stabilization Changes
1. Fix the broken stylesheet reference from `index.html`.
2. Add a compatibility alias so older `styles.css` references do not silently fail.
3. Harden shell-level CSS for typography, CTA buttons, nav/footer glass surfaces, inputs, and reduced-motion behavior.
4. Remove the repeated fallback re-render cycle from `app-live.js` so first paint depends on the actual render path rather than timed retries.
5. Keep the current hash-router and SPA-like behavior for now.

