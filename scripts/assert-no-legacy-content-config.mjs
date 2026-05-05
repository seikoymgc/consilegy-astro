#!/usr/bin/env node
/**
 * Astro 6: `src/content/config.ts` is legacy and breaks dev/build if present.
 * Valid config: `src/content.config.ts` (see https://docs.astro.build/en/guides/content-collections/)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const legacyNames = ['config.ts', 'config.js', 'config.mjs', 'config.mts'];

for (const name of legacyNames) {
	const abs = path.join(projectRoot, 'src', 'content', name);
	if (fs.existsSync(abs)) {
		console.error(
			`\n[astro] Legacy content config must not exist:\n  ${path.relative(projectRoot, abs)}\n\n` +
				'Remove it and use only:\n  src/content.config.ts\n\n' +
				'Example: rm src/content/config.ts\n'
		);
		process.exit(1);
	}
}
