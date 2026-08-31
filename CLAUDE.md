# Pulsar website (pulsardesk.com)

Marketing site — GitHub repo **PulsarDesk/web** (local dir is `website/`). See
the umbrella `../CLAUDE.md` for the product.

- **Stack:** SvelteKit (Svelte 5) · TypeScript · **SSR on Cloudflare Workers**
  via `@sveltejs/adapter-cloudflare` + `wrangler.jsonc` (worker `pulsar-web`,
  `_worker.js` + ASSETS binding). NOT static/prerendered — SSR is required to
  read the language cookie per request.
- **Package manager:** bun, never npm.
- **i18n:** cookie-based (`pulsar-lang`), `tr/en/kk/ru`; negotiation in
  `src/lib/i18n/negotiate.ts` (cookie → Accept-Language → **`en` default**);
  TR is the source/fallback dictionary. Theme IS localStorage
  (`src/lib/theme.ts`) — only theme, not language.
- **Download API:** `src/lib/server/releases.ts` hits GitHub
  `releases/latest` for pulsar-desktop + pulsar-mobile (10-min cache, graceful
  fallback); `routes/download/+page.server.ts` UA-sniffs the OS.
- **Design tokens:** ported from `design/project/assets/tokens.css` (source of
  truth) — don't change values here without syncing design/.
- Copy rule: direct **P2P first, automatic relay fallback** — never an
  either/or. E2E encrypted, zero-knowledge, no account, no telemetry.

```bash
bun install && bun run dev
bun run test        # Vitest
bun run test:e2e    # Playwright (builds + previews first)
bun run check       # svelte-check
bun run build && bun run preview
```

**No CI in this repo yet** (the only one of the 7 without workflows/semantic-
release) — deploys are manual via wrangler.
