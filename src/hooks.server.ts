import PocketBase from 'pocketbase';
import type { Handle } from '@sveltejs/kit';
import { PUBLIC_PB_HOST } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(PUBLIC_PB_HOST);

	const response = await resolve(event);

	return response;
};
