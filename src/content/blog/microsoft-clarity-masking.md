---
wpId: 304
title: "Microsoft Clarityの個人情報マスキング機能"
slug: "microsoft-clarity-masking"
sourceUrl: "https://consilegy.com/analytics/microsoft-clarity-masking/"
pubDate: "2022-04-18T23:00:00"
updatedDate: "2026-11-21T09:00:00+09:00"
description: "Microsoft Clarityのマスキングモードと、CSSクラスを使う追加設定を解説します。.privacyの指定、入力欄の扱い、設定後の確認、過去の録画に適用されない制約を整理します。"
featuredImage: "/images/media/2022/04/clarity-masking-1.jpg"
featuredImageAlt: "Microsoft Clarityの個人情報マスキング機能"
draft: false
categories:
  - "analytics"
tags:
  - "%e3%83%92%e3%83%bc%e3%83%88%e3%83%9e%e3%83%83%e3%83%97"
hasShortcodes: false
---
<p>Microsoft Clarityで個人情報を記録させないためには、マスキングモードを選ぶだけでなく、ページ上のどの情報を隠すかを確認します。例えば、氏名に付けた<code>privacy</code>というクラスを指定するなら、入力するセレクタは<strong><code>.privacy</code></strong>です。先頭のピリオドを省くと、別の指定になってしまいます。</p>
<p>この記事では、モードの違いと、CSSクラスで対象を指定する方法を整理します。仕様と管理画面の操作名は、2026年11月21日に確認した<a href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking">Microsoft公式資料「Masking content」</a>に基づきます。</p>

<h2>入力欄は、どのモードでもマスキングされる</h2>
<p>Clarityの初期設定はBalancedです。モードの違いは次のとおりです。</p>
<ul>
<li><strong>Strict</strong>：コンテンツ全体をマスキングします。</li>
<li><strong>Balanced</strong>：数値やメールアドレスなど、Clarityが機密情報と分類する内容をマスキングします。</li>
<li><strong>Relaxed</strong>：通常のコンテンツはマスキングしません。ただし、入力欄とドロップダウンは引き続きマスキングされます。</li>
</ul>
<p>入力欄の内容は全モードでマスキングされ、この動作は変更できません。「Relaxedなら何も隠れない」という意味ではありません。一方、初期設定を使っているから、隠したい情報がすべて対象になるとも判断しないことです。</p>

<h2>クラス名を登録するときは、先頭にピリオドを付ける</h2>
<p>例えば、画面に表示する情報へ次のクラスを付けたとします。これは説明用の架空の例です。</p>
<pre><code>&lt;p class="privacy"&gt;サンプルの氏名&lt;/p&gt;</code></pre>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors">MDNのクラスセレクタの説明</a>にあるとおり、クラスは<code>.privacy</code>と指定します。<code>privacy</code>だけでは、<code>class="privacy"</code>ではなく、<code>&lt;privacy&gt;</code>という要素名を指定することになります。</p>
<p>Clarity公式の手順では、プロジェクトの管理者が<strong>Settings → Masking → Mask by element → Add element</strong>を開き、CSSセレクタを入力して<strong>Confirm</strong>を選びます。追加した指定は<strong>Mask</strong>に設定します。</p>
<p>指定した要素の子要素にも設定が適用されます。例えば、氏名だけを隠すつもりで、その氏名を含むページ全体のコンテナを指定すると、分析で見たい部分まで隠してしまう可能性があります。対象の要素を見分けられるクラスを使い、実際のページで指定範囲を確かめます。</p>
<p>一般的なCSSでは、複数のクラスを持つ要素を<code>.container.no1</code>のように表せます。ただし、CSSの記法として成立することと、利用中のClarity設定で意図した録画になることは別の確認です。高度な指定を使う場合は、実際の録画まで確かめてください。</p>

<h2>HTML側で対象を明示する方法もある</h2>
<p>Clarityは、HTML要素に<code>data-clarity-mask="True"</code>を付ける方法も案内しています。次のように記述すると、その要素と子要素がマスキング対象になります。</p>
<pre><code>&lt;p data-clarity-mask="True"&gt;サンプルの氏名&lt;/p&gt;</code></pre>
<p>CSSクラスを登録する方法と、HTMLに属性を付ける方法のどちらを使うかは、サイトの更新方法で決めます。HTMLを編集できるなら、保護したい表示箇所と一緒に属性を管理できます。Clarity側で登録するなら、サイト改修でクラス名や構造が変わった際にも、指定が有効かを確かめる必要があります。</p>

<h2>設定の保存後は、新しい録画で対象と解除設定を確認する</h2>
<p>公式資料では、設定の反映に最大1時間かかる場合があり、変更は新しい録画に適用されます。すでに取得した録画を後からマスキングすることはできません。</p>
<p>確認には実在の個人情報を使わず、テスト用の情報で対象の画面を表示します。反映後の録画で、隠すべき箇所が隠れ、分析に必要な箇所が意図せず消えていないかを見ます。設定画面でセレクタを保存できたことだけで、確認を終えないようにします。</p>
<p>Mask by elementには解除するUnmaskの指定があり、HTML側にも<code>data-clarity-unmask</code>があります。解除設定や上書きによって対象が見える状態になっていないかも確認します。また、Clarityはスタイルシートやstyleタグ内の内容をマスキングしないため、そこへ機密情報を置かないことが公式に推奨されています。</p>
<p>マスキングは、収集する表示内容を制御するための機能です。対象の選定と、実際の録画での確認を一組にして扱ってください。</p>
