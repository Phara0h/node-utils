const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const snakeCase = require('../../').snakeCase;

module.exports = suite(
    'snakeCase-Lodash',

    add('Old', () => {
        _.snakeCase('fooBar');
    }),

    add('Node-Utils', () => {
        snakeCase('fooBar');
    }),

    cycle(),
    complete()
);
