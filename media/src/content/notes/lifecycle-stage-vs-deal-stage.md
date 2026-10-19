---
title: ライフサイクルステージと取引ステージの違い、混同した結果
description: ライフサイクルステージと取引ステージの違いを、混同して設計した案件から書きます。HubSpotで、ライフサイクルステージ（相手との関係）を取引ステージ（案件の進み具合）に合わせて動かす設計にした案件の記録です。取引は失注に移っても、ライフサイクルは自動では戻りません。案件の件数と配信リストがずれた仕組みと、2つを分けて直した手順を書きます。
publishedAt: 2026-07-25
updatedAt: 2026-10-17
category: crm
principle: ライフサイクルステージで案件の進み具合を表さない。失注も受注も取引の側で表し、ライフサイクルには「どういう関係になったか」だけを持たせる。
canonUrl: https://consilegy.com/revenue-architecture/
canonLabel: レベニューアーキテクチャとは
---

HubSpotの導入で、ライフサイクルステージ（その人や会社と、いまどういう関係にあるか）を、取引ステージ（案件がどこまで進んだか）と同じ「進み具合」として、一本の流れで設計しました。

数週間後、レポートの「商談中の件数」が営業の手元の数より多くなり、案件が動いている相手向けのメールが、失注した相手にも届きました。

**原因は、ライフサイクルステージで案件の進み具合を表そうとしたことでした。2つは似て見えますが、数えているものが違います。**

## 取引が進むとライフサイクルも進む、一本の流れにした

情報通信業、従業員数十名規模の会社です。HubSpotを新しく入れ、問い合わせから受注までを1つの画面でたどれるようにしたい、という依頼でした。

担当者の頭の中では「問い合わせ→商談→受注」が一続きで、ライフサイクルステージと取引ステージは、どちらも「どこまで進んだか」を表す同じものに見えていました。

そこで、取引の段階にライフサイクルを連動させました。取引ができたら連絡先はOpportunity（案件化）、受注したらCustomer（顧客）。

営業は取引だけを動かせば、連絡先の段階もついてくる。画面の上では、きれいな一本の流れです。

## 取引は失注に移れるが、ライフサイクルは戻らない

ずれが出たのは、失注した案件でした。

取引は失注の段階に移ります。一方、連絡先のライフサイクルはOpportunityのまま残りました。

HubSpotのライフサイクルステージは、フォームやワークフローのような自動の更新では前にしか進まず、後ろに戻すには、人が手で直すか、一度値を消してから入れ直す必要があります。

一本化した設計は、取引と同じように行き来する前提で組まれていました。

<figure class="note-figure"><svg viewBox="0 0 400 290" role="img" aria-label="取引ステージとライフサイクルの連動。取引を作るとOpportunity、受注でCustomerに進むが、失注してもライフサイクルはOpportunityのまま戻らない"><defs><marker id="m-lc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="fig-head" d="M0,0 L10,5 L0,10 z"/></marker></defs><text class="fig-strong" x="90" y="22" text-anchor="middle">取引ステージ</text><text class="fig-small" x="90" y="40" text-anchor="middle">案件の進み具合</text><text class="fig-strong" x="310" y="22" text-anchor="middle">ライフサイクル</text><text class="fig-small" x="310" y="40" text-anchor="middle">相手との関係</text><rect class="fig-box" x="15" y="60" width="150" height="46" rx="2"/><text class="fig-strong" x="90" y="88" text-anchor="middle">取引を作成</text><rect class="fig-box" x="235" y="60" width="150" height="46" rx="2"/><text class="fig-strong" x="310" y="88" text-anchor="middle">Opportunity</text><line class="fig-line" x1="167" y1="83" x2="232" y2="83" marker-end="url(#m-lc)"/><text class="fig-small" x="200" y="75" text-anchor="middle">進む</text><rect class="fig-box" x="15" y="130" width="150" height="46" rx="2"/><text class="fig-strong" x="90" y="158" text-anchor="middle">受注</text><rect class="fig-box" x="235" y="130" width="150" height="46" rx="2"/><text class="fig-strong" x="310" y="158" text-anchor="middle">Customer</text><line class="fig-line" x1="167" y1="153" x2="232" y2="153" marker-end="url(#m-lc)"/><text class="fig-small" x="200" y="145" text-anchor="middle">進む</text><rect class="fig-box-accent" x="15" y="200" width="150" height="46" rx="2"/><text class="fig-strong" x="90" y="228" text-anchor="middle">失注</text><rect class="fig-box-dash" x="235" y="200" width="150" height="46" rx="2"/><text class="fig-accent" x="310" y="228" text-anchor="middle">Opportunityのまま</text><line class="fig-line-dash" x1="167" y1="223" x2="232" y2="223" marker-end="url(#m-lc)"/><text class="fig-accent" x="200" y="215" text-anchor="middle">戻らない</text><text class="fig-small" x="200" y="280" text-anchor="middle">失注した相手も Opportunity に残り、件数と配信リストがずれる</text></svg><figcaption>取引ステージにライフサイクルを連動させた設計。進む方向には動くが、失注しても戻らない。</figcaption></figure>

その結果、2つのことが起きました。

- 「商談中の件数」のレポートは、ライフサイクルがOpportunityの連絡先を数えていました。失注した相手もそこに残るので、件数は営業がいま追っている案件の数より多くなりました。
- 案件が動いている相手向けのフォローのメールは、配信リストの条件を「ライフサイクルがOpportunity」にしていました。失注した相手もこの条件に合うので、配信されました。

失注のたびに手でライフサイクルを戻す運用も案に出ました。

ただ、誰かが毎回思い出す前提の運用は、必ずどこかで抜けます。抜けた分だけ、また同じずれが積み上がります。

## 失注は取引で表し、ライフサイクルは戻さない

直し方は、ライフサイクルを戻す仕組みを足すことではありませんでした。ライフサイクルに案件の状態を持たせるのを、やめました。

**ライフサイクルは「どういう関係になったか」だけを表す。** 一度案件まで進んだ相手は、失注してもOpportunityのまま置きます。

意味は「いま商談中」ではなく「案件化したことがある相手」です。レポートを見る人とも、この読み方を揃えます。

**進める条件は、機械が判定できるものにする。** 問い合わせフォームの送信でLead、取引の作成でOpportunity、受注でCustomer。人には触らせません。

**「いま動いている案件」は取引で数える。** 進行中の件数は、受注でも失注でもない段階にある取引を数えます。フォローのメールの配信リストも、ライフサイクルではなく、紐づく取引の段階を条件に組み直しました。

この形にしてから、商談中の件数は営業の手元の数と一致し、失注した相手への配信は止まりました。

**失注した相手が再び動いたら、ライフサイクルではなく別の項目で拾う。** 失注した相手が、後日また問い合わせてくることがあります。このときもライフサイクルは戻しません。

Opportunityのままなので、ライフサイクルがMQLやSQLに変わったことを起点にした担当の割り当てや営業への通知は、2回目の問い合わせでは動きません。

再び動いたことは、リードステータスや直近の問い合わせ日のような行動の項目で拾い、割り当てや通知の条件もそちらに置きます。既存の割り当てや通知のワークフローがライフサイクルの変化を起点にしていないかは、切り替えるときに一覧で確かめておきます。

1件の会社が同時に複数の案件を持つこともあります。そのとき取引は案件の数だけ並びますが、ライフサイクルは1つしかありません。

案件の進み具合を1つの値に押し込もうとした時点で、どこかで食い違うのは避けられませんでした。

**ライフサイクルステージで案件の進み具合を表さないでください。失注も受注も取引の側で表し、ライフサイクルには「どういう関係になったか」だけを持たせます。**

整った1本より、正しく分かれた2本です。

## 関連する記事

この記事は実際に混同した案件の話です。ライフサイクルステージそのものの定義、既定8段階の意味、前にしか進まない仕様と戻すときの手順は、[ライフサイクルステージとは何か。HubSpotでの定義と、設計で先に決めること](/lifecycle-stage-definition-and-design/)にまとめました。

ステージを分けた次に効いてくるのが、集計の母数です。[商談化率が部署ごとに違うのは、母数の定義がずれているから](/define-the-denominator-first/)で、定義を揃える手順を扱っています。

同じカテゴリの記事は「[CRM・SFA](/category/crm/)」にまとめています。
