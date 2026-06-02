<script lang="ts">
	import { onMount } from 'svelte';
	import { site } from '$lib/config';
	import PulsarMark from './PulsarMark.svelte';

	type Props = { variant?: 'home' | 'download' };
	let { variant = 'home' }: Props = $props();

	let scrolled = $state(false);

	onMount(() => {
		if (variant !== 'home') return;
		const onScroll = () => (scrolled = window.scrollY > 8);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	// On the download page, section anchors point back to the landing page.
	const base = $derived(variant === 'home' ? '' : '/');
	const brandHref = $derived(variant === 'home' ? '#top' : '/');
	const withBorder = $derived(variant === 'download' || scrolled);
</script>

<header class="site" class:scrolled={withBorder}>
	<div class="wrap">
		<nav class="nav" aria-label="Ana gezinme">
			<a class="brand" href={brandHref}>
				<PulsarMark size={30} title="Pulsar" />
				<span class="nm">Pulsar</span>
			</a>
			<div class="nav-links">
				<a href="{base}#gaming">Gaming</a>
				<a href="{base}#remote">Uzaktan masaüstü</a>
				<a href="{base}#features">Özellikler</a>
				{#if variant === 'home'}
					<a href="#security">Güvenlik</a>
				{/if}
				<a href={site.links.demoApp}>Demo app</a>
			</div>
			<div class="nav-right">
				{#if variant === 'home'}
					<a class="ghstar" href={site.links.github} target="_blank" rel="noreferrer noopener">
						<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path
								d="M12 .3l3.6 7.3 8 1.2-5.8 5.6 1.4 8L12 25.8 4.8 22.4l1.4-8L.4 8.8l8-1.2z"
								transform="scale(0.9)"
							/>
						</svg>
						GitHub <span class="k">{site.links.githubStars}</span>
					</a>
					<a class="btn btn-primary" href="/download">İndir</a>
				{:else}
					<a class="btn btn-ghost" href="/">← Ana sayfa</a>
				{/if}
			</div>
		</nav>
	</div>
</header>

<style>
	header.site {
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: saturate(1.4) blur(14px);
		background: oklch(0.992 0.003 255 / 0.78);
		border-bottom: 1px solid transparent;
		transition:
			border-color var(--dur) var(--ease),
			background var(--dur) var(--ease);
	}
	header.site.scrolled {
		border-bottom-color: var(--border);
	}
	.nav {
		display: flex;
		align-items: center;
		gap: 28px;
		height: 66px;
	}
	.nav-links {
		display: flex;
		gap: 4px;
		margin-left: 8px;
	}
	.nav-links a {
		font-size: 14.5px;
		font-weight: 500;
		color: var(--text-muted);
		text-decoration: none;
		padding: 8px 13px;
		border-radius: var(--r-sm);
		transition:
			color var(--dur),
			background var(--dur);
	}
	.nav-links a:hover {
		color: var(--text);
		background: var(--surface-2);
	}
	.nav-right {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.ghstar {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 13.5px;
		font-weight: 600;
		color: var(--text-muted);
		border: 1px solid var(--border);
		border-radius: var(--r-sm);
		padding: 8px 12px;
		text-decoration: none;
		box-shadow: var(--shadow-xs);
		background: var(--surface);
		transition:
			border-color var(--dur),
			color var(--dur);
	}
	.ghstar:hover {
		border-color: var(--border-strong);
		color: var(--text);
	}
	.ghstar .k {
		font-family: var(--font-mono);
		color: var(--text);
	}

	@media (max-width: 940px) {
		.nav-links {
			display: none;
		}
	}
</style>
