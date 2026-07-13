<script lang="ts">
	import { browser } from '$app/environment';
	import { lang, t, DL_TITLE, DL_BTN } from '$lib/i18n';

	type OsKey = 'mac' | 'win' | 'linux';

	// OS icons from the design (static const strings — safe for {@html})
	const ICONS: Record<OsKey, string> = {
		mac: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"/></svg>',
		win: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4.5l8-1.1v8.1H3zm0 15l8 1.1v-8.1H3zm9 1.2l9 1.3V12.5h-9zm0-17.4v8.7h9V3z"/></svg>',
		linux: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.5 0-2.5 1.3-2.5 3 0 1 .2 1.7.2 2.5 0 1-1.5 2.3-2.2 4-.6 1.5-.4 3-.8 3.8-.5 1-1.4 1.5-1.4 2.3 0 .6.5.9 1.2 1 .8.2 1.8.6 2.6 1.3.6.5 1.4.6 2 .6.8 0 1.4-.3 1.9-.7.8-.6 1.7-1 2.4-1.2.7-.2 1.2-.5 1.2-1.1 0-.7-.8-1.2-1.3-2.2-.4-.8-.3-2.3-.8-3.8-.7-1.7-2.2-3-2.2-4 0-.8.2-1.5.2-2.5 0-1.7-1-3-2.5-3z"/></svg>'
	};

	const OS_META: Record<OsKey, { name: string; sub: string }> = {
		mac: { name: 'macOS', sub: 'Universal · Apple Silicon & Intel · 38 MB' },
		win: { name: 'Windows', sub: 'Installer · Windows 10/11 · 42 MB' },
		linux: { name: 'Linux', sub: '.AppImage · glibc 2.31+ · 46 MB' }
	};

	// The blocking head script in app.html runs the design's UA-sniff before
	// first paint and stamps <html data-os>; reading it here makes the very
	// first client render correct. SSR default = mac (the design's default).
	function detectedOs(): OsKey {
		if (!browser) return 'mac';
		const v = document.documentElement.dataset.os;
		return v === 'win' || v === 'linux' || v === 'mac' ? v : 'mac';
	}

	const os = detectedOs();
	const { name, sub } = OS_META[os];
</script>

<svelte:head>
	<title>{DL_TITLE[$lang]}</title>
</svelte:head>

<!-- HERO -->
<section class="dl-hero">
	<div class="wrap">
		<div class="eyebrow">{@html $t('dl.eyebrow')}</div>
		<h1>{@html $t('dl.title')}</h1>
		<p>{@html $t('dl.sub')}</p>

		<div class="detected">
			<div class="top">
				<div class="osico">{@html ICONS[os]}</div>
				<div class="meta">
					<div class="lab">{@html $t('dl.detected')}</div>
					<h3>{name}</h3>
					<div class="sm">{sub}</div>
				</div>
				<!-- svelte-ignore a11y_invalid_attribute (design placeholder link) -->
				<a class="btn btn-primary btn-lg" href="#" style="padding:13px 22px">
					<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16"/></svg>
					<span>{DL_BTN[$lang](name)}</span>
				</a>
			</div>
			<div class="alt">
				<span class="sp">{@html $t('dl.other')}</span>
				<a href="#all">Windows</a><a href="#all">Linux</a><a href="#all">{@html $t('dl.otherVersions')}</a>
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
				<div class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"/></svg></div>
				<h3>macOS</h3>
				<div class="ver">v1.0.0 · macOS 12+</div>
				<ul class="files">
					<li><span class="fmt">Universal .dmg</span><span class="sz">38 MB</span></li>
					<li><span class="fmt">Apple Silicon</span><span class="sz">34 MB</span></li>
					<li><span class="fmt">Intel x64</span><span class="sz">36 MB</span></li>
				</ul>
				<div class="pm">Homebrew: <code>brew install --cask pulsar</code></div>
			</div>
			<!-- Windows -->
			<div class="os-card">
				<div class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4.5l8-1.1v8.1H3zm0 15l8 1.1v-8.1H3zm9 1.2l9 1.3V12.5h-9zm0-17.4v8.7h9V3z"/></svg></div>
				<h3>Windows</h3>
				<div class="ver">v1.0.0 · Windows 10/11</div>
				<ul class="files">
					<li><span class="fmt">Installer .exe</span><span class="sz">42 MB</span></li>
					<li><span class="fmt">Portable .zip</span><span class="sz">40 MB</span></li>
					<li><span class="fmt">{@html $t('dl.msi')}</span><span class="sz">43 MB</span></li>
				</ul>
				<div class="pm">winget: <code>winget install Pulsar</code></div>
			</div>
			<!-- Linux -->
			<div class="os-card">
				<div class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.5 0-2.5 1.3-2.5 3 0 1 .2 1.7.2 2.5 0 1-1.5 2.3-2.2 4-.6 1.5-.4 3-.8 3.8-.5 1-1.4 1.5-1.4 2.3 0 .6.5.9 1.2 1 .8.2 1.8.6 2.6 1.3.6.5 1.4.6 2 .6.8 0 1.4-.3 1.9-.7.8-.6 1.7-1 2.4-1.2.7-.2 1.2-.5 1.2-1.1 0-.7-.8-1.2-1.3-2.2-.4-.8-.3-2.3-.8-3.8-.7-1.7-2.2-3-2.2-4 0-.8.2-1.5.2-2.5 0-1.7-1-3-2.5-3z"/></svg></div>
				<h3>Linux</h3>
				<div class="ver">v1.0.0 · glibc 2.31+</div>
				<ul class="files">
					<li><span class="fmt">.AppImage</span><span class="sz">46 MB</span></li>
					<li><span class="fmt">.deb (Debian/Ubuntu)</span><span class="sz">39 MB</span></li>
					<li><span class="fmt">.rpm (Fedora)</span><span class="sz">40 MB</span></li>
				</ul>
				<div class="pm">Flatpak: <code>flatpak install pulsar</code></div>
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
				<div><span class="g">$</span> git clone <span class="a">github.com/pulsar/pulsar</span></div>
				<div><span class="g">$</span> cd pulsar</div>
				<div><span class="g">$</span> cargo build <span class="a">--release</span></div>
				<div><span class="c">{@html $t('dl.build.license')}</span></div>
			</div>
			<div class="checksum">SHA-256: 9f2c41ab7e0d8c6b… · <span>{@html $t('dl.build.gpg')}</span></div>
		</div>
	</div>
</section>

<style>
	a { color: inherit; }
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
	.detected .alt { display:flex; gap:18px; padding: 13px 28px; border-top:1px solid var(--border); background: var(--surface-2); font-size:13px; }
	.detected .alt a { color: var(--accent); text-decoration:none; font-weight:600; }
	.detected .alt a:hover { text-decoration:underline; }
	.detected .alt .sp { color: var(--text-faint); }

	/* os grid */
	.os-section { padding: 64px 0; }
	.sec-h { text-align:center; margin-bottom:40px; }
	.sec-h h2 { font-size:28px; letter-spacing:-0.02em; }
	.sec-h p { color: var(--text-muted); margin-top:10px; }
	.os-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:18px; }
	.os-card { border:1px solid var(--border); border-radius: var(--r-lg); background: var(--surface); padding: 28px; box-shadow: var(--shadow-sm); display:flex; flex-direction:column; transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur); }
	.os-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--border-strong); }
	.os-card .ic { width:48px;height:48px;border-radius:var(--r); background: var(--surface-3); display:grid; place-items:center; color: var(--text); margin-bottom:18px; }
	.os-card h3 { font-size:19px; }
	.os-card .ver { font-family: var(--font-mono); font-size:12.5px; color: var(--text-faint); margin-top:6px; }
	.os-card .files { list-style:none; padding:0; margin:18px 0; display:flex; flex-direction:column; gap:9px; flex:1; }
	.os-card .files li { display:flex; align-items:center; justify-content:space-between; font-size:13.5px; padding: 9px 12px; border:1px solid var(--border); border-radius: var(--r-sm); background: var(--surface-2); cursor:pointer; transition: border-color var(--dur), background var(--dur); }
	.os-card .files li:hover { border-color: var(--accent); background: var(--accent-soft); }
	.os-card .files li .fmt { font-family: var(--font-mono); font-weight:600; color: var(--text); }
	.os-card .files li .sz { color: var(--text-faint); font-family: var(--font-mono); font-size:12px; }
	.os-card .pm { font-size:12.5px; color: var(--text-muted); border-top:1px solid var(--border); padding-top:14px; }
	.os-card .pm code { font-family: var(--font-mono); background: var(--surface-3); padding:2px 6px; border-radius:5px; font-size:11.5px; color: var(--text); }

	/* requirements + source */
	.info-grid { display:grid; grid-template-columns: 1fr 1fr; gap:18px; padding: 8px 0 72px; }
	.info-card { border:1px solid var(--border); border-radius: var(--r-lg); padding: 28px; background: var(--surface); }
	.info-card h3 { font-size:18px; margin-bottom:16px; }
	.req { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
	.req li { display:flex; justify-content:space-between; font-size:14px; border-bottom:1px dashed var(--border); padding-bottom:11px; }
	.req li span:first-child { color: var(--text-muted); }
	.req li span:last-child { font-weight:600; }
	.src-term { font-family: var(--font-mono); font-size:12.5px; background: oklch(0.21 0.02 268); color: oklch(0.85 0.02 268); border-radius: var(--r); padding:16px 18px; line-height:1.9; }
	.src-term .g { color: oklch(0.78 0.13 158); } .src-term .a { color: oklch(0.78 0.14 272); } .src-term .c { color: oklch(0.62 0.02 268); }
	.checksum { margin-top:14px; font-size:12px; color: var(--text-faint); font-family: var(--font-mono); word-break: break-all; }

	@media (max-width: 820px) { .os-grid, .info-grid { grid-template-columns: 1fr; } }
</style>
