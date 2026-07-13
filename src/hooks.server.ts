import type { Handle } from '@sveltejs/kit';
import { pickLang } from '$lib/i18n/negotiate';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.lang = pickLang(
		event.cookies.get('pulsar-lang'),
		event.request.headers.get('accept-language')
	);
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.lang)
	});
};
