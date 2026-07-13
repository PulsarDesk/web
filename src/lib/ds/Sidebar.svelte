<script lang="ts">
	import Avatar from '$lib/ds/Avatar.svelte';
	import Icon from '$lib/ds/Icon.svelte';
	import IDDisplay from '$lib/ds/IDDisplay.svelte';
	import PulsarMark from '$lib/ds/PulsarMark.svelte';
	import { NAV, SELF_ID, type NavId } from '$lib/ds/data';
	import { t } from '$lib/i18n';

	let { active = 'home', selfId = SELF_ID }: { active?: NavId; selfId?: string } = $props();
</script>

<aside
	style="width: 224px; flex: none; background: var(--surface-2); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 14px 12px;"
>
	<div style="display: flex; align-items: center; gap: 10px; padding: 6px 8px 16px;">
		<PulsarMark size={26} />
		<span
			style="font-family: var(--font-display); font-weight: 600; font-size: 18px; letter-spacing: -0.03em;"
			>Pulsar</span
		>
	</div>
	<nav style="display: flex; flex-direction: column; gap: 3px;">
		{#each NAV as n (n.id)}
			{@const on = active === n.id}
			<button
				type="button"
				style="display: flex; align-items: center; gap: 11px; padding: 10px 11px; border: none; border-radius: var(--r-sm); cursor: pointer; text-align: left; font-family: var(--font-sans); font-size: 14.5px; font-weight: {on
					? 600
					: 500}; color: {on ? 'var(--accent-press)' : 'var(--text-muted)'}; background: {on
					? 'var(--accent-soft)'
					: 'transparent'}; transition: all var(--dur) var(--ease);"
			>
				<Icon name={n.icon} size={19} stroke={on ? 2.1 : 1.9} />
				{$t(n.labelKey)}
			</button>
		{/each}
	</nav>
	<div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px;">
		<IDDisplay id={selfId} label={$t('ds.side.selfIdLabel')} />
		<div style="display: flex; align-items: center; gap: 9px; padding: 4px 6px;">
			<Avatar name={$t('ds.side.you')} tone="accent" size={32} />
			<div style="line-height: 1.2;">
				<div style="font-size: 13px; font-weight: 600;">{$t('ds.side.thisDevice')}</div>
				<div style="font-size: 11.5px; color: var(--ok); display: flex; align-items: center; gap: 5px;">
					<span style="width: 6px; height: 6px; border-radius: 50%; background: var(--ok);"></span>
					{$t('ds.side.online')}
				</div>
			</div>
		</div>
	</div>
</aside>
