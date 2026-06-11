# Pulsar website

Marketing site for **Pulsar** — the free, open-source remote-desktop + game-streaming
app (a Parsec / TeamViewer / RustDesk alternative). Two pages: a landing page and a
download page. Turkish UI.

Built with **SvelteKit** (Svelte 5) + TypeScript, fully prerendered, deployed on
**Cloudflare Pages**.

> The relay server and desktop app are separate projects (`../relay`, `../desktop-app`),
> shipped later. The shared design system lives in `../design/`.

## Develop

```sh
bun install
bun run dev          # http://localhost:5173
```

## Build & preview

```sh
bun run build        # → .svelte-kit/cloudflare
bun run preview      # serve the build at http://localhost:4173
```

## Test

```sh
bun run test         # unit + e2e
bun run test:unit    # Vitest (jsdom + @testing-library)
bun run test:e2e     # Playwright (run `bunx playwright install chromium` once first)
bun run check        # svelte-check (types + a11y)
```

## Deploy to Cloudflare Pages

- **Git integration:** set the build command to `bun run build` and the build output
  directory to `.svelte-kit/cloudflare`.
- **CLI:** `bun run deploy` (uses `wrangler`; run `bunx wrangler login` first).

## Project layout

- `src/app.css` — design tokens (ported from `../design/.../tokens.css`) + global atoms.
- `src/lib/config.ts` — external/sibling-project links, version, license.
- `src/lib/components/` — `PulsarMark`, `SiteHeader`, `SiteFooter`.
- `src/lib/actions/reveal.ts` — scroll-reveal action.
- `src/routes/+page.svelte` — landing; `src/routes/download/+page.svelte` — download.

See `CLAUDE.md` for conventions and the placeholders to fill in when the sibling
projects ship.
