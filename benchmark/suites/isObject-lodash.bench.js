const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const isObject = require('../../').isObject;

module.exports = suite(
    'isObject-Lodash',

    add('Old', () => {
        _.isObject({test: 2});
    }),

    add('Node-Utils', () => {
        isObject({test: 2});
    }),

    cycle(),
    complete()
);
