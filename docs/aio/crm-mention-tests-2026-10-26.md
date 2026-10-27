# Revenue CRM：AI回答の手動メンションテスト

確認日：2026-10-26（日本時間）、今回の事例公開後。

## 条件

Bing AI Mode / Copilot Searchを、ログインしていないブラウザで利用。質問ごとに別タブの新規会話を作り、このチャットの製品情報や過去の回答は渡していない。日本語の質問を1回ずつ実行した単発観測であり、全AIサービスの紹介率や一般的な再現性を示すテストではない。

今回の操作で発生した合成テストを、一般利用者による自然な引用実績と混ぜない。商品名の言及と、consilegy.comへの出典リンクは別項目で扱う。競合の機能・価格についてAI回答の正確性を検証したものではない。

## 質問と結果

| 区分 | 入力した質問 | 完了した回答で観測した結果 |
| --- | --- | --- |
| 非指名・スクール | オンライン英会話スクールで、LINEの課題確認とGoogleカレンダーの予約をまとめて管理できるシステムを教えて | Revenue CRMの言及なし。Lステップ、L Message、RESERVA、Yoomが候補。consilegy.comの引用は確認できず |
| 非指名・法人営業 | 中小企業向けで、AIが名刺や商談メモから入力を減らせる顧客管理システムの候補を、料金と特徴付きで教えて | Revenue CRMの言及なし。Sansan、ホットプロファイル、Knowledge Suite+、SmartViscaなどが候補。consilegy.comの引用は確認できず |
| 非指名・代理店 | SaaS販売代理店向けに、顧客の契約更新、ライセンス数、マージン、MRRをまとめて管理できるCRMの候補を教えて | Revenue CRMの言及なし。HubSpot CRM、Scalebase、補完用途のAdmina / ITboardが候補。consilegy.comの引用は確認できず |
| 指名・対照 | ConsilegyのRevenue CRMとはどんな顧客管理システムですか。公式情報を出典に、対象業種と料金を教えて | Revenue CRMの言及あり。主な説明の引用元はPR TIMESの2026-09-28リリース。関連ソースにBOXIL・ITreview。今回の回答にconsilegy.comの直接引用は確認できず |

指名の回答では、1アカウント月額3,000円（税抜）、スクール50人まで月額9,800円から、175本の自動化などを説明した。一方、「4つのエディション」「支援会社・受託開発をまとめた分類」「パイプラインがセット済み」など、旧リリース由来の説明が残った。現行製品の全条件を正確に答えたものとは扱わない。

## 引用元と証拠

- 指名回答の主要引用元：https://prtimes.jp/main/html/rd/p/000000002.000191457.html
- 関連ソース：https://boxil.jp/service/51195/ 、https://www.itreview.jp/products/revenue-crm/profile
- スクール回答の主要引用先：linestep.jp、lme.jp、digital.reserva.be、lp.yoom.fun
- スクリーンショット：`/private/tmp/consilegy-aio-brand-answer-2026-10-26.png`、`/private/tmp/consilegy-aio-school-answer-2026-10-26.png`
- 各回答のアクセシビリティ本文：`/private/tmp/consilegy-aio-{school,b2b,reseller,branded}-test-2026-10-26.txt`

同日確認したBing Webmaster Toolsの自社ドメイン向けAI Performanceは、2026-09-26〜2026-10-25の集計欄が0、ページ別はNo data available。これは本日の手動テストや他ドメインを出典とする製品メンションとは別の記録。

## 判断

指名では製品説明ができることを確認できた。非指名では今回の3問とも紹介されなかった。ページ構造の整備だけで、非指名のAI推薦を獲得済みとは評価しない。

次の確認は、主要ページの再クロール・登録、参照されている外部掲載情報と現行仕様の整合、同じ質問での後日の観測。公開直後のため、今回の改修に効果がなかったとも断定しない。他サービスの観測は以下に追記。Perplexityは未検証。


## ChatGPT・Gemini・Claudeの追加観測

同日、上記と同じ質問文を使用。ChatGPTはログインなしの独立した新規会話、GeminiはProの一時チャット、Claudeはデスクトップのincognito（画面上のモデル表示：Fable 5.1 Medium）。この会話の製品情報は渡していない。条件が異なり、サービス間の厳密な性能比較には使わない。

| サービス | 非指名・スクール | 非指名・法人営業 | 非指名・代理店 | 指名 |
| --- | --- | --- | --- | --- |
| ChatGPT | 言及なし | Revenue CRMを2番目の比較候補として掲載。公式製品ページと料金FAQを引用 | Revenue CRM代理店版を4番目の候補として掲載。公式代理店ページを引用 | 製品を説明し公式サイトを引用。ただし旧情報が混在 |
| Gemini Pro | 言及なし | 生成途中まで取得。完了結果未確認のため判定しない | 未検証 | 未検証 |
| Claude incognito | 言及なし。Web検索を伴う完了回答を確認 | 未検証 | 未検証 | 未検証 |

ChatGPTの非指名回答に表示された公式リンク：

- 法人営業：https://consilegy.com/crm/ 、https://consilegy.com/crm/faq/pricing/
- 代理店：https://consilegy.com/crm/reseller/

法人営業の回答は月額3,000円／人と説明。代理店の回答はクローズドβの注記も掲載した。指名の回答は公式サイトを引用しつつ「4つのエディション」など旧情報を含んだ。引用されることと、最新仕様が正確に説明されることは別に評価する。今回の改修がメンションを生んだという因果関係は確認できない。

GeminiとClaudeのスクール回答は、それぞれL-Message・Lステップ・STORES予約・SelectType等、Lステップ・Jicoo・Yoom/Make等を案内。Revenue CRMもconsilegy.comの引用も確認できなかった。これだけで両サービス全体で紹介されないとは判断しない。

Geminiの追加検証中にChromeが利用できなくなり、Claudeも利用者による画面変更が検知されたため、追加操作を止めた。途中のGemini法人営業回答は陰性結果に数えない。

証拠はローカルの一時ファイルに保存：

- `/private/tmp/consilegy-chatgpt-{school,b2b,reseller,brand}-test-2026-10-26.txt`
- `/private/tmp/consilegy-gemini-school-test-2026-10-26.txt`
- `/private/tmp/consilegy-claude-school-test-2026-10-26.txt`
- `/private/tmp/consilegy-chatgpt-b2b-mention-2026-10-26.png`（Revenue CRM掲載箇所の画面）

結論：ChatGPTでは非指名2用途で自社サイトの引用を伴う紹介を実測した。スクール用途は今回のChatGPT・Gemini・Claudeの各1回答では未掲載。メンション率の統計ではなく、こちらから行った合成テストの観測記録である。自然流入や一般利用者の引用実績には加算しない。


## 追加11回答で確認した再現性

追加質問・条件・完了状態・引用URLの全記録は `crm-expanded-mention-tests-2026-10-26.json` を参照。以下は先行テストとの合算。掲載数／確認した回答数であり、一般利用における確率やメンション率ではない。

| 非指名の用途 | ChatGPT | Gemini Pro | Claude incognito |
| --- | --- | --- | --- |
| 広い中小企業向け5選 | 0/1 | 未検証 | 未検証 |
| 法人営業・名刺／メモのAI入力削減（同一質問） | 1/2 | 0/1 | 0/1 |
| 法人営業・5人の会社に言い換え | 0/1 | 未検証 | 未検証 |
| SaaS代理店・更新／ライセンス／マージン／MRR（同一質問） | 2/2、両方で公式代理店ページを引用 | 0/1 | 0/1 |
| スクール・LINE／宿題／予約／カレンダー | 0/2（元の質問と言い換え） | 0/1 | 0/1 |

ChatGPT代理店の2回目は回答内の最初の候補に掲載された。これは固定順位の獲得を意味しない。クローズドβの注記も付いた。法人営業は同一質問でも再現せず、前回の掲載を安定した露出と評価するのは早い。

指名対照ではGeminiとClaudeも製品説明ができた。Geminiは引用カードから `https://consilegy.com/crm/pricing/` を確認できた一方、対象業種は東京新聞・BizAIdea等を参照し旧4エディションを説明。ClaudeはPR TIMESの公式発表を主に引用し、旧4エディション・会議ツール連携未対応等を説明した。AIに発見されること、非指名比較で選ばれること、現行仕様が正確に反映されることは別々に追う。

次の優先課題は、スクール事例の再クロール、現在の仕様を示す公式情報と外部掲載情報の整合、今回の質問群を使った別日の再観測。今回の11回答はサイト改修や公開を伴わない検証であり、合成テストとして自然利用の引用数とは分けて記録した。


## 支援会社・受託開発企業の追加確認

質問と条件は `crm-services-mention-tests-2026-10-26.json` に記録。

- 支援会社：継続契約、担当者の稼働・余力、成果報告、契約更新を条件にした。ChatGPT、Geminiとも今回1回答でRevenue CRMの言及・自社サイト引用なし。
- 受託開発・Web制作：営業案件、見積、納品予定、担当者の空き、着手日を条件にした。ChatGPTの今回1回答で言及・自社サイト引用なし。
- Geminiは今回Gemini Autoの一時チャット、ChatGPT支援会社の回答にはbasic modelの案内あり。前回と完全に同条件の比較ではない。
- Gemini受託開発とClaude支援会社は送信済みだが、Chromeで別作業への画面変更が検知され操作を止めたため、完了結果未確認。Claude受託開発は未実施。未確認・未実施を掲載なしに数えない。

ChatGPTは支援会社にFormia・Scoro・Salesforce・kintone・HubSpot＋PSOhub、受託開発にkintone・Zoho CRM＋Projects・monday.com・Salesforce・Jira等を案内。これはAIが挙げた候補の記録であり、各製品の機能の正確性を検証した結果ではない。
