# batch-14 再レビュー（2026-11-20）

- レビュー担当: Claude Code CLI（Opus 5.5）。記事は編集していない。
- 照合したもの: 現在の原稿12本（変更8本は全文を読み直し）、`audit-2026-11-20/batch-14-applied.json`（23件すべて `customized: false`、提案どおりの適用）、初回 `batch-14-findings.json`、`../crm-run` の実装。`public-evidence.md` に batch-14 の対象記事に関する記載はなかった。
- 確認方法: 静的確認のみ（コードと原稿の読解）。実際の画面では試していない。
- 3工程（①事実検証 → ②編集 → ③校正）と6領域で、各記事を見直した。

## 結論

- 初回の Critical 6件・Major 3件・Minor 14件は、すべて本文から解消した。
- 新しく見つかった、または残っているのは Minor 6件だけ。英語版で、ラベルを英語に直しきれていない箇所が5件、表に出ない frontmatter の誤りが1件。どれも公開を止める理由にならない。
- 12本すべて **公開継続可**。未解決の Critical・Major は0件。

## 解消を確認したID

| ID | 記事 | 重大度 | 確認内容 |
|---|---|---|---|
| batch-14-001 | teachers-notice（ja） | Minor | 39行目。「担当ぶん」が届く相手（生徒の担当×種別の担当、生徒に担当がいなければ種別の担当）と、設定の場所（カルテの講師欄、「種別ごとの担当」）が `notify.ts:61-70`・`render.ts:172,1077` と一致。 |
| batch-14-002 | teachers-see-fee（ja） | Critical | 34・36行目。チップは閲覧・作成・編集の3つ、削除の設定なし（`render.ts:2026-2030,2061`）。効く権限の範囲も `guardPerm` の全使用箇所と一致。文の流れも自然。 |
| batch-14-003 | teachers-see-fee（en） | Critical | 34-38行目。Manager / Office / Staff、Viewer・Create・Edit、削除なし、Office は請求の行を押せない。いずれも `html-en.ts:87`、`i18n-data.ts:91` と一致。 |
| batch-14-004 | teachers-see-fee（en） | Minor | 32行目 「under Permissions」。 |
| batch-14-005 | teachers-see-fee（en） | Minor | 40行目 「"Payment Status"」。 |
| batch-14-006 | trial-form（ja） | Critical | 32行目。初期設定ではどの役割でも変えられる（`provision.ts:38-41`、`student/status/route.ts:15`、`authz.ts:167-168`）。編集を外したときの影響と、エラーが出ないこと（`MockShell.tsx:1112-1121`）も正しい。 |
| batch-14-007 | trial-form（ja） | Critical | 40行目。見出しと説明文は固定、2つの質問は「カルテの項目名」に従う（`trial/page.tsx:10-15`、`TrialForm.tsx:70-80`）。リンク先の記事は台帳にある。 |
| batch-14-008, 009 | trial-form（ja） | Minor | 16・22行目 「スプレッドシート」。本文から「Excel」は消えた。 |
| batch-14-010 | trial-form（en） | Critical | 32行目。日本語版と同じ内容で、ラベルも英語表示（Active / ⚙ Change status / Permissions）。 |
| batch-14-011 | trial-form（en） | Critical | 40行目。Profile field names（`html-en.ts:151`）。 |
| batch-14-012 | trial-form（en） | Major | 30行目。Upcoming trials / Trial booked / 📝 Intake interview。日本語のまま残るのは公開フォームだけ、という説明も正しい。 |
| batch-14-013, 014, 015 | trial-form（en） | Minor | 26・36・48行目のうち、対象の箇所は英語ラベルになった。 |
| batch-14-016 | trial-lesson-notes（ja） | Minor | 28行目 「埋める方法は3つあります。」 |
| batch-14-017, 018, 019, 020 | trial-lesson-notes（en） | Major / Minor | 28-34・40・52行目。ボタン名は英語表示に揃い、日本語のままの完了表示には注記がある（`MockShell.tsx:1725`）。 |
| batch-14-021, 022, 023 | unpaid-fees（en） | Major / Minor | 30・32・36行目。+ Add monthly fee / Unpaid · due 10/27 / Confirm payment / Unpaid badge / Open billing。入金済・停止は訳が無く日本語のまま、という注記も正しい。 |

初回の「未確認」のうち本文の事実に関わる「既存スクールの権限表の値」は、本文が「初期設定では」と範囲を限っており、新しいスクールの初期値（provision）とデモで確かめられる。解消扱いとする。英語表示の実画面は、翻訳処理をコードで追えば確定する仕様なので、再び未確認には戻さない。

## 継続・追加の指摘（すべて Minor、公開は止めない）

| ID | 記事 | 内容 |
|---|---|---|
| batch-14-R001 | teachers-see-fee（en） | 46行目「監査ログ (Audit log) as 権限変更」。英語表示ではメニュー名は「Audit log」（`html-en.ts:24`）。ほかの箇所が英語ラベルに揃ったので、ここだけ日本語が先に来る。 |
| batch-14-R002 | teachers-see-fee（en） | frontmatter の `screens` に「Admin dept」「Member」「delete」が残る。初回 003 の注記どおり、直すのが望ましい。メディアのページでは `screens` は表示されない（`src/pages/crm/media` に参照なし）ので、読者への影響はない。 |
| batch-14-R003 | trial-form（en） | 48行目「See where it lands under 体験予定」。同じ記事の30・36行目は「Upcoming trials」になっている。 |
| batch-14-R004 | unpaid-fees（en） | 32行目「turns the row back to 未入金」。英語表示では「Unpaid」。 |
| batch-14-R005 | unpaid-fees（en） | 40・42行目の「入金確認」「未入金」が日本語のまま。30・32行目は Confirm payment / Unpaid になっている（初回 021・023 で推奨した残りの箇所）。 |
| batch-14-R006 | unpaid-fees（en） | 48行目「＋ 月謝を登録」「入金確認」「未入金」。読者が実際に押す手順なので、英語表示のラベルに揃える。 |

## 記事ごとの判定

| 記事 | 言語 | 変更 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|---|
| teachers-notice-homework-only-after-opening-the-system | ja | あり | 0 | 0 | 0 | 公開継続可 |
| teachers-notice-homework-only-after-opening-the-system | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| teachers-see-fee-amounts-too | ja | あり | 0 | 0 | 0 | 公開継続可 |
| teachers-see-fee-amounts-too | en | あり | 0 | 0 | 2 | 公開継続可 |
| trial-form-not-connected-to-the-roster | ja | あり | 0 | 0 | 0 | 公開継続可 |
| trial-form-not-connected-to-the-roster | en | あり | 0 | 0 | 1 | 公開継続可 |
| trial-lesson-notes-stay-in-the-teachers-head | ja | あり | 0 | 0 | 0 | 公開継続可 |
| trial-lesson-notes-stay-in-the-teachers-head | en | あり | 0 | 0 | 0 | 公開継続可 |
| unpaid-fees-noticed-at-month-end | ja | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| unpaid-fees-noticed-at-month-end | en | あり | 0 | 0 | 3 | 公開継続可 |
| zoom-display-name-keeps-records-off-the-student-profile | ja | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| zoom-display-name-keeps-records-off-the-student-profile | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |

## 編集・校正の確認

- 置き換えた段落は前後とつながっており、文が壊れた箇所はない。日英で事実の差もない。
- 機械的に適用したことで意味がずれた箇所はない。
- 新しい体験談・数字・実績は加わっていない。エムダッシュ・「Excel」・裸の「CRM」も無い。
- 日本語版 trial-form の frontmatter `sources` に、同じパスが2つの書き方（`school-app/...` と `src/school-app/...`）で重なっている。表に出ない項目なので、指摘には数えない。

## 未確認の範囲

- 静的確認のみ。英語表示は翻訳辞書と処理の順番から判定した。
- 表紙の SVG は、初回と同じく開いていない。
