# Akritech

Dino Lozina's software engineering and consulting website. Built with Next.js and exported as a static site.

## Local development

```sh
npm ci
npm run dev -- -p 3001
```

Open http://localhost:3001.

## Build and verify

```sh
npm run build-types
npm run build
npm run export
```

The deployable static site is generated in `out/`. To preview that exact output:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

Open http://localhost:4173. The production site is hosted on Vercel through the connected GitHub repository. Local development does not publish changes.

## Editing

- `src/data/content.json`: work examples, services, biography, and contact details.
- `src/templates/Base.tsx`: page structure and short section headings.
- `src/styles/global.css`: layout, responsive styles, and brand colors.
- `public/assets/images/diagram-{workflow,voice,integration,platform}.webp`: detailed pixel-art technical schematics for the four work categories.
- `public/assets/images/coastal-horizon.webp`: decorative footer panorama.
- `public/assets/images/tidal-wave.webp`: transparent wave behind the headline.
- `public/assets/images/coastal-workshop.webp`: game-inspired coastal workshop hero artwork.
- `public/assets/images/logo.png`: unchanged original Akritech logo.

The design retains the original cyan, blue, and slate palette from `tailwind.config.js`. Darker blue is used for small text on light backgrounds. Navigation uses native section links, project outcomes are always visible, and contact links open an email client. Reduced-motion preferences are respected. All page headings and body copy use JetBrains Mono for readability. The pixel-art direction lives in the illustrations, not the lettering. Fonts are self-hosted in `public/assets/fonts`, with their OFL notices in `licenses/`.

Public work descriptions are anonymized. Keep employer/client names, internal identifiers, private links, and source career documents out of the public assets and site copy. The downloadable source CV is intentionally not included.

The template's visible promotional attribution and unused components have been removed. Its required MIT notice remains in `LICENSE`.

The coastal artwork shares the original hero’s blue-hour palette and warm lighting. The hero image is preserved unchanged. Technical diagrams and footer artwork are lazy-loaded. Diagrams have descriptive alt text; decorative artwork is excluded from the accessibility tree. The headline wave uses low opacity to preserve text contrast.
