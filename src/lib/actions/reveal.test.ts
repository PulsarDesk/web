import { describe, it, expect, vi } from 'vitest';
import { reveal } from './reveal';

describe('reveal action', () => {
	it('staggers the transition delay from the index (groups of three)', () => {
		const node = document.createElement('div');
		reveal(node, 4); // 4 % 3 = 1 → 70ms
		expect(node.style.transitionDelay).toBe('70ms');
	});

	it('reveals immediately when IntersectionObserver is unavailable', () => {
		const original = globalThis.IntersectionObserver;
		// @ts-expect-error — simulate an environment without IntersectionObserver
		globalThis.IntersectionObserver = undefined;
		try {
			const node = document.createElement('div');
			node.classList.add('reveal');
			reveal(node);
			expect(node.classList.contains('in')).toBe(true);
		} finally {
			globalThis.IntersectionObserver = original;
		}
	});

	it('adds `in` on intersection, unobserves, and disconnects on destroy', () => {
		const observe = vi.fn();
		const unobserve = vi.fn();
		const disconnect = vi.fn();
		let captured: IntersectionObserverCallback = () => {};

		class MockIO {
			constructor(cb: IntersectionObserverCallback) {
				captured = cb;
			}
			observe = observe;
			unobserve = unobserve;
			disconnect = disconnect;
		}

		const original = globalThis.IntersectionObserver;
		// @ts-expect-error — inject a controllable IntersectionObserver
		globalThis.IntersectionObserver = MockIO;
		try {
			const node = document.createElement('div');
			const handle = reveal(node, 0) as { destroy: () => void };
			expect(observe).toHaveBeenCalledWith(node);

			captured(
				[{ isIntersecting: true, target: node } as unknown as IntersectionObserverEntry],
				{ unobserve } as unknown as IntersectionObserver
			);
			expect(node.classList.contains('in')).toBe(true);
			expect(unobserve).toHaveBeenCalledWith(node);

			handle.destroy();
			expect(disconnect).toHaveBeenCalledTimes(1);
		} finally {
			globalThis.IntersectionObserver = original;
		}
	});
});
