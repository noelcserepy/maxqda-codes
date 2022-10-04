/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				ablauf: "#2364A2",
				manGem: "#6DA529",
				manAb: "#DC3C26",
				partiz: "#CC7099",
				umsetz: "#EFC917",
				auswirk: "#0CBFCC",
			},
		},
	},
	plugins: [],
};
