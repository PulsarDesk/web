import { get } from 'svelte/store';
import { afterEach, describe, expect, it } from 'vitest';
import { DICTS, DL_BTN, DL_TITLE, DOC_TITLE, DS_LMAP, LANGS, lang, setLang, t } from '$lib/i18n';
import type { Lang } from '$lib/i18n';

const ALL_LANGS: Lang[] = ['tr', 'en', 'kk', 'ru'];

afterEach(() => {
	// The lang store is a module singleton — reset so tests stay independent.
	lang.set('tr');
});

describe('translation dictionaries', () => {
	it('DICTS and LANGS cover exactly the four supported languages', () => {
		expect(Object.keys(DICTS).sort()).toEqual([...ALL_LANGS].sort());
		expect(LANGS.map((l) => l.code).sort()).toEqual([...ALL_LANGS].sort());
	});

	it.each(Object.keys(DICTS) as Lang[])('%s has the exact same key set as TR', (code) => {
		expect(Object.keys(DICTS[code]).sort()).toEqual(Object.keys(DICTS.tr).sort());
	});

	it.each(Object.keys(DICTS) as Lang[])('%s has no empty values', (code) => {
		for (const [key, value] of Object.entries(DICTS[code])) {
			expect(value, `${code}:${key}`).toBeTruthy();
		}
	});
});

describe('t translator store', () => {
	it('translates keys in the active language', () => {
		lang.set('en');
		expect(get(t)('hero.title')).toBe('Play, connect, control.');
		lang.set('tr');
		expect(get(t)('hero.title')).toBe('Oyna, bağlan, yönet.');
	});

	it('falls back to TR when a key is missing in the active language', () => {
		const KEY = '__test.tr-only__';
		DICTS.tr[KEY] = 'sadece Türkçe';
		try {
			lang.set('en');
			expect(get(t)(KEY)).toBe('sadece Türkçe');
		} finally {
			delete DICTS.tr[KEY];
		}
	});

	it('returns the key itself when it is unknown everywhere', () => {
		lang.set('en');
		expect(get(t)('no.such.key')).toBe('no.such.key');
	});

	it('setLang drives the lang store (and therefore t)', () => {
		setLang('kk');
		expect(get(lang)).toBe('kk');
		expect(get(t)('nav.download')).toBe('Жүктеп алу');
	});
});

describe('per-language constants', () => {
	it.each(ALL_LANGS)('DOC_TITLE / DL_TITLE / DS_LMAP / DL_BTN cover %s', (code) => {
		expect(DOC_TITLE[code]).toBeTruthy();
		expect(DL_TITLE[code]).toBeTruthy();
		expect(DS_LMAP[code].title).toBeTruthy();
		expect(DS_LMAP[code].gameName).toBeTruthy();
		expect(DS_LMAP[code].remoteName).toBeTruthy();
		expect(typeof DL_BTN[code]).toBe('function');
	});

	it('DL_BTN builds the per-OS download label', () => {
		expect(DL_BTN.tr('macOS')).toBe('macOS için indir');
		expect(DL_BTN.en('macOS')).toBe('Download for macOS');
		expect(DL_BTN.kk('macOS')).toBe('macOS үшін жүктеп алу');
		expect(DL_BTN.ru('macOS')).toBe('Скачать для macOS');
	});
});
