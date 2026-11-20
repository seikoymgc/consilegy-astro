# 2026-11-20 全件監査 batch-03 再レビュー（Claude Code CLI）

- 担当: 実際の Claude Code CLI。原稿の執筆者・修正者（Codex）から独立して確認した。記事・画像・CRM・既存レビューは編集していない。git 操作なし。
- 入力: 初回指摘 `audit-2026-11-20/batch-03-findings.json`（22件）、変更記録 `batch-03-applied.json`（22件すべて `customized: false` で適用）、補足 `public-evidence.md`。現在の12ページを全文読み直した。
- 確認方法: CRM `../crm-run` の実装を静的に読んだ。実機・ブラウザ・デモ環境は使っていない。コードで確定する仕様は確認済みとして扱った。
- 初回の CLI について: 初回の Markdown（`2026-11-20-audit-batch-03.md`）と JSON（12ページ分）は保存済みで、その内容を前提に再確認した。
- 判定の対応: 未解決の Critical・Major があれば「修正必須」、Minor だけなら「公開継続可」。

## 集計

| 記事 | 言語 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|
| customer-goals-get-lost-after-the-deal-closes | ja | 0 | 0 | 0 | 公開継続可 |
| customer-goals-get-lost-after-the-deal-closes | en | 0 | 0 | 0 | 公開継続可 |
| customer-list-stuck-in-excel | ja | 0 | 0 | 2 | 公開継続可 |
| customer-list-stuck-in-excel | en | 0 | 0 | 2 | 公開継続可 |
| customer-record-changed-but-nobody-knows-who | ja | 0 | 0 | 0 | 公開継続可 |
| customer-record-changed-but-nobody-knows-who | en | 0 | 0 | 0 | 公開継続可 |
| deal-reports-end-with-a-good-feeling | ja | 0 | 1 | 0 | 修正必須 |
| deal-reports-end-with-a-good-feeling | en | 0 | 1 | 0 | 修正必須 |
| deal-stages-dont-match-the-words-we-use | ja | 0 | 0 | 0 | 公開継続可 |
| deal-stages-dont-match-the-words-we-use | en | 0 | 0 | 0 | 公開継続可 |
| document-downloads-nobody-calls | ja | 0 | 0 | 0 | 公開継続可 |
| document-downloads-nobody-calls | en | 0 | 0 | 0 | 公開継続可 |
| 計 | | 0 | 2 | 4 | |

## 修正済み（解消を確認したID）

batch-03-001, 002, 003, 004, 005, 006, 007, 008, 010, 011, 012, 013, 014, 015, 016, 017, 018, 019, 020, 021, 022（21件）

- 001/003（受注→顧客の自動化）: 日英とも「初期設定では」と cs-01「受注確定・顧客化ワークフロー」（英語は Won & customer conversion）が入り、後続の「オンにしていなければ、コンタクト一覧で…」へ文がつながっている。根拠 `crm-run/src/lib/revops/deals.ts:126-160`、`catalog.ts:171`、`vercel.json:16-17`。解消。
- 002/004（「業務」欄・経営・サイドバー項目）: 解消。`app-sidebar.tsx:212-233`、`personas.ts:42,50`。
- 005/011（取り込み完了画面）: 本文は3つの一覧・行番号の数え方・スキップの件数とも現行と一致（`csv-import-dialog.tsx:416-433,471`、`lib/crm/csv-import.ts:27,187-200,386-397`）。本文の Critical は解消。frontmatter `screens` の「エラー詳細」／“Error details” だけ残るため、下の R003/R004（Minor）で継続。
- 006（会社名の照合）: 解消（`csv-import.ts:146-155`）。
- 007/013（重複照合）: 商談の重複スキップとゴミ箱の扱いが日英とも入った。解消（`csv-import.ts:367-372,387-397,493-501`）。
- 008（題名の Excel）: 「スプレッドシートの顧客リストから…」に変わった。解消。
- 010/015（デモの選択肢名）: 「B2B」（法人営業向け）に統一。解消（`lib/demo.ts:16`）。
- 012（英語の会社名照合）: 解消。ただし差し替え案に含めた “but nothing more” が、（株）などの同一視と食い違う。初回案の言い過ぎなので R005（Minor）で直す。
- 014/016（「システム」の出方）: 解消（`081_audit_trigger_org_purge.sql:78-86`）。
- 017（冒頭のステージ名と裸の CRM）: 解消。
- 018（要約の翻訳ボタン）: 解消（`call-detail.tsx:145`）。
- 019/020（言語ごとの名前）: 日英とも入り、既刊へのリンク先ファイルが存在する（`src/content/crm-media/{ja,en}/custom-deal-stages-stay-in-one-language.md`）。解消。
- 021/022（本文画像の時点）: キャプションに撮影時点を明記。解消。

## 継続する指摘

- **batch-03-009 → R006（Minor, needs-confirmation）**: 本文の裸の「CRM」と「Excel」は15行目の書き出しだけ直り、残りはそのまま。題名が「スプレッドシート」になった一方で本文は「Excel」のままなので、表記がそろっていない。差し替え案は22行目を示す。範囲（Excel固有の操作説明を「Excelなら」と残すか）は引き続き代表判断。
- **005/011 の frontmatter 部分 → R003/R004（Minor）**: `screens` に「エラー詳細」／“Error details” が残る。`screens` はサイトでは描画されない（`src/content.config.ts:133` のスキーマだけ、ページ側で参照なし）ので公開面の誤りではないが、後続レビューの照合元として古い。

## 追加指摘

- **R001/R002（Major）deal-reports-end-with-a-good-feeling（日英）**: 「サイドバーの「コール」に分析済みのコールが4件入った状態」／“already holds four analyzed calls”。デモの種データはコールが空のときに商談上位4件分を入れるだけで（`crm-run/src/lib/demo/extras.ts:351-394`、`isEmpty('call_sessions')` と `openDeals.slice(0, 4)`）、共有デモでは訪問者が「新規コール」で追加でき、記事自身も「貼ったコールは他の人にも見え、消せません」と書いている。現在の件数はコードで保証できないため、件数の断定を外す。初回に見落とした点。
- **R005（Minor）customer-list-stuck-in-excel（英語）**: 上記012の “but nothing more” の言い過ぎ。

## 初回の未確認事項の扱い

- 資料DL: 「下書きを送らないと通知が届かない」→ 解消。通知の対象は run の stage が call/review/followup のタスクだけで、メール承認待ち（email）は対象外（`crm-run/src/lib/sales-action-alerts.ts:32`）。
- 資料DL: 返信・カレンダー同期での自動停止 → 本文は画面の説明（`sales-playbooks-view.tsx:59-60`）と同じ範囲の記述で、断定は画面表示に沿う。継続する未確認には残さない。
- コール: 編集・削除の経路 → 解消。`call_sessions` の更新は分析結果と要約の自動書き込みだけで、削除するコードは無い（`api/calls/analyze/route.ts:107`、`lib/revops/sales-ai.ts:93`）。
- CSV: 燃料はプリペイドだけ → 解消。`chargeWork` は「定額プランでは何もしない」（`crm-run/src/lib/work-fuel.ts:144-160`）。
- CSV: Excel の置き換え範囲 → 代表判断として未確認のまま（R006）。
- 成功プラン: 実機表示が未確認 → コードで確定する仕様なので未確認から外した。

## ①事実検証・②編集・③校正（変更箇所の読み直し）

- 事実: 上の解消・継続・追加のとおり。それ以外の記述は初回の確認から変わっていない。
- 編集: 差し替えで段落が長くなった箇所（成功プラン記事の最後の注意、CSV記事の重複の段落）は、手順の順番が保たれ、論理の飛躍はない。
- 校正: エムダッシュ・「AI搭載」「ノマド」「ヶ月」なし。日英の事実差なし（英語の “but nothing more” を直せば日本語版と一致）。機械適用で文が壊れた箇所はない。成功プラン記事の「オンにしていなければ、コンタクト一覧で…」は文としてつながっている。

## 次の作業（Codex 向け）

1. R001/R002 を直す（デモのコール件数の断定を外す）。これで deal-reports が公開条件を満たす。
2. Minor（R003〜R006）は任意。R006 は代表判断のあとに。
3. 修正後、Claude で再確認する。
