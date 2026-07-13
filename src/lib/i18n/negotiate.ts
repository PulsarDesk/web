/* Server-safe language negotiation (no browser imports — used by hooks.server). */

import type { Lang } from './translations';

export const SUPPORTED: readonly Lang[] = ['tr', 'en', 'kk', 'ru'];

export function isLang(v: unknown): v is Lang {
	return (SUPPORTED as readonly string[]).includes(v as string);
}

/** Saved cookie wins; otherwise the first supported Accept-Language entry; EN default. */
export function pickLang(cookieValue: string | undefined, acceptLanguage: string | null): Lang {
	if (isLang(cookieValue)) return cookieValue;
	if (acceptLanguage) {
		for (const part of acceptLanguage.split(',')) {
			const base = part.split(';')[0].trim().toLowerCase().split('-')[0];
			if (isLang(base)) return base;
		}
	}
	return 'en';
}
