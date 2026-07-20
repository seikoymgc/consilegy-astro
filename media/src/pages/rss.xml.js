import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'Consilegy Media',
		description:
			'B2Bの収益構造をどう設計し、どこで壊れ、何を直したか。HubSpot・CRM実装、商談プロセス設計、Japan GTMの現場記録。',
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
