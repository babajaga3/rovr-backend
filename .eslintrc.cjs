module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': ['import'],
	'rules': {
		'import/order': ['error', {
			'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'pathGroups': [
				{
					'pattern': 'react',
					'group': 'external',
					'position': 'before'
				}
			],
			'pathGroupsExcludedImportTypes': ['builtin'],
			'newlines-between': 'never',
			'alphabetize': {
				'order': 'asc',
				'caseInsensitive': true
			}
		}],
		'eol-last': [
			'error',
			'always'
		],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
