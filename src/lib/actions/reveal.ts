import type { Action } from 'svelte/action';

/**
 * Reveal-on-scroll action.
 *
 * Elements carry the `reveal` class in markup (so the prerendered HTML is
 * already in its hidden start-state and there's no hydration flash). This
 * action observes the element and adds `in` when it scrolls into view, then
 * stops observing. The optional `index` staggers the transition like the
 * original design (groups of three, 70ms apart).
 *
 * No-JS users still see everything: app.html ships a <noscript> rule that
 * forces `.reveal` visible.
 */
export const reveal: Action<HTMLElement, number | undefined> = (node, index = 0) => {
	node.style.transitionDelay = `${(index % 3) * 70}ms`;

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('in');
		return;
	}

	const io = new IntersectionObserver(
		(entries, obs) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('in');
					obs.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12 }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
};
