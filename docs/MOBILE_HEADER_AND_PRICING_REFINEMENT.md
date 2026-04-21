# Mobile Header And Pricing Refinement

## Mobile header shell

- The mobile header now uses tighter viewport padding so the shell no longer feels pushed to the right.
- The floating glass shell and mobile nav panel are constrained to a centered max width instead of stretching visually across the viewport.
- Internal header spacing was reduced on mobile:
  - smaller shell padding
  - tighter logo/text gap
  - slightly reduced logo footprint
  - slightly smaller burger button footprint
- The result is a more balanced floating header with cleaner left/right breathing room.

## Pricing card design changes

- The pricing grid now gives the center package slightly more structural weight on desktop without using loud visual tricks.
- Cards were rebuilt as denser premium modules:
  - subtle top rule
  - quieter inner frame
  - tighter head hierarchy
  - stronger price block
  - more integrated `LOG` panel
  - calmer support note
  - CTA aligned as part of the card composition
- The center card remains emphasized through proportion, depth, and hierarchy instead of louder color.
- Mobile cards were tightened further so stacked cards feel more compact and less like oversized boxes.

## Still open

- Final browser/device verification is still recommended for:
  - very narrow phone widths
  - long price line wrapping
  - brand-name balance in the smallest mobile header state
- No contact, cookie, routing, or booking behavior was changed beyond visual layout and the already-centralized booking abstraction.
