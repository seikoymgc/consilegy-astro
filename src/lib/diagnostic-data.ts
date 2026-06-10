// 収益診断（Revenue Diagnostic）— questions, scoring, and result copy.
// Single source of truth for the self-diagnostic at /diagnostic/start/.
// Scoring: each option carries a leak-risk score 0/1/2 (higher = leaking).
// Category score = sum of its 2 questions (0–4): 0–1 green / 2–3 yellow / 4 red.
// Total = sum of all 12 (0–24, lower is healthier).

export interface DiagnosticOption {
	label: string;
	score: 0 | 1 | 2;
}

export interface DiagnosticQuestion {
	text: string;
	options: DiagnosticOption[];
}

export interface DiagnosticCategory {
	id: string;
	name: string;
	shortName: string;
	questions: DiagnosticQuestion[];
	insight: string;    // shown when category is yellow/red
	firstStep: string;  // 最初の一手 (shown for the worst category)
}

export const CATEGORIES: DiagnosticCategory[] = [
	{
		id: 'handoff',
		name: 'マーケ→営業の受け渡し',
		shortName: '受け渡し',
		questions: [
			{
				text: '「商談化できるリード」の条件を、営業とマーケが同じ言葉で説明できますか？',
				options: [
					{ label: 'はっきり言語化され、両部門で一致している', score: 0 },
					{ label: 'なんとなく共有しているが曖昧', score: 1 },
					{ label: '部門ごとにバラバラ／決まっていない', score: 2 },
				],
			},
			{
				text: 'マーケが渡したリードのうち、営業が「対応に値する」と判断する割合は？',
				options: [
					{ label: '把握しており、おおむね高い', score: 0 },
					{ label: '感覚的にしか分からない', score: 1 },
					{ label: '渡したきり追えていない', score: 2 },
				],
			},
		],
		insight: 'リードはあっても、定義のズレで商談前に消えています',
		firstStep: '営業とマーケで「商談化リードの条件」を1枚に言語化する',
	},
	{
		id: 'dependence',
		name: '営業の属人化',
		shortName: '属人化',
		questions: [
			{
				text: 'トップ営業が抜けたら、来期の売上予測はどれくらいブレますか？',
				options: [
					{ label: 'ほぼ影響しない（仕組み化されている）', score: 0 },
					{ label: 'そこそこ影響する', score: 1 },
					{ label: '大きく落ちる／読めなくなる', score: 2 },
				],
			},
			{
				text: '商談化や受注の判断基準は、個人の勘ですか、組織の基準ですか？',
				options: [
					{ label: '組織で標準化された基準がある', score: 0 },
					{ label: '一部だけルール化されている', score: 1 },
					{ label: 'ほぼ個人の勘', score: 2 },
				],
			},
		],
		insight: '売上が人に依存し、予測が立ちません',
		firstStep: 'トップ営業の「判断基準」を3つ言語化して共有する',
	},
	{
		id: 'stages',
		name: '商談ステージのズレ',
		shortName: 'ステージ',
		questions: [
			{
				text: 'CRMのステージは何を表していますか？',
				options: [
					{ label: '顧客の購買の進捗を表している', score: 0 },
					{ label: '自社の活動を表している', score: 1 },
					{ label: '入力ルールが曖昧／機能していない', score: 2 },
				],
			},
			{
				text: '売上予測（forecast）は、どれくらい当たりますか？',
				options: [
					{ label: 'おおむね当たる', score: 0 },
					{ label: '月によってブレる', score: 1 },
					{ label: '毎回ズレる', score: 2 },
				],
			},
		],
		insight: 'CRMが活動の記録止まりで、購買進捗を測れていません',
		firstStep: 'ステージ定義を「顧客の状態」で再定義する',
	},
	{
		id: 'silos',
		name: 'データの分断',
		shortName: 'データ分断',
		questions: [
			{
				text: '経営会議の数字は、どう作っていますか？',
				options: [
					{ label: '一元化され、ほぼ自動で出る', score: 0 },
					{ label: '複数ツールから一部手作業', score: 1 },
					{ label: '毎回、人が手集計している', score: 2 },
				],
			},
			{
				text: '部門間で同じ指標の数字が食い違うことは？',
				options: [
					{ label: 'ほぼない', score: 0 },
					{ label: 'たまにある', score: 1 },
					{ label: 'よくある／どれが正か分からない', score: 2 },
				],
			},
		],
		insight: '数字がバラバラで、経営判断が遅れています',
		firstStep: '経営会議で見る指標を1つの正データに統一する',
	},
	{
		id: 'adoption',
		name: 'ツールの非定着',
		shortName: '非定着',
		questions: [
			{
				text: '現場は毎日CRM/SFAを開いて使っていますか？',
				options: [
					{ label: '日常的に使っている', score: 0 },
					{ label: '一部のメンバーだけ', score: 1 },
					{ label: '結局Excel/スプレッドシートに戻っている', score: 2 },
				],
			},
			{
				text: '導入したツール（CRM/MA等）は、期待した役割を果たしていますか？',
				options: [
					{ label: '果たしている', score: 0 },
					{ label: '一部だけ', score: 1 },
					{ label: 'ほぼ使われていない／形骸化している', score: 2 },
				],
			},
		],
		insight: 'ツールが現場の日常になっていません',
		firstStep: '現場が毎日開く理由（1機能）に絞って運用を立て直す',
	},
	{
		id: 'expansion',
		name: '受注後の継続・拡大',
		shortName: '継続・拡大',
		questions: [
			{
				text: '受注後、誰がいつアップセル/継続の判断をしていますか？',
				options: [
					{ label: '役割と時点が設計されている', score: 0 },
					{ label: '担当者の裁量任せ', score: 1 },
					{ label: '特に決まっていない', score: 2 },
				],
			},
			{
				text: '営業→CS（カスタマーサクセス）の引き継ぎ設計はありますか？',
				options: [
					{ label: 'ある', score: 0 },
					{ label: '口頭・属人的', score: 1 },
					{ label: 'ない／取って終わり', score: 2 },
				],
			},
		],
		insight: '受注後の拡大が設計されず、LTVが伸びていません',
		firstStep: '受注→CSの引き継ぎチェックリストを作る',
	},
];

// Total-score bands (0–24, lower = healthier).
export const BANDS = [
	{
		min: 0,
		max: 6,
		label: '健全',
		headline: '収益の流れは概ね設計されています。伸ばす余地は「拡大」側にあります',
	},
	{
		min: 7,
		max: 14,
		label: '注意',
		headline: 'いくつかの境目で、売上が静かに漏れています。今が直し時です',
	},
	{
		min: 15,
		max: 24,
		label: '要改善',
		headline: '複数の境目で大きく漏れています。ツールではなく、構造の問題です',
	},
] as const;

// Category signal from its 0–4 score.
export function signalOf(score: number): 'green' | 'yellow' | 'red' {
	if (score <= 1) return 'green';
	if (score <= 3) return 'yellow';
	return 'red';
}

export const SIGNAL_META = {
	green: { emoji: '🟢', label: '健全' },
	yellow: { emoji: '🟡', label: '注意' },
	red: { emoji: '🔴', label: '漏れ' },
} as const;

export function bandOf(total: number) {
	return BANDS.find((b) => total >= b.min && total <= b.max) ?? BANDS[BANDS.length - 1];
}
