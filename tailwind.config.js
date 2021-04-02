module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: { minus48: 'calc(100% - 12rem)' },
			minHeight: { 48: '12rem' },
			inset: { minus48: 'calc(100% - 12rem)' },
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
