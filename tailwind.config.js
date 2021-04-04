const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				minus32: 'calc(100% - 8rem)',
				minus48: 'calc(100% - 12rem)',
			},
			width: { 120: '30rem' },
			minHeight: {
				32: '8rem',
				48: '12rem',
			},
			inset: {
				minus32: 'calc(100% - 8rem)',
				minus48: 'calc(100% - 12rem)',
				120: '30rem',
				minus120: 'calc(100% - 30rem)',
			},
			colors: { gray: colors.warmGray },
			boxShadow: { term: '0 5px 20px 3px rgba(0, 0, 0, 0.4)' },
			screens: { hov: { raw: '(hover: hover)' } },
		},
		fontFamily: {
			sans:
				'SwedenSansRegular, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
			thick:
				'SwedenSansBold, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			mono:
				'NotoMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
