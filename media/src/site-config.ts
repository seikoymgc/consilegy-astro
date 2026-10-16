// サイト全体の設定値。
//
// Google Tag Manager のコンテナID（GTM-XXXXXXX）。
// 本体サイト consilegy.com と同じコンテナIDを入れる。
// タグの管理はGTM側に寄せるので、GA4の測定IDをこのリポジトリに持つ必要はない。
//
// 入れ方は2通り。どちらでもよい。
//   1. 下の既定値を 'GTM-XXXXXXX' に書き換える
//   2. 環境変数 PUBLIC_GTM_ID で渡す（GitHub Actions の env / Secrets など）
//
// 既定値が入っているので、環境変数を渡さなくてもタグは出力される。
//
// ここは `??` ではなく `||` を使うこと（2026-08-19 修正）。
// GitHub Actions の `${{ vars.PUBLIC_GTM_ID }}` は、リポジトリ変数が未登録のとき
// undefined ではなく「空文字」を env に渡す。`??` は空文字を値ありと判定するため
// 既定値に落ちず、GTM_ID が '' になって BaseLayout の3箇所すべてが false になり、
// ローカルビルドでは出るのに本番だけタグが消える、という壊れ方をしていた。
//
// GTM側でやること:
//   - GA4設定タグの対象に media.consilegy.com を含める
//   - クロスドメイン計測（GA4 管理 → データストリーム → タグ設定を行う
//     → ドメインの設定）に consilegy.com と media.consilegy.com を両方登録する。
//     これをやらないと、メディアから本体へ遷移した時点で別セッション扱いになり、
//     「記事を読んだ人が無料相談に進んだか」が追えない。
// 本体サイト consilegy.com と同一コンテナ（src/layouts/BaseLayout.astro に直書きされているもの）
export const GTM_ID: string = import.meta.env.PUBLIC_GTM_ID || 'GTM-T2FNKSK';

// 本体サイトのプライバシーポリシー。
// 「6. アクセス解析ツール・Cookieの使用」に Google Tag Manager と Google Analytics の
// 記載があるため、メディア側はここへリンクすれば外部送信の公表を満たせる。
export const PRIVACY_URL_JA = 'https://consilegy.com/privacy-policy/';
export const PRIVACY_URL_EN = 'https://consilegy.com/en/privacy-policy/';

// 媒体の説明。ツール名ではなく、扱う仕事の範囲を示す。
export const MEDIA_TAGLINE_JA = '集客から受注、その後の継続・拡大まで。B2Bの売上を考える実務メディア。';
export const MEDIA_TAGLINE_EN = 'From attracting customers to winning, retaining and growing accounts. Practical insights for B2B teams.';

// 検索結果と配信先でも、扱う分野が具体的に伝わる説明。
export const MEDIA_DESCRIPTION_JA = '集客から受注、その後の継続・拡大まで。マーケティング・営業・CRMの実務と、顧客との取引を続け、広げるための判断を扱うB2Bメディアです。';
export const MEDIA_DESCRIPTION_EN = 'Practical insights on B2B marketing, sales and CRM, from attracting customers to winning, retaining and growing accounts in Japan.';
