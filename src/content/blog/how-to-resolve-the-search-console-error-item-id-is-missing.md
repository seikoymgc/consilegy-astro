---
wpId: 359
title: "Search Consoleのエラー『項目「id」がありません』の解消方法￼"
slug: "how-to-resolve-the-search-console-error-item-id-is-missing"
sourceUrl: "https://consilegy.com/analytics/how-to-resolve-the-search-console-error-item-id-is-missing/"
pubDate: "2022-04-23T18:00:00"
updatedDate: "2023-10-01T14:25:34"
description: " Search Consoleのエラーを確認していて出てくるこの解消方法、よく聞かれるのでまとめました。        たまに見かけるエラーが出ています。『項目「id」がありません』。これの対処方法ですが、大体はhttps://schema.org/BreadcrumbList記載のタグとの差分を確"
featuredImage: "/images/wp/2023/10/id.jpg"
featuredImageAlt: ""
draft: false
categories:
  - "analytics"
---
<!-- wp:paragraph -->
<p>Search Consoleのエラーを確認していて出てくるこの解消方法、よく聞かれるのでまとめました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":360,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/search-console-breadbramb-1024x460.jpg" alt="" class="wp-image-360"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>たまに見かけるエラーが出ています。『項目「id」がありません』。これの対処方法ですが、大体は<a href="https://schema.org/BreadcrumbList">https://schema.org/BreadcrumbList</a>記載のタグとの差分を確認することで解決します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このサイトはMicrodataのマークアップを使用しているので、その部分を確認。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これが例です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":361,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://consilegy.com/wp/wp-content/uploads/2022/04/BreadcrumbList-Schema.org_-1024x366.png" alt="" class="wp-image-361"/></figure>
<!-- /wp:image -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"&gt;
&lt;a itemscope itemtype="http://schema.org/Thing" itemprop="item" href="/"&gt;
&lt;span itemprop="name"&gt;ホーム&lt;/span&gt;&lt;/a&gt;
&lt;meta itemprop="position" content="1"&gt;&lt;/li&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>こちらが現在のマークアップ。&lt;li&gt;タグの中身を確認すると、&lt;a&gt;タグの中にitemscope itemtype="http://schema.org/Thing" というデータが入っていました。こちらを削除してもらったところ、問題は解消しました。</p>
<!-- /wp:paragraph -->
