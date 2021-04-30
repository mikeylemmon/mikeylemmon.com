const colors = require('tailwindcss/colors')
module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	// purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	// purge: false,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				120: '30rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
				'4xl': '56rem',
				'5xl': '64rem',
			},
			maxWidth: {
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
				'4xl': '56rem',
				'5xl': '64rem',
			},
			height: {
				minus20: 'calc(100% - 5rem)',
				minus24: 'calc(100% - 6rem)',
				minus28: 'calc(100% - 7rem)',
				minus32: 'calc(100% - 8rem)',
				minus48: 'calc(100% - 12rem)',
			},
			minHeight: {
				20: '5rem',
				24: '6rem',
				28: '7rem',
				32: '8rem',
				48: '12rem',
				sm: '24rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
				'3xl': '48rem',
				'4xl': '56rem',
				'5xl': '64rem',
			},
			inset: {
				minus20: 'calc(100% - 5rem)',
				minus24: 'calc(100% - 6rem)',
				minus28: 'calc(100% - 7rem)',
				minus32: 'calc(100% - 8rem)',
				minus48: 'calc(100% - 12rem)',
				120: '30rem',
				minus120: 'calc(100% - 30rem)',
			},
			colors: { gray: colors.warmGray, cool: colors.coolGray },
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
