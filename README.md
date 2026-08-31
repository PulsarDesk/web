# Pulsar — Website

Marketing site for [Pulsar](https://github.com/PulsarDesk), the free, open-source
remote-desktop + game-streaming app. Implemented from the Claude Design handoff
(`Pulsar Website.html` + `Pulsar Download.html`) as a SvelteKit app.

- **Stack:** SvelteKit (Svelte 5) · TypeScript · SSR on Cloudflare Workers
  (`@sveltejs/adapter-cloudflare` + `wrangler.jsonc`)
- **Package manager:** [bun](https://bun.sh) — never npm
- **i18n:** TR (source) · EN (default) · KK · RU, persisted in the `pulsar-lang`
  cookie (read server-side per request — that's why the site is SSR)
- **Theme:** light-first with a dark mode toggle, persisted in `localStorage`
- **Design tokens:** ported verbatim from `design/project/assets/tokens.css`
  (the canonical source of truth) — do not edit values here without syncing design/
- **Deliberate deviation from the handoff:** the hero app embed is live — the
  "Uzaktan masaüstü / Oyun akışı" segmented control actually switches the demo
  (the reference embed rendered it inert)

## Develop

```sh
bun install
bun run dev
```

## Test

```sh
bun run test        # Vitest unit + component tests
bun run test:e2e    # Playwright end-to-end (builds + previews first)
bun run check       # svelte-check
```

## Build

```sh
bun run build       # Worker output in .svelte-kit/cloudflare/
bun run preview
```

## License

GPLv3 — see the PulsarDesk organization repositories.
