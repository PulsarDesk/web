import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import SiteHeader from './SiteHeader.svelte';
import { site } from '$lib/config';

describe('SiteHeader — home variant', () => {
	it('brand links to #top and shows GitHub + İndir', () => {
		const { container } = render(SiteHeader, { props: { variant: 'home' } });
		expect(container.querySelector('a.brand')!.getAttribute('href')).toBe('#top');
		expect(screen.getByRole('link', { name: 'İndir' }).getAttribute('href')).toBe('/download');
		expect(screen.getByRole('link', { name: /GitHub/ }).getAttribute('href')).toBe(
			site.links.github
		);
	});

	it('section anchors stay on the same page and include Güvenlik', () => {
		render(SiteHeader, { props: { variant: 'home' } });
		expect(screen.getByRole('link', { name: 'Gaming' }).getAttribute('href')).toBe('#gaming');
		expect(screen.getByRole('link', { name: 'Uzaktan masaüstü' }).getAttribute('href')).toBe(
			'#remote'
		);
		expect(screen.getByRole('link', { name: 'Güvenlik' })).toBeInTheDocument();
	});
});

describe('SiteHeader — download variant', () => {
	it('brand links home and shows a back link', () => {
		const { container } = render(SiteHeader, { props: { variant: 'download' } });
		expect(container.querySelector('a.brand')!.getAttribute('href')).toBe('/');
		expect(screen.getByRole('link', { name: /Ana sayfa/ }).getAttribute('href')).toBe('/');
		// always-bordered on the download page
		expect(container.querySelector('header.site')!.className).toContain('scrolled');
	});

	it('section anchors point back to the landing page and drop Güvenlik', () => {
		render(SiteHeader, { props: { variant: 'download' } });
		expect(screen.getByRole('link', { name: 'Gaming' }).getAttribute('href')).toBe('/#gaming');
		expect(screen.queryByRole('link', { name: 'Güvenlik' })).toBeNull();
	});
});
