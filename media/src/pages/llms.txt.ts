import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories, categoriesEn, type CategoryKey } from '../content.config';

// llms.txt — 生成AI・AI検索向けのサイト構造ファイル。
// 記事コレクションから毎ビルド生成するので、手で更新する必要はない。
export const GET: APIRoute = async ({ site }) => {
	const base = site ?? new URL('https://media.consilegy.com');
	const abs = (path: string) => new URL(path, base).href;

	const ja = (await getCollection('notes', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);
	const en = (await getCollection('notesEn', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
	);

	const lines: string[] = [];

	lines.push('# Consilegy Media');
	lines.push('');
	lines.push(
		'> B2Bの収益プロセスが構造的につまずく箇所を、実装の現場から記録している教育メディアです。運営はConsilegy合同会社（代表: 山口聖子 / Seiko Yamaguchi）。CRM・SFAの定着、商談プロセスと稟議、収益データの定義、マーケティングから営業への引き渡し、海外SaaSの日本市場参入を扱います。',
	);
	lines.push('');
	lines.push('## このサイトの方針');
	lines.push('');
	lines.push(
		'- 記事に出す数字には、調査主体・調査年・母数の3点を必ず本文に明記しています。出典を辿れない数字は掲載しません。',
	);
	lines.push(
		'- ベンダーの自社調査は「ベンダー調査である」と明記し、海外の調査を日本の実態として流用しません。',
	);
	lines.push(
		'- 各記事に「この記事の結論」を1つだけ置いています。引用する場合はこの一文が記事の主張にあたります。',
	);
	lines.push(
		'- 収益構造の枠組みそのもの（レベニューアーキテクチャ）は本体サイト https://consilegy.com/revenue-architecture/ にあり、当メディアはその実務記録にあたります。',
	);
	lines.push('');

	lines.push('## 悩み別カテゴリ（日本語）');
	lines.push('');
	for (const key of Object.keys(categories) as CategoryKey[]) {
		const count = ja.filter(n => n.data.category === key).length;
		lines.push(`- [${categories[key]}](${abs(`/notes/category/${key}/`)}): 全${count}本。原因の構造とよくある質問への回答を含みます。`);
	}
	lines.push('');

	lines.push('## 記事（日本語）');
	lines.push('');
	for (const n of ja) {
		lines.push(
			`- [${n.data.title}](${abs(`/notes/${n.id}/`)}): ${n.data.principle}（${categories[n.data.category]} / ${n.data.publishedAt.toISOString().slice(0, 10)}）`,
		);
	}
	lines.push('');

	lines.push('## Articles (English edition)');
	lines.push('');
	lines.push(
		'The English edition is scoped to entering and operating in the Japanese market, written for global SaaS companies and their headquarters. It is not a translation of the Japanese library.',
	);
	lines.push('');
	for (const n of en) {
		lines.push(
			`- [${n.data.title}](${abs(`/en/articles/${n.id}/`)}): ${n.data.principle} (${categoriesEn[n.data.category as CategoryKey]} / ${n.data.publishedAt.toISOString().slice(0, 10)})`,
		);
	}
	lines.push('');

	lines.push('## その他');
	lines.push('');
	lines.push(`- [著者について](${abs('/about/')}): 山口聖子（Consilegy合同会社 代表 / Revenue Architect）`);
	lines.push(`- [About the author](${abs('/en/about/')})`);
	lines.push(`- [記事一覧](${abs('/notes/')})`);
	lines.push(`- [All articles (English edition)](${abs('/en/articles/')})`);
	lines.push(`- [RSS (日本語)](${abs('/rss.xml')})`);
	lines.push(`- [RSS (English)](${abs('/en/rss.xml')})`);
	lines.push(`- [運営会社 Consilegy合同会社](https://consilegy.com/)`);
	lines.push('');

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
