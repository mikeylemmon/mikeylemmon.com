module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	jsxSingleQuote: true,
	printWidth: 110,
	quoteProps: 'as-needed',
	semi: false,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['*.yaml', '*.yml', '*.json'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
}
