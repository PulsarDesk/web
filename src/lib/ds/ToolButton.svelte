<script lang="ts">
	import Icon from '$lib/ds/Icon.svelte';
	import type { IconName } from '$lib/ds/icons';

	/* A vertical icon+label button used inside the dark floating session toolbar.
	   Stacks a glyph over a tiny caption; `active` lifts it onto a translucent
	   surface and `danger` tints it red. */

	let {
		icon,
		label,
		onclick,
		active = false,
		danger = false
	}: {
		icon: IconName;
		label: string;
		onclick?: () => void;
		active?: boolean;
		danger?: boolean;
	} = $props();
</script>

<button
	type="button"
	{onclick}
	title={label}
	style="display: flex; flex-direction: column; align-items: center; gap: 3px; border: none; background: {active
		? 'oklch(1 0 0 / 0.16)'
		: 'transparent'}; cursor: pointer; border-radius: 9px; padding: 7px 10px; color: {danger
		? 'oklch(0.8 0.13 25)'
		: 'oklch(0.95 0.01 260)'}; transition: background var(--dur); min-width: 52px;"
>
	<Icon name={icon} size={18} />
	<span style="font-size: 10px; font-weight: 600;">{label}</span>
</button>
