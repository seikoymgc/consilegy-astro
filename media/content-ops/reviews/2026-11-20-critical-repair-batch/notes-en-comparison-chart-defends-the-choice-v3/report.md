# Claude記事品質レビュー

対象: /Users/seikoyamaguchi/.codex/worktrees/all-published-review-20261120/media/src/content/notes-en/comparison-chart-defends-the-choice.md
原稿SHA256: `6c2b214c719a835398cfd2bda3801eff7ca9c9b6eb02b61e0b56a1ae16396197`
実行日時: 2026-11-21T06:08:54.832234+00:00

AI審査完了: True
AI審査上の未解決事項なし: False

人の独立レビュー・本人の最終OK・画像と表示の確認を代替しない。公開許可ではない。

## 事実検証

事実検証の結果、原稿本文には修正が必要な事実誤りは見つかりませんでした。Critical・Majorはいずれも0件です。ただし、本人確認、画像確認、デプロイ後の公開確認が残っているため、公開可とは判定しません。

【確認したこと】
- **PR TIMESの一次資料**（IDEATECH、2026-04-16発表）を開いて照合しました。以下はすべて原文と一致しています。
  - 共同調査者「北川 裕康」氏（Hiroyasu Kitagawa）
  - 調査期間 2026-03-23〜26、インターネット調査、n=307
  - 対象条件「年間契約金額（または一括導入費用）300万円以上」「2名以上で関与」
  - Q18（n=298、上位3つまで回答可、発注先を決定済みまたは最終候補まで絞った人）
  - 「最終的に発注した（または発注予定の）企業を検討候補に加えた時点」の要因として、似た規模の企業の事例 44.3%、課題に対応する機能が明確 40.3%
  - 旧版は44.3%を「勝者を選んだ理由」と誤って書いていましたが、修正版では「候補入りの要因」と正しく限定されています。
- **リンク**
  - サービスページ（/en/services/japan-market-gtm-messaging/）は実在し、内容は記事の説明と合っています。
  - 関連記事（/en/articles/draft-the-internal-approval-document/、承認文書の下書き支援の記事）とカテゴリページ（/en/category/sales/）も公開URLを基準に解決でき、実在しました。

【デプロイ後の確認事項】（原稿の欠陥とは別扱い）
- 現在の公開URLは旧版のままで、以下が残っています。修正版がデプロイされた後に、表示・OG・画像・一覧の更新を確認する必要があります。
  - 旧題「Your Japan battlecard is read in a room your rep never enters」
  - 更新日 Oct 17
  - 旧サービスURL（services-en）
  - 誤った統計の解釈

【未確認のため要確認とした項目】
- **P06**：画像が提供されていないため確認できていません。
- **P07・P10**：代表本人による全文の最終確認が済んでいません。特にP07について、修正版は旧版の推奨（「最終候補が決まってから共有」）を逆にし、「最終候補まで比較情報をすべて控えることはしない」としています。そのため、本人の意図と一致しているかの確認が必要です。

ClaudeはAIレビュワーなので、人による独立した審査や本人の監修の代わりにはなりません。

Claude session: `d482e55c-b202-467a-a9c0-4fd79cd4922c`

### 全項目の判定

- F01 / 問題なし: 本文の数値「44.3% and 40.3%」「307 people」「298 respondents」「¥3 million」「23–26 March 2026」を、PR TIMESのIDEATECH発表（Q18、n=298、上位3つまで）と照合し、すべて一致しました。
- F02 / 問題なし: 調査の出典は、IDEATECHがPR TIMESに出した公式発表、つまり一次の公表資料です。本文でも「The publisher provides survey-based PR」と調査の性質を明記しています。
- F03 / 問題なし: 「IDEATECH」と「Hiroyasu Kitagawa」（原文は北川 裕康氏）は一次資料と一致しました。「Consilegy」とサービス名「Japan market GTM and messaging」も公式ページと一致しています。
- F04 / 問題なし: 時系列に矛盾はありません。調査期間2026-03-23〜26、発表2026-04-16、publishedAt 2026-08-29、updatedAt 2026-11-21の順です。publishedAtは公開中の旧版（Aug 29, 2026）とも一致しています。
- F05 / 問題なし: 法律・料金の記述はありません。サービス仕様に当たるのは末尾のサービス案内リンクだけで、2026-11-21時点で公式ページを開き、内容（日本の買い手に合わせたポジショニング・メッセージング支援）が説明と合うことを確認しました。
- F06 / 該当なし: 原典からの直接引用はありません。「Integration available」や「Meets」などは、仮定の例として示した表示ラベルで、引用文ではありません。
- F07 / 問題なし: 次のリンクをすべて開き、実在して説明どおりのページに遷移することを確認しました。PR TIMESの調査ページ、consilegy.com/en/services/japan-market-gtm-messaging/、相対リンク /en/articles/draft-the-internal-approval-document/（承認文書の下書き支援の記事）、/en/category/sales/。
- F08 / 問題なし: 「業界No.1」や「多くの企業が導入」のような根拠のない最上級表現はありません。
- F09 / 問題なし: 調査の解釈が正確です。「It concerned entry into consideration... rather than the final reason for awarding a contract」は、Q18の設問（検討候補に加えた時点の要因）と一致しています。さらに「should not be treated as representative」と限界も示しています。
- F10 / 問題なし: 表と連携の例は「Consider a hypothetical requirement」「These are hypothetical examples, not assessments of real products」と、仮定の例であることを明示しています。架空の事例を実話として扱っている箇所はありません。
- F11 / 問題なし: 「Our editorial recommendation is...」「This article proposes...」のように、調査の事実と編集部の提案を分けて書いています。
- F12 / 問題なし: 出典のない断定はありません。「It does not assume that all Japanese buyers follow the same approval process」と、一般化も避けています。
- P01 / 問題なし: タイトル「must explain fit and implementation conditions」と、見出し・本文（要件ごとの適合と実装条件の比較）が一致しています。description/principleにある「requirements you cannot meet」も、「Explain limitations」の章で扱われています。
- P02 / 問題なし: 数値・日付・固有名詞・URLは今回すべて一次資料と照合しました。なお、公開URLは旧版のままです（旧題、旧services-enのURL、旧統計の解釈）。これは未デプロイという既知の工程状態なので、デプロイ後に別途確認が必要で、原稿の欠陥には数えていません。
- P03 / 問題なし: TODOや仮置きの文章、未確認の数字は見当たりません。
- P04 / 問題なし: 調査結果は数値の要約と出典リンクにとどめていて、図表や文章の転載はありません。
- P05 / 問題なし: 調査の出典リンク、調査期間、対象者、設問の条件まで明記されています。
- P06 / 要確認: 画像やOG画像が提供されていません。題名を変えたことに伴うOG見出しやalt、配信画像の確認は、ビルド・デプロイ後の別工程で行う必要があります。本文の表は仮定の例として本文と整合していますが、画像は未確認です。
- P07 / 要確認: 修正版は旧公開版の推奨を変えています。旧版は「Share it after shortlisting」でしたが、修正版は「Do not withhold all comparison information until the final shortlist」です。全既刊の修正は本人承認済みと記録されていますが、代表による全文の最終OKは記録がなく、主張を変えたことが本人の意図と合うかは確認できていません。
- P08 / 問題なし: 実体験や成果の記述はなく、仮定の例と編集部の分析として書かれています。創作された実績はありません。
- P09 / 問題なし: 各章の役割が分かれています（調査の解釈、比較表の作り方、制約の示し方、共有の時期）。太字のまとめも、新しい判断基準として要約し直したもので、本文の単純な繰り返しではありません。
- P10 / 要確認: 署名は編集部で、本人による全文監修や人による独立審査は実施されていません。筆者の見解や文体が反映されているかは、本人の確認が必要です。

## 編集レビュー

編集レビュー（S・C・R）の結果、Critical・Majorの指摘はありません。Minorが2件あります（参照事例の扱い方が手順に入っていない点、descriptionにだけ出てくる「champion」）。
確認した内容は次のとおりです。
・PR TIMESのIDEATECH発表（2026-04-16）を実際に開いて照合しました。調査期間2026-03-23〜26、n=307、Q18はn=298・3つまで回答可・発注先決定済みまたは最終候補まで絞った人、候補入り要因は44.3%と40.3%で、記事の記述と一致します。共同調査者の原文表記は「北川裕康」で、英語表記「Hiroyasu Kitagawa」と食い違いはありません。なお、対象者条件の「直近12か月以内」「BtoB事業を展開する企業に勤務」は記事で省略されています。これは事実検証の工程で扱う事項として残します。
・サービスページ（consilegy.com/en/services/japan-market-gtm-messaging/）を開き、日本の買い手向けにポジショニングとオファーを合わせるという本文末尾の説明と合っていることを確認しました。
・相対リンク2件（/en/articles/draft-the-internal-approval-document/ と /en/category/sales/）は、media.consilegy.com 上でページがあることを確認しました。
・公開URLのslug「comparison-chart-defends-the-choice」は修正版のタイトルと合いません。ただし資料にあるとおり未デプロイの旧版によるもので、原稿の欠陥とは扱わず、デプロイ後の確認事項とします。
画像・OG・人による独立審査・代表本人の全文確認は、この工程の対象外で未確認です。公開可否はそれらの確認と事実検証の工程の結果を合わせて判断してください。

Claude session: `982e5c1c-656f-4dde-a9da-864cabba5d81`

### editorial-1: Minor / C11

> A reference is useful context when its conditions are explained, rather than proof that the same result will follow elsewhere.

理由: 調査では「似た規模の企業の事例」が最も高い要因（44.3%）でした。しかし、続く比較表の設計（列の構成）と手順には参照事例の扱いが出てきません。根拠の章と実践の章の間で、参照事例の位置づけが途切れています。

修正案: 筆者の判断で、参照事例を比較表の根拠欄に載せる場合の条件（規模・業種・構成の違いを明記するなど、本文がすでに述べている「conditions are explained」の範囲）を表の説明に一文加えることを検討してください。または、参照事例を表の対象外とする理由を書いてください。新しい数値や手順は追加しないでください。

確認根拠: https://prtimes.jp/main/html/rd/p/000000629.000045863.html （Q18：自社と似た規模の企業の事例 44.3%、課題に対応する機能が明確 40.3%、n=298、上位3つまで回答可）

対応状況: 未対応（原稿は変更していない）

### editorial-2: Minor / R06

> Give the champion evidence they can use to explain the choice internally.

理由: descriptionとprincipleでは「champion」を使っていますが、本文では「the buyer」「the customer」としか書かれず、championという語も説明もありません。メタ情報と本文で用語がずれています。

修正案: descriptionの「champion」を本文に合わせて「the buyer」にするか、本文の該当箇所（例：「Ask the customer who will read the comparison next」付近）で、社内で提案を説明する担当者としてchampionを一度定義してください。

確認根拠: 原稿の本文とfrontmatterを照合（外部確認不要）

対応状況: 未対応（原稿は変更していない）

### 全項目の判定

- S01 / 問題なし: タイトルは「fit and implementation conditions」を説明すべきという主張です。本文は要件ベースの比較表、実装条件、制約の明示を扱っており一致しています。公開URLのslugとの不一致は未デプロイによる既知の状態で、原稿の問題ではありません。
- S02 / 問題なし: 冒頭2段落で、本社のbattlecardを翻訳するだけでは実装コスト・所有者・運用条件が不明なまま残るという課題を、仮定の連携要件で示しています。第3段落で要件ベースの比較を提案し、適用範囲（日本の買い手全員の承認プロセスが同じとは仮定しない）も明示しています。
- S03 / 問題なし: 比較表の構造、制約の示し方、共有のタイミングという、読者が実務で必要とする内容が中心になっています。
- S04 / 問題なし: 根拠（調査）→表の再構成→制約の明示→共有のタイミング→まとめ、の順で論理的につながっています。
- S05 / 問題なし: 各章は、根拠・表の設計・制約・時期と競合製品の記載方法を担当しており、重複がありません。
- S06 / 問題なし: 中核の再構成の章に表と注意事項が厚く書かれています。調査の章も解釈上の限定に必要な長さで、不自然に均等ではありません。
- S07 / 問題なし: 表を含む章、例示の段落、手順的な短い指示など、章ごとに構造が異なります。
- S08 / 問題なし: 調査（候補入りの時点の要因であり最終選定理由ではない）から言えるのは機能情報を残すべきという範囲までで、「機能で選ばれない」とする主張を明確に否定しています。PR TIMESの原文で、設問の範囲・n=298・3つまで回答可を確認しました。
- S09 / 問題なし: 調査を因果の証明として扱わず、代表性もないと明記しています。参照事例も「同じ結果を保証するものではない」としており、混同はありません。
- S10 / 問題なし: 一般論による水増しはなく、冒頭から具体的な要件の例に入っています。
- S11 / 問題なし: 末尾のサービス導線と関連記事は短く、結論から外れる脱線はありません。
- S12 / 問題なし: 太字のまとめは単純な繰り返しではなく、「fit and the obligations that come with it」という観点で統合しています。
- C01 / 問題なし: 「various」「many」などの曖昧語の多用はありません。
- C02 / 問題なし: 調査の実数（44.3%、40.3%、n=307/298、¥3 million）を挙げ、表で具体的な要件を例示しています。数字の創作はなく、原典と照合済みです。
- C03 / 問題なし: 支払いが発生する開発をどの見積に含めるか、本社の標準提供範囲と現地の実装作業の境界、競合の不明な点を否定評価で埋めない、など実務上の示唆があります。
- C04 / 問題なし: 一次調査の解釈の限界の分析と、編集部の提案（「Our editorial recommendation」と明示）が独自の視点になっています。実体験は作られていません。
- C05 / 問題なし: 調査設問の範囲（候補入りの時点か最終選定か）の区別や、未確認の競合情報の扱いなど、ほかでは得にくい判断材料があります。
- C06 / 問題なし: 受注の連携と権限制限の例が、機能名と要件の違いを理解する助けになっています。
- C07 / 問題なし: 「Consider a hypothetical requirement」「These are hypothetical examples, not assessments of real products」と、架空であることを明示しています。
- C08 / 問題なし: 調査の代表性の限界、すべての日本の買い手に当てはまるわけではないこと、日本の顧客だからといって日本語対応の必要を前提にしないこと、など適用条件が示されています。
- C09 / 問題なし: 日本向けに営業するB2Bチームに適した水準です。
- C10 / 問題なし: 「Otherwise, a feature comparison can conceal work that the customer will have to fund or manage」など、理由が添えられています。
- C11 / 問題あり: 表の構造や判定区分などの判断基準はあります。ただし、調査で最も高い要因とされた参照事例を比較表にどう載せるかが示されていません（Minor）。
- R01 / 問題なし: 「teams selling into Japan」と明示しており、海外ベンダーの記述もあります。
- R02 / 問題なし: 比較表を求められたときにどう作るかという疑問に答えています。
- R03 / 問題なし: 冒頭の3段落で課題と提案の価値が伝わります。
- R04 / 問題なし: 簡潔で、冗長さはありません。
- R05 / 問題なし: 調査条件、表の使い方、未確認情報の扱いなど、理解に必要な説明は揃っています。
- R06 / 問題あり: descriptionとprincipleの「champion」が本文で使われず、説明もありません（Minor）。「battlecard」は営業分野の一般的な用語として許容範囲です。
- R07 / 問題なし: 表の例が、記入内容と未確認情報の扱いを具体的に示しています。
- R08 / 問題なし: 見出しは要点を表しています。「Share the version needed for the current decision」はやや抽象的ですが、理解できる範囲です。
- R09 / 問題なし: 見出しと表で、必要な情報を探しやすい構成です。
- R10 / 問題なし: 要件ごとの行・根拠・条件の記入、誰が次に読むかを確認する、競合の製品・プラン・確認日を記載する、など読後の行動が明確です。
- R11 / 問題なし: サービスページを開き、日本の買い手向けにポジショニングとオファーを合わせる内容で記事と整合することを確認しました。関連記事（/en/articles/draft-the-internal-approval-document/）とカテゴリページは、media.consilegy.com 上でページがあることを確認済みです。

## 校正・推敲

校正・推敲工程の審査です（原稿は変更していません）。記事内のリンクはすべて今回実際に開いて確認しました。①PR TIMESのIDEATECH発表（2026-04-16公開、調査期間2026-03-23〜26、n=307、Q18はn=298・上位3つまで回答、同規模企業の事例44.3%／課題に対応する機能が明確40.3%、共同調査者は北川裕康氏＝Hiroyasu Kitagawa）は、原稿の数値・期間・設問条件と一致しました。②サービスページ https://consilegy.com/en/services/japan-market-gtm-messaging/ は実在し、内容も合っています。③相対リンク /en/articles/draft-the-internal-approval-document/ と /en/category/sales/ は、公開URLを基準に解決すると実在します。Critical・Majorの指摘はありません。Minorは5件です。(a) 調査対象の説明が不自然な英語で、「直近12か月以内」という条件も落ちている。(b) 設問の対象を「including a vendor expected to receive the order」と書いており、実際の対象（最終的に発注した／発注予定の企業）からずれている。(c) サービス名の大文字表記が揃っていない。(d) 英綴りと引用符の規則が混在している。英語記事なので、日本語特有の項目（敬体・常体、語尾の連続、体言止め）は該当なしとしました。画像・OG画像は今回提供されていないため要確認です。筆者の意図や本人監修は確認できないため、P07・P10も要確認とします。公開URLが修正前の旧版であることは既知の工程状態です。原稿の欠陥とは扱わず、デプロイ後の確認事項として別に扱います。AIのレビューは、人による独立審査や代表による全文確認の代わりにはなりません。

Claude session: `e1b6b006-5ed0-4ff1-bb21-b24930671be6`

### copy-1: Minor / J08

> covered 307 people involved with colleagues in Japanese B2B purchases costing at least ¥3 million annually or at implementation

理由: 「involved with colleagues」は、「同僚と関わった」とも読めて不自然。原典の条件は「2名以上で関与」で、「直近12か月以内」という期間条件と「導入・見直し・乗り換え・大型契約更新」という範囲も落ちている。

修正案: 例：「covered 307 employees and executives at B2B companies who, in the previous 12 months, had been involved with at least one colleague in introducing, reviewing, switching or renewing a B2B product costing at least ¥3 million annually or at implementation.」（原典の条件を英語で正確に述べる案。数値は変えていない）

確認根拠: https://prtimes.jp/main/html/rd/p/000000629.000045863.html （調査対象：直近12か月以内、年間契約金額または一括導入費用300万円以上、導入・見直し・乗り換え・大型契約更新に2名以上で関与、有効回答307名）

対応状況: 未対応（原稿は変更していない）

### copy-2: Minor / J13

> It concerned entry into consideration, including a vendor expected to receive the order, rather than the final reason for awarding a contract.

理由: Q18は「最終的に発注した（または発注予定の）企業を検討候補に加えた時点」の要因を尋ねている。「including」だと候補企業全般を対象とし、その一部に発注予定先が含まれるように読めてしまい、設問の対象とずれる。

修正案: 例：「It asked what influenced the decision to add the vendor that was eventually chosen (or expected to be chosen) to the candidate list, rather than the final reason for awarding a contract.」

確認根拠: https://prtimes.jp/main/html/rd/p/000000629.000045863.html （Q18：最終的に発注した（または発注予定の）企業を検討候補に加えた時点で影響が大きかった要因、n=298、上位3つまで）

対応状況: 未対応（原稿は変更していない）

### copy-3: Minor / P02

> The online survey ran on 23–26 March 2026 and covered 307 people

理由: 期間とn数は原典と一致するが、調査対象の「直近12か月以内」という条件が書かれていない。調査範囲を正確に伝えるうえで不足がある（修正案はJ08と共通）。

修正案: 調査対象の説明に「in the previous 12 months」を加える。

確認根拠: https://prtimes.jp/main/html/rd/p/000000629.000045863.html

対応状況: 未対応（原稿は変更していない）

### copy-4: Minor / J25

> For Consilegy’s service scope, see [Japan market GTM and messaging]

理由: canonLabelでは「Japan Market GTM and Messaging」、サービスページのタイトルでは「Japan Market GTM & Messaging」となっており、本文リンク文の小文字表記と揃っていない。

修正案: リンク文を「Japan Market GTM and Messaging」に統一する（記号の & を使うかは媒体の表記ルールに従う）。

確認根拠: https://consilegy.com/en/services/japan-market-gtm-messaging/ （ページタイトル：Japan Market GTM & Messaging | Consilegy）

対応状況: 未対応（原稿は変更していない）

### copy-5: Minor / J28

> “Meets,” “meets with conditions” and “does not meet” can summarise a response

理由: 綴り（summarise）と日付表記（23–26 March 2026）は英国式だが、カンマを引用符の内側に置くのは米国式で、規則が混在している。

修正案: 英国式に統一するなら「“Meets”, “meets with conditions” and “does not meet” can summarise…」とする。媒体で米国式と決めている場合は、綴りを summarize に揃える。

確認根拠: 本文内の表記比較による（外部の根拠は不要）

対応状況: 未対応（原稿は変更していない）

### 全項目の判定

- J01 / 問題なし: 英語記事のため、英語で同じ働きをする言い回し（過剰な婉曲や推量）に置き換えて確認した。「may」「might」は冒頭と表の導入に限られ、多用されていない。
- J02 / 問題なし: 締めは太字の要約、サービスへの導線、関連記事の順で、「Hope this helps」のような定型の締めはない。
- J03 / 問題なし: 「In recent years」のような不要な導入はなく、冒頭は比較表を求められる具体的な場面から始まっている。
- J04 / 問題なし: 「Also」「Furthermore」の連続はない。「Conversely」「Otherwise」は文脈上必要な使い方。
- J05 / 問題なし: 「important」「key」の反復はない。
- J06 / 問題なし: 過剰な共感や不要なへりくだりはなく、指示型の簡潔な文体で書かれている。
- J07 / 問題なし: 「revolutionary」のような誇張はない。調査の代表性についても「should not be treated as representative」と限定を付けている。
- J08 / 問題あり: 調査対象を述べる「involved with colleagues in Japanese B2B purchases」は、「同僚と関わった」とも読める不自然な英語。詳細は指摘欄。
- J09 / 問題なし: 「actual」「assume」が数回出てくるが、章ごとに対象が違い、機械的な反復には当たらない。
- J10 / 該当なし: 同じ語尾が連続するかは日本語の語尾に関する項目のため、英語記事には該当しない。命令文の連続は手順説明として自然な範囲。
- J11 / 問題なし: 一番長い文は調査概要の文（約35語）だが、構文は追える。表現上の問題はJ08で扱う。
- J12 / 問題なし: セミコロンでつないだ文（The publisher provides…; these responses…）も、論点は1つにまとまっている。
- J13 / 問題あり: 「It concerned entry into consideration, including a vendor expected to receive the order」の「including」が、設問の対象を不正確にしている。詳細は指摘欄。
- J14 / 問題なし: 「This helps determine…」の This は直前の「顧客に次の読み手を尋ねること」を指しており、対象は明確。
- J15 / 問題なし: 冗長な表現は見当たらない。
- J16 / 問題なし: 太字の結論はdescriptionと趣旨が近いが、本文の要点（要件・検証済みの根拠・導入条件をつなぐこと）をまとめる役割があり、許容範囲。
- J17 / 該当なし: 体言止めは日本語特有の項目。英語でも修辞疑問の多用はない。
- J18 / 問題なし: 段落は複数の文で構成されており、一文ごとに改行していない。
- J19 / 問題なし: 各段落が、調査概要・解釈・手順など意味のまとまりで区切られている。
- J20 / 問題なし: 箇条書きは使っていない。表は要件ごとの比較構造を示すのに必要。
- J21 / 問題なし: スペルミスや誤記は見当たらない。人名 Hiroyasu Kitagawa は原典の北川裕康氏と一致する。
- J22 / 該当なし: 敬体・常体は日本語特有の項目のため、英語記事には該当しない。
- J23 / 問題なし: 用語は「comparison」「requirement」「implementation conditions」で一貫している。綴りの方式の混在はJ28で扱う。
- J24 / 問題なし: 44.3%／40.3%、¥3 million、23–26 March 2026、307／298 と、数値と単位の書き方は統一されている。
- J25 / 問題あり: 同じサービスを、リンク文では「Japan market GTM and messaging」、canonLabelでは「Japan Market GTM and Messaging」と書いており、大文字表記が揃っていない。
- J26 / 問題なし: GTM、battlecard、API は、想定読者（日本市場を担当する営業・事業責任者）の水準に合っている。
- J27 / 問題なし: 二重表現はない。
- J28 / 問題あり: 英綴り（summarise）と日付表記（23 March）は英国式なのに、引用符はカンマを内側に入れる米国式（“Meets,”）で、規則が混在している。
- P01 / 問題なし: タイトル（fit and implementation conditions）、各見出し、結論の太字文が同じ主張を共有している。descriptionの「champion」は、本文では「customer」と言い換えられているが、矛盾はない。
- P02 / 問題あり: PR TIMESの数値・期間・n数・設問条件・共同調査者名、およびすべてのURLを実際に開いて照合し、一致した。ただし調査対象の説明から「直近12か月以内」という条件が落ちている（Minor）。公開URLが旧版である点はデプロイ後に別途確認する。
- P03 / 問題なし: 仮置きの文やTODOはない。表は「hypothetical examples」と明記されている。
- P04 / 問題なし: 調査の数値を出典リンク付きで要約しているだけで、転載や長い引用はない。
- P05 / 問題なし: 調査の一次発表（PR TIMES）へのリンクがあり、調査主体・期間・n数・調査方法の限定も明記されている。
- P06 / 要確認: 画像・OG画像は今回提供されていない。資料によれば、題名変更に伴う画像・alt・OG見出しの確認はビルド後の工程とされており、本文だけを見て確認済みとはできない。
- P07 / 要確認: 本文は編集部の提案として書かれ、仮定の例も明示されているが、筆者（代表）の意図と一致するかは、本人による全文確認がないため判定できない。
- P08 / 問題なし: 実話・成果・顧客事例は書かれておらず、表と統合の例は仮定の例と明示されている。調査の数値は原典と一致した。
- P09 / 問題なし: 章ごとの役割（調査の根拠／表の構造／制約の開示／共有のタイミング）が分かれており、主張の重複は許容範囲。
- P10 / 要確認: 署名は編集部で、資料によれば代表本人の全文監修は未実施。筆者の見解・文体を反映しているかは本人の確認が必要。

