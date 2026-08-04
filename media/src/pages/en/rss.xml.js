import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const notes = (await getCollection('notesEn', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'Consilegy Media (English)',
		description:
			'Entering and operating in the Japanese market: ringi approval, CRM adoption, sales process, revenue data, and demand generation. Written from hands-on implementation work, with sourced data throughout.',
		site: context.site,
		items: notes.map(note => ({
			title: note.data.title,
			description: note.data.description,
			pubDate: note.data.publishedAt,
			link: `/en/articles/${note.id}/`,
		})),
		customData: '<language>en</language>',
	});
}
