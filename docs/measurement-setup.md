# 計測設定 手順書（GTM / GA4）

サイト側（コード）は実装済み。ここに書くのは**管理画面での受け側の設定**だけ。

- GTMコンテナ: `GTM-T2FNKSK`
- 対象: consilegy.com（日本語・英語 共通）
- 実装コミット: `977cf3a`（`src/components/Analytics.astro`）

---

## 0. 前提：いま何が飛んでいるか

`dataLayer` に流れるイベントと、付随するパラメータ。

| イベント名 | 種別 | 発火場所 | 主なパラメータ |
|---|---|---|---|
| `diagnostic_lead_submit` | **主CV** | 診断フォーム送信 | `industry` `lead_tier` `employee_size` `tools_count` `entry_page` `entry_referrer` `source_page` |
| `download_submit` | 副CV | 資料DLフォーム送信 | `form_name` `page_path` `entry_page` `entry_referrer` `source_page` |
| `newsletter_submit` | 副CV | ニュースレター登録 | 同上 |
| `contact_submit` | 参考 | お問い合わせ送信 | 同上 |
| `consultation_submit` | 参考 | 無料相談申込 | 同上 |
| `diagnostic_cta_click` | 補助 | 診断CTAクリック | `source_page` `cta_label` |
| `lead_submit` | **旧・併走中** | 診断フォーム送信 | `diagnostic_lead_submit` と同じ |

`conversion_kind` は全CVに付く（`primary` / `secondary` / `reference`）。

> **`lead_submit` は移行用。** GA4の設定を切り替え、新イベントで数字が取れているのを確認してから、
> コード側（`src/pages/diagnostic/start/index.astro` の該当行）を削除する。

---

## 1. GTM：変数を作る（データレイヤー変数）

「変数 → ユーザー定義変数 → 新規 → データレイヤーの変数」で、以下を**変数名＝データレイヤーのキー名**で作る。

| 変数名 | データレイヤーのキー |
|---|---|
| `dlv - industry` | `industry` |
| `dlv - lead_tier` | `lead_tier` |
| `dlv - employee_size` | `employee_size` |
| `dlv - entry_page` | `entry_page` |
| `dlv - entry_referrer` | `entry_referrer` |
| `dlv - source_page` | `source_page` |
| `dlv - conversion_kind` | `conversion_kind` |
| `dlv - form_name` | `form_name` |
| `dlv - cta_label` | `cta_label` |

データレイヤーのバージョンは既定（2）のままでよい。

## 2. GTM：トリガーを作る（カスタムイベント）

「トリガー → 新規 → カスタムイベント」。イベント名は正規表現なしの完全一致で作る。

- `CE - diagnostic_lead_submit`
- `CE - download_submit`
- `CE - newsletter_submit`
- `CE - contact_submit`
- `CE - consultation_submit`
- `CE - diagnostic_cta_click`

## 3. GTM：GA4イベントタグを作る ✅ 2026-08-06 バージョン8で公開済み

既存の GA4 設定タグ（測定IDを持つタグ）を親に、「GA4 イベント」タグを作る。
**イベント名は dataLayer のイベント名と同じにする**（GA4側で名前が揃っていたほうが後で迷わない）。

### 主CV：`diagnostic_lead_submit`

- トリガー: `CE - diagnostic_lead_submit`
- イベントパラメータ:

| パラメータ名 | 値 |
|---|---|
| `industry` | `{{dlv - industry}}` |
| `lead_tier` | `{{dlv - lead_tier}}` |
| `employee_size` | `{{dlv - employee_size}}` |
| `entry_page` | `{{dlv - entry_page}}` |
| `entry_referrer` | `{{dlv - entry_referrer}}` |
| `source_page` | `{{dlv - source_page}}` |
| `conversion_kind` | `{{dlv - conversion_kind}}` |

### 副CV：`download_submit` / `newsletter_submit`

同じ形。パラメータは `form_name` `entry_page` `entry_referrer` `source_page` `conversion_kind`。

### 参考：`contact_submit` / `consultation_submit`

同上。GA4のキーイベントには**しない**。

### 補助：`diagnostic_cta_click`

パラメータは `source_page` `cta_label`。これがあると「どのページのどのCTAが診断を連れてきたか」が
クリック段階で分かる（送信まで至らなかった分も見える）。

## 4. GTM：公開前に確認

プレビュー（Tag Assistant）で consilegy.com を開き、以下を実際に踏んで確認する。

1. `/services/` の「3分の収益診断（無料）」をクリック → `diagnostic_cta_click` が `source_page=/services/` で発火
2. 診断を12問回答 → 業種を選んで送信 → `diagnostic_lead_submit` が発火し、`lead_tier` が入っている
3. `/download/` のフォーム送信 → `download_submit` が発火（iframe埋め込みなので特に要確認）
4. `/newsletter/` の登録 → `newsletter_submit` が発火

3が飛ばない場合、HubSpot側の埋め込み方式が変わった可能性がある。
`src/components/Analytics.astro` の `FORMS` に資料DLのフォームGUIDを直書きしてあるので、そこを更新する。

確認できたら公開。

## 5. GA4：カスタムディメンションを登録 ✅ 2026-08-06 完了

対象プロパティ: **Consilegy（282402416 / アカウント Seiko Yamauchi 204517178）**。
「管理 → カスタム定義 → カスタムディメンションを作成」。**範囲はすべて「イベント」**。

| ディメンション名 | イベントパラメータ |
|---|---|
| 業種 | `industry` |
| リードTier | `lead_tier` |
| 従業員規模 | `employee_size` |
| 入口ページ | `entry_page` |
| 参照元 | `entry_referrer` |
| 流入元ページ | `source_page` |
| コンバージョン種別 | `conversion_kind` |

> 登録した時点以降のデータにしか適用されない（遡及しない）。GTM公開と同日にやること。

## 6. GA4：キーイベント（コンバージョン）を指定 ⏳ 初回発火待ち

「管理 → データの表示 → イベント」。

- **`diagnostic_lead_submit` をキーイベントに指定** ← 主CVはこれ1つだけ
- `download_submit` / `newsletter_submit` は**指定しない**（副CVはイベントとして見るに留める。
  キーイベントを増やすと「CVが割れる」問題が再発する）

> **GA4はイベントが1回届くまでキーイベントに指定できない**（一覧に行が出ず、星を付けられない）。
> 診断フォームが初めて送信されたあと、この画面で `diagnostic_lead_submit` の左の★をONにする。
> それまでキーイベントは `purchase`（GA4既定・データなし）だけの状態が続く。

## 7. 移行について（2026-08-06 更新）

**旧 `lead_submit` はGA4に一度も届いていなかった。**
2026-08-06時点でGA4に記録されているイベントは `first_visit` / `page_view` / `session_start` /
`user_engagement` の4つだけ。GTMにGA4イベントタグが1本も無かったため、`dataLayer` には流れていても
GA4には送られていなかった（＝これまでフォーム送信のCVはGA4上で計測できていなかった）。

したがって「新旧の件数を突き合わせる」移行は不要。`src/pages/diagnostic/start/index.astro` の

```
track('lead_submit', payload); // 旧イベント名。GA4の既存設定が切り替わるまで併走
```

は、比較対象が存在しないのでいつ消してもよい（GTMに `lead_submit` のトリガーもタグも無いため、
残していても無害・無効果）。

---

## 月次で見る指標（設計案 §5-5）

GA4の探索レポートで作る。

| 見るもの | 作り方 |
|---|---|
| どのページが診断を連れてくるか | ディメンション `source_page` × 指標「`diagnostic_lead_submit` のイベント数」 |
| Tier 1比率の高い流入元 | `source_page` × `lead_tier` のクロス集計 |
| 入口別の質 | `entry_page` × `lead_tier` |
| 副CVからの移行 | `download_submit` を起こしたユーザーのうち、後日 `diagnostic_lead_submit` に至った割合 |

**「どのコンテンツがICPを連れてくるか」が分かるのは、上2つが揃ってから。**
これはConsilegyが顧客に売っている設計そのものを自社で回している状態なので、
数字が溜まったら事例として書ける。
