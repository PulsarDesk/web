/* GitHub Releases → download-page data. Server-only: fetched per request on
   the Worker with an in-isolate cache so the unauthenticated GitHub API rate
   limit (60/h/IP) is never hammered. Everything degrades gracefully to the
   releases page when the API is unreachable. */

const DESKTOP_REPO = 'PulsarDesk/pulsar-desktop';
const MOBILE_REPO = 'PulsarDesk/pulsar-mobile';

export const DESKTOP_RELEASES_URL = `https://github.com/${DESKTOP_REPO}/releases/latest`;
export const MOBILE_RELEASES_URL = `https://github.com/${MOBILE_REPO}/releases/latest`;
/** Stable "latest" URL — works even without the API (GitHub redirects). */
export const APK_LATEST_URL = `https://github.com/${MOBILE_REPO}/releases/latest/download/app-universal-release.apk`;

export interface ReleaseAsset {
	label: string;
	url: string;
	/** null when the API was unreachable (no size known). */
	sizeMB: number | null;
}

export interface DownloadData {
	desktop: {
		version: string | null;
		releasesUrl: string;
		mac: ReleaseAsset[];
		win: ReleaseAsset[];
		linux: ReleaseAsset[];
	};
	android: {
		version: string | null;
		releasesUrl: string;
		apk: ReleaseAsset;
	};
}

interface GhAsset {
	name: string;
	size: number;
	browser_download_url: string;
}

interface GhRelease {
	tag_name: string;
	assets: GhAsset[];
}

const mb = (bytes: number): number => Math.round(bytes / 1024 / 1024);

/** name-pattern → card row label, in display order. Updater artifacts
 *  (.sig, .app.tar.gz) and duplicate bundles are deliberately not listed —
 *  the "all files" link covers them. */
const DESKTOP_ROWS: { key: keyof Pick<DownloadData['desktop'], 'mac' | 'win' | 'linux'>; re: RegExp; label: string }[] = [
	{ key: 'mac', re: /_aarch64\.dmg$/, label: 'Apple Silicon .dmg' },
	{ key: 'mac', re: /_x64\.dmg$/, label: 'Intel .dmg' },
	{ key: 'win', re: /_x64-setup\.exe$/, label: 'Installer .exe (x64)' },
	{ key: 'linux', re: /_amd64\.AppImage$/, label: '.AppImage (x86_64)' },
	{ key: 'linux', re: /_amd64\.deb$/, label: '.deb (Debian/Ubuntu)' },
	{ key: 'linux', re: /\.x86_64\.rpm$/, label: '.rpm (Fedora)' },
	{ key: 'linux', re: /_aarch64\.AppImage$/, label: '.AppImage (ARM64 · Pi)' }
];

/** Fallback rows when the API is down: point at the releases page. */
function fallbackData(): DownloadData {
	const page = (label: string): ReleaseAsset => ({ label, url: DESKTOP_RELEASES_URL, sizeMB: null });
	return {
		desktop: {
			version: null,
			releasesUrl: DESKTOP_RELEASES_URL,
			mac: [page('Apple Silicon .dmg'), page('Intel .dmg')],
			win: [page('Installer .exe (x64)')],
			linux: [page('.AppImage (x86_64)'), page('.deb (Debian/Ubuntu)'), page('.rpm (Fedora)'), page('.AppImage (ARM64 · Pi)')]
		},
		android: {
			version: null,
			releasesUrl: MOBILE_RELEASES_URL,
			apk: { label: 'Universal .apk', url: APK_LATEST_URL, sizeMB: null }
		}
	};
}

async function fetchLatest(fetchFn: typeof fetch, repo: string): Promise<GhRelease | null> {
	try {
		const res = await fetchFn(`https://api.github.com/repos/${repo}/releases/latest`, {
			headers: {
				accept: 'application/vnd.github+json',
				'user-agent': 'pulsar-web (https://pulsardesk.com)'
			}
		});
		if (!res.ok) return null;
		return (await res.json()) as GhRelease;
	} catch {
		return null;
	}
}

function mapDesktop(release: GhRelease | null): DownloadData['desktop'] {
	if (!release) return fallbackData().desktop;
	const out: DownloadData['desktop'] = {
		version: release.tag_name,
		releasesUrl: DESKTOP_RELEASES_URL,
		mac: [],
		win: [],
		linux: []
	};
	for (const row of DESKTOP_ROWS) {
		const asset = release.assets.find((a) => row.re.test(a.name));
		if (asset) out[row.key].push({ label: row.label, url: asset.browser_download_url, sizeMB: mb(asset.size) });
	}
	// a platform with zero matches (naming changed upstream) → releases page
	const fb = fallbackData().desktop;
	if (!out.mac.length) out.mac = fb.mac;
	if (!out.win.length) out.win = fb.win;
	if (!out.linux.length) out.linux = fb.linux;
	return out;
}

function mapAndroid(release: GhRelease | null): DownloadData['android'] {
	const fb = fallbackData().android;
	if (!release) return fb;
	const asset = release.assets.find((a) => /\.apk$/.test(a.name));
	return {
		version: release.tag_name,
		releasesUrl: MOBILE_RELEASES_URL,
		apk: asset
			? { label: 'Universal .apk', url: asset.browser_download_url, sizeMB: mb(asset.size) }
			: fb.apk
	};
}

const TTL_MS = 10 * 60 * 1000;
let cache: { at: number; data: DownloadData } | null = null;

export async function getDownloadData(fetchFn: typeof fetch): Promise<DownloadData> {
	if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
	const [desktopRel, mobileRel] = await Promise.all([
		fetchLatest(fetchFn, DESKTOP_REPO),
		fetchLatest(fetchFn, MOBILE_REPO)
	]);
	const data: DownloadData = { desktop: mapDesktop(desktopRel), android: mapAndroid(mobileRel) };
	// only cache real API answers — keep retrying while degraded
	if (desktopRel || mobileRel) cache = { at: Date.now(), data };
	return data;
}
