<script lang="ts">
	import { site } from '$lib/config';
	import PulsarMark from './PulsarMark.svelte';

	type Props = { variant?: 'full' | 'minimal' };
	let { variant = 'full' }: Props = $props();
</script>

{#if variant === 'minimal'}
	<footer class="site minimal">
		<div class="wrap">
			© 2026 Pulsar · <span class="mono">{site.license} · v{site.version}</span> · Açık kaynak topluluğu
		</div>
	</footer>
{:else}
	<footer class="site">
		<div class="wrap">
			<div class="foot-grid">
				<div class="foot-col foot-about">
					<a class="brand" href="/">
						<PulsarMark size={28} title="Pulsar" />
						<span class="nm">Pulsar</span>
					</a>
					<p>
						Açık kaynaklı uzaktan masaüstü ve oyun streaming. Senin makinen, senin kuralların.
					</p>
				</div>
				<div class="foot-col">
					<h5>Ürün</h5>
					<a href="/#gaming">Uzaktan oyun</a>
					<a href="/#remote">Uzaktan masaüstü</a>
					<a href="/#features">Özellikler</a>
					<a href="/download">İndir</a>
				</div>
				<div class="foot-col">
					<h5>Kaynak</h5>
					<a href={site.links.docs}>Dokümantasyon</a>
					<a href={site.links.selfHostGuide}>Self-host kılavuzu</a>
					<a href={site.links.releaseNotes}>Sürüm notları</a>
					<a href={site.links.demoApp}>Demo app</a>
				</div>
				<div class="foot-col">
					<h5>Topluluk</h5>
					<a href={site.links.github} target="_blank" rel="noreferrer noopener">GitHub</a>
					<a href={site.links.discord} target="_blank" rel="noreferrer noopener">Discord</a>
					<a href={site.links.contribute}>Katkı sağla</a>
					<a href={site.links.license}>Lisans · {site.license}</a>
				</div>
			</div>
			<div class="foot-bottom">
				<span>© 2026 Pulsar. Açık kaynak topluluğu tarafından geliştirilir.</span>
				<span class="mono">{site.license} · v{site.version}</span>
			</div>
		</div>
	</footer>
{/if}

<style>
	footer.site {
		border-top: 1px solid var(--border);
		padding: 56px 0 40px;
		margin-top: 96px;
	}
	footer.site.minimal {
		padding: 32px 0;
		margin-top: 0;
		text-align: center;
		color: var(--text-faint);
		font-size: 13px;
	}
	.foot-grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr 1fr;
		gap: 32px;
	}
	.foot-col h5 {
		font-size: 12.5px;
		font-family: var(--font-mono);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-faint);
		margin-bottom: 14px;
	}
	.foot-col a:not(.brand) {
		display: block;
		font-size: 14px;
		color: var(--text-muted);
		text-decoration: none;
		padding: 5px 0;
	}
	.foot-col a:not(.brand):hover {
		color: var(--text);
	}
	.foot-about p {
		font-size: 14px;
		color: var(--text-muted);
		line-height: 1.6;
		margin: 14px 0 0;
		max-width: 34ch;
	}
	.foot-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 46px;
		padding-top: 26px;
		border-top: 1px solid var(--border);
		font-size: 13px;
		color: var(--text-faint);
	}
	.foot-bottom .mono {
		font-family: var(--font-mono);
	}

	@media (max-width: 940px) {
		.foot-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
