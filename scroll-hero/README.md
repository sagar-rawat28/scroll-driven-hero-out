# Scroll-Driven Hero Animation

Next.js 15 + React 19 + Tailwind CSS 3 + GSAP ScrollTrigger. Static export, ready for Netlify.

## Features
- Letter-by-letter headline reveal and staggered stat reveal with count-up on load
- Car entrance animation on a separate wrapper so it never fights the scroll transforms
- Pinned hero with a scrubbed GSAP timeline (y, scale, rotation, opacity only); reverses on scroll up
- `gsap.matchMedia` for mobile/desktop distances and `prefers-reduced-motion`
- Original SVG car artwork (no third-party assets)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build      # outputs static site to ./out
```

## Deploy to Netlify
**Drag and drop:** run `npm run build`, then drag the `out` folder onto https://app.netlify.com/drop.

**Git:** push this folder to GitHub, choose "Import from Git" in Netlify. `netlify.toml` already sets
build command `npm run build` and publish directory `out`.

## Structure
```
app/            layout, page, global styles
components/     Hero, Stat, Details
lib/            content data, useGSAP hook
public/         car.svg
```

## Notes
The statistics (95%, 80%, 100%) are illustrative design content, not verified claims.
