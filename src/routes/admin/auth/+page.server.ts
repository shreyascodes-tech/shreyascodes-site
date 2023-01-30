import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { redirect } from '@sveltejs/kit';
import { ADMIN_PASSWORD } from '$env/static/private';
import { dev } from '$app/environment';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('admin') === 'true') {
		throw redirect(302, '/admin');
	}

	return {};
};

export const actions: Actions = {
	async login({ request, cookies }) {
		const data = Object.fromEntries(await request.formData());

		const result = schema.safeParse(data);

		if (!result.success) {
			return {
				success: false
			};
		}

		const { email, password } = result.data;

		if (email !== 'admin@shreyascodes.tech' || password !== ADMIN_PASSWORD) {
			return {
				success: false
			};
		}

		cookies.set('admin', 'true', {
			path: '/',
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'strict',
			httpOnly: true,
			expires: new Date(Date.now() + 60 * 60 * 24 * 7),
			secure: !dev
		});

		return {
			success: true
		};
	},

	async logout({ cookies }) {
		console.log('hi');

		cookies.delete('admin', {
			path: '/'
		});
		throw redirect(302, '/admin/auth');
	}
};
