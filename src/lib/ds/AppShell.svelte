<script lang="ts">
	import type { Snippet } from 'svelte';
	import Sidebar from '$lib/ds/Sidebar.svelte';
	import WindowChrome from '$lib/ds/WindowChrome.svelte';
	import { SELF_ID, type NavId } from '$lib/ds/data';

	let {
		title = 'Pulsar — Bağlan',
		active = 'home',
		selfId = SELF_ID,
		children
	}: { title?: string; active?: NavId; selfId?: string; children?: Snippet } = $props();
</script>

<div class="window">
	<WindowChrome {title} />
	<div style="display: flex; flex: 1; min-height: 0;">
		<Sidebar {active} {selfId} />
		<main class="content">{@render children?.()}</main>
	</div>
</div>
