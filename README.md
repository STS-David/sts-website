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

## Working Rule
Do not treat WordPress/Elementor as the core design engine.
WordPress is the CMS/admin shell.
Code is the frontend source of truth.
