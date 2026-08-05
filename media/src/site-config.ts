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
// 空のままなら計測タグは一切出力されない（何も入っていない今と同じ状態）。
//
// GTM側でやること:
//   - GA4設定タグの対象に media.consilegy.com を含める
//   - クロスドメイン計測（GA4 管理 → データストリーム → タグ設定を行う
//     → ドメインの設定）に consilegy.com と media.consilegy.com を両方登録する。
//     これをやらないと、メディアから本体へ遷移した時点で別セッション扱いになり、
//     「記事を読んだ人が無料相談に進んだか」が追えない。
// 本体サイト consilegy.com と同一コンテナ（src/layouts/BaseLayout.astro に直書きされているもの）
export const GTM_ID: string = import.meta.env.PUBLIC_GTM_ID ?? 'GTM-T2FNKSK';

// 本体サイトのプライバシーポリシー。
// 「6. アクセス解析ツール・Cookieの使用」に Google Tag Manager と Google Analytics の
// 記載があるため、メディア側はここへリンクすれば外部送信の公表を満たせる。
export const PRIVACY_URL_JA = 'https://consilegy.com/privacy-policy/';
export const PRIVACY_URL_EN = 'https://consilegy.com/en/privacy-policy/';
