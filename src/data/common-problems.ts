// トップとサービス一覧で共通に使う「困りごと」。サービス名ではなく、相談したい理由から支援へ案内する。
export interface CommonProblem {
  problem: string;
  response: string;
  services: string[];
  // サービス以外の案内先（自社製品など）
  links?: { label: string; href: string }[];
}

export const commonProblems: CommonProblem[] = [
  {
    problem: '「あの人しか知らない」仕事がある',
    response: '担当者が休んでも、辞めても、仕事が止まらないようにします。手順や知識は社内Wikiに残し、トップ営業の判断は手本としてシステムに残して、自社専用のAIに育てます。',
    services: ['crm-revops-redesign', 'ai-workflow-enablement'],
    links: [{ label: 'Revenue CRM', href: '/crm/' }],
  },
  {
    problem: '売上を伸ばしたいのに、どこを改善すべきか分からない',
    response: '売上が止まっている原因を整理します。',
    services: ['revenue-architecture-design'],
  },
  {
    problem: '集客に投資しているのに、売上につながらない',
    response: '集める相手と、商談までの流れを見直します。',
    services: ['b2b-marketing-gtm-design'],
  },
  {
    problem: '商談はあるのに、受注が増えない',
    response: '提案・追客・受注までの進め方を見直します。',
    services: ['revenue-architecture-design', 'crm-revops-redesign'],
  },
  {
    problem: 'システムを入れたのに、使われていない',
    response: '業務に合う形に直し、使い続けられるようにします。',
    services: ['adoption-growth-support'],
  },
  {
    problem: '忙しいのに、成果が増えない',
    response: '作業を減らし、成果につながる仕事に時間を使えるようにします。',
    services: ['business-system-development', 'ai-workflow-enablement'],
  },
];
