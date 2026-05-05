/**
 * scripts/audit-seo.mjs
 *
 * Audits SEO meta tags across all built HTML pages in dist/.
 *
 * Outputs:
 *   docs/seo-audit.md          — full per-page audit table
 *   docs/seo-missing-description.md — pages with empty/missing description
 *   docs/seo-og-image-map.csv  — og:image URL per page
 *
 * Usage:
 *   npm run build && node scripts/audit-seo.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST_DIR = join(ROOT, 'dist');
const DOCS_DIR = join(ROOT, 'docs');

// ── Utilities ──────────────────────────────────────────────────────────────

function getAllHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllHtmlFiles(fullPath));
    else if (entry.name === 'index.html') results.push(fullPath);
  }
  return results;
}

function extract(html, pattern) {
  const m = html.match(pattern);
  return m ? m[1] : '';
}

function parseHead(html) {
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  const head = headMatch ? headMatch[1] : html;
  return {
    htmlLang: extract(html, /<html[^>]+lang="([^"]+)"/i),
    title: extract(head, /<title>([^<]*)<\/title>/i),
    description: extract(head, /<meta name="description" content="([^"]*)"/i),
    canonical: extract(head, /<link rel="canonical" href="([^"]*)"/i),
    robots: extract(head, /<meta name="robots" content="([^"]*)"/i),
    ogType: extract(head, /<meta property="og:type" content="([^"]*)"/i),
    ogTitle: extract(head, /<meta property="og:title" content="([^"]*)"/i),
    ogDescription: extract(head, /<meta property="og:description" content="([^"]*)"/i),
    ogUrl: extract(head, /<meta property="og:url" content="([^"]*)"/i),
    ogImage: extract(head, /<meta property="og:image" content="([^"]*)"/i),
    ogLocale: extract(head, /<meta property="og:locale" content="([^"]*)"/i),
  };
}

// ── Main ───────────────────────────────────────────────────────────────────

const htmlFiles = getAllHtmlFiles(DIST_DIR);
console.log(`\n📂 HTML files found: ${htmlFiles.length}`);

const pages = [];

for (const filePath of htmlFiles.sort()) {
  const html = readFileSync(filePath, 'utf8');
  const urlPath = '/' + filePath.replace(DIST_DIR + '/', '').replace(/index\.html$/, '');
  const meta = parseHead(html);
  pages.push({ urlPath, filePath, ...meta });
}

// ── Issues detection ───────────────────────────────────────────────────────

function issues(p) {
  const flags = [];
  if (!p.description) flags.push('no-description');
  if (p.description && p.description.length < 50) flags.push('desc-short');
  if (p.description && p.description.length > 160) flags.push('desc-long');
  if (!p.ogImage) flags.push('no-og-image');
  if (p.ogImage && p.ogImage.includes('og-default')) flags.push('og-default');
  if (!p.ogType) flags.push('no-og-type');
  if (!p.ogLocale) flags.push('no-og-locale');
  if (!p.canonical) flags.push('no-canonical');
  if (p.htmlLang !== 'ja' && p.htmlLang !== 'en') flags.push('bad-lang');
  return flags;
}

// ── docs/seo-audit.md ──────────────────────────────────────────────────────

const auditRows = pages.map((p) => {
  const flags = issues(p);
  const status = flags.length === 0 ? '✅' : '⚠️';
  const descLen = p.description ? p.description.length : 0;
  const ogImageShort = p.ogImage
    ? p.ogImage.replace('https://consilegy.com', '').substring(0, 60)
    : '—';
  return `| ${p.urlPath} | ${p.htmlLang} | ${p.ogType || '—'} | ${p.ogLocale || '—'} | ${descLen} | ${ogImageShort} | ${flags.join(', ') || '—'} | ${status} |`;
});

const auditMd = [
  '# SEO Audit',
  '',
  `Generated: ${new Date().toISOString()}`,
  `Total pages: ${pages.length}`,
  '',
  '| URL | lang | og:type | og:locale | desc len | og:image | Issues | Status |',
  '|---|---|---|---|---|---|---|---|',
  ...auditRows,
  '',
  '## Legend',
  '- `no-description` — meta description is empty',
  '- `desc-short` — description under 50 chars',
  '- `desc-long` — description over 160 chars',
  '- `no-og-image` — og:image tag missing',
  '- `og-default` — og:image is the fallback default (not page-specific)',
  '- `no-og-type` — og:type tag missing',
  '- `no-og-locale` — og:locale tag missing',
  '- `no-canonical` — canonical tag missing',
  '- `bad-lang` — html[lang] is not ja or en',
].join('\n');

writeFileSync(join(DOCS_DIR, 'seo-audit.md'), auditMd + '\n', 'utf8');
console.log('📄 docs/seo-audit.md written');

// ── docs/seo-missing-description.md ──────────────────────────────────────

const missing = pages.filter((p) => !p.description || p.description.length < 50);
const missingRows = missing.map(
  (p) => `| ${p.urlPath} | ${p.description ? p.description.length : 0} | ${p.description || '—'} |`
);

const missingMd = [
  '# Pages Missing or Short Meta Description',
  '',
  `Generated: ${new Date().toISOString()}`,
  `Total: ${missing.length} page(s)`,
  '',
  '| URL | desc len | description |',
  '|---|---|---|',
  ...missingRows,
].join('\n');

writeFileSync(join(DOCS_DIR, 'seo-missing-description.md'), missingMd + '\n', 'utf8');
console.log(`📄 docs/seo-missing-description.md written (${missing.length} pages)`);

// ── docs/seo-og-image-map.csv ──────────────────────────────────────────────

const csvLines = ['url,og_type,og_locale,og_image'];
for (const p of pages) {
  csvLines.push(`"${p.urlPath}","${p.ogType}","${p.ogLocale}","${p.ogImage}"`);
}

writeFileSync(join(DOCS_DIR, 'seo-og-image-map.csv'), csvLines.join('\n') + '\n', 'utf8');
console.log('📄 docs/seo-og-image-map.csv written');

// ── Summary ────────────────────────────────────────────────────────────────

const withIssues = pages.filter((p) => issues(p).length > 0);
const ogDefault = pages.filter((p) => p.ogImage && p.ogImage.includes('og-default'));
const noDesc = pages.filter((p) => !p.description);
const enPages = pages.filter((p) => p.htmlLang === 'en');
const enWrongLocale = enPages.filter((p) => p.ogLocale !== 'en_US');
// Article pages: must have at least one segment after the category (not index pages)
const articlePages = pages.filter((p) =>
  p.urlPath.match(/\/(marketing|analytics|project-management|my-opinion|others|case-studies)\/[^/]+\//));
const articleWrongType = articlePages.filter((p) => p.ogType !== 'article');

console.log('\n📊 Summary:');
console.log(`  Total pages:         ${pages.length}`);
console.log(`  Pages with issues:   ${withIssues.length}`);
console.log(`  No description:      ${noDesc.length}`);
console.log(`  og:image = default:  ${ogDefault.length}`);
console.log(`  EN pages:            ${enPages.length}`);
console.log(`  EN wrong locale:     ${enWrongLocale.length}`);
console.log(`  Article pages:       ${articlePages.length}`);
console.log(`  Article wrong type:  ${articleWrongType.length}`);

if (enWrongLocale.length > 0) {
  console.log('\n⚠️  EN pages with wrong og:locale:');
  for (const p of enWrongLocale) console.log(`    ${p.urlPath} → ${p.ogLocale}`);
}
if (articleWrongType.length > 0) {
  console.log('\n⚠️  Article pages with og:type != article:');
  for (const p of articleWrongType) console.log(`    ${p.urlPath} → ${p.ogType}`);
}

console.log('\n🎉 Done!');
