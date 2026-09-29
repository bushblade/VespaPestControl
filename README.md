# Vespa Pest Control

Modern rebuild of [vespasolutions.co.uk](https://www.vespasolutions.co.uk) — a marketing site for a pest control business in Halifax, West Yorkshire.

Built with **Astro 7**, **Tailwind CSS v4** and **TypeScript**, and deployed as a static site to **Netlify**.

## Stack

- **Astro 7** — static output, TypeScript strict mode
- **Tailwind CSS v4** via `@tailwindcss/vite` — theme tokens live in `src/styles/global.css`
- **Fonts** — self-hosted variable fonts (Inter, Sora) via `@fontsource-variable/*`
- **Content collections** — services, gallery and area coverage stored as JSON, validated with zod
- **Tooling** — pnpm, Biome (format + lint), `astro check` (types)

## Getting started

Requires Node 20+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

## Commands

| Task             | Command                        |
| ---------------- | ------------------------------ |
| Install          | `pnpm install`                 |
| Dev server       | `pnpm dev`                     |
| Production build | `pnpm build`                   |
| Preview build    | `pnpm preview`                 |
| Type-check       | `pnpm check`                   |
| Format           | `pnpm format`                  |
| Lint             | `pnpm lint`                    |
| Regenerate types | `pnpm astro sync`              |

Run `pnpm check`, `pnpm lint` and a production `pnpm build` before committing.

## Project layout

```
src/
  assets/              # Self-hosted images (downloaded from the Webflow CDN)
  components/          # Header, Footer, ServiceCard, ContactForm, Prose, LocalBusinessSchema
  content/             # Content collections: services/, gallery/, areas/ (JSON data)
  content.config.ts    # Collection schemas (zod)
  data/                # images.ts (import map), site.ts (contact/social constants)
  layouts/Layout.astro # Page shell: SEO head, header, footer
  lib/richText.ts      # Renders **bold** and [label](url) in prose
  pages/               # /, /about, /contactus, /contactus/thanks, /gallery, /area-coverage
  styles/global.css    # Tailwind v4 entry + theme tokens
public/                # favicon.svg, robots.txt, _redirects, og-image.png
netlify.toml           # Netlify build config
```

## Content editing

No markup changes are needed to update the site's content.

- **Services** — add or edit JSON in `src/content/services/*.json`. Keys: `title`, `imageKey` (must match a key in `src/data/images.ts`), `imageAlt`, `body` (array of paragraphs; supports `**bold**` and `[label](https://...)`).
- **Gallery** — `src/content/gallery/items.json`. Fields: `caption`, `imageKey`, `order`.
- **Areas** — `src/content/areas/coverage.json`. Fields: `group`, `towns`.

Site-wide constants (phone, email, address, social links, opening hours) live in `src/data/site.ts`.

### Images

Images are downloaded and self-hosted in `src/assets`. To add one:

1. Drop the file into `src/assets`.
2. Import it in `src/data/images.ts`.
3. Reference its key from content JSON.

`astro:assets` optimises them at build time.

## Routing and SEO

- Routes preserve the live site's paths: `/`, `/about`, `/contactus`, `/gallery`, `/area-coverage`.
- `public/_redirects` sends `/contact` and `/contact-us` to `/contactus` (301).
- `@astrojs/sitemap` emits `/sitemap-index.xml`; `robots.txt` references it.
- `Layout.astro` injects LocalBusiness JSON-LD (`PestControlService` schema) on every page.
- Per-page `title` and `description` are passed as props to `<Layout>` and set in each page's frontmatter.

## Contact form

`ContactForm.astro` is a **Netlify Form** (`name="contact"`, `data-netlify`, honeypot `bot-field`) that redirects to `/contactus/thanks` on submit. Submissions appear in the Netlify **Forms** dashboard and are emailed to the address configured there. The markup is present in the built HTML so Netlify detects it automatically.

## Deployment

Netlify builds with `pnpm build` and publishes `dist` (see `netlify.toml`).

The Webflow site stays live until the Netlify deployment is verified on all five routes, then DNS is flipped and Webflow cancelled. MX records must be preserved if email is on the domain.
