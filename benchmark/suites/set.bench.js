const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const set = require('../../').set;

module.exports = suite(
    'Set',

    add('Lodash', () => {
        _.set({a: [{b: {c: 3}}]}, ['a', '0', 'b', 'c'], 4);
    }),

    add('Node-Utils', () => {
        set({a: [{b: {c: 3}}]}, ['a', '0', 'b', 'c'], 4);
    }),

    cycle(),
    complete()
);
