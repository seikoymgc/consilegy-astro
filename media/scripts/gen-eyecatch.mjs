// 記事アイキャッチの自動生成
//
// 仕組み: カテゴリ別の背景アート（public/images/eyecatch-bg/{category}.png、
// RecraftやChatGPTで生成した文字なし画像）に、日本語タイトルをプログラムで
// 合成して 1200x630 のPNGを作る。生成AIに文字を描かせないのは、
// 日本語が崩れるため。文字はここで載せるので絶対に崩れない。
//
// 背景画像が無いカテゴリは、カテゴリ色の無地で生成される（動作は止まらない）。
//
// 実行: npm run build の前に自動実行される（package.json の prebuild）
// 出力: public/images/eyecatch/{slug}.png

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

const CATEGORY_LABELS_JA = {
	crm: 'CRM・SFAが定着しない',
	sales: '商談が進まない・受注が読めない',
	data: '数字が部署ごとに合わない',
	'japan-gtm': '日本市場で成果が出ない',
	adoption: '導入したのに使われない',
	marketing: 'リードが商談につながらない',
};

const CATEGORY_LABELS_EN = {
	crm: 'CRM adoption',
	sales: 'Sales process',
	data: 'Revenue data',
	'japan-gtm': 'Japan market entry',
	adoption: 'Change management',
	marketing: 'Demand generation',
};

const FONT = "'Hiragino Sans','Noto Sans CJK JP','Noto Sans JP',sans-serif";

// frontmatterの簡易パース（title / category / draft のみ）
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

function escapeXml(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// タイトルの折り返し。日本語は文字数、英語は単語で折る
function wrapTitle(title, isEn) {
	const maxLines = 3;
	if (isEn) {
		const words = title.split(' ');
		const lines = [];
		let cur = '';
		for (const w of words) {
			if ((cur + ' ' + w).trim().length > 20 && cur) {
				lines.push(cur.trim());
				cur = w;
			} else {
				cur = (cur + ' ' + w).trim();
			}
		}
		if (cur) lines.push(cur);
		return lines.slice(0, maxLines);
	}
	const perLine = 11;
	const lines = [];
	for (let i = 0; i < title.length && lines.length < maxLines; i += perLine) {
		lines.push(title.slice(i, i + perLine));
	}
	if (title.length > perLine * maxLines) {
		lines[maxLines - 1] = lines[maxLines - 1].slice(0, perLine - 1) + '…';
	}
	return lines;
}

async function fileExists(p) {
	try {
		await access(p);
		return true;
	} catch {
		return false;
	}
}

async function generate(slug, title, category, isEn) {
	const color = CATEGORY_COLORS[category] ?? '#1e40af';
	const label = (isEn ? CATEGORY_LABELS_EN : CATEGORY_LABELS_JA)[category] ?? '';
	// 背景に薄く敷くカテゴリ番号（装飾）
	const catNum = String(Object.keys(CATEGORY_COLORS).indexOf(category) + 1).padStart(2, '0');
	const lines = wrapTitle(title, isEn);
	const fontSize = isEn ? 46 : lines.some(l => l.length > 10) ? 52 : 58;
	const lineHeight = fontSize * 1.45;
	const titleY = 320 - ((lines.length - 1) * lineHeight) / 2;

	// ベース: 背景アートがあれば使い、なければ無地
	const bgPath = path.join(BG_DIR, `${category}.png`);
	let base;
	if (await fileExists(bgPath)) {
		base = sharp(bgPath).resize(1200, 630, { fit: 'cover', position: 'right' });
	} else {
		base = sharp({
			create: { width: 1200, height: 630, channels: 3, background: '#FAFAF9' },
		});
	}

	// 左は無地パネル（文字用）、右は背景アート。装飾を足して「絵」として成立させる
	const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
			<stop offset="0" stop-color="#FAFAF9" stop-opacity="1"/>
			<stop offset="1" stop-color="#FAFAF9" stop-opacity="0"/>
		</linearGradient>
		<linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#3B82F6"/>
			<stop offset="0.7" stop-color="#987AD6"/>
			<stop offset="1" stop-color="#F472B6"/>
		</linearGradient>
	</defs>
	<rect x="0" y="0" width="690" height="630" fill="#FAFAF9"/>
	<rect x="690" y="0" width="130" height="630" fill="url(#fade)"/>

	<!-- 上部: ブランドのグラデ帯 + カテゴリ番号の大きな装飾 -->
	<rect x="0" y="0" width="1200" height="8" fill="url(#brand)"/>
	<text x="668" y="360" font-family="Georgia, serif" font-size="440" font-weight="700" fill="#14110d" fill-opacity="0.04" text-anchor="end">${catNum}</text>

	<!-- カテゴリラベル + 装飾ドット -->
	<circle cx="80" cy="132" r="6" fill="url(#brand)"/>
	<text x="100" y="140" font-family=${JSON.stringify(FONT)} font-size="24" font-weight="600" letter-spacing="1.5" fill="#8a8178">${escapeXml(label)}</text>

	<!-- タイトル -->
	${lines
		.map(
			(line, i) =>
				`<text x="72" y="${titleY + i * lineHeight}" font-family=${JSON.stringify(FONT)} font-size="${fontSize}" font-weight="700" fill="#1C1917">${escapeXml(line)}</text>`,
		)
		.join('\n\t')}

	<!-- 下部: ロゴ風マーク + 媒体名 + 罫線 -->
	<line x1="72" y1="512" x2="1128" y2="512" stroke="#e2ddd4" stroke-width="1"/>
	<polygon points="72,548 92,538 112,548 112,570 92,580 72,570" fill="none" stroke="url(#brand)" stroke-width="3"/>
	<text x="128" y="567" font-family=${JSON.stringify(FONT)} font-size="23" font-weight="600" fill="#14110d">Consilegy Media</text>
	<text x="1128" y="567" font-family=${JSON.stringify(FONT)} font-size="19" fill="#8a8178" text-anchor="end">media.consilegy.com</text>
</svg>`;

	await base
		.composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
		.png({ compressionLevel: 9 })
		.toFile(path.join(OUT_DIR, `${slug}.png`));
}

async function main() {
	await mkdir(OUT_DIR, { recursive: true });
	await mkdir(BG_DIR, { recursive: true });

	const targets = [
		{ dir: path.join(ROOT, 'src/content/notes'), isEn: false },
		{ dir: path.join(ROOT, 'src/content/notes-en'), isEn: true },
	];

	let count = 0;
	for (const { dir, isEn } of targets) {
		let files = [];
		try {
			files = (await readdir(dir)).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
		} catch {
			continue;
		}
		for (const f of files) {
			const src = await readFile(path.join(dir, f), 'utf-8');
			const fm = parseFrontmatter(src);
			if (!fm || fm.draft === 'true') continue;
			const slug = f.replace(/\.(md|mdx)$/, '');
			await generate(slug, fm.title, fm.category, isEn);
			count++;
		}
	}
	console.log(`アイキャッチを${count}枚生成しました → public/images/eyecatch/`);
}

main().catch(err => {
	console.error('アイキャッチ生成に失敗:', err);
	process.exit(1);
});
