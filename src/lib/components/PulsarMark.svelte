<script lang="ts">
	type Props = {
		size?: number;
		/** 'accent' = indigo brand color; 'light' = white, for dark backgrounds. */
		variant?: 'accent' | 'light';
		/** Accessible label. When set the mark is exposed as an image; otherwise it's decorative. */
		title?: string;
	};

	let { size = 30, variant = 'accent', title }: Props = $props();

	const color = $derived(variant === 'light' ? '#fff' : 'var(--accent)');
	const o1 = $derived(variant === 'light' ? 0.22 : 0.18);
	const o2 = $derived(variant === 'light' ? 0.5 : 0.42);
</script>

<svg
	class="pulsar-mark"
	width={size}
	height={size}
	viewBox="0 0 52 52"
	fill="none"
	role={title ? 'img' : 'presentation'}
	aria-label={title}
	aria-hidden={title ? undefined : 'true'}
>
	<circle cx="26" cy="26" r="24" stroke={color} stroke-width="1.5" opacity={o1} />
	<circle cx="26" cy="26" r="16" stroke={color} stroke-width="1.75" opacity={o2} />
	<circle cx="26" cy="26" r="8.5" stroke={color} stroke-width="2" />
	<circle cx="26" cy="26" r="3.5" fill={color} />
</svg>
