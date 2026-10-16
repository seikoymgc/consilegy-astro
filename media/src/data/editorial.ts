/** Shared author identity for bylines and structured data, distinct from the publisher. */
export const editorialTeam = (lang: 'ja' | 'en' = 'ja') => ({
	'@type': 'Organization',
	'@id': 'https://media.consilegy.com/about/#editorial-team',
	name: lang === 'en' ? 'Consilegy Media Editorial Team' : 'Consilegy メディア編集部',
	alternateName: lang === 'en' ? 'Consilegy メディア編集部' : 'Consilegy Media Editorial Team',
	url: `https://media.consilegy.com/${lang === 'en' ? 'en/' : ''}about/`,
	parentOrganization: { '@id': 'https://consilegy.com/#organization' },
});
