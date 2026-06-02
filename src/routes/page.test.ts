import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('Landing page', () => {
	it('renders the hero headline and the positioning copy', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Uzaktaki makinen');
		expect(screen.getByText(/Parsec, TeamViewer ve RustDesk/)).toBeInTheDocument();
	});

	it('shows the device ID inside the hero device card', () => {
		const { container } = render(Page);
		expect(container.querySelector('.bigid')!.textContent).toBe('482 913 056');
	});

	it('renders 4 stats, 2 use-cases, 6 feature cards and 3 steps', () => {
		const { container } = render(Page);
		expect(container.querySelectorAll('.stat')).toHaveLength(4);
		expect(container.querySelectorAll('.use-card')).toHaveLength(2);
		expect(container.querySelectorAll('.feat')).toHaveLength(6);
		expect(container.querySelectorAll('.step')).toHaveLength(3);
	});

	it('hero CTA links to the download page', () => {
		render(Page);
		expect(screen.getByRole('link', { name: 'Ücretsiz indir' }).getAttribute('href')).toBe(
			'/download'
		);
	});

	it('describes the P2P→relay architecture', () => {
		const { container } = render(Page);
		expect(container.textContent).toContain('Önce P2P, sonra relay');
		expect(container.querySelector('.sec-visual .term')!.textContent).toContain('trying direct P2P');
	});

	it('is GPLv3 licensed and never mentions MIT', () => {
		const { container } = render(Page);
		expect(container.textContent).toContain('GPLv3');
		expect(container.textContent).not.toContain('MIT');
	});

	it('reveal targets become visible (no IntersectionObserver in jsdom → immediate)', () => {
		const { container } = render(Page);
		expect(container.querySelector('.s-head-center.in')).toBeInTheDocument();
	});
});
