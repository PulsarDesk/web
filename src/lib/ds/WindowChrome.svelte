<script lang="ts">
	/** Mac-style traffic-light dot colors (close / minimize / zoom). */
	const DOTS = ['#ED6A5E', '#F4BF4F', '#61C554'];

	let { title }: { title: string } = $props();
</script>

<div
	style="height: 44px; flex: none; display: flex; align-items: center; padding: 0 14px; border-bottom: 1px solid var(--border); background: var(--surface); user-select: none; position: relative;"
>
	<div style="display: flex; gap: 8px;">
		{#each DOTS as c, i (c)}
			<span
				style="width: 12px; height: 12px; border-radius: 50%; background: {c}; cursor: {i === 0
					? 'pointer'
					: 'default'};"
			></span>
		{/each}
	</div>
	<div
		style="position: absolute; left: 0; right: 0; text-align: center; font-size: 13px; font-weight: 600; color: var(--text-muted); pointer-events: none;"
	>
		{title}
	</div>
	<div style="margin-left: auto; display: flex; align-items: center; gap: 4px; color: var(--text-faint);">
		<span style="font-family: var(--font-mono); font-size: 11.5px;">Pulsar v1.0</span>
	</div>
</div>
