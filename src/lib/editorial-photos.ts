// Existing editorial imagery from media/public/images/eyecatch-bg.
// These are illustrative generated scenes, never client or staff photographs.
export const photoSubjects = {
  crm: ['顧客データをパソコンで確認する業務場面のイメージ', 'Illustration of reviewing customer data on a laptop'],
  sales: ['日本人のチームが業務を確認する場面のイメージ', 'Illustration of a Japanese team reviewing work together'],
  data: ['ノートパソコンと資料を置いた会議室のイメージ', 'Illustration of a meeting room with a laptop and documents'],
  'japan-gtm': ['オフィスビルが並ぶ都市のイメージ', 'Illustration of a city business district'],
  adoption: ['日本人のチームがパソコンを囲んで業務を確認する場面のイメージ', 'Illustration of a Japanese team learning together at a laptop'],
  marketing: ['日本人の担当者が資料とパソコンで業務を進める場面のイメージ', 'Illustration of a Japanese professional working with a notebook and laptop'],
  workshop: ['日本人の担当者がホワイトボードで業務の流れを設計する場面のイメージ', 'Illustration of Japanese colleagues designing a process at a whiteboard'],
  development: ['日本人の開発者が業務システムを実装する場面のイメージ', 'Illustration of a Japanese developer working on a business system'],
  training: ['日本人の講師と参加者がシステムの使い方を練習する研修のイメージ', 'Illustration of a hands-on software training session with Japanese colleagues'],
  analysis: ['日本人の担当者が資料とデータを確認する分析業務のイメージ', 'Illustration of a Japanese analyst reviewing business data'],
  consultation: ['日本人の担当者同士が課題を相談する打ち合わせのイメージ', 'Illustration of a business consultation between Japanese professionals'],
  office: ['日本のオフィスにある打ち合わせスペースのイメージ', 'Illustration of a meeting space in a Japanese office'],
  city: ['東京のオフィス街を歩道から見た街並みのイメージ', 'Illustration of a Tokyo business district viewed from street level'],
  school: ['日本人の講師が教室でレッスンの準備をする場面のイメージ', 'Illustration of a Japanese instructor preparing a classroom'],
  planning: ['資料とカレンダーで計画を確認する机上のイメージ', 'Illustration of a desk prepared for project planning'],
  handoff: ['引き継ぎの資料とノートパソコンを置いた会議室のイメージ', 'Illustration of a meeting room prepared for a handoff'],
  review: ['確認する基準を書き出したノートと資料のイメージ', 'Illustration of a notebook and documents prepared for review'],
  workflow: ['日々の業務を進めるデスクとモニターのイメージ', 'Illustration of a workspace for daily operations'],
} as const;
export type PhotoSubject = keyof typeof photoSubjects;
const expandedScenes = new Set(['workshop', 'development', 'training', 'analysis', 'consultation', 'office', 'city', 'school']);
const photoAliases: Record<string, string> = {
  planning: 'measure-before-go-live', handoff: 'marketing-handoff-keeps-the-why',
  review: 'write-down-the-review-criteria', workflow: 'why-teams-dont-use-the-tool',
};
export const photoSrc = (name: string, width = 1200) => {
  const version = expandedScenes.has(name) ? '2026-10d' : '2026-10-jp';
  return `/images/editorial/${photoAliases[name] ?? name}-${width}-${version}.webp`;
};

const articlePhotos: Record<string, string> = {
  'why-japan-gtm-is-not-just-localization': 'city',
  'where-japan-gtm-breaks-after-lead-generation': 'handoff',
  'why-global-b2b-messaging-often-fails-in-japan': 'consultation',
  'how-japanese-b2b-buyers-evaluate-trust-and-risk': 'japanese-deals-win-on-precedent',
  'what-global-b2b-companies-should-prepare-before-entering-japan': 'planning',
  'how-to-adapt-a-global-b2b-landing-page-for-japan': 'marketing',
  'what-makes-a-japan-gtm-plan-execution-ready': 'workshop',
  'japan-market-entry-for-b2b-saas-common-gtm-mistakes': 'office',
  'how-to-design-a-japan-ready-revenue-funnel-before-hiring-sales': 'workshop',
  'what-revenue-architecture-means-for-japan-gtm': 'workshop',
  'revops-for-japan-gtm-what-global-teams-need-to-localize': 'training',
  'how-to-build-revenue-visibility-for-japan-market-expansion': 'analysis',
  'hubspot-dashboards-for-japan-revenue-visibility': 'threshold-before-dashboard',
  'hubspot-lifecycle-stages-vs-lead-status-for-japan-gtm': 'review',
  'how-to-define-lifecycle-stages-for-japan-facing-revenue-operations': 'clean-lists-before-crm-import',
  'lead-handoff-rules-for-japan-gtm-teams': 'handoff',
  'how-to-design-hubspot-workflows-for-japan-lead-follow-up': 'workflow',
  'when-global-teams-should-use-hubspot-for-japan-market-entry': 'crm',
  'why-crm-implementation-fails-without-revenue-architecture': 'development',
  'hubspot-implementation-for-japan-gtm-what-to-configure-first': 'development',

  'why-crm-investment-does-not-pass-the-board': 'draft-the-internal-approval-document',
  'why-marketing-budget-is-treated-as-cost': 'measure-before-go-live',
  'why-talent-development-depends-on-individuals': 'training',
  'what-changes-in-crm-design-when-ai-writes-records': 'development',
  'why-removing-anxiety-sells-in-japan-b2b': 'japanese-deals-win-on-precedent',
  'why-good-marketing-does-not-create-repeatable-growth': 'marketing',
  'why-dashboards-do-not-improve-executive-decisions': 'threshold-before-dashboard',
  'why-sales-forecasting-fails': 'forecast-by-approval-not-confidence',
  'why-sales-forecasting-fails-even-with-sfa': 'forecast-by-approval-not-confidence',
  'why-sales-and-customer-success-do-not-align': 'marketing-handoff-keeps-the-why',
  'why-crm-does-not-align-sales-and-marketing': 'marketing-handoff-keeps-the-why',
  'why-hubspot-operations-become-dependent-on-individuals': 'write-down-the-review-criteria',
  'why-more-leads-do-not-increase-revenue': 'marketing-handoff-keeps-the-why',
  'why-more-kpis-create-less-revenue-visibility': 'analysis',
  'why-kpi-meetings-become-status-update-sessions': 'threshold-before-dashboard',
  'why-crm-adoption-fails': 'why-teams-dont-use-the-tool',
  'why-sales-teams-stop-using-crm': 'training',
  'why-salesforce-and-hubspot-data-do-not-match': 'clean-lists-before-crm-import',
  'why-crm-integration-projects-fail': 'clean-lists-before-crm-import',
  'why-revops-is-hard-in-japanese-companies': 'workshop',
  'why-good-marketing-strategies-fail-to-scale': 'content-lead-time-count-the-waiting',
};
export function insightPhotoName(slug: string, category = ''): string {
  if (articlePhotos[slug]) return articlePhotos[slug];
  if (/data|visibility|kpi|dashboard/.test(slug)) return 'analysis';
  if (/japan|gtm/.test(slug)) return 'city';
  if (/marketing|leads|sql/.test(slug)) return 'marketing';
  if (/forecast/.test(slug)) return 'planning';
  if (/sales|sfa/.test(slug)) return 'consultation';
  if (/adoption|定着|組織/.test(slug + category)) return 'training';
  if (/architecture|構造/.test(slug + category)) return 'workshop';
  return 'workflow';
}
export const insightPhoto = (slug: string, category = '', width = 1200) => photoSrc(insightPhotoName(slug, category), width);
