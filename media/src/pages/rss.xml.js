import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'B2Bレベニュー戦略ジャーナル',
		description:
			'マーケティング・営業・CRMから考える、B2Bの売上設計。CRM定着、商談プロセス、データ計測、MA活用、日本市場参入の教育メディア。',
		site: context.site,
		items: notes.map(note => ({
			title: note.data.title,
			description: note.data.description,
			pubDate: note.data.publishedAt,
			link: `/notes/${note.id}/`,
		})),
		customData: '<language>ja</language>',
	});
}
