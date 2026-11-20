# 2026-11-20 全件監査 batch-11 再レビュー（Claude Code CLI）

- レビュー担当: Claude Code CLI（原稿の執筆・修正をした Codex から独立）
- 入力: 初回指摘 `../audit-2026-11-20/batch-11-findings.json`、適用記録 `../audit-2026-11-20/batch-11-applied.json`、修正後の現在の原稿（12ページすべて読み直し）、`../audit-2026-11-20/public-evidence.md`（本バッチに関係する記載は見当たらず）
- 確認方法: 静的確認のみ（crm-run の実装・翻訳・デモ用の初期データを読解）。実機操作・ブラウザ・外部送信はしていない。記事・画像・既存レビュー文書は編集していない。commit/push はしていない。
- 初回レビューについて: CLI の終了出力は空だったが、Markdown（`2026-11-20-audit-batch-11.md`）と全12ページ分の JSON は完成していた。今回はその成果物と修正後の原稿を照合した。

## 結論

初回の Critical 0／Major 11／Minor 16 は、26件すべて提案どおりに適用されていて、置換後の文章も壊れていない（`customized: false`、現在の原稿で全件を確認）。未解決の Critical・Major は0件。Minor が5件残る（1件は初回 024 の注記の残り、4件のうち2件は初回で見落とした共有デモの件数断定）。**12ページとも公開継続可。**

## 修正済み（resolved_ids）

batch-11-001〜026 の全26件。

| ID | 記事 | 現在の原稿での確認 |
|---|---|---|
| 001 / 003 | line（日／英） | 「🔗 LINE紐付け」のコードを最初に送れば既存の行につながる、の一文が入った。`webhook/route.ts:144-172` と一致 |
| 002 / 005 | line（日／英） | 状態不明＝認証情報を確認、ページを読み込み直して開き直す。`health/route.ts:86-92`、`MockShell.tsx:80-86` と一致 |
| 004 | line（英） | 「A Staff member」。`html-en.ts:87` と一致 |
| 006 | monthly（英） | 「a messaging app widely used in Japan」。出典のない「大半のスクール」を削除 |
| 007 / 008 | homework（日／英） | 受講中の全生徒に一律、生徒ごとの設定なし、開始日から数える、を明記。`automation/run/route.ts:115-128` と一致。前後の文とつながっている |
| 009 / 010 | roster（日／英） | UTF-8 の一言が入った。`MockShell.tsx:1739-1744` と一致 |
| 011 / 012 | teachers（日） | 「☐ 講師」。本文と screens の両方。`school-terms.ts:16-18` と一致 |
| 013 / 026 | teachers（日／英） | 既存アカウントには仮パスワードが載らない旨。`invite/route.ts:47-56,86-93` と一致 |
| 014〜023, 025 | teachers（英） | 役割名 Staff／Office、☐ Teacher、ボタン Issue URL／Resend／Revoke、「Users」、監査ログの記述。`html-en.ts:20,24,86,87,107`、`school-terms.ts:9-14` と一致 |
| 024 | teachers（英） | screens の役割名は Staff／Office に直った。同じ注記で触れた残りのラベルは R003〜R005 として継続 |

初回の未確認事項の扱い:
- 英語画面の「🔗 LINE紐付け」: `html-en.ts` の EXTRA にも `i18n-data.ts` にも該当がなく、PATTERNS にも「紐付け」を訳す型がない（grep 確認）。日本語のまま表示されるので、英語版の「🔗 LINE紐付け (link LINE)」という書き方は正しい。**解消**。
- 監査ログの個別名の英語表示: 本文は「Member invited」（辞書で確認済み）だけを挙げる形に直したので、本文の事実としては**解消**。screens 側の残りは R005。
- 表紙の選択ロジック: 本文の事実には関わらない。表紙の画像そのものは初回で記事と矛盾しないことを確認済み。

## 継続する指摘・追加指摘（すべて Minor）

| ID | 記事 | 区分 | 内容 |
|---|---|---|---|
| R001 | teachers（日） | 追加・事実 | 「招待中の人が1人いて」。公開デモは誰でも書き込め、毎晩入れ直す（`demo-seed.ts:4-9`）ので、閲覧時点の件数は保証できない。見本があればそこで確認できる、という書き方にし、共有デモでボタンを押さないよう添える |
| R002 | teachers（英） | 追加・事実 | 「One invitation is pending there」。R001 と同じ |
| R003 | teachers（英） | 継続（024の残り）・校正 | screens の「ユーザー」→「"Users"」 |
| R004 | teachers（英） | 継続（024の残り）・校正 | screens のボタン名を Issue URL／Resend／Revoke に |
| R005 | teachers（英） | 継続（024の残り）・校正 | screens の監査ログを「Audit log: "Member invited" and the other invitation entries」に |

R001・R002 は初回レビューで見落としていた。デモの初期データに招待中1人があることはコードで確認できるので、事実の誤りではなく断定の強さの問題として Minor にした。

## 記事ごとの判定（3段階・6領域）

| 記事 | 言語 | ①事実 | ②編集 | ③校正 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|---|---|---|
| line-says-connected-but-nothing-comes-in | ja | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| line-says-connected-but-nothing-comes-in | en | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| monthly-reports-written-late-at-night | ja | 問題なし（変更なし、初回判定を継続） | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| monthly-reports-written-late-at-night | en | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-alumni-signups-still-use-the-old-price | ja | 問題なし（変更なし、初回判定を継続） | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-alumni-signups-still-use-the-old-price | en | 問題なし（変更なし、初回判定を継続） | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-homework-type-missing-from-line | ja | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-homework-type-missing-from-line | en | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-student-rosters-get-retyped-one-by-one | ja | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-student-rosters-get-retyped-one-by-one | en | 問題なし | 問題なし | 問題なし | 0 | 0 | 0 | 公開継続可 |
| new-teachers-share-the-owners-login | ja | Minor 1（R001） | 問題なし | 問題なし | 0 | 0 | 1 | 公開継続可 |
| new-teachers-share-the-owners-login | en | Minor 1（R002） | 問題なし | Minor 3（R003〜R005） | 0 | 0 | 4 | 公開継続可 |

補足:
- 修正で加えた文は、日英で事実が揃っている（001/003、002/005、007/008、009/010、013/026）。
- 修正後の日本語に、軽い重複が1か所ある（roster 日本語「…確かめてから進みます。確認して「取り込む」を押すと…」）。意味は通るので指摘には数えない。
- エムダッシュ、Excel、AI搭載、ノマド、ヶ月／カ月は、変更後の原稿にも出てこない。
- 修正した原稿には `updated: 2026-11-20` が入り、teachers の sources に `html-en.ts`・`school-terms.ts`・`page.tsx` が追加されている。いずれも根拠と一致する。

機械処理用: `../audit-2026-11-20/batch-11-recheck-findings.json`
