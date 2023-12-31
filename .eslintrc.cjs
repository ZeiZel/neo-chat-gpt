module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	plugins: ['import', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
	rules: {
		'import/no-unresolved': 'off',
		'no-undef': 'warn',
		'no-unused-vars': 'warn',
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			parser: 'babel-eslint',
			rules: {},
		},
	],
};
