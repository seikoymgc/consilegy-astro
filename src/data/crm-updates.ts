// Revenue CRM の更新履歴（/crm/updates/・/en/crm/updates/）。
//
// 載せるのは、使う人に見える変化だけ。不具合の修正や内部の変更は載せない
// （載せると、本当に知ってほしい変化が埋もれる）。1件は1〜3行。
// 日付は本番に出た日（日本時間）。根拠の PR は crm リポジトリの番号で残す。
// 新しいものを上に足す。メルマガの「お知らせ」枠とSNSは、ここへリンクする。

export type UpdateEdition = 'all' | 'b2b' | 'contractor' | 'reseller' | 'school';

export interface CrmUpdate {
  date: string; // YYYY-MM-DD（JST）
  editions: UpdateEdition[];
  title: { ja: string; en: string };
  body: { ja: string; en: string };
  /** 根拠の PR（crm リポジトリ） */
  prs: number[];
}

export const EDITION_LABEL: Record<UpdateEdition, { ja: string; en: string }> = {
  all: { ja: '全エディション', en: 'All editions' },
  b2b: { ja: '法人営業', en: 'B2B sales' },
  contractor: { ja: '受託開発', en: 'Agencies' },
  reseller: { ja: '代理店', en: 'Resellers' },
  school: { ja: 'スクール', en: 'Schools' },
};

export const CRM_UPDATES: CrmUpdate[] = [
  {
    date: '2026-10-16',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'AIに、契約・MRR・解約リスク・空き人日を聞けるようになりました',
      en: 'Ask the AI about contracts, MRR, churn risk, and free capacity',
    },
    body: {
      ja: '「今月更新の契約は？」「MRRの内訳は？」「解約リスクが高い顧客は？」「今週の空き人日は？」「止まっている案件は？」に、画面と同じ数字で答えます。見える範囲は、使う人の権限のとおりです。',
      en: '“Which contracts renew this month?”, “Break down our MRR”, “Which customers are at churn risk?”, “How many free person-days this week?”, “Which projects are stalled?” The AI answers with the same numbers as the screens, within each user’s permissions.',
    },
    prs: [302],
  },
  {
    date: '2026-10-16',
    editions: ['reseller', 'contractor', 'b2b'],
    title: {
      ja: '契約にお客様を選べるようになり、更新の自動化が契約の更新日でも動くようになりました',
      en: 'Link contracts to customers; renewal automations now use the contract renewal date',
    },
    body: {
      ja: '契約の登録・編集でお客様を検索して選べます。一覧に次回更新日が出ます。更新の準備・90日前のアプローチ・更新リスクの判定・更新商談の作成が、契約の更新日をもとに動きます。',
      en: 'Search and pick the customer when adding or editing a contract, and see the next renewal date in the list. Renewal prep, the 90-day approach, renewal risk, and renewal deals now run from the contract renewal date.',
    },
    prs: [299, 301],
  },
  {
    date: '2026-10-16',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '見積も「全件・チーム・担当のみ」で見える範囲を絞れるようになりました',
      en: 'Quotes now follow the “all / team / own” visibility setting',
    },
    body: {
      ja: '権限管理に「見積」の行が加わりました。協力会社のメンバーには、担当している案件の見積だけを見せられます。既存の組織は、商談と同じ設定から始まります。',
      en: 'Quotes now appear in permission settings, so partner staff can see only the quotes on projects they own. Existing workspaces start with the same setting as deals.',
    },
    prs: [303],
  },
  {
    date: '2026-10-16',
    editions: ['school'],
    title: {
      ja: 'スクール版：進捗レポートの見出しを、どの教室でも使える形にしました',
      en: 'Schools: progress report headings that fit any school',
    },
    body: {
      ja: '今月やったこと・できるようになったこと・まだ難しいこと・来月の目標・講師からのひと言の5つです。レッスン記録に無いことは書かず、「記録がありません」と書きます。',
      en: 'Five headings: what we did this month, what’s now possible, what’s still hard, next month’s goal, and a note from the teacher. Anything not in the lesson notes is marked as “no record” instead of being made up.',
    },
    prs: [293],
  },
  {
    date: '2026-10-16',
    editions: ['school'],
    title: {
      ja: 'スクール版のよくあるご質問を公開しました',
      en: 'Schools FAQ published (Japanese)',
    },
    body: {
      ja: '料金と契約、導入、LINE連携、AI、データとセキュリティについて、スクール版の答えを20問にまとめました。',
      en: 'Twenty questions on pricing, setup, LINE, AI, and data and security, answered for the schools edition.',
    },
    prs: [],
  },
  {
    date: '2026-10-15',
    editions: ['school'],
    title: {
      ja: 'スクール版：進捗レポートを、そのままLINEで送れるようになりました',
      en: 'Schools: send the progress report straight to LINE',
    },
    body: {
      ja: 'AIの下書きを、生徒のカルテのLINE送信欄に入れます。講師が直してから送れます。下書きは直近30日のレッスン記録から作ります。',
      en: 'The AI draft drops into the LINE message box on the student’s profile, so the teacher can edit it before sending. Drafts are built from the last 30 days of lesson notes.',
    },
    prs: [286],
  },
  {
    date: '2026-10-15',
    editions: ['school'],
    title: {
      ja: 'スクール版：生徒・レッスン・課題・請求をCSVで書き出せるようになりました',
      en: 'Schools: export students, lessons, homework, and billing as CSV',
    },
    body: {
      ja: 'マネージャーがメニューの「データの書き出し」から実行します。Excelでそのまま開けます。ご契約終了日から30日間も書き出せます。',
      en: 'Managers can export from “Data export” in the menu. Files open directly in Excel, and export stays available for 30 days after the contract ends.',
    },
    prs: [284],
  },
];
