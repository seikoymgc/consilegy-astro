# レビュー: B2B対象カテゴリの表示名変更（2026-11-25）

対象: `src/lib/crm-media.ts` の `B2B_CATEGORIES` の日英ラベルのみ。内部キー・各記事の付与範囲は対象外（変更なしと確認）。

## 結論

- Critical 未解決: 0
- Major 未解決: 0
- 公開可否: **公開可**

## 照合結果

| キー | 新ラベル（ja / en） | CrmCurrentEditions.astro | その他の根拠 | 判定 |
|---|---|---|---|---|
| standard | スタートアップ・中小企業 / Startups and small businesses | スタートアップ・中小企業向け / 同じ英語 | /crm/ の説明文「スタートアップ・中小企業（標準版）」 | 一致 |
| contractor | 受託開発・制作 / Development and production | 受託開発・制作版 / 同じ英語 | Header「受託開発・制作版」 | 一致 |
| services | コンサル・マーケティング支援 / Consulting and marketing agencies | 支援会社版 / 同じ英語 | /crm/ の説明文「コンサル・マーケティング支援」、/crm/services/ のリード「コンサルティング・マーケティング支援など」 | 一致（製品の対象業態の言い方） |
| reseller | 代理店 / SaaS resellers | 代理店版 / 同じ英語 | /crm/ の説明文「SaaS販売代理店」 | 一致 |

- 英語4件は CrmCurrentEditions の英語名と完全に一致する。
- README末尾（2026-11-25の代表補足の段）の4つの表示名・キーの順番は実装と一致する。
- daily-run 手順3のカッコ内の4つの表示名は実装と一致する。
- `src/content.config.ts` の enum（standard / contractor / services / reseller）は変更なし。表示側の `CrmMediaB2BCategories.astro` はキーで引くので、表示名を変えても参照は壊れない。

## Minor（対応は任意。公開判断には影響しない）

1. `reseller` の日本語「代理店」は、英語の「SaaS resellers」や /crm/ の「SaaS販売代理店」より範囲が広く読める。エディション一覧の「代理店版」と揃っているため、今回は許容とする。
2. README の同じ節の冒頭（343行）にある内部の呼び名（標準・請負・継続支援・販売代理）は、末尾の表示名と別物。末尾の段で「表示名」と明記しているので矛盾ではない。ただ、読み手が取り違えないよう、後で「内部の呼び名」と一言添える余地がある。

## 未確認

- ローカルでの `npm run build` と、記事ページ・一覧カードの描画は、このレビューでは実行していない（レビューの範囲は文字列の照合）。
