// 手作業が減る時間の試算。/crm/ とトップで共通に使う。
// 手作業が減る時間の試算（2026-10-24 の試算。数字は仮置きで、実測値ではない）。
// Gmailの同期は動いていることを 2026-10-26 に代表が確認。
export const timeSales = [
	{ task: '名刺の登録・会社の調べもの・1通目のメール', feature: '名刺の読み取り', per: '9分', count: '20枚', saved: '3.0時間' },
	{ task: '商談後の議事録・入力・タスク登録', feature: '会議の取り込み', per: '17分', count: '30件', saved: '8.5時間' },
	{ task: '電話・訪問後の活動記録', feature: '音声入力', per: '3.5分', count: '40件', saved: '2.3時間' },
	{ task: 'チャットのやり取りの要約と記録', feature: '会話の取り込み', per: '8分', count: '10件', saved: '1.3時間' },
	{ task: '次の行動を考えて、文面を書く', feature: '次の一手の提案', per: '7分', count: '20件', saved: '2.3時間' },
	{ task: '止まっている商談を探す', feature: '停滞の知らせ', per: '週30分', count: '4週', saved: '2.0時間' },
	{ task: '連絡先の作成・タスク登録・検索', feature: 'AIエージェント', per: '1.5分', count: '40件', saved: '1.0時間' },
	{ task: 'メールのやり取りを記録に残す', feature: 'Gmailの同期', per: '2分', count: '60通', saved: '2.0時間' },
];
export const timeMarketing = [
	{ task: '展示会やイベントで集めた名刺の登録', feature: '名刺の一括読み取り', per: '2.5分', count: '60枚', saved: '2.5時間' },
	{ task: '問い合わせの登録（重複の確認・会社とのひも付け）', feature: 'フォームからの自動登録', per: '4分', count: '30件', saved: '2.0時間' },
	{ task: '会社情報の調べもの', feature: '会社情報の補完', per: '4.5分', count: '50社', saved: '3.8時間' },
	{ task: '見込み客の振り分け', feature: '分類とスコアリング', per: '1.5分', count: '80件', saved: '2.0時間' },
	{ task: '商談の候補を営業に渡す', feature: '自動の引き渡し', per: '5分', count: '15件', saved: '1.3時間' },
	{ task: '見込み客への初回メールを書く', feature: '初回メールの下書き', per: '4分', count: '30件', saved: '2.0時間' },
	{ task: '追いかけのメールを送る', feature: 'シーケンス', per: '3分', count: '60通', saved: '3.0時間' },
];
export const timeTables = [
	{ role: '営業', total: '約22', rows: timeSales },
	{ role: 'マーケティング', total: '約16', rows: timeMarketing },
];

// 試算であることの注記。表を出す場所では必ず一緒に出す。
export const timeSavedNote = '営業1人・マーケティング担当1人の1か月を想定した、当社の試算です。作業ごとの時間と件数は仮に置いた値で、導入企業での実測値ではありません。実際の時間は、業務の量や進め方によって変わります。';

// English version for /en/crm/. Same figures and rows as above; keep both in step when the numbers change.
export const timeSalesEn = [
	{ task: 'Adding a business card, researching the company, writing the first email', feature: 'Business card scanning', per: '9 min', count: '20', saved: '3.0 h' },
	{ task: 'Meeting notes, data entry, and tasks after a meeting', feature: 'Meeting import', per: '17 min', count: '30', saved: '8.5 h' },
	{ task: 'Logging activity after a call or visit', feature: 'Voice input', per: '3.5 min', count: '40', saved: '2.3 h' },
	{ task: 'Summarizing and logging chat conversations', feature: 'Chat import', per: '8 min', count: '10', saved: '1.3 h' },
	{ task: 'Deciding the next action and writing the message', feature: 'Next best action', per: '7 min', count: '20', saved: '2.3 h' },
	{ task: 'Finding stalled deals', feature: 'Stalled deal alerts', per: '30 min/wk', count: '4 wks', saved: '2.0 h' },
	{ task: 'Creating contacts, adding tasks, searching', feature: 'AI agent', per: '1.5 min', count: '40', saved: '1.0 h' },
	{ task: 'Logging email threads to the record', feature: 'Gmail sync', per: '2 min', count: '60', saved: '2.0 h' },
];
export const timeMarketingEn = [
	{ task: 'Adding business cards collected at trade shows and events', feature: 'Bulk card scanning', per: '2.5 min', count: '60', saved: '2.5 h' },
	{ task: 'Adding inquiries (checking duplicates, linking to companies)', feature: 'Form capture', per: '4 min', count: '30', saved: '2.0 h' },
	{ task: 'Researching company information', feature: 'Company enrichment', per: '4.5 min', count: '50', saved: '3.8 h' },
	{ task: 'Sorting leads', feature: 'Classification and scoring', per: '1.5 min', count: '80', saved: '2.0 h' },
	{ task: 'Handing deal candidates to sales', feature: 'Automatic handoff', per: '5 min', count: '15', saved: '1.3 h' },
	{ task: 'Writing the first email to a lead', feature: 'First email drafts', per: '4 min', count: '30', saved: '2.0 h' },
	{ task: 'Sending follow-up emails', feature: 'Sequences', per: '3 min', count: '60', saved: '3.0 h' },
];
export const timeTablesEn = [
	{ role: 'Sales', total: '~22', rows: timeSalesEn },
	{ role: 'Marketing', total: '~16', rows: timeMarketingEn },
];
export const timeSavedNoteEn = 'Our own estimate for one salesperson and one marketer over one month. The time per task and the volumes are assumed values, not measurements from customers. Actual time depends on your volume and how you work.';
