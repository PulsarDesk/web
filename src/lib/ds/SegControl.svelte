<script lang="ts">
	let {
		options,
		value,
		onchange
	}: {
		options: { value: string; label: string }[];
		value: string;
		onchange?: (v: string) => void;
	} = $props();
</script>

<div
	style="display: inline-flex; background: var(--surface-3); border-radius: var(--r-sm); padding: 3px; gap: 2px;"
>
	{#each options as o (o.value)}
		{@const active = o.value === value}
		<button
			type="button"
			onclick={() => onchange?.(o.value)}
			style="border: none; cursor: pointer; font-family: var(--font-sans); font-weight: 600; font-size: 13px; padding: 6px 13px; border-radius: 7px; background: {active
				? 'var(--surface)'
				: 'transparent'}; color: {active
				? 'var(--text)'
				: 'var(--text-muted)'}; box-shadow: {active
				? 'var(--shadow-xs)'
				: 'none'}; transition: all var(--dur) var(--ease);"
		>
			{o.label}
		</button>
	{/each}
</div>
