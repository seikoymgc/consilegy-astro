# 2026-11-13 表紙の差し替え

- ユーザーの「女性がいいな」に従い、当日のB2B記事の日英共通表紙を女性の営業担当の写真へ変更。
- 組み込みimage_genで既存写真を編集。自然光・階調・構図を維持し、日本人女性へ変更。読める文字・ロゴ・装飾なし。
- 保存先: `public/images/crm/media/hero2/starting-a-deal-means-finding-the-same-contact-again-woman-20261113.webp`（1200×630）。
- キャッシュ対策のため新しいファイル名を使用。`src/lib/crm-media.ts` で記事・一覧・OGの参照を同時に更新。

- 独立レビューで元画像との自然光・階調・構図、商談入力場面、手や文字・ロゴを確認。重大な未解決事項なし。
- npm run build 成功（364ページ）。日英の記事本文・OG・一覧の新ファイル参照をdistで確認。

## プロンプト

Edit target: the attached current B2B article cover photograph. Change only the male sales professional to a fictional Japanese female sales professional around 40, with neat shoulder-length dark hair and a navy jacket over a simple blouse. Preserve the office, desk, laptop, business card, generous wide framing, candid concentrated side view, neutral skin tones, deep navy fabric detail and directional soft window daylight. Natural believable hands resting at the laptop and desk. Maintain photographic realism and accomplished editorial photographic quality, no beige/orange filter, no haze. No readable text, logos, graphic overlays or watermark. Wide 1200:630 composition.
