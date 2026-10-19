// 日本語ページで、CRM・SFA・MA の最初の出現にだけ「（顧客管理システム）」のような説明を添える。
// 読者の多くはこの略語を知らない前提で書く（「まだ仕組みがない」会社が主な読者のため）。
//
// ページの原稿は直書きのHTMLが中心で、remark では拾えない。ビルド後の dist/ のHTMLを読み、
// 本文のテキストだけを、元の文字列の位置で差し替える（他のマークアップは1バイトも変えない）。
// メディア側（media/src/data/technical-terms.mjs）と呼び方を揃えている。
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'parse5';

const LABEL = { CRM: '顧客管理', SFA: '営業支援', MA: 'マーケティング自動化' };

// ここに入るテキストには付けない。見出し・ナビ・リンク・ボタンは短く読ませたいので、本文で説明する。
const SKIP_TAGS = new Set([
	'head', 'script', 'style', 'noscript', 'template', 'code', 'pre', 'textarea', 'svg', 'math',
	'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'footer', 'nav', 'a', 'button', 'select', 'option', 'label',
]);
// サービス名・パンくず・小見出しのラベル。名前として読ませる場所なので付けない。
const SKIP_CLASS = /(?:^|\s)[\w-]*(?:hero-service|breadcrumb|eyebrow|badge|chip)[\w-]*/;

// 「CRM / MA / SFA」「CRM・SFA・MA」のような並びは、まとめて1つの括弧で説明する。
const TERM = '(?:CRM|SFA|MA)';
const RUN = new RegExp(`(?<![A-Za-z])${TERM}(?:\\s*[/・、]\\s*${TERM})*(?![A-Za-z])`, 'g');
// 製品名・サービス名の一部としての CRM は略語ではないので触らない。
const PRODUCT_BEFORE = /(?:Revenue|Zoho|HubSpot|Salesforce|Dynamics)\s*$/;
const JAPANESE = /[ぁ-んァ-ヶ一-龠]/;

function explainText(text, seen) {
	if (!JAPANESE.test(text)) return text; // 英字だけのラベル（図の「CRM / SFA」など）は対象外
	// 引用（「」『』）の中は原文どおりに残す。
	return text.split(/(「[^」]*」|『[^』]*』)/u).map((part, i) => {
		if (i % 2) return part;
		return part.replace(RUN, (run, offset) => {
			const terms = run.match(/CRM|SFA|MA/g);
			if (PRODUCT_BEFORE.test(part.slice(0, offset))) return run;
			const after = part.slice(offset + run.length);
			// 直後に括弧で説明が続く（「CRM（顧客管理…）」「SFA（Sales Force Automation）」）なら重ねない。
			if (/^\s*[（(]/u.test(after)) {
				terms.forEach((t) => seen.add(t));
				return run;
			}
			// 調査条件などの括弧の中には、さらに括弧を差し込まない。
			const before = part.slice(0, offset);
			const depth = [...before].reduce((n, c) => n + ('（('.includes(c) ? 1 : '）)'.includes(c) ? -1 : 0), 0);
			if (depth > 0) {
				// 「顧客管理（CRM）」「営業（SFA）」のように日本語の言葉の直後の括弧なら、説明済みとして扱う。
				if (/[ぁ-んァ-ヶ一-龠ー]\s*[（(]\s*$/u.test(before)) terms.forEach((t) => seen.add(t));
				return run;
			}
			if (terms.every((t) => seen.has(t))) return run;
			terms.forEach((t) => seen.add(t));
			const uniq = [...new Set(terms)];
			// 「MAツール」のように直後が「ツール」なら、括弧の中では繰り返さない。
			// CRM・SFA は「顧客管理システム」（検索でも使われる言い方）、MA は「マーケティング自動化ツール」。
			const word = uniq.every((t) => t === 'CRM' || t === 'SFA') ? 'システム' : 'ツール';
			const suffix = /^\s*(ツール|システム)/u.test(after) ? '' : word;
			return `${run}（${uniq.map((t) => LABEL[t]).join('・')}${suffix}）`;
		});
	}).join('');
}

const parentOf = (node) => {
	const p = node.parentNode;
	const cls = p?.attrs?.find((a) => a.name === 'class')?.value.replace(/\s*data-astro-cid-\S+/g, '') ?? '';
	return `${p?.nodeName ?? ''}${cls ? '.' + cls.split(/\s+/)[0] : ''}`;
};

/** 1ページ分。差し替えた箇所の一覧（レポート用）と新しいHTMLを返す。 */
export function explainTermsInHtml(html) {
	const doc = parse(html, { sourceCodeLocationInfo: true });
	const htmlEl = doc.childNodes.find((n) => n.nodeName === 'html');
	const lang = htmlEl?.attrs.find((a) => a.name === 'lang')?.value ?? '';
	if (!lang.startsWith('ja')) return { html, changes: [] };

	const seen = new Set();
	const edits = [];
	const walk = (node) => {
		if (SKIP_TAGS.has(node.nodeName)) return;
		if (node.attrs?.some((a) => a.name === 'data-no-terms' || (a.name === 'aria-hidden' && a.value === 'true') || (a.name === 'class' && SKIP_CLASS.test(a.value)))) return;
		if (node.nodeName === '#text' && node.sourceCodeLocation) {
			const { startOffset, endOffset } = node.sourceCodeLocation;
			const raw = html.slice(startOffset, endOffset);
			const next = explainText(raw, seen);
			if (next !== raw) edits.push({ startOffset, endOffset, raw, next, parent: parentOf(node) });
		}
		for (const child of node.childNodes ?? []) walk(child);
		if (node.content) walk(node.content);
	};
	walk(htmlEl);

	let out = html;
	for (const e of [...edits].reverse()) out = out.slice(0, e.startOffset) + e.next + out.slice(e.endOffset);
	return { html: out, changes: edits.map((e) => ({ before: e.raw.trim(), after: e.next.trim(), parent: e.parent })) };
}

async function* htmlFiles(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) yield* htmlFiles(p);
		else if (entry.name.endsWith('.html')) yield p;
	}
}

export default function explainTerms() {
	return {
		name: 'explain-terms',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const root = dir.pathname;
				let pages = 0;
				let total = 0;
				for await (const file of htmlFiles(root)) {
					const html = await readFile(file, 'utf8');
					const { html: out, changes } = explainTermsInHtml(html);
					if (!changes.length) continue;
					await writeFile(file, out);
					pages += 1;
					total += changes.length;
				}
				logger.info(`CRM・SFA・MA に説明を付けた: ${pages}ページ / ${total}か所`);
			},
		},
	};
}
