import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import PulsarMark from './PulsarMark.svelte';

describe('PulsarMark', () => {
	it('renders an svg with the pulsar-mark class and four concentric circles', () => {
		const { container } = render(PulsarMark);
		const svg = container.querySelector('svg.pulsar-mark');
		expect(svg).toBeInTheDocument();
		expect(svg?.querySelectorAll('circle')).toHaveLength(4);
	});

	it('defaults to size 30 and the accent color', () => {
		const { container } = render(PulsarMark);
		const svg = container.querySelector('svg')!;
		expect(svg.getAttribute('width')).toBe('30');
		expect(svg.getAttribute('height')).toBe('30');
		expect(svg.querySelector('circle')!.getAttribute('stroke')).toBe('var(--accent)');
	});

	it('accepts a custom size', () => {
		const { container } = render(PulsarMark, { props: { size: 52 } });
		const svg = container.querySelector('svg')!;
		expect(svg.getAttribute('width')).toBe('52');
		expect(svg.getAttribute('height')).toBe('52');
	});

	it('renders white for the light variant (dark backgrounds)', () => {
		const { container } = render(PulsarMark, { props: { variant: 'light' } });
		const filledDot = container.querySelectorAll('circle')[3];
		expect(filledDot.getAttribute('fill')).toBe('#fff');
	});

	it('is decorative (presentation) when no title is given', () => {
		const { container } = render(PulsarMark);
		const svg = container.querySelector('svg')!;
		expect(svg.getAttribute('role')).toBe('presentation');
		expect(svg.getAttribute('aria-hidden')).toBe('true');
	});

	it('is an accessible image when a title is given', () => {
		const { container } = render(PulsarMark, { props: { title: 'Pulsar' } });
		const svg = container.querySelector('svg')!;
		expect(svg.getAttribute('role')).toBe('img');
		expect(svg.getAttribute('aria-label')).toBe('Pulsar');
		expect(svg.getAttribute('aria-hidden')).toBeNull();
	});
});
