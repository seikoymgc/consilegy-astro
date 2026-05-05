/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
	hbspt?: {
		forms: {
			create: (options: Record<string, unknown>) => void;
		};
	};
}
