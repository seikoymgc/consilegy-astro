// 会社のニュース（プレスリリース・お知らせ・登壇）。新しいものを先頭に足す。
// slug があるものだけ詳細ページを持つ。url があるものは外部の記事へリンクする。
export interface NewsItem {
	slug?: string;
	date: string; // YYYY-MM-DD、日が不明なら YYYY-MM
	category: 'プレスリリース' | 'お知らせ' | '登壇' | 'メディア掲載';
	title: string;
	summary: string;
	host?: string; // 主催
	image?: string; // 登壇写真など。/images/news/ 配下
	imageAlt?: string;
	imageFit?: 'logo'; // ロゴは切り抜かず、縮小だけして全体を見せる（SECURITY ACTION の使用規定）
	url?: string; // 外部の掲載記事、またはサイト内のページ（/ で始まるものは同じタブで開く）。slug より後に見る
}

export const news: NewsItem[] = [
	{
		date: '2026-10-30',
		category: 'お知らせ',
		title: 'Revenue CRMのAI機能が、CSAの「STAR for AI」に掲載されました',
		summary: '顧客管理システム「Revenue CRM」のAI機能について、Cloud Security Alliance（CSA）がAI向けに定めた質問票に回答し、「STAR for AI Level 1」としてSTAR Registryに掲載されました。10月28日に掲載されたクラウド版の回答に続くものです。回答の内容は、STAR Registryでどなたでもご覧いただけます。',
		image: '/images/news/csa-star-for-ai-level1-2026-10-30.png',
		imageAlt: 'CSA STAR for AI Level One: Self-Assessment のバッジ',
		imageFit: 'logo',
		url: 'https://cloudsecurityalliance.org/star/registry/consilegy-llc',
	},
	{
		date: '2026-10-28',
		category: 'お知らせ',
		title: 'Revenue CRMが、CSAの「STAR Registry」に掲載されました',
		summary: '当社は、顧客管理システム「Revenue CRM」のセキュリティ対策について、クラウドセキュリティの国際団体であるCloud Security Alliance（CSA）の質問票に回答しました。この回答が、CSAが運営する「STAR Registry」に掲載されました。今回の回答は「STAR Level 1」にあたる自己評価です。回答の内容は、STAR Registryでどなたでもご覧いただけます。あわせて、当社サイトの「セキュリティへの取り組み」のページと、チェックシートの回答を更新しました。',
		image: '/images/news/csa-star-level1-2026-10-28.png',
		imageAlt: 'CSA STAR Level One: Self-Assessment のバッジ',
		imageFit: 'logo',
		url: 'https://cloudsecurityalliance.org/star/registry/consilegy-llc',
	},
	{
		date: '2026-10-22',
		category: 'お知らせ',
		title: 'IPAの「SECURITY ACTION」で、二つ星を宣言しました',
		summary: '独立行政法人情報処理推進機構（IPA）が運営するSECURITY ACTION制度で、一つ星に続き「二つ星」を宣言しました。情報セキュリティ自社診断で自社の状況を確かめ、情報セキュリティ基本方針を定めて公開しています。取り組みの内容は「セキュリティへの取り組み」のページにまとめています。',
		image: '/images/news/security-action-futatsuboshi-2026-10-22.png',
		imageAlt: 'SECURITY ACTION セキュリティ対策自己宣言 二つ星のロゴマーク',
		imageFit: 'logo',
	},
	{
		date: '2026-10-22',
		category: 'お知らせ',
		title: '「セキュリティへの取り組み」のページを公開しました',
		summary: '当社と顧客管理システム「Revenue CRM」が、お客様からお預かりする情報をどう守っているかを1ページにまとめました。データの保管場所（日本・東京リージョン）、会社ごとのデータの隔離、権限、バックアップ、AIの扱いなどを載せています。取引先の審査でよく聞かれる28問への回答も、登録なしでダウンロードできます。',
		url: '/security/',
	},
	{
		slug: 'revenue-crm-release',
		date: '2026-09-28',
		category: 'プレスリリース',
		title: '現場に「使わせる」CRMから、現場の代わりに働くCRMへ。中小企業向けCRM「Revenue CRM」正式提供開始',
		summary: '入力・設定・運用という「CRMのための仕事」を、AIによる記録、175本の自動化、業務別の初期設定で減らす。マーケティング・営業・顧客管理を一つの顧客データでつなぐ。',
	},
	{
		date: '2026-06-25',
		category: 'メディア掲載',
		title: '代表の山口聖子とRevenue CRMの開発が、台湾のSee News（花蓮視新聞）に掲載',
		summary: '台湾・花蓮県が運営する「花蓮雲基地 Hualien Cloud Hub」の第2期入居者の発表を伝える記事で、第1期メンバーとして滞在した代表の山口聖子と、滞在中に開発したCRMとAIを組み合わせた新製品（現在のRevenue CRM）が紹介されました。',
		host: 'See News（花蓮視新聞）',
		url: 'https://www.seenews.com.tw/news_data.php?news_id=2325&k_code=A',
		image: '/images/news/seenews-hualien-2026-06-25-photo.jpg',
		imageAlt: '花蓮雲基地 Hualien Cloud Hub のサインと旗の前に立つ代表 山口聖子（See News 2026年6月25日の掲載写真）',
	},
	{
		date: '2026-04',
		category: '登壇',
		title: '代表の山口聖子が、SusHi Tech Tokyo 2026「The Complete Masterclass for Japanese Startups」に登壇',
		summary: 'SusHi Tech Tokyo 2026の一環として、Google for Startups Tokyo（東京・渋谷）で開催された日本のスタートアップ向けマスタークラスに登壇。スタートアップの成長戦略と、日本市場の実情を踏まえたGTMアプローチをテーマに共有しました。',
		host: 'IdeaBoxes',
	},
	{
		date: '2026-04',
		category: '登壇',
		title: '代表の山口聖子が、MyConsul主催「唯一無二のキャリアをデザインする」に登壇',
		summary: 'フリーランス・経営者を対象に、海外ノマドワーク・コンサルティング・起業という自身の経験を軸に「唯一無二のキャリアの編み出し方」をテーマに登壇。正解のないキャリアを自分らしく設計するための視点と実践を共有しました（東京・渋谷）。',
		host: 'MyConsul',
	},
	{
		date: '2026-04',
		category: '登壇',
		title: '代表の山口聖子が、Bizibl Technologies主催のウェビナー「見込み客の“反応”を取りこぼさない。AI×人の監督でつくる『次の手』ワークフロー」に登壇',
		summary: 'MAを導入しても「通知・振り分け」止まりになりがちな企業の課題に着目し、AIと人の監督を組み合わせた「次の一手」ワークフローの設計思想を解説。HubSpotの実例をもとに、見込み客の反応を確実に次のアクションへつなげるフロー設計の考え方を共有しました（オンライン）。',
		host: '株式会社Bizibl Technologies',
	},
	{
		date: '2025-11',
		category: '登壇',
		title: '代表の山口聖子が、Nomad Experience（静岡県下田市）でマーケティング向け動画編集のワークショップを担当',
		summary: '場所にとらわれずに働く人のためのプログラム「Nomad Experience」で、マーケティングのための動画編集を扱う3日間の集中ワークショップを英語で担当。参加者がすぐに使える、伝わるマーケティングコンテンツの作り方に絞って進めました。',
		host: '風まち下田',
	},
	{
		date: '2025-11',
		category: '登壇',
		title: '代表の山口聖子が、下田市「下田市事業者のためのAI活用講座」に登壇',
		summary: 'AIに馴染みのない地域の事業者が「今日から使える」と感じられることを目指し、業務場面別のAIツール活用法を実践的な視点で解説。SNSでの英語発信との組み合わせを含め、初心者でも導入しやすい具体的な活用イメージを共有しました。',
		host: '下田市・ELENTO合同会社',
	},
	{
		date: '2025-10',
		category: '登壇',
		title: '代表の山口聖子が、Demo Day（福岡）で「How to Sell Automation」をテーマに登壇',
		summary: '自動化を売るときの課題を「顧客はツールではなく成果を買う」と捉え直し、問い合わせから予約までの時間やコンバージョン率など測れる成果から話を始める方法と、技術的な機能を事業上の価値に言い換える方法を共有しました。',
		host: 'Manabu Hubs・Fukuoka Startup Collective',
	},
	{
		date: '2025-06',
		category: '登壇',
		title: '代表の山口聖子が、Marketing Tuesday（ブルガリア・バンスコ）で「SEO to GEO: How to Get Found in the Age of AI Search」をテーマに登壇',
		summary: '従来の検索からAIが生成する回答へ移るなかで、オンラインでの見つかり方のルールがどう変わるかを解説。AI検索の時代にも見つけてもらうための、コンテンツと打ち出し方の実践的な変え方を共有しました。',
		host: 'AltSpace Bansko',
	},
	{
		date: '2025-05',
		category: '登壇',
		title: '代表の山口聖子が、ELENTO主催「AI活用講座 ― 困ったらまずChatGPTに相談」に登壇',
		summary: '「AIって難しそう」と感じている方でも気軽に一歩踏み出せるよう、場面別のAI活用法をわかりやすく解説。「困ったらまずChatGPTに相談」を合言葉に、日常とビジネスの両方での使い方を参加者と共有しました（会場：WITH A TREE、静岡県下田市）。',
		host: 'ELENTO合同会社',
	},
	{
		date: '2025-03',
		category: '登壇',
		title: '代表の山口聖子が、Vietnam Nomad Festivalで「Boost Your Efficiency with Notion × AI」をテーマに登壇',
		summary: 'リモートワーカーやフリーランス向けに、NotionとAIツールを組み合わせて日々のタスクとプロジェクト管理を効率化する仕組みを紹介。手作業を減らし、より価値の高い仕事に時間を回すためのワークフローの作り方を共有しました。',
		host: 'Vietnam Nomad Festival',
	},
];

export function formatNewsDate(date: string): string {
	const [y, m, d] = date.split('-').map(Number);
	return d ? `${y}年${m}月${d}日` : `${y}年${m}月`;
}
