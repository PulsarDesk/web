<script lang="ts">
	import { onMount } from 'svelte';

	/* The remote viewport backdrop — a stylised stand-in for the streamed screen.
	   `remote` paints an abstract desktop (menu bar, windows, dock); `game` paints a
	   dark neon game scene. Decorative only; never a real screen capture. */

	let { mode = 'remote' }: { mode?: 'remote' | 'game' } = $props();

	let clock = $state('');

	onMount(() => {
		const tick = () => {
			clock = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
		};
		tick();
		const t = setInterval(tick, 1000);
		return () => clearInterval(t);
	});

	const TRAFFIC = ['#ED6A5E', '#F4BF4F', '#61C554'];
	const LINES = [88, 66, 74, 52];
	const DOCK = ['#5B7CFA', '#E0689B', '#3FB98C', '#F2B33D', '#8A6BF0'];
</script>

{#if mode === 'game'}
	<div
		style="position: absolute; inset: 0; overflow: hidden; background: radial-gradient(120% 120% at 30% 20%, oklch(0.32 0.09 280), oklch(0.16 0.05 270) 70%);"
	>
		<div
			style="position: absolute; inset: 0; background: linear-gradient(0deg, oklch(0.1 0.03 270 / 0.7), transparent 55%);"
		></div>
		<div
			style="position: absolute; bottom: 20%; left: 8%; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, oklch(0.62 0.15 215 / 0.5), transparent 70%); filter: blur(8px);"
		></div>
		<div
			style="position: absolute; top: 14%; right: 12%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, oklch(0.6 0.2 320 / 0.35), transparent 70%); filter: blur(12px);"
		></div>
		<div
			style="position: absolute; inset: 0; background-image: repeating-linear-gradient(115deg, transparent, transparent 34px, oklch(1 0 0 / 0.025) 34px, oklch(1 0 0 / 0.025) 35px);"
		></div>
		<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); text-align: center;">
			<div
				style="font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.14em; color: oklch(0.85 0.05 215); text-transform: uppercase;"
			>
				Canlı oyun akışı
			</div>
			<div
				style="font-family: var(--font-display); font-size: 34px; font-weight: 600; color: #fff; margin-top: 8px; letter-spacing: -0.02em;"
			>
				Stellar Drift
			</div>
		</div>
	</div>
{:else}
	<div
		style="position: absolute; inset: 0; overflow: hidden; background: radial-gradient(130% 120% at 70% 0%, oklch(0.42 0.07 250), oklch(0.26 0.04 255) 70%);"
	>
		<div
			style="position: absolute; top: 0; left: 0; right: 0; height: 28px; background: oklch(0.18 0.02 255 / 0.55); backdrop-filter: blur(8px); display: flex; align-items: center; padding: 0 14px; gap: 16px; color: oklch(0.92 0.01 255); font-size: 11.5px; font-weight: 600;"
		>
			<span style="font-weight: 700;">●</span>
			<span>Dosya</span>
			<span>Düzen</span>
			<span>Görünüm</span>
			<span style="margin-left: auto; font-family: var(--font-mono);">{clock}</span>
		</div>
		<div
			style="position: absolute; top: 64px; left: 48px; width: 46%; height: 58%; border-radius: 10px; background: oklch(0.96 0.005 255 / 0.96); box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5); overflow: hidden;"
		>
			<div style="height: 30px; background: oklch(0.9 0.005 255); display: flex; align-items: center; gap: 6px; padding: 0 11px;">
				{#each TRAFFIC as c (c)}
					<span style="width: 9px; height: 9px; border-radius: 50%; background: {c};"></span>
				{/each}
			</div>
			<div style="padding: 16px; display: flex; flex-direction: column; gap: 8px;">
				{#each LINES as w (w)}
					<div style="height: 9px; width: {w}%; border-radius: 4px; background: oklch(0.86 0.006 255);"></div>
				{/each}
			</div>
		</div>
		<div
			style="position: absolute; top: 130px; right: 60px; width: 34%; height: 46%; border-radius: 10px; background: oklch(0.2 0.02 260 / 0.96); box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5); overflow: hidden;"
		>
			<div style="height: 28px; background: oklch(0.26 0.02 260);"></div>
			<div style="padding: 14px; font-family: var(--font-mono); font-size: 11px; line-height: 1.8; color: oklch(0.7 0.13 158);">
				<div><span style="color: oklch(0.6 0.02 260);">$</span> systemctl status pulsar</div>
				<div style="color: oklch(0.75 0.02 260);">● active (running)</div>
				<div><span style="color: oklch(0.6 0.02 260);">$</span> _</div>
			</div>
		</div>
		<div
			style="position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); display: flex; gap: 9px; padding: 8px 12px; border-radius: 16px; background: oklch(0.96 0.005 255 / 0.3); backdrop-filter: blur(10px); border: 1px solid oklch(1 0 0 / 0.15);"
		>
			{#each DOCK as c (c)}
				<div style="width: 34px; height: 34px; border-radius: 9px; background: {c}; box-shadow: 0 4px 10px rgba(0,0,0,0.25);"></div>
			{/each}
		</div>
	</div>
{/if}
