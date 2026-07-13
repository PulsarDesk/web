import type { RequestHandler } from './$types';
import { SITE_URL } from '$lib/site/seo';

const PATHS = ['/', '/download'];

export const GET: RequestHandler = () => {
	const urls = PATHS.map(
		(p) => `\t<url>\n\t\t<loc>${SITE_URL}${p === '/' ? '' : p}</loc>\n\t</url>`
	).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
