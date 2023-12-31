module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended"
	],
	overrides: [
		{
			extends: ["plugin:@typescript-eslint/strict"],
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"]
			},
			rules: {
				// TODO: Investigate?? :(
				"@typescript-eslint/no-unsafe-assignment": "off",
				"deprecation/deprecation": "off"
			}
		},
		{
			files: ["*.ts", "*.tsx"],
			extends: ["plugin:@typescript-eslint/strict"]
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname
	},
	plugins: ["@typescript-eslint", "astro"],
	root: true,
	rules: {
		// Stylistic concerns that don't interfere with Prettier
		"padding-line-between-statements": "off",
		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{ blankLine: "always", next: "*", prev: "block-like" }
		]
	}
};
