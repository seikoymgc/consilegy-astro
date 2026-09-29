// 会社のニュース（プレスリリース・お知らせ）。新しいものを先頭に足す。
export interface NewsItem {
	slug: string;
	date: string; // YYYY-MM-DD
	category: 'プレスリリース' | 'お知らせ';
	title: string;
	summary: string;
}

export const news: NewsItem[] = [
	{
		slug: 'revenue-crm-release',
		date: '2026-09-28',
		category: 'プレスリリース',
		title: '現場に「使わせる」CRMから、現場の代わりに働くCRMへ。中小企業向けCRM「Revenue CRM」正式提供開始',
		summary: '入力・設定・運用という「CRMのための仕事」を、AIによる記録、175本の自動化、業務別の初期設定で減らす。マーケティング・営業・顧客管理を一つの顧客データでつなぐ。',
	},
];

export function formatNewsDate(date: string): string {
	const [y, m, d] = date.split('-').map(Number);
	return `${y}年${m}月${d}日`;
}
