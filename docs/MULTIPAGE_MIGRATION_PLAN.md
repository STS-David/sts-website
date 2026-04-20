# STS Multipage Migration Plan

## Canonical Source
- `current-live/` remains the canonical visual and content reference during migration.
- `archive/legacy-modular/` is reference-only and must not re-enter the active path.

## Target Architecture
- Static multi-page HTML as the first coded baseline inside `rebuild/`
- Shared design tokens in `rebuild/styles/tokens.css`
- Shared base, layout, component, and utility layers in `rebuild/styles/`
- Shared enhancement scripts in `rebuild/scripts/`
- Real page files for:
  - home
  - solutions
  - pricing
  - about
  - contact
  - faq

This keeps first render page-native, while JS handles enhancement only.

## Page And Component Map
### Shared shell
- glass header
- glass footer
- transition overlay
- background glow field
- CTA styles
- cards
- section labels

### Shared behavior
- blue page transition overlay
- terminal hero animation
- FAQ accordion
- reveal-on-scroll
- booking link behavior
- glass hover glare

### Page map
- `rebuild/index.html`
  - hero
  - problem grid
  - process
  - industries summary
  - result grid
  - trust principles
  - FAQ preview
  - final CTA
- `rebuild/solutions/index.html`
  - solutions hero
  - solution cards
  - engagement CTA
- `rebuild/pricing/index.html`
  - pricing hero
  - price cards
  - pricing FAQ
  - CTA
- `rebuild/about/index.html`
  - about hero
  - what STS is / is not
  - founder block
  - CTA
- `rebuild/contact/index.html`
  - contact hero
  - process summary
  - form shell
  - CTA
- `rebuild/faq/index.html`
  - FAQ hero
  - full FAQ list

## Transition Strategy
- Use normal page navigation and real HTML files.
- Intercept internal nav clicks with JS.
- Show the blue blur overlay before navigation.
- Navigate after the overlay reaches full opacity.
- On page load, fade the overlay back out.
- If JS is unavailable, links still work as normal.

This preserves the STS blue transition feel without keeping SPA routing as the source of truth.

## Migration Sequence
1. Establish shared CSS tokens, layout primitives, and enhancement scripts in `rebuild/`.
2. Create static real pages for the six core routes using the canonical STS shell.
3. Port canonical content section-by-section from `current-live/js/app-live.js` into static page HTML.
4. Match transition, terminal, FAQ, and glass effects in the shared scripts.
5. Review visual parity against `current-live/`.
6. Only after parity is acceptable, promote the multipage build to become the active preview path.

## Safe Current Implementation Scope
- Build the shared multipage foundation in `rebuild/`
- Add the six core real pages
- Keep `current-live/` active and untouched as the canonical reference

