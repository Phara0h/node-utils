'use strict';
const isArray = require('isArray');
const isObject = require('isObject');
const toCamel = require('camelCase');

module.exports = function keysToCamel(o) {
    if (isObject(o) && !isArray(o)) {
        const n = {};
        const objKeys = Object.keys(o);
        const length = objKeys.length;
        let i = 0;

        while (i < length) {
            n[toCamel(objKeys[i])] = keysToCamel(o[objKeys[i]]);
            i++;
        }
        return n;

    } else if (isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }
    return o;
};
