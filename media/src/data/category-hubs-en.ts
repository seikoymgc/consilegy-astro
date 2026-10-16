import type { CategoryKey } from '../content.config';
import type { CategoryHub } from './category-hubs';

// 英語版カテゴリハブの本文。日本語版（category-hubs.ts）の翻訳ではない。
// EN edition の方針どおり、読者は「日本市場に入る／日本法人を運用する海外SaaS・本社」に固定する。
//
// 数字を書くときは、調査主体・調査年・母数の3点を必ず本文に入れる（content-ops/sources.md の鉄則）。
// ベンダーの自社調査はその旨を書く。海外調査を日本の話に流用しない。
// 参照した調査で確認できないことは、その範囲を明記する。
export const categoryHubsEn: Record<CategoryKey, CategoryHub> = {
	'japan-gtm': {
		intro: [
			"This category covers entering Japan and running the local revenue operation. It considers pricing and localisation alongside approval processes, hiring and implementation support.",
			"The articles examine partner and direct routes, trial design and headquarters reporting. Recommendations depend on the customer and product; they are not rules for every Japanese business.",
		],
		faq: [
			{
				q: 'Why do Japanese deals take longer than our other regions?',
				a: "Because the decision is assembled in writing across several layers rather than reached in a meeting. In a joint study by IDEATECH and Hiroyasu Kitagawa published in April 2026 (n=307, restricted to purchases of 3 million yen or more in annual contract value with at least two people involved, and published as research PR for IDEATECH's own service), 60.9% of deals passed through two approval stages and more than 80% through two or more, with evaluation running 3 to 8 months in 63.6% of cases.\n\nThese findings describe the study’s large-purchase sample. Check the steps in your own deals before attributing a delay to either sales execution or the approval process.",
			},
			{
				q: 'When should a Japan entry plan address hiring?',
				a: "Plan hiring alongside the market-entry work.\n\nJETRO's FY2024 survey of foreign-affiliated companies in Japan (published March 2025, 7,301 companies contacted, 1,427 valid responses, a 19.5% response rate) found that the hardest roles to fill were sales and marketing, cited by roughly 60% of respondents, ahead of IT and technical roles at roughly 40%. Market-entry plans routinely budget for the entity and the localisation, then stall on the two hires that make either useful.",
			},
			{
				q: 'How many people are in a Japanese buying committee?',
				a: "The sources cited here do not establish a representative headcount for Japanese buying committees.\n\nFigures in circulation, most often \"5.4 stakeholders\", come from a US study by CEB and describe US companies. What is measured in Japan is departments and approval layers: roughly 80% of large deals involve two to four departments, with information systems (45.6%), the business unit (37.5%), and corporate planning (29.0%) most often involved (IDEATECH and Kitagawa, 2026, n=307).",
			},
		],
	},
	crm: {
		intro: [
			"This category covers CRM fields, permissions, migration and integration for Japan teams. When records are incomplete, check both the work required to enter them and the decisions they support.",
			"The articles examine required fields, lifecycle and deal stages, matching keys and data quality. They distinguish product behaviour from operating choices the team can change.",
		],
		faq: [
			{
				q: 'Should the Japan team use our global CRM instance?',
				a: "Start by comparing the shared reporting requirements with the local work.\n\nReview the object model, required fields and stage exit criteria separately. The approval chain described in the Japan market entry articles has no representation in a standard global pipeline, so Japanese deals either sit in one stage for months or get advanced on optimism. Add the local fields to the shared instance rather than forking it.",
			},
			{
				q: 'Why do our Japanese reps not fill in the CRM?',
				a: "Check the effort of entering the data and what the rep can use it for. A survey by Mazrica conducted in November 2024 (n=101, sales managers at B2B companies, a self-published study by an SFA vendor and a small sample) found the top reason for not entering data was that it takes too long, at 54.5%, with 32.7% saying they could not see what they gained from it.\n\nThe survey identifies both effort and usefulness as issues; it does not establish which intervention will work better for your team.",
			},
			{
				q: 'How common is CRM adoption in Japan generally?',
				a: "Check the population behind any adoption estimate.\n\nHubSpot Japan's annual survey (2026 edition, conducted by Macromill, n=1,545 sellers at companies of 51 to 5,000 employees, a self-published study by a CRM vendor) put CRM adoption at 38.1%, roughly flat since 2022. Ask prospects about their current process rather than inferring it from this adoption rate.",
			},
		],
	},
	sales: {
		intro: [
			"This category covers deal progress, forecasting and support for internal approval. A positive conversation and an approved purchase are different events; record the evidence for each.",
			"The articles cover comparison materials, quotes, draft business cases and loss reasons, with steps the local team and headquarters can agree.",
		],
		faq: [
			{
				q: 'How should we forecast Japanese deals?',
				a: "On how far the buyer's internal approval has travelled, not on how the meeting felt.\n\nBecause more than 80% of large Japanese purchases clear two or more approval stages (IDEATECH and Kitagawa, April 2026, n=307), a deal where only the operational owner is convinced is early regardless of how positive the conversation was. Track the two axes separately and forecast on the lower one.",
			},
			{
				q: 'Our champion says they are preparing the paperwork and then nothing happens. Why?',
				a: "Because they are being asked to author a document they have never written for a product they have owned for weeks, with no deadline.\n\nThe document, a ringi, circulates to people your reps will never meet. Writing the draft for them is a sales deliverable in Japan, not an overstep.",
			},
			{
				q: 'What actually gets a vendor selected in Japan?',
				a: "Both comparable references and fit to the problem appear in the cited survey. In the same IDEATECH and Kitagawa study, the most influential factor in reaching the final selection was having a reference customer of similar size, at 44.3% (this question n=298), while the top reasons for being dropped were insufficient fit to the specific problem at 39.1% and a sense that the vendor was wrong for a company of that size at 34.5%.\n\nA logo alone does not establish similarity of size, use case or operating conditions.",
			},
		],
	},
	data: {
		intro: [
			"This category covers revenue metrics and the definitions behind them. When headquarters and Japan report different numbers, compare the populations, denominators and cut-off dates before changing the dashboard.",
			"The articles examine conversion, churn and deal value. Public benchmarks are used with their sample limits, and recommendations are kept separate from measured findings.",
		],
		faq: [
			{
				q: 'Can we benchmark our Japan numbers against public data?',
				a: "Partly, and with care.\n\nThe sources used in these articles do not provide representative Japan-wide lead-to-opportunity or opportunity-to-win rates. Check whether a benchmark describes a vendor’s customers or a broader population. Approval stages, evaluation length, and departmental involvement are measured, which is why the articles here lean on those.",
			},
			{
				q: 'What is a normal churn rate for B2B SaaS in Japan?',
				a: "Check both the distribution and the definition of churn.\n\nCloud Circus's Fullstar customer success survey (conducted August 2025, n=200, customer success and support staff at B2B information and communications companies, a self-published study by a CS tool vendor) reported an average monthly churn of 3.01%, but the distribution shows 45% of companies below 1%, so the median sits in the 1% range. The 3.01% average alone is not enough to set a target for your business.",
			},
			{
				q: 'Why does our Japan win rate look fine while revenue does not?',
				a: "Because a win rate is a ratio and revenue is a product of several terms.\n\nA rate can rise while deal size, volume, or cycle time move against you, which is why the articles here decompose the target into opportunities, conversion, price, retention, and elapsed time before choosing what to fix.",
			},
		],
	},
	adoption: {
		intro: [
			"This category covers responsibility and daily work after a system goes live. Training helps with unfamiliar operations; it does not replace agreement about who enters, reviews and uses the records.",
			"The articles examine local ownership, meeting agendas, early follow-up and the evidence needed to judge whether a process is being used.",
		],
		faq: [
			{
				q: 'Can we appoint a dedicated Japan owner for the rollout?',
				a: "Confirm the headcount and authority available rather than assuming a dedicated role.\n\nIPA's DX White Paper 2023, a public-sector study run to the same design in Japan and the US, found that only 10.9% of Japanese companies considered their digital transformation staffing sufficient, against 73.4% in the US. The real question is which existing person takes it on alongside their job, and whether that person can set the agenda of the meeting where the data is used.",
			},
			{
				q: 'Is login rate a reasonable adoption metric?',
				a: "Use logins as one activity measure. Also check record freshness, required work completed and decisions made from the data; a login alone does not establish adoption.",
			},
			{
				q: 'Should we involve the sceptics on the Japan team early?',
				a: "Timing is the wrong variable.\n\nInvite them while at least one decision is still theirs to make, such as two of the mandatory fields, when data gets entered, or which meeting the numbers appear in. State which decisions remain open. Silence in a review is not evidence that the design works for the people who will use it.",
			},
			{
				q: 'Our Japan team says they prefer the old process. Is that cultural resistance?',
				a: "That cannot be inferred from the request alone.\n\nAsk what work the old process supports and what the new one makes harder. Treat it as design feedback and find out which meeting still runs on the old artefact, because that meeting is what keeps the old process alive.",
			},
		],
	},
	marketing: {
		intro: [
			"This category follows demand generation through to the sales handoff. Lead volume, buyer response and revenue results are reported separately.",
			"The articles cover events, content, marketing automation and handoff rules. They ask what the team can observe, who acts next and when a result can reasonably be assessed.",
		],
		faq: [
			{
				q: 'Why do our Japanese leads not convert to pipeline?',
				a: "Usually because the handover rule is a score rather than an observed behaviour, and because the record arrives without the context that would let anyone act on it.\n\nIn Softbrain's survey of sales and marketing teams (conducted October 2024, n=298 split across the two functions, a self-published study by a sales support vendor), the top complaint from sales about marketing was insufficient information on the lead, at 42.1%.",
			},
			{
				q: 'Are trade shows worth it in Japan?',
				a: "They are the most used and the least defended channel simultaneously, which means the question is what you take home rather than whether to attend. ITCommunications found trade shows were the most run channel at 52.3% (survey of 237 B2B marketers, conducted October 2025), while a separate ProFuture and Macromill survey (conducted February 2026, n=103, a small sample published by a firm selling advertising) found trade shows also topped the list of channels seen as not returning their cost, at 42.7%.\n\nThe studies use different samples and questions. They do not establish that card-collection practices caused the reported cost concerns.",
			},
			{
				q: 'Will our English content work if we translate it?',
				a: "Review the purpose and sequence as well as the translation.\n\nIn the IDEATECH and Kitagawa study, 70.4% of buyers had already defined their problem before first contact with a vendor and 91.2% had used AI search or generative AI during the evaluation, so material written to create awareness of a problem arrives after that job is done. Industry-specific evidence performs better, influencing candidate selection for 62.5% of respondents.",
			},
		],
	},
};
