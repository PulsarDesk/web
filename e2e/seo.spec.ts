import { expect, test } from '@playwright/test';

test.describe('seo', () => {
	test('landing serves full link-preview metadata server-side', async ({ request }) => {
		// fetch like a link-preview bot: no JS, no cookies
		const html = await (await request.get('/')).text();
		expect(html).toContain('<meta property="og:title"');
		expect(html).toContain('<meta property="og:image" content="https://pulsardesk.com/og.png"');
		expect(html).toContain('<meta name="twitter:card" content="summary_large_image"');
		expect(html).toContain('<meta name="description"');
		expect(html).toContain('<link rel="canonical" href="https://pulsardesk.com"');
	});

	test('download page carries its own canonical/og:url', async ({ request }) => {
		const html = await (await request.get('/download')).text();
		expect(html).toContain('<meta property="og:url" content="https://pulsardesk.com/download"');
	});

	test('sitemap.xml and robots.txt are served', async ({ request }) => {
		const sitemap = await request.get('/sitemap.xml');
		expect(sitemap.status()).toBe(200);
		expect(await sitemap.text()).toContain('<loc>https://pulsardesk.com/download</loc>');

		const robots = await request.get('/robots.txt');
		expect(robots.status()).toBe(200);
		expect(await robots.text()).toContain('Sitemap: https://pulsardesk.com/sitemap.xml');
	});

	test('og image exists as a 1200x630 png', async ({ request }) => {
		const res = await request.get('/og.png');
		expect(res.status()).toBe(200);
		expect(res.headers()['content-type']).toContain('image/png');
	});
});
