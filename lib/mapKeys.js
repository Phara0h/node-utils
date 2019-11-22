'use strict';

module.exports = function mapKeys(object, iteratee) {
    const keys = Object.keys(object);
    let newObj = {};

    for (var i = 0; i < keys.length; i++) {
        newObj[iteratee(object[keys[i]], keys[i])] = object[keys[i]];
    }

    return newObj;
};
