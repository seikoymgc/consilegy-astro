// English news (press releases and talks). Add new items at the top.
// Only items with a slug have a detail page. Talks are listed with a summary only.
import type { NewsItem } from './news';

export type NewsItemEn = Omit<NewsItem, 'category'> & {
	category: 'Press release' | 'Announcement' | 'Talk' | 'Media';
};

export const newsEn: NewsItemEn[] = [
	{
		slug: 'revenue-crm-release',
		date: '2026-09-28',
		category: 'Press release',
		title: 'From a CRM your team has to feed, to a CRM that does the work: Revenue CRM for small and mid-sized companies is now generally available',
		summary: 'AI-drafted records, 175 automations, and editions set up for each type of business cut the data entry, configuration, and upkeep a CRM usually demands. Marketing, sales, and customer management run on one customer record.',
	},
	{
		date: '2026-06-25',
		category: 'Media',
		title: 'See News (花蓮視新聞) in Taiwan features CEO Seiko Yamaguchi and the build of Revenue CRM',
		summary: 'Reporting on the second cohort of Hualien Cloud Hub (花蓮雲基地), run by Hualien County, Taiwan, the article features CEO Seiko Yamaguchi as a first-cohort member and the CRM and AI product she built during her stay, now Revenue CRM.',
		host: 'See News (花蓮視新聞)',
		url: 'https://www.seenews.com.tw/news_data.php?news_id=2325&k_code=A',
		image: '/images/news/seenews-hualien-2026-06-25-photo.jpg',
		imageAlt: 'CEO Seiko Yamaguchi in front of the Hualien Cloud Hub signs and banner (photo from See News, 25 June 2026)',
	},
	{
		date: '2026-04',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi speaks at The Complete Masterclass for Japanese Startups, SusHi Tech Tokyo 2026',
		summary: 'Presented at a flagship startup masterclass hosted by IdeaBoxes at the Google for Startups campus in Tokyo, as part of SusHi Tech Tokyo 2026. Shared frameworks for startup growth and go-to-market strategy tailored to the realities of the Japanese market.',
		host: 'IdeaBoxes',
	},
	{
		date: '2026-04',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi speaks on Designing a One-of-a-Kind Career',
		summary: 'Spoke to freelancers and business owners in Shibuya, Tokyo, on building a career with no set path, drawing on experience as a nomad worker, consultant, and founder.',
		host: 'MyConsul',
	},
	{
		date: '2026-04',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi speaks at a Bizibl Technologies webinar: A "Next Move" Workflow Built on AI and Human Oversight',
		summary: 'Many companies stop at notifications and routing after adopting marketing automation. This online session explained how to design workflows that pair AI with human oversight so every prospect signal turns into a next action, using HubSpot examples.',
		host: 'Bizibl Technologies, Inc.',
	},
	{
		date: '2025-11',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi leads a video editing for marketing workshop at Nomad Experience in Shimoda',
		summary: 'Led a 3-day intensive workshop on video editing for marketing as part of Nomad Experience in Shimoda, Japan, a program for location-independent professionals. Focused on techniques participants could apply immediately to create compelling marketing content, delivered in English.',
		host: '風まち下田 (Kazemachi Shimoda)',
	},
	{
		date: '2025-11',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi teaches AI for Local Businesses in Shimoda',
		summary: 'A practical session for local business owners new to AI, covering which tools to use for which everyday tasks, including how to combine them with English-language social media.',
		host: 'Shimoda City and ELENTO LLC',
	},
	{
		date: '2025-10',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi speaks at Demo Day in Fukuoka: How to Sell Automation',
		summary: 'Spoke at Demo Day in Fukuoka. Reframed the core challenge in selling automation: clients don\'t buy tools, they buy outcomes. Shared how to lead with measurable results such as inquiry-to-booking time and conversion rates, and how to translate technical capabilities into business value.',
		host: 'Manabu Hubs and Fukuoka Startup Collective',
	},
	{
		date: '2025-06',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi speaks at Marketing Tuesday in Bansko: SEO to GEO, How to Get Found in the Age of AI Search',
		summary: 'Explored how the shift from traditional search to AI-generated answers is changing the rules of online visibility, and shared practical ways to adapt content and positioning to stay discoverable in AI-first search.',
		host: 'AltSpace Bansko',
	},
	{
		date: '2025-05',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi teaches an AI workshop in Shimoda: When in Doubt, Ask ChatGPT First',
		summary: 'A beginner-friendly session in Shimoda, Japan, walking through how to use AI in everyday life and work, for people who find AI intimidating.',
		host: 'ELENTO LLC',
	},
	{
		date: '2025-03',
		category: 'Talk',
		title: 'CEO Seiko Yamaguchi speaks at Vietnam Nomad Festival: Boost Your Efficiency with Notion × AI',
		summary: 'Shared practical systems combining Notion and AI tools to streamline daily tasks and project management for remote workers and freelancers, with workflows that cut manual work and free up time for higher-value activities.',
		host: 'Vietnam Nomad Festival',
	},
];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatNewsDateEn(date: string): string {
	const [y, m, d] = date.split('-').map(Number);
	return d ? `${MONTHS[m - 1]} ${d}, ${y}` : `${MONTHS[m - 1]} ${y}`;
}
