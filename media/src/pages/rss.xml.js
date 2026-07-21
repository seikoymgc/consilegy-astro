import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'Consilegy Media',
		description:
			'B2Bの収益のつまずきを、構造から解決する。CRM定着、商談プロセス、データ計測、MA活用、日本市場参入の教育メディア。',
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
