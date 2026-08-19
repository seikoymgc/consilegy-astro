import type { CategoryKey } from '../content.config';
import type { CategoryHub } from './category-hubs';

// 英語版カテゴリハブの本文。日本語版（category-hubs.ts）の翻訳ではない。
// EN edition の方針どおり、読者は「日本市場に入る／日本法人を運用する海外SaaS・本社」に固定する。
//
// 数字を書くときは、調査主体・調査年・母数の3点を必ず本文に入れる（content-ops/sources.md の鉄則）。
// ベンダーの自社調査はその旨を書く。海外調査を日本の話に流用しない。
// 「日本のデータが存在しない」領域は、存在しないと明記するほうが信頼される。
export const categoryHubsEn: Record<CategoryKey, CategoryHub> = {
	'japan-gtm': {
		intro: [
			'Most global SaaS companies do not fail in Japan because of language, pricing, or product fit. They fail because the local motion is a translated copy of a playbook that assumes a single decision maker, a champion who advocates in meetings, and a buyer who starts evaluating when your rep first calls.',
			'This category covers what changes when those assumptions do not hold: the approval chain your forecast has to model, the internal document that actually carries the decision, partner versus direct, hiring, and the parts of the global playbook that should be reordered rather than localised.',
		],
		faq: [
			{
				q: 'Why do Japanese deals take longer than our other regions?',
				a: 'Because the decision is assembled in writing across several layers rather than reached in a meeting. In a joint study by IDEATECH and Hiroyasu Kitagawa published in April 2026 (n=307, restricted to purchases of 3 million yen or more in annual contract value with at least two people involved, and published as research PR for IDEATECH\'s own service), 60.9% of deals passed through two approval stages and more than 80% through two or more, with evaluation running 3 to 8 months in 63.6% of cases. The elapsed time is structural, not a sign of weak sales execution.',
			},
			{
				q: 'What is the single hardest thing to get right when entering Japan?',
				a: 'Hiring the commercial team. JETRO\'s FY2024 survey of foreign-affiliated companies in Japan (published March 2025, 7,301 companies contacted, 1,427 valid responses, a 19.5% response rate) found that the hardest roles to fill were sales and marketing, cited by roughly 60% of respondents, ahead of IT and technical roles at roughly 40%. Market-entry plans routinely budget for the entity and the localisation, then stall on the two hires that make either useful.',
			},
			{
				q: 'How many people are in a Japanese buying committee?',
				a: 'No published primary data on Japan answers this. Figures in circulation, most often "5.4 stakeholders", come from a US study by CEB and describe US companies. What is measured in Japan is departments and approval layers: roughly 80% of large deals involve two to four departments, with information systems (45.6%), the business unit (37.5%), and corporate planning (29.0%) most often involved (IDEATECH and Kitagawa, 2026, n=307).',
			},
		],
	},
	crm: {
		intro: [
			'A CRM in Japan is rarely abandoned. It is filled in just enough to survive the weekly meeting, which is worse, because the reports keep rendering and nobody can tell they are wrong.',
			'This category covers the design decisions behind that outcome: which properties earn their place, separating lifecycle from deal stage, what to clean before an import, and why adding a required field is usually the change that breaks adoption.',
		],
		faq: [
			{
				q: 'Should the Japan team use our global CRM instance?',
				a: 'Yes for the object model, no for the required fields and the stage definitions. The approval chain described in the Japan market entry articles has no representation in a standard global pipeline, so Japanese deals either sit in one stage for months or get advanced on optimism. Add the local fields to the shared instance rather than forking it.',
			},
			{
				q: 'Why do our Japanese reps not fill in the CRM?',
				a: 'Because nothing comes back to the person doing the typing. A survey by Mazrica conducted in November 2024 (n=101, sales managers at B2B companies, a self-published study by an SFA vendor and a small sample) found the top reason for not entering data was that it takes too long, at 54.5%, with 32.7% saying they could not see what they gained from it. Reducing fields helps less than showing the person what the data is used for.',
			},
			{
				q: 'How common is CRM adoption in Japan generally?',
				a: 'Lower than most headquarters assume. HubSpot Japan\'s annual survey (2026 edition, conducted by Macromill, n=1,545 sellers at companies of 51 to 5,000 employees, a self-published study by a CRM vendor) put CRM adoption at 38.1%, roughly flat since 2022. Your Japanese prospects are often evaluating a category, not just your product.',
			},
		],
	},
	sales: {
		intro: [
			'A Japanese pipeline reviewed on rep confidence will be wrong in a specific direction: the deals look healthy until the quarter they were supposed to close.',
			'This category covers the mechanics that make it readable, including forecasting on approval progress rather than sentiment, what to hand a champion who has to write the internal proposal, how to record loss reasons that survive analysis, and what to ask in a first meeting when the buyer has already done the evaluation.',
		],
		faq: [
			{
				q: 'How should we forecast Japanese deals?',
				a: 'On how far the buyer\'s internal approval has travelled, not on how the meeting felt. Because more than 80% of large Japanese purchases clear two or more approval stages (IDEATECH and Kitagawa, April 2026, n=307), a deal where only the operational owner is convinced is early regardless of how positive the conversation was. Track the two axes separately and forecast on the lower one.',
			},
			{
				q: 'Our champion says they are preparing the paperwork and then nothing happens. Why?',
				a: 'Because they are being asked to author a document they have never written for a product they have owned for weeks, with no deadline. The document, a ringi, circulates to people your reps will never meet. Writing the draft for them is a sales deliverable in Japan, not an overstep.',
			},
			{
				q: 'What actually gets a vendor selected in Japan?',
				a: 'Precedent more than features. In the same IDEATECH and Kitagawa study, the most influential factor in reaching the final selection was having a reference customer of similar size, at 44.3% (this question n=298), while the top reasons for being dropped were insufficient fit to the specific problem at 39.1% and a sense that the vendor was wrong for a company of that size at 34.5%. A global logo slide can actively work against you here.',
			},
		],
	},
	data: {
		intro: [
			'When the Japan number does not match the headquarters number, the instinct is to fix the report. The cause is almost always that the two sides are counting different populations and neither wrote the definition down.',
			'This category covers defining the denominator before measuring, choosing median over mean where the distribution is skewed, deciding whether churn is counted by logo or by revenue, and knowing which Japanese benchmarks exist and which do not.',
		],
		faq: [
			{
				q: 'Can we benchmark our Japan numbers against public data?',
				a: 'Partly, and with care. Conversion benchmarks for Japan, lead to opportunity and opportunity to won, do not exist as published primary data, so any figure presented as one is either a foreign study relabelled or a vendor citing its own customers. Approval stages, evaluation length, and departmental involvement are measured, which is why the articles here lean on those.',
			},
			{
				q: 'What is a normal churn rate for B2B SaaS in Japan?',
				a: 'Quote the median, not the mean. Cloud Circus\'s Fullstar customer success survey (conducted August 2025, n=200, customer success and support staff at B2B information and communications companies, a self-published study by a CS tool vendor) reported an average monthly churn of 3.01%, but the distribution shows 45% of companies below 1%, so the median sits in the 1% range. Comparing your Japan business to the 3.01% average will make a healthy book look broken.',
			},
			{
				q: 'Why does our Japan win rate look fine while revenue does not?',
				a: 'Because a win rate is a ratio and revenue is a product of several terms. A rate can rise while deal size, volume, or cycle time move against you, which is why the articles here decompose the target into opportunities, conversion, price, retention, and elapsed time before choosing what to fix.',
			},
		],
	},
	adoption: {
		intro: [
			'Rollout in Japan is usually treated as a training problem, so it gets a manual, a kickoff session, and a support address. Three months later usage has settled at whatever the weekly meeting actually requires.',
			'This category covers what moves that number: changing the meeting rather than the manual, choosing an owner by authority rather than product knowledge, measuring adoption with something other than logins, and the follow-up that decides the outcome in the first fortnight.',
		],
		faq: [
			{
				q: 'Can we appoint a dedicated Japan owner for the rollout?',
				a: 'Usually not, so design for that from the start. IPA\'s DX White Paper 2023, a public-sector study run to the same design in Japan and the US, found that only 10.9% of Japanese companies considered their digital transformation staffing sufficient, against 73.4% in the US. The real question is which existing person takes it on alongside their job, and whether that person can set the agenda of the meeting where the data is used.',
			},
			{
				q: 'Is login rate a reasonable adoption metric?',
				a: 'No. Logins measure compliance with a reminder. Measure the records that a decision was actually made from, which is the only definition that fails loudly when adoption slips.',
			},
			{
				q: 'Our Japan team says they prefer the old process. Is that cultural resistance?',
				a: 'Rarely. It is usually a correct observation that the new process costs them time and returns nothing they can use. Treat it as design feedback and find out which meeting still runs on the old artefact, because that meeting is what keeps the old process alive.',
			},
		],
	},
	marketing: {
		intro: [
			'Demand generation in Japan is frequently judged on the volume it produces, which is how a country team ends up reporting record lead counts against a pipeline that has not moved.',
			'This category covers the handover rules that decide whether volume becomes pipeline, what to capture at an event while it is still capturable, what to ask a customer when building a reference case, and why the buyer arrives having already read everything you published.',
		],
		faq: [
			{
				q: 'Why do our Japanese leads not convert to pipeline?',
				a: 'Usually because the handover rule is a score rather than an observed behaviour, and because the record arrives without the context that would let anyone act on it. In Softbrain\'s survey of sales and marketing teams (conducted October 2024, n=298 split across the two functions, a self-published study by a sales support vendor), the top complaint from sales about marketing was insufficient information on the lead, at 42.1%.',
			},
			{
				q: 'Are trade shows worth it in Japan?',
				a: 'They are the most used and the least defended channel simultaneously, which means the question is what you take home rather than whether to attend. ITCommunications found trade shows were the most run channel at 52.3% (survey of 237 B2B marketers, conducted October 2025), while a separate ProFuture and Macromill survey (conducted February 2026, n=103, a small sample published by a firm selling advertising) found trade shows also topped the list of channels seen as not returning their cost, at 42.7%. Booth staffing set for maximum card collection is what produces that second number.',
			},
			{
				q: 'Will our English content work if we translate it?',
				a: 'The content will translate. The sequence often will not. In the IDEATECH and Kitagawa study, 70.4% of buyers had already defined their problem before first contact with a vendor and 91.2% had used AI search or generative AI during the evaluation, so material written to create awareness of a problem arrives after that job is done. Industry-specific evidence performs better, influencing candidate selection for 62.5% of respondents.',
			},
		],
	},
};
