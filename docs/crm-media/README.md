# Revenue CRM 使い方メディア（consilegy.com/crm/media/）

作成: 2026-09-27。2026-09-30 に `crm/docs/media/README.md` からこちらへ移した（公開の実体と同じリポジトリに置くため。crm 側の同名ファイルは main に入っておらず、日次タスクが読めなかった）。

記事本体は `src/content/crm-media/{ja,en}/<slug>.md`。ページは `src/pages/crm/media/` と `src/pages/en/crm/media/`。共通定義は `src/lib/crm-media.ts`。

## 決めたこと

- URL は読者で分ける（2026-09-30）
  - `/crm/media/` … 入口。両方の最新3本ずつ
  - `/crm/media/b2b/` … 法人営業向けの一覧。記事は `/crm/media/b2b/<slug>/`
  - `/crm/media/b2c/` … スクール・教室向けの一覧。記事は `/crm/media/b2c/<slug>/`
  - 英語は `/en/crm/media/…` で同じ構成
  - 旧 `/crm/media/<slug>/` からの転送は置かない（公開2日で移したため）
- 製品LP（/crm/）と同じ階層に置く。サブドメインに分けない（検索の評価を分散させない）
- 線引き: media.consilegy.com は「なぜ起きるか」（構造の話・製品名を出さない）。ここは「この画面でこう消える」（Revenue CRM の操作まで書く）。記事末尾で相互リンク
- 公開は main へ push（GitHub Actions が CORESERVER へ rsync）。push 前に `npm run build` を通す
- 出所（βパートナーの発言・支援先の場面）は匿名化する。社名・人名・導入社数は書かない
- 「AI搭載」は使わない。AI は「何をするか」で書く。読み取りは下書きまでで、確定は人が押す（「全自動」と書かない）
- 「ノマド」という語は使わない。日本語本文にエムダッシュ（—）を使わない
- 操作動画（crm リポジトリ `docs/product/操作動画_台本.md` の9本）は記事からリンクする。記事は痛み起点、動画は操作手順
- 画面名・ボタン名・仕様は crm リポジトリのコードで確認できたものだけ書く。効果の数字は出典が無ければ書かない

## 1本の型

1. 場面（誰が、いつ、何で困るか。実際にあった形に寄せて、固有名は消す）
2. それが会社に残す損失（数字を1つは置く。置きの前提なら「仮に」と書く）
3. Revenue CRM のどの画面・ボタンで消えるか（画面名とボタン名は実装どおり。根拠を frontmatter に残す）
4. 最初の一歩（今週できる1つだけ）
5. CTA は1つ。`https://crm.consilegy.com/demos`（メールアドレスだけで試せる）

長さは日本語 1,200〜1,800 字。H2 の直下に結論を1〜2文で置く（検索と AI 引用のため）。英語版は翻訳ではなく、同じ痛みと画面を英語圏の読者向けに書き直す。

## frontmatter

文字列はすべて二重引用符で囲む（YAML の解析エラー防止）。

```
title:        記事タイトル
slug:         英語スラッグ（日英で同じ。痛みを表す文）
lang:         ja | en
category:     input | setup | operate   （入力する仕事／設定する仕事／運用を回す仕事）
segment:      b2b | b2c                 （どの読者の一覧に載るか。URL になる）
edition:      b2b | school              （製品のエディション）
pain:         痛みを一文で
feature:      対応する機能名
screens:      画面・ボタン名（実装どおり）
help_slug:    製品内ヘルプの slug（product_help_articles）。無ければ省略
video:        操作動画の番号（台本の番号）。無ければ省略
sources:      根拠にした crm リポジトリの実装ファイル
date:         公開日
author:       山口聖子（英語は Seiko Yamaguchi）
featured:     サイドバー「よく読まれている記事」の順位（1が上）。閲覧数の取り込みまでは手動。日次タスクは触らない
```

## ページ構成（2026-09-30）

- 入口 `/crm/media/`: 見出し → 読者のナビ → 新着記事3枚 → 読者×カテゴリのブロック（3本＋もっと見る）
- 一覧と記事: 本文＋右サイドバー（新着記事5本 → よく読まれている記事5本 → 読者 → カテゴリ）。900px 以下では本文の下
- 背景は白（サイト共通の stone-50 を使わない）
- 「よく読まれている記事」は当面 `featured` の手動順。記事が増えて GA4 に数字が溜まったら、ビルド時に GA4 Data API から過去30日の閲覧数を取る方式に切り替える

## 画像

- アイキャッチは `node scripts/generate-eyecatches.mjs <slug>` で `public/images/crm/media/<slug>.svg` と `en/<slug>.svg` を生成する
- 本文の画面スクリーンショットは `public/images/crm/media/screens/` にあるものだけ使う（`![alt](/images/crm/media/screens/<file>.webp)` と直後の斜体キャプション）。無ければ画像なしで公開してよい。撮影は山口が撮影用ワークスペースで行う

## 予定: 法人営業（segment: b2b）12本

公開済みかどうかは `src/content/crm-media/ja/<slug>.md` の有無で判定する。

| # | category | 痛み | 機能 | slug / 状態 |
|---|---|---|---|---|
| 1 | input | 名刺の束が引き出しに残ったまま担当が辞める | 名刺を撮る | business-cards-stay-in-the-drawer（公開） |
| 2 | operate | 「先方の社内調整中」が3か月続く商談を誰も見ていない | 先方待ち／パイプライン診断 | waiting-on-the-customer-for-three-months（公開） |
| 3 | setup | 自動化175本を渡されて1本もONにできない | どれをONにするか診断 | which-automations-to-turn-on-first（公開） |
| 4 | input | 商談後の手書きメモが打ち直されず消える | 手書き取り込み | |
| 5 | input | Zoom 商談の内容が話した人の頭にしか残らない | 会議ツール連携 | |
| 6 | input | LINE・Chatwork のやり取りが個人の手元に残る | チャット貼り付け読み取り | chat-threads-stay-on-personal-phones（公開） |
| 7 | input | Excel の顧客リストから移れない | CSV インポート／HubSpot 取り込み | customer-list-stuck-in-excel（公開） |
| 8 | setup | CRM を入れたら「設定」から始まり空のまま止まる | 業種別エディション | |
| 9 | setup | 画面が多すぎてスタッフが覚えられない | 役割別UI／AIエージェントに聞く | too-many-screens-for-staff-to-learn（公開） |
| 10 | setup | 一斉メールと個別メールの送り方が分からない | 送信待ちの下書き／AIメール／Google 連携／送信ドメイン／リスト／「HubSpotに送る」 | bulk-and-one-to-one-email-get-mixed-up（公開。2026-10-08。個別は「営業連絡してよい」の記録が無いと送れず、一斉はフォームで同意した人にしか届かない前提で書いた） |
| 11 | operate | 経営者が「あの案件どこまで？」を人に聞かないと分からない | ホームの4つの数字／フォーキャスト | asking-people-where-the-deal-stands（公開） |
| 12 | operate | 請求と顧客情報が別の場所にある | Stripe 連携 | |

## 予定: スクール・教室（segment: b2c、edition: school）10本

画面の一次情報は crm リポジトリの `src/app/school-v1/`（students / lessons / schedule / holidays / billing / report / assessments / calls / coaches / knowledge / tasks / integrations）と `src/app/school/`（体験申込・招待）。画面名とボタン名は必ずコードで確認してから書く。確認できない機能の記事は書かない。

| # | category | 痛み | 機能（確認する場所） | slug / 状態 |
|---|---|---|---|---|
| 1 | input | 問い合わせが LINE に埋もれて、返事をしたかどうかも分からなくなる | 生徒ごとの LINE 履歴（students/[id]/line） | |
| 2 | input | 体験レッスンで聞いた話が先生の頭にしか残らない | 入会時ヒアリング（文字起こしを貼って項目に振り分け） | |
| 3 | input | レッスンで何をやったかが引き継がれず、担当が替わると最初からになる | レッスン記録（school-app。生徒のカルテ「＋ レッスン記録」） | lesson-notes-vanish-when-the-teacher-changes（公開。2026-10-08。school-v1 では保留だったが、school-app の記録フォームを根拠に書いた。カルテの履歴は sort 順で40件まで、画面から入れた行は全部 sort 0 なので並び順は要実機確認） |
| 4 | input | 生徒名簿が Excel と紙にあって、どれが最新か分からない | 生徒の取り込み（students/import） | 保留（2026-10-03: CSV で入るのはコンタクトだけで、生徒一覧が読む b2c_student_details が作られない。確認できるまで書かない） |
| 5 | setup | コースと料金と休校日を入れるだけで初日が終わる | 初期設定（コース・休校日カレンダー holidays・コーチ coaches） | |
| 6 | setup | 体験の申込みフォームと名簿がつながっていない | 体験申込（school-apply）から生徒登録まで | trial-form-not-connected-to-the-roster（公開） |
| 7 | operate | 振替と欠席の管理が先生の手帳にある | 週間スケジュール（schedule） | 保留（2026-10-04: 「振替」は「次回を予約」で入れた予約しか動かせず、もとの枠が週間スケジュールとカレンダー配信に残る。予定の時刻がサーバーの時間帯で作られており実機確認が要る。原稿は _scratch/crm-media-held/。確認できるまで書かない） |
| 8 | operate | 月謝の未納に月末まで気づかない | 請求管理（billing。支払中・支払失敗） | |
| 9 | operate | 退会の兆候（課題が止まる、LINE の返事が止まる）に気づくのが遅れる | ホーム「今すぐ対応」／生徒ページ「課題の提出」／生徒一覧の状態（在籍・体験中・卒業間近・休会・卒業） | signs-of-quitting-noticed-too-late（公開） |
| 10 | operate | 月次レポートを先生が夜に書いている | 月次レポートの下書き（report/[studentId]） | 保留（2026-10-07: レポートの行（b2c_reports）を作る処理が seed スクリプト以外に見当たらず、行が無いと「再生成」「確定する」のボタンが出ない。確認できるまで書かない） |
| 11 | input | テストの結果が紙のファイルにあって「伸びていますか」に答えられない | 成績（assessments） | 保留（2026-10-07: 下の「school-v1 について」のとおり、画面に到達する経路が確認できない。原稿は _scratch/crm-media-held/test-results-stay-in-paper-files.{ja,en}.md） |
| 12 | operate | レッスンの予定を先生ごとのカレンダーに手で入れ直している | Googleカレンダー連携（school-app） | 保留（2026-10-07: 予約の変更・取消の処理が無く、古い予定が残る。「スケジュール」画面と購読URLは bey_schedule を読み、予約（bey_bookings）とつながっていない。本番で Google 連携が通るかも未確認。原稿は _scratch/crm-media-held/lesson-schedule-retyped-into-calendars.{ja,en}.md） |
| 13 | setup | 先生に生徒の記録は見せたいが、月謝の金額までは見せたくない | 権限管理（school-app。請求の閲覧を役割で閉じる） | teachers-see-fee-amounts-too（公開） |

### school-v1 について（2026-10-07 のレビューで判明。要確認）

crm origin/main（db20fc1）では、`src/app/school/` にあるのは `page.tsx / invite / m / trial` だけで、現行のスクール版は `src/school-app/`（コミット d6651d8「スクール版をBEYONDERSのコピーにする」2026-09-14）。`src/app/school-v1/` の画面は内部リンクが `/school/more`、`/school/assessments/new`、`/school/students/<id>` を指しているが、そのルートも `/school/*` を school-v1 に書き換える設定（next.config.ts、proxy.ts）も見当たらない。つまり school-v1 を根拠にした記事は、読者がデモで同じ画面に到達できない可能性がある。公開済みの b2c 記事も同じ根拠なので、山口が実機で確認し、b2c の一次情報をどこに置くか（school-v1 か school-app か）を決めるまで、b2c の新規記事は書かない。

2026-10-07 追記: 山口の指示で、#13 は現行の school-app（`src/school-app/`、`src/app/api/school-app/`）だけを根拠に書いて公開した。以後 b2c は school-app を一次情報にする。レビューで分かった school-app の前提:
- 権限管理の16個のチップのうち、画面と操作に効くのは「請求」の閲覧と、生徒・レッスン・タスクの作成／編集。「削除」と生徒・タスクの「閲覧」はどこからも参照されていない
- 新しく作ったスクールで `school_role_permissions` と `school_users` の初期行を入れる処理が、デモの種データと招待以外に見当たらない。行が無い間は fallback で金額は管理者のみだが、画面のチップは全部OFFに見え、最初の1タップで `can_view=true` の行ができる。実機確認が要る
- 予約（bey_bookings）は追加だけで、変更・取消の処理が無い
- 英語表示は辞書にある語だけが置き換わる（「閲覧」は "Viewer" と出る）

## 日次タスクの回し方

- 毎朝2本（日英セット）。法人営業（b2b）1本とスクール・教室（b2c）1本
- 各 segment の予定表で、まだ公開されていない一番上のトピックを書く
- アイキャッチは Recraft で場面の写真を1枚ずつ生成し `public/images/crm/media/hero2/<slug>.webp` に置く。Chrome が動いていない朝は文字SVGで公開し、後日補う
- 予定表が尽きたら、製品内ヘルプ（crm `supabase/migrations/146_product_help_articles_seed.sql`）、操作動画の台本、βパートナーのフィードバックから次の痛みを選び、この表に行を足す

## 未決

- 記事内スクリーンショットの撮影（撮影用ワークスペース）。スクール版の画面は未撮影
- 製品内ヘルプへの流し込み（同じ原稿を `product_help_articles` に入れるか、リンクだけにするか）
