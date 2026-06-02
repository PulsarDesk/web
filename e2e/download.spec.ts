import { test, expect } from '@playwright/test';

test.describe('Download page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/download');
	});

	test('has the right title and hero', async ({ page }) => {
		await expect(page).toHaveTitle('Pulsar — İndir');
		await expect(page.getByRole('heading', { level: 1 })).toContainText('Pulsar’ı kur');
	});

	test('detected-system card renders an icon and a platform name', async ({ page }) => {
		await expect(page.locator('.detected .osico svg')).toBeVisible();
		await expect(page.locator('.detected .meta h3')).not.toBeEmpty();
	});

	test('lists 3 platforms with 9 download files total', async ({ page }) => {
		await expect(page.locator('.os-card')).toHaveCount(3);
		await expect(page.locator('.os-card .files li')).toHaveCount(9);
	});

	test('shows 5 requirements and the cargo build command', async ({ page }) => {
		await expect(page.locator('.req li')).toHaveCount(5);
		await expect(page.locator('.src-term')).toContainText('cargo build --release');
	});

	test('package-manager hints are present', async ({ page }) => {
		await expect(page.locator('.os-card .pm')).toContainText([
			'brew install --cask pulsar',
			'winget install Pulsar',
			'flatpak install pulsar'
		]);
	});

	test('back link returns to the landing page', async ({ page }) => {
		await page.getByRole('link', { name: /Ana sayfa/ }).click();
		await expect(page).toHaveURL((url) => url.pathname === '/');
	});
});
