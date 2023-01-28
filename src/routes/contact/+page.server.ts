import type { Actions } from './$types';
import { z } from 'zod';
import { supabase } from '$lib/server/supabase';
import { redirect } from '@sveltejs/kit';

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1),
	yu69hn: z.string().min(1)
});

export const actions: Actions = {
	async default({ request }) {
		const data = Object.fromEntries(await request.formData());

		const result = schema.safeParse(data);

		if (!result.success) {
			return {
				success: false,
				message: 'Please fill out all the fields'
			};
		}

		const { name, email, message, yu69hn } = result.data;

		if (yu69hn === 'yu69hn' || yu69hn === name || yu69hn === email || yu69hn === message) {
			return {
				success: false,
				message: 'Please fill out all the fields'
			};
		}

		await supabase.from('contact_form').insert({
			name,
			email,
			message
		});

		return {
			success: true,
			message: 'Message sent successfully'
		};
	}
};
