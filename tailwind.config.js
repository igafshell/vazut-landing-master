/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Darker Grotesque", "serif"],
				secondary: ["Raleway", "serif"],
				hero: ["Dela Gothic One", "sans-serif"],
			},
			screens: {
				"max-4xl": { max: "1999px" },
				"max-3xl": { max: "1799px" },
				"max-2xl": { max: "1535px" },
				"max-xl": { max: "1279px" },
				"max-lg": { max: "1023px" },
				"max-md": { max: "755px" },
				"max-sm": { max: "639px" },
				"3xl": "1800px",
				"4xl": "2000px",
			},
		},
	},
	plugins: [],
};
