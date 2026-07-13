import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { DICTS, type Lang } from './translations';
import { isLang } from './negotiate';

export { LANGS, DICTS, DOC_TITLE, DL_TITLE, DS_LMAP, DL_BTN, type Lang } from './translations';
export { isLang, pickLang, SUPPORTED } from './negotiate';

const COOKIE = 'pulsar-lang';

/** Current UI language. The server negotiates the initial value per request
 *  (pulsar-lang cookie, else Accept-Language, else EN) and +layout.svelte
 *  seeds this store from it — TR stays the source dictionary (missing keys
 *  anywhere fall back to TR). */
export const lang = writable<Lang>('en');

/**
 * Translator store: `$t('hero.title')`. Missing keys fall back to TR, then to
 * the key itself. Some values carry inline HTML — render those with {@html}.
 */
export const t = derived(lang, (l) => (key: string): string => DICTS[l][key] ?? DICTS.tr[key] ?? key);

/** Switch language: update the store, <html lang> and the cookie the server
 *  reads on the next request (explicit choice beats Accept-Language). */
export function setLang(l: Lang): void {
	if (!isLang(l)) return;
	lang.set(l);
	if (browser) {
		document.documentElement.lang = l;
		document.cookie = `${COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
	}
}
