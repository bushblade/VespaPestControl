# Vespa Pest Control — Astro Site

Modern rebuild of [vespasolutions.co.uk](https://www.vespasolutions.co.uk) in **Astro 7 + Tailwind v4 + TypeScript**, deployed to **Netlify** (static output).

## Stack & tooling

- **Astro 7** (static output, `output: 'static'`), TypeScript strict (`astro/tsconfigs/strict`)
- **Tailwind CSS v4** via `@tailwindcss/vite`; theme tokens live in `src/styles/global.css` (`@theme` blocks: `brand` greens, `wasp` amber, `charcoal`)
- **Fonts**: self-hosted variable fonts (`@fontsource-variable/inter`, `@fontsource-variable/sora`)
- **Package manager**: pnpm (`pnpm-workspace.yaml`; `esbuild`/`sharp` in `onlyBuiltDependencies`)
- **Formatting & linting**: **Biome** (`biome.json`). Type-check via `astro check` (`@astrojs/check`).

## Commands

| Task                | Command                |
| ------------------- | ---------------------- |
| Install             | `pnpm install`         |
| Dev server          | `pnpm dev`             |
| Production build    | `pnpm build`           |
| Preview build       | `pnpm preview`         |
| Type-check          | `pnpm check` (`astro check`) |
| Format              | `pnpm format` (`biome format --write .`) |
| Lint                | `pnpm lint` (`biome check .`) |
| Regenerate types    | `pnpm astro sync`      |

**After any code edit**, run `pnpm check` (`astro check`) and `pnpm lint` (`biome check .`), and fix anything they report before finishing. OpenCode V2 does not run language servers, so these commands are the source of type and lint diagnostics.

Run `astro check`, `biome check`, and a production `pnpm build` before committing.

## Project layout

```
src/
  assets/              # Self-hosted images (downloaded from Webflow CDN)
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

## Routing / SEO notes

- Routes preserve the live site's paths: `/`, `/about`, `/contactus`, `/gallery`, `/area-coverage`.
- `public/_redirects`: `/contact` and `/contact-us` → `/contactus` (301).
- `@astrojs/sitemap` emits `/sitemap-index.xml`; `robots.txt` references it.
- `Layout.astro` injects LocalBusiness JSON-LD (`PestControlService` schema) on every page.
- Per-page `title`/`description` are passed as props to `<Layout>`. Update them in the page frontmatter.

## Content editing (no markup changes needed)

- **Services**: add/edit JSON in `src/content/services/*.json`. Keys: `title`, `imageKey` (must match a key in `src/data/images.ts`), `imageAlt`, `body` (array of paragraphs; supports `**bold**` and `[label](https://...)`).
- **Gallery**: `src/content/gallery/items.json`. Fields: `caption`, `imageKey`, `order`, `linked`.
- **Areas**: `src/content/areas/coverage.json`. Fields: `group`, `towns`.

## Images

All images are downloaded and self-hosted in `src/assets`. Add a new asset by (1) dropping the file into `src/assets`, (2) importing it in `src/data/images.ts`, (3) referencing its key from content JSON. `astro:assets` optimises them at build.

## Contact form

`ContactForm.astro` is a **Netlify Form** (`name="contact"`, `data-netlify`, honeypot `bot-field`), redirecting to `/contactus/thanks` on submit. Submissions appear in the Netlify **Forms** dashboard and are emailed to the address configured there. The form markup is present in the built HTML so Netlify detects it automatically.

## Deployment

- Netlify: build command `pnpm build`, publish directory `dist` (see `netlify.toml`).
- Keep the Webflow site live until the Netlify deployment is verified on all five routes, then flip DNS and cancel Webflow. MX records must be preserved if email is on the domain.