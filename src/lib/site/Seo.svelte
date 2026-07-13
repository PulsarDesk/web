<script lang="ts">
	import { lang } from '$lib/i18n';
	import { OG_IMAGE, OG_LOCALE, SITE_URL } from './seo';

	let { title, description, path = '/' }: { title: string; description: string; path?: string } = $props();

	const url = $derived(SITE_URL + (path === '/' ? '' : path));
	const locales = $derived(Object.values(OG_LOCALE).filter((l) => l !== OG_LOCALE[$lang]));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<!-- Open Graph (WhatsApp/Telegram/Slack/Facebook link previews) -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Pulsar" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={OG_LOCALE[$lang]} />
	{#each locales as l (l)}
		<meta property="og:locale:alternate" content={l} />
	{/each}

	<!-- Twitter / X cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={OG_IMAGE} />
</svelte:head>
