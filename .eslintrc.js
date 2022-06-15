module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    plugins: [
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        quotes: [2, 'single', {avoidEscape: true }],
        indent: ['warn', 4],
        semi: ['warn', 'always'],    
        'no-var': 'error',
        camelcase: 'warn',
        'vue/max-attributes-per-line': ['warn', {
            singleline: {
                max: 10
            }
        }],      
        'no-trailing-spaces': ['off', {skipBlankLines: true, ignoreComments: false}],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['off', 'always'],
        'spaced-comment': 'off',        
        'keyword-spacing': [2,
            {
                overrides: {
                    if: {after: false},
                    for: {after: false},
                    while: {after: false}
                }
            }],
        'padded-blocks': ['error', 'never'],
        'no-unused-vars': 'off',
        'arrow-spacing': 'off',
        'object-curly-spacing': 'off',
        'eol-last': ['off', 'always'],
        'one-var': 'off',
        'comma-dangle': 'off',
        'vue/multi-word-component-names': 0,
        'vue/require-prop-types': 'off',
    }
};
