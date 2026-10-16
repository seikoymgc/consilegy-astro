import { MEDIA_DESCRIPTION_EN } from '../../site-config';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const notes = (await getCollection('notesEn', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'B2B Revenue Strategy Journal (English)',
		description: MEDIA_DESCRIPTION_EN,
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
