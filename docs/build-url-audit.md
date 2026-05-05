# Build URL Audit

**最終更新**: 2026-05-04（EN case-studies 実装後）  
**対象ビルド**: `npm run build` 成功 — **81ページ生成** / WARN なし  
**監査ソース**: `docs/url-map.csv` (79 URL) × `dist/` 実出力

---

## サマリー

| 分類 | 件数 |
|---|---|
| **generated** （dist に index.html 生成済み） | **78** |
| **redirected** （.htaccess でリダイレクト定義、dist にも生成済み） | **1** |
| **phase3** | **0** ✅ |
| **missing** | **0** ✅ |
| **合計 (url-map.csv)** | **79** |

---

## 修正ログ

### P0修正（2026-05-04）: WARN-1 / WARN-2 解消

- `src/pages/en/privacy-policy.astro` 新設 → `/en/privacy-policy/` 生成
- `src/content/services/en-revenue-architecture-design.md` 新設、`src/pages/en/services-en/[slug].astro` 新設 → `/en/services-en/revenue-architecture-design/` 生成
- `src/content.config.ts` services スキーマに `lang` / `sourceUrl` 追加
- `src/pages/services/[slug].astro` に `lang !== 'en'` フィルタ追加

### Phase 3 P1 実装（2026-05-04）: EN case-studies 8件

- `src/pages/en/case-studies/[slug].astro` 新設
- `caseStudies` コレクションから `lang === 'en'` の 8件を取得
- URL slug は `sourceUrl` 末尾セグメントから導出（WP 元 URL を完全維持）
- JA ルート `src/pages/case-studies/[slug].astro` は変更なし（`lang === 'ja'` フィルタ済み）

---

## 固定ページ (pages) — 37件 / 全件 generated ✅

| URL | dist パス | 備考 |
|---|---|---|
| `https://consilegy.com/` | `/index.html` | ホーム |
| `https://consilegy.com/about-revops/` | `/about-revops/index.html` | |
| `https://consilegy.com/services/` | `/services/index.html` | |
| `https://consilegy.com/services/hubspot-implementation-consulting/` | `/services/hubspot-implementation-consulting/index.html` | |
| `https://consilegy.com/services/revops-ma-crm-sfa-implementation/` | `/services/revops-ma-crm-sfa-implementation/index.html` | |
| `https://consilegy.com/services/operational-adoption-optimization/` | `/services/operational-adoption-optimization/index.html` | |
| `https://consilegy.com/services/marketing-strategy-design/` | `/services/marketing-strategy-design/index.html` | |
| `https://consilegy.com/services/revenue-architecture-design/` | `/services/revenue-architecture-design/index.html` | JA |
| `https://consilegy.com/services/website-for-events/` | `/services/website-for-events/index.html` | |
| `https://consilegy.com/services/digital-nomad/` | `/services/digital-nomad/index.html` | |
| `https://consilegy.com/revenue-architecture/` | `/revenue-architecture/index.html` | |
| `https://consilegy.com/case-studies/` | `/case-studies/index.html` | |
| `https://consilegy.com/insights/` | `/insights/index.html` | |
| `https://consilegy.com/company/` | `/company/index.html` | |
| `https://consilegy.com/contact/` | `/contact/index.html` | |
| `https://consilegy.com/privacy-policy/` | `/privacy-policy/index.html` | JA |
| `https://consilegy.com/download/` | `/download/index.html` | |
| `https://consilegy.com/free-consultation/` | `/free-consultation/index.html` | |
| `https://consilegy.com/ga4-utilization-check/` | `/ga4-utilization-check/index.html` | |
| `https://consilegy.com/simple_diagnos/` | `/simple_diagnos/index.html` | |
| `https://consilegy.com/note/` | `/note/index.html` | |
| `https://consilegy.com/ir/` | `/ir/index.html` | |
| `https://consilegy.com/ir/koukoku/` | `/ir/koukoku/index.html` | |
| `https://consilegy.com/en/` | `/en/index.html` | EN トップ |
| `https://consilegy.com/en/company-en/` | `/en/company-en/index.html` | |
| `https://consilegy.com/en/contact-en/` | `/en/contact-en/index.html` | |
| `https://consilegy.com/en/services-en/` | `/en/services-en/index.html` | |
| `https://consilegy.com/en/services-en/adoption-growth-support/` | `/en/services-en/adoption-growth-support/index.html` | |
| `https://consilegy.com/en/services-en/hubspot-implementation-operations-support/` | `/en/services-en/hubspot-implementation-operations-support/index.html` | |
| `https://consilegy.com/en/services-en/crm-revops-implementation/` | `/en/services-en/crm-revops-implementation/index.html` | |
| `https://consilegy.com/en/services-en/event-website-development-package/` | `/en/services-en/event-website-development-package/index.html` | |
| `https://consilegy.com/en/services-en/assistance-in-attracting-digital-nomads-and-remote-worker/` | `/en/services-en/assistance-in-attracting-digital-nomads-and-remote-worker/index.html` | |
| `https://consilegy.com/en/services-en/japan-market-gtm-messaging/` | `/en/services-en/japan-market-gtm-messaging/index.html` | |
| `https://consilegy.com/en/services-en/revenue-architecture-design/` | `/en/services-en/revenue-architecture-design/index.html` | |
| `https://consilegy.com/en/ga4-utilization-assessment/` | `/en/ga4-utilization-assessment/index.html` | |
| `https://consilegy.com/en/ga4-utilization-checklist/` | `/en/ga4-utilization-checklist/index.html` | |

### redirected — 1件

| URL | dist | .htaccess | リダイレクト先 dist |
|---|---|---|---|
| `https://consilegy.com/en/27775-2/` | ✅ | → `/en/privacy-policy/` | ✅ |

---

## ブログ投稿 (posts) — 26件 / 全件 generated ✅

| カテゴリ | 件数 |
|---|---|
| `/marketing/` | 10 |
| `/marketing-strategy/` | 5 |
| `/analytics/` | 4 |
| `/project-management/` | 3 |
| `/others/`（日本語スラッグ） | 2 |
| `/my-opinion/` | 1 |
| `/en/others/` | 1 |
| **合計** | **26** |

---

## JA 導入事例 (case-studies) — 8件 / 全件 generated ✅

| URL | dist パス |
|---|---|
| `https://consilegy.com/case-studies/ec-subscription-ltv-data-architecture/` | `/case-studies/ec-subscription-ltv-data-architecture/index.html` |
| `https://consilegy.com/case-studies/japan-market-entry-gtm-architecture-2/` | `/case-studies/japan-market-entry-gtm-architecture-2/index.html` |
| `https://consilegy.com/case-studies/hubspot-cms-migration-marketing-operations/` | `/case-studies/hubspot-cms-migration-marketing-operations/index.html` |
| `https://consilegy.com/case-studies/marketing-data-integration-hubspot-migration/` | `/case-studies/marketing-data-integration-hubspot-migration/index.html` |
| `https://consilegy.com/case-studies/ga4-kpi-design-global-analytics/` | `/case-studies/ga4-kpi-design-global-analytics/index.html` |
| `https://consilegy.com/case-studies/ai-gtm-automation-product-integration/` | `/case-studies/ai-gtm-automation-product-integration/index.html` |
| `https://consilegy.com/case-studies/hubspot-sales-handoff-lead-to-revenue/` | `/case-studies/hubspot-sales-handoff-lead-to-revenue/index.html` |
| `https://consilegy.com/case-studies/healthcare-data-integration-ops-enablement/` | `/case-studies/healthcare-data-integration-ops-enablement/index.html` |

---

## EN 導入事例 (EN case-studies) — 8件 / 全件 generated ✅

| URL | dist パス |
|---|---|
| `https://consilegy.com/en/case-studies/building-a-self-operated-web-foundation-in-one-month-with-hubspot-cms/` | `/en/case-studies/building-a-self-operated-web-foundation-in-one-month-with-hubspot-cms/index.html` |
| `https://consilegy.com/en/case-studies/e-commerce-subscription-ltv-data-architecture/` | `/en/case-studies/e-commerce-subscription-ltv-data-architecture/index.html` |
| `https://consilegy.com/en/case-studies/ga4-kpi-design-global-analytics-2/` | `/en/case-studies/ga4-kpi-design-global-analytics-2/index.html` |
| `https://consilegy.com/en/case-studies/healthcare-data-integration-ops-enablement-2/` | `/en/case-studies/healthcare-data-integration-ops-enablement-2/index.html` |
| `https://consilegy.com/en/case-studies/https-consilegy-com-case-studies-ai-gtm-automation-product-integration/` | `/en/case-studies/https-consilegy-com-case-studies-ai-gtm-automation-product-integration/index.html` |
| `https://consilegy.com/en/case-studies/hubspot-sales-handoff-lead-to-revenue-2/` | `/en/case-studies/hubspot-sales-handoff-lead-to-revenue-2/index.html` |
| `https://consilegy.com/en/case-studies/japan-market-entry-gtm-architecture/` | `/en/case-studies/japan-market-entry-gtm-architecture/index.html` |
| `https://consilegy.com/en/case-studies/marketing-data-integration-hubspot-migration-2/` | `/en/case-studies/marketing-data-integration-hubspot-migration-2/index.html` |

---

## 残 Phase 3 実装候補

| 優先 | 項目 | 対応内容 |
|---|---|---|
| 🟡 P2 | 画像ローカル化 | WordPress ホスト画像を `public/` へ移行、markdown の img src 置換 |
| 🟡 P2 | SEO meta | title / description / canonical / OGP タグ確認・修正 |
| 🟢 P3 | デザイン調整 | PC/SP レイアウト、タイポグラフィ、色 |
| 🟢 P3 | カテゴリページ | `/marketing/` 等の記事一覧ページ |
| ⚪ P4 | タグページ | 原則省略または noindex |

---

## 生成ページ内訳（dist 実出力 81ページ）

| 種別 | 件数 |
|---|---|
| 固定ページ（JA） | 23 |
| 固定ページ（EN） | 14 |
| リダイレクト source（`/en/27775-2/`） | 1 |
| ブログ投稿 | 26 |
| JA 導入事例 | 8 |
| EN 導入事例 | 8 |
| EN 投稿 (`/en/others/`) | — （上記ブログ投稿に含む） |
| 404.html | 1 (dist/404.html) |
| **合計** | **81** |
