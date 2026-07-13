import type { PageServerLoad } from './$types';
import { getDownloadData } from '$lib/server/releases';

export type OsKey = 'mac' | 'win' | 'linux' | 'android' | 'ios';

function detectOs(ua: string): OsKey {
	if (/Android/i.test(ua)) return 'android';
	if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
	if (/Win/i.test(ua)) return 'win';
	if (/Linux|X11/i.test(ua)) return 'linux';
	return 'mac';
}

export const load: PageServerLoad = async ({ request, fetch }) => {
	return {
		os: detectOs(request.headers.get('user-agent') ?? ''),
		downloads: await getDownloadData(fetch)
	};
};
