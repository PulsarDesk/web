<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/site/SiteHeader.svelte';
	import SiteFooter from '$lib/site/SiteFooter.svelte';
	import { initLang } from '$lib/i18n';
	import { initTheme } from '$lib/theme';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	onMount(() => {
		initLang();
		initTheme();
	});
</script>

<svelte:head>
	<noscript><style>.reveal { opacity: 1; transform: none; }</style></noscript>
</svelte:head>

<SiteHeader />
{@render children()}
<SiteFooter />
