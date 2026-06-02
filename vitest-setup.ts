import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/svelte';

// Unmount components between tests so the DOM doesn't leak across cases.
afterEach(() => {
	cleanup();
});
