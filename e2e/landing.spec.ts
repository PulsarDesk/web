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

test.describe('browser auto-detection (no saved preference)', () => {
	test.describe('english browser', () => {
		test.use({ locale: 'en-US' });

		test('lands in English automatically', async ({ page }) => {
			await page.goto('/');
			await expect(page.getByRole('heading', { name: 'Play, connect, control.' })).toBeVisible();
			await expect(page.locator('html')).toHaveAttribute('lang', 'en');
		});
	});

	test.describe('russian browser', () => {
		test.use({ locale: 'ru-RU' });

		test('lands in Russian automatically', async ({ page }) => {
			await page.goto('/');
			await expect(page.getByRole('heading', { name: 'Играй, подключайся, управляй.' })).toBeVisible();
			await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
		});
	});

	test.describe('unsupported browser language', () => {
		test.use({ locale: 'de-DE' });

		test('falls back to English', async ({ page }) => {
			await page.goto('/');
			await expect(page.getByRole('heading', { name: 'Play, connect, control.' })).toBeVisible();
			await expect(page.locator('html')).toHaveAttribute('lang', 'en');
		});
	});

	test.describe('explicit choice beats detection', () => {
		test.use({ locale: 'en-US' });

		test('picking Türkçe persists over the English browser', async ({ page }) => {
			await page.goto('/');
			await page.locator('.lang-btn').click();
			await page.getByText('Türkçe').click();
			await expect(page.getByRole('heading', { name: 'Oyna, bağlan, yönet.' })).toBeVisible();

			await page.reload();
			await expect(page.getByRole('heading', { name: 'Oyna, bağlan, yönet.' })).toBeVisible();
			await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
		});
	});

	test.describe('dark system scheme', () => {
		test.use({ colorScheme: 'dark' });

		test('starts dark without a flash; manual light choice wins afterwards', async ({ page }) => {
			await page.goto('/');
			await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

			// explicit light choice must beat the dark system scheme on reload
			await page.locator('.theme-tgl').click();
			await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dark');
			await page.reload();
			await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dark');
		});
	});
});
