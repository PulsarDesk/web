<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		pad = 24,
		style = '',
		children
	}: { pad?: number; style?: string; children?: Snippet } = $props();
</script>

<div
	style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--shadow-sm); padding: {pad}px; {style}"
>
	{@render children?.()}
</div>
