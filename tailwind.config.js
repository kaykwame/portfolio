/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			phone: '500px',
			// => @media (min-width: 500px) { ... }

			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px'
			// => @media (min-width: 1280px) { ... }
		},
		extend: {}
	},
	plugins: []
};
