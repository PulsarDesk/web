import { test, expect } from '@playwright/test';

test('footer "İndir" link navigates to the download page', async ({ page }) => {
	await page.goto('/');
	const footer = page.locator('footer.site');
	await expect(footer.getByRole('heading', { name: 'Ürün' })).toBeVisible();
	await footer.getByRole('link', { name: 'İndir' }).click();
	await expect(page).toHaveURL(/\/download$/);
});

test('brand logo on the download page returns home', async ({ page }) => {
	await page.goto('/download');
	await page.locator('header a.brand').click();
	await expect(page).toHaveURL((url) => url.pathname === '/');
});

test('pages load without console errors', async ({ page }) => {
	const errors: string[] = [];
	page.on('console', (msg) => {
		if (msg.type() === 'error') errors.push(msg.text());
	});
	page.on('pageerror', (err) => errors.push(err.message));

	await page.goto('/');
	await page.goto('/download');
	expect(errors).toEqual([]);
});
