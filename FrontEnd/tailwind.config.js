


/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
	'./pages/**/*.{js,jsx}',
	'./components/**/*.{js,jsx}',
	'./app/**/*.{js,jsx}',
	'./src/**/*.{js,jsx}',
];
export const prefix = "";
export const theme = {
	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px",
		},
	},

};
export const plugins = [];