<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { lang, t, DOC_TITLE, DS_LMAP } from '$lib/i18n';
	import AppShell from '$lib/ds/AppShell.svelte';
	import HomeScreen from '$lib/ds/HomeScreen.svelte';
	import SessionScreen from '$lib/ds/SessionScreen.svelte';
	import Seo from '$lib/site/Seo.svelte';

	const L = $derived(DS_LMAP[$lang]);
</script>

<Seo title={DOC_TITLE[$lang]} description={$t('hero.sub')} path="/" />

<!-- svelte-ignore a11y_consider_explicit_label -->
<a id="top"></a>

<!-- ================= HERO ================= -->
<section class="hero">
	<div class="wrap">
		<span class="pill">{@html $t('hero.pill')}</span>
		<h1 class="hero-title">{@html $t('hero.title')}</h1>
		<p class="sub">{@html $t('hero.sub')}</p>
		<div class="hero-cta">
			<a class="btn btn-primary btn-lg" href="/download">
				<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16"/></svg>
				<span>{@html $t('hero.dl')}</span>
			</a>
		</div>
		<div class="osline">macOS · Windows · Linux · Android · iOS ({$t('dl.soon').toLowerCase()})</div>

		<!-- product shot -->
		<div class="shot-stage">
			<div class="shot-wrap">
				<div class="chip-float cf1">{@html $t('hero.chip1')}</div>
				<div class="chip-float cf2">{@html $t('hero.chip2')}</div>
				<div class="ds-shot" aria-label="Pulsar uygulaması — Bağlan ekranı">
					<AppShell title={L.title} active="home" selfId="482 913 056">
						<HomeScreen selfId="482 913 056" />
					</AppShell>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ================= STRIP ================= -->
<div class="strip">
	<div class="wrap">
		<div class="cell"><div class="v">&lt;<em>8</em> ms</div><div class="k">{@html $t('strip.k1')}</div></div>
		<div class="cell"><div class="v">4K · <em>120</em> fps</div><div class="k">{@html $t('strip.k2')}</div></div>
		<div class="cell"><div class="v">{@html $t('strip.v3')}</div><div class="k">macOS · Windows · Linux · Android</div></div>
		<div class="cell"><div class="v">{@html $t('strip.v4')}</div><div class="k">GPLv3 · self-host</div></div>
	</div>
</div>

<!-- ================= USE CASE: GAMING ================= -->
<section class="s" id="gaming">
	<div class="wrap">
		<div class="uc game">
			<div class="txt reveal" use:reveal>
				<span class="eyebrow">{@html $t('game.eyebrow')}</span>
				<h3 class="s-title" style="font-size: clamp(24px, 3vw, 32px);">{@html $t('game.title')}</h3>
				<p>{@html $t('game.p')}</p>
				<ul class="ticks">
					<li>{@html $t('game.t1')}</li>
					<li>{@html $t('game.t2')}</li>
					<li>{@html $t('game.t3')}</li>
					<li>{@html $t('game.t4')}</li>
				</ul>
			</div>
			<div class="vis vis-game reveal" use:reveal>
				<div class="ds-session"><SessionScreen mode="game" conn="p2p" target={{ name: L.gameName, id: '640 117 992' }} /></div>
			</div>
		</div>

		<!-- USE CASE: REMOTE -->
		<div class="uc remote" id="remote">
			<div class="vis vis-remote reveal" use:reveal>
				<div class="ds-session"><SessionScreen mode="remote" conn="p2p" target={{ name: L.remoteName, id: '719 204 663' }} /></div>
			</div>
			<div class="txt reveal" use:reveal>
				<span class="eyebrow">{@html $t('remote.eyebrow')}</span>
				<h3 class="s-title" style="font-size: clamp(24px, 3vw, 32px);">{@html $t('remote.title')}</h3>
				<p>{@html $t('remote.p')}</p>
				<ul class="ticks">
					<li>{@html $t('remote.t1')}</li>
					<li>{@html $t('remote.t2')}</li>
					<li>{@html $t('remote.t3')}</li>
					<li>{@html $t('remote.t4')}</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ================= FEATURES ================= -->
<section class="s features" id="features">
	<div class="wrap">
		<div class="head reveal" use:reveal>
			<span class="eyebrow">{@html $t('feat.eyebrow')}</span>
			<h2 class="s-title">{@html $t('feat.title')}</h2>
		</div>
		<div class="fgrid">
			<div class="f reveal" use:reveal><div class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg></div><h4>{@html $t('feat.f1h')}</h4><p>{@html $t('feat.f1p')}</p></div>
			<div class="f reveal" use:reveal><div class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div><h4>{@html $t('feat.f2h')}</h4><p>{@html $t('feat.f2p')}</p></div>
			<div class="f reveal" use:reveal><div class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><h4>{@html $t('feat.f3h')}</h4><p>{@html $t('feat.f3p')}</p></div>
			<div class="f reveal" use:reveal><div class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V6a2 2 0 012-2h12a2 2 0 012 2v10M2 20h20M9 8h6"/></svg></div><h4>{@html $t('feat.f4h')}</h4><p>{@html $t('feat.f4p')}</p></div>
			<div class="f reveal" use:reveal><div class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 001 1h4M5 3h9l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/><path d="M9 13l2 2 4-4"/></svg></div><h4>{@html $t('feat.f5h')}</h4><p>{@html $t('feat.f5p')}</p></div>
			<div class="f reveal" use:reveal><div class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div><h4>{@html $t('feat.f6h')}</h4><p>{@html $t('feat.f6p')}</p></div>
		</div>
	</div>
</section>

<!-- ================= HOW ================= -->
<section class="s" id="how">
	<div class="wrap">
		<div class="reveal" use:reveal style="text-align:center; display:flex; flex-direction:column; align-items:center;">
			<span class="eyebrow">{@html $t('how.eyebrow')}</span>
			<h2 class="s-title">{@html $t('how.title')}</h2>
		</div>
		<div class="how">
			<div class="hstep reveal" use:reveal><div class="n">1</div><h4>{@html $t('how.s1h')}</h4><p>{@html $t('how.s1p')}</p></div>
			<div class="hstep reveal" use:reveal><div class="n">2</div><h4>{@html $t('how.s2h')}</h4><p>{@html $t('how.s2p')}</p></div>
			<div class="hstep reveal" use:reveal><div class="n">3</div><h4>{@html $t('how.s3h')}</h4><p>{@html $t('how.s3p')}</p></div>
		</div>
	</div>
</section>

<!-- ================= CTA ================= -->
<section class="cta">
	<div class="cta-inner reveal" use:reveal>
		<div class="rings">
			<span style="width: 380px; height: 380px;"></span>
			<span style="width: 560px; height: 560px;"></span>
			<span style="width: 760px; height: 760px;"></span>
		</div>
		<h2>{@html $t('cta.title')}</h2>
		<p>{@html $t('cta.p')}</p>
		<div class="cta-row">
			<a class="btn btn-primary btn-lg" href="/download">{@html $t('cta.dl')}</a>
			<a class="btn btn-ghost btn-lg" href="https://github.com/PulsarDesk">{@html $t('cta.star')}</a>
		</div>
	</div>
</section>

<style>
	/* NOTE: no scoped `a { color: inherit }` here — the scope class would give
	   it higher specificity than the global .btn-primary color (white text).
	   app.css already carries the unscoped rule. */
	.wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }

	/* ============ HERO ============ */
	.hero { position: relative; padding: 88px 0 0; text-align: center; }
	.hero::before { content: ""; position: absolute; inset: 0; pointer-events: none;
		background: radial-gradient(860px 420px at 50% -8%, var(--accent-soft) 0%, transparent 60%); }
	.hero .wrap { position: relative; display: flex; flex-direction: column; align-items: center; }
	.pill { display: inline-flex; align-items: center; gap: 9px; font-family: var(--font-mono); font-size: 12.5px;
		color: var(--accent-press); background: var(--accent-soft); border: 1px solid var(--accent-soft-2);
		padding: 7px 14px; border-radius: var(--r-pill); margin-bottom: 28px; }
	.pill :global(.dot) { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); animation: pbeat 2s ease-out infinite; }
	@keyframes pbeat { 0% { box-shadow: 0 0 0 0 var(--accent-ring); } 70% { box-shadow: 0 0 0 9px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }
	h1.hero-title { font-size: clamp(40px, 5.6vw, 64px); line-height: 1.08; letter-spacing: -0.035em; max-width: 17ch; }
	.hero p.sub { font-size: 18.5px; line-height: 1.6; color: var(--text-muted); max-width: 56ch; margin: 24px auto 0; }
	.hero-cta { display: flex; gap: 12px; margin-top: 36px; flex-wrap: wrap; justify-content: center; }
	.btn-lg { font-size: 15.5px; padding: 13px 22px; border-radius: var(--r); }
	.hero .osline { margin-top: 22px; font-family: var(--font-mono); font-size: 12.5px; color: var(--text-faint); }

	/* ---- hero product shot ---- */
	.shot-stage { position: relative; margin-top: 64px; width: 100%; }
	.shot-stage::after { content: ""; position: absolute; left: 50%; bottom: -1px; transform: translateX(-50%);
		width: min(1120px, 100%); height: 55%; pointer-events: none;
		background: linear-gradient(180deg, transparent, var(--bg) 92%); }

	/* floating chips on the shot */
	.shot-wrap { position: relative; width: min(960px, 100%); margin: 0 auto; }
	.chip-float { position: absolute; z-index: 2; display: flex; align-items: center; gap: 8px; background: var(--surface);
		border: 1px solid var(--border); border-radius: var(--r-sm); box-shadow: var(--shadow); padding: 9px 13px;
		font-size: 12.5px; font-weight: 600; }
	.chip-float :global(.d) { width: 7px; height: 7px; border-radius: 50%; flex: none; }
	.cf1 { top: 22px; right: -14px; } .cf2 { bottom: 84px; left: -18px; }
	.chip-float :global(.mono) { font-family: var(--font-mono); font-weight: 500; font-size: 11.5px; color: var(--text-muted); }

	/* ============ LOGO STRIP / TRUST ============ */
	/* position:relative lifts the strip above the hero's absolutely-positioned
	   fade overlay (.shot-stage::after), which otherwise paints over the 1px
	   top border */
	.strip { position: relative; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface); }
	.strip .wrap { display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; }
	.strip .cell { flex: 1; min-width: 200px; text-align: center; padding: 26px 18px; border-left: 1px solid var(--border); }
	.strip .cell:first-child { border-left: none; }
	.strip .v { font-family: var(--font-display); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; }
	.strip .v :global(em) { font-style: normal; color: var(--accent); }
	.strip .k { font-size: 12.5px; color: var(--text-muted); margin-top: 4px; }

	/* ============ SECTIONS ============ */
	section.s { padding: 100px 0; }
	.eyebrow { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); }
	.s-title { font-size: clamp(28px, 3.4vw, 38px); letter-spacing: -0.03em; margin-top: 14px; }

	/* use-case split rows */
	.uc { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
	.uc + .uc { margin-top: 96px; }
	.uc .txt h3 { font-size: 26px; letter-spacing: -0.025em; }
	.uc .txt > p { font-size: 15.5px; line-height: 1.65; color: var(--text-muted); margin: 14px 0 20px; }
	.uc .ticks { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
	.uc .ticks li { display: flex; align-items: center; gap: 11px; font-size: 14.5px; }
	.uc .ticks :global(.ck) { width: 19px; height: 19px; border-radius: 50%; flex: none; display: grid; place-items: center; font-size: 11px; font-weight: 700; }
	.uc.game .ticks :global(.ck) { background: var(--cyan-soft); color: var(--cyan); }
	.uc.remote .ticks :global(.ck) { background: var(--accent-soft); color: var(--accent); }

	/* mini visual: game session */
	.vis { border-radius: var(--r-lg); border: 1px solid var(--border); box-shadow: var(--shadow-lg); overflow: hidden; }
	.vis-game { position: relative; aspect-ratio: 16/10.5; background: radial-gradient(120% 130% at 28% 18%, oklch(0.34 0.09 280), oklch(0.17 0.05 270) 72%); }

	/* mini visual: remote desktop */
	.vis-remote { position: relative; aspect-ratio: 16/10.5; background: radial-gradient(130% 120% at 70% 0%, oklch(0.44 0.07 250), oklch(0.27 0.04 255) 72%); }

	/* ============ FEATURES ============ */
	.features { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
	.features .head { text-align: center; display: flex; flex-direction: column; align-items: center; margin-bottom: 52px; }
	.fgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
	.f { border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; background: var(--bg); transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease); }
	.f:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
	.f .ic { width: 38px; height: 38px; border-radius: var(--r-sm); background: var(--accent-soft); color: var(--accent); display: grid; place-items: center; margin-bottom: 16px; }
	.f h4 { font-size: 16.5px; letter-spacing: -0.01em; }
	.f p { font-size: 13.5px; line-height: 1.6; color: var(--text-muted); margin-top: 8px; }

	/* ============ HOW ============ */
	.how { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
	.hstep { position: relative; padding-top: 16px; }
	.hstep .n { font-family: var(--font-mono); font-size: 13px; color: var(--accent); border: 1px solid var(--accent-soft-2);
		width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; margin-bottom: 16px; background: var(--surface); }
	.hstep h4 { font-size: 17.5px; }
	.hstep p { font-size: 14px; color: var(--text-muted); margin-top: 8px; line-height: 1.6; }
	.hstep::after { content: ""; position: absolute; top: 32px; left: 46px; right: -8px; height: 1px; background: linear-gradient(90deg, var(--border), transparent); }
	.hstep:last-child::after { display: none; }

	/* ============ CTA ============ */
	.cta { padding: 0 28px 100px; }
	.cta-inner { max-width: 1120px; margin: 0 auto; position: relative; overflow: hidden; text-align: center;
		background: oklch(0.21 0.02 268); border-radius: var(--r-xl); padding: 72px 40px; color: #fff; box-shadow: var(--shadow-lg); }
	.cta-inner::before { content: ""; position: absolute; inset: 0;
		background: radial-gradient(640px 300px at 50% -20%, oklch(0.555 0.205 272 / 0.5), transparent 65%); }
	.cta-inner > * { position: relative; }
	.cta-inner .rings { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 0; height: 0; }
	.cta-inner .rings span { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border: 1px solid oklch(1 0 0 / 0.07); border-radius: 50%; }
	.cta-inner h2 { font-size: clamp(28px, 3.8vw, 42px); letter-spacing: -0.03em; }
	.cta-inner p { font-size: 16px; opacity: 0.85; margin-top: 12px; }
	.cta-row { display: flex; gap: 12px; justify-content: center; margin-top: 32px; flex-wrap: wrap; }
	.cta-row .btn-ghost { background: oklch(1 0 0 / 0.1); border-color: oklch(1 0 0 / 0.22); color: #fff; }
	.cta-row .btn-ghost:hover { background: oklch(1 0 0 / 0.18); }

	@media (max-width: 920px) {
		.uc { grid-template-columns: 1fr; gap: 36px; }
		.uc.game .vis { order: -1; }
		.fgrid { grid-template-columns: 1fr 1fr; }
		.how { grid-template-columns: 1fr; }
		.hstep::after { display: none; }
		.cf1, .cf2 { display: none; }
	}
	@media (max-width: 560px) {
		.fgrid { grid-template-columns: 1fr; }
		/* stacked strip cells: the vertical divider becomes a horizontal one */
		.strip .cell { border-left: none; border-top: 1px solid var(--border); }
		.strip .cell:first-child { border-top: none; }
		/* CTA card: the wide download button (white-space: nowrap) breaks out of
		   the card — let button labels wrap and stack the row */
		.cta { padding: 0 16px 72px; }
		.cta-inner { padding: 56px 20px; }
		.cta-row { flex-direction: column; align-items: center; }
		.cta-row :global(.btn) { white-space: normal; text-align: center; justify-content: center; max-width: 100%; }
	}

	/* ---- dark-mode adjustments for page glue ---- */
	:global([data-theme="dark"]) .pill { color: oklch(0.83 0.08 275); }
	:global([data-theme="dark"]) .strip .v :global(em) { color: oklch(0.72 0.16 275); }
	:global([data-theme="dark"]) .eyebrow { color: oklch(0.74 0.14 275); }
	:global([data-theme="dark"]) .f .ic { color: oklch(0.78 0.12 275); }
	:global([data-theme="dark"]) .uc.remote .ticks :global(.ck) { color: oklch(0.78 0.12 275); }
	:global([data-theme="dark"]) .hstep .n { color: oklch(0.78 0.12 275); }
</style>
