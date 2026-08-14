# Y-RAMP brand assets

The approved Y symbol is the primary distinctive brand element. Do not redraw,
rotate, stretch, recolor, or alter its proportions. Always create future assets
from `master/yramp-y-mark-approved.png` or regenerate this export set from
`master/yramp-logo-approved.png`.

## Core presentation

- Tagline: `GROW WITH PASSION`
- Hero gray: `#141414` (`hsl(0 0% 8%)`), matching the website hero
- Preferred full logo: white wordmark, orange Y, green tagline
- Minimum clear space: at least 10% of the asset width/height

## Folders

- `master/`: protected approved source artwork and extracted Y master
- `transparent/`: full horizontal logo for flexible placement
- `hero-gray/`: full logo on the website hero gray
- `marks/`: standalone Y symbol for icons, avatars, and small formats
- `marketing/`: common social, cover, presentation, and campaign canvases

Run `scripts/generate_brand_assets.py` with the bundled Pillow runtime to
recreate every derivative without changing the approved master.
