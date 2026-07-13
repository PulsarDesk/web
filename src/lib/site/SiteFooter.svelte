<script lang="ts">
	import PulsarMark from '$lib/ds/PulsarMark.svelte';
	import { t } from '$lib/i18n';
</script>

<footer class="site">
	<div class="wrap">
		<div class="fgrid2">
			<div class="fcol fabout">
				<a class="brand" href="/"><PulsarMark size={28} /><span class="nm">Pulsar</span></a>
				<p>{@html $t('foot.about')}</p>
			</div>
			<div class="fcol">
				<h5>{@html $t('foot.product')}</h5>
				<a href="/#gaming">{@html $t('foot.l.game')}</a>
				<a href="/#remote">{@html $t('foot.l.remote')}</a>
				<a href="/#features">{@html $t('foot.l.features')}</a>
				<a href="/download">{@html $t('foot.l.download')}</a>
			</div>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<div class="fcol">
				<h5>{@html $t('foot.resources')}</h5>
				<a href="#">{@html $t('foot.l.docs')}</a>
				<a href="#">{@html $t('foot.l.selfhost')}</a>
				<a href="#">{@html $t('foot.l.releases')}</a>
			</div>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<div class="fcol">
				<h5>{@html $t('foot.community')}</h5>
				<a href="https://github.com/PulsarDesk">GitHub</a>
				<a href="#">Discord</a>
				<a href="#">{@html $t('foot.l.contribute')}</a>
				<a href="#">{@html $t('foot.l.license')}</a>
			</div>
		</div>
		<div class="fbot">
			<span>{@html $t('foot.copy')}</span>
			<span class="tork">{@html $t('foot.tork')}</span>
		</div>
	</div>
</footer>
