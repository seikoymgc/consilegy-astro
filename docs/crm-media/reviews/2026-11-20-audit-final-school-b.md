# 最終確認 final-school-b（2026-11-20）

- 担当: Claude Code CLI（Opus 5.5）。記事・画像・CRM・既存文書は変更していない。
- 確認方法: 静的確認のみ。現在の原稿4本、`audit-2026-11-20/final-school-b-changes.json`、`crm-run`（f8c3396）の実装を読んだ。実機操作や送信はしていない。
- CRMの差分 `crm-latest-environments.diff` は、dashboard のレイアウト、環境API、topbar、environment-switcher、`lib/environments`、migration 284 の7ファイルだけを変えている。スクール版の画面と翻訳（`src/school-app/**`、`src/app/api/school-app/**`）には触れていないため、以下の照合結果に影響はない。
- `editorial` に記録された customer-list と school-data の調整は、今回の対象4ファイルではない。判定はしていない。

## 結論

対象の4本に入った追加修正8件は、すべて正しく反映されている。文のつながりは壊れておらず、日英の事実も食い違わない。未解決の Critical・Major は0件、Minor も0件。4本とも **公開更新可**。

## 修正ごとの確認（①事実 → ②編集 → ③校正）

| ID | 記事 | 確認内容 |
|---|---|---|
| batch-13-R002 | signs-of-quitting-noticed-too-late | 50行目。チップの英訳 All / Active / Upcoming trials / Graduating / Homework overdue / Paused / Alumni / Withdrawn が、`html-en.ts:35,42,133,214` と一致。同じ段落の「Homework overdue 2」「Paused 1」とも揃い、初回で指摘した訳の食い違いは無くなった。 |
| batch-13-R001 | signs-of-quitting-noticed-too-late | 34行目「registered under Breaks」。`html-en.ts:21` で 休講期間→Breaks。 |
| batch-14-R001 | teachers-see-fee-amounts-too | 46行目「written to the Audit log as 権限変更」。権限変更はログに保存される文字列で（`permissions/route.ts:44`）、日本語のまま残すのが正しい。 |
| batch-14-R002 | teachers-see-fee-amounts-too | 8行目の frontmatter `screens`。Manager / Office / Staff、Viewer / Create / Edit、Payment Status、Audit log になった。`\"` のエスケープも崩れておらず、YAML として正しい形。本文34-40行目と合っている。 |
| batch-14-R003 | trial-form-not-connected-to-the-roster | 48行目「under Upcoming trials」。30・36行目と揃った。 |
| batch-14-R004 | unpaid-fees-noticed-at-month-end | 32行目「turns the row back to Unpaid」。 |
| batch-14-R005 | unpaid-fees-noticed-at-month-end | 40・42行目「Confirm payment」「Unpaid rows」。段落の区切りは保たれている。 |
| batch-14-R006 | unpaid-fees-noticed-at-month-end | 48行目「+ Add monthly fee」「Confirm payment」「Unpaid」。`html-en.ts:81` と一致し、30行目の案内とも揃った。 |

## 残っている記述（指摘はしない）

- unpaid-fees の英語版では、「入金済 (paid)」「停止 (stop)」が日本語のまま残る。これは訳が登録されていない画面表示を、そのまま引用したもの（30行目でそう注記している）。
- trial-form と unpaid-fees の英語版 frontmatter `screens` には日本語ラベルが残る。ただし事実として誤ってはおらず、メディアのページにも表示されない。今回の修正の対象でもない。

## 記事ごとの判定

| 記事 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|
| en/signs-of-quitting-noticed-too-late | 0 | 0 | 0 | 公開更新可 |
| en/teachers-see-fee-amounts-too | 0 | 0 | 0 | 公開更新可 |
| en/trial-form-not-connected-to-the-roster | 0 | 0 | 0 | 公開更新可 |
| en/unpaid-fees-noticed-at-month-end | 0 | 0 | 0 | 公開更新可 |
