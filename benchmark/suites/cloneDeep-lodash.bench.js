const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const cloneDeep = require('../../').cloneDeep;

const objects = [{a: 1}, {b: 2}];

module.exports = suite(
    'CloneDeep-Lodash',

    add('Old', () => {
        _.cloneDeep(objects);
    }),

    add('Node-Utils', () => {
        cloneDeep(objects);
    }),

    cycle(),
    complete()
);
