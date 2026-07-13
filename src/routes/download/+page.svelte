<script lang="ts">
	import { lang, t, DL_TITLE, DL_BTN } from '$lib/i18n';
	import Seo from '$lib/site/Seo.svelte';
	import type { ReleaseAsset } from '$lib/server/releases';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// svelte-ignore state_referenced_locally (server load data is fixed for the
	// lifetime of this page — every visit re-runs the load on the server)
	const os = data.os;
	// svelte-ignore state_referenced_locally
	const dl = data.downloads;

	type OsKey = typeof os;

	// OS icons (static const strings — safe for {@html}); mac/win/linux from the
	// design, android/ios added with the same single-path line style.
	const ICONS: Record<OsKey, string> = {
		mac: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"/></svg>',
		win: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4.5l8-1.1v8.1H3zm0 15l8 1.1v-8.1H3zm9 1.2l9 1.3V12.5h-9zm0-17.4v8.7h9V3z"/></svg>',
		linux: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.5 0-2.5 1.3-2.5 3 0 1 .2 1.7.2 2.5 0 1-1.5 2.3-2.2 4-.6 1.5-.4 3-.8 3.8-.5 1-1.4 1.5-1.4 2.3 0 .6.5.9 1.2 1 .8.2 1.8.6 2.6 1.3.6.5 1.4.6 2 .6.8 0 1.4-.3 1.9-.7.8-.6 1.7-1 2.4-1.2.7-.2 1.2-.5 1.2-1.1 0-.7-.8-1.2-1.3-2.2-.4-.8-.3-2.3-.8-3.8-.7-1.7-2.2-3-2.2-4 0-.8.2-1.5.2-2.5 0-1.7-1-3-2.5-3z"/></svg>',
		android:
			'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-3a8 8 0 0116 0v3a2 2 0 01-2 2H6a2 2 0 01-2-2z"/><path d="M7 7l-1.5-2.5M17 7l1.5-2.5"/><circle cx="9" cy="13" r="0.4" fill="currentColor"/><circle cx="15" cy="13" r="0.4" fill="currentColor"/></svg>',
		ios: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"/></svg>'
	};

	const OS_NAME: Record<OsKey, string> = {
		mac: 'macOS',
		win: 'Windows',
		linux: 'Linux',
		android: 'Android',
		ios: 'iOS'
	};

	// The suggested asset for the detected platform (null → iOS, not ready).
	const SUGGESTION: Record<OsKey, ReleaseAsset | null> = {
		mac: dl.desktop.mac[0] ?? null,
		win: dl.desktop.win[0] ?? null,
		linux: dl.desktop.linux[0] ?? null,
		android: dl.android.apk,
		ios: null
	};

	const suggested = SUGGESTION[os];
	const detVersion = os === 'android' ? dl.android.version : dl.desktop.version;

	function subLine(asset: ReleaseAsset | null, version: string | null): string {
		if (!asset) return '';
		const parts = [asset.label];
		if (version) parts.push(version);
		if (asset.sizeMB) parts.push(`${asset.sizeMB} MB`);
		return parts.join(' · ');
	}

	const ver = (v: string | null, req: string) => `${v ?? 'latest'} · ${req}`;
</script>

<Seo title={DL_TITLE[$lang]} description={$t('dl.sub')} path="/download" />

<!-- HERO -->
<section class="dl-hero">
	<div class="wrap">
		<div class="eyebrow">{@html $t('dl.eyebrow')}{#if dl.desktop.version}&nbsp;· {dl.desktop.version}{/if}</div>
		<h1>{@html $t('dl.title')}</h1>
		<p>{@html $t('dl.sub')}</p>

		<div class="detected">
			<div class="top">
				<div class="osico">{@html ICONS[os]}</div>
				<div class="meta">
					<div class="lab">{@html $t('dl.detected')}</div>
					<h3>{OS_NAME[os]}</h3>
					<div class="sm">{os === 'ios' ? $t('dl.iosSub') : subLine(suggested, detVersion)}</div>
				</div>
				{#if suggested}
					<a class="btn btn-primary btn-lg" href={suggested.url} style="padding:13px 22px">
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16"/></svg>
						<span>{DL_BTN[$lang](OS_NAME[os])}</span>
					</a>
				{:else}
					<button class="btn btn-ghost btn-lg" style="padding:13px 22px" disabled>
						{@html $t('dl.soon')}
					</button>
				{/if}
			</div>
			<div class="alt">
				<span class="sp">{@html $t('dl.other')}</span>
				<a href="#all">Windows</a><a href="#all">Linux</a><a href="#all">Android</a><a href="#all">{@html $t('dl.otherVersions')}</a>
			</div>
		</div>
	</div>
</section>

<!-- ALL OS -->
<section class="os-section" id="all">
	<div class="wrap">
		<div class="sec-h">
			<h2>{@html $t('dl.allTitle')}</h2>
			<p>{@html $t('dl.allSub')}</p>
		</div>
		<div class="os-grid">
			<!-- macOS -->
			<div class="os-card">
				<div class="ic">{@html ICONS.mac}</div>
				<h3>macOS</h3>
				<div class="ver">{ver(dl.desktop.version, 'macOS 12+')}</div>
				<ul class="files">
					{#each dl.desktop.mac as f (f.label)}
						<li><a href={f.url}><span class="fmt">{f.label}</span><span class="sz">{f.sizeMB ? `${f.sizeMB} MB` : '→'}</span></a></li>
					{/each}
				</ul>
				<div class="pm"><a href={dl.desktop.releasesUrl}>{@html $t('dl.allFiles')}</a></div>
			</div>
			<!-- Windows -->
			<div class="os-card">
				<div class="ic">{@html ICONS.win}</div>
				<h3>Windows</h3>
				<div class="ver">{ver(dl.desktop.version, 'Windows 10/11')}</div>
				<ul class="files">
					{#each dl.desktop.win as f (f.label)}
						<li><a href={f.url}><span class="fmt">{f.label}</span><span class="sz">{f.sizeMB ? `${f.sizeMB} MB` : '→'}</span></a></li>
					{/each}
				</ul>
				<div class="pm"><a href={dl.desktop.releasesUrl}>{@html $t('dl.allFiles')}</a></div>
			</div>
			<!-- Linux -->
			<div class="os-card">
				<div class="ic">{@html ICONS.linux}</div>
				<h3>Linux</h3>
				<div class="ver">{ver(dl.desktop.version, 'glibc 2.31+')}</div>
				<ul class="files">
					{#each dl.desktop.linux as f (f.label)}
						<li><a href={f.url}><span class="fmt">{f.label}</span><span class="sz">{f.sizeMB ? `${f.sizeMB} MB` : '→'}</span></a></li>
					{/each}
				</ul>
				<div class="pm"><a href={dl.desktop.releasesUrl}>{@html $t('dl.allFiles')}</a></div>
			</div>
			<!-- Android -->
			<div class="os-card">
				<div class="ic">{@html ICONS.android}</div>
				<h3>Android</h3>
				<div class="ver">{ver(dl.android.version, 'Android 7+')}</div>
				<ul class="files">
					<li><a href={dl.android.apk.url}><span class="fmt">{dl.android.apk.label}</span><span class="sz">{dl.android.apk.sizeMB ? `${dl.android.apk.sizeMB} MB` : '→'}</span></a></li>
				</ul>
				<div class="pm"><a href={dl.android.releasesUrl}>{@html $t('dl.allFiles')}</a></div>
			</div>
			<!-- iOS (not ready) -->
			<div class="os-card soon">
				<span class="soon-badge">{@html $t('dl.soon')}</span>
				<div class="ic">{@html ICONS.ios}</div>
				<h3>iOS</h3>
				<div class="ver">—</div>
				<p class="soon-sub">{@html $t('dl.iosSub')}</p>
			</div>
		</div>
	</div>
</section>

<!-- INFO -->
<section class="wrap">
	<div class="info-grid">
		<div class="info-card">
			<h3>{@html $t('dl.reqTitle')}</h3>
			<ul class="req">
				<li><span>{@html $t('dl.req.cpu')}</span><span>{@html $t('dl.req.cpuV')}</span></li>
				<li><span>{@html $t('dl.req.ram')}</span><span>{@html $t('dl.req.ramV')}</span></li>
				<li><span>{@html $t('dl.req.net')}</span><span>{@html $t('dl.req.netV')}</span></li>
				<li><span>{@html $t('dl.req.gpu')}</span><span>{@html $t('dl.req.gpuV')}</span></li>
				<li><span>{@html $t('dl.req.conn')}</span><span>{@html $t('dl.req.connV')}</span></li>
			</ul>
		</div>
		<div class="info-card">
			<h3>{@html $t('dl.buildTitle')}</h3>
			<div class="src-term">
				<div><span class="c">{@html $t('dl.build.clone')}</span></div>
				<div><span class="g">$</span> git clone <span class="a">github.com/PulsarDesk/pulsar-desktop</span></div>
				<div><span class="g">$</span> cd pulsar-desktop</div>
				<div><span class="g">$</span> cargo build <span class="a">--release</span></div>
				<div><span class="c">{@html $t('dl.build.license')}</span></div>
			</div>
			<div class="checksum"><a href={dl.desktop.releasesUrl}>SHA-256 / .sig</a> · <span>{@html $t('dl.build.gpg')}</span></div>
		</div>
	</div>
</section>

<style>
	.wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

	/* hero */
	.dl-hero { position: relative; padding: 72px 0 36px; text-align:center; overflow:hidden; }
	.dl-hero::before { content:""; position:absolute; inset:0; pointer-events:none; background: radial-gradient(720px 320px at 50% -10%, var(--accent-soft) 0%, transparent 62%); }
	.dl-hero .wrap { position:relative; }
	.eyebrow { font-family: var(--font-mono); font-size:12.5px; letter-spacing:0.14em; text-transform:uppercase; color: var(--accent); }
	.dl-hero h1 { font-size: clamp(34px, 5vw, 52px); letter-spacing:-0.03em; margin: 16px auto 0; max-width: 18ch; }
	.dl-hero p { font-size:18px; color: var(--text-muted); margin: 16px auto 0; max-width: 52ch; line-height:1.55; }

	/* detected card */
	.detected { max-width: 620px; margin: 40px auto 0; background: var(--surface); border:1px solid var(--border); border-radius: var(--r-xl); box-shadow: var(--shadow-lg); overflow:hidden; position:relative; }
	.detected .top { display:flex; align-items:center; gap:18px; padding: 26px 28px; }
	.detected .osico { width:58px; height:58px; border-radius: var(--r); background: var(--accent-soft); display:grid; place-items:center; color: var(--accent); flex:none; }
	.detected .meta { text-align:left; flex:1; }
	.detected .meta .lab { font-family: var(--font-mono); font-size:11.5px; letter-spacing:0.1em; text-transform:uppercase; color: var(--text-faint); }
	.detected .meta h3 { font-size:22px; margin-top:5px; }
	.detected .meta .sm { font-size:13.5px; color: var(--text-muted); margin-top:4px; }
	.detected .top .btn { align-self:center; }
	.detected .top button.btn:disabled { opacity: 0.7; transform: none; }
	.detected .alt { display:flex; gap:18px; padding: 13px 28px; border-top:1px solid var(--border); background: var(--surface-2); font-size:13px; flex-wrap: wrap; }
	.detected .alt a { color: var(--accent); text-decoration:none; font-weight:600; }
	.detected .alt a:hover { text-decoration:underline; }
	.detected .alt .sp { color: var(--text-faint); }

	/* os grid */
	.os-section { padding: 64px 0; }
	.sec-h { text-align:center; margin-bottom:40px; }
	.sec-h h2 { font-size:28px; letter-spacing:-0.02em; }
	.sec-h p { color: var(--text-muted); margin-top:10px; }
	.os-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:18px; }
	.os-card { position:relative; border:1px solid var(--border); border-radius: var(--r-lg); background: var(--surface); padding: 28px; box-shadow: var(--shadow-sm); display:flex; flex-direction:column; transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur); }
	.os-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--border-strong); }
	.os-card .ic { width:48px;height:48px;border-radius:var(--r); background: var(--surface-3); display:grid; place-items:center; color: var(--text); margin-bottom:18px; }
	.os-card h3 { font-size:19px; }
	.os-card .ver { font-family: var(--font-mono); font-size:12.5px; color: var(--text-faint); margin-top:6px; }
	.os-card .files { list-style:none; padding:0; margin:18px 0; display:flex; flex-direction:column; gap:9px; flex:1; }
	.os-card .files a { display:flex; align-items:center; justify-content:space-between; font-size:13.5px; padding: 9px 12px; border:1px solid var(--border); border-radius: var(--r-sm); background: var(--surface-2); cursor:pointer; text-decoration:none; transition: border-color var(--dur), background var(--dur); }
	.os-card .files a:hover { border-color: var(--accent); background: var(--accent-soft); }
	.os-card .files .fmt { font-family: var(--font-mono); font-weight:600; color: var(--text); }
	.os-card .files .sz { color: var(--text-faint); font-family: var(--font-mono); font-size:12px; }
	.os-card .pm { font-size:12.5px; color: var(--text-muted); border-top:1px solid var(--border); padding-top:14px; margin-top:auto; }
	.os-card .pm a { color: var(--accent); text-decoration:none; font-weight:600; }
	.os-card .pm a:hover { text-decoration:underline; }

	/* iOS "coming soon" card */
	.os-card.soon { opacity: 0.72; }
	.os-card.soon:hover { transform: none; box-shadow: var(--shadow-sm); border-color: var(--border); }
	.soon-badge { position:absolute; top:16px; right:16px; font-size:11px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color: var(--accent-press); background: var(--accent-soft); border:1px solid var(--accent-soft-2); padding: 3px 9px; border-radius: var(--r-pill); }
	.soon-sub { font-size:13.5px; line-height:1.6; color: var(--text-muted); margin: 18px 0 0; }

	/* requirements + source */
	.info-grid { display:grid; grid-template-columns: 1fr 1fr; gap:18px; padding: 8px 0 72px; }
	.info-card { border:1px solid var(--border); border-radius: var(--r-lg); padding: 28px; background: var(--surface); }
	.info-card h3 { font-size:18px; margin-bottom:16px; }
	.req { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
	.req li { display:flex; justify-content:space-between; font-size:14px; border-bottom:1px dashed var(--border); padding-bottom:11px; }
	.req li span:first-child { color: var(--text-muted); }
	.req li span:last-child { font-weight:600; }
	.src-term { font-family: var(--font-mono); font-size:12.5px; background: oklch(0.21 0.02 268); color: oklch(0.85 0.02 268); border-radius: var(--r); padding:16px 18px; line-height:1.9; overflow-x: auto; }
	.src-term .g { color: oklch(0.78 0.13 158); } .src-term .a { color: oklch(0.78 0.14 272); } .src-term .c { color: oklch(0.62 0.02 268); }
	.checksum { margin-top:14px; font-size:12px; color: var(--text-faint); font-family: var(--font-mono); word-break: break-all; }
	.checksum a { color: var(--accent); text-decoration:none; }
	.checksum a:hover { text-decoration:underline; }

	@media (max-width: 820px) { .os-grid, .info-grid { grid-template-columns: 1fr; } }
	@media (max-width: 560px) {
		/* detected card: row layout overflows — stack icon / meta / button */
		.detected .top { flex-direction: column; text-align: center; gap: 14px; }
		.detected .meta { text-align: center; }
		.detected .alt { justify-content: center; }
	}
</style>
