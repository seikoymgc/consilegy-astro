# Current Build Status

**基準点**: 2026-05-05（Phase E: WP固定ページ本文表示対応完了後）  
**ステータス**: ✅ URL migration + 画像ローカル化 + SEO meta 整備 + デザイン Phase A/B/C/D/E 完了 — generated: 88 / redirected: 1 / missing: 0 / broken-links: 0

---

## ビルドサマリー

| 項目 | 値 |
|---|---|
| build 日時 | 2026-05-05 |
| total pages built | **88** |
| generated | **87** |
| redirected | **1**（`/en/27775-2/` → `/en/privacy-policy/`） |
| phase3（未実装） | **0** ✅ |
| missing | **0** ✅ |
| WARN | なし |
| build コマンド | `rm -rf .astro dist && npm run build` |

---

## 生成済み URL 一覧（80 index.html）

### 固定ページ — JA（23件）

```
/
/about-revops
/company
/contact
/download
/free-consultation
/ga4-utilization-check
/insights
/ir
/ir/koukoku
/note
/privacy-policy
/revenue-architecture
/services
/services/digital-nomad
/services/hubspot-implementation-consulting
/services/marketing-strategy-design
/services/operational-adoption-optimization
/services/revenue-architecture-design
/services/revops-ma-crm-sfa-implementation
/services/website-for-events
/simple_diagnos
/case-studies
```

### 固定ページ — EN（14件）

```
/en
/en/case-studies
/en/company-en
/en/contact-en
/en/ga4-utilization-assessment
/en/ga4-utilization-checklist
/en/privacy-policy
/en/services-en
/en/services-en/adoption-growth-support
/en/services-en/assistance-in-attracting-digital-nomads-and-remote-worker
/en/services-en/crm-revops-implementation
/en/services-en/event-website-development-package
/en/services-en/hubspot-implementation-operations-support
/en/services-en/japan-market-gtm-messaging
/en/services-en/revenue-architecture-design
```

### リダイレクト source（1件）

```
/en/27775-2  ← .htaccess で /en/privacy-policy/ へ 301
```

### ブログ投稿（26件）

```
/analytics/how-to-resolve-the-search-console-error-item-id-is-missing
/analytics/microsoft-clarity-gtm
/analytics/microsoft-clarity-masking
/analytics/site-kit-by-google
/en/others/supercharge-b2b-sales-results-advanced-hubspot-techniques-and-abm-secrets
/marketing-strategy/btob企業が陥りがちな「上流戦略」の落とし穴3選
/marketing-strategy/data-driven-marketing-art
/marketing-strategy/ga4xhubspotxai
/marketing-strategy/hubspot-b2b-sales-advanced-abm-tips
/marketing-strategy/top-down-strategy-3-points
/marketing/ai-marketing-efficiency
/marketing/https-seikoyamaguchi-com-googleanalytics-datadriven-marketing
/marketing/hubspot-lead-workflow
/marketing/marketing-automation-tool
/marketing/marketing-target
/marketing/privacy-settings-for-google-adsence
/marketing/sales-force-pardot
/marketing/seo-to-geo-generative-engine-optimization
/marketing/upstream-marketing-strategy
/marketing/youtubeads-autoadblock-autoadskip
/my-opinion/ai-introduction-checklist-chatgpt-gemini
/others/【保存版】中小企業のためのhubspot完全ガイド｜無料
/others/【必読】hubspotが大企業のマーケティングdxを加速させ
/project-management/project-manegement-roles
/project-management/remote-project-management
/project-management/respond-to-project-issues
```

### JA 導入事例（8件）

```
/case-studies/ai-gtm-automation-product-integration
/case-studies/ec-subscription-ltv-data-architecture
/case-studies/ga4-kpi-design-global-analytics
/case-studies/healthcare-data-integration-ops-enablement
/case-studies/hubspot-cms-migration-marketing-operations
/case-studies/hubspot-sales-handoff-lead-to-revenue
/case-studies/japan-market-entry-gtm-architecture-2
/case-studies/marketing-data-integration-hubspot-migration
```

### カテゴリアーカイブ（6件）— 2026-05-05 追加

```
/analytics/
/marketing/
/marketing-strategy/
/my-opinion/
/others/
/project-management/
```

### EN 導入事例（8件）

```
/en/case-studies/building-a-self-operated-web-foundation-in-one-month-with-hubspot-cms
/en/case-studies/e-commerce-subscription-ltv-data-architecture
/en/case-studies/ga4-kpi-design-global-analytics-2
/en/case-studies/healthcare-data-integration-ops-enablement-2
/en/case-studies/https-consilegy-com-case-studies-ai-gtm-automation-product-integration
/en/case-studies/hubspot-sales-handoff-lead-to-revenue-2
/en/case-studies/japan-market-entry-gtm-architecture
/en/case-studies/marketing-data-integration-hubspot-migration-2
```

---

## リダイレクト（.htaccess）

| 元URL | 転送先 | dist 存在 | 方式 |
|---|---|---|---|
| `/cases/` | `/case-studies/` | ✅ | R=301 |
| `/en/27775-2/` | `/en/privacy-policy/` | ✅ | R=301 |

---

## 実装済みルートファイル

| ルートファイル | 対象URL | コレクション |
|---|---|---|
| `src/pages/index.astro` | `/` | — |
| `src/pages/services/index.astro` | `/services/` | — |
| `src/pages/services/[slug].astro` | `/services/*`（JA のみ） | services（lang=ja） |
| `src/pages/en/services-en/[slug].astro` | `/en/services-en/*`（EN のみ） | services（lang=en） |
| `src/pages/case-studies/[slug].astro` | `/case-studies/*`（JA のみ） | caseStudies（lang=ja） |
| `src/pages/en/case-studies/[slug].astro` | `/en/case-studies/*`（EN のみ） | caseStudies（lang=en） |
| `src/pages/[category]/index.astro` | `/{category}/`（6カテゴリのみ） | blog（カテゴリアーカイブ） |
| `src/pages/[category]/[postSlug].astro` | `/{category}/{slug}/` | blog（2セグメント） |
| `src/pages/en/others/[postSlug].astro` | `/en/others/{slug}/` | blog（EN 3セグメント） |
| `src/pages/en/privacy-policy.astro` | `/en/privacy-policy/` | —（静的） |
| `src/pages/[...slug].astro` | その他全ページ | pages（catch-all） |

---

## 画像ローカル化（2026-05-04 完了）

| 項目 | 値 |
|---|---|
| 抽出した画像URL数 | 370 |
| ダウンロード成功 | 370 |
| ダウンロード失敗 | 0 |
| 置換したファイル数 | 56 |
| 合計サイズ | 28 MB |
| 保存先 | `public/images/wp/YYYY/MM/filename.ext` |
| alt TODO | 33件（`docs/image-alt-todo.md`） |
| 参照ドキュメント | `docs/image-url-map.csv` / `docs/image-inventory.md` / `docs/image-download-errors.md` |

---

## Phase 3 残タスク

| # | タスク | 詳細 | 規模 | 状態 |
|---|---|---|---|---|
| 1 | ~~画像ローカル化~~ | ~~WP ホスト画像を `public/` へ移行~~ | ~~中~~ | ✅ 完了 |
| 2 | 画像 alt テキスト | `docs/image-alt-todo.md` の33件を記入 | 小 | 🔲 TODO（Phase C） |
| 3 | ~~SEO meta~~ | ~~title / description / canonical / OGP タグ確認・修正~~ | ~~中~~ | ✅ 完了 |
| 4 | ~~デザイン調整 Phase A~~ | ~~Header/Footer/Hero/CardGrid/index.astro 全面整備~~ | ~~中~~ | ✅ 完了（2026-05-05） |
| 5 | ~~デザイン調整 Phase B~~ | ~~ArticleLayout / contact / wp-content CSS / ブログルート整理~~ | ~~中~~ | ✅ 完了（2026-05-05） |
| 6 | ~~カテゴリページ~~ | ~~`/marketing/` 等の記事一覧ページ（6カテゴリ）~~ | ~~小~~ | ✅ 完了（2026-05-05） |
| 7 | タグページ | 原則省略または noindex | 小 | 🔲 TODO |
| 8 | 画像 alt テキスト | `docs/image-alt-todo.md` の33件を記入（最終画像確定後） | 小 | 🔲 TODO |
| 9 | OG 画像 | 記事・サービス・事例の個別 og:image 設定 | 中 | 🔲 TODO |

---

## 今やらないこと

- 本番デプロイ
- DNS 切替
- WordPress 削除
- CSS 大改修
- URL 変更
- `/insights/` へのブログ URL 統合
