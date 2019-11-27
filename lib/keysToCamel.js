'use strict';

const isArray = require('isArray');
const isObject = require('isObject');
const toCamel = require('camelCase');

/**
    * Converts Object's keys from snake,kebab and space case to
    * [camel case](https://en.wikipedia.org/wiki/CamelCase).
    *
    * @param {Object} o The object to convert.
    * @returns {string} Returns the object with it's key's camelcased.
    * @example
    *
    * keysToCamel({foo_bar:{bar_meme:20}})
    * // => {fooBar:{barMeme:20}}
    *
    */
function keysToCamel(o) {
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
module.exports = keysToCamel;
