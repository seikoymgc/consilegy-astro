# 公開済み記事の監査 batch-10 再レビュー（2026-11-20）

- レビュー担当: Claude Code CLI（Opus 5.5）。原稿の執筆者からは独立して確認し、記事には手を入れていない
- 確認したもの: 現在の原稿12ページ、`../audit-2026-11-20/batch-10-applied.json`（17件、すべて `customized: false`）、初回の `batch-10-findings.json`、`../crm-run` の一次実装
- `public-evidence.md` には batch-10 の項目が無い（該当キーワードの一致なし）。このバッチで削った未確認の主張も無い
- 確認方法: 静的確認だけで、実機・ブラウザ・認証は使っていない。記事・画像・CRM・既存のレビュー文書は編集していない。git の操作もしていない
- 機械処理用の記録: `../audit-2026-11-20/batch-10-recheck-findings.json`

## 結論

初回の17件（Critical 4、Major 5、Minor 8）は**すべて解消**した。新たに Minor 3件（英語版2ページ）が見つかった。未解決の Critical と Major は0件で、**12ページすべて公開を続けてよい**。

## 修正済みID（17件）

| ID | 記事 | 重大度 | 確認結果 |
|---|---|---|---|
| batch-10-001 | homework-marked-reviewed ja | Minor | 監査ログを開ける役割の注記が入った。前後の文との続きも自然 |
| batch-10-002 | homework-marked-reviewed en | Minor | "to the Operations, Manager and Office roles" が入った |
| batch-10-003 | homework-reminders ja | Critical | 「運営とマネージャーのホームにだけ出ます」に直った（`supabase.ts:379-389,494-500`） |
| batch-10-004 | homework-reminders ja | Major | 種別なしの提出の振り分け待ちと、3営業日後に催促が届く条件を書き分け、既刊へのリンクも付いた。リンク先の記事の説明と矛盾しない |
| batch-10-005 | homework-reminders ja | Minor | 「休講期間・祝日」に直った |
| batch-10-006 | homework-reminders en | Critical | 「Operations と Manager の Home にだけ出る」に直った |
| batch-10-007 | homework-reminders en | Major | ラベルの注記が、英語画面で実際に出る名前に合った。本文の括弧内の訳を揃える作業は残っている（R001・R002 として Minor に下げて記録） |
| batch-10-008 | homework-reminders en | Major | 根拠の無い市場の断定を削った |
| batch-10-009 | homework-reminders en | Major | 「返信は誰も読まない」を削り、実際の文面（`homework.ts:424`）に合わせた |
| batch-10-010 | homework-reminders en | Major | 種別なしの提出の扱いが日本語版と既刊に揃った |
| batch-10-011 | intake-fields en | Minor | 日本語版と同じ意味に直った |
| batch-10-012 | lesson-notes ja | Critical | 日本時間で保存される説明に直った（`lesson/route.ts:49`、`jst.ts:39-43`） |
| batch-10-013 | lesson-notes ja | Minor | 運営も登録できることが入った |
| batch-10-014 | lesson-notes en | Critical | Japan time に直った。UTC や朝9時の記述は本文に残っていない |
| batch-10-015 | lesson-notes en | Minor | Operations and Manager に直った |
| batch-10-016 | lesson-notes en | Minor | 英語画面ではほぼ全ラベルが英語になる、という説明に直った |
| batch-10-017 | lesson-phrases ja | Minor | 「日時と、紐付いた生徒名」に直った |

修正案をそのまま当てたことで意味がずれた箇所や、文がつながらなくなった箇所は無い。日英の事実も揃っている（ja・en の 003/006、004/010、012/014）。

## 初回で未確認だった点の処理

- **「🔗 LINE紐付け」の英語表示**: 解消。`tr()` は完全一致の訳語・パターン・区切り・括弧のどれにも当たらない文字列をそのまま返す（`html-en.ts:275-293`）。辞書には「紐付け」単独と「🔗 Zoom参加者の紐付け」しか無いので、英語画面でも「🔗 LINE紐付け」のまま出る。英語版がこの表記を日本語のまま残しているのは正しい
- **英語版 Zoom チャット記事の "not linked"**: 確認できた。「未紐付け」の札に対応する訳語が無く、英語画面でも日本語のまま出る見込みが高い。読者が見つけられないおそれがあるので、Minor の R003 として記録した
- **デモの生徒がはじめから「送る」設定になっている点**: 毎晩の処理でデモのデータを消して入れ直しており（`automation/run/route.ts:277-278`、`demo-seed.ts:65,83`）、入れ直した直後は「送る」になる。「はじめから」という書き方で断定は過ぎていないので、指摘しない
- **カルテの項目名がデモの入れ直しで戻らない点（intake-fields）**: 入れ直しの処理に設定の書き込みが無いことはコードで確認した。初回の判断どおりで、本文の変更は不要
- **英語表示で選択肢が英語のまま保存される点（lesson-notes en）**: チップに表示された文字をそのまま送る実装（`MockShell.tsx:1275-1277`）と i18n の訳語から、コード上はそうなる。指摘しない

## 継続する指摘

なし（初回の項目はすべて解消）。

## 追加の指摘（Minor 3件）

- **batch-10-R001（en homework-reminders, proofread, Minor）**
  - 原文: "Tap 課題あり (has homework) on the types that actually come with homework."
  - 理由: ラベルの注記では "Homework" と書いており、同じボタンに2つの英語名が付いている
  - 修正案: "(Homework)"
- **batch-10-R002（en homework-reminders, proofread, Minor）**
  - 原文: "Inside 📩 課題の提出 (homework submissions) … (send to this student) and … (do not send)."
  - 理由: 括弧内の訳が画面の英語と合っていない
  - 修正案: 📩 Homework submissions / Automatic homework reminders / Send to this student / Don't send to this student に揃える
- **batch-10-R003（en lesson-phrases, fact, Minor）**
  - 原文: "A session marked “not linked” in the separate list …"
  - 理由: 英語画面でも札は「未紐付け」のまま出る見込み（`render.ts:561-563`、`html-en.ts:275-293`）
  - 修正案: "A session marked 未紐付け (not linked) in the Lesson chats list …"

## 各記事の判定

| 記事 | ja | en |
|---|---|---|
| homework-marked-reviewed-before-it-was-checked | 公開継続可（問題なし） | 公開継続可（問題なし） |
| homework-reminders-typed-one-by-one | 公開継続可（問題なし） | 公開継続可（Minor 2） |
| homework-was-submitted-but-the-reminder-still-arrives | 公開継続可（変更なし、初回判定を継続） | 公開継続可（変更なし、初回判定を継続） |
| intake-fields-written-for-an-english-school | 公開継続可（変更なし、初回判定を継続） | 公開継続可（問題なし） |
| lesson-notes-vanish-when-the-teacher-changes | 公開継続可（問題なし） | 公開継続可（問題なし） |
| lesson-phrases-disappear-when-the-zoom-call-ends | 公開継続可（問題なし） | 公開継続可（Minor 1） |

外向けの表記（エムダッシュ、Excel、裸の「CRM」、AI搭載）は、修正した箇所を含めて違反なし。
