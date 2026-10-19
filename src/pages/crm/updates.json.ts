import type { APIRoute } from 'astro';
import { CRM_UPDATES, EDITION_LABEL } from '../../data/crm-updates';

// 更新履歴を、Revenue CRM の画面の中のお知らせ（crm.consilegy.com）に渡すための JSON。
// 中身は /crm/updates/ と同じ src/data/crm-updates.ts。ここに足せば、製品の中にも出る。
// crm 側はサーバーから取得する（静的サイトなのでブラウザからの CORS は付けていない）。
const hash = (s: string) => {
  let h = 0;
  for (const c of s) h = (Math.imul(h, 31) + c.codePointAt(0)!) | 0;
  return (h >>> 0).toString(36);
};

export const GET: APIRoute = () => {
  // id は日付と日本語のタイトルから作る。並び順で振ると、新しい項目を上に足したときにずれ、
  // 既読の判定が狂うため。
  const items = CRM_UPDATES.map(u => ({
    id: `${u.date}-${hash(u.title.ja)}`,
    date: u.date,
    editions: u.editions,
    jaOnly: u.jaOnly ?? false,
    title: u.title,
    body: u.body,
  }));
  return new Response(JSON.stringify({ updatedAt: CRM_UPDATES[0]?.date ?? null, editions: EDITION_LABEL, items }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
