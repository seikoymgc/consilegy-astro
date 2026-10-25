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
  contractor: { ja: '受託開発・制作', en: 'Development' },
  reseller: { ja: '代理店', en: 'Resellers' },
  school: { ja: 'スクール', en: 'Schools' },
};

export const CRM_UPDATES: CrmUpdate[] = [
  {
    date: '2026-10-21',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'Slackとボタン1つでつなげます',
      en: 'Connect Slack with one button',
    },
    body: {
      ja: '設定 → 通知の「Slackとつなぐ」を押し、Slackでワークスペースと送り先のチャンネルを選ぶだけです。WebhookのURLを用意する必要はありません。アプリの追加に管理者の承認が要るSlackでは、承認されたあとにもう一度押します。',
      en: 'In Settings → Notifications, click “Connect Slack” and pick the workspace and channel in Slack. No webhook URL to set up. If your Slack requires admin approval for new apps, click it again once approved.',
    },
    prs: [335, 336],
  },
  {
    date: '2026-10-21',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '夜間のAIの報告を、Slackでも受け取れます',
      en: 'Overnight AI reports, now in Slack too',
    },
    body: {
      ja: '停滞商談の報告と、狙っている会社のニュースを、担当者のタスクに加えて、通知先のSlackチャンネルにも流します。',
      en: 'Stalled-deal reports and target-account news go to your notification Slack channel as well as to the owner’s tasks.',
    },
    prs: [334],
  },
  {
    date: '2026-10-21',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '狙っている会社のニュースに、次の一手とお祝いメールの下書き',
      en: 'Target-account news now comes with a next step and a congratulations draft',
    },
    body: {
      ja: 'ニュースを届けるタスクの先頭に、AIが考えた次の一手が付きます。前向きなニュースなら、先方へのお祝いメールを下書きしておきます。送るのは担当者で、自動では送りません。',
      en: 'Each news task opens with a next step suggested by AI. For good news, a congratulations email to your contact is drafted for you. You send it; nothing goes out automatically.',
    },
    prs: [332],
  },
  {
    date: '2026-10-20',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '活動・メモ・タスク・メール・添付まで、CSVで書き出せます',
      en: 'Export activities, notes, tasks, emails, and attachments to CSV',
    },
    body: {
      ja: '設定 →「データの書き出し」から、コンタクト・会社・商談に加えて、活動・メモ・タスク・メール・添付ファイルを種類ごとにCSVで書き出せます。件数の上限はありません。書き出せるのはオーナーと管理者です。',
      en: 'From Settings → Data export, download contacts, companies, and deals, plus activities, notes, tasks, emails, and attachments, as one CSV per type. No row limit. Owners and admins only.',
    },
    prs: [319],
  },
  {
    date: '2026-10-19',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '狙っている会社のニュースを、担当者に届けます',
      en: 'News on your target accounts, delivered to the owner',
    },
    body: {
      ja: '狙っている会社の資金調達・新サービス・人事異動などの公開ニュースを週1回調べ、出典つきで担当者のタスクに届けます。会社の画面に「ニュース」タブが加わります。設定 → 通知で有効にします。',
      en: 'Once a week, public news on your target accounts, such as funding, launches, and leadership changes, is checked and delivered to the owner as a task, with sources. Companies get a News tab. Turn it on in Settings → Notifications.',
    },
    prs: [318],
  },
  {
    date: '2026-10-19',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '止まっている商談を、AIが調べて報告します',
      en: 'AI looks into stalled deals and reports back',
    },
    body: {
      ja: '設定で有効にすると、14日以上動きのない商談をAIが毎朝10時に調べ、状況と次の打ち手を担当者のタスクに書きます。AIは記録を読むだけで、書き換えません。',
      en: 'Once enabled in Settings, AI reviews deals with no movement for 14+ days every morning at 10 a.m. JST and writes the situation and next steps into the owner’s tasks. It only reads your records; it never changes them.',
    },
    prs: [317],
  },
  {
    date: '2026-10-19',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'メールの署名を設定できます',
      en: 'Set your email signature',
    },
    body: {
      ja: '設定 → アカウントで、自分の署名を登録できます。1対1のメールを書き始めると、本文の末尾に入っています。',
      en: 'Add your own signature in Settings → Account. It’s already at the end of the body when you start a one-to-one email.',
    },
    prs: [322],
  },
  {
    date: '2026-10-19',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '名刺の読み取り結果は、画面を離れても続きから確認できます',
      en: 'Scanned business cards wait for you if you leave the screen',
    },
    body: {
      ja: '登録前に別の画面へ移っても、戻れば続きから確認できます。結果はお使いの端末の中にだけ残します。ブラウザにカメラを許可していないときは、端末のカメラアプリで撮れます。',
      en: 'Move to another screen before saving, and the scans are still there when you come back. They stay on your device only. If the browser has no camera permission, you can shoot with your device’s camera app instead.',
    },
    prs: [315, 320],
  },
  {
    date: '2026-10-19',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '画面の中で、新機能のお知らせを見られます',
      en: 'What’s new, right inside the app',
    },
    body: {
      ja: '上部バーのボタンから、最近の更新を10件まで見られます。新しいお知らせがあると印が付きます。',
      en: 'The button in the top bar shows the latest 10 updates, with a dot when there’s something new.',
    },
    prs: [314],
  },
  {
    date: '2026-10-17',
    editions: ['b2b'],
    title: {
      ja: 'ホームが、選んだ部署に合わせて切り替わります',
      en: 'The home screen follows the team you pick',
    },
    body: {
      ja: '営業・マーケ・CS・経営・管理のどれを選ぶかで、ホームの見出し、先に出す情報、業務への入口、AIへの質問候補が変わります。',
      en: 'Pick Sales, Marketing, CS, Leadership, or Admin, and the home screen’s headings, top information, shortcuts, and suggested AI questions change to match.',
    },
    prs: [309],
  },
  {
    date: '2026-10-16',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'AIエージェントに、契約・MRR・解約リスクを聞けます',
      en: 'Ask the AI agent about contracts, MRR, and churn risk',
    },
    body: {
      ja: '今月更新の契約、MRRの内訳、解約リスクの高い顧客、止まっている商談、今週の空き人日に答えます。数字は画面と同じ計算で出します。',
      en: 'It answers which contracts renew this month, how MRR breaks down, which customers are at risk, which deals are stuck, and how many person-days are free this week, using the same math as the screens.',
    },
    prs: [302, 304],
  },
  {
    date: '2026-10-16',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'フォームの送り主を、返信したときに連絡先にできます',
      en: 'Form senders can become contacts only when you reply',
    },
    body: {
      ja: 'フォームごとに設定すると、送信の時点では受信箱の会話だけを作り、返信したときに連絡先を作ります。営業のご連絡がリードとして数えられません。',
      en: 'Turn it on per form, and a submission only opens an inbox conversation. The contact is created when you reply, so sales pitches don’t count as leads.',
    },
    prs: [300],
  },
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
  {
    date: '2026-10-16',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '一斉配信の前に、宛先を確認できます',
      en: 'Check recipients before a bulk send',
    },
    body: {
      ja: '送信ボタンを押すと、宛先リスト・送る人数・配信対象から外れる人数とその理由・差出人・件名が確認画面に出ます。',
      en: 'Before a bulk email goes out, a confirmation screen shows the list, how many people it goes to, how many are excluded and why, the sender, and the subject.',
    },
    prs: [294],
  },
  {
    date: '2026-10-16',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '設定を検索できます',
      en: 'Search your settings',
    },
    body: {
      ja: '設定の一覧に検索欄を付けました。項目名で探して、そのまま開けます。',
      en: 'The settings list now has a search box. Find a setting by name and open it directly.',
    },
    prs: [292],
  },
  {
    date: '2026-10-15',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'タスクの期限を、プッシュ通知とSlackで受け取れます',
      en: 'Task due dates by push notification and Slack',
    },
    body: {
      ja: '期限の前日と当日の朝10時に、PCやスマホへ通知します。iPhoneはホーム画面に追加して使います。Slackにも流せます。',
      en: 'Get a reminder at 10 a.m. the day before and the day a task is due, on your computer or phone (on iPhone, add the app to your home screen). You can also send them to Slack.',
    },
    prs: [285],
  },
  {
    date: '2026-10-15',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'メールの受信箱を、自分でつなげます',
      en: 'Connect your support inbox yourself',
    },
    body: {
      ja: '受信箱ごとに転送先のアドレスが出ます。いまの問い合わせアドレスから転送を設定するだけで、届いたメールが会話として入ります。',
      en: 'Each inbox has its own forwarding address. Forward your current support address to it and incoming email arrives as conversations.',
    },
    prs: [276],
  },
  {
    date: '2026-10-14',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'フォームの送信が、インボックスの会話になります',
      en: 'Form submissions arrive in the inbox',
    },
    body: {
      ja: '公開フォームに届いた内容がインボックスの会話として入り、そこからメールで返信できます。',
      en: 'Submissions from your public forms land in the inbox as conversations, and you can reply by email from there.',
    },
    prs: [264],
  },
  {
    date: '2026-10-14',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '名刺の相手が登録済みなら、名刺の内容で更新します',
      en: 'Business cards update existing contacts',
    },
    body: {
      ja: '撮った名刺の相手がすでにいれば、新しく作らずに、役職や連絡先を名刺の内容で更新します。',
      en: 'If the person on a scanned card is already in your CRM, their title and contact details are updated from the card instead of creating a duplicate.',
    },
    prs: [263],
  },
  {
    date: '2026-10-13',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: '会社のTierを、自社のICPで判定します',
      en: 'Company tiers judged against your ICP',
    },
    body: {
      ja: '自社で書いたICPの説明をもとに、会社の自動調査がTierを判定します。確信度の低い判定は、人の確認を待ちます。',
      en: 'Company research now assigns a tier against the ICP you describe. Low-confidence calls wait for a person to review.',
    },
    prs: [237],
  },
  {
    date: '2026-10-13',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'コンタクトに「出会った場所」を残せます',
      en: 'Record where you met a contact',
    },
    body: {
      ja: '展示会や紹介など、どこで会ったかをコンタクトに残して、あとから編集できます。流入元に「名刺交換」も選べます。',
      en: 'Note where you met someone, such as a trade show or an introduction, and edit it later. “Business card exchange” is now a lead source.',
    },
    prs: [233, 259],
  },
  {
    date: '2026-10-12',
    editions: ['b2b', 'contractor', 'reseller'],
    title: {
      ja: 'ホームに「今やること」',
      en: '“Today” on the home screen',
    },
    body: {
      ja: 'ホームを開くと、自分のタスクのうち、期限が過ぎたもの・今日が期限のもの・期限のないものが、優先度と商談の金額の順に並びます。丸を押せば完了です。',
      en: 'Open the home screen to see your open tasks: overdue, due today, and undated, ordered by priority and deal size. Tick one off right there.',
    },
    prs: [241],
  },
];
