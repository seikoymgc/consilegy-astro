# 英語リライト案：Claude Codeスマホ活用（note → LinkedIn英語LP）

最終更新: 2026-06-13
リライト元: note「外出中にスマホからAIを使い続ける。Discord→GitHub→ClaudeCode編」（2026-06-08, https://note.com/seiko_consilegy/n/nec2ae14a794c）
※同テーマの日本語LP投稿（6/9頃、330インプ/16リアクション）の英語版でもある

## リライト方針

- 対象: ①外資VP（英語NL読者の61%がCXO/VP+）。翻訳ではなく視点切り替え。
- **ハウツー＋プロセス設計**の二段構成: 前半は実用的なセットアップ解説（VPが部下に共有したくなる具体性）、後半で「暗黙知ゼロのプロセス設計」に着地。AIネタを隠す必要はない（※「AIは看板に出さない」はLinkedInヘッドラインの話。投稿コンテンツには適用しない）。
- noteのチュートリアル部分（セットアップ9セクション）→ 要点を残して圧縮。コピペ手順は捨てるが「再現できそう」と思える粒度は保つ。
- 着地: 「属人化した収益プロセス」への橋渡し。Revenue Architecture文脈に接続。
- 投稿は英語のみ（混在NG）。

## 投稿枠の推奨

**7/23（木）英語LP枠**（※リライト元要確定だった枠）に充当を推奨。
- 7/22（水）に日本語ビジネスLP「自作CRMをClaude Codeで動かす話」が入っており、翌日に同系統の英語版という並びで整合する
- 7/9枠はMA失敗JA（1,213インプ）リライトが既に有力案のためそのまま

---

## 本文ドラフト（LinkedIn英語LP）

I'm not an engineer. But I run Claude Code from my phone, between meetings, with no laptop in my bag.

The problem: Claude Code's remote control only connects to a running Mac. Close the lid, the session dies.

The fix took one afternoon — move the whole environment to the cloud:

1. Put the project in a GitHub repo (everything lives there, not on my machine)
2. Spin up GitHub Codespaces — a dev environment that keeps running after my Mac shuts down
3. Add my Anthropic API key as a Codespaces secret
4. Install Claude Code inside the Codespace
5. From my phone: open the repo in a browser → Code → Codespaces → Resume

The session survives. Code, docs, working state, conversation history — all there, on any device.

Then I went one step further: a Discord bot connected to the same workspace. Now I don't even open a terminal. I text it like a colleague — "fix this bug," "update the docs" — and it works, commits, pushes. I review from a café, an airport, wherever.

Cost: GitHub's free tier covers 60 hours/month of Codespaces. The API is pay-as-you-go.

Here's what building this taught me, though. The AI was the easy part. The hard requirement was that nothing could live in my head or on my device. Every piece of context written down in the repo. Every instruction expressed in plain language. That's the only reason any device — and frankly, any person — can pick up the work mid-stream.

It's the same test I apply to revenue operations. If your Japan pipeline stalls when one specific rep is offline, your process lives in someone's head, not in your system. An AI agent can only execute what's actually written down — which makes it a brutal audit of how much of your operation is documented versus tribal.

I run a fully remote company across time zones on that one principle: zero tacit knowledge. If a process can't be picked up from a phone by someone who didn't build it, it isn't a process. It's a person.

What's the one workflow on your team that only works when a specific person is online?

---

## 代替フック（A/B用）

- "My entire company runs from a phone. Not because of AI — because nothing lives in anyone's head."
- "An AI agent exposed something uncomfortable about my workflow: most of it wasn't written down anywhere."

## 補足

- 文字数: 約340語（LinkedIn長文投稿として適正）
- CTA: 収益診断は日本語導線のため英語版では使わない。末尾は問いかけで締め、コメント誘発を狙う（英語投稿はインプレが弱い傾向のためエンゲージメント優先）
- 英語NL（Consilegy B2B Revenue Playbook）用に、後半の「zero tacit knowledge → revenue process」部分を膨らませた長尺版も作れる。LP反応を見てから判断
