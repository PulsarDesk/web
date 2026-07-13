<script lang="ts">
	import { ICON_PATHS, type IconName } from '$lib/ds/icons';

	let {
		name,
		size = 20,
		stroke = 2,
		style = ''
	}: { name: IconName; size?: number; stroke?: number; style?: string } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	{style}
>
	<!-- Safe: ICON_PATHS is a static, trusted constant (no user input). -->
	{@html ICON_PATHS[name]}
</svg>
