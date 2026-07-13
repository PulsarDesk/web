import { expect, test } from '@playwright/test';

test.describe('download page', () => {
	test('renders the Turkish download content', async ({ page }) => {
		await page.goto('/download');

		await expect(page.getByRole('heading', { name: 'Pulsar’ı kur, saniyeler içinde bağlan.' })).toBeVisible();

		// Detected-system card
		await expect(page.getByText('Algılanan sistem')).toBeVisible();

		// All-platforms grid (scoped: the detected card repeats an OS heading)
		const all = page.locator('#all');
		await expect(all.getByRole('heading', { name: 'Tüm platformlar' })).toBeVisible();
		await expect(all.getByRole('heading', { name: 'macOS' })).toBeVisible();
		await expect(all.getByRole('heading', { name: 'Windows' })).toBeVisible();
		await expect(all.getByRole('heading', { name: 'Linux' })).toBeVisible();
		await expect(all.getByRole('heading', { name: 'Android' })).toBeVisible();
		await expect(all.getByRole('heading', { name: 'iOS' })).toBeVisible();

		await expect(page.getByRole('heading', { name: 'Sistem gereksinimleri' })).toBeVisible();
	});

	test('download rows link to real GitHub release assets', async ({ page }) => {
		await page.goto('/download');

		const all = page.locator('#all');
		// every file row points at github.com (a real asset or the releases page)
		const rows = all.locator('.files a');
		const count = await rows.count();
		expect(count).toBeGreaterThanOrEqual(8); // 2 mac + 1 win + 4 linux + 1 apk
		for (let i = 0; i < count; i++) {
			expect(await rows.nth(i).getAttribute('href')).toContain('github.com/PulsarDesk/');
		}

		// Android card links the universal APK (asset url or latest/download fallback)
		const androidRow = all.locator('.os-card', { hasText: 'Android' }).locator('.files a').first();
		expect(await androidRow.getAttribute('href')).toMatch(/pulsar-mobile\/releases\/.*app-universal-release\.apk$/);
	});

	test('iOS card is marked coming-soon without download rows', async ({ page }) => {
		await page.goto('/download');

		const ios = page.locator('#all .os-card', { hasText: 'iOS' });
		await expect(ios.getByText('Yakında')).toBeVisible();
		await expect(ios.locator('.files a')).toHaveCount(0);
	});

	test('detects the current OS in the detected card', async ({ page }) => {
		test.skip(process.platform !== 'linux', 'OS-detection assertion targets Linux runners');
		await page.goto('/download');

		const detected = page.locator('.detected');
		await expect(detected.getByRole('heading', { name: 'Linux' })).toBeVisible();
		await expect(detected.getByText('Linux için indir')).toBeVisible();
		// suggested button links a real asset
		const href = await detected.locator('a.btn').getAttribute('href');
		expect(href).toContain('github.com/PulsarDesk/pulsar-desktop/releases');
	});

	test('Android user-agent gets the APK suggestion', async ({ browser }) => {
		const ctx = await browser.newContext({
			userAgent:
				'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Mobile Safari/537.36',
			locale: 'tr-TR'
		});
		const page = await ctx.newPage();
		await page.goto('/download');

		const detected = page.locator('.detected');
		await expect(detected.getByRole('heading', { name: 'Android' })).toBeVisible();
		await expect(detected.getByText('Android için indir')).toBeVisible();
		expect(await detected.locator('a.btn').getAttribute('href')).toMatch(/app-universal-release\.apk$/);
		await ctx.close();
	});

	test('iOS user-agent gets a disabled coming-soon card', async ({ browser }) => {
		const ctx = await browser.newContext({
			userAgent:
				'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
			locale: 'tr-TR'
		});
		const page = await ctx.newPage();
		await page.goto('/download');

		const detected = page.locator('.detected');
		await expect(detected.getByRole('heading', { name: 'iOS' })).toBeVisible();
		await expect(detected.locator('button.btn')).toBeDisabled();
		await ctx.close();
	});

	test('header İndir button navigates from the landing page', async ({ page }) => {
		await page.goto('/');

		await page.locator('header.site').getByRole('link', { name: 'İndir' }).click();

		await expect(page).toHaveURL(/\/download\/?$/);
		await expect(page.getByRole('heading', { name: 'Pulsar’ı kur, saniyeler içinde bağlan.' })).toBeVisible();
	});
});
