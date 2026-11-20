# 公開済み記事の監査 batch-13 再レビュー（2026-11-20）

- レビュー担当: Claude Code CLI（原稿の執筆・修正者から独立。記事・画像・既存のレビュー文書は変更していない）
- 照合したもの: 修正後の現在の原稿（12ページすべてを読み直した）、`../audit-2026-11-20/batch-13-applied.json`、初回指摘 `batch-13-findings.json`、`public-evidence.md`、crm-run の一次実装
- 方法: 静的確認のみ。実機・デモの操作はしていない
- 機械処理用: `../audit-2026-11-20/batch-13-recheck-findings.json`

## 結論

初回の26件（Critical 7・Major 9・Minor 10）は、すべて現在の原稿で解消している。未解決の Critical・Major は0件で、12ページすべて公開継続可。新しく見つけたのは英語版1ページの Minor 2件だけで、公開を止める理由にはならない。

## 修正済みID（26件）

| ID | 記事 | 重大度 | 確認結果 |
|---|---|---|---|
| batch-13-001 | ja/signs | Critical | 解消。担当なしは運営・マネージャー、種別の担当にだけ出る、週1だけの穴と「👤 担当を設定してください」が46行目に入った（`supabase.ts:386-389, 495-500`、`render.ts:95-114, 150-173, 2207-2214`） |
| batch-13-002 | ja/signs | Major | 解消。種別なし提出の扱い（44行目）が `homework.ts:177-201`、`line/webhook/route.ts:260-263` と一致 |
| batch-13-003 | ja/signs | Minor | 解消。「「休講期間」に登録した期間中は出ません。」（34行目） |
| batch-13-004 | en/signs | Critical | 解消。英語表示の訳の対応表（32行目）が `html-en.ts:35-36, 42, 56, 116-117`、`i18n-data.ts:135` と一致 |
| batch-13-005 | en/signs | Major | 解消（50行目）。`html-en.ts:213-214` |
| batch-13-006 | en/signs | Critical | 解消（46行目） |
| batch-13-007 | en/signs | Major | 解消（44行目） |
| batch-13-008 | en/signs | Minor | 解消。"a messaging app widely used in Japan"（44行目）。文として壊れていない |
| batch-13-009 | ja/quit | Critical | 解消（49行目）。`student/status/route.ts:22`、`jst.ts:40-42` |
| batch-13-010 | ja/quit | Major | 解消（50行目）。`provision.ts:34-42`、既刊 reception 記事と整合 |
| batch-13-011 | en/quit | Critical | 解消（51行目） |
| batch-13-012 | en/quit | Major | 解消（52行目） |
| batch-13-013 | en/quit | Minor | 解消（32行目） |
| batch-13-014 | ja/no-next | Minor | 解消（28行目）。文が自然に読める |
| batch-13-015 | en/no-next | Minor | 解消（34行目）。staff 記事の Operations と揃った |
| batch-13-016 | ja/manual | Minor | 解消（35行目）。`drive-knowledge.ts:106`、`render.ts:1411` |
| batch-13-017 | ja/manual | Minor | 解消（48行目）。`automation/run/route.ts:230-236`、`drive-knowledge.ts:121-133` |
| batch-13-018 | en/manual | Minor | 解消（30行目） |
| batch-13-019 | en/manual | Minor | 解消（48行目） |
| batch-13-020 | ja/schedule | Critical | 解消（36行目）。`lesson/reschedule/route.ts:33-83`、`google-calendar.ts:391-412` |
| batch-13-021 | ja/schedule | Major | 解消（34行目）。通知が届く場合と登録できない場合を条件つきで書いており、本番の通知登録の成否を断定していない。初回の「要確認」は断定を外した形で解消 |
| batch-13-022 | ja/schedule | Major | 解消（37行目）。`coach-calendar.ts:139`、`page.tsx:15-19` |
| batch-13-023 | en/schedule | Critical | 解消（36行目） |
| batch-13-024 | en/schedule | Major | 解消（34行目）。021と同じく条件つき |
| batch-13-025 | en/schedule | Major | 解消（37行目） |
| batch-13-026 | en/schedule | Minor | 解消（45行目） |

## 初回 unverified の扱い

- no-next（日英）「デモのホームに次回未予約が1件」「デモはLINEにつながっていない」: 該当文を削除し、共有デモでは画面を見るだけ、という案内に変えた（applied.json の追加2件）。件数・接続状態の断定が無くなったので解消。新しい文は事実の主張を足していない。
- schedule（日英）本番で変更通知の登録が成功しているか: 本文は条件分岐で書いており断定していないので、記事の欠陥としては解消。運用上の事実としては引き続き未確認。
- quit（日英）古い教室の権限設定: 本文は「新しく作った教室では」と限定しており、断定は無い。解消。
- 画像（manual の画像2にカーソルが重なっている、SVG表紙は未確認）: 本文の事実ではないので記事の判定には含めない。撮り直し推奨は継続。

## 継続している指摘

なし。

## 追加の指摘（Minor 2件、修正任意）

**batch-13-R001 / en/signs-of-quitting-noticed-too-late / Minor / proofread**
- 原文: "Nothing is flagged during a period you have registered as a school closure."
- 理由: 日本語版は 003 で画面名「休講期間」に揃えた。英語表示での画面名は "Breaks"（`html-en.ts:21`）で、英語版だけ画面名と違う語のまま残っている。
- 修正案: "Nothing is flagged during a period you have registered under Breaks."

**batch-13-R002 / en/signs-of-quitting-noticed-too-late / Minor / proofread**
- 原文: 50行目のチップの説明 "Chips across the top filter the list: すべて (all), 受講中 (active), 体験予定 (trial booked) and 卒業間近 (graduating). When there are students who match, you also get 課題が滞り (homework stalled), 休止 (paused), 卒業生 (alumni) and 退会 (withdrawn)."
- 理由: 004 で入った対応表と同じ段落の "Homework overdue 2" が、括弧の訳 "homework stalled" と食い違う。英語表示でのチップは All / Active / Upcoming trials / Graduating / Homework overdue / Paused / Alumni / Withdrawn（`html-en.ts:35, 42, 213-214`）。機械適用で一部だけ英語表示の名前になり、前後の訳語がずれた。
- 修正案: "Chips across the top filter the list: すべて (All), 受講中 (Active), 体験予定 (Upcoming trials) and 卒業間近 (Graduating). When there are students who match, you also get 課題が滞り (Homework overdue), 休止 (Paused), 卒業生 (Alumni) and 退会 (Withdrawn)."

## 各記事の判定

| 記事 | 言語 | 変更 | 未解決 C/M/m | 判定 |
|---|---|---|---|---|
| signs-of-quitting-noticed-too-late | ja | あり | 0/0/0 | 公開継続可 |
| signs-of-quitting-noticed-too-late | en | あり | 0/0/2 | 公開継続可 |
| staff-ask-who-changed-the-student-status | ja | なし | 0/0/0 | 公開継続可（初回判定の継続） |
| staff-ask-who-changed-the-student-status | en | なし | 0/0/0 | 公開継続可（初回判定の継続） |
| students-who-quit-stay-on-the-to-do-list | ja | あり | 0/0/0 | 公開継続可 |
| students-who-quit-stay-on-the-to-do-list | en | あり | 0/0/0 | 公開継続可 |
| students-with-no-next-lesson-booked-drift-away | ja | あり | 0/0/0 | 公開継続可 |
| students-with-no-next-lesson-booked-drift-away | en | あり | 0/0/0 | 公開継続可 |
| teachers-ask-the-owner-for-every-manual | ja | あり | 0/0/0 | 公開継続可 |
| teachers-ask-the-owner-for-every-manual | en | あり | 0/0/0 | 公開継続可 |
| teachers-ask-the-owner-for-their-schedule | ja | あり | 0/0/0 | 公開継続可 |
| teachers-ask-the-owner-for-their-schedule | en | あり | 0/0/0 | 公開継続可 |

3工程の確認: ①事実（修正箇所を一次実装と再照合）、②編集（修正で段落の論理・流れが壊れていないか、日英で事実がそろっているか）、③校正（機械適用で文が壊れていないか、表記ルール）。R002 以外に、機械適用による意味のずれ、創作の追加、日英の事実差は見つからなかった。表記（裸のCRM・Excel・AI搭載・ノマド・エムダッシュ）も問題なし。
