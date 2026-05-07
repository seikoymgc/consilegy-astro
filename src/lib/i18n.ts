// src/lib/i18n.ts

/** JA → EN の静的URLマッピング */
export const jaToEn: Record<string, string> = {
  '/': '/en/',
  '/services/': '/en/services/',
  '/services/revenue-architecture-design/': '/en/services/revenue-architecture-design/',
  '/services/marketing-strategy-design/': '/en/services/',
  '/services/hubspot-implementation-consulting/': '/en/services/hubspot-implementation-operations-support/',
  '/services/revops-ma-crm-sfa-implementation/': '/en/services/crm-revops-implementation/',
  '/services/operational-adoption-optimization/': '/en/services/adoption-growth-support/',
  '/services/digital-nomad/': '/en/services/assistance-in-attracting-digital-nomads-and-remote-worker/',
  '/services/website-for-events/': '/en/services/event-website-development-package/',
  '/case-studies/': '/en/case-studies/',
  '/company/': '/en/company/',
  '/contact/': '/en/contact/',
  '/privacy-policy/': '/en/privacy-policy/',
  '/about-revops/': '/en/',
  '/revenue-architecture/': '/en/',
  '/download/': '/en/',
  '/free-consultation/': '/en/',
  '/insights/': '/en/',
};

/** EN → JA の静的URLマッピング（jaToEnの逆引き） */
export const enToJa: Record<string, string> = Object.fromEntries(
  Object.entries(jaToEn).map(([ja, en]) => [en, ja])
);

/**
 * 現在のパスから別言語のURLを返す。
 * case-studies の詳細ページは alternateSlug ベースで解決する（オプション）。
 */
export function getAlternateUrl(
  pathname: string,
  currentLang: 'ja' | 'en',
  alternateSlug?: string | null,
): string {
  // trailing slash を正規化
  const path = pathname.endsWith('/') ? pathname : pathname + '/';

  if (currentLang === 'ja') {
    // 静的マップから探す
    if (jaToEn[path]) return jaToEn[path];
    // /case-studies/[slug]/ パターン
    if (path.startsWith('/case-studies/') && alternateSlug) {
      return `/en/case-studies/${alternateSlug}/`;
    }
    if (path.startsWith('/case-studies/')) {
      return '/en/case-studies/';
    }
    // /services/[slug]/ で未マップのもの
    if (path.startsWith('/services/')) return '/en/services/';
    // fallback
    return '/en/';
  } else {
    // EN → JA
    if (enToJa[path]) return enToJa[path];
    // /en/case-studies/[slug]/ パターン
    if (path.startsWith('/en/case-studies/') && path !== '/en/case-studies/') {
      if (alternateSlug) return `/case-studies/${alternateSlug}/`;
      return '/case-studies/';
    }
    if (path.startsWith('/en/services/') && path !== '/en/services/') {
      return '/services/';
    }
    if (path.startsWith('/en/')) return '/';
    return '/';
  }
}
