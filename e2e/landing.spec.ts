import { test, expect } from '@playwright/test';

test.describe('Landing page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('has the right title, hero headline and badge', async ({ page }) => {
		await expect(page).toHaveTitle(/Pulsar/);
		await expect(page.getByRole('heading', { level: 1 })).toContainText('Uzaktaki makinen');
		await expect(page.locator('.badge-pill')).toContainText('Açık kaynak');
	});

	test('hero device card shows the device ID', async ({ page }) => {
		await expect(page.locator('.bigid')).toHaveText('482 913 056');
	});

	test('renders 4 stats, 2 use-cases, 6 features and 3 steps', async ({ page }) => {
		await expect(page.locator('.stat')).toHaveCount(4);
		await expect(page.locator('.use-card')).toHaveCount(2);
		await expect(page.locator('.feat')).toHaveCount(6);
		await expect(page.locator('.step')).toHaveCount(3);
	});

	test('primary CTA navigates to the download page', async ({ page }) => {
		await page.getByRole('link', { name: 'Ücretsiz indir' }).click();
		await expect(page).toHaveURL(/\/download$/);
		await expect(page.getByRole('heading', { level: 1 })).toContainText('Pulsar’ı kur');
	});

	test('header navbar İndir button goes to the download page', async ({ page }) => {
		await page.locator('header').getByRole('link', { name: 'İndir' }).click();
		await expect(page).toHaveURL(/\/download$/);
	});

	test('header gains a border (scrolled class) after scrolling', async ({ page }) => {
		const header = page.locator('header.site');
		await expect(header).not.toHaveClass(/scrolled/);
		await page.mouse.wheel(0, 500);
		await expect(header).toHaveClass(/scrolled/);
	});

	test('reveal-on-scroll makes the features heading visible', async ({ page }) => {
		const heading = page.locator('#features .s-head-center');
		await heading.scrollIntoViewIfNeeded();
		await expect(heading).toHaveClass(/\bin\b/);
	});

	test('security terminal shows the P2P-first flow; GPLv3 present, MIT absent', async ({ page }) => {
		await expect(page.locator('.sec-visual .term')).toContainText('trying direct P2P');
		await expect(page.locator('body')).toContainText('GPLv3');
		await expect(page.locator('body')).not.toContainText('MIT');
	});

	test('in-page nav anchors scroll to their sections', async ({ page }) => {
		await page.locator('header').getByRole('link', { name: 'Güvenlik' }).click();
		await expect(page).toHaveURL(/#security$/);
		await expect(page.locator('#security')).toBeInViewport();
	});
});
