# STS Website

Code-first rebuild repository for the Simonic Tech Solutions website.

## Purpose
This repository is the source of truth for the STS website rebuild.

The goal is to move from the current WordPress + injected SPA-style speed-launch setup to a robust, reusable, real multi-page coded site while preserving the current visual identity, interaction quality, and transition system.

## Current Status
- Temporary live version exists in WordPress
- Visual system is validated
- Long-term direction is locked: code-first, multi-page, reusable system

## Repository Areas
- `docs/` → project doctrine, architecture, visual rules, handover notes
- `current-live/` → frozen copy of the current working live state
- `rebuild/` → future proper build
- `archive/` → old experiments and retired states

## Active Frontend Path
- `index.html` is the current standalone and GitHub Pages entry shell
- `current-live/css/style.css` is the active shell styling layer
- `current-live/js/app-live.js` is the active SPA-like runtime/content layer
- `current-live/html-shell/` is reference material, not the active entry point

See `docs/ACTIVE_FRONTEND_PATH.md` for the current stabilization split.

## Working Rule
Do not treat WordPress/Elementor as the core design engine.
WordPress is the CMS/admin shell.
Code is the frontend source of truth.

## Preview Deployment
- `rebuild/` is prepared as a static multipage preview bundle.
- `rebuild/index.html` is the root entry file for external preview hosting.
- All page, asset, CSS, and JS references inside `rebuild/` use relative paths so the folder can be deployed outside localhost.
- For GitHub Pages preview, publish the contents of `rebuild/` as the site root on the preview branch or copy the folder contents into the published Pages directory.
- Keep the folder structure intact so routes like `solutions/`, `pricing/`, `contact/`, `faq/`, `impressum/`, `datenschutz/`, `agb/`, and `cookies/` continue to resolve via their own `index.html`.
- The Formspark contact form submits directly to its external endpoint and does not depend on localhost.
- The cookie consent system is first-party and works on static hosting without WordPress or plugin dependencies.

