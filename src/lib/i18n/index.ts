import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { DICTS, type Lang } from './translations';

export { LANGS, DICTS, DOC_TITLE, DL_TITLE, DS_LMAP, DL_BTN, type Lang } from './translations';

const STORAGE_KEY = 'pulsar-lang';

function isLang(v: unknown): v is Lang {
	return v === 'tr' || v === 'en' || v === 'kk' || v === 'ru';
}

/** Current UI language. TR is the source language and the SSR/prerender default. */
export const lang = writable<Lang>('tr');

/**
 * Translator store: `$t('hero.title')`. Missing keys fall back to TR, then to
 * the key itself. Some values carry inline HTML — render those with {@html}.
 */
export const t = derived(lang, (l) => (key: string): string => DICTS[l][key] ?? DICTS.tr[key] ?? key);

/** Switch language, persist it and reflect it on <html lang>. */
export function setLang(l: Lang): void {
	lang.set(l);
	if (browser) {
		document.documentElement.lang = l;
		try {
			localStorage.setItem(STORAGE_KEY, l);
		} catch {
			/* storage unavailable */
		}
	}
}

/** Restore the persisted language on first client render. */
export function initLang(): void {
	if (!browser) return;
	let saved: string | null = null;
	try {
		saved = localStorage.getItem(STORAGE_KEY);
	} catch {
		/* storage unavailable */
	}
	if (isLang(saved) && saved !== 'tr') setLang(saved);
	else document.documentElement.lang = 'tr';
}
