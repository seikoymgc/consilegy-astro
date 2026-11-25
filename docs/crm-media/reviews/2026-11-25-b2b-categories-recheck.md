# B2B記事の対象カテゴリ追加 修正の再確認（2026-11-25）

レビュー: Claude（独立レビュー。原稿・実装・CRMは編集していない）
元レビュー: `2026-11-25-b2b-categories.md`
範囲: 今回の修正箇所だけを実ファイルで照合した。全件レビューは繰り返していない。

## 結論

**公開可。Critical 0件、Major 0件（未解決）。** Minor は M-4・M-5 をREADMEの記録で留保（公開を止めない）。

| ID | 区分 | 結果 | 確認した実物 |
|---|---|---|---|
| M-1 | Major | 解決 | `monday-meetings-end-without-deciding-what-to-focus-on` 日英とも `b2b_categories: ["standard"]`（ja/en 12行目） |
| M-2 | Minor | 解決 | `contract-renewals-noticed-too-late` 日英とも `["standard", "contractor", "services", "reseller"]`（ja/en 11行目）。README 345行目に「保守契約の更新を既定で扱う請負も含める」と理由を記録 |
| M-3 | Minor | 対応不要（元レビューどおり） | なし |
| M-4 | Minor | 留保 | README 350行目に、標準版が既定であることと、今後は「標準版」「Revenue CRM」で書き分けることを記録。本文8本は未修正 |
| M-5 | Minor | 留保 | README 350行目に「請負・継続支援では『商談』が『案件』（Project / Engagement）」と記録。対象表示の近くの注記はなし |
| M-6 | Minor | 解決 | `CrmMediaB2BCategories.astro:7` が `<div class="b2b-categories">`。`global.css:560` の16px強制は `p, li, dd, dt, td, th, blockquote` だけが対象で `div` を含まないので、`.875rem`（14px）が効く。使っている2か所（`CrmMediaArticle.astro:63`、`CrmMediaCard.astro:12`）はどちらも親が `div`／`article` 側で、`p` の中に `div` が入る形にはなっていない |
| M-7 | Minor | 解決 | README 348行目に更新履歴との対応（b2b＝standard ほか）と、services はCRMの実装で別に照合することを記録。`content.config.ts:118` は「本リポジトリの docs/crm-media/README.md」に修正済み |

## 確認していないこと

- `npm run build` は実行していない（この環境にシェルがない）。最新main 8e0b269 取り込み後のビルド成功と、B2B 112ページの日英配列一致は Codex の検証結果で、こちらでは再実行していない。
- 14px表示はCSSの指定から判断した。ブラウザの実表示は見ていない。
- 本文の主張は変わっていないという前提で、本文は読み直していない（今回の変更はfrontmatterの配列、表示コンポーネント、README、config のコメントのみ）。
