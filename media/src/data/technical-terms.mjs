// 読者向けの呼び方。技術的な詳細は各記事の文脈で補う。
export const technicalTerms = Object.freeze({
	CRM: '顧客管理システム',
	SFA: '営業支援システム',
	MA: 'マーケティング自動化ツール',
});

/** 引用文を変えず、各用語の最初の出現にだけ説明を添える。 */
export function explainFirstTerms(text, seen = new Set()) {
	return text.split(/(「[^」]*」|『[^』]*』|“[^”]*”|\b(?:Revenue|HubSpot) CRM\b)/u).map((part, index) => {
		if (index % 2) return part;
		return part.replace(/\b(?:CRM|SFA|MA)\b/g, (term, offset) => {
			if (seen.has(term)) return term;
			const before = part.slice(Math.max(0, offset - 40), offset);
			const after = part.slice(offset + term.length);
			// 日本語の説明に続く（SFA）や、既に説明済みの CRM（顧客管理システム）を重ねない。
			if (/[（(]$/u.test(before) && /[）)]/u.test(after[0] ?? '') && /(?:管理|支援|自動化|顧客関係)/u.test(before)) {
				seen.add(term);
				return term;
			}
			// 調査条件などの括弧の中には、さらに括弧を差し込まない。
			const depth = [...part.slice(0, offset)].reduce((n, c) => n + ('（('.includes(c) ? 1 : '）)'.includes(c) ? -1 : 0), 0);
			if (depth > 0) return term;
			if (/^[（(](?:顧客|営業|マーケティング)/u.test(after)) {
				seen.add(term);
				return term;
			}
			seen.add(term);
			return `${term}（${technicalTerms[term]}）`;
		});
	}).join('');
}
