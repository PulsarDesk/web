<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, sub, right }: { title: string; sub?: string; right?: Snippet } = $props();
</script>

<div
	style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 28px;"
>
	<div>
		<h1 style="font-size: 27px; letter-spacing: -0.03em;">{title}</h1>
		{#if sub}
			<p style="color: var(--text-muted); font-size: 14.5px; margin-top: 7px;">{sub}</p>
		{/if}
	</div>
	{@render right?.()}
</div>
