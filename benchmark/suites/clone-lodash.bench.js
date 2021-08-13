const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const clone = require('../../').clone;

const objects = [{a: 1}, {b: 2}];

module.exports = suite(
    'Clone-Lodash',

    add('Old', () => {
        _.clone(objects);
    }),

    add('Node-Utils', () => {
        Object.assign(objects);
    }),

    cycle(),
    complete()
);
