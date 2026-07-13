<script lang="ts">
	import Badge from '$lib/ds/Badge.svelte';
	import Button from '$lib/ds/Button.svelte';
	import Card from '$lib/ds/Card.svelte';
	import Icon from '$lib/ds/Icon.svelte';
	import RecentRow from '$lib/ds/RecentRow.svelte';
	import ScreenHeader from '$lib/ds/ScreenHeader.svelte';
	import SegControl from '$lib/ds/SegControl.svelte';
	import { RECENTS, SELF_ID, type Recent } from '$lib/ds/data';
	import { t } from '$lib/i18n';

	/* The Connect (Bağlan) home screen: two cards side by side. Left — "this device"
	   shows the relay-issued device id and a one-time password to share. Right —
	   connect to a remote id with a field, a primary action, and recent connections.
	   The header toggles between Uzaktan masaüstü and Oyun akışı. */

	type ConnectMode = 'remote' | 'game';

	let {
		selfId = SELF_ID,
		recents = RECENTS,
		onConnect
	}: {
		selfId?: string;
		recents?: Recent[];
		onConnect?: (target: { name: string; id: string; type?: string }, mode: ConnectMode) => void;
	} = $props();

	let mode: ConnectMode = $state('remote');
	let target = $state('');
	let copied = $state(false);

	const pw = '7yf2-qk';

	const fmt = (v: string) =>
		v.replace(/\D/g, '').slice(0, 9).replace(/(\d{3})(?=\d)/g, '$1 ').trim();

	const enough = $derived(target.replace(/\D/g, '').length >= 6);

	const segOptions = $derived([
		{ value: 'remote', label: $t('ds.home.segRemote') },
		{ value: 'game', label: $t('ds.home.segGame') }
	]);

	const copyId = () => {
		copied = true;
		setTimeout(() => (copied = false), 1400);
	};

	const go = () => {
		if (enough) onConnect?.({ name: 'Uzak Cihaz', id: fmt(target), type: 'pc' }, mode);
	};
</script>

<div>
	<ScreenHeader title={$t('ds.home.title')} sub={$t('ds.home.sub')}>
		{#snippet right()}
			<SegControl
				value={mode}
				onchange={(v: string) => (mode = v as ConnectMode)}
				options={segOptions}
			/>
		{/snippet}
	</ScreenHeader>

	<!-- layout lives in the global .home-grid rule so small embeds can stack
	     the two cards with a media query (inline style would win over CSS) -->
	<div class="home-grid">
		<!-- This device -->
		<Card>
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;">
				<span
					style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint);"
				>
					{$t('ds.home.allowThis')}
				</span>
				<Badge tone="online">{$t('ds.home.ready')}</Badge>
			</div>
			<div style="font-size: 12.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 7px;">{$t('ds.home.deviceId')}</div>
			<div style="display: flex; align-items: center; gap: 10px;">
				<span
					style="font-family: var(--font-mono); font-size: 27px; font-weight: 500; letter-spacing: 0.04em; white-space: nowrap;"
				>
					{selfId}
				</span>
				<button type="button" class="icon-btn" onclick={copyId} title={$t('ds.home.copy')} style="margin-left: auto;">
					<Icon name={copied ? 'check' : 'copy'} size={17} />
				</button>
			</div>
			<div style="height: 1px; background: var(--border); margin: 20px 0;"></div>
			<div style="font-size: 12.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 7px;">
				{$t('ds.home.otp')}
			</div>
			<div style="display: flex; align-items: center; gap: 10px;">
				<span style="font-family: var(--font-mono); font-size: 22px; font-weight: 500; letter-spacing: 0.12em;">{pw}</span>
				<button type="button" class="icon-btn" title={$t('ds.home.renew')} style="margin-left: auto;">
					<Icon name="refresh" size={16} />
				</button>
			</div>
			<p style="font-size: 12.5px; color: var(--text-faint); margin-top: 16px; line-height: 1.5;">
				{$t('ds.home.explain')}
			</p>
		</Card>

		<!-- Connect to remote -->
		<Card style="display: flex; flex-direction: column;">
			<span
				style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 18px;"
			>
				{mode === 'game' ? $t('ds.home.startGame') : $t('ds.home.connectRemote')}
			</span>
			<label
				for="ds-target-id"
				style="font-size: 12.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 7px;"
			>
				{$t('ds.home.deviceId')}
			</label>
			<div class="field">
				<Icon name="connect" size={17} style="color: var(--text-faint);" />
				<input
					id="ds-target-id"
					value={target}
					oninput={(e) => {
						target = fmt(e.currentTarget.value);
						e.currentTarget.value = target;
					}}
					placeholder="000 000 000"
					onkeydown={(e) => e.key === 'Enter' && go()}
					style="border: none; outline: none; background: transparent; font-family: var(--font-mono); font-size: 19px; width: 100%; color: var(--text); letter-spacing: 0.06em;"
				/>
			</div>
			<Button
				variant="primary"
				icon={mode === 'game' ? 'gaming' : 'connect'}
				onclick={go}
				disabled={!enough}
				style="justify-content: center; margin-top: 12px;"
			>
				{mode === 'game' ? $t('ds.home.btnGame') : $t('ds.home.btnConnect')}
			</Button>

			<div style="margin-top: auto; padding-top: 20px;">
				<div
					style="font-size: 11.5px; color: var(--text-faint); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px;"
				>
					{$t('ds.home.recent')}
				</div>
				<div style="display: flex; flex-direction: column; gap: 6px;">
					{#each recents.slice(0, 3) as r (r.id)}
						<RecentRow
							name={$t(r.nameKey)}
							id={r.id}
							tone={r.tone}
							onclick={() => onConnect?.({ name: $t(r.nameKey), id: r.id }, mode)}
						/>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</div>
