# 2026-11-20 公開記事監査 batch-12 再レビュー（Claude Code CLI）

- 担当: 実際の Claude Code CLI。原稿執筆者（Codex）とは独立して確認した。記事・画像・CRM・既存レビュー文書は編集していない。git 操作なし。
- 対象: 12ページ（6本×日英）。12ページとも今回変更あり（`../audit-2026-11-20/batch-12-applied.json`）。
- 方法: 現在の原稿を全ページ読み直し、初回指摘（`batch-12-findings.json`）の適用結果を、crm-run の一次実装（初回と同じ箇所）と照合した。`public-evidence.md` も確認した。静的確認のみで、実機・ブラウザ・認証は使っていない。
- 初回の成果物について: 初回レビューの Markdown（`2026-11-20-audit-batch-12.md`）と JSON（12ページ分）は保存済み。今回はそれと修正後の原稿を突き合わせた。

## 結論

- 初回の38件（Critical 20・Major 5・Minor 13）は、**38件とも提案どおりに適用され、意味のずれも無い**。全件を解消済みとする。
- 残る指摘は **Major 2・Minor 20**。Major はカレンダー記事（日英）の「📲 スマホのカレンダーで見る」の断定で、初回は未確認として扱った事項が、本文で断定されたまま残っている。
- 公開判定: カレンダー記事の日英2ページは**修正必須**。ほかの10ページは**公開継続可**（Minor は任意）。

## 修正済みID（resolved）

batch-12-001〜038 の全件。確認の要点:

- 004/005/009/010（役割6つ）: 本文と frontmatter が `supabase.ts:333` の6役割と一致。
- 006/011/019/024（種別ごとの振り分け）: `render.ts:87-114,2207-2214` と一致。英語の訳語（Weekly lesson, Grammar ほか）は `html-en.ts:44-45,129` と一致。
- 016/021（続きを読む）, 017/022（10枚と件数）, 018/023（ホームとタスクの同期）: `render.ts:872-885,920-960` と `MockShell.tsx:162-219` に一致。
- 020（英語版ラベル）: 誤った断定は消え、対応表は `i18n-data.ts:134-146`、`html-en.ts:107,202` と一致。残る日本語ラベルは下の R008〜R015 にまとめた（Minor）。
- 025/026（振替）: `lesson/reschedule/route.ts:33,41-77` と一致。
- 027/030（代表のホーム）, 028/031（2つの欄）: `page.tsx:63-73`、`render.ts:1579-1616` と一致。
- 033/037（ファイル名の日付）: `csv.ts:30-34`、`format-date.ts:17` と一致。
- 034/038（請求の行の単位）: `export.ts:85-94` と一致。
- 035/036（スプレッドシート）: 適用済み。Codex は15行目・37行目・53行目も置き換えている。BOM で Excel 固有に効く28行目と、画面引用の30行目は「Excel」のまま残しており、正確。
- そのほか Minor（001〜003, 007, 008, 012〜015, 029, 032）も適用済みで、文章は壊れていない。

Codex が追加で変えた点も確認した。export 記事（日英）の「契約終了後30日」は「製品の案内では…としています。必要な資料は契約が有効なうちに保存し…」と弱めてある。利用規約 `terms-2026-09-29.md:22,139` と画面文言 `render.ts:2073` には30日とあり、断定を避けた書き方として問題なし。

## 記事ごとの判定と残る指摘

### next-lesson-booked-over-line-back-and-forth（ja / en）
- ①事実: 001〜003 は解消。ほかの記述は初回の確認が今も有効。②③: 問題なし。英語版の "inside the CRM" は英語版として許容（初回と同じ判断）。
- 判定: **公開継続可**（ja・en とも指摘0件）。

### nobody-is-assigned-to-each-student（ja）
- 解消: 004〜008。
- **R001（Minor）** 最初の一歩の完了条件が「担当なしの生徒」の人数だけになっている。28行目で種別ごとの振り分けを説明したので、種別の担当漏れ（ダッシュボードの「⚠️ 誰のホームにも出ていないもの」）も確かめる一言があると、手順が本文と合う（`render.ts:1579-1612`）。
- 判定: **公開継続可**。

### nobody-is-assigned-to-each-student（en）
- 解消: 009〜015。28行目で「英語表示ではカルテのラベルも英語」と正しく書いたため、残っている日本語ラベルとの食い違いが目立つ。
- **R002（Minor）** frontmatter feature の「🎓 担当LEADERS」。
- **R003（Minor）** frontmatter screens の「＋ アカウントのない人を担当にする, 追加 / 担当なしの生徒 ○人」。
- **R004（Minor）** 32行目「scroll to 🎓 担当LEADERS」。
- **R005（Minor）** 46行目「After pressing 追加 (add)」。英語表示では Add（`html-en.ts:15`）。
- **R006（Minor）** 58行目の最初の一歩。ラベルは英語表示に合わせる。完了条件は日本語版 R001 と同じ。
- **R007（Minor）** 60行目のデモの案内「🎓 担当LEADERS」。
- 監査ログの「担当コーチ追加」「担当コーチ解除」と「・未登録」の英語表示は、辞書に完全一致が無く**要確認**のまま。ただし本文は日本語ラベルに英訳を添えた書き方で、断定はしていない。
- 判定: **公開継続可**。

### nobody-knows-who-checked-the-homework（ja）
- 解消: 016〜019。
- **R016（Minor）** 最初の一歩（50行目）は「担当が付いているか」を確かめるだけ。40行目で「課題のある種別ごとに担当を付ける」と書いたので、一歩目も種別ごとの確認に揃える。
- 判定: **公開継続可**。

### nobody-knows-who-checked-the-homework（en）
- 解消: 020〜024。30行目の対応表は正しい。ただし、同じ段落の冒頭や後続の段落は日本語ラベルのままで、英語表示の読者が画面で探す語と食い違う。
- **R008（Minor）** frontmatter screens。
- **R009（Minor）** 30行目の冒頭の文（📩 届いた課題 / 確認済みにする）。直後の対応表と順序が逆になっている。
- **R010（Minor）** 34行目（未確認○件、💬 LINE公式アカウントマネージャー）。
- **R011（Minor）** 36行目（確認済みにする、📩 課題の提出、✓ 確認済み、監査ログ、課題を確認）。
- **R012（Minor）** 42行目（💬 LINEで送る → 💬 Send on LINE、`html-en.ts:36`）。
- **R013（Minor）** 44行目（権限管理 → Permissions）。
- **R014（Minor）** 52行目（📩 届いた課題）。
- **R015（Minor）** 54行目（デモの案内のラベル）。
- **R017（Minor）** 最初の一歩（50行目）を種別ごとの確認に揃える（日本語版 R016 と同じ）。
- 判定: **公開継続可**。

### owner-cannot-see-how-full-next-month-is（ja）
- 解消: 025。
- **R018（Major・継続中の未確認事項）** 注意5点目の「「📲 スマホのカレンダーで見る」は、いまは設定を促す案内が出るだけで、URLは発行されません」。URL が出るかどうかは本番の環境変数 `CALENDAR_FEED_SECRET` で決まる（`render.ts:1878-1881`、`calendar-feed.ts:28-31`）。本番の現在の状態は静的には確定できない。`docs/crm-media/README.md` の161・219行には当時の本番で未設定だった記録がある。一方 `student-page.ts:14` のコメントは「本番には後者（CALENDAR_FEED_SECRET）しか無い」としており、食い違う。チェックリストの「要確認は本文で断定しない」に当たるので、条件つきの書き方に直す。修正案はコードで確定できる範囲だけを書いている。
- **R019（Minor）** デモの案内の「先生3人の色で並んだ」。`demo-seed.ts:140-144` が今日基準で予約を入れ、講師は3人だが、共有デモは訪問者が予約を足せるので、件数や色の数は保証できない。
- 判定: **修正必須**（R018）。

### owner-cannot-see-how-full-next-month-is（en）
- 解消: 026。
- **R020（Major）** 48行目「currently shows a setup notice instead of a subscription link」。理由は R018 と同じ。
- **R021（Minor）** 56行目「laid out in three teachers' colors」。理由は R019 と同じ。
- 判定: **修正必須**（R020）。

### owner-cannot-see-what-each-teacher-is-holding（ja）
- 解消: 027〜029。16行目の新しい前提は、続く「一人ずつ聞くことになる」と論理がつながっている。
- **R022（Minor）** frontmatter feature の「担当の講師がいないものは「⚠️ 誰のホームにも出ていないもの」に出て」。初回 028 の reason で直すよう挙げた箇所が未適用。本文40行目の正しい説明と食い違う。
- 判定: **公開継続可**。

### owner-cannot-see-what-each-teacher-is-holding（en）
- 解消: 030〜032。frontmatter feature の "Items with no teacher of that type…" は一つ目の欄の説明として正しい。指摘なし。
- 判定: **公開継続可**。

### school-data-locked-inside-the-app（ja / en）
- 解消: 033〜038。30日の記述は弱めてあり問題なし（上記）。英語版の "Excel" は製品名として許容。
- 判定: **公開継続可**（指摘0件）。

## 集計

| 記事 | 言語 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|
| next-lesson-booked-over-line-back-and-forth | ja | 0 | 0 | 0 | 公開継続可 |
| next-lesson-booked-over-line-back-and-forth | en | 0 | 0 | 0 | 公開継続可 |
| nobody-is-assigned-to-each-student | ja | 0 | 0 | 1 | 公開継続可 |
| nobody-is-assigned-to-each-student | en | 0 | 0 | 6 | 公開継続可 |
| nobody-knows-who-checked-the-homework | ja | 0 | 0 | 1 | 公開継続可 |
| nobody-knows-who-checked-the-homework | en | 0 | 0 | 9 | 公開継続可 |
| owner-cannot-see-how-full-next-month-is | ja | 0 | 1 | 1 | 修正必須 |
| owner-cannot-see-how-full-next-month-is | en | 0 | 1 | 1 | 修正必須 |
| owner-cannot-see-what-each-teacher-is-holding | ja | 0 | 0 | 1 | 公開継続可 |
| owner-cannot-see-what-each-teacher-is-holding | en | 0 | 0 | 0 | 公開継続可 |
| school-data-locked-inside-the-app | ja | 0 | 0 | 0 | 公開継続可 |
| school-data-locked-inside-the-app | en | 0 | 0 | 0 | 公開継続可 |
| 合計 | | 0 | 2 | 20 | |

Minor の内訳は R001〜R017, R019, R021, R022 の20件。Major は R018・R020。

## 未確認の範囲
- 本番の `CALENDAR_FEED_SECRET`。R018・R020 の修正案は、どちらの状態でも正しい条件つきの書き方にしてある。
- 英語表示での監査ログの「担当コーチ追加／解除」と「・未登録」。本文は断定していない。
- SVG表紙と、カレンダー記事の本文画像の一部（初回と同じ範囲）。今回は画像の変更なし。
