# Consilegy SEO アクションプラン

**作成日**: 2026-06-03  
**全体スコア**: 71/100 → 目標 85/100

---

## 🔴 Critical（今すぐ対応）

### [ ] 1. OGイメージをSVG→PNG/JPGに変更

**ファイル**: すべてのレイアウト・ページファイル  
**作業**: `/public/images/og-default.png` (1200×630px) を作成し、`<meta property="og:image">` の参照先を変更

```html
<!-- 変更前 -->
<meta property="og:image" content="https://consilegy.com/images/og-default.svg">
<!-- 変更後 -->
<meta property="og:image" content="https://consilegy.com/images/og-default.png">
```

---

### [ ] 2. llms.txt を作成

**ファイル**: `/public/llms.txt`  
**作成内容**:

```
# Consilegy - Revenue Architecture & RevOps Consulting

> We help B2B companies and English-speaking leaders in Japan build revenue operations that work across CRM, SFA, and MA tools. Based in Tokyo.

## Services
- Revenue Architecture Design: Redesigning how marketing, sales, and CS connect to create measurable revenue flow
- CRM / RevOps Implementation: Multi-CRM (HubSpot, Salesforce, Kintone) implementation and redesign
- HubSpot Implementation & Operations Support
- B2B Marketing GTM Strategy Design
- Adoption & Growth Support

## Key Pages
- Homepage (JA): https://consilegy.com/
- Homepage (EN): https://consilegy.com/en/
- Services: https://consilegy.com/en/services/
- Insights: https://consilegy.com/en/insights/
- Case Studies: https://consilegy.com/en/case-studies/
- Contact: https://consilegy.com/en/contact/

## About
Consilegy LLC (合同会社) - Founded 2025 by Seiko Yamaguchi, Revenue Architect
Location: Minato-ku, Tokyo, Japan
Languages: Japanese, English
```

---

### [ ] 3. EN case-study スラッグ修正

**対象URL**: `/en/case-studies/https-consilegy-com-case-studies-ai-gtm-automation-product-integration/`  
**作業**:
1. ファイル名を `ai-gtm-automation-product-integration` にリネーム
2. astro.config.mjs または Cloudflare に301リダイレクト設定

---

## 🟠 High（1週間以内）

### [ ] 4. robots.txt にAIクローラー許可を追加

**ファイル**: `/public/robots.txt`

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://consilegy.com/sitemap-index.xml
```

---

### [ ] 5. サイトマップに lastmod を追加

**ファイル**: `astro.config.mjs`

```js
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://consilegy.com',
  integrations: [
    sitemap({
      lastmod: new Date(),
      // または各ページのfrontmatterから動的に設定
    })
  ],
});
```

---

### [ ] 6. JA ホームのメタディスクリプション拡張

**ファイル**: `src/pages/index.astro`（または該当レイアウト）  
**現状**: 98文字  
**改善案**（120〜140文字）:
```
Salesforce・HubSpot・Kintoneが混在する収益オペレーションを再設計。RevOps・Revenue Architecture設計から導入・定着まで、ベンダーフリーの立場で日本のBtoB企業を支援します。
```

---

### [ ] 7. Organization スキーマの areaServed をEN用に分離

**ENページのスキーマ**:
```json
"areaServed": ["JP", "SG", "AU", "HK", "US", "GB"]
```

---

### [ ] 8. InsightsページのH1を強化

**JA Insights** (`src/pages/insights/index.astro`):
```
RevOps・CRM・KPIに関する実践コラム
```

**EN Insights** (`src/pages/en/insights/index.astro`):
```
Insights on Japan RevOps, GTM, and Revenue Architecture
```

---

### [ ] 9. 旧コンテンツカテゴリの整理

**対象**: `/marketing/`・`/marketing-strategy/`・`/project-management/`・`/my-opinion/` 配下のページ

**選択肢**:
- A: `noindex` を追加してサイトマップから除外（最速）
- B: コンテンツを `/insights/` 配下に統合 + 301リダイレクト（推奨）

---

## 🟡 Medium（1ヶ月以内）

### [ ] 10. Breadcrumb スキーマを追加

すべての内部ページ（サービス・記事）に追加:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://consilegy.com/en/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://consilegy.com/en/services/"},
    {"@type": "ListItem", "position": 3, "name": "Revenue Architecture Design"}
  ]
}
```

---

### [ ] 11. Article スキーマを Insights 記事に追加

**対象**: `src/pages/insights/*/index.astro` および `src/pages/en/insights/*/index.astro`

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "記事タイトル",
  "author": {
    "@type": "Person",
    "name": "Seiko Yamaguchi",
    "url": "https://consilegy.com/company/"
  },
  "publisher": {"@id": "https://consilegy.com/#organization"},
  "datePublished": "2025-XX-XX",
  "dateModified": "2025-XX-XX"
}
```

---

### [ ] 12. ENページの `<html lang>` 確認

```bash
curl -s https://consilegy.com/en/ | grep '<html'
# lang="en" になっているか確認
```

---

### [ ] 13. Twitter card の `twitter:site` 追加

```html
<meta name="twitter:site" content="@consilegy">
```
（またはLinkedIn会社アカウントのハンドル）

---

## 優先度サマリー

```
Week 1:  OG画像変換、llms.txt作成、robots.txt更新、スラッグ修正
Week 2:  Insightsページ H1改善、areaServed修正、JA meta desc拡張
Month 1: Breadcrumb・Article スキーマ、旧コンテンツ整理、lastmod設定
```

**実施後の推定スコア**: 71 → 85+
- AI/GEO: 30 → 70（llms.txt + robots.txt だけで大幅改善）
- テクニカル: 80 → 88
- コンテンツ: 72 → 80
- 構造化データ: 85 → 92
