# 計測セットアップ（media.consilegy.com）

サイト側の実装は完了している。残りは GTM と GA4 の管理画面での設定。

## サイト側で入っているもの（コード済み・作業不要）

| 実装 | 場所 |
|---|---|
| GTMコンテナ `GTM-T2FNKSK`（本体サイトと共通） | `src/site-config.ts` / `src/layouts/BaseLayout.astro` |
| `media_outbound_click` を dataLayer に push | `src/components/Analytics.astro` |
| プライバシーポリシーへのリンク（JA/EN） | フッター |

`PUBLIC_GTM_ID` を環境変数で渡せば、コンテナIDを差し替えられる。空文字を渡すと計測タグは一切出力されない。

### dataLayer に流れる変数

`media_outbound_click` は、本文・フッター・CTAから `https://consilegy.com` へのリンクがクリックされたときに1回発火する。

| 変数名 | 中身 | 例 |
|---|---|---|
| `article_path` | クリックが起きた記事のパス | `/notes/webinar-next-step-not-attendance/` |
| `destination` | 遷移先のパス | `/free-consultation/` |
| `cta_label` | クリックしたリンクの文言（60字まで） | `30分無料相談 ↗` |
| `entry_page` | そのセッションでメディアに入った最初のページ | `/notes/threshold-before-dashboard/` |
| `entry_referrer` | その入口の参照元 | `https://www.google.com/` |

`entry_page` と `article_path` を分けているのは、「入口になった記事」と「送客した記事」が別なことが多いため。前者はSEOの評価、後者はCTAの評価に使う。

---

## 作業1: GTM（GTM-T2FNKSK）

GTM-T2FNKSK にアクセスできるGoogleアカウントでログインすること。

### 1-1. データレイヤー変数を5つ作る

変数 → 新規 → 変数タイプ「データレイヤーの変数」

| 変数名 | データレイヤーの変数名 |
|---|---|
| `DLV - article_path` | `article_path` |
| `DLV - destination` | `destination` |
| `DLV - cta_label` | `cta_label` |
| `DLV - entry_page` | `entry_page` |
| `DLV - entry_referrer` | `entry_referrer` |

データレイヤーのバージョンは既定（バージョン2）のまま。

### 1-2. トリガーを作る

トリガー → 新規 → トリガータイプ「カスタムイベント」

- 名前: `CE - media_outbound_click`
- イベント名: `media_outbound_click`
- 「すべてのカスタム イベント」

### 1-3. GA4イベントタグを作る

タグ → 新規 → タグタイプ「Google アナリティクス: GA4 イベント」

- 名前: `GA4 - media_outbound_click`
- 測定ID: 本体サイトで使っている既存のGA4設定タグ（またはGoogleタグ）を選ぶ。**新しい測定IDを作らない。** 本体と同じIDでないとクロスドメインが成立しない
- イベント名: `media_outbound_click`
- イベントパラメータ:

| パラメータ名 | 値 |
|---|---|
| `article_path` | `{{DLV - article_path}}` |
| `destination` | `{{DLV - destination}}` |
| `cta_label` | `{{DLV - cta_label}}` |
| `entry_page` | `{{DLV - entry_page}}` |
| `entry_referrer` | `{{DLV - entry_referrer}}` |

- トリガー: `CE - media_outbound_click`

### 1-4. 確認して公開

プレビュー（Tag Assistant）で `https://media.consilegy.com/notes/...` を開き、フッターの「30分無料相談」をクリック。`media_outbound_click` が発火し、パラメータが入っていることを確認してから公開する。

---

## 作業2: GA4（本体と同じプロパティ）

### 2-1. クロスドメイン計測

管理 → データストリーム → 該当のウェブストリーム → **タグ設定を行う** → **ドメインの設定**

マッチタイプ「含む」で次の2つを登録する。

```
consilegy.com
media.consilegy.com
```

**これをやらないと、記事から本体サイトへ遷移した瞬間に別セッション扱いになり、送客を測っている意味がなくなる。**

### 2-2. 不要な参照の一覧

同じ「タグ設定を行う」の中の **不要な参照の一覧** に、上と同じ2ドメインを登録する。

登録しないと、メディアから本体への遷移が `media.consilegy.com` からの referral として計上され、本来の流入元（自然検索やLinkedIn）が上書きされる。2-1とセットで必ずやること。

### 2-3. カスタムディメンションを登録

管理 → カスタム定義 → カスタムディメンションを作成

| ディメンション名 | 範囲 | イベントパラメータ |
|---|---|---|
| 記事パス | イベント | `article_path` |
| 遷移先 | イベント | `destination` |
| 入口ページ | イベント | `entry_page` |

登録しないと、探索レポートでパラメータ別に見られない。登録した日以降のデータにしか適用されないので、公開と同時にやること。

---

## これで見えるようになること

- どの記事が本体サイトへ人を送っているか（`article_path` 別の `media_outbound_click` 数）
- どのCTAが押されているか（`destination` / `cta_label` 別）
- 送客した記事と、そもそもの入口になった記事の違い（`article_path` × `entry_page`）
- メディア経由で診断・無料相談まで到達した数（クロスドメインが成立していれば、本体側のコンバージョンに `entry_referrer` が引き継がれる）

90日レビューで「継続 / 頻度変更 / 撤退」を判断する材料は、このうち1番目と4番目。
