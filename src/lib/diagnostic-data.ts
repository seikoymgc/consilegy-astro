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
	quant: string;      // 相対定量フレーム (shown under insight when yellow/red)
	firstStep: string;  // 最初の一手 (shown for the worst category)
	actions?: string[]; // 推奨施策 (shown under each leaking seam — Consilegyの実務の打ち手)
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
		quant: 'マーケが渡したリードの3〜5割が、商談化の手前で「対応に値しない」と判断されて消えるのが典型です。広告費が商談の一歩手前で蒸発している状態です。',
		firstStep: '営業とマーケで「商談化リードの条件」を1枚に言語化する',
		actions: [
			'MQL（商談化リード）の定義を営業・マーケ合同で1枚に言語化する',
			'リードのライフサイクルステージをCRM上で再設計する（Lead→MQL→SQL→商談）',
			'受け渡し後の「対応／却下」を必ずCRMに記録し、歩留まりを可視化する',
		],
	},
	{
		id: 'dependence',
		name: '営業の属人化',
		shortName: '属人化',
		questions: [
			{
				text: 'トップ営業が抜けたら、来期の売上はどれくらい落ちますか？',
				options: [
					{ label: 'ほぼ落ちない（仕組み化されている）', score: 0 },
					{ label: 'そこそこ落ちる', score: 1 },
					{ label: '大きく落ちる', score: 2 },
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
		quant: '売上が上位2〜3名に集中している組織では、その1人の離職が翌期forecastを最も大きく揺らす要因になります。営業リスクが実質的に財務リスクです。',
		firstStep: 'トップ営業の「判断基準」を3つ言語化して共有する',
		actions: [
			'トップ営業の受注プロセスをセールスプレイブックとして言語化する',
			'商談化・受注の判断基準を、CRMのステージ移行条件として実装する',
			'forecastを個人の感覚から、ステージ×確度の積み上げに切り替える',
		],
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
		quant: 'ステージが「自社の活動」を表している会社のforecastは、月次で±20〜30%ぶれるのが目安です。打ち手が常に後手に回ります。',
		firstStep: 'ステージ定義を「顧客の状態」で再定義する',
		actions: [
			'ステージを「顧客の購買状態」基準で再定義する（活動ではなく状態）',
			'各ステージに移行条件（exit criteria）を設定し、入力を統一する',
			'forecastカテゴリ（commit／best case／pipeline）を運用に導入する',
		],
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
		quant: '数字を手集計している組織は、経営会議の準備だけで毎月数十時間を溶かしています。しかも「どれが正か」の議論で意思決定が遅れます。',
		firstStep: '経営会議で見る指標を1つの正データに統一する',
		actions: [
			'経営会議のKPIを1つの正データ（single source of truth）に統一する',
			'CRMを起点に、手集計レポートをダッシュボードへ移行する',
			'部門横断のKPI定義を統一し、指標の二重定義を解消する',
		],
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
		quant: '使われないCRMはデータの鮮度・網羅性が落ち、「使えないから使わない」の悪循環に入ります。投資したツール費がそのまま埋没コストになります。',
		firstStep: '現場が毎日開く理由（1機能）に絞って運用を立て直す',
		actions: [
			'現場が毎日開く理由となる1機能に絞って運用を再設計する',
			'入力負荷を下げる自動化を入れる（自動ログ・必須項目の最小化）',
			'利用状況をモニタリングし、定着率をKPIとして追う',
		],
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
				text: '受注後の担当者（更新・継続・カスタマーサクセス等）への引き継ぎ設計はありますか？',
				options: [
					{ label: 'ある', score: 0 },
					{ label: '口頭・属人的', score: 1 },
					{ label: 'ない／取って終わり', score: 2 },
				],
			},
		],
		insight: '受注後の拡大が設計されず、LTVが伸びていません',
		quant: '新規獲得は既存拡大の約5倍のコストがかかります。出口（継続・拡大）の設計不在は、最も高くつく漏れです。',
		firstStep: '受注→CSの引き継ぎチェックリストを作る',
		actions: [
			'営業→CSの引き継ぎチェックリストと、引き継ぎ時点を設計する',
			'アップセル／更新のトリガーとオーナーをCRM上で定義する',
			'ヘルススコアや更新予測を可視化し、解約の予兆を早期に検知する',
		],
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

// ── 掛け合わせパターン ───────────────────────────────────────
// 「どのカテゴリが赤か」ではなく「漏れがどこに重なるか」で型を1本出す。
// leak = 漏れている（非グリーン＝score>=2）カテゴリの id 配列（worst順） / worstId = 最高スコアのカテゴリ id。
// 注: 1カテゴリ2問だと「赤(4点)」は稀なため、判定は「漏れている(2点以上)」を基準にする。
export interface LeakPattern {
	id: string;
	headline: string;
	body: string;
}

function nameOf(id: string): string {
	return CATEGORIES.find((c) => c.id === id)?.name ?? id;
}

export function patternOf(leak: string[], worstId: string): LeakPattern | null {
	const has = (id: string) => leak.includes(id);

	if (leak.length >= 5) {
		return {
			id: 'P1',
			headline: 'ツールの追加では戻りにくい——収益の設計そのものを問い直す段階です',
			body: '複数の境目で同時に漏れているとき、原因は個別の機能やツールではないことが多いです。収益の流れ（リード→商談→受注→拡大）が部分最適のまま、全体として設計しきれていない可能性が高い状態です。手当てを足すほど複雑になります。一度、流れ全体を引き直すと効きやすい段階です。',
		};
	}
	if (has('handoff') && has('expansion')) {
		return {
			id: 'P2',
			headline: '中間（営業）は動いているのに、入口と出口で失っています',
			body: '現場の営業力で受注は取れています。一方で、リードの入口と受注後の拡大が設計されていないため、努力が「一度きりの受注」で終わっています。獲得コストが高止まりし、LTVも伸びない——最も入れ替わりの激しい二重の漏れです。',
		};
	}
	if (has('dependence') && has('stages')) {
		return {
			id: 'P3',
			headline: '売上が「読めない」のは、この2つが重なっているからです',
			body: '売上が個人の勘に依存し、CRMのステージも購買進捗を表していません。この2つが重なると、forecastは構造的に当たりません。気合や精度向上では直らない領域で、経営の意思決定が常に後手に回ります。',
		};
	}
	if (has('silos') && has('adoption')) {
		return {
			id: 'P4',
			headline: '数字が「作るもの」になっていて、土台が無い状態です',
			body: 'ツールが現場に根付かず、経営の数字は毎回手集計。これではKPI管理も投資判断も、土台のないまま回しています。新しい施策の良し悪しを測れないため、改善のループが回りません。',
		};
	}
	if (has('handoff') && has('dependence')) {
		return {
			id: 'P5',
			headline: '入口で二重に失っています',
			body: 'マーケが渡したリードが定義のズレで消え、拾えるかどうかも営業個人の勘次第。せっかくの母数を、商談に入る前に二段階で削っています。マーケ投資のROIが見えなくなる典型です。',
		};
	}
	if (has('dependence') || has('stages')) {
		return {
			id: 'P6',
			headline: '受注はできても、再現できる形になっていません',
			body: '数字は取れていますが、「誰がやっても同じ結果」にはなっていません。スケールの天井はここです。人を増やしても売上が比例しないなら、原因はこの境目です。',
		};
	}
	if (worstId === 'handoff') {
		return {
			id: 'P7',
			headline: '一番もったいない漏れが、入口に出ています',
			body: '集めたリードを、商談に入る前の「定義のズレ」で捨てています。新規獲得を増やす前に、ここを直すのが最も費用対効果が高い一手です。',
		};
	}
	if (worstId === 'expansion') {
		return {
			id: 'P8',
			headline: '獲得は機能しています。伸びしろは「既存の拡大」側です',
			body: '入口は回っているぶん、いま取りこぼしているのは既存顧客のLTVです。新規より安く、確度の高い売上が、出口の設計不在で抜けています。',
		};
	}
	if (leak.length >= 2) {
		const second = leak.find((id) => id !== worstId) ?? leak[1];
		return {
			id: 'P9',
			headline: `2つの境目が同時に漏れています：${nameOf(worstId)}と${nameOf(second)}`,
			body: `それぞれ単独でも売上を削りますが、重なると影響が掛け算になります。まずは上位の${nameOf(worstId)}から手をつけるのが順番です。`,
		};
	}
	if (leak.length >= 1) {
		return {
			id: 'P10',
			headline: `漏れは1か所——${nameOf(worstId)}に出ています`,
			body: `いまはこの境目が主因です。単独でも放置すれば広がります。まずはここから直すのが順番——ただし一手で終わらせず、設計と現場定着まで通します。`,
		};
	}
	return null; // 漏れなし → パターン非表示
}
