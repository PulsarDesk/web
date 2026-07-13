import { get } from 'svelte/store';
import { beforeEach, describe, expect, it, vi } from 'vitest';

/* Toggle the mocked $app/environment browser flag per describe block. The
   getter is read at call time inside applyTheme/toggleTheme/initTheme, so a
   single import of $lib/theme can be exercised in both modes. */
const env = vi.hoisted(() => ({ browser: false }));

vi.mock('$app/environment', () => ({
	get browser() {
		return env.browser;
	}
}));

import { applyTheme, initTheme, theme, toggleTheme } from '$lib/theme';

const STORAGE_KEY = 'pulsar-theme';

function resetDom(): void {
	theme.set('light');
	delete document.documentElement.dataset.theme;
	localStorage.clear();
}

describe('without a browser (SSR guard)', () => {
	beforeEach(() => {
		env.browser = false;
		resetDom();
	});

	it('applyTheme still sets the store value', () => {
		applyTheme('dark');
		expect(get(theme)).toBe('dark');
	});

	it('applyTheme touches neither the DOM nor localStorage', () => {
		applyTheme('dark');
		expect(document.documentElement.dataset.theme).toBeUndefined();
		expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
	});

	it('toggleTheme is a no-op', () => {
		toggleTheme();
		expect(get(theme)).toBe('light');
	});

	it('initTheme is a no-op', () => {
		document.documentElement.dataset.theme = 'dark';
		initTheme();
		expect(get(theme)).toBe('light');
	});
});

describe('in the browser', () => {
	beforeEach(() => {
		env.browser = true;
		resetDom();
	});

	it('applyTheme("dark") reflects on <html> and persists', () => {
		applyTheme('dark');
		expect(get(theme)).toBe('dark');
		expect(document.documentElement.dataset.theme).toBe('dark');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
	});

	it('applyTheme("light") removes the attribute and persists', () => {
		applyTheme('dark');
		applyTheme('light');
		expect(get(theme)).toBe('light');
		expect(document.documentElement.dataset.theme).toBeUndefined();
		expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
	});

	it('toggleTheme flips light -> dark -> light', () => {
		toggleTheme();
		expect(get(theme)).toBe('dark');
		expect(document.documentElement.dataset.theme).toBe('dark');
		toggleTheme();
		expect(get(theme)).toBe('light');
		expect(document.documentElement.dataset.theme).toBeUndefined();
	});

	it('initTheme syncs the store with whatever the head script applied', () => {
		document.documentElement.dataset.theme = 'dark';
		initTheme();
		expect(get(theme)).toBe('dark');
		delete document.documentElement.dataset.theme;
		initTheme();
		expect(get(theme)).toBe('light');
	});
});
