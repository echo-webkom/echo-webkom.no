import { applicationFormSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);
		const year = data.get('year') as string;

		const parsedData = applicationFormSchema.safeParse({
			...formData,
			year: Number.parseInt(year)
		});

		if (!parsedData.success) {
			return fail(400, {
				success: false,
				...formData,
				errors: parsedData.error.flatten().fieldErrors
			});
		}

		// Create a new record as admin.
		const resp = await locals.pb
			.collection('applications')
			.create(parsedData.data);
		console.log(JSON.stringify(resp, null, 2));

		throw redirect(303, '/takk');
	}
};
