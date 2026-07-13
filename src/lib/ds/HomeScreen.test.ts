import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import { lang } from '$lib/i18n';
import HomeScreen from './HomeScreen.svelte';

describe('HomeScreen', () => {
	beforeEach(() => lang.set('tr'));


	it('renders the connect screen with the default device id', () => {
		render(HomeScreen);
		expect(screen.getByRole('heading', { name: 'Bağlan' })).toBeInTheDocument();
		expect(screen.getByText('Bu cihaza izin ver')).toBeInTheDocument();
		expect(screen.getByText('482 913 056')).toBeInTheDocument();
	});

	it('formats the target id into digit triplets while typing', async () => {
		render(HomeScreen);
		const input = screen.getByPlaceholderText<HTMLInputElement>('000 000 000');
		await fireEvent.input(input, { target: { value: '123456789' } });
		expect(input.value).toBe('123 456 789');
	});

	it('strips non-digits and caps the id at 9 digits', async () => {
		render(HomeScreen);
		const input = screen.getByPlaceholderText<HTMLInputElement>('000 000 000');
		await fireEvent.input(input, { target: { value: '12a34-56 7890' } });
		expect(input.value).toBe('123 456 789');
	});

	it('enables the primary button only once 6+ digits are entered', async () => {
		render(HomeScreen);
		const input = screen.getByPlaceholderText('000 000 000');
		const button = screen.getByRole('button', { name: 'Bağlan' });
		expect(button).toBeDisabled();
		await fireEvent.input(input, { target: { value: '12345' } });
		expect(button).toBeDisabled();
		await fireEvent.input(input, { target: { value: '123456' } });
		expect(button).toBeEnabled();
	});
});
