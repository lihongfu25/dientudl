/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '100%',
				md: '720px',
				lg: '960px',
				xl: '1140px',
				'2xl': '1200px',
			},
		},
	},
	plugins: [],
};
