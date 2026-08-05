// 記事アイキャッチの生成
//
// 方針: カテゴリ別の写真（public/images/eyecatch-bg/{category}.png、
// Recraft等で生成した文字なしのドキュメンタリー写真）を、そのまま
// 1200x630 のアイキャッチとして書き出す。文字は焼き込まない。
// タイトルは記事ページのH1と一覧カードのタイトルで見せるため、
// 画像に文字を載せると重複してAI臭くなる。実メディア(WIRED等)に倣い
// 写真はフルブリードで使う。
//
// カテゴリ写真が無い場合は、そのカテゴリ色の無地で生成する（動作は止まらない）。
//
// 実行: npm run build の前に自動実行される（package.json の prebuild）
// 出力:
//   public/images/eyecatch/{slug}.webp … ページ内表示用（軽い。LCPはこれになる）
//   public/images/eyecatch/{slug}.jpg  … OGP/Twitter card用（WebP非対応のクローラがあるため）
// PNGで写真を書き出すと1枚1.5MB前後になり、LCPが致命的に遅くなるので使わない。

import { readdir, readFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'public/images/eyecatch');
const BG_DIR = path.join(ROOT, 'public/images/eyecatch-bg');

const CATEGORY_COLORS = {
	crm: '#1e40af',
	sales: '#0f6e56',
	data: '#7c5cbf',
	'japan-gtm': '#b45309',
	adoption: '#9d174d',
	marketing: '#0e7490',
};

const W = 1200;
const H = 630;

async function fileExists(p) {
	try {
		await access(p);
		return true;
	} catch {
		return false;
	}
}

// 記事ごとに専用写真があれば優先、なければカテゴリ写真を使う。
// 専用写真: public/images/eyecatch-bg/{slug}.png
async function pickSource(slug, category) {
	const perArticle = path.join(BG_DIR, `${slug}.png`);
	if (await fileExists(perArticle)) return perArticle;
	const perCategory = path.join(BG_DIR, `${category}.png`);
	if (await fileExists(perCategory)) return perCategory;
	return null;
}

async function write(pipeline, slug) {
	// ページ内表示はWebP、OGPはJPEG。どちらも写真なので可逆圧縮（PNG）は使わない。
	await pipeline.clone().webp({ quality: 72 }).toFile(path.join(OUT_DIR, `${slug}.webp`));
	await pipeline
		.clone()
		.jpeg({ quality: 78, mozjpeg: true, chromaSubsampling: '4:2:0' })
		.toFile(path.join(OUT_DIR, `${slug}.jpg`));
}

async function generate(slug, category) {
	const src = await pickSource(slug, category);

	if (src) {
		// 写真をフルブリードで 1200x630 にカバー配置。文字は載せない。
		await write(sharp(src).resize(W, H, { fit: 'cover', position: 'centre' }), slug);
		return;
	}

	// 写真が無いカテゴリはカテゴリ色の無地（つなぎ）
	const color = CATEGORY_COLORS[category] ?? '#1e40af';
	await write(
		sharp({ create: { width: W, height: H, channels: 3, background: color } }),
		slug,
	);
}

function parseFrontmatter(src) {
	const m = src.match(/^---\n([\s\S]*?)\n---/);
	if (!m) return null;
	const fm = {};
	for (const line of m[1].split('\n')) {
		const kv = line.match(/^(\w+):\s*(.*)$/);
		if (!kv) continue;
		let v = kv[2].trim();
		if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
			v = v.slice(1, -1);
		}
		fm[kv[1]] = v;
	}
	return fm;
}

async function main() {
	await mkdir(OUT_DIR, { recursive: true });
	await mkdir(BG_DIR, { recursive: true });

	const targets = [
		path.join(ROOT, 'src/content/notes'),
		path.join(ROOT, 'src/content/notes-en'),
	];

	let count = 0;
	for (const dir of targets) {
		let files = [];
		try {
			files = (await readdir(dir)).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
		} catch {
			continue;
		}
		for (const f of files) {
			const raw = await readFile(path.join(dir, f), 'utf-8');
			const fm = parseFrontmatter(raw);
			if (!fm || fm.draft === 'true') continue;
			const slug = f.replace(/\.(md|mdx)$/, '');
			await generate(slug, fm.category);
			count++;
		}
	}
	console.log(`アイキャッチを${count}枚生成しました → public/images/eyecatch/`);
}

main().catch(err => {
	console.error('アイキャッチ生成に失敗:', err);
	process.exit(1);
});
