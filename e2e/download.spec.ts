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

		await expect(page.getByRole('heading', { name: 'Sistem gereksinimleri' })).toBeVisible();
	});

	test('detects the current OS in the detected card', async ({ page }) => {
		test.skip(process.platform !== 'linux', 'OS-detection assertion targets Linux runners');
		await page.goto('/download');

		const detected = page.locator('.detected');
		await expect(detected.getByRole('heading', { name: 'Linux' })).toBeVisible();
		await expect(detected.getByText('Linux için indir')).toBeVisible();
	});

	test('header İndir button navigates from the landing page', async ({ page }) => {
		await page.goto('/');

		await page.locator('header.site').getByRole('link', { name: 'İndir' }).click();

		await expect(page).toHaveURL(/\/download\/?$/);
		await expect(page.getByRole('heading', { name: 'Pulsar’ı kur, saniyeler içinde bağlan.' })).toBeVisible();
	});
});
