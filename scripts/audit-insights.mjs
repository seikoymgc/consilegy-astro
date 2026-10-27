/** Run after npm run build: node scripts/audit-insights.mjs
 * Checks exported HTML, so metadata and navigation remain usable without JS.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { parse } from 'parse5';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const origin = 'https://consilegy.com';
const attr = (node, key) => node?.attrs?.find(a => a.name === key)?.value;
const hasClass = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
function nodes(node) { return [node, ...(node.childNodes ?? []).flatMap(nodes)]; }
function text(node) { return node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join(''); }
const normalize = value => value.replace(/\s+/g, ' ').trim();
const errors = [];
function check(ok, context, message) { if (!ok) errors.push(`${context}: ${message}`); }
function load(pathname) {
  const file = join(dist, decodeURIComponent(pathname), 'index.html');
  if (!existsSync(file)) throw new Error(`Missing built page: ${pathname}`);
  return nodes(parse(readFileSync(file, 'utf8')));
}
const index = load('/insights/');
const links = index.filter(n => n.tagName === 'a').map(n => attr(n, 'href'));
const slugs = readdirSync(join(root, 'src/pages/insights'), { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('_')).map(d => d.name);
const sitemap = readdirSync(dist).filter(f => /^sitemap.*\.xml$/.test(f))
  .map(f => readFileSync(join(dist, f), 'utf8')).join('');
const profile = load('/company/');
check(profile.some(n => attr(n, 'id') === 'founder'), '/company/', 'Missing author profile anchor');
for (const slug of slugs) {
  const path = `/insights/${slug}/`;
  const url = origin + path;
  const all = load(path);
  const getMeta = key => attr(all.find(n => n.tagName === 'meta' && (attr(n, 'name') === key || attr(n, 'property') === key)), 'content');
  check(links.includes(path), path, 'Missing link from article index');
  check(sitemap.includes(`<loc>${url}</loc>`), path, 'Missing sitemap entry');
  check(!/noindex|nosnippet/.test(getMeta('robots') ?? ''), path, 'Search indexing or snippets are blocked');
  check(getMeta('og:type') === 'article', path, 'Incorrect Open Graph type');
  check(all.some(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical' && attr(n, 'href') === url), path, 'Incorrect canonical URL');
  check(!all.some(n => attr(n, 'hreflang') === 'en'), path, 'Untranslated article claims an English equivalent');
  const schemas = all.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json')
    .flatMap(n => JSON.parse(text(n)));
  const articles = schemas.filter(s => s['@type'] === 'Article');
  check(articles.length === 1, path, 'Expected one Article schema');
  const article = articles[0];
  if (!article) continue;
  check(article['@id'] === url + '#article' && article.mainEntityOfPage?.['@id'] === url, path, 'Article identity differs from canonical');
  check(article.author?.['@id'] === origin + '/company/#founder', path, 'Author identity differs from profile');
  check(all.some(n => n.tagName === 'a' && attr(n, 'rel') === 'author' && attr(n, 'href') === '/company/#founder'), path, 'Missing visible author link');
  for (const [field, meta] of [['datePublished', 'article:published_time'], ['dateModified', 'article:modified_time']]) {
    check(getMeta(meta) === article[field], path, `${field} meta/schema mismatch`);
    check(all.some(n => n.tagName === 'time' && attr(n, 'datetime') === article[field]), path, `${field} missing from visible dates`);
  }
  const ids = all.map(n => attr(n, 'id')).filter(Boolean);
  check(new Set(ids).size === ids.length, path, 'Duplicate HTML ids');
  const toc = all.find(n => hasClass(n, 'insight-contents'));
  check(!!toc, path, 'Missing static contents');
  const tocLinks = toc ? nodes(toc).filter(n => n.tagName === 'a') : [];
  check(tocLinks.length >= 2, path, 'Incomplete contents');
  for (const link of tocLinks) {
    const id = attr(link, 'href')?.slice(1);
    const target = all.find(n => attr(n, 'id') === id);
    check(target?.tagName === 'h2' && normalize(text(target)) === normalize(text(link)), path, `Contents target/text mismatch: ${id}`);
  }
  const body = all.find(n => hasClass(n, 'article-body'));
  const bodyNodes = body ? nodes(body) : [];
  const bodyLinks = bodyNodes.filter(n => n.tagName === 'a');
  for (const citation of article.citation ?? []) {
    check(bodyLinks.some(a => new URL(attr(a, 'href'), origin).href === citation), path, `Schema citation missing from visible body: ${citation}`);
  }
  for (const wrapper of bodyNodes.filter(n => hasClass(n, 'insight-evidence-table'))) {
    const cells = nodes(wrapper);
    check(cells.some(n => n.tagName === 'caption' && normalize(text(n))), path, 'Evidence table missing caption');
    check(cells.filter(n => n.tagName === 'th').every(n => ['row', 'col'].includes(attr(n, 'scope'))), path, 'Evidence table headers missing scope');
  }
  for (const link of bodyLinks.filter(n => attr(n, 'href')?.startsWith('/'))) {
    const targetUrl = new URL(attr(link, 'href'), origin);
    const target = load(targetUrl.pathname);
    check(!targetUrl.hash || target.some(n => attr(n, 'id') === decodeURIComponent(targetUrl.hash.slice(1))), path, `Broken internal reference: ${targetUrl.pathname}${targetUrl.hash}`);
  }
  if (slug === 'why-crm-adoption-fails') {
    const example = all.find(n => attr(n, 'id') === 'section-1')?.parentNode;
    check(example && /仮例/.test(text(example)) && /実在企業の支援実績や調査結果ではありません/.test(text(example)), path, 'Illustrative figures presented without their hypothetical context');
  }
  const bodyHeadings = body ? [...new Set(nodes(body).filter(n => hasClass(n, 'article-section'))
    .flatMap(section => nodes(section).filter(n => n.tagName === 'h2')))] : [];
  check(bodyHeadings.every(n => tocLinks.some(a => attr(a, 'href') === '#' + attr(n, 'id'))), path, 'Body heading omitted from contents');
}
// Check every link in the new concept guide, including cross-page fragments.
const guide = index.find(n => hasClass(n, 'insight-guide'));
for (const a of guide ? nodes(guide).filter(n => n.tagName === 'a') : []) {
  const url = new URL(attr(a, 'href'), origin);
  const target = load(url.pathname);
  check(!url.hash || target.some(n => attr(n, 'id') === url.hash.slice(1)), url.href, 'Missing guide target');
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log(`PASS: ${slugs.length} Japanese insights — discovery, metadata, dates, contents, source citations, internal references, evidence tables, and hypothetical-example context.`);
