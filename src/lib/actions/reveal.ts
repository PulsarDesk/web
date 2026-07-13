import type { Action } from 'svelte/action';

/* Scroll-reveal, ported from the design page script:
   elements start hidden (.reveal in the markup), get a 0/60/120ms stagger by
   DOM registration order and fade in once 12% visible. */

let io: IntersectionObserver | undefined;
let counter = 0;
let live = 0;

function observer(): IntersectionObserver {
	io ??= new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					e.target.classList.add('in');
					io?.unobserve(e.target);
				}
			}
		},
		{ threshold: 0.12 }
	);
	return io;
}

export const reveal: Action<HTMLElement> = (node) => {
	node.style.transitionDelay = `${(counter++ % 3) * 60}ms`;
	live++;
	observer().observe(node);
	return {
		destroy() {
			io?.unobserve(node);
			// last reveal of the page unmounted → restart the stagger cycle,
			// so client-side navigation gets the same 0/60/120ms phase as a
			// fresh page load in the reference
			if (--live === 0) counter = 0;
		}
	};
};
