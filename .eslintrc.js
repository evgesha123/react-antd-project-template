module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [ '/node_modules' ],
  plugins: [
    'react',
    'new-with-error',
    'immutable',
    'no-use-extend-native',
    'fp',
    'import',
    'promise',
    'eslint-comments',
    'typelint',
    'lodash',
  ],
  rules: {
    'node/no-extraneous-import': [ 0 ],
    'node/no-extraneous-require': [ 0 ],
    'node/no-missing-import': [ 0 ],
    'node/no-missing-require': [ 0 ],
    'node/no-unpublished-bin': [ 0 ],
    'node/no-unsupported-features/es-syntax': [ 0 ],
    'node/no-unpublished-import': [ 0 ],
    'node/no-unpublished-require': [ 0 ],
    'node/process-exit-as-throw': [ 0 ],
    'node/no-deprecated-api': [ 0 ],
    'immutable/no-this': [ 0 ],
    'immutable/no-let': [ 0 ],
    'immutable/no-mutation': [ 0 ],
    'new-with-error/new-with-error': [ 2 ],
    'no-use-extend-native/no-use-extend-native': [ 2 ],

    'eslint-comments/disable-enable-pair': [ 0 ],
    'eslint-comments/no-duplicate-disable': [ 2 ],
    'eslint-comments/no-unlimited-disable': [ 2 ],
    'eslint-comments/no-unused-disable': [ 2 ],
    'eslint-comments/no-unused-enable': [ 2 ],
    'eslint-comments/no-use': [ 0 ],

    'lodash/callback-binding': [ 2 ],
    'lodash/collection-method-value': [ 2 ],
    'lodash/collection-return': [ 2 ],
    'lodash/no-double-unwrap': [ 2 ],
    'lodash/no-extra-args': [ 2 ],
    'lodash/no-unbound-this': [ 2 ],
    'lodash/unwrap': [ 0 ],
    'lodash/chain-style': [ 0 ],
    'lodash/chaining': [ 2, 'never' ],
    'lodash/consistent-compose': [ 0 ],
    'lodash/identity-shorthand': [ 2, 'always' ],
    'lodash/import-scope': [ 2, 'method' ],
    'lodash/matches-prop-shorthand': [ 0 ],
    'lodash/matches-shorthand': [ 0 ],
    'lodash/no-commit': [ 2 ],
    'lodash/path-style': [ 2, 'string' ],
    'lodash/prefer-compact': [ 2 ],
    'lodash/prefer-filter': [ 2 ],
    'lodash/prefer-flat-map': [ 0 ],
    'lodash/prefer-invoke-map': [ 0 ],
    'lodash/prefer-map': [ 2 ],
    'lodash/prefer-reject': [ 2 ],
    'lodash/prefer-thru': [ 0 ],
    'lodash/pprefer-wrapper-method': [ 0 ],
    'lodash/preferred-alias': [ 2 ],
    'lodash/prop-shorthand': [ 0 ],
    'lodash/prefer-constant': [ 0 ],
    'lodash/prefer-get': [ 0 ],
    'lodash/prefer-includes': [ 2 ],
    'lodash/prefer-is-nil': [ 2 ],
    'lodash/prefer-lodash-chain': [ 0 ],
    'lodash/prefer-lodash-method': [ 0 ],
    'lodash/prefer-lodash-typecheck': [ 2 ],
    'lodash/prefer-matches': [ 2 ],
    'lodash/prefer-noop': [ 0 ],
    'lodash/prefer-over-quantifier': [ 2 ],
    'lodash/prefer-some': [ 2 ],
    'lodash/prefer-startswith': [ 2 ],
    'lodash/prefer-times': [ 2 ],

    'fp/no-arguments': [ 2 ],
    'fp/no-class': [ 0 ],
    'fp/no-delete': [ 2 ],
    'fp/no-events': [ 0 ],
    'fp/no-get-set': [ 2 ],
    'fp/no-let': [ 0 ],
    'fp/no-loops': [ 2 ],
    'fp/no-mutating-assign': [ 0 ],
    'fp/no-mutating-methods': [ 0 ],
    'fp/no-mutation': [ 0 ],
    'fp/no-nil': [ 0 ],
    'fp/no-proxy': [ 0 ],
    'fp/no-rest-parameters': [ 0 ],
    'fp/no-this': [ 0 ],
    'fp/no-throw': [ 0 ],
    'fp/no-unused-expression': [ 0 ],
    'fp/no-valueof-field': [ 0 ],

    'promise/always-return': [ 0 ],
    'promise/no-return-wrap': [ 0 ],
    'promise/param-names': [ 2 ],
    'promise/catch-or-return': [ 0 ],
    'promise/no-native': [ 0 ],
    'promise/no-nesting': [ 0 ],
    'promise/no-promise-in-callback': [ 0 ],
    'promise/no-callback-in-promise': [ 0 ],
    'promise/avoid-new': [ 0 ],
    'promise/prefer-await-to-then': [ 0 ],

    'import/no-unresolved': [ 2 ],
    'import/named': [ 2 ],
    'import/default': [ 2 ],
    'import/namespace': [ 0 ],
    'import/no-restricted-paths': [ 2 ],
    'import/no-absolute-path': [ 2 ],
    'import/no-dynamic-require': [ 2 ],
    'import/no-internal-modules': [ 0 ],
    'import/no-webpack-loader-syntax': [ 2 ],
    'import/export': [ 2 ],
    'import/no-named-as-default': [ 2 ],
    'import/no-named-as-default-member': [ 2 ],
    'import/no-deprecated': [ 2 ],
    'import/no-extraneous-dependencies': [ 2 ],
    'import/no-mutable-exports': [ 2 ],
    'import/unambiguous': [ 0 ],
    'import/no-commonjs': [ 0 ],
    'import/no-amd': [ 2 ],
    'import/no-nodejs-modules': [ 0 ],
    'import/first': [ 2 ],
    'import/no-duplicates': [ 2 ],
    'import/no-namespace': [ 2 ],
    'import/extensions': [ 0 ],
    'import/order': [ 2 ],
    'import/newline-after-import': [ 2, { 'count': 3 } ],
    'import/prefer-default-export': [ 0 ],
    'import/max-dependencies': [ 0 ],
    'import/no-unassigned-import': [ 0 ],
    'import/no-named-default': [ 2 ],

    'react/display-name': [ 2 ],
    'react/forbid-component-props': [ 0 ],
    'react/forbid-prop-types': [ 0 ],
    'react/no-array-index-key': [ 2 ],
    'react/no-children-prop': [ 0 ],
    'react/no-danger': [ 0 ],
    'react/no-danger-with-children': [ 2 ],
    'react/no-deprecated': [ 2 ],
    'react/no-did-mount-set-state': [ 2 ],
    'react/no-did-update-set-state': [ 2 ],
    'react/no-direct-mutation-state': [ 2 ],
    'react/no-find-dom-node': [ 2 ],
    'react/no-is-mounted': [ 2 ],
    'react/no-multi-comp': [ 0 ],
    'react/no-render-return-value': [ 2 ],
    'react/no-set-state': [ 2 ],
    'react/no-string-refs': [ 0 ],
    'react/no-unescaped-entities': [ 2 ],
    'react/no-unknown-property': [ 2 ],
    'react/no-unused-prop-types': [ 0 ],
    'react/prefer-es6-class': [ 2 ],
    'react/prefer-stateless-function': [ 2 ],
    'react/prop-types': [ 1 ],
    'react/react-in-jsx-scope': [ 2 ],
    'react/require-default-props': [ 0 ],
    'react/require-optimization': [ 0 ],
    'react/require-render-return': [ 2 ],
    'react/self-closing-comp': [ 2 ],
    'react/sort-comp': [ 0 ],
    'react/sort-prop-types': [ 0 ],
    'react/style-prop-object': [ 2 ],
    'react/jsx-boolean-value': [ 2 ],
    'react/jsx-closing-bracket-location': [ 2 ],
    'react/jsx-curly-spacing': [ 2, 'never', { 'allowMultiline': true } ],
    'react/jsx-equals-spacing': [ 2, 'never' ],
    'react/jsx-filename-extension': [ 0 ],
    'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
    'react/jsx-handler-names': [ 2 ],
    'react/jsx-indent': [ 2, 2 ],
    'react/jsx-indent-props': [ 2, 2 ],
    'react/jsx-key': [ 2 ],
    'react/jsx-max-props-per-line': [ 0 ],
    'react/jsx-no-bind': [ 0 ],
    'react/jsx-no-comment-textnodes': [ 2 ],
    'react/jsx-no-duplicate-props': [ 2, { 'ignoreCase': true } ],
    'react/jsx-no-literals': [ 0 ],
    'react/jsx-no-target-blank': [ 2 ],
    'react/jsx-no-undef': [ 2 ],
    'react/jsx-pascal-case': [ 2, { 'allowAllCaps': true } ],
    'react/jsx-sort-props': [ 0 ],
    'react/jsx-tag-spacing': [ 2, { 'closingSlash': 'never', 'beforeSelfClosing': 'always', 'afterOpening': 'never' } ],
    'react/jsx-uses-react': [ 2 ],
    'react/jsx-uses-vars': [ 2 ],
    'react/jsx-wrap-multilines': [ 2, { 'declaration': true, 'assignment': true, 'return': true } ],

    'no-constant-condition': [ 2 ],

    'class-methods-use-this': [ 0 ],

    'no-cond-assign': [ 2, 'always' ],
    'no-console': [ 2 ],
    'no-control-regex': [ 2 ],
    'no-debugger': [ 2 ],
    'no-dupe-args': [ 2 ],
    'no-dupe-keys': [ 2 ],
    'no-duplicate-case': [ 2 ],
    'no-empty': [ 2 ],
    'no-empty-character-class': [ 2 ],
    'no-ex-assign': [ 2 ],
    'no-extra-boolean-cast': [ 2 ],
    'no-extra-parens': [ 0 ],
    'no-extra-semi': [ 2 ],
    'no-func-assign': [ 2 ],
    'no-inner-declarations': [ 2 ],
    'no-invalid-regexp': [ 2 ],
    'no-irregular-whitespace': [ 2 ],
    'no-obj-calls': [ 2 ],
    'no-prototype-builtins': [ 0 ],
    'no-regex-spaces': [ 2 ],
    'no-sparse-arrays': [ 2 ],
    'no-template-curly-in-string': [ 2 ],
    'no-unexpected-multiline': [ 2 ],
    'no-unreachable': [ 2 ],
    'no-unsafe-finally': [ 2 ],
    'no-unsafe-negation': [ 2 ],
    'use-isnan': [ 2 ],
    'valid-jsdoc': [ 2, {
      'requireReturn': true,
      'requireParamDescription': false,
      'requireReturnDescription': false,
    } ],
    'valid-typeof': [ 2 ],

    'accessor-pairs': [ 2 ],
    'array-callback-return': [ 2 ],
    'block-scoped-var': [ 2 ],
    'complexity': [ 0, 5 ],
    'consistent-return': [ 2 ],
    'curly': [ 2 ],
    'default-case': [ 2 ],
    'dot-location': [ 2, 'property' ],
    'dot-notation': [ 2 ],
    'eqeqeq': [ 2, 'always', { 'null': 'ignore' } ],
    'guard-for-in': [ 2 ],
    'no-alert': [ 2 ],
    'no-caller': [ 2 ],
    'no-case-declarations': [ 2 ],
    'no-div-regex': [ 2 ],
    'no-else-return': [ 2 ],
    'no-empty-function': [ 0 ],
    'no-empty-pattern': [ 0 ],
    'no-eq-null': [ 0 ],
    'no-eval': [ 2 ],
    'no-extend-native': [ 2 ],
    'no-extra-bind': [ 2 ],
    'no-extra-label': [ 2 ],
    'no-fallthrough': [ 2 ],
    'no-floating-decimal': [ 2 ],
    'no-global-assign': [ 2 ],
    'no-implicit-coercion': [ 2 ],
    'no-implicit-globals': [ 2 ],
    'no-implied-eval': [ 2 ],
    'no-invalid-this': [ 2 ],
    'no-iterator': [ 2 ],
    'no-labels': [ 2 ],
    'no-lone-blocks': [ 2 ],
    'no-loop-func': [ 2 ],
    'no-magic-numbers': [ 0, { 'ignoreArrayIndexes': true, 'enforceConst': true, 'detectObjects': false } ],
    'no-multi-spaces': [ 2, { 'exceptions': { 'VariableDeclarator': true } } ],
    'no-multi-str': [ 2 ],
    'no-native-reassign': [ 2 ],
    'no-new': [ 2 ],
    'no-new-func': [ 2 ],
    'no-new-wrappers': [ 2 ],
    'no-octal-escape': [ 2 ],
    'no-octal': [ 2 ],
    'no-param-reassign': [ 0, { 'props': true } ],
    'no-proto': [ 2 ],
    'no-redeclare': [ 2 ],
    'no-return-assign': [ 2 ],
    'no-script-url': [ 2 ],
    'no-self-assign': [ 2 ],
    'no-self-compare': [ 2 ],
    'no-sequences': [ 2 ],
    'no-throw-literal': [ 2 ],
    'no-unmodified-loop-condition': [ 2 ],
    'no-unused-expressions': [ 2 ],
    'no-unused-labels': [ 2 ],
    'no-useless-call': [ 2 ],
    'no-useless-concat': [ 2 ],
    'no-useless-escape': [ 2 ],
    'no-void': [ 2 ],
    'no-warning-comments': [ 0, { 'terms': [ 'todo' ], 'location': 'start' } ],
    'no-with': [ 2 ],
    'radix': [ 2 ],
    'vars-on-top': [ 0 ],
    'wrap-iife': [ 2, 'inside' ],
    'yoda': [ 2, 'never', { 'exceptRange': true } ],

    'strict': [ 2, 'never' ],

    'init-declarations': [ 0, 'always' ],
    'no-catch-shadow': [ 2 ],
    'no-delete-var': [ 2 ],
    'no-label-var': [ 2 ],
    'no-restricted-globals': [ 0 ],
    'no-shadow-restricted-names': [ 2 ],
    'no-shadow': [ 0 ],
    'no-undef': [ 2 ],
    'no-undef-init': [ 2 ],
    'no-undefined': [ 0 ],
    'no-unused-vars': [ 1, {
      'vars': 'all',
      'args': 'after-used',
      'varsIgnorePattern': '^(React|_+)',
      'argsIgnorePattern': '^_',
      'ignoreRestSiblings': true,
      'caughtErrors': 'all',
      'caughtErrorsIgnorePattern': '^_',
    } ],
    'no-use-before-define': [ 2 ],

    'callback-return': [ 0 ],
    'global-require': [ 2 ],
    'handle-callback-err': [ 2 ],
    'no-mixed-requires': [ 2 ],
    'no-new-require': [ 2 ],
    'no-path-concat': [ 2 ],
    'no-process-env': [ 2 ],
    'no-process-exit': [ 2 ],
    'no-restricted-modules': [ 0 ],
    'no-sync': [ 0 ],

    'array-bracket-spacing': [ 2, 'always' ],
    'block-spacing': [ 2, 'always' ],
    'brace-style': [ 2, '1tbs' ],
    'camelcase': [ 0, { 'properties': 'never' } ],
    'comma-dangle': [ 2, 'always-multiline' ],
    'comma-spacing': [ 2, { 'before': false, 'after': true } ],
    'comma-style': [ 2 ],
    'computed-property-spacing': [ 2, 'never' ],
    'consistent-this': [ 0, 'that' ],
    'eol-last': [ 2 ],
    'func-call-spacing': [ 2, 'never' ],
    'func-names': [ 0 ],
    'func-style': [ 2, 'expression' ],
    'id-blacklist': [ 0 ],
    'id-length': [ 2, { 'min': 2, 'properties': 'never', 'exceptions': [ '_', 'i', 'v', 'k', 'x', 'y' ] } ],
    'id-match': [ 0 ],
    'indent': [ 2, 2, { 'SwitchCase': 1 } ],
    'jsx-quotes': [ 0 ],
    'key-spacing': [ 2, { 'beforeColon': false, 'afterColon': true } ],
    'keyword-spacing': [ 2 ],
    'linebreak-style': [ 2, 'unix' ],
    'lines-around-comment': [ 0 ],
    'max-depth': [ 0, 4 ],
    'max-len': [ 0, 200 ],
    'max-nested-callbacks': [ 2 ],
    'max-params': [ 0, 10 ],
    'max-statements-per-line': [ 2, { 'max': 1 } ],
    'max-statements': [ 0 ],
    'multiline-ternary': [ 0 ],
    'new-cap': [ 2, { 'newIsCap': true, 'capIsNew': false } ],
    'new-parens': [ 2 ],
    'newline-after-var': [ 2, 'always' ],
    'newline-before-return': [ 0 ],
    'newline-per-chained-call': [ 0 ],
    'no-array-constructor': [ 2 ],
    'no-bitwise': [ 2 ],
    'no-continue': [ 2 ],
    'no-inline-comments': [ 0 ],
    'no-lonely-if': [ 0 ],
    'no-mixed-spaces-and-tabs': [ 2 ],
    'no-multiple-empty-lines': [ 2, { 'max': 3, 'maxEOF': 1, 'maxBOF': 0 } ],
    'no-negated-condition': [ 0 ],
    'no-nested-ternary': [ 0 ],
    'no-new-object': [ 2 ],
    'no-plusplus': [ 0 ],
    'no-restricted-syntax': [ 2 ],
    'no-tabs': [ 2 ],
    'no-ternary': [ 0 ],
    'no-trailing-spaces': [ 2, { 'ignoreComments': true } ],
    'no-underscore-dangle': [ 0, { 'allowAfterThis': true, 'allowAfterSuper': true, 'allow': [ '_' ] } ],
    'no-unneeded-ternary': [ 2 ],
    'no-whitespace-before-property': [ 2 ],
    'object-curly-newline': [ 0 ],
    'object-curly-spacing': [ 2, 'always' ],
    'one-var-declaration-per-line': [ 2 ],
    'one-var': [ 2, 'never' ],
    'operator-assignment': [ 2, 'always' ],
    'operator-linebreak': [ 0 ],
    'padded-blocks': [ 0 ],
    'quote-props': [ 0 ],
    'quotes': [ 2, 'single' ],
    'require-jsdoc': [ 0 ],
    'semi-spacing': [ 2, { 'before': false, 'after': true } ],
    'semi': [ 2, 'always' ],
    'sort-keys': [ 0 ],
    'sort-vars': [ 0 ],
    'sort-imports': [ 0 ],
    'space-before-blocks': [ 2, 'always' ],
    'space-before-function-paren': [ 2, 'always' ],
    'space-in-parens': [ 2, 'never' ],
    'space-infix-ops': [ 2, { 'int32Hint': false } ],
    'space-unary-ops': [ 2, { 'words': true, 'nonwords': false } ],
    'spaced-comment': [ 0 ],
    'unicode-bom': [ 2, 'never' ],
    'wrap-regex': [ 0 ],

    'arrow-body-style': [ 0, 'as-needed' ],
    'arrow-parens': [ 2, 'always' ],
    'arrow-spacing': [ 2 ],
    'constructor-super': [ 2 ],
    'generator-star-spacing': [ 2 ],
    'no-class-assign': [ 2 ],
    'no-confusing-arrow': [ 0 ],
    'no-const-assign': [ 2 ],
    'no-dupe-class-members': [ 2 ],
    'no-duplicate-imports': [ 2 ],
    'no-new-symbol': [ 2 ],
    'no-restricted-imports': [ 2 ],
    'no-this-before-super': [ 2 ],
    'no-useless-computed-key': [ 2 ],
    'no-useless-constructor': [ 0 ],
    'no-useless-rename': [ 0 ],
    'no-var': [ 2 ],
    'object-shorthand': [ 2, 'always' ],
    'prefer-arrow-callback': [ 2 ],
    'prefer-const': [ 2 ],
    'prefer-reflect': [ 0 ],
    'prefer-rest-params': [ 2 ],
    'prefer-spread': [ 2 ],
    'prefer-template': [ 2 ],
    'require-yield': [ 0 ],
    'template-curly-spacing': [ 2, 'never' ],
    'yield-star-spacing': [ 2, 'both' ],
    'require-unicode-regexp': [ 0 ],
    'default-param-last': [ 0 ],
  },
};