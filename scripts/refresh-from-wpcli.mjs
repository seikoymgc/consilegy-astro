/**
 * refresh-from-wpcli.mjs
 *
 * WordPress本番（WP-CLI export）を正として Astro content を再生成する。
 *
 * 前提: exports/wp-cli-page.json, exports/wp-cli-post.json, exports/wp-cli-case-studies.json が存在すること。
 *
 * Usage: node scripts/refresh-from-wpcli.mjs
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

// ── dirs ──────────────────────────────────────────────────────────────────────

const DIRS = [
  'exports',
  'src/content/pages',
  'src/content/blog',
  'src/content/case-studies',
  'src/content/services',
  'docs',
];
for (const d of DIRS) mkdirSync(d, { recursive: true });

// ── helpers ───────────────────────────────────────────────────────────────────

function loadJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

/** Strip Gutenberg block comments, script, style tags */
function cleanHtml(raw = '') {
  return raw
    .replace(/<!--\s*wp:[^>]*?-->/gi, '')         // <!-- wp:xxx {...} -->
    .replace(/<!--\s*\/wp:[a-z/][^\-]*?-->/gi, '') // <!-- /wp:xxx -->
    .replace(/<!--[\s\S]*?-->/g, '')               // remaining HTML comments
    .replace(/<script[\s\S]*?<\/script>/gi, '')    // script tags
    .replace(/<style[\s\S]*?<\/style>/gi, '')      // style tags
    .replace(/\n{3,}/g, '\n\n')                    // collapse blank lines
    .trim();
}

/** Map WP media URL to local /images/wp/... path if available, else keep original */
function localImage(wpUrl = '') {
  if (!wpUrl) return '';
  const m = wpUrl.match(/\/wp-content\/uploads\/(.+)$/);
  if (!m) return wpUrl;
  const local = '/images/wp/' + m[1];
  if (existsSync('public' + local)) return local;
  return wpUrl; // fallback
}

/** Escape YAML string */
function yamlStr(v = '') {
  return JSON.stringify(String(v).replace(/\r?\n/g, ' ').trim());
}

/** Build frontmatter block */
function frontmatter(obj) {
  const lines = ['---'];
  for (const [key, val] of Object.entries(obj)) {
    if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${key}: []`);
      } else {
        lines.push(`${key}:`);
        for (const v of val) lines.push(`  - ${yamlStr(v)}`);
      }
    } else if (typeof val === 'boolean') {
      lines.push(`${key}: ${val}`);
    } else if (typeof val === 'number') {
      lines.push(`${key}: ${val}`);
    } else {
      lines.push(`${key}: ${yamlStr(val ?? '')}`);
    }
  }
  lines.push('---', '');
  return lines.join('\n');
}

function stripHtml(html = '') {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#\d+;/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Detect shortcodes like [shortcode_name ...] */
function detectShortcodes(html = '') {
  const matches = html.match(/\[[a-z_][a-zA-Z0-9_\- ]*[^\]]*\]/g) || [];
  return [...new Set(matches)].filter(m => !m.startsWith('[caption') || true);
}

/** Detect form embeds */
function detectForms(html = '') {
  const patterns = [
    /hbspt\.forms\.create/i,
    /hs-form-iframe/i,
    /hbspt-form/i,
    /ays-quiz/i,
    /\[contact-form/i,
    /\[wpforms/i,
    /forminator/i,
  ];
  return patterns.filter(p => p.test(html)).map(p => p.source);
}

function classifyStatus(html = '', shortcodes = [], forms = []) {
  const clean = html.trim();
  if (!clean) return 'empty_in_wordpress';
  if (forms.length > 0) return 'form_detected';
  if (shortcodes.length > 0) return 'shortcode_detected';
  if (/wp:block/.test(clean)) return 'reusable_block_detected';
  return 'ok';
}

// ── load data ─────────────────────────────────────────────────────────────────

const wpPages       = loadJson('exports/wp-cli-page.json');
const wpPosts       = loadJson('exports/wp-cli-post.json');
const wpCaseStudies = loadJson('exports/wp-cli-case-studies.json');

console.log(`Loaded: ${wpPages.length} pages, ${wpPosts.length} posts, ${wpCaseStudies.length} case-studies`);

// ── audit rows ────────────────────────────────────────────────────────────────

const audit = [];

// ── services frontmatter preservation ────────────────────────────────────────
// Read existing services frontmatter to preserve template-specific fields

function loadServicesFrontmatter() {
  const map = {};
  const servicesDir = 'src/content/services';
  for (const file of (existsSync(servicesDir)
    ? readFileSync('/dev/stdin', 'utf8').split('\n').filter(Boolean) // placeholder
    : [])) {
    // Will be populated below
  }
  return map;
}

const servicesFmCache = {};
{
  const servicesDir = 'src/content/services';
  try {
    const files = [];
    // Use node:fs to list
    const { readdirSync } = await import('node:fs');
    const entries = readdirSync(servicesDir);
    for (const f of entries) {
      if (!f.endsWith('.md')) continue;
      const content = readFileSync(path.join(servicesDir, f), 'utf8');
      const m = content.match(/^---\n([\s\S]*?)\n---/);
      if (!m) continue;
      // Parse frontmatter
      const fm = {};
      for (const line of m[1].split('\n')) {
        const kv = line.match(/^(\w+):\s*(.+)$/);
        if (!kv) continue;
        const key = kv[1];
        let val = kv[2].trim();
        // Unquote JSON strings
        try { val = JSON.parse(val); } catch { /* keep as string */ }
        fm[key] = val;
      }
      servicesFmCache[f] = fm;
    }
  } catch (e) {
    console.warn('Could not load services frontmatter:', e.message);
  }
}

// ── 1. PAGES ─────────────────────────────────────────────────────────────────

console.log('\n── Processing pages ──');

// Identify service pages (JA: /services/*, EN handled separately)
const servicePageSlugs = new Set();

for (const page of wpPages) {
  const permalink   = page.permalink || '';
  const raw         = page.post_content || '';
  const html        = cleanHtml(raw);
  const slug        = page.post_name;
  const lang        = page.lang || 'ja';
  const modified    = page.post_modified || '';
  const title       = page.post_title || slug;
  const excerpt     = stripHtml(page.post_excerpt || '').slice(0, 200);
  const image       = localImage(page.featured_image || '');
  const imageAlt    = page.featured_image_alt || '';
  const shortcodes  = detectShortcodes(html);
  const forms       = detectForms(html + raw);
  const status      = classifyStatus(html, shortcodes, forms);

  const file = path.join('src/content/pages', `${slug}.md`);

  const fm = frontmatter({
    wpId:            page.ID,
    title,
    slug,
    sourceUrl:       permalink,
    status:          page.post_status,
    modified,
    description:     excerpt,
    featuredImage:   image,
    featuredImageAlt: imageAlt,
    draft:           false,
  });

  writeFileSync(file, fm + html + '\n');

  audit.push({
    type:       'page',
    title,
    url:        permalink,
    wp_id:      page.ID,
    wp_len:     raw.trim().length,
    astro_len:  html.length,
    status,
    issue:      [...shortcodes, ...forms].join('; ') || '',
  });

  // If this is a JA service page, also update services collection
  if (/^https?:\/\/[^/]+\/services\//.test(permalink)) {
    servicePageSlugs.add(slug);
    const svcFile = path.join('src/content/services', `${slug}.md`);
    if (existsSync(svcFile)) {
      const existingFm = servicesFmCache[`${slug}.md`] || {};
      const svcFm = frontmatter({
        title:       existingFm.title   || title,
        slug:        existingFm.slug    || slug,
        description: existingFm.description || excerpt,
        target:      existingFm.target  || '',
        lead:        existingFm.lead    || '',
        order:       existingFm.order   || 999,
        ctaText:     existingFm.ctaText || '相談する',
        ctaHref:     existingFm.ctaHref || '/contact/',
        lang:        'ja',
        sourceUrl:   permalink,
      });
      writeFileSync(svcFile, svcFm + html + '\n');
      console.log(`  [service-update] ${svcFile}`);
    }
  }

  // EN service pages in pages collection — update if file exists
  if (/^https?:\/\/[^/]+\/en\/services-en\//.test(permalink)) {
    // Check if this slug exists in src/content/services as en-{slug}.md
    const enSvcFile = path.join('src/content/services', `en-${slug}.md`);
    if (existsSync(enSvcFile)) {
      const existingFm = servicesFmCache[`en-${slug}.md`] || {};
      const svcFm = frontmatter({
        title:       existingFm.title   || title,
        slug:        existingFm.slug    || `en-${slug}`,
        description: existingFm.description || excerpt,
        target:      existingFm.target  || '',
        lead:        existingFm.lead    || '',
        order:       existingFm.order   || 999,
        ctaText:     existingFm.ctaText || 'Get in touch',
        ctaHref:     existingFm.ctaHref || '/en/contact-en/',
        lang:        'en',
        sourceUrl:   permalink,
      });
      writeFileSync(enSvcFile, svcFm + html + '\n');
      console.log(`  [service-update] ${enSvcFile}`);
    }
  }

  console.log(`  ${status === 'ok' ? '✓' : '⚠'} ${slug} (${html.length} chars) [${status}]`);
}

// ── 2. BLOG POSTS ─────────────────────────────────────────────────────────────

console.log('\n── Processing posts ──');

for (const post of wpPosts) {
  const raw        = post.post_content || '';
  const html       = cleanHtml(raw);
  const slug       = post.post_name;
  const title      = post.post_title || slug;
  const excerpt    = stripHtml(post.post_excerpt || '').slice(0, 200);
  const image      = localImage(post.featured_image || '');
  const imageAlt   = post.featured_image_alt || '';
  const cats       = post.categories || [];
  const tags       = post.tags || [];
  const shortcodes = detectShortcodes(html);
  const forms      = detectForms(html + raw);
  const status     = classifyStatus(html, shortcodes, forms);

  const file = path.join('src/content/blog', `${slug}.md`);

  const fm = frontmatter({
    wpId:            post.ID,
    title,
    slug,
    sourceUrl:       post.permalink,
    pubDate:         post.post_date,
    updatedDate:     post.post_modified,
    description:     excerpt,
    category:        cats[0] || '',
    tags,
    featuredImage:   image,
    featuredImageAlt: imageAlt,
    draft:           false,
  });

  writeFileSync(file, fm + html + '\n');

  audit.push({
    type:      'post',
    title,
    url:       post.permalink,
    wp_id:     post.ID,
    wp_len:    raw.trim().length,
    astro_len: html.length,
    status,
    issue:     [...shortcodes, ...forms].join('; ') || '',
  });

  console.log(`  ${status === 'ok' ? '✓' : '⚠'} ${slug} (${html.length} chars) [${status}]`);
}

// ── 3. CASE STUDIES ───────────────────────────────────────────────────────────

console.log('\n── Processing case-studies ──');

for (const cs of wpCaseStudies) {
  const raw        = cs.post_content || '';
  const html       = cleanHtml(raw);
  const slug       = cs.post_name;
  const lang       = cs.lang || 'ja';
  const title      = cs.post_title || slug;
  const excerpt    = stripHtml(cs.post_excerpt || '').slice(0, 200);
  const image      = localImage(cs.featured_image || '');
  const imageAlt   = cs.featured_image_alt || '';
  const shortcodes = detectShortcodes(html);
  const forms      = detectForms(html + raw);
  const status     = classifyStatus(html, shortcodes, forms);

  const file = path.join('src/content/case-studies', `${slug}.md`);

  const fm = frontmatter({
    wpId:            cs.ID,
    title,
    slug,
    sourceUrl:       cs.permalink,
    modified:        cs.post_modified,
    description:     excerpt,
    industry:        cs.industry || '',
    service:         cs.service  || '',
    featuredImage:   image,
    featuredImageAlt: imageAlt,
    alt:             imageAlt,
    lang,
    draft:           false,
  });

  writeFileSync(file, fm + html + '\n');

  audit.push({
    type:      'case-study',
    title,
    url:       cs.permalink,
    wp_id:     cs.ID,
    wp_len:    raw.trim().length,
    astro_len: html.length,
    status,
    issue:     [...shortcodes, ...forms].join('; ') || '',
  });

  console.log(`  ${status === 'ok' ? '✓' : '⚠'} ${slug} (${html.length} chars) [${status}]`);
}

// ── 4. Write inventory.md ─────────────────────────────────────────────────────

const byStatus = {};
for (const row of audit) {
  byStatus[row.status] = (byStatus[row.status] || 0) + 1;
}

const summaryLines = [
  '# Content Refresh Audit',
  '',
  `Generated: ${new Date().toISOString().slice(0, 10)}  `,
  `Source: WP-CLI export  `,
  '',
  '## Summary',
  '',
  `| Status | Count |`,
  `|---|---|`,
  ...Object.entries(byStatus).map(([s, n]) => `| ${s} | ${n} |`),
  '',
  '## Detail',
  '',
  '| type | title | url | wp_id | wp_len | astro_len | status | issue |',
  '|---|---|---|---|---|---|---|---|',
  ...audit.map(r =>
    `| ${r.type} | ${r.title.slice(0, 40)} | ${r.url} | ${r.wp_id} | ${r.wp_len} | ${r.astro_len} | ${r.status} | ${r.issue} |`
  ),
];

writeFileSync('docs/content-refresh-audit.md', summaryLines.join('\n'));

// ── 5. Save wp-cli content inventory ─────────────────────────────────────────

const inventory = {
  generated: new Date().toISOString(),
  pages:       wpPages.length,
  posts:       wpPosts.length,
  case_studies: wpCaseStudies.length,
  summary: byStatus,
};
writeFileSync('exports/wp-cli-content-inventory.json', JSON.stringify(inventory, null, 2));

// ── 6. Final report ───────────────────────────────────────────────────────────

console.log('\n══ Refresh complete ══');
console.log(`Pages:        ${wpPages.length}`);
console.log(`Posts:        ${wpPosts.length}`);
console.log(`Case-studies: ${wpCaseStudies.length}`);
console.log('\nStatus breakdown:');
for (const [s, n] of Object.entries(byStatus)) {
  console.log(`  ${s}: ${n}`);
}
console.log('\ndocs/content-refresh-audit.md を確認してください。');
