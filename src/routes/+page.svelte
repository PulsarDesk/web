<script lang="ts">
	import { site } from '$lib/config';
	import { reveal } from '$lib/actions/reveal';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';

	const title = 'Pulsar — Açık kaynak uzaktan masaüstü & oyun streaming';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
</svelte:head>

<span id="top" aria-hidden="true"></span>

<SiteHeader variant="home" />

<!-- ================= HERO ================= -->
<section class="hero">
	<div class="wrap">
		<div class="hero-copy">
			<span class="badge-pill"><span class="dot"></span>v1.0 · Açık kaynak · Self-host edilebilir</span>
			<h1 class="hero-title">Uzaktaki makinen,<br /><span class="grad">yanındaymış gibi.</span></h1>
			<p class="sub">
				Pulsar; Parsec, TeamViewer ve RustDesk’e ücretsiz, açık kaynaklı bir alternatif. Tek
				uygulamada düşük gecikmeli uzaktan oyun <em>ve</em> güvenli uzaktan masaüstü erişimi. macOS,
				Windows ve Linux’ta çalışır.
			</p>
			<div class="hero-cta">
				<a class="btn btn-primary btn-lg" href="/download">
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
					Ücretsiz indir
				</a>
				<a class="btn btn-ghost btn-lg" href={site.links.demoApp}>
					Demo’yu çalıştır
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M5 12h14m-6-6l6 6-6 6" />
					</svg>
				</a>
			</div>
			<div class="os-mini">
				<span>Çalıştığı yerler:</span>
				<span class="seq mono">macOS · Windows · Linux</span>
			</div>
		</div>

		<div class="hero-art">
			<div class="pulse-stage" aria-hidden="true">
				<span class="pulse-ring"></span><span class="pulse-ring"></span>
				<span class="pulse-ring"></span><span class="pulse-ring"></span>
			</div>
			<div class="float-badge fb-top">
				<span class="dot" style="background:var(--cyan)"></span>Stream · 60 fps · 7 ms
			</div>
			<div class="float-badge fb-bot">
				<span class="dot" style="background:var(--ok)"></span>Uçtan uca şifreli
			</div>
			<div class="device">
				<div class="titlebar">
					<div class="tl">
						<i style="background:#ED6A5E"></i><i style="background:#F4BF4F"></i><i
							style="background:#61C554"
						></i>
					</div>
					<span class="tdesc">Pulsar</span>
				</div>
				<div class="body">
					<div class="selfid">Bu cihazın kimliği</div>
					<div class="bigid">482 913 056</div>
					<div class="sep"></div>
					<span class="fl">Uzak cihaza bağlan</span>
					<div class="input"><span class="ph">ID gir…</span></div>
					<button class="btn btn-primary connect-btn">Bağlan</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ================= STATS ================= -->
<div class="stats">
	<div class="wrap">
		<div class="stat">
			<div class="v">&lt;<span class="u">8</span> ms</div>
			<div class="l">Yerel ağda ek gecikme</div>
		</div>
		<div class="stat">
			<div class="v">4K · <span class="u">120</span>fps</div>
			<div class="l">Donanımsal kodlama</div>
		</div>
		<div class="stat">
			<div class="v"><span class="u">3</span> platform</div>
			<div class="l">macOS · Windows · Linux</div>
		</div>
		<div class="stat">
			<div class="v"><span class="u">0</span> ₺</div>
			<div class="l">Sonsuza dek ücretsiz · GPLv3</div>
		</div>
	</div>
</div>

<!-- ================= DUAL USE ================= -->
<section class="s" id="gaming">
	<div class="wrap">
		<div class="s-head-center reveal" use:reveal>
			<span class="s-eyebrow">Tek uygulama · iki süper güç</span>
			<h2 class="s-title">Oyna ya da yönet — aynı bağlantı.</h2>
			<p class="s-lede">
				Pulsar, ister kanepeden masaüstü PC’nde oyun oynamak, ister sınırın öbür ucundaki bir
				sunucuyu yönetmek için olsun, aynı güvenli kanalı kullanır.
			</p>
		</div>
		<div class="dual">
			<div class="use-card game reveal" use:reveal={0}>
				<div class="glow"></div>
				<div class="ico">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--cyan)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<rect x="2" y="6" width="20" height="12" rx="4" />
						<path d="M7 10v4M5 12h4" />
						<circle cx="16" cy="11" r="1" />
						<circle cx="18.5" cy="13.5" r="1" />
					</svg>
				</div>
				<h3>Uzaktan oyun</h3>
				<p>
					Sunshine/Parsec tarzı, ev içi ve internet üzerinden düşük gecikmeli oyun akışı. Kontrolcü,
					dokunmatik ve klavye/fare tam destekli.
				</p>
				<ul>
					<li><span class="ck">✓</span> Donanımsal H.265 / AV1 kodlama</li>
					<li><span class="ck">✓</span> 120 fps’e kadar, HDR &amp; ultra-wide</li>
					<li><span class="ck">✓</span> Xbox / PlayStation kontrolcü eşleme</li>
					<li><span class="ck">✓</span> Otomatik bit hızı &amp; adaptif çözünürlük</li>
				</ul>
			</div>
			<div class="use-card remote reveal" id="remote" use:reveal={1}>
				<div class="glow"></div>
				<div class="ico">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--accent)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<rect x="3" y="4" width="18" height="13" rx="2" />
						<path d="M8 20h8M12 17v3" />
					</svg>
				</div>
				<h3>Uzaktan masaüstü &amp; yönetim</h3>
				<p>
					TeamViewer, AnyDesk ve RustDesk gibi; ID + tek seferlik şifre ile saniyeler içinde bağlan.
					IT desteği ve sunucu yönetimi için ideal.
				</p>
				<ul>
					<li><span class="ck">✓</span> Gözetimsiz erişim &amp; adres defteri</li>
					<li><span class="ck">✓</span> Dosya transferi &amp; pano paylaşımı</li>
					<li><span class="ck">✓</span> Çoklu monitör, uzaktan yeniden başlatma</li>
					<li><span class="ck">✓</span> Oturum kaydı &amp; izin tabanlı erişim</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ================= FEATURES ================= -->
<section
	class="s feat-section"
	id="features"
	style="background:var(--surface); border-top:1px solid var(--border); border-bottom:1px solid var(--border);"
>
	<div class="wrap">
		<div class="s-head-center reveal" use:reveal>
			<span class="s-eyebrow">Özellikler</span>
			<h2 class="s-title">Profesyonel araçlardan ödün vermeden, açık kaynak.</h2>
		</div>
		<div class="feat-grid">
			<div class="feat reveal" use:reveal={0}>
				<div class="fi">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M13 2L3 14h7l-1 8 10-12h-7z" />
					</svg>
				</div>
				<h4>Önce P2P, sonra relay</h4>
				<p>
					Pulsar her zaman önce doğrudan eşler arası (P2P) bağlanmayı dener; NAT/güvenlik duvarı
					engellerse otomatik olarak relay’e düşer. Bağlantı hiç kopmaz.
				</p>
			</div>
			<div class="feat reveal" use:reveal={1}>
				<div class="fi">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
					</svg>
				</div>
				<h4>Uçtan uca şifreli</h4>
				<p>Her oturum cihazlar arasında uçtan uca şifrelenir. Trafik hiçbir sunucuda çözülmez.</p>
			</div>
			<div class="feat reveal" use:reveal={2}>
				<div class="fi">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<rect x="3" y="3" width="18" height="18" rx="2" />
						<path d="M3 9h18M9 21V9" />
					</svg>
				</div>
				<h4>Self-host relay &amp; ID</h4>
				<p>
					Cihaz kimliğin relay (rendezvous) sunucusundan alınır. Kendi sunucunu çalıştır — kimlik
					dağıtımı ve yedek aktarım tamamen sende.
				</p>
			</div>
			<div class="feat reveal" use:reveal={0}>
				<div class="fi">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M4 16V6a2 2 0 012-2h12a2 2 0 012 2v10M2 20h20M9 8h6" />
					</svg>
				</div>
				<h4>Çoklu monitör</h4>
				<p>
					Uzak makinedeki tüm ekranları gör, aralarında geçiş yap veya hepsini tek pencerede yan yana
					aç.
				</p>
			</div>
			<div class="feat reveal" use:reveal={1}>
				<div class="fi">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M14 3v4a1 1 0 001 1h4M5 3h9l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
						<path d="M9 13l2 2 4-4" />
					</svg>
				</div>
				<h4>Dosya transferi</h4>
				<p>Sürükle-bırak ile iki yönlü dosya aktarımı, pano senkronizasyonu ve oturum içi sohbet.</p>
			</div>
			<div class="feat reveal" use:reveal={2}>
				<div class="fi">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
					</svg>
				</div>
				<h4>Tamamen açık</h4>
				<p>
					Tüm kaynak kod GitHub’da, GPLv3 lisansı altında. Denetlenebilir, fork’lanabilir, topluluk
					odaklı.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ================= SECURITY ================= -->
<section class="s" id="security">
	<div class="wrap">
		<div class="sec-split">
			<div class="reveal" use:reveal={0}>
				<span class="s-eyebrow">Güvenlik &amp; gizlilik</span>
				<h2 class="s-title">Senin makinen, senin kuralların.</h2>
				<p class="s-lede">
					Pulsar varsayılan olarak gizliliği korur. Hesap zorunlu değildir, telemetri yoktur ve
					istersen tüm altyapıyı kendin barındırırsın.
				</p>
				<ul class="sec-list">
					<li>
						<div class="si">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<rect x="5" y="11" width="14" height="10" rx="2" />
								<path d="M8 11V7a4 4 0 018 0v4" />
							</svg>
						</div>
						<div>
							<h4>Tek seferlik şifre + kalıcı erişim</h4>
							<p>
								Anlık destek için geçici şifre, kendi cihazların için gözetimsiz kalıcı erişim.
							</p>
						</div>
					</li>
					<li>
						<div class="si">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
								<path d="M9 12l2 2 4-4" />
							</svg>
						</div>
						<div>
							<h4>Sıfır-bilgi mimarisi</h4>
							<p>
								Anahtarlar yalnızca cihazlarda üretilir; relay sunucusu yalnızca şifreli paketleri
								iletir.
							</p>
						</div>
					</li>
					<li>
						<div class="si">
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M12 3v18M3 7l9-4 9 4M5 9v8l7 3 7-3V9" />
							</svg>
						</div>
						<div>
							<h4>İzin tabanlı erişim</h4>
							<p>Her bağlantıda kontrol, dosya, ses ve pano izinlerini tek tek aç/kapat.</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="sec-visual reveal" use:reveal={1}>
				<div class="term">
					<div><span class="c"># Kendi relay sunucunu çalıştır</span></div>
					<div><span class="g">$</span> <span class="w">docker run -d \</span></div>
					<div>&nbsp;&nbsp;<span class="w">-p 21116:21116 \</span></div>
					<div>&nbsp;&nbsp;<span class="a">pulsar/relay:latest</span></div>
					<div>&nbsp;</div>
					<div><span class="c"># Eşleştirme aç</span></div>
					<div><span class="g">✓</span> <span class="w">relay</span> <span class="c">listening on :21116</span></div>
					<div>
						<span class="g">✓</span> <span class="w">device</span>
						<span class="c">registered · id</span> <span class="a">482 913 056</span>
					</div>
					<div>
						<span class="a">→</span> <span class="w">peer found</span>
						<span class="c">· trying direct P2P…</span>
					</div>
					<div>
						<span class="g">✓</span> <span class="w">P2P</span>
						<span class="c">hole-punch ok · relay bypassed</span>
					</div>
					<div>
						<span class="g">✓</span> <span class="w">session</span>
						<span class="c">e2e-encrypted · 7 ms</span>
					</div>
					<div>&nbsp;</div>
					<div><span class="c"># Hiçbir veri buluta gitmez.</span></div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ================= HOW IT WORKS ================= -->
<section
	class="s steps-section"
	style="background:var(--surface); border-top:1px solid var(--border); border-bottom:1px solid var(--border);"
>
	<div class="wrap">
		<div class="s-head-center reveal" use:reveal>
			<span class="s-eyebrow">Nasıl çalışır</span>
			<h2 class="s-title">Üç adımda bağlan.</h2>
		</div>
		<div class="steps">
			<div class="step reveal" use:reveal={0}>
				<div class="n">1</div>
				<h4>İndir &amp; aç</h4>
				<p>
					Pulsar’ı her iki cihaza da kur. Uygulama relay (rendezvous) sunucusuna kaydolur ve sana
					benzersiz bir cihaz kimliği (ID) atar.
				</p>
			</div>
			<div class="step reveal" use:reveal={1}>
				<div class="n">2</div>
				<h4>ID’yi paylaş</h4>
				<p>Bağlanmak istediğin cihazın 9 haneli ID’sini ve şifresini gir. Hesap açmaya gerek yok.</p>
			</div>
			<div class="step reveal" use:reveal={2}>
				<div class="n">3</div>
				<h4>Bağlan &amp; kullan</h4>
				<p>
					Pulsar önce doğrudan P2P dener, gerekirse relay’e geçer — her iki durumda da uçtan uca
					şifreli. Saniyeler içinde bağlanırsın.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ================= DOWNLOAD BAND ================= -->
<section class="s">
	<div class="dl-band">
		<div class="dl-inner reveal" use:reveal>
			<h2>Bugün bağlanmaya başla.</h2>
			<p>Ücretsiz, açık kaynak, reklamsız. Kredi kartı yok, hesap yok.</p>
			<div class="dl-os">
				<a class="primary" href="/download">
					<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"
						/>
					</svg>macOS
				</a>
				<a href="/download">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M3 4.5l8-1.1v8.1H3zm0 15l8 1.1v-8.1H3zm9 1.2l9 1.3V12.5h-9zm0-17.4v8.7h9V3z" />
					</svg>Windows
				</a>
				<a href="/download">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M12 2c-1.5 0-2.5 1.3-2.5 3 0 1 .2 1.7.2 2.5 0 1-1.5 2.3-2.2 4-.6 1.5-.4 3-.8 3.8-.5 1-1.4 1.5-1.4 2.3 0 .6.5.9 1.2 1 .8.2 1.8.6 2.6 1.3.6.5 1.4.6 2 .6.8 0 1.4-.3 1.9-.7.8-.6 1.7-1 2.4-1.2.7-.2 1.2-.5 1.2-1.1 0-.7-.8-1.2-1.3-2.2-.4-.8-.3-2.3-.8-3.8-.7-1.7-2.2-3-2.2-4 0-.8.2-1.5.2-2.5 0-1.7-1-3-2.5-3z"
						/>
					</svg>Linux
				</a>
			</div>
		</div>
	</div>
</section>

<SiteFooter variant="full" />

<style>
	/* ============ HERO ============ */
	.hero {
		position: relative;
		padding: 84px 0 60px;
		overflow: hidden;
	}
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			radial-gradient(820px 460px at 84% 8%, var(--accent-soft) 0%, transparent 58%),
			radial-gradient(640px 420px at 6% 96%, var(--cyan-soft) 0%, transparent 52%);
	}
	/* faint grid */
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0.5;
		-webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 0%, transparent 75%);
		mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 0%, transparent 75%);
		background-image:
			linear-gradient(var(--border) 1px, transparent 1px),
			linear-gradient(90deg, var(--border) 1px, transparent 1px);
		background-size: 56px 56px;
	}
	.hero .wrap {
		position: relative;
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 56px;
		align-items: center;
	}
	.badge-pill {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-family: var(--font-mono);
		font-size: 12.5px;
		letter-spacing: 0.02em;
		color: var(--accent-press);
		background: var(--accent-soft);
		border: 1px solid var(--accent-soft-2);
		padding: 7px 13px;
		border-radius: var(--r-pill);
		margin-bottom: 26px;
	}
	.badge-pill .dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 0 0 var(--accent-ring);
		animation: pbeat 2s ease-out infinite;
	}
	@keyframes pbeat {
		0% {
			box-shadow: 0 0 0 0 var(--accent-ring);
		}
		70% {
			box-shadow: 0 0 0 9px transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
	h1.hero-title {
		font-size: clamp(38px, 5vw, 60px);
		line-height: 1.12;
		letter-spacing: -0.035em;
		max-width: 15ch;
	}
	h1.hero-title .grad {
		background: linear-gradient(110deg, var(--accent) 10%, var(--cyan) 90%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.hero p.sub {
		font-size: 19px;
		line-height: 1.55;
		color: var(--text-muted);
		max-width: 50ch;
		margin: 26px 0 0;
	}
	.hero-cta {
		display: flex;
		gap: 13px;
		margin-top: 34px;
		flex-wrap: wrap;
	}
	.os-mini {
		display: flex;
		gap: 16px;
		margin-top: 22px;
		align-items: center;
		color: var(--text-faint);
		font-size: 13px;
	}
	.os-mini .seq {
		display: flex;
		gap: 10px;
	}

	/* hero device card */
	.hero-art {
		position: relative;
	}
	.pulse-stage {
		position: absolute;
		inset: -40px;
		display: grid;
		place-items: center;
		pointer-events: none;
		z-index: 0;
	}
	.pulse-ring {
		position: absolute;
		border: 1.5px solid var(--accent);
		border-radius: 50%;
		width: 120px;
		height: 120px;
		opacity: 0;
		animation: pulseout 4s ease-out infinite;
	}
	.pulse-ring:nth-child(2) {
		animation-delay: 1s;
	}
	.pulse-ring:nth-child(3) {
		animation-delay: 2s;
	}
	.pulse-ring:nth-child(4) {
		animation-delay: 3s;
	}
	@keyframes pulseout {
		0% {
			transform: scale(0.4);
			opacity: 0.5;
		}
		100% {
			transform: scale(4.2);
			opacity: 0;
		}
	}

	.device {
		position: relative;
		z-index: 1;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
	}
	.device .titlebar {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 11px 14px;
		border-bottom: 1px solid var(--border);
		background: var(--surface-2);
	}
	.device .tl {
		display: flex;
		gap: 6px;
	}
	.device .tl i {
		width: 11px;
		height: 11px;
		border-radius: 50%;
		display: block;
	}
	.device .tdesc {
		font-family: var(--font-mono);
		font-size: 11.5px;
		color: var(--text-faint);
		margin-left: 6px;
	}
	.device .body {
		padding: 26px 24px 28px;
	}
	.device .selfid {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-faint);
		margin-bottom: 8px;
	}
	.device .bigid {
		font-family: var(--font-mono);
		font-size: 30px;
		font-weight: 500;
		letter-spacing: 0.06em;
		color: var(--text);
	}
	.device .sep {
		height: 1px;
		background: var(--border);
		margin: 22px 0;
	}
	.device .fl {
		display: block;
		font-size: 12.5px;
		font-weight: 600;
		color: var(--text-muted);
		margin-bottom: 8px;
	}
	.device .input {
		display: flex;
		align-items: center;
		gap: 10px;
		border: 1px solid var(--border-strong);
		border-radius: var(--r);
		padding: 12px 14px;
		font-family: var(--font-mono);
		font-size: 18px;
		color: var(--text);
		background: var(--surface);
	}
	.device .input .ph {
		color: var(--text-faint);
	}
	.device .connect-btn {
		width: 100%;
		margin-top: 14px;
		justify-content: center;
	}
	.float-badge {
		position: absolute;
		z-index: 2;
		background: var(--surface);
		border: 1px solid var(--border);
		box-shadow: var(--shadow);
		border-radius: var(--r);
		padding: 10px 13px;
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 13px;
		font-weight: 600;
	}
	.float-badge .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}
	.fb-top {
		top: -18px;
		right: 24px;
	}
	.fb-bot {
		bottom: 30px;
		left: -26px;
	}

	/* ============ STAT STRIP ============ */
	.stats {
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		background: var(--surface);
	}
	.stats .wrap {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	.stat {
		padding: 30px 24px;
		border-left: 1px solid var(--border);
	}
	.stat:first-child {
		border-left: none;
	}
	.stat .v {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 30px;
		letter-spacing: -0.02em;
	}
	.stat .v :global(.u) {
		color: var(--accent);
	}
	.stat .l {
		font-size: 13.5px;
		color: var(--text-muted);
		margin-top: 5px;
	}

	/* ============ SECTION SCAFFOLD ============ */
	section.s {
		padding: 96px 0;
	}
	.s-eyebrow {
		font-family: var(--font-mono);
		font-size: 12.5px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.s-title {
		font-size: clamp(28px, 3.6vw, 40px);
		letter-spacing: -0.03em;
		margin-top: 14px;
		max-width: 18ch;
	}
	.s-lede {
		font-size: 17.5px;
		line-height: 1.55;
		color: var(--text-muted);
		margin-top: 16px;
		max-width: 54ch;
	}
	.s-head-center {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.s-head-center .s-title,
	.s-head-center .s-lede {
		margin-left: auto;
		margin-right: auto;
	}

	/* dual use */
	.dual {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 22px;
		margin-top: 52px;
	}
	.use-card {
		position: relative;
		border: 1px solid var(--border);
		border-radius: var(--r-xl);
		padding: 34px;
		overflow: hidden;
		background: var(--surface);
		box-shadow: var(--shadow-sm);
		transition:
			transform var(--dur) var(--ease),
			box-shadow var(--dur) var(--ease);
	}
	.use-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}
	.use-card .ico {
		width: 46px;
		height: 46px;
		border-radius: var(--r);
		display: grid;
		place-items: center;
		margin-bottom: 20px;
	}
	.use-card.game .ico {
		background: var(--cyan-soft);
	}
	.use-card.remote .ico {
		background: var(--accent-soft);
	}
	.use-card h3 {
		font-size: 23px;
		letter-spacing: -0.02em;
	}
	.use-card p {
		color: var(--text-muted);
		font-size: 15.5px;
		line-height: 1.6;
		margin: 12px 0 20px;
	}
	.use-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 11px;
	}
	.use-card li {
		display: flex;
		align-items: center;
		gap: 11px;
		font-size: 14.5px;
		color: var(--text);
	}
	.use-card li .ck {
		width: 18px;
		height: 18px;
		flex: none;
		border-radius: 50%;
		display: grid;
		place-items: center;
	}
	.game li .ck {
		background: var(--cyan-soft);
		color: var(--cyan);
	}
	.remote li .ck {
		background: var(--accent-soft);
		color: var(--accent);
	}
	.use-card .glow {
		position: absolute;
		inset: auto -60px -80px auto;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.5;
		pointer-events: none;
	}
	.game .glow {
		background: var(--cyan-soft);
	}
	.remote .glow {
		background: var(--accent-soft-2);
	}

	/* features grid */
	.feat-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 18px;
		margin-top: 52px;
	}
	.feat {
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		padding: 26px;
		background: var(--surface);
		transition:
			border-color var(--dur),
			transform var(--dur) var(--ease);
	}
	.feat:hover {
		border-color: var(--border-strong);
		transform: translateY(-3px);
	}
	.feat .fi {
		width: 38px;
		height: 38px;
		border-radius: var(--r-sm);
		background: var(--surface-3);
		display: grid;
		place-items: center;
		color: var(--accent);
		margin-bottom: 16px;
	}
	.feat h4 {
		font-size: 17px;
		letter-spacing: -0.01em;
	}
	.feat p {
		font-size: 14px;
		line-height: 1.6;
		color: var(--text-muted);
		margin-top: 9px;
	}

	/* security split */
	.sec-split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 56px;
		align-items: center;
	}
	.sec-visual {
		background: oklch(0.21 0.02 268);
		border-radius: var(--r-xl);
		padding: 36px;
		color: #fff;
		box-shadow: var(--shadow-lg);
		position: relative;
		overflow: hidden;
	}
	.sec-visual::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(480px 220px at 80% 0%, oklch(0.555 0.205 272 / 0.4), transparent 60%);
		pointer-events: none;
	}
	.sec-visual .term {
		font-family: var(--font-mono);
		font-size: 13px;
		line-height: 1.85;
		position: relative;
		z-index: 1;
	}
	.sec-visual .term .c {
		color: oklch(0.7 0.02 268);
	}
	.sec-visual .term .g {
		color: oklch(0.78 0.13 158);
	}
	.sec-visual .term .a {
		color: oklch(0.78 0.14 272);
	}
	.sec-visual .term .w {
		color: #fff;
	}
	.sec-list {
		list-style: none;
		padding: 0;
		margin: 28px 0 0;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.sec-list li {
		display: flex;
		gap: 14px;
	}
	.sec-list .si {
		width: 36px;
		height: 36px;
		flex: none;
		border-radius: var(--r-sm);
		background: var(--accent-soft);
		color: var(--accent);
		display: grid;
		place-items: center;
	}
	.sec-list h4 {
		font-size: 16px;
	}
	.sec-list p {
		font-size: 14px;
		color: var(--text-muted);
		margin-top: 5px;
		line-height: 1.55;
	}

	/* how it works */
	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 52px;
		counter-reset: st;
	}
	.step {
		position: relative;
		padding-top: 18px;
	}
	.step .n {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--accent);
		border: 1px solid var(--accent-soft-2);
		width: 34px;
		height: 34px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		margin-bottom: 18px;
	}
	.step h4 {
		font-size: 18px;
	}
	.step p {
		font-size: 14.5px;
		color: var(--text-muted);
		margin-top: 9px;
		line-height: 1.6;
	}
	.step::after {
		content: '';
		position: absolute;
		top: 35px;
		left: 46px;
		right: -10px;
		height: 1px;
		background: linear-gradient(90deg, var(--border), transparent);
	}
	.step:last-child::after {
		display: none;
	}

	/* download band */
	.dl-band {
		margin: 0 auto;
		max-width: 1180px;
	}
	.dl-inner {
		position: relative;
		overflow: hidden;
		background: linear-gradient(120deg, oklch(0.555 0.205 272), oklch(0.5 0.17 240));
		border-radius: var(--r-xl);
		padding: 64px 56px;
		text-align: center;
		color: #fff;
		box-shadow: var(--shadow-lg);
	}
	.dl-inner::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.5;
		background-image:
			linear-gradient(#fff2 1px, transparent 1px),
			linear-gradient(90deg, #fff2 1px, transparent 1px);
		background-size: 42px 42px;
		-webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 0%, #000, transparent 70%);
		mask-image: radial-gradient(ellipse 70% 80% at 50% 0%, #000, transparent 70%);
	}
	.dl-inner h2 {
		font-size: clamp(30px, 4vw, 46px);
		letter-spacing: -0.03em;
		position: relative;
	}
	.dl-inner p {
		font-size: 17px;
		opacity: 0.9;
		margin-top: 14px;
		position: relative;
	}
	.dl-os {
		display: flex;
		gap: 12px;
		justify-content: center;
		margin-top: 30px;
		position: relative;
		flex-wrap: wrap;
	}
	.dl-os a {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: oklch(1 0 0 / 0.14);
		border: 1px solid oklch(1 0 0 / 0.25);
		color: #fff;
		padding: 13px 20px;
		border-radius: var(--r);
		font-weight: 600;
		font-size: 15px;
		text-decoration: none;
		backdrop-filter: blur(6px);
		transition: background var(--dur);
	}
	.dl-os a:hover {
		background: oklch(1 0 0 / 0.24);
	}
	.dl-os a.primary {
		background: #fff;
		color: var(--accent-press);
		border-color: #fff;
	}

	@media (max-width: 940px) {
		.hero .wrap {
			grid-template-columns: 1fr;
			gap: 48px;
		}
		.hero-art {
			max-width: 460px;
		}
		.stats .wrap {
			grid-template-columns: 1fr 1fr;
		}
		.stat:nth-child(3) {
			border-left: none;
		}
		.dual,
		.sec-split,
		.steps {
			grid-template-columns: 1fr;
		}
		.feat-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 560px) {
		.feat-grid {
			grid-template-columns: 1fr;
		}
		.stats .wrap {
			grid-template-columns: 1fr;
		}
		.stat {
			border-left: none;
		}
	}
</style>
