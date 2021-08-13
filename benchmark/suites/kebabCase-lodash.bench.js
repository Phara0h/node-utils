const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const kebabCase = require('../../').kebabCase;

module.exports = suite(
    'kebabCase-Lodash',

    add('Old', () => {
        _.kebabCase('fooBar');
    }),

    add('Node-Utils', () => {
        kebabCase('fooBar');
    }),

    cycle(),
    complete()
);
