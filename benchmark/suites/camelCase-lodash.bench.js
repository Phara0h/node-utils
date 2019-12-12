const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const camelCase = require('../../').camelCase;

module.exports = suite(
    'camelCase-Lodash',

    add('Old', () => {
        _.camelCase('foo_bar');
    }),

    add('Node-Utils', () => {
        camelCase('foo_bar');
    }),

    cycle(),
    complete()
);
