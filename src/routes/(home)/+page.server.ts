import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('admin') === 'true') {
		return {
			admin: true
		} as const;
	}

	return {
		admin: false
	} as const;
};
