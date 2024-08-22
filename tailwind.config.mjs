/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light: "#f6f6f6",
				dark: "#9c918d",
			},
			padding: {
				sm: "1.5rem",
				md: "7.5vw",
				lg: "min(10vw, 10em)",
			},
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
