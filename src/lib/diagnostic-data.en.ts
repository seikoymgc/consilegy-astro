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
