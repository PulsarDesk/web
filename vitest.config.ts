import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';

/**
 * Vitest config for component + unit tests (jsdom + @testing-library/svelte).
 *
 * Kept separate from vite.config.ts so the SvelteKit/Cloudflare build stays
 * untouched. Real-browser, full-page UI testing lives in Playwright
 * (see playwright.config.ts). This split is the standard testing setup for
 * every Pulsar project.
 */
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$lib: fileURLToPath(new URL('./src/lib', import.meta.url))
		},
		// Resolve Svelte's browser build so component lifecycle (onMount, effects)
		// runs under jsdom.
		conditions: ['browser']
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest-setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
