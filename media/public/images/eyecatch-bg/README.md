# アイキャッチ背景アート

ここにカテゴリ別の背景画像を置くと、アイキャッチ自動生成（`scripts/gen-eyecatch.mjs`）が
その上に日本語タイトルを合成します。**画像が無ければ無地で生成されるので、無くても動きます。**

## ファイル名（固定）

| ファイル名 | カテゴリ |
|---|---|
| `crm.png` | CRM・SFAが定着しない |
| `sales.png` | 商談が進まない・受注が読めない |
| `data.png` | 数字が部署ごとに合わない |
| `japan-gtm.png` | 日本市場で成果が出ない |
| `adoption.png` | 導入したのに使われない |
| `marketing.png` | リードが商談につながらない |

サイズは1200×630以上。上に白86%のスクリムが載るため、**淡く見えて正解**です。
コントラストの強いアートほど、文字の下でうるさくなりません。

## Recraft / ChatGPT用プロンプト

**必ず文字なしで生成してください**（プロンプト末尾の no text 指定を消さない）。
日本語タイトルはスクリプトが載せるので、画像に文字は不要です。

共通スタイル（全カテゴリのプロンプトの土台）:

```
Abstract minimal geometric composition, thin lines and simple shapes,
flat vector style, muted colors on off-white background,
generous negative space, corporate editorial illustration,
no text, no letters, no numbers, no logos, no people
```

カテゴリ別に1行足す:

- `crm.png` — ... with a loose grid of small rounded rectangles, deep blue accents
- `sales.png` — ... with a horizontal flow of connected nodes, deep green accents
- `data.png` — ... with scattered bar and dot chart fragments, muted purple accents
- `japan-gtm.png` — ... with two overlapping circles and a bridging line, warm amber accents
- `adoption.png` — ... with concentric circles radiating outward, muted magenta accents
- `marketing.png` — ... with a funnel silhouette made of thin lines, teal accents

## 反映

画像を置いてビルドすると、全記事のアイキャッチが背景アート入りで再生成されます。
`git add -A && git commit && git push` で本番にも反映されます。
