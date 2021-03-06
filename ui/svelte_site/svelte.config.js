import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ env: { port: process.env.PORT } }),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
