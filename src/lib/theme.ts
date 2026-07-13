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

/** Sync the store with whatever the app.html head script already applied. */
export function initTheme(): void {
	if (!browser) return;
	theme.set(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
}
