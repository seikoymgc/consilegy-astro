// Revenue CRM 使い方メディア（/crm/media/）の共通定義。
// 記事本体は src/content/crm-media/{ja,en}/<slug>.md。カテゴリは3つで固定。

import { getCollection, type CollectionEntry } from 'astro:content';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export type Lang = 'ja' | 'en';
export type Category = 'input' | 'setup' | 'operate';
export type Segment = 'b2b' | 'b2c';
export type Article = CollectionEntry<'crmMedia'>;

export const SEGMENT_ORDER: Segment[] = ['b2b', 'b2c'];

/** 一覧は /crm/media/b2b/ と /crm/media/b2c/ に分かれる。読者の痛みが違うため。 */
export const SEGMENTS: Record<Segment, {
  ja: string; en: string;
  jaTitle: string; enTitle: string;
  jaLead: string; enLead: string;
  jaMetaTitle: string; enMetaTitle: string;
  jaMetaDesc: string; enMetaDesc: string;
}> = {
  b2b: {
    ja: '法人営業', en: 'B2B sales',
    jaTitle: '現場の困りごとから、どの画面で消えるかまで',
    enTitle: 'From what goes wrong on the ground to the screen that fixes it',
    jaLead: '中小企業の営業・管理の現場で実際に起きている困りごとを一つずつ取り上げ、Revenue CRM のどの画面・どのボタンで解消するかを、導入支援8年の経験から書いています。',
    enLead: 'One real problem from small-company sales and operations at a time, and the exact screen and button in Revenue CRM that removes it, written from eight years of CRM implementation work.',
    jaMetaTitle: '法人営業の記事 | Revenue CRM | Consilegy',
    enMetaTitle: 'B2B field guide | Revenue CRM | Consilegy',
    jaMetaDesc: '法人営業の現場の困りごと（名刺が溜まる、止まった商談に気づかない、自動化を選べない）から、Revenue CRM のどの画面で解消するかまでを1本ずつ書いた記事。',
    enMetaDesc: 'One article per real B2B sales problem (cards piling up, stalled deals nobody sees, too many automations to choose from) and the exact Revenue CRM screen that removes it.',
  },
  b2c: {
    ja: 'スクール・教室', en: 'Schools & studios',
    jaTitle: '教室運営の困りごとから、どの画面で消えるかまで',
    enTitle: 'From what goes wrong in running a school to the screen that fixes it',
    jaLead: 'スクールや教室で実際に起きている困りごと（問い合わせが LINE に埋もれる、体験から入会までが追えない、振替と請求が月末作業になる）を一つずつ取り上げ、Revenue CRM のどの画面で解消するかを書いています。',
    enLead: 'One real problem from running a school or studio at a time (inquiries buried in chat, trials that never convert, make-up lessons and billing piling up at month end) and the exact Revenue CRM screen that removes it.',
    jaMetaTitle: 'スクール・教室の記事 | Revenue CRM | Consilegy',
    enMetaTitle: 'School field guide | Revenue CRM | Consilegy',
    jaMetaDesc: 'スクール・教室運営の困りごと（問い合わせが LINE に埋もれる、体験から入会が追えない、振替と請求が月末作業になる）から、Revenue CRM のどの画面で解消するかまでを1本ずつ書いた記事。',
    enMetaDesc: 'One article per real school-operations problem (inquiries buried in chat, trials that never convert, make-up lessons and billing at month end) and the exact Revenue CRM screen that removes it.',
  },
};

export const CATEGORY_ORDER: Category[] = ['input', 'setup', 'operate'];

type Bilingual = { ja: string; en: string };
export const CATEGORIES: Record<Category, Bilingual & { lead: Record<Segment, Bilingual> }> = {
  input: {
    ja: '入力する仕事',
    en: 'The work of entering data',
    lead: {
      b2b: {
        ja: '名刺、手書きメモ、通話、チャット。人が画面に向かって打ち込まなくても、記録が残るようにする。',
        en: 'Business cards, handwritten notes, calls, chat. Records that get kept without a person typing them in.',
      },
      b2c: {
        ja: 'LINE の問い合わせ、体験のヒアリング、レッスン後のメモ。先生が画面に向かって打ち込まなくても、生徒の記録が残るようにする。',
        en: 'Chat inquiries, trial-lesson notes, what happened in class. Student records that get kept without the teacher typing them in.',
      },
    },
  },
  setup: {
    ja: '設定する仕事',
    en: 'The work of setting up',
    lead: {
      b2b: {
        ja: '空の CRM を渡されて設定から始める、を無くす。業種別の初期設定と、迷わない自動化の選び方。',
        en: 'No more starting from an empty CRM. Industry presets and a way to pick automations without guessing.',
      },
      b2c: {
        ja: 'コース、料金、休校日、担当の先生。教室の形をそのまま入れて、初日から使える状態にする。',
        en: 'Courses, fees, closed days, teachers. Put the shape of your school in as it is and use it from day one.',
      },
    },
  },
  operate: {
    ja: '運用を回す仕事',
    en: 'The work of running it',
    lead: {
      b2b: {
        ja: '催促、割り当て、進み具合の確認。運用担当を置かなくても回る状態にする。',
        en: 'Reminders, assignments, checking where deals stand. Keeping it running without a dedicated operator.',
      },
      b2c: {
        ja: '振替、欠席、月謝の未納、退会の兆候。事務の人を置かなくても回る状態にする。',
        en: 'Make-up lessons, absences, unpaid fees, students about to leave. Keeping it running without an office manager.',
      },
    },
  },
};

export const COPY = {
  ja: {
    kicker: 'Revenue CRM',
    siteName: 'Revenue CRM 使い方メディア',
    tagline: 'Revenue CRM を現場で使う人のための、使い方の記事',
    backToSite: 'Consilegy',
    productPage: 'Revenue CRM について',
    homeTitle: '現場の困りごとから、どの画面で消えるかまで',
    homeLead: '法人営業と、スクール・教室。読者が違うので入口を分けています。どちらも、現場で実際に起きている困りごとを一つずつ取り上げ、Revenue CRM のどの画面で解消するかを、導入支援8年の経験から書いています。',
    homeMetaTitle: '使い方の記事 | Revenue CRM | Consilegy',
    homeMetaDesc: '現場の困りごとから、Revenue CRM のどの画面で解消するかまでを1本ずつ書いた記事。法人営業向けと、スクール・教室向け。',
    segmentLabel: '読者',
    allIn: '記事をすべて見る',
    more: 'もっと見る',
    latest: '新着記事',
    popular: 'よく読まれている記事',
    categoriesLabel: 'カテゴリ',
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
    siteName: 'Revenue CRM Field Guide',
    tagline: 'How-to articles for the people who run Revenue CRM every day',
    backToSite: 'Consilegy',
    productPage: 'About Revenue CRM',
    homeTitle: 'From what goes wrong on the ground to the screen that fixes it',
    homeLead: 'B2B sales teams and schools have different problems, so the articles are split by reader. Each one takes a real problem and shows the exact Revenue CRM screen that removes it, written from eight years of CRM implementation work.',
    homeMetaTitle: 'Field guide | Revenue CRM | Consilegy',
    homeMetaDesc: 'One article per real problem and the exact Revenue CRM screen that removes it. For B2B sales teams and for schools and studios.',
    segmentLabel: 'For',
    allIn: 'See all articles',
    more: 'See more',
    latest: 'New articles',
    popular: 'Most read',
    categoriesLabel: 'Categories',
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

/** サイドバー「よく読まれている記事」。frontmatter の featured 昇順。 */
export async function featuredArticles(lang: Lang, limit = 5): Promise<Article[]> {
  const all = await crmMediaArticles(lang);
  return all
    .filter((a) => a.data.featured != null)
    .sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0))
    .slice(0, limit);
}

export async function crmMediaArticles(lang: Lang, segment?: Segment): Promise<Article[]> {
  const all = await getCollection(
    'crmMedia',
    (e) => e.data.lang === lang && !e.data.draft && (!segment || e.data.segment === segment),
  );
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** /crm/media/ … 入口。/crm/media/<segment>/ … 一覧。/crm/media/<segment>/<slug>/ … 記事。 */
export function mediaRoot(lang: Lang): string {
  return lang === 'ja' ? '/crm/media/' : '/en/crm/media/';
}

export function mediaPath(lang: Lang, segment: Segment, slug = ''): string {
  const base = `${mediaRoot(lang)}${segment}/`;
  return slug ? `${base}${slug}/` : base;
}

export function articlePath(a: Article): string {
  return mediaPath(a.data.lang, a.data.segment, a.data.slug);
}

export function fmtDate(d: Date, lang: Lang): string {
  return lang === 'ja'
    ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * アイキャッチ。場面の写真 public/images/crm/media/hero/<slug>.webp（1200x630、日英共通）があればそれ。
 * 無い記事は scripts/generate-eyecatches.mjs が出す文字の SVG に落ちる（写真ができたら差し替える）。
 */
export function eyecatchPath(lang: Lang, slug: string): string {
  const hero = `/images/crm/media/hero/${slug}.webp`;
  if (existsSync(join(process.cwd(), 'public', hero))) return hero;
  return lang === 'ja' ? `/images/crm/media/${slug}.svg` : `/images/crm/media/en/${slug}.svg`;
}

/** OG 画像。写真があれば記事の写真、無ければ製品の OG。 */
export function ogImagePath(lang: Lang, slug: string): string {
  const hero = `/images/crm/media/hero/${slug}.webp`;
  if (existsSync(join(process.cwd(), 'public', hero))) return hero;
  return lang === 'ja' ? '/images/crm/og-crm.png' : '/images/crm/og-crm-en.png';
}
