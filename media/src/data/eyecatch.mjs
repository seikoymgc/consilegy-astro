import { refreshedVersions } from './editorial-image-refresh-20261113.mjs';

// 写真を差し替えた記事だけURLを更新し、既存記事の画像URLを保つ。
const versions = {
  'download-and-demo-make-different-promises': '20261114a',
  'start-ai-from-existing-work': '20261113a',
  'founder-sales-without-a-founder-copy': '20261112b',
  'inherited-automation-needs-a-business-owner': '20261110a',
  ...refreshedVersions,
};

export function eyecatchPath(slug, extension = 'webp') {
  const version = versions[slug] ?? '2026jp2';
  return `/images/eyecatch/${slug}-${version}.${extension}`;
}
