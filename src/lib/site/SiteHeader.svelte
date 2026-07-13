<script lang="ts">
	import PulsarMark from '$lib/ds/PulsarMark.svelte';
	import { LANGS, lang, setLang, t, type Lang } from '$lib/i18n';
	import { toggleTheme } from '$lib/theme';

	let open = $state(false);

	function toggleMenu(e: MouseEvent): void {
		e.stopPropagation();
		open = !open;
	}

	function pick(code: Lang): void {
		setLang(code);
		open = false;
	}
</script>

<svelte:document onclick={() => (open = false)} />

<header class="site">
	<div class="wrap">
		<nav class="nav">
			<a class="brand" href="/"><PulsarMark size={28} /><span class="nm">Pulsar</span></a>
			<div class="nav-links">
				<a href="/#gaming">Gaming</a>
				<a href="/#remote">{@html $t('nav.remote')}</a>
				<a href="/#features">{@html $t('nav.features')}</a>
				<a href="/#how">{@html $t('nav.how')}</a>
			</div>
			<div class="nav-right">
				<div class="lang-dd" class:open>
					<button
						type="button"
						class="lang-btn"
						aria-haspopup="listbox"
						aria-expanded={open}
						aria-label="Dil / Language"
						onclick={toggleMenu}
					>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"></path></svg>
						<span>{$lang.toUpperCase()}</span>
						<svg class="chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
					</button>
					<div class="lang-menu" role="listbox">
						{#each LANGS as { code, label } (code)}
							<button
								type="button"
								class:on={$lang === code}
								role="option"
								aria-selected={$lang === code}
								onclick={() => pick(code)}
							>
								<span><span class="code">{code.toUpperCase()}</span>{label}</span>
							</button>
						{/each}
					</div>
				</div>
				<button type="button" class="theme-tgl" aria-label="Koyu / açık tema" onclick={toggleTheme}>
					<svg class="ic-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"></path></svg>
					<svg class="ic-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>
				</button>
				<a class="gh" href="https://github.com/PulsarDesk">
					<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z"/></svg>
					GitHub
				</a>
				<a class="btn btn-primary" href="/download" style="padding: 9px 16px; font-size: 14px;">{@html $t('nav.download')}</a>
			</div>
		</nav>
	</div>
</header>
