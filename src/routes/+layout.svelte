<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/site/SiteHeader.svelte';
	import SiteFooter from '$lib/site/SiteFooter.svelte';
	import { lang } from '$lib/i18n';
	import { initTheme } from '$lib/theme';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: Snippet; data: LayoutData } = $props();

	// Seed the store from the server-negotiated language synchronously, so the
	// server render and the hydration render agree — no language flash.
	// svelte-ignore state_referenced_locally (deliberate one-time seed; later
	// changes flow through setLang, not through data)
	lang.set(data.lang);

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<noscript><style>.reveal { opacity: 1; transform: none; }</style></noscript>
</svelte:head>

<SiteHeader />
{@render children()}
<SiteFooter />
