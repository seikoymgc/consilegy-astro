# Migration scope

This document defines what is in scope for each phase of the WordPress → Astro migration for consilegy.com.

## Phase 1 (current)

**Goal:** Local Astro implementation for primary Japanese pages, buildable with `npm run build`, design aligned with the current Consilegy site.

**Included**

- Core layouts, global styles, SEO component, HubSpot form placeholder.
- Pages: `/`, `/services/`, seven service detail URLs under `/services/`, `/company/`, `/contact/`, `/case-studies/`, dynamic `/case-studies/[slug]/`, `/insights/`, `/privacy-policy/`, `/404`.
- Content Collections: `services`, `caseStudies` (seed content), `blog` (schema only, empty).
- Sitemap integration preparation (`@astrojs/sitemap`, `site` in config).
- `public/.htaccess`: security headers (deploy-time) and redirect `/cases/` → `/case-studies/`.
- `public/robots.txt`.

**Excluded (later phases)**

- English `/en/**` tree.
- All 26 blog posts, category and tag archives.
- `/download/`, `/free-consultation/`, `/simple_diagnos/`, `/ga4-utilization-check/`, `/about-revops/`, `/revenue-architecture/`, `/note/`, `/ir/`, `/ir/koukoku/`.
- Production deploy to CoreServer, DNS, or WordPress changes.

## Phase 2 (planned)

- Blog posts as Markdown in `blog` collection; optional category/tag routes.
- Additional static pages from exclusion list as needed.
- Real HubSpot portal and form IDs.

---

## ✅ Phase 1 + P2 URL generation completed — 2026-05-04

**達成内容:**

- 固定ページ全件（JA + EN）を Astro で生成。`[...slug].astro` スコープバグ修正済み。
- ブログ投稿 26件を `[category]/[postSlug].astro` + `en/others/[postSlug].astro` で生成。パーセントエンコード済みスラッグの `decodeURIComponent()` 対応済み。
- JA 導入事例 8件を `case-studies/[slug].astro` で生成。
- EN サービス詳細 `/en/services-en/revenue-architecture-design/` を services コレクション + 新ルート `en/services-en/[slug].astro` で生成（WARN-2 解消）。
- EN プライバシーポリシー `/en/privacy-policy/` を静的ページとして新設（WARN-1 解消）。
- `public/.htaccess` に P1 リダイレクト追加: `/en/27775-2/` → `/en/privacy-policy/`。
- **missing: 0** / **build: 73 pages / WARN なし**

**追加達成（Phase 3 P1）:**

- EN 導入事例 8件（`src/pages/en/case-studies/[slug].astro` 実装済み）→ `/en/case-studies/*` 全件生成

**未実装（Phase 3 残タスク）:**

- 画像ローカル化
- SEO meta / canonical / OGP
- デザイン調整
- カテゴリ・タグページ

詳細: `docs/current-build-status.md` / `docs/build-url-audit.md`

---

## Phase 3 (planned)

- ~~EN case-studies 8件のルート実装~~ ✅ 完了
- 画像ローカル化（WordPress ホスト画像を `public/` へ移行）
- SEO: title / description / canonical / OGP タグ整備
- デザイン調整（PC/SP レイアウト、タイポグラフィ）
- カテゴリページ（`/marketing/` 等の一覧ページ）
- タグページ：原則省略または noindex
- 本番デプロイ・DNS 切替（WordPress 削除は最後）

## Principles

- URLs match production paths where possible (`trailingSlash: 'always'`).
- No Gutenberg or WordPress runtime in the Astro codebase.
- Phase 2+ content should only require new MD/MDX files and optional new routes.

## Troubleshooting

**`LegacyContentConfigError` / “Found legacy content config file in src/content/config.ts”**

Astro 6 only uses **`src/content.config.ts`**. If **`src/content/config.ts`** (note the extra `/content/` directory) exists, delete it:

```bash
rm -f src/content/config.ts
```

Then restart `npm run dev`. The repo runs `scripts/assert-no-legacy-content-config.mjs` before `dev` / `build` to catch this early.
