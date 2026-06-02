import { describe, it, expect } from 'vitest';
import { site } from './config';

describe('site config', () => {
	it('carries the core brand identity', () => {
		expect(site.name).toBe('Pulsar');
		expect(site.version).toBe('1.0.0');
		// Project is GPLv3, never MIT (see chat handoff).
		expect(site.license).toBe('GPLv3');
	});

	it('exposes link slots for the sibling projects and externals', () => {
		expect(site.links.github).toMatch(/github\.com/);
		expect(site.links).toHaveProperty('demoApp');
		expect(site.links).toHaveProperty('discord');
		expect(site.links).toHaveProperty('docs');
	});
});
