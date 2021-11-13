const plugin = require('tailwindcss/plugin');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.2xl'), fontWeight: 300 },
				h2: { fontSize: theme('fontSize.xl'), fontWeight: 300 },
				h3: { fontSize: theme('fontSize.lg'), fontWeight: 300 }
			});
		})
	]
};

module.exports = config;
