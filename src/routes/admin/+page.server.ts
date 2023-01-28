import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { supabase } from '$lib/server/supabase';
import { z } from 'zod';

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('admin') !== 'true') {
		throw redirect(302, '/admin/auth');
	}

	const data = supabase.from('contact_form').select('*').order('created_at', { ascending: false });

	return data;
};

const schema = z.object({
	id: z.string()
});

export const actions: Actions = {
	async delete({ request }) {
		const data = Object.fromEntries(await request.formData());

		const result = schema.safeParse(data);

		if (!result.success) {
			return {
				success: false
			};
		}

		const { id } = result.data;

		await supabase.from('contact_form').delete().eq('id', id);
		return {
			success: true
		};
	}
};
