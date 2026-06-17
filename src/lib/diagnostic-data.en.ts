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
				text: 'Can sales and marketing describe a "sales-ready lead" in the same words?',
				options: [
					{ label: 'Clearly defined and agreed across both teams', score: 0 },
					{ label: 'Loosely shared, but vague', score: 1 },
					{ label: 'Different per team / undefined', score: 2 },
				],
			},
			{
				text: 'Of the leads marketing passes over, what share does sales judge "worth pursuing"?',
				options: [
					{ label: "We track it, and it's generally high", score: 0 },
					{ label: 'We only know by gut feel', score: 1 },
					{ label: 'We hand them off and lose track', score: 2 },
				],
			},
		],
		insight: 'You have leads, but a definition gap kills them before they become opportunities.',
		quant: 'Typically 30–50% of the leads marketing passes over are written off as "not worth pursuing" just before they could become opportunities. Your acquisition spend evaporates one step short of a real conversation.',
		firstStep: 'Write the "sales-ready lead" criteria on a single page, agreed by sales and marketing.',
	},
	{
		id: 'dependence',
		name: 'Sales key-person dependence',
		shortName: 'Key-person risk',
		questions: [
			{
				text: "If your top rep left, how much would next year's forecast swing?",
				options: [
					{ label: "Barely — it's systematized", score: 0 },
					{ label: 'Somewhat', score: 1 },
					{ label: 'It would drop sharply / become unreadable', score: 2 },
				],
			},
			{
				text: 'Are deal and close decisions based on individual instinct or a shared standard?',
				options: [
					{ label: 'A standardized, organization-wide standard', score: 0 },
					{ label: 'Partly turned into rules', score: 1 },
					{ label: 'Mostly individual instinct', score: 2 },
				],
			},
		],
		insight: "Revenue depends on people, so it can't be forecast.",
		quant: "When revenue concentrates in your top 2–3 reps, a single departure becomes the biggest swing factor in next period's forecast. Sales risk is effectively financial risk.",
		firstStep: "Put your top rep's three key judgment criteria into words and share them.",
	},
	{
		id: 'stages',
		name: 'Deal-stage misalignment',
		shortName: 'Stages',
		questions: [
			{
				text: 'What do your CRM stages represent?',
				options: [
					{ label: "The customer's buying progress", score: 0 },
					{ label: 'Our own internal activity', score: 1 },
					{ label: 'Entry rules are vague / not working', score: 2 },
				],
			},
			{
				text: 'How accurate is your sales forecast?',
				options: [
					{ label: 'Generally accurate', score: 0 },
					{ label: 'Varies month to month', score: 1 },
					{ label: 'Off every time', score: 2 },
				],
			},
		],
		insight: "Your CRM only logs activity and can't measure buying progress.",
		quant: 'When stages represent "your own activity" rather than the buyer\'s, forecasts typically swing ±20–30% month to month. You are always reacting one step too late.',
		firstStep: 'Redefine your stages around "the customer\'s state".',
	},
	{
		id: 'silos',
		name: 'Data silos',
		shortName: 'Data silos',
		questions: [
			{
				text: 'How are the numbers for your leadership meetings produced?',
				options: [
					{ label: 'Centralized, almost fully automated', score: 0 },
					{ label: 'Part manual, from multiple tools', score: 1 },
					{ label: 'Hand-tallied every time', score: 2 },
				],
			},
			{
				text: 'Do the same metrics disagree across teams?',
				options: [
					{ label: 'Rarely', score: 0 },
					{ label: 'Occasionally', score: 1 },
					{ label: 'Often / no single source of truth', score: 2 },
				],
			},
		],
		insight: 'Numbers are scattered, so leadership decisions lag.',
		quant: 'Organizations that hand-compile their numbers burn dozens of hours every month just preparing for the leadership meeting — and then lose more time arguing over which figure is correct.',
		firstStep: 'Unify the metrics your leadership reviews into one source of truth.',
	},
	{
		id: 'adoption',
		name: 'Tool non-adoption',
		shortName: 'Adoption',
		questions: [
			{
				text: 'Does the team open and use the CRM/SFA every day?',
				options: [
					{ label: 'Used daily', score: 0 },
					{ label: 'Only some members', score: 1 },
					{ label: 'They fall back to Excel / spreadsheets', score: 2 },
				],
			},
			{
				text: 'Are your tools (CRM/MA, etc.) playing the role you expected?',
				options: [
					{ label: 'Yes', score: 0 },
					{ label: 'Only partly', score: 1 },
					{ label: 'Barely used / hollowed out', score: 2 },
				],
			},
		],
		insight: "The tools haven't become part of the team's daily work.",
		quant: 'A CRM that goes unused decays in data freshness and coverage, locking in a "useless, so unused" spiral. The tool spend you committed to becomes a sunk cost.',
		firstStep: 'Rebuild operations around the one feature that makes the team open it daily.',
	},
	{
		id: 'expansion',
		name: 'Post-sale retention & expansion',
		shortName: 'Expansion',
		questions: [
			{
				text: 'After a deal closes, who decides on upsell / renewal, and when?',
				options: [
					{ label: 'Roles and timing are designed', score: 0 },
					{ label: "Left to the rep's discretion", score: 1 },
					{ label: 'Nothing defined', score: 2 },
				],
			},
			{
				text: 'Is there a designed handoff from sales to CS (customer success)?',
				options: [
					{ label: 'Yes', score: 0 },
					{ label: 'Verbal / person-dependent', score: 1 },
					{ label: 'None / closed and done', score: 2 },
				],
			},
		],
		insight: "Post-sale expansion isn't designed, so LTV isn't growing.",
		quant: 'Acquiring a new customer costs roughly 5× expanding an existing one. A missing exit (retention/expansion) design is the most expensive leak of all.',
		firstStep: 'Create a sales → CS handoff checklist.',
	},
];

// Total-score bands (0–24, lower = healthier).
export const BANDS = [
	{
		min: 0,
		max: 6,
		label: 'Healthy',
		headline: 'Your revenue flow is largely designed. The upside is on the "expansion" side.',
	},
	{
		min: 7,
		max: 14,
		label: 'Caution',
		headline: 'Revenue is quietly leaking at a few seams. Now is the time to fix it.',
	},
	{
		min: 15,
		max: 24,
		label: 'Needs work',
		headline: "You're leaking heavily at multiple seams. This is structural, not a tool problem.",
	},
] as const;

export const SIGNAL_META = {
	green: { emoji: '🟢', label: 'Healthy' },
	yellow: { emoji: '🟡', label: 'Caution' },
	red: { emoji: '🔴', label: 'Leaking' },
} as const;

export function bandOf(total: number) {
	return BANDS.find((b) => total >= b.min && total <= b.max) ?? BANDS[BANDS.length - 1];
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

export function patternOf(leak: string[], worstId: string): LeakPattern | null {
	const has = (id: string) => leak.includes(id);

	if (leak.length >= 5) {
		return {
			id: 'P1',
			headline: "This isn't a tool problem — it's a problem with how revenue itself is designed",
			body: 'When you leak at several seams at once, the cause is never an individual feature or tool. Your revenue flow (lead → opportunity → close → expand) has never been designed. Every patch you add makes it more complex. You are at the point of redrawing the whole flow.',
		};
	}
	if (has('handoff') && has('expansion')) {
		return {
			id: 'P2',
			headline: 'The middle (sales) works — but you lose at the entrance and the exit',
			body: 'Your reps close deals on raw selling ability. But because the lead entrance and post-sale expansion are undesigned, that effort ends in one-off wins. Acquisition cost stays high and LTV never grows — the most churn-heavy double leak there is.',
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
			body: 'Marketing-passed leads die to a definition gap, and whether anyone picks them up is left to each rep\'s instinct. You shave the funnel twice before a conversation even starts — the classic way marketing ROI becomes invisible.',
		};
	}
	if (has('dependence') || has('stages')) {
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
			body: 'Because the entrance is turning, what you\'re leaving on the table is existing-customer LTV — cheaper and higher-probability revenue than new logos, slipping out through a missing exit design.',
		};
	}
	if (leak.length >= 2) {
		const second = leak.find((id) => id !== worstId) ?? leak[1];
		return {
			id: 'P9',
			headline: `Two seams are leaking at once: ${nameOf(worstId)} and ${nameOf(second)}`,
			body: `Each one drains revenue on its own, but together the impact multiplies. Start with the bigger one — ${nameOf(worstId)} — first.`,
		};
	}
	if (leak.length >= 1) {
		return {
			id: 'P10',
			headline: `One seam is leaking: ${nameOf(worstId)}`,
			body: `This is the main source right now. Left alone, it spreads. Start here — but don't stop at one move; we carry it through design and field adoption.`,
		};
	}
	return null; // no leak → no pattern shown
}
