// Revenue CRM の更新履歴（/crm/updates/・/en/crm/updates/）。
//
// 載せるのは、使う人に見える新しい変化だけ。不具合の修正や内部の変更は載せない。
// LP・FAQ に以前から書いてある機能は、直したり作り直したりしても載せない
// （「LPの機能が今まで動いていなかった」と読めるため。2026-10-18 レビューで外した）。
// タイトルは「〜ようになりました」を避け、「〜できます」「〜を公開」の形で。1件は1〜3行。
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
  /** 日本語ページにだけ出す（英語の読み先が無いもの） */
  jaOnly?: boolean;
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
      ja: '契約にお客様を選べます。一覧に次回更新日を表示',
      en: 'Pick the customer on a contract, and see the next renewal date in the list',
    },
    body: {
      ja: '契約の登録・編集で、お客様を名前・メール・会社名から検索して選べます。会社はお客様の所属から自動で入ります。',
      en: 'When adding or editing a contract, search for the customer by name, email, or company. The company fills in from the customer.',
    },
    prs: [301],
  },
  {
    date: '2026-10-16',
    editions: ['school'],
    title: {
      ja: 'スクール版：月次レポートの見出しを5つに整理',
      en: 'Schools: monthly report headings, now five',
    },
    body: {
      ja: '今月やったこと・できるようになったこと・まだ難しいこと・来月の目標・講師からのひと言です。レッスン記録に無い項目は「記録がありません」と表示します。',
      en: 'What we did this month, what they can do now, what’s still hard, next month’s goal, and a note from the teacher. Anything not in the lesson notes shows as “no record.”',
    },
    prs: [293],
  },
  {
    date: '2026-10-16',
    editions: ['school'],
    jaOnly: true,
    title: {
      ja: 'スクール版のよくあるご質問を公開',
      en: '',
    },
    body: {
      ja: '料金と契約、導入、LINE連携、AI、データとセキュリティについて、スクール版の答えを20問にまとめました。',
      en: '',
    },
    prs: [],
  },
];
