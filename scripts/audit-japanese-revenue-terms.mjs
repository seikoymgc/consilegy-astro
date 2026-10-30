// Run after building both Astro projects. English editions retain English terminology.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'parse5';
const legacy = /revenue\s+architecture(?:\s+design)?/i;
const failures = [];
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]))).flat();
}
function text(node) {
  if (['script', 'style'].includes(node.tagName)) return '';
  return node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join(' ');
}
function inspect(node, file) {
  for (const a of node.attrs ?? []) {
    if (['alt', 'title', 'aria-label', 'content'].includes(a.name) && legacy.test(a.value)) failures.push(`${file}: ${a.name}: ${a.value}`);
  }
  if (node.tagName === 'script' && node.attrs?.some(a => a.name === 'type' && a.value === 'application/ld+json')) {
    const json = (node.childNodes ?? []).map(n => n.value ?? '').join('');
    if (legacy.test(json)) failures.push(`${file}: JSON-LD contains English terminology`);
  }
  for (const child of node.childNodes ?? []) inspect(child, file);
}
for (const dir of ['dist', 'media/dist']) {
  let checked = 0;
  for (const file of (await files(dir)).filter(p => p.endsWith('.html'))) {
    const doc = parse(await readFile(file, 'utf8'));
    const html = doc.childNodes.find(n => n.tagName === 'html');
    if (!html?.attrs?.some(a => a.name === 'lang' && a.value.startsWith('ja'))) continue;
    checked++;
    if (legacy.test(text(doc))) failures.push(`${file}: visible text contains English terminology`);
    inspect(doc, file);
  }
  console.log(`${dir}: checked ${checked} Japanese HTML pages (text, metadata, accessible labels, JSON-LD)`);
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log('PASS: Japanese pages use レベニューアーキテクチャ / レベニューアーキテクチャ設計.');
