// 会社のニュース（プレスリリース・お知らせ・登壇）。新しいものを先頭に足す。
// slug があるものだけ詳細ページを持つ。登壇は一覧に概要を載せるだけ。
export interface NewsItem {
	slug?: string;
	date: string; // YYYY-MM-DD、日が不明なら YYYY-MM
	category: 'プレスリリース' | 'お知らせ' | '登壇';
	title: string;
	summary: string;
	host?: string; // 主催
	image?: string; // 登壇写真など。/images/news/ 配下
	imageAlt?: string;
}

export const news: NewsItem[] = [
	{
		slug: 'revenue-crm-release',
		date: '2026-09-28',
		category: 'プレスリリース',
		title: '現場に「使わせる」CRMから、現場の代わりに働くCRMへ。中小企業向けCRM「Revenue CRM」正式提供開始',
		summary: '入力・設定・運用という「CRMのための仕事」を、AIによる記録、175本の自動化、業務別の初期設定で減らす。マーケティング・営業・顧客管理を一つの顧客データでつなぐ。',
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
