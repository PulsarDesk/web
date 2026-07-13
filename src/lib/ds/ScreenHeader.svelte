<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, sub, right }: { title: string; sub?: string; right?: Snippet } = $props();
</script>

<!-- layout lives in the global .screen-head rule so small embeds can stack
     title and controls with a media query (inline style would win over CSS) -->
<div class="screen-head">
	<div>
		<h1 style="font-size: 27px; letter-spacing: -0.03em;">{title}</h1>
		{#if sub}
			<p style="color: var(--text-muted); font-size: 14.5px; margin-top: 7px;">{sub}</p>
		{/if}
	</div>
	{@render right?.()}
</div>
