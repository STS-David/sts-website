# Mobile, Booking, And Pricing Pass

## What changed in contact mobile layout

- The shared `.contact-form-card` was narrowed slightly and centered so it no longer feels pushed to the right on phone widths.
- Internal card padding was reduced on mobile while keeping fields full width and touch-safe.
- The working Formspark submit pipeline was left untouched.

## How footer mobile layout was restructured

- The footer brand block now spans full width first on mobile.
- Below that, the footer shifts into a two-column structure:
  - left: `Navigation`
  - right: `Rechtliches`
- The lower copyright/meta row stays beneath both columns.
- The footer booking CTA was de-emphasized on mobile so it feels less like a large stacked block.

## Where the booking provider URL is centralized

- Shared booking source now lives in:
  - `scripts/booking.js`
  - `rebuild/scripts/booking.js`
- Central config object:
  - `BOOKING_CONFIG`
- Central access point:
  - `window.STSBooking`
- Future Cal.com migration should only replace `BOOKING_CONFIG.url` once the final event URL is available.

## Pricing card design strategy

- The pricing cards were rebuilt as a denser executive engagement system instead of generic stacked boxes.
- Each card now has:
  - step label
  - intro framing
  - dedicated price block
  - integrated `LOG` explanation panel
  - quieter support note
  - CTA inside the card rhythm
- The center package remains emphasized through structure, edge treatment, and depth instead of louder color.
- Side packages were restrained so the middle tier reads as the intentional core engagement.

## Remaining known mobile limitations

- Final visual tuning should still be checked on a real phone viewport, especially for the pricing card line breaks and footer balance with long legal link labels.
- The booking layer is provider-agnostic now, but the actual Cal.com URL still needs to be inserted in the centralized config when ready.
