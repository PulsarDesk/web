import { expect, test } from '@playwright/test';

test.describe('landing page', () => {
	test('renders the Turkish landing content', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('heading', { name: 'Oyna, bağlan, yönet.' })).toBeVisible();
		await expect(page.locator('header.site nav')).toBeVisible();

		// Hero DS embed — HomeScreen inside the AppShell window.
		await expect(page.getByText('Tek seferlik şifre', { exact: true }).first()).toBeVisible();

		// Stats strip, features, CTA, footer.
		await expect(page.getByText('Yerel ağda ek gecikme')).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Profesyonel araçlardan ödün yok.' })).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Bugün bağlanmaya başla.' })).toBeVisible();
		await expect(page.getByText('© 2026 Pulsar.')).toBeVisible();
	});

	test('language switch to English persists across reloads', async ({ page }) => {
		await page.goto('/');

		await page.locator('.lang-btn').click();
		await page.getByText('English').click();

		await expect(page.getByRole('heading', { name: 'Play, connect, control.' })).toBeVisible();
		await expect(page.locator('html')).toHaveAttribute('lang', 'en');

		// localStorage persistence
		await page.reload();
		await expect(page.getByRole('heading', { name: 'Play, connect, control.' })).toBeVisible();
		await expect(page.locator('html')).toHaveAttribute('lang', 'en');
	});

	test('theme toggle switches to dark and persists across reloads', async ({ page }) => {
		await page.goto('/');

		await page.locator('.theme-tgl').click();
		await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

		await page.reload();
		await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
	});
});
