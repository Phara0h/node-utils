const {add, cycle, suite, complete} = require('benny');
const mapKeys = require('../../').mapKeys;

var testObject = {a: 1, b: 2};

function AltMapKeys(object, iteratee) {
    return Object.entries(object).reduce((r, [k, v]) => Object.assign(r, {[iteratee(v, k)]: v}), {});
};

module.exports =  suite(
    'Mapkeys-AltMap',

    add('Old', () => {
        AltMapKeys(testObject, (value, key)=>{
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
