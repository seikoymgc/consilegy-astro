// Revenue Diagnostic (English) — questions, scoring, and result copy.
// Single source of truth for the self-diagnostic at /en/diagnostic/start/.
// Mirrors diagnostic-data.ts; scoring logic (signalOf) is shared.
import type { DiagnosticCategory } from './diagnostic-data';
import { signalOf } from './diagnostic-data';

export { signalOf };
export type { DiagnosticCategory };

export const CATEGORIES: DiagnosticCategory[] = [
	{
		id: 'handoff',
		name: 'Marketing → Sales handoff',
		shortName: 'Handoff',
		questions: [
			{
				text: 'Is your Japan pipeline scored on the same "sales-ready lead" definition as your other regions?',
				options: [
					{ label: 'Japan has its own definition, agreed with the global team', score: 0 },
					{ label: "One global definition, and the Japan team says the leads don't convert", score: 2 },
					{ label: 'One global definition, and nobody has checked whether it fits', score: 1 },
				],
			},
			{
				text: 'Of the leads marketing passes to the Japan team, what share do they judge worth pursuing?',
				options: [
					{ label: "We track it, and it's generally high", score: 0 },
					{ label: "We track it, and it's low", score: 2 },
					{ label: 'We only know by gut feel', score: 1 },
					{ label: 'We hand them off and lose track', score: 2 },
				],
			},
		],
		insight: 'The stage where a Japanese buyer educates themselves is invisible to you, so leads arrive late and get written off.',
		quant: 'Only about 1.5% of Japanese companies run marketing automation (Nexal crawled 626,003 corporate websites in May 2023 and found MA tags on 9,444; among listed companies it is 14.6%). The instrumentation your global funnel assumes mostly does not exist here, so you first see a Japanese buyer at the point they ask for a quote, often with the shortlist already made.',
		firstStep: 'Write a Japan-specific definition of a sales-ready lead on one page, agreed between the Japan team and the global marketing owner.',
		actions: [
			'Define a Japan MQL on one page, agreed jointly by the Japan team and global marketing',
			'Redesign the lead lifecycle stages for Japan in your CRM (Lead → MQL → SQL → Opportunity)',
			'Log every "accepted / rejected" decision after handoff so the Japan conversion rate is visible to HQ',
		],
	},
	{
		id: 'dependence',
		name: 'Sales key-person dependence',
		shortName: 'Key-person risk',
		questions: [
			{
				text: "If the person who runs Japan left next month, how much of next year's Japan number goes with them?",
				options: [
					{ label: 'Barely any: the process and the accounts are documented', score: 0 },
					{ label: 'Some of it', score: 1 },
					{ label: 'Most of it: the relationships and the judgment are theirs', score: 2 },
				],
			},
			{
				text: 'Can HQ read what is actually happening in Japan without going through that one person?',
				options: [
					{ label: 'Yes, straight from the system', score: 0 },
					{ label: 'Partly, with translation and follow-up questions', score: 1 },
					{ label: 'No, we take their word for it', score: 2 },
				],
			},
		],
		insight: "Japan lives in one person's head, so HQ can neither verify it nor replace it.",
		quant: 'A single country lead is the most common shape for a Japan operation, and also the largest single swing factor in the forecast. When that person leaves, you lose the number and the ability to read the market at the same time. Sales risk becomes financial risk with no warning period.',
		firstStep: "Put the Japan lead's three key judgment criteria into words, in a language HQ can read.",
		actions: [
			"Document the Japan lead's winning process as a sales playbook, in English as well as Japanese",
			'Implement the qualify / close criteria as CRM stage-exit conditions so they survive a handover',
			'Shift Japan forecasting from one person\'s gut feel to stage × probability roll-up',
		],
	},
	{
		id: 'stages',
		name: 'Deal-stage misalignment',
		shortName: 'Stages',
		questions: [
			{
				text: 'Can you split your Japan sales cycle into time spent on your side and time spent inside the buyer organisation?',
				options: [
					{ label: 'Yes, we hold the two separately', score: 0 },
					{ label: 'We can guess deal by deal, but we cannot total it', score: 1 },
					{ label: 'No. It is one number', score: 2 },
				],
			},
			{
				text: 'When a Japan deal sits in stage, do you know whose hands it is in right now?',
				options: [
					{ label: 'The CRM records who holds it, and since when', score: 0 },
					{ label: 'The rep knows. The CRM does not', score: 1 },
					{ label: 'Nobody can say without asking the customer', score: 2 },
				],
			},
		],
		insight: 'Your Japan cycle is one number, so you cannot tell a slow seller from a slow approval.',
		quant: 'In a 2026 survey of 307 people involved in Japanese B2B purchases over ¥3M with two or more people in the decision, more than 80% of deals required at least two approval steps and 63.6% took three to eight months from first looking to selecting a vendor. Most of that time sits inside the buyer, and most CRMs record none of it. Same 90 days, opposite budget: 70 days on your side means hire, 70 days on theirs means another rep changes almost nothing.',
		firstStep: 'Hold progress and possession as two separate fields, then measure days on the buyer\'s side.',
		actions: [
			'Add a "who holds this deal" field (seller / buyer) with a changed-on date, kept separate from stage',
			'Report buyer-side days as a share of cycle time, per deal and in aggregate',
			'Flag deals that have sat on the buyer side for more than 30 days',
		],
	},
	{
		id: 'silos',
		name: 'Data silos',
		shortName: 'Data silos',
		questions: [
			{
				text: 'How do the Japan numbers reach the global roll-up?',
				options: [
					{ label: 'Straight from the same system, with no rekeying', score: 0 },
					{ label: 'Re-entered or reformatted by hand each cycle', score: 1 },
					{ label: 'Japan keeps its own sheet and reports a summary', score: 2 },
				],
			},
			{
				text: 'When HQ and the Japan team quote the same metric, do the figures match?',
				options: [
					{ label: 'They rarely disagree', score: 0 },
					{ label: 'Occasionally', score: 1 },
					{ label: 'Often, and there is no single source of truth', score: 2 },
				],
			},
		],
		insight: 'Japan reports a summary, so HQ can review the number but never the reasoning behind it.',
		quant: 'When a region hand-compiles its own numbers, every review starts with reconciling figures instead of deciding anything. The cost is not the hours. It is that HQ can only ever challenge the total, never the deal-level reasoning that produced it, so Japan decisions get made on trust rather than evidence.',
		firstStep: 'Put the Japan metrics HQ reviews into the same source of truth as every other region.',
		actions: [
			'Unify the Japan KPIs HQ reviews into a single source of truth',
			'Move hand-built Japan reports to CRM-sourced dashboards',
			'Standardize KPI definitions across HQ and Japan so the same word means the same thing',
		],
	},
	{
		id: 'adoption',
		name: 'Tool non-adoption',
		shortName: 'Adoption',
		questions: [
			{
				text: 'Does your Japan team keep a second sheet alongside the global CRM?',
				options: [
					{ label: 'No. The CRM carries everything they need', score: 0 },
					{ label: 'Yes, for a few fields', score: 1 },
					{ label: 'Yes, and that is where the real deal status lives', score: 2 },
				],
			},
			{
				text: 'Was the global CRM configured with Japanese practice in mind (language, approval steps, account and company hierarchy)?',
				options: [
					{ label: 'Yes, it was localized deliberately', score: 0 },
					{ label: 'Partly', score: 1 },
					{ label: 'It was rolled out as-is', score: 2 },
				],
			},
		],
		insight: "That second sheet is not indiscipline. It is the specification for what your CRM was never asked to hold.",
		quant: 'Across 40+ CRM and MA implementations in Japan, the sheet next to the CRM almost always carries the same columns: temperature, where it stands internally, who we are waiting on, next action. Those are the fields the forecast actually turns on, and they sit outside the system your forecast is built from.',
		firstStep: 'Take the columns in that sheet and decide which of them belong in the CRM.',
		actions: [
			'List the columns in the shadow spreadsheet and move the forecast-critical ones into the CRM',
			'Reduce entry burden with automation (auto-logging, minimal required fields, Japanese labels)',
			'Track Japan adoption rate as a KPI rather than assuming the global rollout landed',
		],
	},
	{
		id: 'expansion',
		name: 'Post-sale retention & expansion',
		shortName: 'Expansion',
		questions: [
			{
				text: 'In Japan, who owns the account after the close, and from when?',
				options: [
					{ label: 'Roles and the handoff point are defined', score: 0 },
					{ label: 'Left to whoever closed it', score: 1 },
					{ label: 'Nothing is defined. The closer keeps it indefinitely', score: 2 },
				],
			},
			{
				text: 'Japanese customers rarely rip a vendor out. Is that low churn turning into expansion?',
				options: [
					{ label: 'Yes, upsell and renewal triggers are designed', score: 0 },
					{ label: 'We renew, but expansion is opportunistic', score: 1 },
					{ label: 'We only hear from them when something breaks', score: 2 },
				],
			},
		],
		insight: 'Low churn is hiding a missing expansion design, so Japan renews without growing.',
		quant: 'Japan is slow to let you in and slow to remove you. That stability is the market\'s biggest advantage, and it is also why nobody feels urgency about the account after the close. Renewal happens on its own, expansion does not, and the retention number looks healthy while the growth it should have produced never arrives.',
		firstStep: 'Create a sales → account-owner handoff checklist for Japan, with a named owner and a date.',
		actions: [
			'Design a sales → CS handoff checklist and a defined handoff point for Japan accounts',
			'Define upsell / renewal triggers and owners in the CRM rather than leaving them to the relationship',
			'Surface health scores and renewal forecasts so a quiet account is not read as a healthy one',
		],
	},
];

// Q1 (unscored) — where deals come from. This diagnostic assumes a pipeline that
// starts with marketing, so for referral/partner-led companies the handoff seam is
// excluded. Naming it out of scope is more accurate than forcing answers to
// questions that don't apply and printing a false red.
export const CHANNEL_QUESTION = 'Where do new deals in Japan mainly come from?';

export const CHANNELS = [
	{ id: 'marketing', label: 'Marketing (ads, web, trade shows, etc.)' },
	{ id: 'referral', label: 'Mostly referrals, resellers, trading companies or partners' },
	{ id: 'mixed', label: 'A mix of both' },
] as const;

// Categories excluded from the diagnostic, by channel.
export function isExcluded(catId: string, channel?: string): boolean {
	return channel === 'referral' && catId === 'handoff';
}

export const EXCLUDED_LABEL = 'Out of scope';

export const REFERRAL_SCOPE_NOTE =
	'This diagnostic is built for companies whose Japan pipeline starts with marketing. When referrals, resellers or trading companies drive most of your deals, the marketing → sales handoff does not apply, so we leave it out of the score. What pays off first is reducing key-person dependence and moving account and contract records out of individual heads, in a form HQ can read.';

// One-shot-sale variant of the "expansion" result copy (manufacturing / wholesale).
// Industry comes from the lead form, so only the result copy branches — not the questions.
export const EXPANSION_ONE_SHOT = {
	insight: "Repeat orders and referrals aren't designed, so every period's revenue starts from zero.",
	quant: 'Even in one-shot sales, reorders, repeat business, and referrals from existing customers are cheaper and higher-probability revenue than new logos. Without a design here, sales rebuilds the number from scratch every period.',
	firstStep: 'Set a post-delivery follow-up point (e.g. one month after delivery) and an owner.',
	actions: [
		'Decide the post-delivery follow-up timing and owner, and make it a CRM task',
		'Record reorder / repeat triggers (consumables, renewals, add-ons) per customer',
		'Build the "ask for a referral" moment into the sales process',
	],
} as const;

// Overall band — derived from the leak structure (not the raw total), so the
// headline can never contradict the per-category map shown below it.
export const BANDS = {
	green: {
		key: 'green',
		label: 'Healthy',
		headline: 'Your revenue flow is largely designed. The upside is on the "expansion" side.',
	},
	yellow: {
		key: 'yellow',
		label: 'Caution',
		headline: 'Revenue is quietly leaking at a few seams. The sooner you close them, the more you recover.',
	},
	red: {
		key: 'red',
		label: 'Needs work',
		headline: "Revenue is leaking at multiple seams. The flip side: the more you redesign how they connect, the more upside there is.",
	},
} as const;

export type Band = (typeof BANDS)[keyof typeof BANDS];

export const SIGNAL_META = {
	green: { emoji: '🟢', label: 'Healthy' },
	yellow: { emoji: '🟡', label: 'Caution' },
	red: { emoji: '🔴', label: 'Leaking' },
} as const;

// Band from category scores: no leaking category = green;
// 4+ leaking or 2+ red categories = red; otherwise yellow.
export function bandOf(categoryScores: number[]): Band {
	const leaks = categoryScores.filter((s) => s >= 2).length;
	const reds = categoryScores.filter((s) => s >= 4).length;
	if (leaks === 0) return BANDS.green;
	if (leaks >= 4 || reds >= 2) return BANDS.red;
	return BANDS.yellow;
}

// ── Leak pattern ────────────────────────────────────────────
// Not "which category is red" but "where the leaks overlap" — one leak shape.
// leak = ids of leaking (non-green, score>=2) categories, worst-first / worstId = id of the highest-scoring category.
// Note: with 2 questions per category, a "red" (4) is rare, so matching keys off "leaking" (>=2).
export interface LeakPattern {
	id: string;
	headline: string;
	body: string;
}

function nameOf(id: string): string {
	return CATEGORIES.find((c) => c.id === id)?.name ?? id;
}

export function patternOf(leak: string[], worstId: string, redCount = 0): LeakPattern | null {
	const has = (id: string) => leak.includes(id);

	if (leak.length >= 5 && redCount >= 1) {
		return {
			id: 'P1',
			headline: "Adding tools won't fix this. It's time to rethink how revenue itself is designed",
			body: 'When several seams leak at once, the cause is usually not an individual feature or tool. Your revenue flow (lead → opportunity → close → expand) is most likely optimized in parts but never designed as a whole. Every patch you add makes it more complex. Redrawing the whole flow is where the leverage is.',
		};
	}
	if (leak.length >= 5) {
		return {
			id: 'P1b',
			headline: 'Nothing is broken. But nothing is designed, either',
			body: 'No seam is decisively broken, yet definitions, criteria, and handoffs all run on "roughly". The weakness of this state is that you can\'t measure what works: wins aren\'t repeatable and dips can\'t be traced. Rather than fixing one seam deeply, start by putting the whole flow into words — one page of definitions per seam.',
		};
	}
	if (has('handoff') && has('expansion')) {
		return {
			id: 'P2',
			headline: 'The middle (sales) works, but you lose at the entrance and the exit',
			body: 'Your reps close deals on raw selling ability. But because the lead entrance and post-sale expansion are undesigned, that effort ends in one-off wins. Acquisition cost stays high and LTV never grows: the most churn-heavy double leak there is.',
		};
	}
	if (has('dependence') && has('stages')) {
		return {
			id: 'P3',
			headline: 'Revenue is "unpredictable" because these two overlap',
			body: "Revenue depends on individual instinct, and your CRM stages don't represent buying progress either. When those two combine, the forecast is structurally wrong. It won't be fixed by effort or accuracy drives, and leadership decisions are always one step behind.",
		};
	}
	if (has('silos') && has('adoption')) {
		return {
			id: 'P4',
			headline: 'Numbers are something you "produce," and there is no foundation',
			body: 'Tools never took root on the floor, and the leadership numbers are hand-compiled each time. KPI management and investment decisions run with no foundation underneath. You can\'t measure whether a new initiative worked, so the improvement loop never turns.',
		};
	}
	if (has('handoff') && has('dependence')) {
		return {
			id: 'P5',
			headline: 'You lose twice at the entrance',
			body: 'Marketing-passed leads die to a definition gap, and whether anyone picks them up is left to each rep\'s instinct. You shave the funnel twice before a conversation even starts: the classic way marketing ROI becomes invisible.',
		};
	}
	if (worstId === 'dependence' || worstId === 'stages') {
		return {
			id: 'P6',
			headline: 'You can close deals, but not in a repeatable form',
			body: "The numbers come in, but not in an \"anyone gets the same result\" way. This is your ceiling on scale. If adding people doesn't grow revenue proportionally, this seam is why.",
		};
	}
	if (worstId === 'handoff') {
		return {
			id: 'P7',
			headline: 'Your most wasteful leak is at the entrance',
			body: "You're discarding the leads you collected on a definition gap, before they even reach a conversation. Before you increase acquisition, fixing this is the highest-ROI move you can make.",
		};
	}
	if (worstId === 'expansion') {
		return {
			id: 'P8',
			headline: 'Acquisition works. Your upside is on the "expand existing" side',
			body: 'Because the entrance is turning, what you\'re leaving on the table is existing-customer LTV, cheaper and higher-probability revenue than new logos, slipping out through a missing exit design.',
		};
	}
	if (leak.length >= 2) {
		const second = leak.find((id) => id !== worstId) ?? leak[1];
		return {
			id: 'P9',
			headline: `Two seams are leaking at once: ${nameOf(worstId)} and ${nameOf(second)}`,
			body: `Each one drains revenue on its own, but together the impact multiplies. Start with the bigger one, ${nameOf(worstId)}, first.`,
		};
	}
	if (leak.length >= 1) {
		return {
			id: 'P10',
			headline: `One seam is leaking: ${nameOf(worstId)}`,
			body: `This is the main source right now. Left alone, it spreads. Start here, but don't stop at one move; we carry it through design and field adoption.`,
		};
	}
	return null; // no leak → no pattern shown
}
