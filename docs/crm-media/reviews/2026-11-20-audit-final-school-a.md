# 2026-11-20 公開記事監査 final-school-a 最終確認（Claude Code CLI）

- 担当: 実際の Claude Code CLI。原稿執筆者（Codex）とは独立して確認した。記事・画像・CRM・既存文書は編集していない。git 操作なし。
- 対象: 13ページ（en 7・ja 6）。入力は `../audit-2026-11-20/final-school-a-changes.json`（recheck_fixes 30件、editorial 7件）。
- 方法: 現在の原稿を13ページとも読み直し、適用済みの修正を crm-run の一次実装と照合した。順序は ①事実 → ②編集 → ③校正。**静的確認のみ**で、実機・ブラウザ・認証・送信は使っていない。
- CRM の差分（`crm-latest-environments.diff`、#470、7ファイル）: 対象は `src/app/(dashboard)/layout.tsx`、`api/environments/current`、`app-topbar.tsx`、`environment-switcher.tsx`、`lib/environments(.test).ts`、`migrations/284_org_environments.sql` だけ。`src/school-app/` 配下と、スクール版の API・翻訳辞書・provision には触れていない。記事が引く既存の仕様は変わっていない。新機能の影響は別の Claude の担当で、ここでは見ていない。

## 結論

- 適用された30件（batch-10-R001〜R003、batch-11-R001〜R005、batch-12-R001〜R022）は、**30件とも提案どおりに入り、意味のずれも文の崩れもない**。全件を解消済みとする。
- editorial 7件（customer-list の2件は対象外ページ、school-data の5件は対象内）も確認した。school-data の5件は正確。
- 新しい指摘は **0件**（Critical 0・Major 0・Minor 0）。
- 公開判定: **13ページとも公開更新可**。

## 修正ごとの確認

### batch-10（homework-reminders en / lesson-phrases en）
- R001・R002: 「課題あり (Homework)」「📩 課題の提出 (📩 Homework submissions)」「課題の自動リマインド (Automatic homework reminders)」「この生徒に送る (Send to this student)」「この生徒には送らない (Don't send to this student)」。`html-en.ts:56,117,119-120` と一致。34行目のラベル対応表とも揃った。
- R003: 「未紐付け (not linked) in the Lesson chats list」。`html-en.ts:21`（レッスンのチャット → Lesson chats）と一致。「未紐付け」単独の訳語は辞書に無く（`html-en.ts:175` は長い文の中だけ）、英語表示でも日本語のまま出る。日本語を先に出した書き方は正しい。

### batch-11（new-teachers ja / en）
- R001（ja）・R002（en）: デモの招待中の行は「いれば」の条件つきになり、共有で毎晩入れ直す旨と「押さずに見る」が入った。`demo-seed.ts:4-9,76` と一致。日英の内容は同じ。
- R003〜R005（en frontmatter）: 「"Users" in the left menu」「🔗 Issue URL, ✉️ Resend, 🗑 Revoke」「Audit log: "Member invited" and the other invitation entries」。`html-en.ts:20,86,107` と一致。YAML の二重引用符のエスケープも正しい。

### batch-12
- nobody-is-assigned ja R001: 完了条件を「受講中の生徒には担当が付いた状態」と言い直し、「📊 ダッシュボード」の「⚠️ 誰のホームにも出ていないもの」を見る一歩を足した。欄は該当があるときだけ出る（`render.ts:1611-1613`）ので「出ていないか確認」で正しい。ダッシュボードは STAFF に出る（`render.ts:2286,2310`）。手順の主語のマネージャーは開ける。
- nobody-is-assigned en R002〜R007: 「🎓 Assigned LEADERS」「+ Assign someone without an account, Add」「N students without a teacher」「Add」。`html-en.ts:15,122,124,203` と一致。「📊 Dashboard」は `html-en.ts:129`。欄名は辞書に無く日本語で出るため、日本語に英訳を添えた書き方は正しい。28行目の「英語表示ならラベルも英語」とも矛盾しなくなった。
- nobody-knows ja R016・en R017: 一歩目を種別ごとの確認にし、「担当が1人もいない → マネージャーと運営だけ」「その種別だけいない → 誰にも出ない」を書き分けた。`render.ts:1582-1588`、`supabase.ts` の振り分けと一致。40行目の注意とも揃った。日英の内容は同じ。
- nobody-knows en R008〜R015: 「📩 Homework inbox」「Mark as reviewed」「N to review」「✓ Reviewed」「📩 Homework submissions」「💬 LINE Official Account Manager」「💬 Send on LINE」「Audit log」「Reviewed homework」「Permissions」「Open profile」。`i18n-data.ts:10,135,139,146`、`html-en.ts:24,36,107,117,202` と一致。30行目の対応表と本文の語が揃った。
- owner-cannot-see-how-full ja R018・en R020（前回の Major）: 「購読URLが出るのは、サービス側で購読の設定が済んでいるとき。設定前は設定を促す案内」。`render.ts:1880` の分岐と一致し、本番の `CALENDAR_FEED_SECRET` がどちらの状態でも正しい。断定は消えた。**Major 2件とも解消。**
- owner-cannot-see-how-full ja R019・en R021: 「先生ごとの色」に変え、共有デモで他の訪問者の予約が混ざりうると添えた。固定の件数・人数の断定は無い。31行目の画像の説明文「先生3人のチップ」は、撮影した画面そのものの説明なので問題ない。
- owner-cannot-see-what ja R022: frontmatter feature が2つの欄を書き分けた。`render.ts:1579-1616` と本文40行目に一致。

### editorial（school-data ja / en）
- ja の Excel → スプレッドシート（3か所）: 置き換え済み。28行目「Excelで開くと日本語がそのまま読めます」（BOM で Excel 固有に効く話）と30行目の画面の引用は「Excel」のまま。正確。
- 30日の記述（ja 49行目・en 49行目）: 「製品の案内では…としています」と出どころを示し、終了前の確認を促す形。画面文言と利用規約にある30日と矛盾せず、終了後の画面や削除の実装は断定していない。日英の内容は同じ。

## 参考（指摘にはしない）

- nobody-is-assigned の最初の一歩（日英）は、ダッシュボードの欄が出たら「課題の種別の担当」を見直す、と書いている。欄には課題のほか、次回予約などのタスクも入る（`render.ts:1571-1572`）。ただし欄の中に「この種類の担当が講師欄にいません。カルテを開いて担当を付けてください」と出て、読者がすることは同じなので、誤った行動にはつながらない。好みの言い換えに当たるため、指摘には上げない。

## 集計

| 記事 | 言語 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|
| homework-reminders-typed-one-by-one | en | 0 | 0 | 0 | 公開更新可 |
| lesson-phrases-disappear-when-the-zoom-call-ends | en | 0 | 0 | 0 | 公開更新可 |
| new-teachers-share-the-owners-login | ja | 0 | 0 | 0 | 公開更新可 |
| new-teachers-share-the-owners-login | en | 0 | 0 | 0 | 公開更新可 |
| nobody-is-assigned-to-each-student | ja | 0 | 0 | 0 | 公開更新可 |
| nobody-is-assigned-to-each-student | en | 0 | 0 | 0 | 公開更新可 |
| nobody-knows-who-checked-the-homework | ja | 0 | 0 | 0 | 公開更新可 |
| nobody-knows-who-checked-the-homework | en | 0 | 0 | 0 | 公開更新可 |
| owner-cannot-see-how-full-next-month-is | ja | 0 | 0 | 0 | 公開更新可 |
| owner-cannot-see-how-full-next-month-is | en | 0 | 0 | 0 | 公開更新可 |
| owner-cannot-see-what-each-teacher-is-holding | ja | 0 | 0 | 0 | 公開更新可 |
| school-data-locked-inside-the-app | ja | 0 | 0 | 0 | 公開更新可 |
| school-data-locked-inside-the-app | en | 0 | 0 | 0 | 公開更新可 |
| 合計 | | 0 | 0 | 0 | |

## 未確認の範囲
- 本番の `CALENDAR_FEED_SECRET` の状態。修正後の文はどちらの状態でも正しい。
- 英語表示での監査ログ「担当コーチ追加／解除」と「・未登録」。本文は日本語ラベルに英訳を添えた書き方で、断定していない（前回と同じ）。
- 共有デモの日中の状態（招待中の行・予約・届いた課題の件数）。本文は条件つきで書かれている。
- YAML の解析は、Codex の「174ファイルで解析を確認」を引き継いだ。今回は目視で、対象ページの frontmatter の引用符が閉じていることだけを確かめた。
