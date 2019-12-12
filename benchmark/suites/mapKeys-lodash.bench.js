const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/fp');
const mapKeys = require('../../').mapKeys;

var testObject = {a: 1, b: 2};

module.exports =  suite(
    'Mapkeys-Lodash',

    add('Old', () => {
        _.mapKeys(testObject, (value, key)=>{
            return key + value;
        });
    }),

    add('Node-Utils', () => {
        mapKeys(testObject, (value, key)=>{
            return key + value;
        });
    }),

    cycle(),
    complete()
);
