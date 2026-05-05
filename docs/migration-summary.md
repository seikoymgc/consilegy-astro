# Migration Summary

## Exported

- Pages: 37
- Posts: 26
- Case studies: 16

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
