/* Shared DS types + sample data, ported from design/ds-react/src/data.ts.
   Backs the default props on the embedded app screens so they render
   standalone inside the landing page product shots. */

import type { IconName } from './icons';

export type AvatarTone = 'accent' | 'cyan' | 'ok' | 'warn';

export type DeviceCategory = 'pc' | 'server' | 'console';

/** A recent connection shortcut. */
export interface Recent {
	nameKey: string;
	id: string;
	tone: AvatarTone;
	cat: DeviceCategory;
}

export const SELF_ID = '482 913 056';

export const RECENTS: Recent[] = [
	{ nameKey: 'ds.dev.homePc', id: '719 204 663', tone: 'accent', cat: 'pc' },
	{ nameKey: 'ds.dev.officeServer', id: '305 881 027', tone: 'cyan', cat: 'server' },
	{ nameKey: 'ds.dev.gamingRig', id: '640 117 992', tone: 'ok', cat: 'console' }
];

/** Sidebar navigation model. */
export type NavId = 'home' | 'devices' | 'gaming' | 'settings';
export const NAV: { id: NavId; labelKey: string; icon: IconName }[] = [
	{ id: 'home', labelKey: 'ds.nav.home', icon: 'connect' },
	{ id: 'devices', labelKey: 'ds.nav.devices', icon: 'devices' },
	{ id: 'gaming', labelKey: 'ds.nav.gaming', icon: 'gaming' },
	{ id: 'settings', labelKey: 'ds.nav.settings', icon: 'settings' }
];
