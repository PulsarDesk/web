import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: 'e2e',
	timeout: 30_000,
	webServer: {
		command: 'bun run build && bun run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: 'http://localhost:4173',
		// TR browser is the baseline; auto-detection specs override per-describe
		locale: 'tr-TR'
	}
});
