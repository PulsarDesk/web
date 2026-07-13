<script lang="ts">
	import FauxDesktop from '$lib/ds/FauxDesktop.svelte';
	import Icon from '$lib/ds/Icon.svelte';
	import ToolButton from '$lib/ds/ToolButton.svelte';

	/* The active remote-desktop / game-stream session view: a full-bleed remote
	   viewport (FauxDesktop) with a dark glassy floating toolbar (peer name,
	   live fps/latency/bitrate, transport badge, and per-mode tools), a quality
	   pill bottom-right, and a slide-in files/chat side panel. */

	interface SessionStats {
		fps: number;
		latency: number;
		bitrate: number;
	}

	let {
		target = { name: 'Ev PC’si', id: '719 204 663' },
		mode = 'remote',
		stats = { fps: 60, latency: 7, bitrate: 24 },
		conn = 'p2p',
		onEnd
	}: {
		target?: { name: string; id: string };
		mode?: 'remote' | 'game';
		stats?: SessionStats;
		conn?: 'p2p' | 'relay';
		onEnd?: () => void;
	} = $props();

	let panel: 'files' | 'chat' | null = $state(null);
	let quality = $state('auto');
	let fs = $state(false);

	const QUALITIES = [
		{ v: 'auto', l: 'Oto' },
		{ v: 'hq', l: '4K' },
		{ v: 'fast', l: 'Hızlı' }
	];

	const FILES = [
		{ n: 'rapor-q3.pdf', s: '2.4 MB', d: '↓' },
		{ n: 'build.zip', s: '48 MB', d: '↑' }
	];
</script>

<div style="position: absolute; inset: 0; background: #000; display: flex; flex-direction: column;">
	<div style="position: relative; flex: 1; overflow: hidden;">
		<FauxDesktop {mode} />

		<!-- floating toolbar -->
		<div
			style="position: absolute; top: 14px; left: 50%; transform: translateX(-50%); z-index: 3; display: flex; align-items: center; gap: 4px; padding: 7px 9px; border-radius: 14px; background: oklch(0.18 0.02 262 / 0.82); backdrop-filter: blur(16px); border: 1px solid oklch(1 0 0 / 0.12); box-shadow: 0 10px 40px -8px rgba(0,0,0,0.5);"
		>
			<div
				style="display: flex; align-items: center; gap: 9px; padding: 0 10px 0 6px; border-right: 1px solid oklch(1 0 0 / 0.12); margin-right: 4px;"
			>
				<span
					style="width: 7px; height: 7px; border-radius: 50%; background: var(--ok); box-shadow: 0 0 8px var(--ok);"
				></span>
				<div style="line-height: 1.15;">
					<div style="font-size: 12.5px; font-weight: 700; color: #fff; white-space: nowrap;">{target.name}</div>
					<div
						style="font-family: var(--font-mono); font-size: 10px; color: oklch(0.8 0.05 215); white-space: nowrap;"
					>
						{stats.fps} fps · {stats.latency} ms · {stats.bitrate} Mbps
					</div>
				</div>
				<span
					style="font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em; padding: 3px 7px; border-radius: 6px; white-space: nowrap; background: {conn ===
					'p2p'
						? 'oklch(0.6 0.18 272 / 0.32)'
						: 'oklch(0.7 0.02 260 / 0.25)'}; color: {conn === 'p2p' ? 'oklch(0.86 0.09 282)' : 'oklch(0.85 0.01 260)'};"
				>
					{conn === 'p2p' ? 'DOĞRUDAN P2P' : 'RELAY'}
				</span>
			</div>
			{#if mode === 'remote'}
				<ToolButton icon="monitor" label="Ekran 1" active />
				<ToolButton icon="clipboard" label="Pano" />
				<ToolButton
					icon="file"
					label="Dosya"
					active={panel === 'files'}
					onclick={() => (panel = panel === 'files' ? null : 'files')}
				/>
				<ToolButton icon="keyboard" label="Klavye" />
				<ToolButton icon="power" label="Ctrl+Alt+Del" />
			{/if}
			{#if mode === 'game'}
				<ToolButton icon="gaming" label="Kontrolcü" active />
				<ToolButton icon="speaker" label="Ses" />
				<ToolButton icon="bolt" label="Düşük gec." active />
			{/if}
			<ToolButton
				icon="chat"
				label="Sohbet"
				active={panel === 'chat'}
				onclick={() => (panel = panel === 'chat' ? null : 'chat')}
			/>
			<ToolButton icon="expand" label="Tam ekran" active={fs} onclick={() => (fs = !fs)} />
			<div
				style="display: flex; align-items: center; gap: 2px; margin-left: 4px; padding-left: 4px; border-left: 1px solid oklch(1 0 0 / 0.12);"
			>
				<ToolButton icon="x" label="Bitir" danger onclick={onEnd} />
			</div>
		</div>

		<!-- quality pill bottom-right -->
		<div
			style="position: absolute; bottom: 14px; right: 14px; z-index: 3; display: flex; gap: 8px; align-items: center; padding: 6px 8px 6px 12px; border-radius: 12px; background: oklch(0.18 0.02 262 / 0.82); backdrop-filter: blur(16px); border: 1px solid oklch(1 0 0 / 0.12);"
		>
			<span style="font-size: 11.5px; font-weight: 600; color: oklch(0.85 0.01 260);">Kalite</span>
			<div style="display: inline-flex; gap: 2px; background: oklch(0.1 0.02 262 / 0.6); border-radius: 8px; padding: 2px;">
				{#each QUALITIES as o (o.v)}
					<button
						type="button"
						onclick={() => (quality = o.v)}
						style="border: none; cursor: pointer; border-radius: 6px; padding: 4px 10px; font-size: 11.5px; font-weight: 600; font-family: var(--font-sans); background: {quality ===
						o.v
							? 'var(--accent)'
							: 'transparent'}; color: {quality === o.v ? '#fff' : 'oklch(0.7 0.01 260)'};"
					>
						{o.l}
					</button>
				{/each}
			</div>
		</div>

		<!-- side panel -->
		{#if panel}
			<div
				style="position: absolute; top: 0; right: 0; bottom: 0; width: 300px; z-index: 4; background: var(--surface); border-left: 1px solid var(--border); display: flex; flex-direction: column; box-shadow: -20px 0 50px -20px rgba(0,0,0,0.4); animation: slideIn 0.25s var(--ease);"
			>
				<div
					style="display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid var(--border);"
				>
					<span style="font-weight: 700; font-size: 14px;">{panel === 'files' ? 'Dosya transferi' : 'Oturum sohbeti'}</span>
					<button type="button" class="icon-btn" onclick={() => (panel = null)}>
						<Icon name="x" size={16} />
					</button>
				</div>
				{#if panel === 'files'}
					<div style="padding: 16px; flex: 1;">
						<div
							style="border: 1.5px dashed var(--border-strong); border-radius: var(--r); padding: 28px 16px; text-align: center; color: var(--text-faint);"
						>
							<Icon name="file" size={26} style="color: var(--text-faint);" />
							<div style="font-size: 13px; font-weight: 600; color: var(--text-muted); margin-top: 10px;">
								Dosyaları buraya sürükle
							</div>
							<div style="font-size: 11.5px; margin-top: 4px;">İki yönlü, şifreli aktarım</div>
						</div>
						{#each FILES as f (f.n)}
							<div
								style="display: flex; align-items: center; gap: 10px; padding: 10px 4px; border-bottom: 1px solid var(--border);"
							>
								<Icon name="file" size={16} style="color: var(--accent);" />
								<div style="flex: 1;">
									<div style="font-size: 13px; font-weight: 600;">{f.n}</div>
									<div style="font-size: 11px; color: var(--text-faint);">
										{f.s} · {f.d === '↓' ? 'İndirildi' : 'Gönderildi'}
									</div>
								</div>
								<Icon name="check" size={15} style="color: var(--ok);" />
							</div>
						{/each}
					</div>
				{:else}
					<div style="padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 12px;">
						<div
							style="background: var(--surface-2); border-radius: var(--r); padding: 9px 12px; font-size: 13px; align-self: flex-start; max-width: 85%;"
						>
							Bağlantı kuruldu, ekranı görebiliyor musun?
						</div>
						<div
							style="background: var(--accent); color: #fff; border-radius: var(--r); padding: 9px 12px; font-size: 13px; align-self: flex-end; max-width: 85%;"
						>
							Evet, gayet net 👍
						</div>
					</div>
				{/if}
				<div style="padding: 12px; border-top: 1px solid var(--border);">
					<div class="field">
						<input
							placeholder="Mesaj yaz…"
							style="border: none; outline: none; background: transparent; font-size: 13px; width: 100%;"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
