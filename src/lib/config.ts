/**
 * Site-wide configuration for the Pulsar marketing website.
 *
 * The desktop app and relay live in sibling repos (separate projects, shipped
 * later). Links that point at them — or at GitHub/Discord/docs — are collected
 * here so they can be updated in one place once those projects go live.
 */
export const site = {
	name: 'Pulsar',
	tagline: 'Açık kaynak uzaktan masaüstü & oyun streaming',
	description:
		'Pulsar; Parsec, TeamViewer ve RustDesk’e ücretsiz, açık kaynaklı bir alternatif. Düşük gecikmeli uzaktan oyun ve güvenli uzaktan masaüstü erişimi — macOS, Windows ve Linux.',
	version: '1.0.0',
	license: 'GPLv3',
	links: {
		github: 'https://github.com/pulsar/pulsar',
		githubStars: '14.2k',
		discord: '#',
		docs: '#',
		selfHostGuide: '#',
		releaseNotes: '#',
		contribute: '#',
		license: '#',
		// Pulsar desktop app — separate project, wired up once it ships.
		demoApp: '#'
	}
} as const;

export type Site = typeof site;
