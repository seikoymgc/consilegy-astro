# Consilegy SEO 監査レポート

**監査日**: 2026-06-03  
**対象URL**: https://consilegy.com/  
**監査ツール**: claude-seo v2.0.0

---

## SEO ヘルススコア: 71 / 100

| カテゴリ | スコア | 重み |
|---------|--------|------|
| テクニカルSEO | 80/100 | 22% |
| コンテンツ品質 | 72/100 | 23% |
| オンページSEO | 75/100 | 20% |
| 構造化データ | 85/100 | 10% |
| パフォーマンス | 60/100 | 10% |
| AI/GEO対応 | 30/100 | 10% |
| 画像SEO | 95/100 | 5% |

---

## エグゼクティブサマリー

Consilegyのサイトは技術的基盤は堅固で、hreflang・canonical・構造化データが適切に実装されている。一方で、**AI検索（GEO）対応の欠如**、**OGイメージのSVG問題**、**サイトマップ内の旧コンテンツURL群**が優先課題。日英バイリンガル構成は正しく機能しているが、ENページの`areaServed: JP`設定がグローバルリーチを制限している可能性がある。

---

## 🔴 Critical（即対応）

### 1. OGイメージがSVG形式
- **問題**: `og:image` が `https://consilegy.com/images/og-default.svg`
- **影響**: LinkedIn・X(Twitter)・Slackなど多くのプラットフォームがSVGをOGP画像として非対応。シェア時に画像が表示されない。
- **対応**: 1200×630px のPNG/JPGに変換して差し替える

### 2. llms.txt が存在しない
- **問題**: `https://consilegy.com/llms.txt` → 404
- **影響**: ChatGPT・Perplexity・Claude等のAI検索エンジンへの情報提供ゼロ。RevOps・HubSpot・日本GTMの専門家として認識されにくい。
- **対応**: `/public/llms.txt` を作成（後述のアクションプラン参照）

### 3. EN case-studyのスラッグにURLが混入
- **問題**: `https://consilegy.com/en/case-studies/https-consilegy-com-case-studies-ai-gtm-automation-product-integration/`
- **影響**: URLにhttps://が含まれるのは明らかな異常。クローラビリティと信頼性に影響。
- **対応**: スラッグを `ai-gtm-automation-product-integration` に修正し301リダイレクト設定

---

## 🟠 High（1週間以内）

### 4. サイトマップに旧コンテンツカテゴリが残存
- **問題**: sitemap-0.xml に以下の旧カテゴリが残っている:
  - `/marketing/`（10件以上）
  - `/marketing-strategy/`（5件）
  - `/project-management/`（4件）
  - `/my-opinion/`（1件）
  - `/ir/`、`/note/`
- **影響**: サイトのトピカルオーソリティが分散。RevOps・CRM専門サイトとしてのE-E-A-Tシグナルが弱まる。
- **対応**: 旧コンテンツを `/insights/` 配下に統合するか、noindex設定＋サイトマップから除外

### 5. サイトマップに `lastmod`・`changefreq` なし
- **問題**: sitemap-0.xml のすべてのURLに `<lastmod>` タグが未設定
- **影響**: Googlebotの再クロール優先度判断に使われる情報が欠如
- **対応**: Astro sitemap integration の設定で `lastmod` を自動出力する

### 6. JA ホームページのメタディスクリプションが短い
- **現状**: 98文字（最適は120〜155文字）
- **現テキスト**: 「Salesforce・HubSpot・Kintone・Marketoなど複数ツールが混在する収益オペレーションを、ベンダーフリーの立場から再設計します。RevOps・マルチCRM再設計・伴走支援。」
- **改善案**: 競合差別化・対象顧客・CTA要素を加えて120〜140文字に拡張

### 7. Organization スキーマの `areaServed` が JP 限定（ENページも同様）
- **問題**: `"areaServed": ["JP"]` がJA・ENページ共通で設定されている
- **影響**: ENページはAPAC・グローバルを対象読者としているにも関わらず、Googleが日本限定サービスと判断する可能性
- **対応**: ENページのスキーマは `"areaServed": ["JP", "SG", "AU", "US"]` 等に変更

### 8. Insightページ（JA・EN）のH1が極めて薄い
- **JA**: H1 = 「コラム」のみ
- **EN**: H1 = 「Insights」のみ
- **影響**: ページの主題をGoogleに伝えるシグナルが弱い
- **対応例**: 「RevOps・CRM・KPIに関する実践コラム | Consilegy」など説明的なH1へ変更

---

## 🟡 Medium（1ヶ月以内）

### 9. Breadcrumb スキーマが未実装
- **問題**: 記事・サービス個別ページにBreadcrumbListスキーマがない
- **影響**: 検索結果にパンくずリストが表示されない（CTR向上機会損失）
- **対応**: 各ページに `BreadcrumbList` JSON-LDを追加

### 10. Article スキーマが Insights 記事に未実装
- **問題**: `/insights/` 配下の記事ページに `Article` or `BlogPosting` スキーマがない
- **影響**: リッチリザルト（公開日・著者表示）が出ない
- **対応**: 記事ページに `Article` スキーマ（author・datePublished・dateModified含む）を追加

### 11. FAQPage スキーマの活用余地
- **問題**: サービスページにFAQ的コンテンツがあるが`FAQPage`スキーマ未実装
- **対応**: `/services/` 配下でFAQセクションに `FAQPage` スキーマを追加

### 12. robots.txt が `Allow: /` のみ（ディレクティブが最小限）
- **現状**: `User-agent: * / Allow: /` のみ
- **機会**: AI クローラー（GPTBot・Applebot-Extended・PerplexityBot）への明示的な許可を追加し、GEO対応を強化

### 13. ENページの内部リンク密度
- **問題**: EN Insightsページの画像alt・img数（2件のみ）が極端に少なく、コンテンツ密度が低い可能性
- **対応**: EN記事一覧のカード構成確認、関連記事への内部リンク強化

---

## 🟢 Low（バックログ）

### 14. Twitter/X カードの `twitter:site` が未設定
- `<meta name="twitter:site">` にアカウントハンドルを追加するとリッチプレビューが改善

### 15. `<html>` の `lang` 属性がENページで `ja` になっている可能性
- ENページ `/en/` の `lang="ja"` → 要確認。確認コマンド: `curl -s https://consilegy.com/en/ | grep '<html'`

### 16. Favicon が SVG + ICO の二重定義
- SVG faviconは現代ブラウザ対応で問題ないが、サイズの最適化余地あり

---

## ✅ 良好な点

| 項目 | 状態 |
|------|------|
| Canonical タグ | 全主要ページで正しく設定 |
| hreflang（ja/en/x-default） | ホームページで正しく実装 |
| robots.txt | sitemap参照あり、クロール許可 |
| サイトマップ構造 | sitemap-index → sitemap-0.xml の正しい階層 |
| Organization + WebSite スキーマ | 全ページに実装済み |
| 全画像に alt 属性 | ホームページ・サービスページともに欠落なし |
| meta title 文字数 | JA 34文字、EN 65文字ともに適正範囲 |
| GTM 実装 | 正しく設定 |

---

## ページ別データ

| ページ | Title長 | Meta Desc長 | H1 | Schema数 |
|--------|---------|------------|-----|---------|
| JA ホーム | 34 | 98 | CRM・SFA・MAを、売上が見える収益基盤へ。 | 2 |
| EN ホーム | 65 | 166 | Your Japan team runs in Japanese... | 2 |
| JA Services | 16 | 86 | 主要CRMを横断し... | 2 |
| EN Services | 20 | 156 | Revenue operations for Japan... | 2 |
| JA Insights | 15 | 68 | コラム | 1 |
| EN Insights | 20 | 120 | Insights | 1 |

---

## AI/GEO対応スコア詳細（30/100）

| チェック項目 | 状態 |
|------------|------|
| llms.txt | ❌ 未実装 |
| AI クローラー明示許可 (robots.txt) | ❌ なし |
| 引用可能な構造（134-167語ブロック） | ⚠️ 一部のみ |
| 質問形式の見出し | ⚠️ ENは対応、JAは少ない |
| 著者・E-E-A-T シグナル | ✅ Founder情報あり |
| エンティティシグナル（HubSpot/Salesforce/RevOps） | ✅ 強い |

