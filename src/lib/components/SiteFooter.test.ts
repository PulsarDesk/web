import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import SiteFooter from './SiteFooter.svelte';
import { site } from '$lib/config';

describe('SiteFooter', () => {
	it('full variant renders the four columns and the license line', () => {
		const { container } = render(SiteFooter, { props: { variant: 'full' } });
		expect(container.querySelector('.foot-grid')).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Ürün' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Kaynak' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'Topluluk' })).toBeInTheDocument();
		expect(screen.getByText(`${site.license} · v${site.version}`)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'GitHub' }).getAttribute('href')).toBe(
			site.links.github
		);
	});

	it('minimal variant renders a single compact line', () => {
		const { container } = render(SiteFooter, { props: { variant: 'minimal' } });
		expect(container.querySelector('.foot-grid')).toBeNull();
		expect(container.querySelector('footer.minimal')).toBeInTheDocument();
		expect(container.textContent).toContain(`${site.license} · v${site.version}`);
	});
});
