<script lang="ts">
	import type { Snippet } from 'svelte';

	type BadgeTone = 'online' | 'stream' | 'accent' | 'warn' | 'danger' | 'neutral';

	let {
		tone = 'neutral',
		style = '',
		children
	}: { tone?: BadgeTone; style?: string; children?: Snippet } = $props();

	const TONES: Record<BadgeTone, { bg: string; fg: string }> = {
		online: { bg: 'var(--ok-soft)', fg: 'var(--ok)' },
		stream: { bg: 'var(--cyan-soft)', fg: 'var(--cyan)' },
		accent: { bg: 'var(--accent-soft)', fg: 'var(--accent-press)' },
		warn: { bg: 'var(--warn-soft)', fg: 'oklch(0.5 0.13 70)' },
		danger: { bg: 'var(--danger-soft)', fg: 'var(--danger)' },
		neutral: { bg: 'var(--surface-3)', fg: 'var(--text-muted)' }
	};

	const c = $derived(TONES[tone] ?? TONES.neutral);
</script>

<span
	style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; padding: 4px 10px; border-radius: var(--r-pill); background: {c.bg}; color: {c.fg}; {style}"
>
	{#if tone !== 'neutral'}
		<span style="width: 6px; height: 6px; border-radius: 50%; background: {c.fg};"></span>
	{/if}
	{@render children?.()}
</span>
