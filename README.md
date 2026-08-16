# davikawasaki.com

> Personal site and portfolio of Davi Kawasaki.

Built with [Astro](https://astro.build), Tailwind CSS and bilingual (EN/PT) content collections. Deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Structure

- `src/pages/` — routes for the default locale (English, no `/en` prefix)
- `src/pages/pt/` — mirrored Portuguese routes (`/pt/*`)
- `src/content/projects/{en,pt}/` — case-study content collection
- `src/content/blog/{en,pt}/` — blog content collection (MDX)
- `src/data/experience.ts` — résumé data (experience, education, certifications, skills)
- `src/i18n/` — translation dictionary and locale helpers
- `src/components/`, `src/layouts/` — UI building blocks

`RAW_SRC/` holds the historical 2017 and 2019 (GatsbyJS) versions of the site, kept for reference and not part of the current build.

## Development

```sh
npm install
npm run dev       # start local dev server
npm run build     # type-check + build to dist/
npm run preview   # preview the production build locally
```

Requires Node 22+ (see `.tool-versions` if you use [asdf](https://asdf-vm.com/)).

## Deployment

Hosted on Cloudflare Pages via its native GitHub integration: framework preset "Astro", build command `npm run build`, output directory `dist`. Every push builds automatically, with preview deployments for branches/PRs. The custom domain is attached directly in the Cloudflare Pages project settings.

## Adding content

- **New project/case study**: add a Markdown file under `src/content/projects/en/` and its `src/content/projects/pt/` counterpart, matching `slug` values.
- **New blog post**: add an `.md`/`.mdx` file under `src/content/blog/en/` (and `pt/` if translating), matching `slug` values.
