import fs from "node:fs/promises";
import path from "node:path";

const SITE = "https://consilegy.com";
const API = `${SITE}/wp-json/wp/v2`;

const dirs = [
  "data",
  "exports",
  "docs",
  "src/content/pages",
  "src/content/blog",
  "src/content/case-studies",
];

for (const dir of dirs) {
  await fs.mkdir(dir, { recursive: true });
}

function stripHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .trim();
}

function yamlString(value = "") {
  return JSON.stringify(String(value).replace(/\r?\n/g, " ").trim());
}

function slugFromLink(link = "") {
  const url = new URL(link);
  const parts = url.pathname.split("/").filter(Boolean);
  return parts.at(-1) || "index";
}

function frontmatter(obj) {
  return [
    "---",
    ...Object.entries(obj).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:\n${value.map((v) => `  - ${yamlString(v)}`).join("\n")}`;
      }
      if (typeof value === "boolean") return `${key}: ${value}`;
      if (typeof value === "number") return `${key}: ${value}`;
      return `${key}: ${yamlString(value ?? "")}`;
    }),
    "---",
    "",
  ].join("\n");
}

async function fetchAll(endpoint) {
  const firstUrl = `${API}/${endpoint}?per_page=100&page=1&_embed=1`;
  const firstRes = await fetch(firstUrl, {
    headers: { "User-Agent": "Consilegy-Astro-Migration/1.0" },
  });

  if (!firstRes.ok) {
    throw new Error(`${endpoint}: ${firstRes.status} ${firstRes.statusText}`);
  }

  const totalPages = Number(firstRes.headers.get("x-wp-totalpages") || "1");
  const items = await firstRes.json();

  for (let page = 2; page <= totalPages; page++) {
    const res = await fetch(`${API}/${endpoint}?per_page=100&page=${page}&_embed=1`, {
      headers: { "User-Agent": "Consilegy-Astro-Migration/1.0" },
    });
    if (!res.ok) throw new Error(`${endpoint} page ${page}: ${res.status}`);
    items.push(...(await res.json()));
  }

  return items;
}

function featuredImage(item) {
  const media = item?._embedded?.["wp:featuredmedia"]?.[0];
  return {
    url: media?.source_url || "",
    alt: media?.alt_text || "",
  };
}

async function writeJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

async function writeMarkdown(file, data) {
  await fs.writeFile(file, data);
}

console.log("Fetching WordPress content...");

const [pages, posts, caseStudies] = await Promise.all([
  fetchAll("pages"),
  fetchAll("posts"),
  fetchAll("case-studies").catch((error) => {
    console.warn(`case-studies fetch skipped: ${error.message}`);
    return [];
  }),
]);

await writeJson("data/wp-pages.json", pages);
await writeJson("data/wp-posts.json", posts);
await writeJson("data/wp-case-studies.json", caseStudies);

const urlMap = [];

for (const page of pages) {
  const slug = slugFromLink(page.link);
  const file = path.join("src/content/pages", `${slug}.md`);
  const image = featuredImage(page);
  const html = cleanHtml(page.content?.rendered || "");

  const md =
    frontmatter({
      wpId: page.id,
      title: stripHtml(page.title?.rendered || slug),
      slug,
      sourceUrl: page.link,
      status: page.status,
      modified: page.modified,
      description: stripHtml(page.excerpt?.rendered || "").slice(0, 160),
      featuredImage: image.url,
      featuredImageAlt: image.alt,
      draft: false,
    }) +
    html +
    "\n";

  await writeMarkdown(file, md);

  urlMap.push({
    type: "page",
    title: stripHtml(page.title?.rendered || ""),
    sourceUrl: page.link,
    astroPath: new URL(page.link).pathname,
    file,
  });
}

for (const post of posts) {
  const slug = slugFromLink(post.link);
  const file = path.join("src/content/blog", `${slug}.md`);
  const image = featuredImage(post);
  const html = cleanHtml(post.content?.rendered || "");

  const md =
    frontmatter({
      wpId: post.id,
      title: stripHtml(post.title?.rendered || slug),
      slug,
      sourceUrl: post.link,
      pubDate: post.date,
      updatedDate: post.modified,
      description: stripHtml(post.excerpt?.rendered || "").slice(0, 160),
      featuredImage: image.url,
      featuredImageAlt: image.alt,
      draft: false,
    }) +
    html +
    "\n";

  await writeMarkdown(file, md);

  urlMap.push({
    type: "post",
    title: stripHtml(post.title?.rendered || ""),
    sourceUrl: post.link,
    astroPath: new URL(post.link).pathname,
    file,
  });
}

for (const cs of caseStudies) {
  const slug = slugFromLink(cs.link);
  const file = path.join("src/content/case-studies", `${slug}.md`);
  const image = featuredImage(cs);
  const html = cleanHtml(cs.content?.rendered || "");

  const md =
    frontmatter({
      wpId: cs.id,
      title: stripHtml(cs.title?.rendered || slug),
      slug,
      sourceUrl: cs.link,
      modified: cs.modified,
      description: stripHtml(cs.excerpt?.rendered || "").slice(0, 160),
      featuredImage: image.url,
      featuredImageAlt: image.alt,
      lang: cs.link.includes("/en/") ? "en" : "ja",
      draft: false,
    }) +
    html +
    "\n";

  await writeMarkdown(file, md);

  urlMap.push({
    type: "case-study",
    title: stripHtml(cs.title?.rendered || ""),
    sourceUrl: cs.link,
    astroPath: new URL(cs.link).pathname,
    file,
  });
}

const csv = [
  "type,title,sourceUrl,astroPath,file",
  ...urlMap.map((row) =>
    [row.type, row.title, row.sourceUrl, row.astroPath, row.file]
      .map((v) => `"${String(v || "").replaceAll('"', '""')}"`)
      .join(",")
  ),
].join("\n");

await fs.writeFile("docs/url-map.csv", csv);

await fs.writeFile(
  "docs/migration-summary.md",
  `# Migration Summary

## Exported

- Pages: ${pages.length}
- Posts: ${posts.length}
- Case studies: ${caseStudies.length}

## Generated

- data/wp-pages.json
- data/wp-posts.json
- data/wp-case-studies.json
- src/content/pages/*.md
- src/content/blog/*.md
- src/content/case-studies/*.md
- docs/url-map.csv

## Notes

- WordPress HTML is preserved as HTML inside Markdown files.
- Script and style tags are removed.
- Images are still remote WordPress URLs and should be localized later.
- Metadata should be reviewed before production.
`
);

console.log("Done.");
console.log(`Pages: ${pages.length}`);
console.log(`Posts: ${posts.length}`);
console.log(`Case studies: ${caseStudies.length}`);
console.log("Generated docs/url-map.csv and docs/migration-summary.md");
