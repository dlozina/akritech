# Akritech

Dino Lozina's software engineering and consulting website. Built with Next.js and exported as a static site.

## Local development

Use Node.js 24 LTS (also specified in `.nvmrc` and the Vercel runtime configuration).

```sh
npm ci
npm run dev -- -p 3001
```

Open http://localhost:3001.

## Build and verify

```sh
npm run check
npm run build
npm run test:seo
npm audit
```

The deployable static site is generated in `out/`. To preview that exact output:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

Open http://localhost:4173. Next.js creates the static export as part of `npm run build`; a separate export command is no longer needed. The production site is hosted on Vercel through the connected GitHub repository. Local development does not publish changes. GitHub Actions runs linting, type checks, a production build, SEO checks against the exported HTML, and a production dependency audit. The obsolete GitHub Pages deployment has been replaced by these checks.

## Search and sharing

- `src/layout/Meta.tsx` supplies a unique title and description, the canonical URL, indexing instructions, and Open Graph and Twitter sharing metadata.
- `src/utils/structuredData.ts` describes Akritech, Dino Lozina, and the website using linked JSON-LD entities. Keep these facts consistent with the visible public copy.
- `public/robots.txt` allows crawling and links to `public/sitemap.xml`. The sitemap contains the single real page; section anchors are not separate pages. Add future canonical pages when they exist.
- `public/assets/images/social-preview.jpg` is a JPEG encoding of the existing hero for social previews. The original hero asset is unchanged.
- Main content and metadata are present in the exported HTML. The hero has high fetch priority; lower illustrations retain lazy loading and explicit dimensions.
- The canonical host is `https://www.akritech.eu/`. Vercel already redirects the apex domain and HTTP traffic to it.

After deployment, submit `https://www.akritech.eu/sitemap.xml` in the owner's Google Search Console property and use URL Inspection to request recrawling. Search Console access is managed separately; deploying metadata does not submit the sitemap or guarantee a search ranking.

References: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization), and [Next.js static exports](https://nextjs.org/docs/pages/guides/static-exports).

## Dependency maintenance

Runtime packages and active tooling use stable releases, pinned in `package.json` and `package-lock.json`. TypeScript remains on 6.0.3 because the current TypeScript ESLint parser supports versions below 6.1; TypeScript 7 requires a compatible parser release before upgrading. Node types match the Node 24 deployment runtime. Removed starter dependencies are no longer required by the site. Run `npm outdated` and `npm audit` during maintenance, and verify major upgrades with `npm run build-prod` and desktop/mobile previews.

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
