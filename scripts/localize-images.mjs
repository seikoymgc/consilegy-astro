/**
 * scripts/localize-images.mjs
 *
 * WordPress 画像をローカルへ移行する。
 *
 * 処理:
 *   1. src/content/**\/*.md から wp-content/uploads URL を全て抽出
 *   2. public/images/wp/ 以下に同じパス構造でダウンロード
 *   3. 全 .md ファイル内の URL を /images/wp/... へ置換
 *   4. URL マップを docs/image-url-map.csv に保存
 *   5. 失敗した画像を docs/image-download-errors.md に記録
 *
 * 使い方:
 *   node scripts/localize-images.mjs
 *   node scripts/localize-images.mjs --dry-run   # ダウンロードなし、URL抽出のみ
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import { createWriteStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'src/content');
const PUBLIC_IMAGES_DIR = join(ROOT, 'public/images/wp');
const DOCS_DIR = join(ROOT, 'docs');

const WP_BASE = 'https://consilegy.com/wp/wp-content/uploads/';
const LOCAL_BASE = '/images/wp/';
const DRY_RUN = process.argv.includes('--dry-run');

// ─── ユーティリティ ─────────────────────────────────────────────

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllMdFiles(fullPath));
    else if (entry.name.endsWith('.md')) results.push(fullPath);
  }
  return results;
}

function extractWpUrls(content) {
  const pattern = /https:\/\/consilegy\.com\/wp\/wp-content\/uploads\/[^\s"<>)\]]+/g;
  return [...new Set(content.match(pattern) || [])];
}

function wpUrlToLocalPath(url) {
  // https://consilegy.com/wp/wp-content/uploads/YYYY/MM/file.ext
  // → YYYY/MM/file.ext
  const rel = url.replace(WP_BASE, '');
  return rel;
}

function wpUrlToPublicPath(url) {
  return join(PUBLIC_IMAGES_DIR, wpUrlToLocalPath(url));
}

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    mkdirSync(dirname(destPath), { recursive: true });
    const file = createWriteStream(destPath);
    const get = url.startsWith('https') ? https.get : http.get;
    const req = get(url, { timeout: 15000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        // follow redirect
        download(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', (err) => { file.close(); reject(err); });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

// ─── メイン処理 ─────────────────────────────────────────────────

const mdFiles = getAllMdFiles(CONTENT_DIR);
console.log(`\n📂 Markdown files found: ${mdFiles.length}`);

// 全URLを収集
const allUrls = new Set();
for (const f of mdFiles) {
  const content = readFileSync(f, 'utf8');
  for (const url of extractWpUrls(content)) allUrls.add(url);
}
console.log(`🔍 Unique wp-content URLs found: ${allUrls.size}`);

if (DRY_RUN) {
  console.log('\n--- DRY RUN: URLs that would be downloaded ---');
  for (const url of [...allUrls].sort()) console.log(' ', url);
  process.exit(0);
}

// ダウンロード
const urlMap = []; // { wpUrl, localUrl, status }
const errors = [];
let downloaded = 0, skipped = 0, failed = 0;

console.log('\n⬇️  Downloading images...');
for (const url of [...allUrls].sort()) {
  const localRel = wpUrlToLocalPath(url);
  const destPath = wpUrlToPublicPath(url);
  const localUrl = LOCAL_BASE + localRel;

  if (existsSync(destPath)) {
    skipped++;
    urlMap.push({ wpUrl: url, localUrl, status: 'skipped' });
    process.stdout.write('.');
    continue;
  }

  try {
    await download(url, destPath);
    downloaded++;
    urlMap.push({ wpUrl: url, localUrl, status: 'downloaded' });
    process.stdout.write('+');
  } catch (err) {
    failed++;
    errors.push({ url, error: err.message });
    urlMap.push({ wpUrl: url, localUrl, status: `error: ${err.message}` });
    process.stdout.write('!');
  }
}
console.log(`\n✅ downloaded: ${downloaded}  skipped: ${skipped}  failed: ${failed}`);

// ─── docs/image-url-map.csv ─────────────────────────────────────
const csvLines = ['wp_url,local_url,status'];
for (const { wpUrl, localUrl, status } of urlMap) {
  csvLines.push(`"${wpUrl}","${localUrl}","${status}"`);
}
writeFileSync(join(DOCS_DIR, 'image-url-map.csv'), csvLines.join('\n') + '\n', 'utf8');
console.log('📄 docs/image-url-map.csv written');

// ─── docs/image-download-errors.md ──────────────────────────────
if (errors.length > 0) {
  const errLines = [
    '# Image Download Errors',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '| URL | Error |',
    '|---|---|',
    ...errors.map(({ url, error }) => `| \`${url}\` | ${error} |`),
  ];
  writeFileSync(join(DOCS_DIR, 'image-download-errors.md'), errLines.join('\n') + '\n', 'utf8');
  console.log(`⚠️  docs/image-download-errors.md written (${errors.length} errors)`);
} else {
  writeFileSync(
    join(DOCS_DIR, 'image-download-errors.md'),
    '# Image Download Errors\n\n_No errors — all images downloaded successfully._\n',
    'utf8'
  );
  console.log('✅ No download errors');
}

// ─── Markdown URL 置換 ──────────────────────────────────────────
// 成功したURLのみ置換（エラーのものはWP URLを残す）
const downloadedUrls = new Set(
  urlMap.filter(({ status }) => status === 'downloaded' || status === 'skipped').map(({ wpUrl }) => wpUrl)
);

let replacedFiles = 0;
for (const f of mdFiles) {
  const original = readFileSync(f, 'utf8');
  let updated = original;
  for (const { wpUrl, localUrl, status } of urlMap) {
    if (status === 'downloaded' || status === 'skipped') {
      // Replace all occurrences of this WP URL
      updated = updated.split(wpUrl).join(localUrl);
    }
  }
  if (updated !== original) {
    writeFileSync(f, updated, 'utf8');
    replacedFiles++;
    const rel = f.replace(ROOT + '/', '');
    console.log(`  ✏️  ${rel}`);
  }
}
console.log(`\n✏️  Replaced URLs in ${replacedFiles} files`);

// ─── docs/image-inventory.md ────────────────────────────────────
const inventoryLines = [
  '# Image Inventory',
  '',
  `Generated: ${new Date().toISOString()}`,
  `Total unique URLs: ${allUrls.size}`,
  '',
  '| Status | Count |',
  '|---|---|',
  `| downloaded | ${downloaded} |`,
  `| skipped (already existed) | ${skipped} |`,
  `| failed | ${failed} |`,
  '',
  '## All URLs',
  '',
  '| Local Path | Status |',
  '|---|---|',
  ...urlMap.map(({ localUrl, status }) => `| \`${localUrl}\` | ${status} |`),
];
writeFileSync(join(DOCS_DIR, 'image-inventory.md'), inventoryLines.join('\n') + '\n', 'utf8');
console.log('📄 docs/image-inventory.md written');

console.log('\n🎉 Done! Run: npm run build');
