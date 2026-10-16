import { explainFirstTerms } from '../data/technical-terms.mjs';

// Markdownの表示時に補足する。記事の原稿、引用、URL、見出しIDは変更しない。
export default function explainTechnicalTerms() {
	return (tree, file) => {
		const path = String(file.path ?? file.history?.[0] ?? '').replaceAll('\\', '/');
		if (!path.includes('/content/notes/')) return;
		const seen = new Set();
		function walk(node) {
			if (['heading', 'code', 'inlineCode', 'link', 'image', 'blockquote', 'html'].includes(node.type)) return;
			if (node.type === 'text') node.value = explainFirstTerms(node.value, seen);
			for (const child of node.children ?? []) walk(child);
		}
		walk(tree);
	};
}
