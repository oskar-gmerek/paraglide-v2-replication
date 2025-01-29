import { paraglideSveltekit } from '@inlang/paraglide-sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [paraglideSveltekit({ project: './project.inlang', outdir: './src/lib/paraglide' }), sveltekit()],
	
});
