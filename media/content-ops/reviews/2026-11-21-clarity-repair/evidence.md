# Clarity既刊記事の通常訂正

対象：https://consilegy.com/analytics/microsoft-clarity-masking/ 。公開URLは旧版の参照、審査対象は添付の修正原稿。旧公開版との不一致だけは未デプロイの工程状態として別記する。本人は既刊全件の通常修正・再審査・公開更新を承認済み。主張や体験を創作せず、公式資料で仕様を確認した訂正。人の独立審査や本人の全文監修を実施済みとは扱わない。

2026-11-21に実際に開いた一次資料：
- https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking : Settings > Masking、Balancedが初期、Strict/Balanced/Relaxed、入力欄とdropdownはすべてのモードでマスク、入力欄の挙動変更不可。プロジェクト管理者のみ変更可。CSSセレクタ（.class_name、#id、要素名）登録しConfirm。子要素に適用。data-clarity-mask="True"、解除属性data-clarity-unmaskも記載。CSS/style内はマスクしない。最大1時間、新規録画のみ適用。過去録画には適用されない。
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors : クラスにはドットを付ける。複数クラスの複合セレクタ記法も存在。CSS一般の記法と、Clarity上で実際に意図どおり録画されるかを区別。

修正：privacy→.privacy、Relaxedの例外を訂正。未対応の列結合子や誤った疑似要素、AND不可の断定を除去。非検証の大企業で承認されやすい等の主張を削除。最新公式のConfirmと管理者権限、制約を案内。2022年の古い本文スクリーンショットは削除し、画面名は公式手順に基づく。元の文字だけの表紙は画像ファイル変更せず保持し、実際に開いて内容と文字の一致を確認。実際のClarityアカウントで設定変更や録画テストを行ったと偽らない。

HTML記事であり本文はMarkdownでなくHTMLとして配信する。指摘引用はタグを含む原稿の文字列から正確に取ること。意味のない改善点を作らず、Major/Criticalは原文・理由・修正案を分ける。公開表示・OGP・画像確認は別の工程で、未確認は実施済みとしない。
