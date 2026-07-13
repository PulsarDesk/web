<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from '$lib/ds/Icon.svelte';
	import type { IconName } from '$lib/ds/icons';

	let {
		variant = 'primary',
		icon,
		disabled = false,
		onclick,
		style = '',
		children
	}: {
		variant?: 'primary' | 'ghost' | 'quiet';
		icon?: IconName;
		disabled?: boolean;
		onclick?: () => void;
		style?: string;
		children?: Snippet;
	} = $props();
</script>

<button
	type="button"
	class="btn btn-{variant}"
	{disabled}
	{onclick}
	style="opacity: {disabled ? 0.5 : 1}; {style}"
>
	{#if icon}
		<Icon name={icon} size={17} />
	{/if}
	{@render children?.()}
</button>
