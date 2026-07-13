<script lang="ts">
	let { label = 'Senin kimliğin · relay’den', id }: { label?: string; id: string } = $props();
</script>

<div
	style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 11px 12px;"
>
	<div
		style="font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint);"
	>
		{label}
	</div>
	<div
		style="font-family: var(--font-mono); font-size: 16px; font-weight: 500; letter-spacing: 0.04em; margin-top: 4px;"
	>
		{id}
	</div>
</div>
