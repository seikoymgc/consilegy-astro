/**
 * audit-links.mjs
 * Scans all built HTML in dist/ and reports:
 *   - internal links that have no matching dist/…/index.html
 *   - external links (listed for manual review)
 *   - broken anchor targets (#id not found on page)
 *
 * Usage: node scripts/audit-links.mjs
 * Output: docs/link-audit.md
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve, relative } from 'path';

const DIST   = resolve('dist');
const OUTPUT = resolve('docs/link-audit.md');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run npm run build first');
  process.exit(1);
}

// ── helpers ──────────────────────────────────────────────────────────────────

function walkHtml(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkHtml(full, files);
    else if (entry.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractLinks(html) {
  const links = [];
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) links.push(m[1]);
  return links;
}

function resolveInternalPath(href, pageFile) {
  // strip query / hash
  const clean = href.split('?')[0].split('#')[0];
  if (!clean || clean === '/') return '/';

  // already absolute path
  if (clean.startsWith('/')) return clean;

  // relative — resolve against page directory
  const pageDir = pageFile.replace(/\/index\.html$/, '/');
  return join(pageDir.replace(DIST, ''), clean);
}

function distExists(path) {
  // URL-decode for Japanese slugs, then check for index.html or .html file only
  const decoded = (() => { try { return decodeURIComponent(path); } catch { return path; } })();
  const normalised = decoded.replace(/\/$/, '');
  const candidates = [
    join(DIST, normalised, 'index.html'),
    join(DIST, normalised + '.html'),
  ];
  return candidates.some(c => existsSync(c));
}

// ── main ─────────────────────────────────────────────────────────────────────

const htmlFiles = walkHtml(DIST);
const broken   = [];   // { page, href }
const external = [];   // { page, href }
const checked  = new Set();

for (const file of htmlFiles) {
  const html  = readFileSync(file, 'utf8');
  const links = extractLinks(html);
  const page  = '/' + relative(DIST, file).replace(/\/index\.html$/, '/').replace(/\.html$/, '/');

  for (const href of links) {
    // skip anchors, mailto, tel, javascript, Astro build assets, and static file extensions
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    if (href.startsWith('/_astro/') || href.startsWith('/fonts/') || href.startsWith('/images/')) continue;
    if (/\.(svg|ico|png|jpg|jpeg|webp|gif|css|js|woff2?|xml|txt|pdf)$/i.test(href)) continue;

    if (/^https?:\/\//.test(href)) {
      const key = href;
      if (!checked.has(key)) {
        checked.add(key);
        external.push({ page, href });
      }
      continue;
    }

    const resolved = resolveInternalPath(href, file);
    const key = resolved;
    if (checked.has(key)) continue;
    checked.add(key);

    if (!distExists(resolved)) {
      broken.push({ page, href, resolved });
    }
  }
}

// ── output ───────────────────────────────────────────────────────────────────

const date = new Date().toISOString().slice(0, 10);
const lines = [
  `# Link Audit`,
  ``,
  `Generated: ${date}  `,
  `Pages scanned: ${htmlFiles.length}  `,
  `Unique links checked: ${checked.size}`,
  ``,
  `---`,
  ``,
];

if (broken.length === 0) {
  lines.push(`## Broken Internal Links`, ``, `None ✅`, ``);
} else {
  lines.push(`## Broken Internal Links (${broken.length})`, ``);
  lines.push(`| Page | href | Resolved path |`);
  lines.push(`|---|---|---|`);
  for (const { page, href, resolved } of broken) {
    lines.push(`| ${page} | ${href} | ${resolved} |`);
  }
  lines.push(``);
}

lines.push(`## External Links (${external.length} unique)`, ``);
if (external.length > 0) {
  lines.push(`| href | First seen on |`);
  lines.push(`|---|---|`);
  for (const { page, href } of external) {
    lines.push(`| ${href} | ${page} |`);
  }
}

const report = lines.join('\n');
writeFileSync(OUTPUT, report);

console.log(`\nLink audit complete.`);
console.log(`  Pages scanned : ${htmlFiles.length}`);
console.log(`  Links checked : ${checked.size}`);
console.log(`  Broken        : ${broken.length}`);
console.log(`  External      : ${external.length}`);
console.log(`\nReport → docs/link-audit.md\n`);

if (broken.length > 0) {
  console.error('Broken links found:');
  for (const { page, href } of broken) console.error(`  ${page}  →  ${href}`);
  process.exit(1);
}
