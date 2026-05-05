# Header / Footer Spec

Generated: 2026-05-05  
Source: WordPress WP-CLI（wp_navigation posts / template parts）— HTMLスクレイピング不使用

---

## Active theme

`consilegy-theme`（カスタムブロックテーマ）  
従来の menu location は未使用。メニューは `wp_navigation` ポストタイプで管理。

---

## Logo

| 項目 | 値 | source |
|---|---|---|
| ヘッダーロゴ（カラー） | `public/images/common/consilegy-logo.svg` | WP attachment ID 27505 / `logo-1.svg` |
| フッターロゴ（白） | `public/images/common/consilegy-logo-white.svg` | フッターテンプレートパーツ埋め込み `logo-white.svg` |
| alt | `Consilegy` | |

---

## Header

### JA Header（wp_navigation ID: 539、class="menu-ja"）

| order | label | href |
|---|---|---|
| 1 | RevOps再設計 | /about-revops/ |
| 2 | サービス・料金 | /services/ |
| 3 | レベニューアーキテクチャ設計 | /revenue-architecture/ |
| 4 | 導入事例 | /case-studies/ |
| 5 | コラム | /insights/ |
| 6 | 会社情報 | /company/ |
| 7 | 資料ダウンロード | /download/ |
| CTA1 | お問い合わせ（outlined） | /contact/ ※WP原本は /download/ だがAstroは /contact/ |
| CTA2 | CRM / RevOps診断を依頼する（filled） | /free-consultation/ |
| lang | [pll_lang_buttons] → EN /en/ | テンプレートパーツ shortcode |

### EN Header（wp_navigation ID: 28347、class="menu-en"）

| order | label | href | 備考 |
|---|---|---|---|
| 1 | Services（ドロップダウン） | /en/services-en/ | |
| 1-1 | ∟ Japan Market GTM & Messaging | /en/services-en/japan-market-gtm-messaging/ | |
| 1-2 | ∟ Revenue Architecture Design | /en/services-en/revenue-architecture-design/ | |
| 1-3 | ∟ CRM / RevOps Implementation | /en/services-en/crm-revops-implementation/ | |
| 1-4 | ∟ HubSpot Implementation & Ops | /en/services-en/hubspot-implementation-operations-support/ | |
| 1-5 | ∟ Adoption & Growth Support | /en/services-en/adoption-growth-support/ | |
| 2 | Case Studies | /en/case-studies/ | Astro: `/en/case-studies/index.astro` を作成済み |
| 3 | About | /en/company-en/ | |
| CTA | Contact（filled） | /en/contact-en/ | |
| lang | [pll_lang_buttons] → JA / | テンプレートパーツ shortcode |

---

## Footer

フッターテンプレートパーツ（ID: 27524）  
3列構成: Services | Resources | Follow Us + bottom bar

### JA Footer

**Services（wp_navigation 28435）**

| label | href |
|---|---|
| レベニューアーキテクチャ設計 | /services/revenue-architecture-design/ |
| マーケティング戦略設計 | /services/marketing-strategy-design/ |
| MA / CRM / SFA設計・実装支援 | /services/revops-ma-crm-sfa-implementation/ |
| HubSpot導入・運用支援 | /services/hubspot-implementation-consulting/ |
| 運用定着・改善支援 | /services/operational-adoption-optimization/ |

**Resources（wp_navigation 27514）**

| label | href | 備考 |
|---|---|---|
| レベニューアーキテクチャとは | /revenue-architecture/ | |
| 事例紹介 | /case-studies/ | WP原本は /cases/（旧URL）→ Astroは /case-studies/ に修正 |
| 会社情報 | /company/ | |
| 無料相談について | /free-consultation/ | |
| お問い合わせ | /contact/ | |
| 資料ダウンロード | /download/ | |

**Follow Us（wp_navigation 27515）**

| label | href |
|---|---|
| LinkedIn | https://www.linkedin.com/company/consilegy |

**Bottom bar（テンプレートパーツ直書き）**

| 項目 | 値 |
|---|---|
| copyright | (c) 2025 Consilegy LLC. |
| Privacy Policy | /privacy-policy/ |

### EN Footer

**Services（wp_navigation 28445）**

| label | href |
|---|---|
| Japan Market GTM & Messaging | /en/services-en/japan-market-gtm-messaging/ |
| Revenue Architecture Design | /en/services-en/revenue-architecture-design/ |
| CRM / RevOps Implementation | /en/services-en/crm-revops-implementation/ |
| HubSpot Implementation & Ops | /en/services-en/hubspot-implementation-operations-support/ |
| Adoption & Growth Support | /en/services-en/adoption-growth-support/ |

**Resources（wp_navigation 28448）**

| label | href | 備考 |
|---|---|---|
| Case Studies | /en/case-studies/ | WP原本は /en/case-studies-en/（存在しない）→ 修正済み |
| About | /en/company-en/ | |
| Contact | /en/contact-en/ | |

**Follow Us** — JA と共通（LinkedIn）

**Bottom bar** — JA と共通  
Privacy Policy: `/en/privacy-policy/`

---

## 旧URLメモ

| 旧URL | 修正後 | 対応 |
|---|---|---|
| /cases/ | /case-studies/ | WP footer Resources JA に残存 → Astroでは修正 |
| /en/case-studies-en/ | /en/case-studies/ | WP footer Resources EN に残存 → Astroでは修正 |
| /en/services | /en/services-en/ | en.md Hero ボタン → 修正済み |
| /en/case-studies（旧） | /case-studies/ | en.md Hero ボタン → 修正済み |

---

## 未使用の旧Astraテーマメニュー（Polylang nav_menus）

| ID | name | 備考 |
|---|---|---|
| 116 | Footer Menu | empty（0件） |
| 118 | Primary Menu EN | GA4 U-Check, 言語 のみ |
| 142 | Primary Menu | 会社情報, Note, Recruit, GA4, 言語 |
| 77 | Sub Menu | Privacy Policy のみ |

これらは旧Astraテーマ用で、現在のブロックテーマでは**参照されていない**。
