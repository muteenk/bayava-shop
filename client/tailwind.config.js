/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			"open-sans": ["Open Sans", "sans-serif"],
			"crimson": ["Crimson Text", "serif"],
			"crimson-pro": ["Crimson Pro", "serif"],
		},
		colors: {
			smokeYellow: "#e0d7c8",
			smokeBrown: "#463e38",
			hoverOverBrown: "#db6435"
		},
		extend: {},
	},
	plugins: [],
};
