import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';
import { lang } from '$lib/i18n';
import SiteHeader from './SiteHeader.svelte';

beforeEach(() => {
	// The lang store is a module singleton — start every test from TR.
	lang.set('tr');
});

describe('SiteHeader', () => {
	it('renders the brand and the TR language button', () => {
		render(SiteHeader);
		expect(screen.getByText('Pulsar')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Dil / Language' })).toHaveTextContent('TR');
	});

	it('opens the language menu with all four options', async () => {
		render(SiteHeader);
		await fireEvent.click(screen.getByRole('button', { name: 'Dil / Language' }));
		for (const label of ['Türkçe', 'English', 'Қазақша', 'Русский']) {
			expect(screen.getByText(label)).toBeInTheDocument();
		}
	});

	it('switches to English and localizes the nav', async () => {
		render(SiteHeader);
		await fireEvent.click(screen.getByRole('button', { name: 'Dil / Language' }));
		await fireEvent.click(screen.getByText('English'));
		expect(get(lang)).toBe('en');
		expect(screen.getByText('Download')).toBeInTheDocument();
		expect(screen.getByText('Remote desktop')).toBeInTheDocument();
	});
});
