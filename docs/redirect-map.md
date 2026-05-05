# Redirect map

Redirects for static hosting (Apache `.htaccess`). **Phase 1** implements only what is needed before the English site exists.

## Implemented in Phase 1 (`public/.htaccess`)

| Old path | New path | HTTP | Reason |
|----------|----------|------|--------|
| `/cases/` | `/case-studies/` | 301 | Legacy nav pointed to 404; matches production intent |

## Planned Phase 3 (not in Phase 1 `.htaccess`)

| Old URL | New URL | Notes |
|---------|---------|-------|
| `https://consilegy.com/en/27775-2/` | `https://consilegy.com/en/privacy-policy/` | English privacy URL cleanup; requires `/en/` implementation first |

## Planned / TBD (from URL inventory)

| Old URL | New URL | Notes |
|---------|---------|--------|
| Broken EN case study slug (`…/https-consilegy-com-case-studies-…`) | Canonical EN or JA case study URL | Fix slug after EN case pages exist |
| Optional author archives | Home or noindex | Already 301 to home in Rank Math |

Review this file when enabling the English Astro tree and when merging duplicate legal URLs.
