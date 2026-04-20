# STS Website Architecture

## Current Architecture
- WordPress host
- Elementor page container
- WPCode for asset injection
- custom CSS
- custom JS app layer
- hash-based pseudo-routing

## Current Weaknesses
- fragile first render
- SEO weakness from runtime injection
- WordPress + JS conflict risk
- difficult maintenance

## Target Architecture
A real multi-page coded site with:
- shared header
- shared footer
- shared design system
- shared animation layer
- real page routes
- preserved transition system

## Rendering Principle
Core public pages must not depend on dynamic runtime content injection for first load.

## WordPress Role
- CMS/admin shell
- legal/simple content if needed
- not the primary visual engine

