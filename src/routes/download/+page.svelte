<script lang="ts">
	import { onMount } from 'svelte';
	import { site } from '$lib/config';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	type Os = 'mac' | 'win' | 'linux';

	// Detected OS for the highlighted card. SSR renders macOS; onMount refines it
	// from the user agent (matching the original design's client-side detection).
	let det = $state<{ os: Os; name: string; sub: string }>({
		os: 'mac',
		name: 'macOS',
		sub: 'Universal · Apple Silicon & Intel · 38 MB'
	});

	onMount(() => {
		const ua = navigator.userAgent + ' ' + (navigator.platform ?? '');
		if (/Win/i.test(ua)) {
			det = { os: 'win', name: 'Windows', sub: 'Installer · Windows 10/11 · 42 MB' };
		} else if (/Linux|X11/i.test(ua) && !/Android/i.test(ua)) {
			det = { os: 'linux', name: 'Linux', sub: '.AppImage · glibc 2.31+ · 46 MB' };
		} else if (/Mac/i.test(ua)) {
			det = { os: 'mac', name: 'macOS', sub: 'Universal · Apple Silicon & Intel · 38 MB' };
		}
	});

	const platforms: {
		os: Os;
		name: string;
		ver: string;
		files: { fmt: string; sz: string }[];
		pmLabel: string;
		pmCmd: string;
	}[] = [
		{
			os: 'mac',
			name: 'macOS',
			ver: 'v1.0.0 · macOS 12+',
			files: [
				{ fmt: 'Universal .dmg', sz: '38 MB' },
				{ fmt: 'Apple Silicon', sz: '34 MB' },
				{ fmt: 'Intel x64', sz: '36 MB' }
			],
			pmLabel: 'Homebrew:',
			pmCmd: 'brew install --cask pulsar'
		},
		{
			os: 'win',
			name: 'Windows',
			ver: 'v1.0.0 · Windows 10/11',
			files: [
				{ fmt: 'Installer .exe', sz: '42 MB' },
				{ fmt: 'Portable .zip', sz: '40 MB' },
				{ fmt: '.msi (kurumsal)', sz: '43 MB' }
			],
			pmLabel: 'winget:',
			pmCmd: 'winget install Pulsar'
		},
		{
			os: 'linux',
			name: 'Linux',
			ver: 'v1.0.0 · glibc 2.31+',
			files: [
				{ fmt: '.AppImage', sz: '46 MB' },
				{ fmt: '.deb (Debian/Ubuntu)', sz: '39 MB' },
				{ fmt: '.rpm (Fedora)', sz: '40 MB' }
			],
			pmLabel: 'Flatpak:',
			pmCmd: 'flatpak install pulsar'
		}
	];

	const requirements: { label: string; value: string }[] = [
		{ label: 'İşlemci', value: 'Donanımsal video kodlama destekli' },
		{ label: 'RAM', value: '4 GB (8 GB önerilir)' },
		{ label: 'Ağ', value: '5 Mbps (oyun için 15+ Mbps)' },
		{ label: 'GPU', value: 'H.265 / AV1 encode (oyun modu)' },
		{ label: 'Bağlantı', value: 'P2P veya self-host relay' }
	];

	const title = 'Pulsar — İndir';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="Pulsar’ı macOS, Windows veya Linux için ücretsiz indir. Açık kaynak, hesap gerekmez."
	/>
</svelte:head>

{#snippet osIcon(os: Os, size: number)}
	{#if os === 'mac'}
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path
				d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"
			/>
		</svg>
	{:else if os === 'win'}
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M3 4.5l8-1.1v8.1H3zm0 15l8 1.1v-8.1H3zm9 1.2l9 1.3V12.5h-9zm0-17.4v8.7h9V3z" />
		</svg>
	{:else}
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path
				d="M12 2c-1.5 0-2.5 1.3-2.5 3 0 1 .2 1.7.2 2.5 0 1-1.5 2.3-2.2 4-.6 1.5-.4 3-.8 3.8-.5 1-1.4 1.5-1.4 2.3 0 .6.5.9 1.2 1 .8.2 1.8.6 2.6 1.3.6.5 1.4.6 2 .6.8 0 1.4-.3 1.9-.7.8-.6 1.7-1 2.4-1.2.7-.2 1.2-.5 1.2-1.1 0-.7-.8-1.2-1.3-2.2-.4-.8-.3-2.3-.8-3.8-.7-1.7-2.2-3-2.2-4 0-.8.2-1.5.2-2.5 0-1.7-1-3-2.5-3z"
			/>
		</svg>
	{/if}
{/snippet}

<div class="dl-page">
	<SiteHeader variant="download" />

	<!-- HERO -->
	<section class="dl-hero">
		<div class="wrap">
			<div class="eyebrow">İndir · v{site.version}</div>
			<h1>Pulsar’ı kur, saniyeler içinde bağlan.</h1>
			<p>
				Ücretsiz ve açık kaynak. Hesap gerekmez. Cihazını otomatik algıladık — ya da aşağıdan
				platformunu seç.
			</p>

			<div class="detected">
				<div class="top">
					<div class="osico">
						{@render osIcon(det.os, 30)}
					</div>
					<div class="meta">
						<div class="lab">Algılanan sistem</div>
						<h3>{det.name}</h3>
						<div class="sm">{det.sub}</div>
					</div>
					<a class="btn btn-primary btn-lg" href="#all" style="padding:13px 22px">
						<svg
							width="17"
							height="17"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16" />
						</svg>
						<span>{det.name} için indir</span>
					</a>
				</div>
				<div class="alt">
					<span class="sp">Başka platform?</span>
					<a href="#all">Windows</a><a href="#all">Linux</a><a href="#all">Diğer sürümler</a>
				</div>
			</div>
		</div>
	</section>

	<!-- ALL OS -->
	<section class="os-section" id="all">
		<div class="wrap">
			<div class="sec-h">
				<h2>Tüm platformlar</h2>
				<p>
					Her sürüm aynı özellikleri taşır — host (paylaşan) ve client (bağlanan) tek uygulamada.
				</p>
			</div>
			<div class="os-grid">
				{#each platforms as platform (platform.os)}
					<div class="os-card">
						<div class="ic">{@render osIcon(platform.os, platform.os === 'mac' ? 26 : 24)}</div>
						<h3>{platform.name}</h3>
						<div class="ver">{platform.ver}</div>
						<ul class="files">
							{#each platform.files as file (file.fmt)}
								<li><span class="fmt">{file.fmt}</span><span class="sz">{file.sz}</span></li>
							{/each}
						</ul>
						<div class="pm">{platform.pmLabel} <code>{platform.pmCmd}</code></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- INFO -->
	<section class="wrap">
		<div class="info-grid">
			<div class="info-card">
				<h3>Sistem gereksinimleri</h3>
				<ul class="req">
					{#each requirements as req (req.label)}
						<li><span>{req.label}</span><span>{req.value}</span></li>
					{/each}
				</ul>
			</div>
			<div class="info-card">
				<h3>Kaynaktan derle</h3>
				<div class="src-term">
					<div><span class="c"># Depoyu klonla</span></div>
					<div><span class="g">$</span> git clone <span class="a">github.com/pulsar/pulsar</span></div>
					<div><span class="g">$</span> cd pulsar</div>
					<div><span class="g">$</span> cargo build <span class="a">--release</span></div>
					<div><span class="c"># GPLv3 lisansı · katkılara açık</span></div>
				</div>
				<div class="checksum">SHA-256: 9f2c41ab7e0d8c6b… · GPG ile imzalı sürümler</div>
			</div>
		</div>
	</section>

	<SiteFooter variant="minimal" />
</div>

<style>
	.dl-page {
		--wrap-max: 1080px;
	}

	/* hero */
	.dl-hero {
		position: relative;
		padding: 72px 0 36px;
		text-align: center;
		overflow: hidden;
	}
	.dl-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(720px 320px at 50% -10%, var(--accent-soft) 0%, transparent 62%);
	}
	.dl-hero .wrap {
		position: relative;
	}
	.eyebrow {
		font-family: var(--font-mono);
		font-size: 12.5px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.dl-hero h1 {
		font-size: clamp(34px, 5vw, 52px);
		letter-spacing: -0.03em;
		margin: 16px auto 0;
		max-width: 18ch;
	}
	.dl-hero p {
		font-size: 18px;
		color: var(--text-muted);
		margin: 16px auto 0;
		max-width: 52ch;
		line-height: 1.55;
	}

	/* detected card */
	.detected {
		max-width: 620px;
		margin: 40px auto 0;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--r-xl);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		position: relative;
	}
	.detected .top {
		display: flex;
		align-items: center;
		gap: 18px;
		padding: 26px 28px;
	}
	.detected .osico {
		width: 58px;
		height: 58px;
		border-radius: var(--r);
		background: var(--accent-soft);
		display: grid;
		place-items: center;
		color: var(--accent);
		flex: none;
	}
	.detected .meta {
		text-align: left;
		flex: 1;
	}
	.detected .meta .lab {
		font-family: var(--font-mono);
		font-size: 11.5px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-faint);
	}
	.detected .meta h3 {
		font-size: 22px;
		margin-top: 5px;
	}
	.detected .meta .sm {
		font-size: 13.5px;
		color: var(--text-muted);
		margin-top: 4px;
	}
	.detected .top .btn {
		align-self: center;
	}
	.detected .alt {
		display: flex;
		gap: 18px;
		padding: 13px 28px;
		border-top: 1px solid var(--border);
		background: var(--surface-2);
		font-size: 13px;
	}
	.detected .alt a {
		color: var(--accent);
		text-decoration: none;
		font-weight: 600;
	}
	.detected .alt a:hover {
		text-decoration: underline;
	}
	.detected .alt .sp {
		color: var(--text-faint);
	}

	/* os grid */
	.os-section {
		padding: 64px 0;
	}
	.sec-h {
		text-align: center;
		margin-bottom: 40px;
	}
	.sec-h h2 {
		font-size: 28px;
		letter-spacing: -0.02em;
	}
	.sec-h p {
		color: var(--text-muted);
		margin-top: 10px;
	}
	.os-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 18px;
	}
	.os-card {
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		background: var(--surface);
		padding: 28px;
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-direction: column;
		transition:
			transform var(--dur) var(--ease),
			box-shadow var(--dur) var(--ease),
			border-color var(--dur);
	}
	.os-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--border-strong);
	}
	.os-card .ic {
		width: 48px;
		height: 48px;
		border-radius: var(--r);
		background: var(--surface-3);
		display: grid;
		place-items: center;
		color: var(--text);
		margin-bottom: 18px;
	}
	.os-card h3 {
		font-size: 19px;
	}
	.os-card .ver {
		font-family: var(--font-mono);
		font-size: 12.5px;
		color: var(--text-faint);
		margin-top: 6px;
	}
	.os-card .files {
		list-style: none;
		padding: 0;
		margin: 18px 0;
		display: flex;
		flex-direction: column;
		gap: 9px;
		flex: 1;
	}
	.os-card .files li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 13.5px;
		padding: 9px 12px;
		border: 1px solid var(--border);
		border-radius: var(--r-sm);
		background: var(--surface-2);
		cursor: pointer;
		transition:
			border-color var(--dur),
			background var(--dur);
	}
	.os-card .files li:hover {
		border-color: var(--accent);
		background: var(--accent-soft);
	}
	.os-card .files li .fmt {
		font-family: var(--font-mono);
		font-weight: 600;
		color: var(--text);
	}
	.os-card .files li .sz {
		color: var(--text-faint);
		font-family: var(--font-mono);
		font-size: 12px;
	}
	.os-card .pm {
		font-size: 12.5px;
		color: var(--text-muted);
		border-top: 1px solid var(--border);
		padding-top: 14px;
	}
	.os-card .pm code {
		font-family: var(--font-mono);
		background: var(--surface-3);
		padding: 2px 6px;
		border-radius: 5px;
		font-size: 11.5px;
		color: var(--text);
	}

	/* requirements + source */
	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 18px;
		padding: 8px 0 72px;
	}
	.info-card {
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		padding: 28px;
		background: var(--surface);
	}
	.info-card h3 {
		font-size: 18px;
		margin-bottom: 16px;
	}
	.req {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.req li {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		border-bottom: 1px dashed var(--border);
		padding-bottom: 11px;
	}
	.req li span:first-child {
		color: var(--text-muted);
	}
	.req li span:last-child {
		font-weight: 600;
	}
	.src-term {
		font-family: var(--font-mono);
		font-size: 12.5px;
		background: oklch(0.21 0.02 268);
		color: oklch(0.85 0.02 268);
		border-radius: var(--r);
		padding: 16px 18px;
		line-height: 1.9;
	}
	.src-term .g {
		color: oklch(0.78 0.13 158);
	}
	.src-term .a {
		color: oklch(0.78 0.14 272);
	}
	.src-term .c {
		color: oklch(0.62 0.02 268);
	}
	.checksum {
		margin-top: 14px;
		font-size: 12px;
		color: var(--text-faint);
		font-family: var(--font-mono);
		word-break: break-all;
	}

	@media (max-width: 820px) {
		.os-grid,
		.info-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
