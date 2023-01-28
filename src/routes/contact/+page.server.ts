import type { Actions } from './$types';
import { z } from 'zod';
import { supabase } from '$lib/server/supabase';
import { redirect } from '@sveltejs/kit';

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1)
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

		const { name, email, message } = result.data;

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
