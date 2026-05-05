# Design Redesign Plan

Generated: 2026-05-04

---

## 現状の問題点

### P0 — バグ・誤表記（即修正）

| # | 場所 | 問題 | 修正 |
|---|---|---|---|
| 1 | Footer | 「Consilegy**株式会社**」→ 合同会社 | `合同会社` に変更 |
| 2 | Footer | copyright「Consilegy **Inc.**」→ LLC | `Consilegy LLC` に変更 |
| 3 | index.astro | Phase 1 / Phase 2 プレースホルダーテキストが残存 | 削除 |
| 4 | index.astro | Hero が外部 Unsplash URL を直参照 | ローカル背景に置換 |

### P1 — 構造的な UX 問題

| # | 場所 | 問題 |
|---|---|---|
| 5 | index.astro | 「支援領域」「サービス一覧（抜粋）」が内容ほぼ同じで2セクション並列 → 1セクションに統合 |
| 6 | index.astro | 「コラム」セクションが「Phase 2 で追加予定」という空のスタブ → 実ブログ記事カードに差し替え |
| 7 | Header | SP でロゴ+ナビが縦積みになりヘッダーが高くなりすぎる（ハンバーガーなし） |
| 8 | CardGrid | ブレークポイントが 960px で 3列→1列に一気に落ちる（中間 2列がない） |
| 9 | global.css | `font-weight: 750` を多用（非標準値、ブラウザ実装依存） |

### P2 — デザイン品質

| # | 場所 | 問題 |
|---|---|---|
| 10 | Hero | 背景・ビジュアルがなく白地のみで間が抜ける |
| 11 | Section | `section--subtle` の `border-block` が連続すると二重ボーダーになる |
| 12 | Card | `詳しく見る` のリンク文字が日本語ハードコード（ENページでも同じ文言） |
| 13 | ArticleLayout | 記事本文の `max-width` が prose だが、WP由来の HTML は全幅テーブル等が崩れる |
| 14 | 全体 | フォントは system-ui のみ。日本語とラテン文字の混植に調整が必要 |

### P3 — 後回しでよい

| # | 場所 | 問題 |
|---|---|---|
| 15 | 全体 | ダークモード未対応 |
| 16 | Header | EN ページで EN ナビを出す切替がない |
| 17 | 画像 alt | リニューアル画像確定後に対応（現在 TODO として保留） |

---

## デザイン方向性

**ブランドカラー維持**：  
`--color-primary: #1e40af`（深青）/ `--color-accent-purple: #987ad6`（紫）をベースに、白地 + グレーのコントラストで読みやすさを確保。

**テイスト**：  
モダン B2B コンサルティング。過剰な装飾なし、タイポグラフィと余白で情報密度をコントロール。

**フォント戦略**：  
英数は `Inter` or `system-ui`。日本語は `Noto Sans JP` を Google Fonts から追加するか、system-ui で対応。今フェーズは system-ui のまま。

---

## 実装フェーズ

### Phase A（今すぐ）— P0 + P1 対応

1. **Footer** 法人格修正
2. **global.css** `font-weight: 750` → `700` / `800` に標準化、`--shadow-md` 追加
3. **Header** SP ハンバーガーメニュー実装（JS、ネイティブ `<details>` または checkbox hack）
4. **CardGrid** 2列中間ブレークポイント追加（960px で 2列、640px で 1列）
5. **index.astro** 全面クリーンアップ：
   - Hero：ローカル SVG or CSS グラジエント背景に変更
   - 重複サービスセクションを1本に統合
   - コラム: 実ブログ記事（最新3件）カードに差し替え
   - Phase プレースホルダーテキスト除去

### Phase B（次）— P2 対応

6. **サービス一覧** `/services/` レイアウト改善
7. **サービス詳細** ページのビジュアル整備
8. **事例一覧** `/case-studies/` カードレイアウト
9. **事例詳細** ArticleLayout のヘッダービジュアル
10. **ブログ記事** prose スタイル、WP HTML クラスの対応

### Phase C（2026-05-05 完了）— SP確認・カテゴリページ

11. ✅ SP 全ページ確認（375/430/768/960/1024px）— CSS修正不要
12. ✅ カテゴリアーカイブページ実装（6カテゴリ、`src/pages/[category]/index.astro`）

### Phase D（後日）

13. 画像 alt テキスト入力（最終画像確定後）
14. アニメーション・トランジション
15. OG 画像 個別設定

---

## コンポーネント別ステータス

| コンポーネント | 現状 | Phase A 対応 | Phase B 対応 |
|---|---|---|---|
| `global.css` | font-weight 非標準、shadow 不足 | ✅ weight 標準化、shadow-md/lg 追加、color-token 整理 | ✅ `.wp-content` 包括スタイル追加（テーブル、コード、リンク、ノイズ除去） |
| `Header.astro` | SP 縦積み、ハンバーガーなし | ✅ ハンバーガー実装（JS、aria対応） | — |
| `Footer.astro` | 法人格誤記 | ✅ 合同会社 / LLC に修正 | — |
| `Hero.astro` | 外部画像依存、白地 | ✅ CSS ドットグリッド背景 + orb ビジュアル | — |
| `Section.astro` | border-block 二重問題 | ✅ margin-top: -1px で修正 | — |
| `Card.astro` | `詳しく見る` ハードコード | ✅ `moreLabel` prop 化、hover transform 追加 | — |
| `CardGrid.astro` | 中間ブレークポイントなし | ✅ 960px→2列、600px→1列 | — |
| `CTA.astro` | font-weight: 750 非標準 | ✅ 800 に修正 | — |
| `index.astro` | 重複セクション、スタブ残存 | ✅ 全面クリーンアップ（サービス全件表示、最新ブログ3件、Phase プレースホルダー除去） | — |
| `ArticleLayout.astro` | WP HTML 崩れリスク | — | ✅ 820px body、65ch wp-content、テーブルはみ出し対応、post-meta 集約 |
| `contact.astro` | プレースホルダーテキスト残存 | — | ✅ 実情報（info@consilegy.com）、2カラムレイアウト、HubSpot フォーム sticky |
| `[category]/[postSlug].astro` | `<style>` 重複 | — | ✅ post-meta スタイルを ArticleLayout に集約、重複 `<style>` ブロック削除 |
| `en/others/[postSlug].astro` | `<style>` 重複 | — | ✅ 同上 |
| `[category]/index.astro` | 未実装 | — | ✅ 6カテゴリアーカイブ実装（Phase C） |
