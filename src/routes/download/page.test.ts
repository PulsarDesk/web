import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('Download page', () => {
	it('renders the detected-system card', () => {
		const { container } = render(Page);
		expect(container.querySelector('.detected')).toBeInTheDocument();
		expect(screen.getByText('Algılanan sistem')).toBeInTheDocument();
		// A platform name is always shown (SSR default macOS, refined on mount).
		expect(container.querySelector('.detected .meta h3')!.textContent!.length).toBeGreaterThan(0);
	});

	it('lists all three platforms with three download files each', () => {
		const { container } = render(Page);
		expect(container.querySelectorAll('.os-card')).toHaveLength(3);
		expect(container.querySelectorAll('.os-card .files li')).toHaveLength(9);
	});

	it('renders five system requirements', () => {
		const { container } = render(Page);
		expect(container.querySelectorAll('.req li')).toHaveLength(5);
	});

	it('shows the build-from-source command and GPLv3', () => {
		const { container } = render(Page);
		expect(container.textContent).toContain('cargo build');
		expect(container.textContent).toContain('GPLv3');
	});

	it('lists package-manager one-liners', () => {
		const { container } = render(Page);
		const text = container.textContent ?? '';
		expect(text).toContain('brew install --cask pulsar');
		expect(text).toContain('winget install Pulsar');
		expect(text).toContain('flatpak install pulsar');
	});
});
