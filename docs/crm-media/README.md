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
| 7 | input | Excel の顧客リストから移れない | CSV インポート／HubSpot 取り込み | |
| 8 | setup | CRM を入れたら「設定」から始まり空のまま止まる | 業種別エディション | |
| 9 | setup | 画面が多すぎてスタッフが覚えられない | 役割別UI／AIエージェントに聞く | |
| 10 | setup | 一斉メールと個別メールの送り方が分からない | Google 連携／送信ドメイン／HubSpot へリスト送信 | |
| 11 | operate | 経営者が「あの案件どこまで？」を人に聞かないと分からない | ホームの4つの数字／フォーキャスト | asking-people-where-the-deal-stands（公開） |
| 12 | operate | 請求と顧客情報が別の場所にある | Stripe 連携 | |

## 予定: スクール・教室（segment: b2c、edition: school）10本

画面の一次情報は crm リポジトリの `src/app/school-v1/`（students / lessons / schedule / holidays / billing / report / assessments / calls / coaches / knowledge / tasks / integrations）と `src/app/school/`（体験申込・招待）。画面名とボタン名は必ずコードで確認してから書く。確認できない機能の記事は書かない。

| # | category | 痛み | 機能（確認する場所） | slug / 状態 |
|---|---|---|---|---|
| 1 | input | 問い合わせが LINE に埋もれて、返事をしたかどうかも分からなくなる | 生徒ごとの LINE 履歴（students/[id]/line） | |
| 2 | input | 体験レッスンで聞いた話が先生の頭にしか残らない | 入会時ヒアリング（文字起こしを貼って項目に振り分け） | |
| 3 | input | レッスンで何をやったかが引き継がれず、担当が替わると最初からになる | レッスン記録（lessons/log） | 保留（2026-10-03: 記録画面は「未記録」のレッスンからしか開けず、その行を作る処理が crm origin/main に見当たらない。確認できるまで書かない） |
| 4 | input | 生徒名簿が Excel と紙にあって、どれが最新か分からない | 生徒の取り込み（students/import） | 保留（2026-10-03: CSV で入るのはコンタクトだけで、生徒一覧が読む b2c_student_details が作られない。確認できるまで書かない） |
| 5 | setup | コースと料金と休校日を入れるだけで初日が終わる | 初期設定（コース・休校日カレンダー holidays・コーチ coaches） | |
| 6 | setup | 体験の申込みフォームと名簿がつながっていない | 体験申込（school-apply）から生徒登録まで | trial-form-not-connected-to-the-roster（公開） |
| 7 | operate | 振替と欠席の管理が先生の手帳にある | 週間スケジュール（schedule） | 保留（2026-10-04: 「振替」は「次回を予約」で入れた予約しか動かせず、もとの枠が週間スケジュールとカレンダー配信に残る。予定の時刻がサーバーの時間帯で作られており実機確認が要る。原稿は _scratch/crm-media-held/。確認できるまで書かない） |
| 8 | operate | 月謝の未納に月末まで気づかない | 請求管理（billing。支払中・支払失敗） | |
| 9 | operate | 退会の兆候（欠席が続く、返信が遅い）に気づくのが遅れる | 生徒一覧の状態（students。体験中・支払中・休止中・解約済） | |
| 10 | operate | 月次レポートを先生が夜に書いている | 月次レポートの下書き（report/[studentId]） | |

## 日次タスクの回し方

- 毎朝2本（日英セット）。法人営業（b2b）1本とスクール・教室（b2c）1本
- 各 segment の予定表で、まだ公開されていない一番上のトピックを書く
- アイキャッチは Recraft で場面の写真を1枚ずつ生成し `public/images/crm/media/hero2/<slug>.webp` に置く。Chrome が動いていない朝は文字SVGで公開し、後日補う
- 予定表が尽きたら、製品内ヘルプ（crm `supabase/migrations/146_product_help_articles_seed.sql`）、操作動画の台本、βパートナーのフィードバックから次の痛みを選び、この表に行を足す

## 未決

- 記事内スクリーンショットの撮影（撮影用ワークスペース）。スクール版の画面は未撮影
- 製品内ヘルプへの流し込み（同じ原稿を `product_help_articles` に入れるか、リンクだけにするか）
