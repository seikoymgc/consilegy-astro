// Revenue CRM 使い方メディア（/crm/media/）の共通定義。
// 記事本体は src/content/crm-media/{ja,en}/<slug>.md。カテゴリは3つで固定。

import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'ja' | 'en';
export type Category = 'input' | 'setup' | 'operate';
export type Article = CollectionEntry<'crmMedia'>;

export const CATEGORY_ORDER: Category[] = ['input', 'setup', 'operate'];

export const CATEGORIES: Record<Category, { ja: string; en: string; jaLead: string; enLead: string }> = {
  input: {
    ja: '入力する仕事',
    en: 'The work of entering data',
    jaLead: '名刺、手書きメモ、通話、チャット。人が画面に向かって打ち込まなくても、記録が残るようにする。',
    enLead: 'Business cards, handwritten notes, calls, chat. Records that get kept without a person typing them in.',
  },
  setup: {
    ja: '設定する仕事',
    en: 'The work of setting up',
    jaLead: '空の CRM を渡されて設定から始める、を無くす。業種別の初期設定と、迷わない自動化の選び方。',
    enLead: 'No more starting from an empty CRM. Industry presets and a way to pick automations without guessing.',
  },
  operate: {
    ja: '運用を回す仕事',
    en: 'The work of running it',
    jaLead: '催促、割り当て、進み具合の確認。運用担当を置かなくても回る状態にする。',
    enLead: 'Reminders, assignments, checking where deals stand. Keeping it running without a dedicated operator.',
  },
};

export const COPY = {
  ja: {
    kicker: 'Revenue CRM',
    title: '現場の困りごとから、どの画面で消えるかまで',
    lead: '中小企業の営業・管理の現場で実際に起きている困りごとを一つずつ取り上げ、Revenue CRM のどの画面・どのボタンで解消するかを、導入支援8年の経験から書いています。',
    metaTitle: '使い方の記事 | Revenue CRM | Consilegy',
    metaDesc: '現場の困りごと（名刺が溜まる、止まった商談に気づかない、自動化を選べない）から、Revenue CRM のどの画面で解消するかまでを1本ずつ書いた記事。',
    listLabel: '記事一覧',
    problem: '現場の困りごと',
    feature: 'Revenue CRM の機能',
    where: '画面',
    published: '公開',
    updated: '更新',
    readNext: '次に読む',
    ctaText: 'メールアドレスだけで、デモ環境に入れます。',
    demo: 'デモを試す',
    consult: '30分無料相談',
    backToList: '記事一覧へ',
    author: '山口聖子',
    authorBio: 'Consilegy合同会社 代表。HubSpot、Salesforce の導入支援に約8年携わり、その経験から「入力させない CRM」として Revenue CRM を設計・提供している。',
    why: 'なぜ起きるかを知りたい方は、構造の話を扱う media.consilegy.com へ',
    crumbRoot: 'Revenue CRM',
  },
  en: {
    kicker: 'Revenue CRM',
    title: 'From what goes wrong on the ground to the screen that fixes it',
    lead: 'One real problem from small-company sales and operations at a time, and the exact screen and button in Revenue CRM that removes it, written from eight years of CRM implementation work.',
    metaTitle: 'Field guide | Revenue CRM | Consilegy',
    metaDesc: 'One article per real problem (cards piling up, stalled deals nobody sees, too many automations to choose from) and the exact Revenue CRM screen that removes it.',
    listLabel: 'All articles',
    problem: 'The problem',
    feature: 'Revenue CRM feature',
    where: 'Where',
    published: 'Published',
    updated: 'Updated',
    readNext: 'Read next',
    ctaText: 'The demo opens with just an email address.',
    demo: 'Try the demo',
    consult: 'Book a 30-minute call',
    backToList: 'Back to all articles',
    author: 'Seiko Yamaguchi',
    authorBio: 'CEO of Consilegy LLC. Around eight years of HubSpot and Salesforce implementation work led her to design Revenue CRM as "the CRM that does not make you type."',
    why: 'For the structural "why" behind these problems, see media.consilegy.com',
    crumbRoot: 'Revenue CRM',
  },
} as const;

export async function crmMediaArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('crmMedia', (e) => e.data.lang === lang && !e.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function mediaPath(lang: Lang, slug = ''): string {
  const base = lang === 'ja' ? '/crm/media/' : '/en/crm/media/';
  return slug ? `${base}${slug}/` : base;
}

export function fmtDate(d: Date, lang: Lang): string {
  return lang === 'ja'
    ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** scripts/generate-eyecatches.mjs が出す 1200x630 の SVG。 */
export function eyecatchPath(lang: Lang, slug: string): string {
  return lang === 'ja' ? `/images/crm/media/${slug}.svg` : `/images/crm/media/en/${slug}.svg`;
}
