# 2026-11-20 最終確認（B2C新規2本の修正の確認と、全6本の公開判定）

- 基準: [記事の品質チェックリスト（統合版）](../article-quality-checklist.md)、`daily-run.md` 工程7
- 履歴（書き換えていない）: [2026-11-20-integrated-quality.md](2026-11-20-integrated-quality.md)（初回）、[2026-11-20-recheck.md](2026-11-20-recheck.md)（再レビュー）
- 実施: 2026-11-20、Claude Code（独立レビュー。執筆・修正には関与していない）。
- 今回の焦点: B2C新規2本（`reception-can-change-student-status-and-teacher-assignments` の日英）で、再レビューの RC-1〜RC-4・RD-1〜RD-3 が解消したか。①事実検証 → ②編集レビュー → ③校正・推敲 の順に、原稿全体を読み直した。
- 引き継ぎ: B2B日英2本と既刊訂正2本（`phone-enrollments-stay-in-the-paper-register` の日英）は、再レビューの「公開可／公開更新可」をそのまま引き継ぐ。本文は変わっていない、との申告。既刊の frontmatter（sources・updated）だけは今回も読んで確かめた。
- 確認方法: すべて実装の静的な読み取り。**実機テストではない。** デモ・本番の画面は開いていない。
- レビュー担当は原稿・画像・CRM・他の文書を変更していない。commit / push もしていない。このファイルだけを作成した。

## 結論

**全6本、公開・更新してよい。** 未解決の Critical・Major はどの記事も0件。B2B表紙の類似（IMG-1、Minor）は、ユーザー判断のとおり見送りのまま。

| 記事 | Critical 残 | Major 残 | Minor 残 | 判定 |
|---|---|---|---|---|
| A. B2B 日本語 `old-mailing-lists-stay-because-deleting-contacts-feels-risky` | 0 | 0 | 1（IMG-1、見送り） | 公開可（再レビューの判定を引き継ぎ） |
| B. B2B 英語 同slug | 0 | 0 | 1（IMG-1、見送り） | 公開可（同上） |
| C. B2C 日本語 `reception-can-change-student-status-and-teacher-assignments` | 0 | 0 | 0 | **公開可** |
| D. B2C 英語 同slug | 0 | 0 | 0 | **公開可** |
| E. 既刊 日本語 `phone-enrollments-stay-in-the-paper-register`（訂正） | 0 | 0 | 0 | 公開更新可（再レビューの判定を引き継ぎ） |
| F. 既刊 英語 同slug（訂正） | 0 | 0 | 0 | 公開更新可（同上） |

---

## 再レビューの指摘の対応状況

| ID | 重大度 | 指摘（要旨） | 修正後の原文（場所） | 判定 |
|---|---|---|---|---|
| RC-1 | Major | 「編集」を外すと、カルテの生徒ごとの「課題の自動リマインド」切り替えも消える | C 21行「ただし、編集を外すと、カルテの「課題の自動リマインド」で生徒ごとに送る・送らないを切り替える操作も、その役割の画面に出なくなります。」、25行「同じ役割の先生が、状態や担当の変更、生徒ごとのリマインドの切り替えを行う必要もあるなら…」、35行「リマインドの切り替えも含め、同じ役割の全員に編集を任せないと決めた場合は…」 | 解消 |
| RC-2 | Minor | 編集を外しても状態のチップは表示され、押しても変わらない | C 40行「編集を外しても「ステータス変更」の欄は表示されたままで、押しても状態は変わりません。受付には、その旨を伝えておきます。」 | 解消 |
| RC-3 | Minor | 「休会」と画面の「休止」 | C 15行「休止にしたり」 | 解消 |
| RC-4 | Minor | 23行のつながりが不自然 | C 23行「受付は登録だけのつもりでも、画面で編集が許可されていれば、受付は状態を変えられます。ずれに気づくのは、誰かが変えたあとです。」 | 解消 |
| RD-1 | Major | RC-1と同じ | D 21行 "Removing Edit also hides the per-student **Automatic homework reminders** switch on the student profile for that role."、25行、35行 | 解消 |
| RD-2 | Minor | RC-2と同じ | D 40行 "After Edit is removed, the status chips still appear on the profile, but pressing them does not change the status. Let reception know." | 解消 |
| RD-3 | Minor | "on leave" と画面の "Paused" | D 15行 "whether an existing student is paused" | 解消 |
| IMG-1 | Minor | B2B表紙が前日のB2B表紙と似ている | 変更なし | 見送り（ユーザー判断） |

---

## C. B2C 日本語「受付には生徒登録だけ任せたいのに、状態や担当も変えられる」

### ①事実検証（領域1・6）

修正した箇所を中心に、原稿全体を実装と照合した。

| 原文（行） | 根拠 | 判定 |
|---|---|---|
| 「休止にしたり」（15行） | 画面の状態名「休止」（`crm-run/src/school-app/lib/render.ts:845`、`src/app/api/school-app/student/status/route.ts:10`） | 問題なし |
| 「新しい教室を作ると「一般」の役割にも、生徒の閲覧・作成・編集が許可されます」（17行） | `src/lib/school/provision.ts:34-44`、組織作成時に `src/app/api/orgs/route.ts:288` → `src/lib/editions/provision.ts:27`。デモも同じ（`src/school-app/lib/demo-seed.ts:231`） | 問題なし |
| 「「作成」は新規登録に、「編集」は生徒の状態や担当の先生を変える操作に使われます」（21行） | `student/route.ts:12`（作成）、`student/status/route.ts:15`、`student/coaches/route.ts:19`（編集） | 問題なし。「編集」を全項目の編集とは呼んでいない |
| 「編集を外すと、カルテの「課題の自動リマインド」で生徒ごとに送る・送らないを切り替える操作も、その役割の画面に出なくなります」（21行） | 表示は `canAssign`＝`student/can_edit`（`render.ts:472-488, 525`、`:852`、`:2191-2193`、遅延読み込みも `api/school-app/student/detail/route.ts:112`）。画面ラベル「課題の自動リマインド」（`render.ts:474, 527`） | 問題なし。「画面に出なくなる」と書いており、保存APIの権限（`student/reminder/route.ts:13` は `lesson/can_edit`）を外すとは書いていない。実装と一致 |
| 受付が状態を変えられる（23行） | 編集が許可されていれば `student/status` は通る（`status/route.ts:15`） | 問題なし |
| 役割全体に効く・一人の例外は無い（25・54行） | `permissions/route.ts:42`、`194_school_beyonders_copy.sql:184-193` | 問題なし |
| 操作できる役割（29行） | `permissions/route.ts:20`、`authz.ts:133`、`render.ts:43` | 問題なし |
| 手順1〜6（31-36行） | `render.ts:2025-2061, 2288, 2315`、`MockShell.tsx:1010-1018` | 問題なし |
| 再読み込みの必要（38行） | `MockShell.tsx:59-63`（画面の切り替えは読み直さない） | 問題なし |
| 「「ステータス変更」の欄は表示されたままで、押しても状態は変わりません」（40行） | 欄の見出し「⚙ ステータス変更」とチップは権限で出し分けていない（`render.ts:840-847`）。押すとAPIが403を返し、画面は成功時だけ再読み込み（`MockShell.tsx:1104-1118`） | 問題なし。「何も表示されない」までは書いていないが、「状態は変わらない」は正確 |
| 初期設定と現在の設定は同じとは限らない（44行） | `provision.ts:34-44`、fallback は `authz.ts:168` | 問題なし。現在の各教室の値を断定していない |
| 行が無いときの初期値（46行） | `permissions/route.ts:40-42`、`pg-query-builder.ts:173`、`194…sql:188-191` | 問題なし |
| 生徒一覧は全員に見える、請求は別の許可（48行） | `authz.ts:48-62`、`render.ts:2025, 2047` | 問題なし |
| 監査ログ「権限変更」（50行） | `permissions/route.ts:44` | 問題なし |
| 個別登録の記事と英語表示の注意（50行） | `ja/phone-enrollments-stay-in-the-paper-register.md:32` | 問題なし |
| デモ「スクール」（58行） | `demo.ts:31` | 問題なし |

新しい誤りは見つからなかった。**問題なし。**

### ②編集レビュー（領域2・3・5）

- 構成・論理: 問題なし。21行で「編集」の範囲と副作用を示し、25行（役割全体の判断）と35行（手順5）が同じ範囲で書かれている。題名・前提（17行）・手順・最初の一歩（54行）に矛盾はない。
- 具体性・独自性: 問題なし。リマインド切り替えの副作用は実装からしか分からない判断材料で、読者が編集を外すかどうかを決める材料になっている。
- 読者体験: 問題なし。40行で受付への伝達まで書いており、外した後に戸惑う場面を先回りしている。
- 54行（最初の一歩）はリマインドに触れていないが、25・35行で判断材料として示しており、欠落とまでは言えない。指摘にしない。

### ③校正・推敲（領域4・6）

- 23行は「受付は」が1文に2回出るが、意味は明確で読み違いは起きない。指摘にしない。
- AI特有の表現・定型の締め・誇張・エムダッシュ・禁止表現: 問題なし。
- 表記: 画面ラベル（「休止」「課題の自動リマインド」「ステータス変更」「権限管理」「一般」「生徒」「作成」「編集」）は実装と一致。
- CTA: 本文末に1回（58行）。問題なし。
- 画像: 再レビューで確認した表紙（2人の学校の写真、新slug名）から変更なし、との申告。本文と合う。

**公開判定: 公開可。** Critical 0件、Major 0件、Minor 0件。

---

## D. B2C 英語「Reception should register students, but can also change status and teacher assignments」

### ①事実検証

Cと同じ根拠で照合し、問題なし。英語版に固有の点:

| 原文（行） | 根拠 | 判定 |
|---|---|---|
| "paused"（15行） | `html-en.ts:42`（休止→Paused） | 問題なし |
| "per-student **Automatic homework reminders** switch on the student profile"（21行） | `html-en.ts:119`（課題の自動リマインド→Automatic homework reminders）、表示条件はCと同じ | 問題なし |
| "the status chips still appear on the profile, but pressing them does not change the status"（40行） | Cと同じ | 問題なし |
| Operations・Manager・Office・Staff（29行ほか） | `html-en.ts:74, 87`、`render.ts:43` | 問題なし |
| **Schools**（58行） | `demo.ts:32` | 問題なし |

**問題なし。**

### ②編集レビュー

- 日本語版との事実の差: なし。21・25・35・40行が日本語版の同じ行と同じ範囲を述べている。
- 読者適合: 問題なし。

### ③校正・推敲

- 翻訳調・反復・誇張・定型の締め・エムダッシュ: 問題なし。
- 35行 "Deselect **Edit** only if everyone sharing the role should stop changing student status, assigned teachers and the per-student reminder setting from the profile." は自然な英語で、日本語版の手順5と一致。

**公開判定: 公開可。** Critical 0件、Major 0件、Minor 0件。

---

## A・B（B2B）と E・F（既刊の訂正）

- A・B: 再レビュー（`2026-11-20-recheck.md`）の「公開可」を引き継ぐ。本文は変わっていない、との申告。Critical 0件、Major 0件。Minor は IMG-1 の1件で、見送り。
- E・F: 再レビューの「公開更新可」を引き継ぐ。今回、frontmatter を読んで次を確かめた。
  - `sources` に `src/lib/school/provision.ts / src/school-app/lib/demo-seed.ts` が加わっている（日英とも11行）。30行の訂正の根拠と合う。問題なし。
  - `updated: 2026-11-20` は日英とも1行だけ（13行）。重複は残っていない。`date: 2026-11-19` は変わっていない。問題なし。
  - 原稿全体の差分が「権限の段落・sources・updated だけ」だったことは、Codexが元の Git と比べて確認した、との申告に依拠する。Claudeは差分を見ていない。
  - Critical 0件、Major 0件。

## 確認できていないこと

- デモ・本番の画面は開いていない。ログイン・保存・削除・権限変更はしていない。根拠はすべて静的なコードの読み取り。
- ビルドの成功は Codex の申告で、Claudeは実行していない。
- A・B・E・F の本文が前回判定から変わっていないこと、既刊の差分の範囲は、申告に依拠した。
- 本番DBの各教室の権限の値は確認していない。記事は断定していないので、判定には影響しない。
