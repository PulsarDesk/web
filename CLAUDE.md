# Pulsar website

Marketing site for Pulsar — see the monorepo root `../CLAUDE.md` for product,
architecture, license (GPLv3) and the shared design system.

## Stack

- **SvelteKit 2** (Svelte 5, runes mode) + **TypeScript** + **Vite**.
- **`@sveltejs/adapter-cloudflare`** → deployed on **Cloudflare Pages**.
- **Fully prerendered** (`src/routes/+layout.ts` → `prerender = true`). The site
  is static HTML/CSS/JS; the worker only serves assets. No SSR runtime needed.
- Fonts loaded via `<link>` (preconnect + `display=swap`) in `src/app.html`.

## Scope

Two pages only. Relay and desktop app are **separate projects** (`../relay`,
`../desktop-app`), built later.

- `/` — landing: hero (live pulse animation + device card), dual-use
  (gaming vs remote desktop), features, security/self-host terminal, 3 steps,
  download band, footer.
- `/download` — OS auto-detect card, all platforms (macOS/Windows/Linux) with
  files + package managers, system requirements, build-from-source.

## Layout of the code

```
src/
  app.css                     # design tokens (ported from design/.../tokens.css) + global atoms
  app.html                    # lang=tr, fonts, favicon, <noscript> reveal fallback
  lib/
    config.ts                 # site.links.* (github, demoApp, discord, docs…), version, license
    actions/reveal.ts         # use:reveal — IntersectionObserver scroll-reveal (+ no-JS fallback)
    components/
      PulsarMark.svelte       # concentric-rings logo (size + accent/light variant + a11y title)
      SiteHeader.svelte       # variant: 'home' | 'download'
      SiteFooter.svelte       # variant: 'full' | 'minimal'
  routes/
    +layout.svelte            # imports app.css
    +layout.ts                # prerender = true
    +page.svelte              # landing
    download/+page.svelte     # download (client-side OS detection in onMount)
static/favicon.svg            # Pulsar mark (hardcoded accent #4d60e8)
```

## CSS conventions (how fidelity is kept)

- **Design tokens + shared atoms are global** in `src/app.css`: the `:root`
  variables, `.btn*`, `.btn-lg`, `.wrap`, `.brand`/`.nm`, `.pulsar-mark`,
  `.reveal`/`.reveal.in`.
- **Page/section CSS is scoped** inside each component's `<style>`. The two pages
  hold their own section CSS; header/footer hold theirs.
- Container width is `--wrap-max` (default `1180px`; the download page sets
  `1080px` on its `.dl-page` wrapper, which cascades to header/footer `.wrap`).
- Source of truth for the look is `../design/project/*.html` +
  `../design/project/assets/tokens.css`. Match it pixel-for-pixel.

## Commands

```bash
npm run dev            # dev server
npm run build          # production build → .svelte-kit/cloudflare
npm run preview        # serve the build locally (port 4173)
npm run check          # svelte-check (types + a11y)
npm run test           # unit + e2e
npm run test:unit      # Vitest (jsdom + @testing-library) — src/**/*.test.ts
npm run test:e2e       # Playwright — e2e/*.spec.ts (builds + previews first)
npm run deploy         # build + wrangler pages deploy
```

## Tests

- **Vitest** (`vitest.config.ts`, jsdom): component/unit tests co-located in
  `src/**` — PulsarMark, reveal action, config, SiteHeader/Footer variants, and
  full page-render tests for both routes.
- **Playwright** (`playwright.config.ts`, `e2e/`): real-browser tests for both
  pages, OS detection (UA-overridden mac/win/linux), reveal-on-scroll, header
  scroll border, nav, and a console-error-free smoke check.
- Run `npx playwright install chromium` once on a fresh machine.

## Deploy to Cloudflare Pages

- **Git integration:** Build command `npm run build`, output directory
  `.svelte-kit/cloudflare`.
- **CLI:** `npm run deploy` (uses `wrangler`; `wrangler.toml` sets
  `pages_build_output_dir`). Run `npx wrangler login` first.

## Placeholders to fill in when siblings ship

In `src/lib/config.ts`, several links are `'#'` until the real targets exist:
`demoApp` (the desktop app), `discord`, `docs`, `selfHostGuide`, `releaseNotes`,
`contribute`, `license`. The download page's file links point at `#all` (no real
binaries yet). `github` is set to `https://github.com/pulsar/pulsar`.
