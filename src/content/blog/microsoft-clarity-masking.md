---
wpId: 304
title: "Microsoft Clarityの個人情報マスキング機能"
slug: "microsoft-clarity-masking"
sourceUrl: "https://consilegy.com/analytics/microsoft-clarity-masking/"
pubDate: "2022-04-18T23:00:00"
updatedDate: "2022-04-26T00:39:46"
description: " Microsoft Clarityを使用する際、お客様の個人情報が見えてしまうとまずいシーンは結構あると思います。    個人情報は取り扱い要注意情報です。個人情報が見えてしまうだけでメンバー管理が煩雑になったり、分析データを気軽に共有できなくなったり、さまざまな問題が発生します。    Micr"
featuredImage: "/images/media/2022/04/clarity-masking-1.jpg"
featuredImageAlt: ""
draft: false
categories:
  - "analytics"
tags:
  - "%e3%83%92%e3%83%bc%e3%83%88%e3%83%9e%e3%83%83%e3%83%97"
hasShortcodes: true
---
<!-- wp:paragraph -->
<p>Microsoft Clarityを使用する際、お客様の個人情報が見えてしまうとまずいシーンは結構あると思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>個人情報は取り扱い要注意情報です。個人情報が見えてしまうだけでメンバー管理が煩雑になったり、分析データを気軽に共有できなくなったり、さまざまな問題が発生します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Microsoft Clarityには便利な機能があり、<strong>CSSのセレクターで個人情報をマスキングできる</strong>というものです。マスキングを設定すると当該情報は非公開となり、Clarityにアップロードされないようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>デフォルトの状態でも入力ボックスの内容や電話番号、メールアドレスは隠されますが、社内のレギュレーションやhtmlの内容によっては項目の追加が必要な場合もあるでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回はMicrosoft Clatiryのマスキングの仕方をメモします。すっごい簡単です。セキュリティ固い大企業でも承認が通りやすいMicrosoftのツールでここまで簡単だと感慨無量ですね。ありがとう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>マスキング基本設定</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずMicrosoft Clarityの管理画面でSettings &gt; Maskingを選択します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":307,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="/images/media/2022/04/71339868aae5af2fe6f49dd0245398d1-1-1024x669.jpg" alt="" class="wp-image-307"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>マスキングモードには3種類あります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":313,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="/images/media/2022/04/4a5e4d49bcc4122941826531ba3b4605-1024x425.jpg" alt="" class="wp-image-313"/></figure>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>Strict：全てのテキストがマスキングされる</li><li>Balanced：取り扱いに注意が必要なテキストのみマスキング</li><li>Relaxed：マスキングなし</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>デフォルトでは「Balanced」になっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>「Strict」に設定して全てのテキストがマスキングされてしまうと、どれがどのページだかいまいちわからないし、「Balanced」では不安…という方は次のCSSセレクタによるマスキングを追加しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>CSSセレクタによる追加の設定</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":309,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="/images/media/2022/04/eb0d287cea9d69d39f5e289df7982234-1024x723.jpg" alt="" class="wp-image-309"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>追加の設定は「Masking」メニュー内最下部の「Add element」から行います。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":310,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="/images/media/2022/04/56912ecb1919426691c599e067eafdbb-1024x865.jpg" alt="" class="wp-image-310"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「Add element」クリックするとこのようなモーダルが開くので、CSSセレクタを入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSSセレクタとは、CSSでスタイルを設定するための識別名です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>例えば、&lt;div class="name">お名前&lt;/div>というhtmlコードがあったら、.<strong>name</strong>がCSSセレクタになりますので、「.name」と入力し、「Add」をクリックします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>指定方法にはいろいろな種類があります。以下一覧です（内容の項目はマスキング用に変えていますが、要は通常のCSSクラスタ指定です）。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->
<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td>種類</td><td>例</td><td>内容</td></tr><tr><td>ワイルドカードでの指定</td><td>*</td><td>全要素をマスキング</td></tr><tr><td>タグタイプでの指定</td><td>div /p / spanなど</td><td>指定されたタイプをマスキング</td></tr><tr><td>idでの指定</td><td>#name / #container など</td><td>指定されたidの要素をマスキング</td></tr><tr><td>classでの指定</td><td>.name / .container など</td><td>指定されたclassの要素をマスキング</td></tr><tr><td>属性での指定</td><td>[title] / [autoplay] など</td><td>指定されたattrの要素をマスキング</td></tr><tr><td>複数指定（OR指定）</td><td>div,span /.container,.name など「,」で区切る</td><td>指定された2つの要素をそれぞれマスキング</td></tr><tr><td>親子関係</td><td>div span / .container .name など半角スペースで区切る</td><td>最初の要素（div）内の子要素（span）に一致する要素をマスキング</td></tr><tr><td>親子関係（ネスト）</td><td>ul > li など「>」で区切る</td><td>最初の要素（ul）直下の指定子要素（li）に一致する要素をマスキング</td></tr><tr><td>兄弟要素指定</td><td>div~pなど「~」で区切る</td><td>直後だけではなく、最初の要素（div）に続く要素（p）をマスキング</td></tr><tr><td>隣接要素指定</td><td>div+pなど「+」で区切る</td><td>最初の要素（div）の直後に続く要素（p）をマスキング</td></tr><tr><td>カラム</td><td>col || tdなど「||」で区切る </td><td>&lt;col>スコープ内の要素&lt;td>をマスキング</td></tr><tr><td>疑似要素</td><td>a:visitedなどCSSの疑似要素</td><td>指定疑似要素をマスキング</td></tr><tr><td>疑似要素</td><td>a::first-childなどCSSの疑似要素</td><td>指定疑似要素をマスキング</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>汎用性の高いCSSセレクタ（例えば&lt;p class="title">&lt;/p>など多くの場所で使われるものや、Bootstrapコーディングの使用時）を設定すると、見たい情報にまで閲覧制限がかかってしまうことがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>その際は複数要素で絞り込みをかけることができますね。CSSに慣れていれば詳細に絞り込むことができて、かなり便利です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ、複数クラスのAND指定、例えば&lt;div class="container no1">というhtml要素のcontainer no1両方に属するもの、といった指定はできません。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":370,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="/images/media/2022/04/clarity-1024x761.png" alt="" class="wp-image-370"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>追加が完了すると「Add element」ボタンの下にCSSセレクタ名とマスキングあり、なしの設定ボタンが表示されます。該当CSSセレクタ名の横の「Mask」ボタンにチェックがついていればマスキングが設定されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Webサイトのコーディング前にMicrosoft Clarityや他、こうしたマスキングが使えるツールの導入が決まっていれば、個人情報にだけCSSセレクタをつけておくのが便利かもしれません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>その場合、CSSセレクタを一つ決めて個人情報全てに追加するという方法がおすすめ。例えば&lt;p class="privacy"&gt;&lt;/p&gt;等で設定すれば、「privacy」をMicrosoft ClarityのMask by elementに追加するだけで一括でマスキングができます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>マスキング設定時の留意事項</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>マスキング設定をしてから反映されるまで、1時間ほどかかることがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、すでに取得されたデータを修正することはできませんので、アカウントを作成してすぐなど、早めに設定しておくことをおすすめします。</p>
<!-- /wp:paragraph -->
