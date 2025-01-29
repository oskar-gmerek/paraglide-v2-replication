import * as paraglideAdapter from '$lib/paraglide/adapter';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = paraglideAdapter.handle;