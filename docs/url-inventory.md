# URL inventory (Consilegy.com)

Summary of public URLs discovered via WordPress REST API and Rank Math sitemaps (reference for migration). Counts reflect the inventory snapshot; verify on production before cutover.

## Summary

| Type | Count |
|------|------:|
| Published pages (`page`) | 37 |
| Published posts (`post`) | 26 |
| Published `case-studies` (CPT) | 16 |
| Categories | 12 |
| Tags | 19 |

## Sitemap gaps

These pages were published in REST but were missing from `page-sitemap.xml` at inventory time—ensure they are included in the Astro sitemap or Rank Math before hybrid hosting ends.

- `/about-revops/`
- `/insights/`
- `/privacy-policy/`
- `/ir/`
- `/ir/koukoku/`

## Nav / UX issues

- `/cases/` was linked from the theme but returned **404**; redirect to `/case-studies/` (see `docs/redirect-map.md`).

## Phase 1 Astro coverage

Phase 1 implements a subset of URLs; see `docs/migration-scope.md` and `docs/astro-page-plan.md`.

## Full URL tables (reference)

Use WordPress exports or live REST for authoritative lists:

- Pages: `GET /wp-json/wp/v2/pages?per_page=100&status=publish`
- Posts: `GET /wp-json/wp/v2/posts?per_page=100&status=publish`
- Case studies: `GET /wp-json/wp/v2/case-studies?per_page=100&status=publish`

Static Phase 1 targets align with these production paths:

| Path | Notes |
|------|--------|
| `/` | Home |
| `/services/` | Service hub |
| `/services/revenue-architecture-design/` | Service |
| `/services/hubspot-implementation-consulting/` | Service |
| `/services/marketing-strategy-design/` | Service |
| `/services/revops-ma-crm-sfa-implementation/` | Service |
| `/services/operational-adoption-optimization/` | Service |
| `/services/digital-nomad/` | Service |
| `/services/website-for-events/` | Service |
| `/company/` | Company |
| `/contact/` | Contact |
| `/case-studies/` | Case study index |
| `/case-studies/{slug}/` | Case study detail (seed slugs in content) |
| `/insights/` | Insights hub |
| `/privacy-policy/` | Privacy |

Blog posts, `/en/**`, and other paths are Phase 2+ unless listed in `migration-scope.md`.
