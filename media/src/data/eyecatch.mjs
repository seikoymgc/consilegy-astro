// 写真を差し替えた記事だけURLを更新し、既存記事の画像URLを保つ。
const versions = {
  'inherited-automation-needs-a-business-owner': '20261110a',
};

export function eyecatchPath(slug, extension = 'webp') {
  const version = versions[slug] ?? '2026jp2';
  return `/images/eyecatch/${slug}-${version}.${extension}`;
}
