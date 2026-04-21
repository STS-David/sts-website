# Mobile Header And Pricing Refinement

## Mobile header shell

- The fixed mobile header was narrowed to a deliberately framed floating width instead of reading as a near full-width slab.
- New target widths now govern the shell and dropdown together:
  - `<= 900px`: `min(calc(100vw - 1.6rem), 24rem)`
  - `<= 560px`: `min(calc(100vw - 1.2rem), 22.75rem)`
  - `<= 420px`: `min(calc(100vw - 1rem), 21.75rem)`
- Internal shell spacing was tightened:
  - smaller horizontal padding
  - smaller gap
  - slightly reduced brand footprint
  - slightly smaller burger control
- The dropdown panel now follows the same width logic and sits closer to the shell so it feels attached rather than like a second oversized slab.

## Pricing card refinement

- The card system was simplified instead of made louder.
- Changes made:
  - removed the extra inner pseudo-frame layer
  - reduced shadow heaviness
  - removed the featured vertical lift effect
  - tightened padding and spacing
  - replaced the nested `LOG` sub-panel with scannable bullets
  - split price display into a main amount and a quieter qualifier line
  - added a restrained `Kernangebot` chip on the middle card
- Mobile stacking was tightened so the cards no longer feel like oversized slabs crashing into each other.

## Still open

- A second micro-pass may still be useful for:
  - very narrow phone screenshots of the homepage hero under the fixed nav
  - exact line-break tuning inside the pricing bullets on the smallest widths
  - whether the cookie chip should become even smaller on very short mobile screens
