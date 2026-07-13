<script lang="ts">
	import Avatar from '$lib/ds/Avatar.svelte';
	import Icon from '$lib/ds/Icon.svelte';
	import type { AvatarTone } from '$lib/ds/data';

	let {
		name,
		id,
		tone = 'accent',
		onclick
	}: { name: string; id: string; tone?: AvatarTone; onclick?: () => void } = $props();
</script>

<button type="button" class="recent-row" {onclick}>
	<Avatar {name} {tone} size={30} />
	<div style="text-align: left; line-height: 1.25;">
		<div style="font-size: 13.5px; font-weight: 600;">{name}</div>
		<div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-faint);">{id}</div>
	</div>
	<Icon name="arrowRight" size={15} style="margin-left: auto; color: var(--text-faint);" />
</button>
