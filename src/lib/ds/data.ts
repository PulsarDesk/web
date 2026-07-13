/* Shared DS types + sample data, ported from design/ds-react/src/data.ts.
   Backs the default props on the embedded app screens so they render
   standalone inside the landing page product shots. */

import type { IconName } from './icons';

export type AvatarTone = 'accent' | 'cyan' | 'ok' | 'warn';

export type DeviceCategory = 'pc' | 'server' | 'console';

/** A recent connection shortcut. */
export interface Recent {
	name: string;
	id: string;
	tone: AvatarTone;
	cat: DeviceCategory;
}

export const SELF_ID = '482 913 056';

export const RECENTS: Recent[] = [
	{ name: 'Ev PC’si', id: '719 204 663', tone: 'accent', cat: 'pc' },
	{ name: 'Ofis Sunucusu', id: '305 881 027', tone: 'cyan', cat: 'server' },
	{ name: 'Oyun Rig’i', id: '640 117 992', tone: 'ok', cat: 'console' }
];

/** Sidebar navigation model. */
export type NavId = 'home' | 'devices' | 'gaming' | 'settings';
export const NAV: { id: NavId; label: string; icon: IconName }[] = [
	{ id: 'home', label: 'Bağlan', icon: 'connect' },
	{ id: 'devices', label: 'Cihazlar', icon: 'devices' },
	{ id: 'gaming', label: 'Gaming', icon: 'gaming' },
	{ id: 'settings', label: 'Ayarlar', icon: 'settings' }
];
