import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'pulsar-theme';

/** Current theme. The blocking script in app.html applies the persisted value
 *  before first paint; this store mirrors it after hydration. */
export const theme = writable<Theme>('light');

export function applyTheme(t: Theme): void {
	theme.set(t);
	if (!browser) return;
	if (t === 'dark') document.documentElement.dataset.theme = 'dark';
	else delete document.documentElement.dataset.theme;
	try {
		localStorage.setItem(STORAGE_KEY, t);
	} catch {
		/* storage unavailable */
	}
}

export function toggleTheme(): void {
	if (!browser) return;
	applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
}

function savedTheme(): Theme | null {
	try {
		const v = localStorage.getItem(STORAGE_KEY);
		return v === 'dark' || v === 'light' ? v : null;
	} catch {
		return null;
	}
}

/** Reflect a theme on the DOM + store without persisting it (system-follow). */
function reflect(t: Theme): void {
	theme.set(t);
	if (t === 'dark') document.documentElement.dataset.theme = 'dark';
	else delete document.documentElement.dataset.theme;
}

/** Sync the store with whatever the app.html head script already applied
 *  (saved choice, else prefers-color-scheme), and — while the user has not
 *  made an explicit choice — keep following live system scheme changes. */
export function initTheme(): void {
	if (!browser) return;
	theme.set(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
	if (savedTheme() === null && typeof matchMedia === 'function') {
		matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (savedTheme() === null) reflect(e.matches ? 'dark' : 'light');
		});
	}
}
