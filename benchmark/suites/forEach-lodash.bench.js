const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const forEach = require('../../').forEach;

var testObject = {a: 1, b: 2};

module.exports =  suite(
    'ForEach-Lodash',

    add('Old', () => {
        _.forEach(testObject, (value, key)=>{
        });
    }),

    add('Node-Utils', () => {
        forEach(testObject, (value, key)=>{
        });
    }),

    cycle(),
    complete()
);
