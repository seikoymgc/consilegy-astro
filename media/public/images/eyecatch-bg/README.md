# アイキャッチ写真

カテゴリ別の写真をここに置くと、アイキャッチ生成（`scripts/gen-eyecatch.mjs`）が
**そのままフルブリードのアイキャッチ**として書き出します。文字は焼き込みません。
タイトルは記事ページと一覧カードで見せるため、画像に文字は不要です。

## ファイル名（固定）

| ファイル名 | カテゴリ |
|---|---|
| `crm.png` | CRM・SFAが定着しない |
| `sales.png` | 商談が進まない・受注が読めない |
| `data.png` | 数字が部署ごとに合わない |
| `japan-gtm.png` | 日本市場で成果が出ない |
| `adoption.png` | 導入したのに使われない |
| `marketing.png` | リードが商談につながらない |

サイズは1200×630以上。1.91:1にセンタークロップされます。

## 記事ごとの専用写真（任意）

`{記事のスラッグ}.png` を置くと、そのカテゴリ写真より優先されます。
例: `sales-stage-definition-rewrite.png` を置くと、その記事だけ専用写真になります。

## プロンプト方針

Recraft / ChatGPT で **文字なし**の編集写真を生成する
（プロンプト末尾に no text, no logo）。共通トーン:

```
Contemporary editorial photograph, <被写体>, bright modern office,
white walls and light wood, clean neutral colors, soft daylight,
crisp sharp focus, minimal and uncluttered, no text, no logo
```

`documentary` と `muted calm color palette` は使わない。前者はフィルム調の粒状感、
後者は彩度落ちとセピア寄りの色被りを招き、レトロな写真になる
（2026-08-04 にこの2語が原因と判明し差し替え）。
人物を入れると指の破綻が起きやすいので、被写体が主役の記事では `no people, no hands` を付ける。

- `crm.png` — close-up of hands typing on a laptop showing a CRM dashboard
- `sales.png` — two Japanese business people discussing across a table in a bright meeting room
- `data.png` — a business analyst reviewing colorful data charts on a large monitor
- `japan-gtm.png` — Tokyo modern business district skyline with glass office towers
- `adoption.png` — a small team gathered around a laptop during a hands-on training session
- `marketing.png` — a marketer reviewing website and campaign analytics on a laptop

## 反映

写真を置いてビルドすると、全記事のアイキャッチが写真で再生成されます。
`git add -A && git commit && git push` で本番にも反映されます。
