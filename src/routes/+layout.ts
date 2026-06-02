// Fully static marketing site — prerender every route at build time so
// Cloudflare Pages just serves HTML/CSS/JS (no SSR runtime needed).
export const prerender = true;
export const trailingSlash = 'never';
