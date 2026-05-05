# Astro page plan

Mapping from production URL structure to Astro files. **Trailing slashes** match WordPress (`trailingSlash: 'always'`).

## Phase 1 routes

| URL | File | Data source |
|-----|------|-------------|
| `/` | `src/pages/index.astro` | Static + components |
| `/services/` | `src/pages/services/index.astro` | `getCollection('services')` sorted by `order` |
| `/services/{slug}/` | `src/pages/services/[slug].astro` | `services` collection |
| `/company/` | `src/pages/company.astro` | Static |
| `/contact/` | `src/pages/contact.astro` | Static + `HubSpotForm` |
| `/case-studies/` | `src/pages/case-studies/index.astro` | `caseStudies` collection |
| `/case-studies/{slug}/` | `src/pages/case-studies/[slug].astro` | `caseStudies` + `ArticleLayout` |
| `/insights/` | `src/pages/insights/index.astro` | Static (hub for future `blog`) |
| `/privacy-policy/` | `src/pages/privacy-policy.astro` | Static |
| `/404` | `src/pages/404.astro` | Static (!entry for `404.html`) |

## Phase 2+ (file placeholders / collections only)

| URL | Planned file | Collection |
|-----|----------------|------------|
| `/blog/...` or category paths | TBD | `blog` |
| `/en/**` | `src/pages/en/...` | TBD |

## Content collections

Collection definitions live in **`src/content.config.ts`** (Astro 6 Content Layer).

| Collection ID | Directory | Purpose |
|---------------|-----------|---------|
| `services` | `src/content/services/` | Service detail pages |
| `caseStudies` | `src/content/case-studies/` | Case study entries |
| `blog` | `src/content/blog/` | Articles (no `.md` files yet; build may log a glob warning) |

## Components

- `BaseLayout`: `SEO`, `Header`, `Footer`, main slot.
- `ArticleLayout`: long-form body for case studies (and later blog).
- Shared: `Hero`, `Section`, `Card`, `CardGrid`, `CTA`, `HubSpotForm`, `SEO`.
