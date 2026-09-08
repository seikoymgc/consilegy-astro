# AIビジビリティ記録（media.consilegy.com）

AI検索での被引用・サイト側の技術可視性・記事のGEO品質を定点で見る記録。新しい回を上へ追記する。
topics.md の「計測第1回 / 第2回」に相当する。

---

# 第1回 2026-09-08

公開開始（2026-07-21）から7週間。記事はJA 45本 / EN 45本。

## 総括

自然検索は立ち上がり始めている。公開2日の記事が実クエリで7位に入った。
一方、AIの引用元にはまだ1件も入っていない。そしてその手前に、意図していないブロックが1つある。

## 1. サイト側の技術可視性

### 重大: Cloudflareの managed robots.txt が主要AIクローラーを止めている

`https://media.consilegy.com/robots.txt` の先頭に、リポジトリには存在しない
「BEGIN Cloudflare Managed content」ブロックが挿入されている。内容は次のとおり。

```
User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

User-agent: GPTBot            → Disallow: /
User-agent: ClaudeBot         → Disallow: /
User-agent: Google-Extended    → Disallow: /
User-agent: CCBot              → Disallow: /
User-agent: Bytespider         → Disallow: /
User-agent: Amazonbot          → Disallow: /
User-agent: Applebot-Extended  → Disallow: /
User-agent: meta-externalagent → Disallow: /
User-agent: CloudflareBrowserRenderingCrawler → Disallow: /
```

`public/robots.txt`（リポジトリ側）は `User-agent: * / Allow: /` と sitemap だけなので、
これは Cloudflare 側の設定（AI Crawl Control / managed robots.txt）が配信時に足している。

**正確な影響範囲**（過大に読まないこと）

- 止まっているのは主に**学習・グラウンディング用**のクローラー。
- `OAI-SearchBot`（ChatGPT検索）、`ChatGPT-User`、`PerplexityBot`、`Claude-SearchBot`、`Googlebot` は
  ブロックリストに無いので、**AI検索経由の到達は今も可能**。
- つまり「AIから完全に見えない」ではなく、「モデルの学習と Gemini のグラウンディングからは外れている」状態。

**本体サイト（consilegy.com）はさらに厄介**

consilegy.com 側は自前の robots.txt で GPTBot / OAI-SearchBot / ChatGPT-User / PerplexityBot /
ClaudeBot / Google-Extended / Applebot-Extended / anthropic-ai / Claude-Web / cohere-ai を
明示的に `Allow: /` している。そこに Cloudflare の `Disallow: /` が上から重なり、
**同一エージェントに Allow と Disallow が両方並ぶ自己矛盾した robots.txt** になっている。
RFC 9309 では同長マッチなら Allow 優先だが、実装依存で挙動が割れる領域。

**判断が要る**: 学習利用を許すかどうかは方針の話。ただし現状は
「llms.txt を自動生成してAIに読ませる設計をしながら、robots.txt で主要AIを断っている」という不整合で、
どちらかに寄せる必要がある。作業は Cloudflare 管理画面（AI Crawl Control）。

### 中: llms.txt が charset なしで配信され、日本語が文字化けする

`src/pages/llms.txt.ts` は `'Content-Type': 'text/plain; charset=utf-8'` を返す実装。
しかし本番のレスポンスヘッダーは `content-type: text/plain`（charset なし / cf-cache-status: DYNAMIC）。

バイト列は正しいUTF-8だが、charset 宣言が無いためブラウザは Latin-1 として描画し、
`B2Bã®åŽç›Šãƒ—ãƒ­ã‚»ã‚¹` のように壊れる。Content-Type を尊重するクローラーも同じものを読む。
llms.txt は中身の大半が日本語の方針説明と記事タイトルなので、影響は小さくない。

robots.txt（静的ファイル）は日本語が正しく出ているので、動的ルート側の問題。

### 問題なし

- canonical / hreflang（ja / en / x-default）が記事ページで正しく出力されている
- JSON-LD: 記事に Organization + Article + BreadcrumbList、カテゴリハブに CollectionPage + FAQPage
- OGP: 記事ごとの `eyecatch/{slug}.jpg`、表示用 `.webp`、どちらも 200
- `sitemap-index.xml` 200
- llms.txt は全記事のタイトル・principle・カテゴリ・公開日を自動生成。設計としては良い
- JA / EN 両方が Google にインデックス済み

## 2. 記事のGEO品質（機械採点 91ファイル）

| 論点 | 件数 | 内容 |
|---|---|---|
| **ENカテゴリハブへの内部リンクが無い** | EN 28本 | 2026-08-19 のENハブ新設より前の記事すべて。ENハブ6本がほぼ孤立している。最大の機会 |
| **「この記事の結論」の太字が本文に無い** | EN 24本 / JA 13本 | llms.txt で「各記事に結論を1つ置いている。引用するならこの一文」と宣言しているのに、本文に該当箇所が無い |
| **項目名見出しが残っている** | 6本 | 「状況」「何を判断したか」「解決の手順」「何を変えるか」「分解の順番」「実務での実例」 |
| 数字の3点セット | 違反なし | 「n=307」「有効回答330」「312名」と表記は揺れるが、調査主体・年・母数はすべての記事に入っている |
| ランクDの禁止数字 | 検出なし | 5.4人 / Gartner 75% / BCG 19% / MA 90% のいずれも不使用 |

`notes/template.md` は `draft: true` なので公開されていない（llms.txt にも出ていない）。

## 3. AI検索での被引用（直近の記事トピック）

| 面 | クエリ | 結果 |
|---|---|---|
| Google 自然検索 | 見積書 出すタイミング 稟議 | **7位**（quote-timing-one-step-later、公開2日目） |
| Google AI Overview | 同上 | 引用元15サイトに Consilegy **無し**（日立ソリューションズ西日本、freee、弥生、Rimo など） |
| Google 自然検索 | 旧システム 並行稼働 いつ止める | 上位8件に無し |
| Google 自然検索 | 予算がない と言われたら 営業 | 上位8件に無し。同じ切り口の note 記事（他者）が3位 |
| Perplexity (JA) | 日本のB2B商談で見積書を出すタイミングは稟議のどこに合わせるべきか | 10ソース、引用は semuis / hiroshi-sasada / ferret-one。Consilegy **無し** |
| Perplexity (EN) | Why do B2B software deals in Japan take longer to close, and how should a foreign SaaS HQ forecast them | 15ソース、Consilegy **無し**。nemawashi / ringi の説明は出るが出典は他社 |

EN側の2問目は Consilegy の中核ポジションそのもの。ここに入っていないのが現時点の距離。

## 次にやること（優先度順）

1. **Cloudflare の managed robots.txt をどうするか決める**（Cloudflare管理画面）。
   学習利用を許すなら AI Crawl Control を切る。許さないなら llms.txt 側の設計思想と揃え、
   GEOのKPIを「AI検索経由（OAI-SearchBot / PerplexityBot）」に限定して測る。
2. **llms.txt の charset を直す**。Astro が付けたヘッダーがどこで剥がれているかを特定する。
3. **EN 28本にカテゴリハブへのリンクを追加**する。機械的に処理できる。
4. **結論の太字が無い37本に principle の一文を本文へ置く**。llms.txt の宣言と本文を一致させる。
5. **項目名見出しの6本を書き直す**。

## 次回の計測

第2回は 2026-10-06 めやす（4週間後）。同じクエリで比較する。
比較のために、上の表のクエリ文字列は変えないこと。
