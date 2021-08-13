const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const get = require('../../').get;

module.exports = suite(
    'Get-Lodash',

    add('Old', () => {
        _.get({a: [{b: {c: 3}}]}, ['a', '0', 'b', 'c'], 4);
    }),

    add('Node-Utils', () => {
        get({a: [{b: {c: 3}}]}, ['a', '0', 'b', 'c'], 4);
    }),

    cycle(),
    complete()
);
