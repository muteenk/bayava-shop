/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"open-sans": ["Open Sans", "sans-serif"],
			"crimson": ["Crimson Text", "serif"],
			"crimson-pro": ["Crimson Pro", "serif"],
		},
		extend: {},
	},
	plugins: [],
};
