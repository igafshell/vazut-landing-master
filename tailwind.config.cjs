/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				"max-sm": { max: "500px" },
				"max-md": { max: "767px" },
				"max-lg": { max: "1023px" },
				"max-xl": { max: "1279px" },
				"max-2xl": { max: "1535px" },
			},
		},
	},
	plugins: [],
};
