import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Deployed to Cloudflare Pages. The whole site is prerendered (see
		// src/routes/+layout.ts), so the worker only serves static assets.
		adapter: adapter()
	}
};

export default config;
