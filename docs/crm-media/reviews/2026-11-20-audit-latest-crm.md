# 2026-11-20 追加確認：CRM main 61c5428 → f8c3396（#470「環境」）が監査済み記事の主張を変えていないか

- 担当: Claude（独立レビュー）。工程①事実検証のみ。新機能の記事化と全174ページの再監査は対象外
- 前提の確認: `../crm-run` の `refs/heads/daily-media-2026-11-08` と `refs/remotes/origin/main` がともに `f8c33964a20dc420e93a4ae97d3bd2f6bc61bb3c`。`logs/HEAD` に 61c5428 → f8c3396 の fast-forward が記録されている（ファイルを読んで確認。git コマンドは使っていない）
- 実機では試していない。環境の切り替え・保存・APIの書き込み・CRMの編集はしていない。記事も変更していない。判定はすべてコードの読み取りによる

## 結論

**問題なし。** #470 で、既刊の「組織全体」「全件」「担当のみ」「オーナー／管理者」「書き出し」「APIキー」「共通デモ」に関する断定が誤りになった記事は無い。未解決の Critical 0件、Major 0件、Minor 0件。既存記事の公開・更新を止める理由は無い。

## 何が変わったか（差分7ファイル）

| ファイル | 変更 |
|---|---|
| `supabase/migrations/284_org_environments.sql` | 組織の中の区画「環境」（`org_environments`）を追加。`teams.environment_id`（チームの所属環境）と `organization_members.environment_id`（その人が今選んでいる環境、null＝全体）を追加。`has_full_object_view` と `has_object_scope` を置き換え |
| `src/lib/environments.ts` | 上部バー用の情報を読む。環境が無い組織では空を返す |
| `src/lib/environments.test.ts` | 切り替えできる人（owner/admin、または商談の閲覧範囲が全件の人）と、選択の解決のテスト |
| `src/components/environment-switcher.tsx` | 上部バーの「全体／各環境」切り替え。切り替えできない人には所属チームの環境名だけを出す |
| `src/components/app-topbar.tsx` | 環境が1つ以上あるときだけ切り替えを出す |
| `src/app/(dashboard)/layout.tsx` | 環境の情報を読んで上部バーへ渡す |
| `src/app/api/environments/current/route.ts` | 自分の選択を保存する POST。権限確認は `set_my_environment()` に任せる |

RLS への効き方（284 の本文で確認）:

- 環境を作れるのは運営（service_role）だけ。画面からの作成口は無い（284:30-34）。環境が無い組織・環境を選んでいない人には何も起きない（284:15、74-76）
- 環境を選んでいると、**閲覧だけ**が「担当者（無ければ作成者）がその環境のチームに属するレコード」に絞られる（284:191-193）。owner/admin も選んでいれば絞られる（判定が役割の確認より前にある）。編集・削除・作成の範囲は変わらない（284:168）
- `has_full_object_view` は環境を選んでいると false を返し、行ごとの判定に回る（284:141-143）。効く表は contacts・companies・deals・activities・tasks の閲覧ポリシー（260:57-100）
- 範囲は狭まる方向だけ。閲覧範囲（全件／チーム／担当のみ）を広げる経路は無い（284:12-14、92）
- 絞り込みは `auth.uid()` に依存する（284:56）。サービスロールで読む経路には効かない

## 確認した既刊の主張と、影響が無い理由

| 主張の種類 | 記事（日英とも） | 本文の要旨 | 判定と根拠 |
|---|---|---|---|
| 閲覧範囲・全件・担当のみ | new-reps-can-see-every-customer-in-the-crm | 「全件：組織のすべて」「最初は全員『全件』なので、管理者が絞るまで何も変わりません」 | 影響なし。閲覧範囲の定義と既定値は変わっていない。環境は運営が作った組織で、本人が選んだときだけ狭める別の仕組み（284:15、191）。「全体」に戻せば全件のまま |
| 一覧の書き出し | 同上 | 「一覧からの書き出しは『ｴｸｽﾎﾟｰﾄ』のチェックと閲覧範囲に従います」 | 影響なし。一覧の書き出しはログイン中の利用者の権限（RLS）で読む（contacts/export/route.ts:35、49-54）。環境を選んでいればさらに狭まるが、閲覧範囲を超えることは無いので記述は偽にならない |
| 全件の書き出し・オーナー／管理者 | no-one-keeps-a-copy-of-the-customer-data、new-reps-can-see-every-customer-in-the-crm | 「使えるのはオーナーと管理者だけ。閲覧範囲の設定に関係なく、組織の全件が出ます」 | 影響なし。「データの書き出し」は owner/admin に限定し（export/[dataset]/route.ts:116-118）、サービスロールで組織IDだけを条件に読む（同:25-33、120、130）。環境の絞り込みは効かず、全件のまま |
| 閲覧のみの席・全社 | bosses-get-screenshots-instead-of-crm-access | 「メンバーの閲覧範囲が全件なら全社が見えます」「メンバーの範囲を絞ったまま社長にだけ全件を見せる設定はありません」 | 影響なし。環境は見える範囲を広げない（284:12-14）。閲覧範囲が全件の人は切り替えでき「全体」を選べる（environments.ts:31-35） |
| AIアプリ接続（MCP）・ワークスペース全体 | crm-data-pasted-into-chatgpt-by-hand | 「見える範囲はワークスペース全体。閲覧範囲は効きません」 | 影響なし。接続は組織単位の資格情報で解決し（api-auth.ts:23-25）、MCP の処理はクライアントを渡さずに呼ばれ（use-cases.ts:1496-1509）、既定でサービスロールを使う（同:561-563）。`auth.uid()` に依存する環境の絞り込みは効かない |
| APIキー・組織のデータ | new-contacts-get-copied-into-another-app-by-hand | 「個人の担当範囲だけに絞ったキーではなく、組織のデータを扱います」 | 影響なし。APIキーは人に紐付かず組織IDだけを返す（api-auth.ts:8-16、63） |
| ゴミ箱・削除できる人 | afraid-to-delete-so-nobody-cleans-the-list | 「はじめの設定では、ゴミ箱に入れられるのはオーナーと管理者だけ」 | 影響なし。環境は閲覧だけに効き、削除の範囲は変わらない（284:168、191）。削除判定の写し（record-scope.ts）にも環境は入っていない |
| 資料検索・全部の資料 | proposals-and-contracts-live-on-personal-laptops | 「閲覧範囲にかかわらず、ワークスペースの全部の資料から抜粋を返す」 | 影響なし。284 が変えた閲覧ポリシーは連絡先・会社・商談・活動・タスクだけ（260:57-100）。資料は対象外 |
| 共通デモ | demos へ誘導する各記事 | 「デモは共有」「設定画面を見るだけ」など | 影響なし。環境を作るのは service_role だけで、`supabase/` 配下で `org_environments` に触れるのは 284 だけ（デモ用の投入データに環境は無い）。環境が無い組織では切り替えは出ない（app-topbar.tsx:89、environment-switcher.tsx:26）ので、画面・画像の見え方も変わらない |
| 一般語の「環境」 | the-marketing-menu-still-follows-someone-elses-workflow、ai-policy-undecided-so-the-whole-rollout-stalls、new-student-rosters-get-retyped-one-by-one ほか | 「どの環境でも」「自分の教室の環境」など | 影響なし。新機能の「環境」を指す文脈ではなく、事実の断定も変わらない |

紹介していない新機能の説明が無いことは、指摘にしていない（依頼の条件どおり）。既存の役割・閲覧範囲・データの仕様を「環境全体」「全環境」へ言い換える修正案も出していない。

## 指摘ではない観察（記事の修正は不要）

1. new-reps-can-see-every-customer-in-the-crm の「見えない商談があれば、担当者が空か、別の人になっています」は、運営が環境を作った組織では、選んでいる環境も原因になりうる。ただし環境は運営しか作れず、記事の想定（標準の設定）では成立する。断定の誤りではないため、指摘にしない
2. 製品側の挙動として、閲覧範囲が全件のときに環境を選んだ人が、その後「チーム」や「担当のみ」に変えられると、上部バーに切り替えが出なくなり（environments.ts:31-35、environment-switcher.tsx:31-39）、画面からは「全体」に戻せない。保存された選択はそのまま効く（284:44-59）。環境がある組織だけの話で、記事の主張は変えない。CRM側への共有事項として残す（実機では未確認）

## 未解決の件数

| 重大度 | 件数 |
|---|---|
| Critical | 0 |
| Major | 0 |
| Minor | 0 |

機械可読の結果: `../audit-2026-11-20/final-environments-findings.json`
