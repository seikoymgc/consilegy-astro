// 製品ショーケース（/products/）に並べる製品。製品を増やすときは products に1件足すだけでよい。
// 画像は各製品ページで使っている実際の画面だけを使う。画面が無い製品は example（実際の表示内容の書き起こし）で見せる。
// 説明文は各製品ページの記載から取る。ここで新しい約束や数字を作らない。

export interface Screen {
	src: string;
	width: number;
	height: number;
	title: string;
	desc: string;
	alt: string;
	/** スマホの縦長の画面 */
	phone?: boolean;
}

export interface Edition {
	name: string;
	lead: string;
	href: string;
	screens: Screen[];
}

export interface Product {
	slug: string;
	name: string;
	/** 開発段階など、名前の横に出す札（例：プロトタイプ） */
	status?: string;
	/** 誰の何を解決するか（一覧の見出しの下に出す1文） */
	summary: string;
	/** どこで使うか・料金の入口など、事実だけを短く */
	facts: string[];
	links: { label: string; href: string; primary?: boolean }[];
	editions?: Edition[];
	/** 画面画像が無い製品の表示例 */
	example?: { caption: string; text: string };
}

const crm = (p: string) => `/images/crm/${p}`;

export const products: Product[] = [
	{
		slug: 'revenue-crm',
		name: 'Revenue CRM',
		summary: '入力がめんどくさくない、中小企業向けのCRMです。名刺は撮るだけ、商談メモは貼るだけで、記録の下書きはAIが作ります。',
		facts: ['ブラウザとスマートフォンで使えます', '全プラン30日間無料', '業種に合わせた4つの版があります'],
		links: [
			{ label: '製品ページ', href: '/crm/', primary: true },
			{ label: 'デモを見る', href: 'https://crm.consilegy.com/demos' },
			{ label: '料金', href: '/crm/pricing/' },
		],
		editions: [
			{
				name: 'B2B版',
				lead: '顧客・商談・タスクを一つの顧客データで管理します。',
				href: '/crm/',
				screens: [
					{ src: crm('screen-dashboard-2026-09.webp'), width: 1600, height: 1000, title: 'ダッシュボード', desc: '最初に見る数字と、次に動く相手を同じ画面で確認します。', alt: 'Revenue CRMのダッシュボード。パイプライン総額、加重フォーキャスト、勝率、期限切れタスク、ステージ別パイプライン、注目の商談を一画面に表示。' },
					{ src: crm('screen-mobile-deals-2026-09.webp'), width: 390, height: 844, title: 'スマートフォン', desc: '商談の一覧は、外出先からスマートフォンでも見られます。', alt: 'スマートフォンで見たRevenue CRMの商談一覧。', phone: true },
					{ src: crm('screen-mobile-dashboard-2026-09.webp'), width: 390, height: 844, title: 'スマートフォンのダッシュボード', desc: 'ダッシュボードも、スマートフォンの幅に合わせて表示されます。', alt: 'スマートフォンで見たRevenue CRMのダッシュボード。', phone: true },
				],
			},
			{
				name: '受託開発版',
				lead: '案件・見積・稼働・納品を1か所で見て、着手できる時期から逆算して見積を出せます。',
				href: '/crm/contractor/',
				screens: [
					{ src: crm('contractor/screen-resources.webp'), width: 1432, height: 840, title: '空き枠カレンダー', desc: 'メンバー×週で、割り当て人日とキャパを並べます。いつ誰が空くかを、感覚ではなく数字で見られます。', alt: '空き枠カレンダーの画面。今週の稼働率54%、今週の空き人日7.8、逼迫週0、余剰週7のカード。その下にメンバー4名×13週の表があり、各セルに割当人日／キャパが入っている。' },
					{ src: crm('contractor/screen-delivery.webp'), width: 1432, height: 840, title: 'デリバリー', desc: 'キックオフ・制作・レビュー・納品の工程を案件ごとに持ちます。滞留日数と期限、想定と実績の人日が同じ行に出ます。', alt: 'デリバリーの画面。案件・会社・金額・デリバリー工程・滞留・期限・想定/実績（人日）の列が並び、6件の受注案件が工程ごとに表示されている。' },
					{ src: crm('contractor/screen-quotes.webp'), width: 1432, height: 840, title: '見積書', desc: '下書き、送付済み、承認のステータスで管理します。明細は人日×単価で積み上げます。', alt: '見積書の一覧画面。4件の見積が、承認・下書き・送付済みのステータスバッジ、コンタクト、会社、合計金額、有効期限つきで並んでいる。' },
				],
			},
			{
				name: '代理店版',
				lead: '契約・更新・継続収益を1か所で見て、更新の90日前から自動で動きます。',
				href: '/crm/reseller/',
				screens: [
					{ src: crm('reseller/screen-subscriptions.webp'), width: 1432, height: 840, title: '契約と継続収益', desc: 'プランごとのマージン、稼働中と解約、MRR・ARR・LTVが1画面に出ます。', alt: 'サブスクの画面。MRR ¥765,000、ARR ¥9,180,000、稼働中6件、解約率0.0%、LTV ¥3,060,000のカードが並び、その下にプラン（マージン率つき）・お客様・ステータス・金額・MRRの契約一覧が出ている。' },
					{ src: crm('reseller/screen-automations.webp'), width: 1432, height: 840, title: '更新・解約リスク監視', desc: '更新日、ヘルス低下、解約予兆、追加提案の候補を早めに知らせます。', alt: '自動化ライブラリの画面。「更新・解約リスク監視」のセットが4/7 ONで、ONの自動化29件、今すぐON可能138件、設定待ち8件のカード。ライブラリ全体は175件。' },
					{ src: crm('reseller/screen-deals.webp'), width: 1432, height: 840, title: '新規も増席も同じ場所で', desc: '新規導入と増席・追加ライセンスを同じパイプラインで扱います。', alt: '商談のカンバン画面。アプローチ・ヒアリング・提案・見積のステージに、新規導入と増席のカードが確度とクローズ予定日つきで並ぶ。' },
				],
			},
			{
				name: 'スクール版',
				lead: '生徒とのやりとりはいつもの公式LINEのまま。課題はLINEで届き、生徒ごとにCRMへ自動で残ります。',
				href: '/crm/school/',
				screens: [
					{ src: crm('school/screen-students-v3.webp'), width: 1200, height: 750, title: '生徒管理', desc: '体験中・支払中・休止中・解約済を一覧で確認できます。', alt: '生徒管理の画面。受講中・体験予定・卒業間近・課題が滞り・未確認・休止・卒業生・退会のフィルタと、生徒ごとの状態バッジが並ぶ。' },
					{ src: crm('school/screen-report-v3.webp'), width: 1200, height: 750, title: '月次レポート', desc: 'その月のレッスン記録から、AIが下書きを書きます。確認して直すだけで提出できます。', alt: '月次レポートの画面。AIが下書きした生徒の進捗コメントに、再生成と確定のボタンが付いている。' },
					{ src: crm('school/screen-billing-v3.webp'), width: 1200, height: 750, title: '請求管理', desc: '支払中・支払失敗を確認して、止まっている入金に早く気づけます。', alt: '請求の画面。MRR、決済失敗、未入金の件数と、生徒ごとの課金ステータス一覧に課金中・未入金・決済失敗のバッジ。' },
				],
			},
		],
	},
	{
		slug: 'otayori',
		name: 'おたより秘書',
		status: 'プロトタイプ',
		summary: '学校や園の紙のおたよりを、LINEに写真で送るだけ。AIが行事・締切・持ち物を読み取り、Googleカレンダーに登録して、前日や当日の朝にLINEで知らせます。',
		facts: ['LINEだけで使えます（アプリのインストールは不要）', '友だち追加は無料', '予定は自分のGoogleカレンダー、原本は自分のGoogleドライブに保存'],
		links: [
			{ label: 'サービスページ', href: 'https://otayori.consilegy.com/', primary: true },
			{ label: 'LINEで友だち追加', href: 'https://line.me/ti/p/@909lumjv' },
		],
		example: {
			caption: 'おたよりの写真を送ると、LINEにこの形で返ってきます（表示例）。「登録する」を押すとカレンダーに入ります。',
			text: `📋 運動会のお知らせ
🏫 〇〇小学校

📅 行事・イベント
  • 運動会（2026-06-20）09:00

⏰ 締め切り
  • 参加票提出（2026-06-18）

🎒 持ち物
  • 体操服
  • 水筒

この内容で登録しますか？
[✅ 登録する]  [✏️ やめる]`,
		},
	},
];
