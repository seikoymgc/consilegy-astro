# 2026-11-20 監査 最終追加確認：体験・頻度の断定の削除（12ページ）

- 対象: `../audit-2026-11-20/final-experience-paths.json` の12ページ（日英6記事）
- 変更記録: `../audit-2026-11-20/experience-claim-corrections.json`（18件）
- 範囲: 今回の削除と表現修正だけ。既存の機能の事実は14バッチでレビュー・再レビュー済みのため見ていない
- 方法: 現在の原稿と `../audit-2026-11-20/before/` の修正前原稿をファイルで読み比べた。**実機（製品画面・公開サイト）での確認ではない**
- 機械可読の結果: `../audit-2026-11-20/final-experience-findings.json`

## 結論

Major 2件、Minor 2件。which-automations（日英）は修正必須、ほかの10ページは公開更新可。

| ページ | Critical | Major | Minor | 判定 |
|---|---|---|---|---|
| ja/en business-cards-stay-in-the-drawer | 0 | 0 | 0 | 公開更新可 |
| ja/en chat-threads-stay-on-personal-phones | 0 | 0 | 0 | 公開更新可 |
| ja/en meeting-notes-stay-in-the-notebook | 0 | 0 | 各1 | 公開更新可 |
| ja/en online-meetings-stay-in-the-speakers-head | 0 | 0 | 0 | 公開更新可 |
| ja/en too-many-screens-for-staff-to-learn | 0 | 0 | 0 | 公開更新可 |
| ja/en which-automations-to-turn-on-first | 0 | 各1 | 0 | 修正必須 |

## 指摘

### EXP-001 / EXP-002（Major・事実）which-automations の pain に、本文で消した二択が残っている

本文では「結末は2つしかありません」「2週間後に全部OFF」を消し、「避けたいのは〜」に改めた。ところがフロントマターの `pain` には、同じ二択がそのまま残っている。

- ja:6 「ゼロのまま止まるか全部ONにして全部切る」
- en:6 「so they either stay at zero or turn everything on and then turn everything off」

`pain` は `src/components/CrmMediaArticle.astro:24,37` で meta description と JSON-LD の description に入るので、検索結果にそのまま出る。本文と説明文が食い違ううえ、今回消した排他的な結論が検索結果側に残る。

修正案（本文19行目の言い方に揃え、二択に限定しない）:
- ja: 「自動化の一覧を前に、何が自分の商売に要るか判断できない。1本もONにできないまま時間がたったり、まとめてONにして通知を確かめる負担が増えたりする」
- en: 「Faced with the automation library, the admin cannot tell what their business needs. Automations stay off while time passes, or so many go on that checking the notifications becomes another job」

OGP画像の文言が `pain` 由来でないかは今回見ていない。title は変わらないので、OGPの差し替えは不要の見込み（未検証）。

### EXP-003 / EXP-004（Minor・編集）meeting-notes の置き換え文が、前後の論理とつながらない

28行目は「営業に『ノートをやめて直接打て』と言うのは無理筋」の理由を言う位置。修正前は「会議中に打つ人は話を聞いていない」が理由だった。置き換え後の「会話を止めて入力し直す必要はありません」／「interrupt the conversation to re-enter notes」は、「し直す／re-enter」のせいで会議後の打ち直しの話になり、次の文の「ノートからシステムまでの15分」と同じものを指してしまう。

修正案（一律の断定は戻さず、助言のまま「し直す」だけ外す）:
- ja: 「記録のために、会話を止めてまで画面に打ち込む必要はありません。」
- en: 「There is no need to stop the conversation to type into a screen.」

## 問題なしと判断したところ

- **削除による文脈切れ**: business-cards・chat-threads・online-meetings・too-many-screens・meeting-notes の冒頭の段落は、削除した1文を前提にした指示語や後段の参照がなく、場面描写から見出しへそのまま続く。修正前の meeting-notes にあった「これも特定の会社の話では」の「これも」も一緒に消えている。削除跡は空行が2行残るだけで、Markdownの表示には影響しない
- **which-automations の本文**: 「避けたいのは〜」→ 見出し「増やすより減らす方が難しい」→「止めてよいかを関係者に確認する手間」の流れはつながっている。「私は上限を8本に置いています」は筆者の方針で、実績の主張ではない。日英の言い方も一致している
- **日英の矛盾**: 18件の置き換えは、日英で同じ箇所が同じ趣旨で処理されている
- **新しい無根拠な主張**: 置き換え文4組（which-automations 2組、meeting-notes 1組の日英）に、新しい体験・数字・期間は入っていない。消した体験を弱めた体験として作り直した箇所もない
- **ほかの担当の訂正との整合**: business-cards の展示会自動化の段落と動画の削除（`additional-corrections.json`、batch-02-R001）は現在の原稿に反映済みで、今回の削除とぶつからない。12ページにCSVの記述はなく、権限の記述は which-automations の「このボタンはオーナーと管理者にだけ出ます」だけで、今回の修正では触れていない

## 範囲外の観察（判定には含めない）

- **setup-takes-the-whole-first-day（日英）の18行目に、同じ種類の文が残っている。** 「CRMの導入支援を8年やってきて、止まる導入の多くは、使い始める前の設定で止まっていました」／「In eight years of CRM implementation work, most of the rollouts I saw stall did so in setup」。今回の対象12ページに入っていない。同じ基準で揃えるなら、これも対象に加える必要がある
- business-cards の「多くの現場では／In most teams」（28行目）と、which-automations の「大抵1本で済みます／usually turns up exactly one」（64行目）は、一般的な傾向や予測として書かれていて、筆者の体験として断定していないため指摘にしなかった
- too-many-screens の35行目は、日本語が「小さな会社ほど兼任が多い」、英語が「In a small company most people wear two hats」で、英語のほうが強い言い方になっている。今回の修正とは関係ない
