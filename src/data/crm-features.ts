// Revenue CRM の機能一覧。日本語ページ（/crm/features）と英語ページ
// （/en/crm/features）が同じデータを読む。LP側は要約とリンクだけを持ち、
// 全量はここに一本化する。二重管理をやめるための置き場所。
//
// 記載はすべて実装済みの機能。アプリ側の src/components/app-sidebar.tsx、
// src/app/(dashboard)/settings/page.tsx、src/lib/revops/catalog.ts と
// 突き合わせて作った（2026-08-27時点）。

export type Bi = { ja: string; en: string };

export interface FeatureItem {
  name: Bi;
  desc: Bi;
}

export interface FeatureGroup {
  id: string;
  title: Bi;
  lead: Bi;
  items: FeatureItem[];
}

export const CRM_FEATURES: FeatureGroup[] = [
  {
    id: 'crm-core',
    title: { ja: 'CRMコア', en: 'CRM core' },
    lead: {
      ja: '顧客、案件、対応履歴を1か所に置く。どのエディションでも共通の土台。',
      en: 'Customers, deals, and history in one place. The shared base under every edition.',
    },
    items: [
      {
        name: { ja: 'コンタクト / 会社 / 商談', en: 'Contacts / Companies / Deals' },
        desc: {
          ja: '人と会社と案件を関連づけて持つ。事業タイプに応じて呼び名が変わる（受託開発では商談が案件、B2Cではコンタクトがお客様）。',
          en: 'People, companies, and deals, linked. Nouns follow your edition: deals become projects for contractors, contacts become customers in B2C.',
        },
      },
      {
        name: { ja: 'チケット / タスク / アクティビティ / コール', en: 'Tickets / Tasks / Activities / Calls' },
        desc: {
          ja: '問い合わせ、やること、接触履歴、通話をレコードに紐づけて残す。',
          en: 'Inquiries, to-dos, touch history, and calls, all attached to the record.',
        },
      },
      {
        name: { ja: '商談かんばん', en: 'Deal kanban' },
        desc: {
          ja: 'ステージ間をドラッグで動かす。金額と件数がステージごとに出る。',
          en: 'Drag between stages. Amount and count roll up per stage.',
        },
      },
      {
        name: { ja: 'パイプライン・ステージ管理', en: 'Pipeline & stage management' },
        desc: {
          ja: 'パイプラインを複数持てる。ステージの名前、順序、確度を自社の売り方に合わせる。',
          en: 'Multiple pipelines. Rename, reorder, and re-weight stages to match how you actually sell.',
        },
      },
      {
        name: { ja: 'ライフサイクルステージ', en: 'Lifecycle stages' },
        desc: {
          ja: '購読者からリード、MQL、SQL、商談、顧客、推奨者まで、状態を1本の流れで持つ。',
          en: 'Subscriber, lead, MQL, SQL, opportunity, customer, evangelist. One state machine, not seven opinions.',
        },
      },
      {
        name: { ja: 'リード転換', en: 'Lead conversion' },
        desc: {
          ja: 'ステージ変更と同時に商談を作る。問い合わせから案件への切り替えを1操作で。',
          en: 'Change the stage and create the deal in one move, from inquiry to opportunity.',
        },
      },
      {
        name: { ja: '重複統合と会社の名寄せ', en: 'Dedup & account matching' },
        desc: {
          ja: 'メールアドレスを主キーに既存を判定し、空いている項目だけを埋める。フォーム、API、インポートのどこから入っても同じ入口を通る。',
          en: 'Email is the key. Existing records get their blanks filled, never overwritten. Forms, API, and imports all come through the same door.',
        },
      },
      {
        name: { ja: 'メモ・添付ファイル・お気に入り', en: 'Notes, attachments & favorites' },
        desc: {
          ja: 'レコードにメモとファイルを残す。よく見るレコードはピン留めしておく。',
          en: 'Keep notes and files on the record. Pin the ones you open every day.',
        },
      },
      {
        name: { ja: 'レコード間のリレーション', en: 'Record-to-record relations' },
        desc: {
          ja: '標準の紐づけに加えて、自社で定義した関係でレコードをつなぐ。',
          en: 'Link records through your own defined relationships, on top of the built-in associations.',
        },
      },
      {
        name: { ja: '保存ビュー・全文検索', en: 'Saved views & global search' },
        desc: {
          ja: '絞り込み条件を保存して使い回す。全オブジェクトを横断して検索する。',
          en: 'Save a filtered view and reuse it. Search across every object from one box.',
        },
      },
    ],
  },
  {
    id: 'ai',
    title: { ja: 'AI（Jade）', en: 'AI (Jade)' },
    lead: {
      ja: '入力を減らし、記録から判断材料を取り出す。CRMの外にある情報も、Jadeが中へ運ぶ。',
      en: 'Less typing in, more judgment out. Jade also carries what lives outside the CRM into it.',
    },
    items: [
      {
        name: { ja: 'Jade（日本語でCRMを操作）', en: 'Jade (run the CRM in plain language)' },
        desc: {
          ja: '検索、集計、コンタクトやタスクの作成を会話で行う。項目名を覚えなくていい。',
          en: 'Search, aggregate, and create contacts and tasks by asking. No field names to memorize.',
        },
      },
      {
        name: { ja: '次の一手と初回メッセージ案', en: 'Next best action & first-message draft' },
        desc: {
          ja: 'MQLになった時点で、AIが取るべき行動、チャネル、初回メッセージ案、渡す資料を作り、初回接触タスクに添える。',
          en: 'The moment a lead becomes an MQL, AI drafts the action, the channel, the first message, and the asset to send, and attaches them to the first-touch task.',
        },
      },
      {
        name: { ja: 'AIブリーフィング', en: 'AI briefing' },
        desc: {
          ja: 'ダッシュボードの数字が前回から何がどう動いたかを、文章で先に出す。',
          en: 'The dashboard tells you in words what moved since last time, before you read the numbers.',
        },
      },
      {
        name: { ja: '根拠つきのAI提案', en: 'AI suggestions, with justification' },
        desc: {
          ja: '提案できる行動の種類はあらかじめ決めてあり、必ず理由が付く。自由記述で何でも言わせない作りにしてある。',
          en: 'The set of actions the model may propose is fixed in advance, and every suggestion carries its reason. It cannot invent a new instruction for you.',
        },
      },
      {
        name: { ja: '通話解析', en: 'Call analysis' },
        desc: {
          ja: '商談の音声からMEDDPICC / BANT / CHAMP / SPINで論点を抽出し、埋まっていない項目を出す。',
          en: 'Pull MEDDPICC / BANT / CHAMP / SPIN signals out of a call recording, and show what is still unanswered.',
        },
      },
      {
        name: { ja: '名刺スキャン', en: 'Business card scanning' },
        desc: {
          ja: '写真1枚から17項目を読み取ってコンタクトを作る。',
          en: 'One photo, 17 fields, a new contact.',
        },
      },
      {
        name: { ja: '手書き・ホワイトボードの読み取り', en: 'Handwriting & whiteboard capture' },
        desc: {
          ja: '打合せのメモやホワイトボードの写真を、そのままレコードへ起こす。',
          en: 'Turn a photo of meeting notes or a whiteboard into records.',
        },
      },
      {
        name: { ja: '会話の取り込み', en: 'Chat import' },
        desc: {
          ja: 'LINE / Slack / Chatworkのやりとりを貼ると、要約と次のアクションを付けて履歴に残す。',
          en: 'Paste a LINE / Slack / Chatwork thread. It lands in the history with a summary and next steps.',
        },
      },
      {
        name: { ja: '音声入力・文字起こし', en: 'Voice input & transcription' },
        desc: {
          ja: '移動中に話した内容を文字にして記録する。',
          en: 'Speak on the move, get it written down.',
        },
      },
      {
        name: { ja: 'Webリサーチ・要約・分類', en: 'Web research, summarization & classification' },
        desc: {
          ja: '出典つきで調べる。長い記録を要約する。問い合わせを分類する。',
          en: 'Research with citations, summarize long records, and classify inbound.',
        },
      },
      {
        name: { ja: '添付ファイルの全文抽出とセマンティック検索', en: 'Full-text extraction from attachments, with semantic search' },
        desc: {
          ja: '提案書や議事録の中身まで検索対象にする。ファイル名を覚えていなくても出る。',
          en: 'Search inside proposals and minutes, not just their filenames.',
        },
      },
      {
        name: { ja: '企業リサーチとICP判定', en: 'Company research & ICP tiering' },
        desc: {
          ja: '会社を調べてICPのどこに当たるかを判定し、優先順位づけに使う。',
          en: 'Research a company, place it against your ICP, and use that to prioritize.',
        },
      },
      {
        name: { ja: 'AI学習・チューニング', en: 'AI learning & tuning' },
        desc: {
          ja: '人が直した結果を次の指示文へ反映する。採用の判断は数字で、停止の判断は人が行う。',
          en: 'Corrections feed the next prompt. Adoption is decided by the numbers, stopping is decided by a person.',
        },
      },
      {
        name: { ja: '実行前の安全ゲート', en: 'Safety gate before execution' },
        desc: {
          ja: 'Jadeがデータを書き換える操作は、すべて1か所のゲートを通る。読むだけの操作と、書き込む操作を分けてある。',
          en: 'Every write Jade attempts passes through a single gate. Reading and writing are not the same permission.',
        },
      },
      {
        name: { ja: 'APIキーの持ち込み（BYOK）', en: 'Bring your own key (BYOK)' },
        desc: {
          ja: 'Anthropic / OpenAI / Gemini / Azure OpenAIの自社キーでJadeを動かせる。',
          en: 'Run Jade on your own Anthropic / OpenAI / Gemini / Azure OpenAI key.',
        },
      },
      {
        name: { ja: 'ワークスペースクレジット', en: 'Workspace credits' },
        desc: {
          ja: 'AI機能と自動化が使ったクレジットを、ワークスペース単位で管理する。',
          en: 'Track what AI features and automation consume, per workspace.',
        },
      },
    ],
  },
  {
    id: 'automation',
    title: { ja: '自動化（RevOpsワークフロー175本）', en: 'RevOps automation (175 workflows)' },
    lead: {
      ja: '自分で組む前に、必要なものをONにする。マーケティング59本、セールス59本、カスタマーサクセス57本。',
      en: 'Switch on what you need before you build anything. 59 marketing, 59 sales, 57 customer success.',
    },
    items: [
      {
        name: { ja: '175本のワークフローカタログ', en: 'A catalog of 175 pre-built workflows' },
        desc: {
          ja: 'イベント駆動、スコアリング、AI拡張、データ衛生、ライフサイクル、分析、ガバナンス、外部連携、設定の9種類で整理してある。',
          en: 'Organized into nine mechanisms: event-driven, scoring, AI, data hygiene, lifecycle, analytics, governance, integration, and config.',
        },
      },
      {
        name: { ja: '事業タイプ別の初期ON', en: 'Defaults per edition' },
        desc: {
          ja: '受託開発、代理店、B2C、B2Bそれぞれの中心となるループが最初からONになっている。',
          en: 'Contractor, reseller, B2C, and B2B each start with their core loop already on.',
        },
      },
      {
        name: { ja: '滞留商談のアラート', en: 'Stalled-deal alerts' },
        desc: {
          ja: '動いていない商談を検知して担当者に通知する。',
          en: 'Detect deals that have stopped moving and tell the owner.',
        },
      },
      {
        name: { ja: 'SLAエスカレーション', en: 'SLA escalation' },
        desc: {
          ja: '対応期限を超えた問い合わせを上位へ上げる。',
          en: 'Escalate inquiries that pass their response deadline.',
        },
      },
      {
        name: { ja: '更新商談の自動作成', en: 'Automatic renewal-deal creation' },
        desc: {
          ja: '契約の更新日から逆算して、更新の商談を先に立てる。',
          en: 'Work back from the contract date and open the renewal deal before it is due.',
        },
      },
      {
        name: { ja: '課題別ナーチャリング・休眠掘り起こし', en: 'Pain-based nurturing & dormant reactivation' },
        desc: {
          ja: '閲覧したコンテンツや反応のない期間を起点に、次の接触を自動で組む。',
          en: 'Trigger the next touch from what they read, or from how long they have been quiet.',
        },
      },
      {
        name: { ja: 'アップセル候補の検知', en: 'Cross-sell & upsell candidates' },
        desc: {
          ja: '利用拡大のシグナルから、提案できる先を出す。',
          en: 'Surface who to approach next from expansion signals.',
        },
      },
      {
        name: { ja: 'ON / OFFとシーケンス紐づけ', en: 'Toggle on/off, attach sequences' },
        desc: {
          ja: '1本ずつ切り替え、送るメールのシーケンスを紐づける。',
          en: 'Switch each one on or off, and attach the email sequence it should send.',
        },
      },
    ],
  },
  {
    id: 'marketing',
    title: { ja: 'マーケティング', en: 'Marketing' },
    lead: {
      ja: '集めた先で切れないように、フォームから配信まで同じデータの上に置く。',
      en: 'From form to send, on the same data, so the handoff does not break.',
    },
    items: [
      {
        name: { ja: 'フォームビルダー', en: 'Form builder' },
        desc: {
          ja: '公開ページ付きのフォームを作る。送信でコンタクトが自動で立つ。',
          en: 'Build a form with a public page. A submission creates the contact.',
        },
      },
      {
        name: { ja: 'メール配信', en: 'Email delivery' },
        desc: {
          ja: 'テンプレートとキャンペーンで一斉配信する。',
          en: 'Templates and campaigns for one-to-many sends.',
        },
      },
      {
        name: { ja: 'メールのブロックエディタ', en: 'Drag-and-drop email builder' },
        desc: {
          ja: 'ブロックを並べて組む。HTMLはインラインCSSで書き出すので、受信側で崩れにくい。',
          en: 'Stack blocks to build it. The HTML ships with inline CSS, so it survives the inbox.',
        },
      },
      {
        name: { ja: '開封・クリック計測', en: 'Open & click tracking' },
        desc: {
          ja: '反応を個人単位で記録し、スコアと次の接触につなぐ。',
          en: 'Record response per person, and feed it into scoring and the next touch.',
        },
      },
      {
        name: { ja: '配信停止管理', en: 'Unsubscribe management' },
        desc: {
          ja: '停止と除外リストを一元で持つ。誤送信を仕組みで防ぐ。',
          en: 'One place for opt-outs and suppression, so a wrong send is structurally blocked.',
        },
      },
      {
        name: { ja: '同意ゲート', en: 'Consent gate' },
        desc: {
          ja: 'メール配信、営業の接触、リストへの追加の前に必ず参照される。止めた人に届かないことを、運用ではなく仕組みで担保する。',
          en: 'Checked before any outbound send, outreach, or list inclusion. Opt-outs are enforced by the system, not by discipline.',
        },
      },
      {
        name: { ja: '静的リスト / 動的リスト', en: 'Static & dynamic lists' },
        desc: {
          ja: '条件が変われば自動で出入りするリストを持てる。',
          en: 'Lists that add and drop people as the conditions change.',
        },
      },
      {
        name: { ja: 'ワークフロー', en: 'Workflows' },
        desc: {
          ja: 'トリガー、条件分岐、待機を並べて自分で組む。',
          en: 'Build your own with triggers, conditional branches, and delays.',
        },
      },
    ],
  },
  {
    id: 'sales',
    title: { ja: 'セールス', en: 'Sales' },
    lead: {
      ja: '数字を正確にする。そして、どこで止まっているかを見つける。',
      en: 'Get the number right. Then find where it stopped.',
    },
    items: [
      {
        name: { ja: 'フォーキャスト', en: 'Forecasting' },
        desc: {
          ja: 'カテゴリ別に積み上げて着地を出す。担当の主観と分けて見る。',
          en: 'Roll up by category to a landing number, kept separate from the rep gut feel.',
        },
      },
      {
        name: { ja: 'フォーキャスト精度の計測', en: 'Forecast accuracy' },
        desc: {
          ja: '四半期のフォーキャストを毎日記録し、早い段階の読みと実際の着地を後から比べられる。',
          en: 'A daily snapshot of the quarter, so you can compare the early call against where it actually landed.',
        },
      },
      {
        name: { ja: 'パイプライン診断', en: 'Pipeline review' },
        desc: {
          ja: 'どのステージで何件が止まっているかを出す。件数ではなく詰まりを見る画面。',
          en: 'Where deals are stuck and how many. A screen about the blockage, not the count.',
        },
      },
      {
        name: { ja: 'リードスコアリング', en: 'Lead scoring' },
        desc: {
          ja: 'ルールベースでA〜Fに格付けする。なぜその点数かが説明できる。',
          en: 'Rules-based grades A to F, where you can always explain the score.',
        },
      },
      {
        name: { ja: 'リードルーティング', en: 'Lead routing' },
        desc: {
          ja: '既にいる担当を優先し、いなければ現在の保有件数を見て振り分ける。',
          en: 'Keep the existing owner. When there is none, assign by who is carrying the least right now.',
        },
      },
      {
        name: { ja: 'シーケンス', en: 'Sequences' },
        desc: {
          ja: '複数ステップのフォローを自動で回す。返信で止まる。',
          en: 'Automated multi-step follow-up that stops on a reply.',
        },
      },
      {
        name: { ja: '送信待ちの下書き', en: 'Drafts waiting to send' },
        desc: {
          ja: 'AIが作った送信文を、人が承認してから出す。自動送信にしない置き場所。',
          en: 'AI writes it, a person approves it, then it goes. The place that keeps sending from being automatic.',
        },
      },
      {
        name: { ja: '見積書', en: 'Quotes' },
        desc: {
          ja: '明細、税率、ステータスを持つ。商談と製品マスタにつながる。',
          en: 'Line items, tax rates, and status, tied to the deal and the product catalog.',
        },
      },
      {
        name: { ja: '製品マスタ', en: 'Product catalog' },
        desc: {
          ja: '売るものと価格を一元管理し、見積と商談から引く。',
          en: 'One list of what you sell and for how much, pulled into quotes and deals.',
        },
      },
      {
        name: { ja: 'コンタクトロール', en: 'Contact roles' },
        desc: {
          ja: '決裁者、推進者などの役割を商談ごとに持つ。誰に会えていないかが分かる。',
          en: 'Decision maker, champion, and the rest, per deal, so you can see who you have not met.',
        },
      },
    ],
  },
  {
    id: 'delivery',
    title: { ja: 'デリバリー', en: 'Delivery' },
    lead: {
      ja: '受注のあとを見る。受託開発やプロジェクト型の商売で使う。',
      en: 'What happens after the win. For contractors and project-based businesses.',
    },
    items: [
      {
        name: { ja: '納品管理', en: 'Delivery tracking' },
        desc: {
          ja: '受注した案件の進行を、商談と同じデータの上で追う。',
          en: 'Track won work on the same data as the deal that produced it.',
        },
      },
      {
        name: { ja: '空き枠カレンダー', en: 'Capacity calendar' },
        desc: {
          ja: 'メンバーの人日/週と割当を見て、受けられる量を先に把握する。',
          en: 'Person-days per week and what is already allocated, so you know what you can take on.',
        },
      },
      {
        name: { ja: '見積から納品までの自動化', en: 'Quote-to-delivery automation' },
        desc: {
          ja: '見積作成、滞留アラート、フォーキャスト更新、受注処理、保守契約の更新日管理が最初からONになる。',
          en: 'Quote prep, stalled alerts, forecast updates, won processing, and maintenance renewal dates, on from day one.',
        },
      },
      {
        name: { ja: 'HubSpotへの書き戻し', en: 'HubSpot push' },
        desc: {
          ja: 'CRM側のリストをHubSpotの静的リストとして送る。読み取り取り込みの逆方向。',
          en: 'Push a list from the CRM into HubSpot as a static list. The write-back half of the connection.',
        },
      },
    ],
  },
  {
    id: 'cs',
    title: { ja: 'カスタマーサクセス', en: 'Customer Success' },
    lead: {
      ja: '解約の予兆を、起きる前に数字で見る。',
      en: 'See churn in the numbers before it happens.',
    },
    items: [
      {
        name: { ja: 'ヘルススコアとリスク中の収益', en: 'Health scores & revenue at risk' },
        desc: {
          ja: '顧客ごとの健全性と、リスクにさらされているMRRを一覧で出す。',
          en: 'Health per customer, and the MRR currently exposed, in one list.',
        },
      },
      {
        name: { ja: 'サクセスプラン', en: 'Success plans' },
        desc: {
          ja: '顧客ごとの目標と指標を持ち、達成状況を追う。',
          en: 'Goals and metrics per customer, and how far along they are.',
        },
      },
      {
        name: { ja: 'CSプレイブック', en: 'CS playbooks' },
        desc: {
          ja: '導入、更新、リスク対応の手順を型にして回す。',
          en: 'Onboarding, renewal, and risk response as a repeatable sequence of steps.',
        },
      },
      {
        name: { ja: 'インボックス', en: 'Omnichannel inbox' },
        desc: {
          ja: 'チャット、メール、APIから来た会話を1つの受信箱で扱う。',
          en: 'Chat, email, and API conversations in one box.',
        },
      },
      {
        name: { ja: '埋め込みチャットウィジェット', en: 'Embeddable chat widget' },
        desc: {
          ja: '自社サイトに置いてリアルタイムで受ける。会話はそのままCRMに残る。',
          en: 'Drop it on your site and answer in real time. The conversation stays in the CRM.',
        },
      },
      {
        name: { ja: '受信メールの会話化', en: 'Inbound email as conversations' },
        desc: {
          ja: '届いたメールを会話として扱い、担当とステータスを持たせる。',
          en: 'Incoming mail becomes a conversation with an owner and a status.',
        },
      },
      {
        name: { ja: '社内Wiki', en: 'Knowledge base' },
        desc: {
          ja: '自社の手順や回答をテナント内に蓄積する。製品の使い方（ヘルプ）とは別に持つ。',
          en: 'Your own procedures and answers, kept inside your tenant, separate from the product help.',
        },
      },
      {
        name: { ja: 'サーベイ（NPS / CSAT / CES）', en: 'Surveys (NPS / CSAT / CES)' },
        desc: {
          ja: '3種類の指標を取り、顧客レコードに紐づけて経過を見る。',
          en: 'Three standard measures, attached to the customer record and tracked over time.',
        },
      },
    ],
  },
  {
    id: 'subscriptions',
    title: { ja: 'サブスク・請求', en: 'Subscriptions & billing' },
    lead: {
      ja: '継続収益を扱う商売のための土台。代理店とB2Cで最初から出る。',
      en: 'The base for recurring revenue. On by default for resellers and B2C.',
    },
    items: [
      {
        name: { ja: 'エディション切り替え', en: 'Edition switch' },
        desc: {
          ja: 'B2B / 受託開発 / 代理店 / B2Cで、出る画面と呼び名と初期の自動化が変わる。コードは分岐しない。',
          en: 'B2B, contractor, reseller, or B2C changes the nav, the nouns, and the default automations. Not the code base.',
        },
      },
      {
        name: { ja: '契約・サブスク管理', en: 'Subscription management' },
        desc: {
          ja: '契約を独立したレコードとして持ち、更新日と状態を追う。',
          en: 'Contracts as first-class records, with renewal dates and status.',
        },
      },
      {
        name: { ja: '継続収益の指標', en: 'Recurring metrics' },
        desc: {
          ja: 'MRR、ARR、解約率、LTVを自動で計算する。',
          en: 'MRR, ARR, churn rate, and LTV, computed for you.',
        },
      },
      {
        name: { ja: 'Stripe連携', en: 'Stripe' },
        desc: {
          ja: '顧客の同期、決済リンク、請求書。CRMの契約と突き合わせる。',
          en: 'Customer sync, payment links, and invoices, reconciled against the CRM contract.',
        },
      },
    ],
  },
  {
    id: 'platform',
    title: { ja: 'データ構造と拡張', en: 'Data model & extensibility' },
    lead: {
      ja: '自社の商売に合わせて構造を足す。標準で足りないところだけ。',
      en: 'Extend the structure to fit your business, only where the built-ins fall short.',
    },
    items: [
      {
        name: { ja: 'カスタムオブジェクト', en: 'Custom objects' },
        desc: {
          ja: '標準にないレコード種別を自分で定義する。',
          en: 'Define record types the product does not ship with.',
        },
      },
      {
        name: { ja: 'カスタム項目', en: 'Custom fields' },
        desc: {
          ja: '既存のオブジェクトに独自の入力項目を足す。',
          en: 'Add your own fields to the built-in objects.',
        },
      },
      {
        name: { ja: 'レコードタイプ', en: 'Record types' },
        desc: {
          ja: '1つのオブジェクトの中で業務タイプを切り替える。',
          en: 'Switch business types inside a single object.',
        },
      },
      {
        name: { ja: 'リレーション定義', en: 'Relationship definitions' },
        desc: {
          ja: 'アソシエーション、中間オブジェクト、多対多の関係を定義する。',
          en: 'Associations, junction objects, and many-to-many relations.',
        },
      },
      {
        name: { ja: 'REST API / GraphQL / MCPサーバー', en: 'REST API / GraphQL / MCP server' },
        desc: {
          ja: '3つの経路で外から叩ける。MCPサーバーがあるのでAIツールから直接つながる。',
          en: 'Three ways in from outside. The MCP server lets AI tools connect directly.',
        },
      },
      {
        name: { ja: 'Webhook（送信）', en: 'Outbound webhooks' },
        desc: {
          ja: 'レコードの変更を外部へ通知する。署名つきで、配信ログが残る。',
          en: 'Notify external systems when records change. Signed, with delivery logs.',
        },
      },
      {
        name: { ja: 'CRM連携（読み取り）', en: 'CRM sync (read)' },
        desc: {
          ja: '他社CRMから商談と連絡先を取り込む。移行の途中でも並走できる。',
          en: 'Pull deals and contacts from another CRM, so the two can run side by side during a migration.',
        },
      },
      {
        name: { ja: '外部サービス連携', en: 'Integrations' },
        desc: {
          ja: 'Notion / Google / LinkedIn / Stripe。',
          en: 'Notion, Google, LinkedIn, and Stripe.',
        },
      },
    ],
  },
  {
    id: 'admin',
    title: { ja: '権限・運用・セキュリティ', en: 'Admin, security & operations' },
    lead: {
      ja: '誰が何を見られるか、誰がいつ何を変えたか。後から足せない部分。',
      en: 'Who can see what, and who changed what when. The part you cannot bolt on later.',
    },
    items: [
      {
        name: { ja: '権限管理', en: 'Permissions' },
        desc: {
          ja: 'ロールごとに閲覧、編集、削除、書き出しを設定する。金額の見え方まで連動する。',
          en: 'View, edit, delete, and export per role, right down to whether amounts are visible.',
        },
      },
      {
        name: { ja: '職種ペルソナ', en: 'Job-function personas' },
        desc: {
          ja: '営業、マーケ、CSなど担当領域に合わせて出る画面を絞る。権限とは別軸で、兼務があれば複数持てる。',
          en: 'Narrow the nav to the person’s actual job. Separate from RBAC, and you can hold several at once.',
        },
      },
      {
        name: { ja: '監査ログ', en: 'Audit log' },
        desc: {
          ja: '誰がいつ何を変えたかを記録する。',
          en: 'Who changed what, and when.',
        },
      },
      {
        name: { ja: 'メンバー・チーム管理', en: 'Members & teams' },
        desc: {
          ja: '招待、ロール、チーム編成。複数ワークスペースを行き来できる。',
          en: 'Invites, roles, and team structure, across multiple workspaces.',
        },
      },
      {
        name: { ja: 'メール送信ドメイン', en: 'Sending domain' },
        desc: {
          ja: 'SPF / DKIMを設定して、自社ドメインの差出人で送る。',
          en: 'Set up SPF and DKIM and send from your own domain.',
        },
      },
      {
        name: { ja: '営業通知', en: 'Sales notifications' },
        desc: {
          ja: '商談やタスクの動きをメールとSlackへ流す。',
          en: 'Push deal and task activity to email and Slack.',
        },
      },
      {
        name: { ja: '週次ダイジェスト', en: 'Weekly digest' },
        desc: {
          ja: '月曜の朝に、先週の動きと止まっている商談を1通にまとめて送る。',
          en: 'One Monday email: last week’s movement and the deals that stopped.',
        },
      },
      {
        name: { ja: 'ICP定義', en: 'ICP definition' },
        desc: {
          ja: '狙う顧客像を定義し、スコアリングとAI判定の基準にする。',
          en: 'Define the customer you are after, and use it as the basis for scoring and AI judgment.',
        },
      },
      {
        name: { ja: 'ゴミ箱', en: 'Trash' },
        desc: {
          ja: '削除したレコードを保持期間内なら元に戻せる。',
          en: 'Restore records deleted within the retention window.',
        },
      },
      {
        name: { ja: 'レート制限とAI利用上限', en: 'Rate limits & AI quota' },
        desc: {
          ja: '公開エンドポイントにレート制限、トライアル中のAI呼び出しに日次上限を置く。',
          en: 'Rate limits on public endpoints, and a daily cap on AI calls during trial.',
        },
      },
      {
        name: { ja: '用語集', en: 'Glossary' },
        desc: {
          ja: '社内Wikiとヘルプに出る業界用語に解説を付ける。知らない人が読んでも止まらない。',
          en: 'Industry terms in the wiki and help carry their own explanation, so a newcomer does not stall on them.',
        },
      },
      {
        name: { ja: '紹介プログラム', en: 'Referral program' },
        desc: {
          ja: '他社を紹介すると、紹介先の月額の20%が自社の請求から引かれる。',
          en: 'Refer another company and take 20% of their fee off your own bill.',
        },
      },
      {
        name: { ja: '3言語対応', en: 'Trilingual' },
        desc: {
          ja: '日本語 / English / 繁體中文。UI全体が切り替わる。',
          en: 'Japanese, English, and Traditional Chinese. The whole UI switches.',
        },
      },
    ],
  },
];

export function featureCount(): number {
  return CRM_FEATURES.reduce((n, g) => n + g.items.length, 0);
}
