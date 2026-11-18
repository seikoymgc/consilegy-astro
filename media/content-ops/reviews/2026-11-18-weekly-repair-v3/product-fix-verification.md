# 本体ガイド4組の仕様照合と非接続スタブ検証

実施日：2026-11-18。**AIによる仕様照合。独立した人間のレビュー／本人の全文OKではない。チェックリストv3の（人）項目を合格にしない。** 記事・製品ファイルの編集、commit、公開、デモへの保存・LINE送信・DB実書込みは行っていない。

## 対象と実行環境

- 製品clone：`/Users/seikoyamaguchi/Claude/crm`
- `git fetch origin main` 実行成功。前回と同じ最新remote：`c13a4e85bcbc6dd5714ed9000e3911a2136304f1`。
- `git show <SHA>:<path>` で実コードを読む。作業ツリーには手を入れていない。
- 検証用ファイル：`/tmp/consilegy-week-audit/verify-product-flows.cjs`
- 再実行：`node /tmp/consilegy-week-audit/verify-product-flows.cjs`
- 当該SHAのTypeScriptを、clone内の既存TypeScriptライブラリでメモリ上にCommonJS変換。`vm` 内で実関数を実行し、DB・認可・LINE返信・監査・資格情報・プロフィール取得はメモリのスタブへ置換した。外部API呼出し、実DB、LINE送信はない。
- 認可は成功スタブなので、このテストは認証・実際のロール制御・RLS・DB制約・migration適用のテストではない。ブラウザUIや本番デプロイの動作再現でもない。

## 1. 講師のLINE通知

### 新規連携の副作用候補

実際の `src/app/api/school-app/line/webhook/route.ts` の内部 `handleEvents` 関数を、署名が一致するダミーイベントで呼び出した。

1. 空の生徒テーブル、未連携のスタッフ1人をスタブで用意。
2. 先生のLINE user IDによる `follow` イベントを渡す。
3. `findOrImportStudent` が生徒を1件作成したことをassert。
4. 同じIDでスタッフの `BEY-TESTCODE` を送るテキストイベントを渡す。
5. `bey_users.line_user_id` がそのIDになり、通知モードが `immediate` になることをassert。
6. 先に作られた生徒1件が残ることをassert。

**結果：スタブ環境では、友だち追加→スタッフコード送信によって、スタッフへの紐付けと別に生徒レコードが残る経路を確認。** 単なるコメントからの推測よりは証拠が進んだが、実機・本番での再現ではない。イベント到達条件、教室固有の環境、DB側の追加処理は未検証。製品不具合や本番の名簿汚染を確定したとは報告しない。

記事の対象を既にLINE連携済みの講師へ限定し、新規連携のコード発行・友だち追加・送信の案内を外す方針は、この未解決経路を読者へ勧めないための対応として妥当。

### 既存連携済み講師の通知モード変更

実際の `src/app/api/school-app/users/line/route.ts` の `PATCH` を、連携済みスタッフ1人に対して実行した。`immediate`、`all`、`daily`、`off` の4値を順に渡し、各回で200応答と `bey_users.notify_mode` の更新をassertした。

**結果：このPATCHはスタッフの通知設定と監査処理を更新するだけで、生徒テーブルへのアクセス・新規生徒作成・LINE返信は発生しないことをスタブで確認。** 後で課題が届いた際の通知は別処理であり、モード変更に副作用が一切ないという意味ではない。全件・毎晩への変更は、以後の通知対象や通数に影響する。

実装から確認した画面・操作：

- `src/school-app/lib/render.ts` 1325行以降のユーザー画面。`line_user_id` があるユーザーに `LINE ✓ 通知:担当ぶん` 等のボタンを表示。未連携ユーザーは別の `🔗 LINE通知` ボタンで、今回の記事からは対象外にする。
- 画面入口は「ユーザー」、見出しは「ユーザー管理」。スマートフォン側の「もっと」にもユーザー入口がある。英語では `Users`／`User management`。
- 表示・APIとも `ADMIN = ["owner", "admin"]` に制限。`render.ts` は `ADMIN.includes(role)` を `canNotify` に渡す。APIは `guard(ADMIN)`。内部teacher（管理部）や講師フラグだけでは操作できない。実装の役割名を曖昧な「設定権限がある人」へ広げない。
- `MockShell.tsx` 1504行以降：ボタンを押すたび `immediate → all → daily → off → immediate`。JA表示は「担当ぶん → 全件 → 毎晩 → 切」。途中のモードも押すたび即保存される。別の保存ボタンはない。
- APIエラー／通信エラーでは画面のモード表示を元へ戻し、アラートする。成功時のUI表示は先に更新されるので、確定を確認したい場合は再読み込みして保存結果を確かめる。
- 隣の「解除」は別のDELETE処理で、今回の対象外。新規コードのボタンや解除を押す手順を混ぜない。

### 英語版のラベル注意

`src/school-app/lib/html-en.ts` の実際の `tr` 関数を実行した結果：

| 入力ラベル | 初期HTMLの英語化結果 |
|---|---|
| LINE ✓ 通知:担当ぶん | LINE ✓ Alerts: my students |
| LINE ✓ 通知:全件 | 日本語のまま |
| LINE ✓ 通知:毎晩 | 日本語のまま |
| LINE ✓ 通知:切 | 日本語のまま |
| ユーザー管理 | User management |

また、クリック後の `MockShell.tsx` は `LINE ✓ 通知:${label}` の日本語文字列でボタン本文を更新する。英語版記事で `All / Nightly / Off` が実際のボタン表示だと断定しない。必要なら日本語の実ラベルを併記して意味を英語で説明する。ブラウザ上での最終表示は未確認。

## 2. フォームで送信された用件を読む場所

確認したコード：

- `src/app/(dashboard)/forms/[id]/form-tabs.tsx`
- 同 `page.tsx`
- 同 `form-analytics.tsx`

タブはJA「送信した人（件数）」、EN `Submissions (count)`。英語の表カード見出しは `Who submitted` であり、タブ名とは異なる。

`page.tsx` は `tab=submissions` を読み、`form_submissions` とフォームのフィールド定義を `FormAnalytics` へ渡す。同 `form-analytics.tsx` 303〜336行では、各フィールドの `label` を列見出し、各送信の `data[field_key]` を値として表示する。したがって追加案は以下。

- JA：対象のフォームで「送信した人」タブを開き、作成した「お問い合わせの種類」の列で回答を読む。
- EN：Open the form’s **Submissions** tab and read the answer under the label you gave the inquiry-type field.

ユーザー作成のラベルはそのまま表示される。フォームの設問が日本語なら、EN画面でもそのラベルが自動的に英訳されると書かない。フィールドキーで紐付くので、`inquiry_type` は同じキーで保存された回答を読むための例で、任意の既存回答が自動分類される機能ではない。

今回コード照合のみ。実際の送信・回答の作成・公開画面の閲覧は行っていない。

## 3. 卒業後プラン単価の空欄0円

`MockShell.tsx` の価格編集から実際の式 `Number(input.replace(/[^\d]/g, ""))` を抽出し実行。

- 空文字 `""` → `0`
- `"5000"` → `5000`
- `"1.5"` → `15`（小数点を除去）

さらに実際の `src/app/api/school-app/grad-plan/route.ts` の `POST` をメモリDBで実行し、0を受け取ると200応答、対象プランのamountが0へ更新されることをassert。APIの許容範囲には0が含まれる。

**空欄で決定すると0円として保存され得るという注意は、現行コードとスタブ実行の両方で裏付けられた。** キャンセルは `input == null` でreturnし、空欄確定とは異なる。記事からこの注意を削らない。ユーザーが有効な半角整数を入力する案内は妥当。

`student/grad-plan/route.ts` も読んだ。新規加入は `bey_grad_plans.amount` を読むため、新しい単価は次の加入登録の記録へ渡る。既存subscriptionsの一括更新やPayPalの実課金は、この処理にはない。今回、実DBで料金を変更したわけではない。

## 4. 商談ステージの訳の例

`src/lib/deals-i18n.ts`、`src/lib/label-i18n.ts`、`src/lib/pipeline-stages.ts` を読む。実際の純粋関数を実行し、標準名「アプローチ」→英語 `Prospecting`、独自名の `name_i18n.en` があればその文字列を優先表示することをassertした。

独自の「稟議待ち」を `Internal approval` と呼ぶ例は、製品の既定訳ではない。さらに `Internal approval` だけでは「待ち」が落ち、自社内の承認なのか買い手側なのかも曖昧。

記事の最小修正案：

> 例えば、顧客側の社内承認を待つ状態を「稟議待ち」と呼んでいるなら、英語では「Awaiting customer approval」と表す、という例です。会社で定めた状態に合う言葉を決めます。

仮に自社側の承認待ちなら別の訳が必要。訳を一律の正解にせず、「同じ状態・同じ承認主体を指す」条件を残す。これは言語と業務意味のAI点検であり、英語の専門家や本人の承認ではない。

## 人間レビューへ引き継ぐもの

- 新規講師LINE連携の本番再現は未実施。今回の原稿は既存連携済みのモード設定に限定する案を検討できる。
- その限定稿でも、実際の通知到達・通数消費・同時操作は実機未検証。コード照合の対象と成功した実機テストを混同しない。
- フォーム回答タブ、料金入力、ステージ訳の案は、完成稿とともに人が全文を確認する。今回の結果を（人）の合格や本人監修として扱わない。
- 本番公開は行っていない。チェックリストv3に従う実行担当の確認待ち。
