# B2B記事の対象カテゴリ追加 独立レビュー（2026-11-25）

レビュー: Claude（独立レビュー。原稿・実装・CRMは編集していない）
対象: `b2b_categories`（standard 標準 / contractor 請負 / services 継続支援 / reseller 販売代理）、記事と一覧カードの「対象」表示、schema、README・daily-run、B2B日英112ページの分類
一次情報: `../crm-run/src/lib/editions/index.ts` と、そこから辿れるエディション分岐（全件をgrepで洗い出し、記事と突き合わせた）

## 結論

**公開可否: Major 1件を直せば公開可。** 直すまでは `monday-meetings-end-without-deciding-what-to-focus-on` の分類を出さない。
実装（schema・表示・HTML・学校への非表示・日英一致）は問題なし。分類は55組が妥当で、1組だけ一次情報と矛盾する。

| 区分 | 件数 | 対応状況 |
|---|---|---|
| Critical | 0 | なし |
| Major | 1 | 未対応（Codexが修正） |
| Minor | 6 | 未対応。どれも公開を止めない。M-2は代表判断 |

## Major

### M-1 `monday-meetings-end-without-deciding-what-to-focus-on`: 全4カテゴリだが、入口のカードが標準版にしか出ない

- 根拠（実装で確認）: `crm-run/src/components/home/home-workspace.tsx:199` で `isB2B = useEdition() === 'b2b'`、`:357` で `{isB2B && !isEmptyWorkspace && weeklyPlan && (<Link href="/weekly-review" ...>今週の方針を決める →`。請負・継続支援・販売代理（`contractor` / `services` / `reseller`）のホームにはこのカードが出ない。`/weekly-review` へのリンクは他にない（`src` 全体をgrepして、リンク元はこの1か所だけ）。`weekly-review/page.tsx` 自体はエディションを見ないので、URLを直接打てば開くが、記事が案内する操作ではない。
- 記事側: feature・screens・本文30行目・54行目・56行目がすべて「ホームの『今週の方針を決める →』」を入口にしている。本文も「法人営業版のホーム」と書いており、標準版を前提にしている。
- 影響: 請負・継続支援・販売代理の読者に「自分のホームにある」と読ませ、存在しない入口を探させる。
- 修正案: 日英とも `b2b_categories: ["standard"]`。本文は変えなくてよい（本文の前提と分類が揃う）。

## Minor

### M-2 `contract-renewals-noticed-too-late`: 請負を外す根拠が一次情報にない（代表判断の確認事項）

- 依頼の方針どおり「標準・継続支援・販売代理」になっている。ただし `editions/index.ts:119-125` は請負版について「納品後の保守契約が続くので、継続契約も中核に入れる」とし、`defaultAutomations` に `cs-30` を最初からONで入れている。`cs-30` は記事の中心の「契約更新日管理ワークフロー」（`revops/catalog.ts:200`）。請負版は、この記事の機能が最初からONになっている版の1つ。
- 記事の場面は「年間ライセンス」で、請負の保守契約とは言葉が違う。外す理由が「場面の言葉が合わない」なら成り立つ。
- 修正案: 請負を足して4カテゴリにする。場面の言葉を理由に外すなら、READMEの「B2Bの対象カテゴリ」に「場面の言葉で絞った例」として理由を1行残す。どちらにするかは代表判断。
- `customer-goals-get-lost-after-the-deal-closes` の3カテゴリには異論なし（請負版は `cs-23`・`cs-26`・`cs-54` を既定に持たず、成功プランを読む成果レポートの流れが既定にない）。

### M-3 `too-many-screens-for-staff-to-learn`: メニューの項目数は標準版の数（対応不要）

- 本文34行目の「31項目」「営業で21項目」と、営業に加わる15項目の「空き枠カレンダー」「デリバリー」は標準版の数。販売代理は `hiddenNav: ['/delivery', '/resources']` で2つが出ず、請負・継続支援は `coreNav` が役割の絞り込みを越えて残る（`app-sidebar.tsx:74`）ので、数が変わる。
- 本文が「B2B営業のエディションの初期設定では」と範囲を書いているので誤りではない。役割の切り替え自体は全エディション共通（`app-sidebar.tsx:212`、分岐なし）。4カテゴリのままでよい。

### M-4 本文の「法人営業版」と、表示の「標準」が並ぶ（8本）

- 該当: `customer-record-changed-but-nobody-knows-who`、`monday-meetings-...`、`reps-open-the-crm-and-dont-know-where-to-start`、`same-contact-filters-rebuilt-every-morning`、`task-headings-stay-japanese-in-an-english-interface`、`the-marketing-menu-still-follows-someone-elses-workflow`、`waiting-on-the-customer-for-three-months`、`which-automations-to-turn-on-first`。
- 「法人営業版」が、学校以外のB2B全体を指す箇所（監査ログ、保存ビュー、表示言語の翻訳、業務ごとのメニュー）と、標準版だけを指す箇所（既定でONの自動化、ホームのカード）が混ざっている。記事の上に「対象：標準 / 請負 / 継続支援 / 販売代理」が出るようになったので、請負の読者は「法人営業版では」を「標準版だけ」と読みうる。
- 本文の主張は変えない。言い回しを揃えるかはCodexの判断。揃えるなら、B2B全体を指す箇所は「Revenue CRMでは」、標準版だけの箇所は「標準版では」。

### M-5 請負・継続支援では「商談」が「案件」と表示される

- 根拠: `editions/index.ts:115-117`（請負: 案件 / Project）、`:155-158`（継続支援: 案件 / Engagement）、`editions/nouns.ts`（`{deal}` を含む画面の文言とタスク名が置き換わる）。
- 4カテゴリの記事の多くが「新規商談」「商談一覧」など標準版の画面名で書いている。請負・継続支援の読者には画面名が1語ずれる。機能の有無は変わらないので分類は絞らない。`empty-crm-stalls-at-setup` だけは本文45行目でこの違いを説明している。
- 修正案: 記事ごとに直さず、記事の決め事か表示で1か所吸収する（例: READMEに「画面名は標準版で書く。請負・継続支援では『商談』が『案件』になる」と書き、必要なら対象表示の近くに同じ注記を置く）。

### M-6 対象表示のフォントが 14px にならない

- `CrmMediaB2BCategories.astro:9` は `.b2b-categories { font-size:.875rem }` だが、`src/styles/global.css:560-568` の `#main-content :is(p, ...):not(...) { font-size: 1rem }` が `#main-content` のID指定で勝つ。メディアのレイアウトにも `id="main-content"` がある（`BaseLayout.astro:132`）。結果、対象表示は16pxで、14pxの日付・カテゴリの行より大きく、カードでは題名（18px）に近い大きさになる。
- AGENTS.md の決め事ではラベルは14pxでよい。修正案は、除外リストに `.b2b-categories` を足すか、要素を `<p>` から `<div>` に変える。

### M-7 将来記事: 更新履歴のエディションに「継続支援」がない

- `src/data/crm-updates.ts:10` の `UpdateEdition` は `'all' | 'b2b' | 'contractor' | 'reseller' | 'school'` で、`services` がない。`b2b` は標準版を指す。daily-run の手順2は「対象エディション」をここで照合させているので、更新履歴の `editions` をそのまま写すと、継続支援が全記事から抜けるか、`b2b` を4カテゴリ全体と取り違える。過去のレビュー（2026-11-20、2026-11-23）も更新履歴の `b2b/contractor/reseller` を根拠に引いている。
- 修正案: READMEの「B2Bの対象カテゴリ」に対応を1行足す。「更新履歴の b2b＝standard、contractor＝contractor、reseller＝reseller。継続支援（services）は更新履歴にないので、`crm-run/src/lib/editions/index.ts` で請負版と同じコードかを見て決める」。
- あわせて: `src/content.config.ts:118` のコメントが原稿の決め事の場所を「crm リポジトリの docs/media/README.md」としているが、`crm-run/docs/media/README.md` は存在しない。実際は本リポジトリの `docs/crm-media/README.md`。

## 問題なしと確認したもの

| 項目 | 結果 | 根拠 |
|---|---|---|
| schema（B2B必須・学校禁止・重複禁止） | 正しく動く。`segment` の既定が `b2b` なので、`segment` を書き忘れた新しい記事も分類なしでは通らない。空配列は `.min(1)` で落ちる | `content.config.ts:135-158` |
| 全件の付与 | B2B 112本すべてに配列あり。学校82本はどれにもなし。合計194本で、`segment` のない記事はない | `src/content/crm-media` 全件をgrep |
| 日英の配列一致 | 56組すべて一致（4カテゴリ54組、3カテゴリ2組） | 同上 |
| 学校への誤表示 | 表示側でも `segment === 'b2b'` のときだけ出す。ローカルの `dist/crm/media/b2c` に出力なし | `CrmMediaB2BCategories.astro:5` |
| HTML | 記事とカードで `<p class="b2b-categories"><span>対象：</span><span>標準</span><span> / 請負</span>…</p>` の形。カードは `<a>` の中に `<div>` と `<p>` を置く形で、HTML5として正しい。入れ子のリンクなし。英語は "For: " | ローカルの `dist`（生成日時は未確認）の日英各1ページ |
| 表示の場所 | 記事上部、一覧カード（ホーム・一覧・関連記事）。ホームの行リスト（`CrmMediaRow`）とサイドバーには出ない。カードという依頼の範囲どおり | `CrmMediaCard.astro:12`、`CrmMediaArticle.astro:63` |
| エディション分岐の全件 | `crm-run/src` の分岐をすべて洗い出して記事と突き合わせた。記事の中心機能を版で消すのは M-1 の1件だけ。ほかは見た目（標準版の配色）、販売代理の粗利列と週次ダイジェストの更新欄の追加、学校の除外で、4カテゴリの記事を絞る理由にならない | `home-workspace.tsx`、`app-sidebar.tsx`、`settings-index.tsx`、`digest/weekly.ts`、`products-view.tsx`、`subscriptions-view.tsx` ほか |
| 設定で版ごとに出す項目 | データの書き出しと停滞商談の深掘り報告は、4つのB2B版すべてに出る | `export/full-export.ts:21`、`agent/wakeSettings.ts:13` |
| 業務の切り替え（役割別メニュー） | 全エディションで出る | `app-sidebar.tsx:212` |
| `empty-crm-stalls-at-setup` | 初回画面の5つの選択肢と、版ごとの違い（呼び名・販売代理のメニューと確率列）を本文で説明している。4カテゴリが正しい | 本文37・45行目、`editions/index.ts` |
| `which-automations-to-turn-on-first` | 診断は全版共通。既定でONの3本は「法人営業版の新しいワークスペースでは」と範囲を書いている | 本文55行目、`editions/index.ts:84` |
| `waiting-on-the-customer-...`、`reps-open-the-crm-...` | 停滞アラートが既定でONであることを、標準版に限って書いている（請負・継続支援も既定ON、販売代理は既定に含まない）。誤りではない | `editions/index.ts:84, 125, 144, 165` |
| README・daily-run | 値・意味・日英一致・学校に付けない・機械的に全部付けない、が書かれている。M-7の対応表だけ足りない | `README.md:45, 341-345`、`daily-run.md:11` |

## 確認の範囲と、確認していないこと

- 日本語56本は、`b2b_categories` を全件見たうえで、題名・feature・screens・本文を、エディション差に関わる語（確度・既定・初期設定・サブスク・デリバリー・空き枠・業態・エディション・法人営業版・今週の方針・ホームの各パネル名など）で全件検索した。全文を読んだのは6本（`contract-renewals-...`、`customer-goals-...`、`empty-crm-...`、`too-many-screens-...`、`which-automations-...`、`monday-meetings-...`）。英語は配列の一致だけを見た。
- 方法は、先に一次情報の側でエディション分岐を全件挙げ、それに触れる記事を探す順にした。サンプルからの推測ではない。
- `npm run build` は実行していない（この環境にシェルがない）。HTMLはローカルの `dist` で見たが、今回の変更を含む最新のビルドかは未確認。公開前にCodex側でビルドを通すこと。
- デモと実機の画面は開いていない。M-1 はコードで確定する（版の分岐が条件式に書かれている）。
- 本文の主張は書き換えていない。修正はCodexが行う。
