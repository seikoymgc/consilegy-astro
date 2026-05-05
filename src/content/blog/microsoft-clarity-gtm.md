---
wpId: 317
title: "Microsoft ClarityをGTMに設定する方法"
slug: "microsoft-clarity-gtm"
sourceUrl: "https://consilegy.com/analytics/microsoft-clarity-gtm/"
pubDate: "2022-04-16T12:00:00"
updatedDate: "2022-04-25T23:34:54"
description: " ヒートマップ大好きなんですが、最近はなかなか現場で使う機会がなく悲しいです。    さて、ヒートマップでは主にhotjarを使ってきました私ですが、Microsoft Clarityの機能追加が著しく、最近とても良い感じですね。正直乗り換え候補として有力すぎます。    新規のご提案ではhotja"
featuredImage: "/images/wp/2022/04/microsoftclarity.jpg"
featuredImageAlt: ""
draft: false
categories:
  - "analytics"
tags:
  - "%e3%83%92%e3%83%bc%e3%83%88%e3%83%9e%e3%83%83%e3%83%97"
---
<!-- wp:paragraph -->
<p>ヒートマップ大好きなんですが、最近はなかなか現場で使う機会がなく悲しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>さて、ヒートマップでは主にhotjarを使ってきました私ですが、<a href="http://clarity.microsoft.com" target="_blank" rel="noreferrer noopener">Microsoft Clarity</a>の機能追加が著しく、最近とても良い感じですね。正直乗り換え候補として有力すぎます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>新規のご提案ではhotjarよりClarityをおすすめしてしまうかも。現在のところ無料というのもかなり魅力的です。導入ハードルがグッと下がりますからね。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回はMicrosoft Clarityのアカウントを作ってGTMに挿入する方法をメモします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>以前まで日本語版の提供がなかったため、英語版で使っているのですが、日本語版もあります。いつ追加されたのでしょう。まったく気づきませんでした。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>アカウント・プロジェクト作成</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずはMicrosoft Clarityのトップページ<a href="http://clarity.microsoft.com">http://clarity.microsoft.com</a>にアクセス。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":318,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-01-1024x575.jpg" alt="" class="wp-image-318"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>アカウント作成からなので右上の「Sign up」をクリックします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":319,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-02-1024x581.jpg" alt="" class="wp-image-319"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Microsoftアカウント、Facebookアカウント、Googleアカウントのいずれかを選んでサインアップ。私は大体安定のGoogleアカウントを使います。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":322,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-03-1-1024x581.png" alt="" class="wp-image-322"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>表示された手順に沿って登録します。既存の内部あるいは外部アカウントにログインするだけですのでかなり簡単です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":323,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-04-1024x459.png" alt="" class="wp-image-323"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>登録が完了するとマイページのMy Projects画面に遷移します。「Add new project」からプロジェクトを追加しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":324,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-05-1024x483.jpg" alt="" class="wp-image-324"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>1サイトにつき1プロジェクトです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Webサイトの名前とURLを入力。URLはhttps://を除いた値（https://consilegy.com なら <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color">seikoyamaguchi.com</mark> ）を入力します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>サイトカテゴリをE-Commerce, SaaS, Blog, Marketing, Conslting, Media, Education, Community, Non-profit, Otherの10種類から選びます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>名前とサイトカテゴリは後から変更できますが、URLは変更できません。URLの変更を行う場合は新たにプロジェクトを作り直す形になりますので、ご注意ください。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>以前は名前とサイトカテゴリも変更できなかった（ような気がする）のですが、変更できるようになったので、そのうちURLの変更も可能になるかもしれませんね。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>トラッキングコードをGTMに追加</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>Microsoft Clarity管理画面でトラッキングコードを発行</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>管理画面からSettings &gt; Setupを選択します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":325,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-06-1024x579.png" alt="" class="wp-image-325"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>もう見えているのですが、中腹にトラッキングコードがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":326,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/microsoftclarity-07-1024x964.png" alt="" class="wp-image-326"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Copy to clipboardをクリックしてコピー。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>なお、下部にある「Masking settings」ボタンからできるマスキング設定は、この時点で確認しておくと後々のリスクを回避できる可能性が高いです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>詳細は<a href="https://consilegy.com/taiwan/microsoft-clarity-masking/">こちらの記事「Microsoft Clarityの個人情報マスキング機能」</a>をご覧ください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>GTMにClarityのトラッキングコードを追加</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>GTMに移動します。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":327,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/clarity-gtm-01-1024x533.jpg" alt="" class="wp-image-327"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":329,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/clarity-gtm-02-1024x304.jpg" alt="" class="wp-image-329"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>左メニューのタグを選択し、「新規」ボタンをクリックします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":330,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/clarity-gtm-03-1024x579.jpg" alt="" class="wp-image-330"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>上段の「タグの設定」をクリックすると「タグタイプを選択」が表示されるので、「カスタムHTML」をクリックします。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":331,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/clarity-gtm-04-1024x580.jpg" alt="" class="wp-image-331"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>名前を入力し、HTML欄に先ほどMicrosoft Clarity管理画面上でコピーしたコードをペーストします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":332,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/clarity-gtm-05-1024x467.png" alt="" class="wp-image-332"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>トリガーを設定して保存をクリック。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>あとはプレビューしたのち公開して完了です。2時間ほどでデータが管理画面に反映されます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>分析するサイトを増やす場合は同様に、Microsoft Clarity管理画面のMy ProjectsからAdd projectをして追加してください。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
