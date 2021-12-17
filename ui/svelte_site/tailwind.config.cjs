const plugin = require('tailwindcss/plugin');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				phone: { min: '280px', max: '640px' },
				tablet: { min: '641px', max: '768px' },
				laptop: { min: '769px', max: '1279px' },
				desktop: { min: '1280px', max: '1535px' },
				'big-desktop': { min: '1536px' }
			}
		}
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
