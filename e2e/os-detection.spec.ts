import { test, expect } from '@playwright/test';

/**
 * The download page detects the visitor's OS client-side from the user agent
 * and platform. We override both before any page script runs so the assertion
 * is deterministic regardless of the host the tests run on.
 */
const cases = [
	{ name: 'macOS', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', platform: 'MacIntel' },
	{ name: 'Windows', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', platform: 'Win32' },
	{ name: 'Linux', ua: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64)', platform: 'Linux x86_64' }
];

for (const c of cases) {
	test(`detects ${c.name} from the user agent`, async ({ page }) => {
		await page.addInitScript(
			([ua, platform]) => {
				Object.defineProperty(navigator, 'userAgent', { get: () => ua });
				Object.defineProperty(navigator, 'platform', { get: () => platform });
			},
			[c.ua, c.platform]
		);
		await page.goto('/download');
		await expect(page.locator('.detected .meta h3')).toHaveText(c.name);
		await expect(page.locator('.detected .meta .sm')).not.toBeEmpty();
	});
}
