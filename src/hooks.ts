import * as paraglideAdapter from '$lib/paraglide/adapter';
import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = paraglideAdapter.reroute;