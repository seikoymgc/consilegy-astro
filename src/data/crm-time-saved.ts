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
