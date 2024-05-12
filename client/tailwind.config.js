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
			softGray: '#e7e7e7',
			midGray: "#A6A6A6",
			solidGray: "gray",
			hoverOverBrown: "#db6435",
			bayavaOrange: "#cc582a",
			bayavaYellow: "#FF9A1F",
		},
		extend: {
			animation: {
				fadeUp: 'fadeUp 1s ease-in-out forwards',
				fadeIn: 'fadeIn 1s ease-in-out forwards',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: 0, transform: 'translateY(50px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
