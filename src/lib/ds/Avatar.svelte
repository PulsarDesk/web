<script lang="ts">
	import type { AvatarTone } from '$lib/ds/data';

	let {
		name,
		tone = 'accent',
		size = 38
	}: { name: string; tone?: AvatarTone; size?: number } = $props();

	const BG: Record<AvatarTone, string> = {
		accent: 'var(--accent-soft)',
		cyan: 'var(--cyan-soft)',
		ok: 'var(--ok-soft)',
		warn: 'var(--warn-soft)'
	};
	const FG: Record<AvatarTone, string> = {
		accent: 'var(--accent)',
		cyan: 'var(--cyan)',
		ok: 'var(--ok)',
		warn: 'oklch(0.5 0.13 70)'
	};

	const initials = $derived(
		name
			.split(' ')
			.map((w) => w[0])
			.slice(0, 2)
			.join('')
			.toUpperCase()
	);
</script>

<div
	style="width: {size}px; height: {size}px; border-radius: {size > 30
		? 11
		: 8}px; background: {BG[tone]}; color: {FG[
		tone
	]}; display: grid; place-items: center; font-weight: 700; font-size: {size *
		0.36}px; flex: none; font-family: var(--font-display);"
>
	{initials}
</div>
