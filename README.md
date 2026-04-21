# STS Website

Code-first repository for the Simonic Tech Solutions website.

## Purpose
This repository is the source of truth for the STS website.

The goal is to move from the current WordPress + injected SPA-style speed-launch setup to a robust, reusable, real multi-page coded site while preserving the current visual identity, interaction quality, and transition system.

## Current Status
- Temporary live version exists in WordPress
- Visual system is validated
- Long-term direction is locked: code-first, multi-page, reusable system

## Repository Areas
- `docs/` -> project doctrine, architecture, visual rules, handover notes
- root route folders plus `styles/`, `scripts/`, and `assets/` -> authoritative live site
- `rebuild/` -> duplicated snapshot/reference copy, not the active edit target
- `current-live/` -> frozen earlier live-state reference
- `archive/` -> old experiments and retired states

## Active Frontend Path
- `index.html` is the active root entry shell
- root route folders such as `pricing/`, `about/`, `solutions/`, `contact/`, and `faq/` are the active pages
- `styles/` is the active shared styling layer
- `scripts/` is the active shared behavior layer

See `docs/ACTIVE_FRONTEND_PATH.md` for the current source-of-truth rule.

## Working Rule
Do not treat WordPress/Elementor as the core design engine.
WordPress is the CMS/admin shell.
Code is the frontend source of truth.

## Preview Deployment
- The repo root is the deployable static site bundle.
- Publish the root site structure as-is so routes like `solutions/`, `pricing/`, `contact/`, `faq/`, `impressum/`, `datenschutz/`, `agb/`, and `cookies/` continue to resolve via their own `index.html`.
- The Formspark contact form submits directly to its external endpoint and does not depend on localhost.
- The cookie consent system is first-party and works on static hosting without WordPress or plugin dependencies.
