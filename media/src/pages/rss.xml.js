import { MEDIA_DESCRIPTION_JA } from '../site-config';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	return rss({
		title: 'B2Bレベニュー戦略ジャーナル',
		description: MEDIA_DESCRIPTION_JA,
		site: context.site,
		items: notes.map(note => ({
			title: note.data.title,
			description: note.data.description,
			pubDate: note.data.publishedAt,
			link: `/${note.id}/`,
		})),
		customData: '<language>ja</language>',
	});
}
