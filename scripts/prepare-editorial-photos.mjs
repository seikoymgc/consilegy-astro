// Reuse the existing generated editorial scenes from the media project.
// Run from the repository root: node scripts/prepare-editorial-photos.mjs
// Bump VERSION and src/lib/editorial-photos.ts together when changing source imagery.
// These scenes illustrate work; they do not depict clients, staff, or actual engagements.
import sharp from '../media/node_modules/sharp/lib/index.js';
import { mkdir } from 'node:fs/promises';

const VERSION = '2026-10-jp';
const sourceOverrides = {
  adoption: 'japanese-team-2026b',
  sales: 'japanese-team-2026b',
  marketing: 'japanese-work-2026b',
  data: 'adoption-metric-is-not-login-rate',
};
const names = [
  'crm', 'sales', 'data', 'japan-gtm', 'adoption', 'marketing',
  'draft-the-internal-approval-document', 'write-down-the-review-criteria',
  'marketing-handoff-keeps-the-why', 'forecast-by-approval-not-confidence',
  'threshold-before-dashboard', 'clean-lists-before-crm-import',
  'japanese-deals-win-on-precedent', 'partner-or-direct-first-in-japan',
  'measure-before-go-live', 'why-teams-dont-use-the-tool', 'content-lead-time-count-the-waiting',
];
await mkdir('public/images/editorial', { recursive: true });
for (const name of names) {
  for (const width of [640, 1200]) {
    await sharp(`media/public/images/eyecatch-bg/${sourceOverrides[name] ?? name}.png`)
      .resize(width, Math.round(width * 630 / 1200), { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(`public/images/editorial/${name}-${width}-${VERSION}.webp`);
  }
}
console.log(`Prepared ${names.length} editorial scenes at 640px and 1200px.`);

// Distinct scenes created for the page expansion; keep filenames versioned.
const expandedNames = ['workshop', 'development', 'training', 'analysis', 'consultation', 'office', 'city', 'school'];
for (const name of expandedNames) {
  for (const width of [640, 1200]) {
    await sharp(`media/public/images/eyecatch-bg/${name}-japan-2026c.png`)
      .resize(width, Math.round(width * 2 / 3), { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(`public/images/editorial/${name}-${width}-2026-10d.webp`);
  }
}
console.log(`Prepared ${expandedNames.length} additional scenes at 640px and 1200px.`);
