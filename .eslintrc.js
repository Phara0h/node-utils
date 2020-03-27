var MAX_CHARS = 120;
var SPACES_PER_TAB = 4;
var MAX_NESTED_CALLBACKS = 4;
var MAX_PARAMS = 10;
var MAX_STATEMENTS = 20;

module.exports = {

    // http://eslint.org/docs/rules/

    'parserOptions': {
        'ecmaVersion': 9,
    },

    'env': {
        'browser': true,
        'node': true,
        'amd': true,
        'mocha': true,
        'jasmine': true,
        'phantomjs': true,
        'jquery': true,
        'prototypejs': true,
        'shelljs': true,
    },

    'globals': {
        'angular': false,
        'browser': false,
        '$controller': false,
        '$httpBackend': false,
        '$location': false,
        '$q': false,
        '$rootScope': true,
        '$state': false,
        '$templateCache': false,
        'afterEach': false,
        'angular': false,
        'beforeEach': false,
        'by': false,
        'describe': false,
        'element': false,
        'expect': false,
        'inject': false,
        'it': false,
        'mockData': false,
        'moduleSelect': false,
        'routerHelper': false,
        'sinon': false,
        'specHelper': false,
        'spyOn': false,
        'PDFJS': false,
        'Promise': false,
        'moment': false,
        'cordova': false,
        'StatusBar': false,
        'stripe': false,
        'Map': false,

    },

    'plugins': [
        'security'
    ],

    'extends': [
        'plugin:security/recommended'
    ],

    'rules': {


        ////////// Stylistic Issues //////////

        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'never'],
        'brace-style': [2, '1tbs', {'allowSingleLine': true}],
        'camelcase': 2,
        'comma-spacing': [2, {'before': false, 'after': true}],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'self'],
        'eol-last': 2,
        'func-names': 0,
        'indent': [2, 4, {'SwitchCase': 1}],
        'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
        'keyword-spacing': 2,
        'lines-around-comment': [
            2,
            {'beforeBlockComment': true, 'beforeLineComment': false, 'allowBlockStart': true},
        ],
        'linebreak-style': [2, 'unix'],
        'max-nested-callbacks': [2, MAX_NESTED_CALLBACKS],
        'new-parens': 2,
        'newline-after-var': [2, 'always'],
        'no-array-constructor': 2,
        'no-continue': 0,
        'no-inline-comments': 2,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {max: 1}],
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 0,
        'object-curly-spacing': [2, 'never'],
        'one-var': [2, 'never'],
        'operator-assignment': 0,
        'operator-linebreak': [2, 'before'],
        'padded-blocks': 0,
        'quote-props': [2, 'as-needed'],
        'quotes': [2, 'single', 'avoid-escape'],
        'semi-spacing': 2,
        'semi': [2, 'always'],
        'sort-vars': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {'words': true, 'nonwords': false}],
        'spaced-comment': [2, 'always', {'block': {'exceptions': ['-+*']} }],
        'wrap-regex': 0,

        ////////// ECMAScript 6 //////////

        'constructor-super': 0,
        'generator-star-spacing': 0,
        'no-this-before-super': 0,
        'no-var': 0,
        'object-shorthand': 0,
        'prefer-const': 0,

        ////////// Security //////////

        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-non-literal-require': 'off',
        'security/detect-object-injection': 'off',


    },
};
