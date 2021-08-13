'use strict';

const isObject = require('./isObject');
const toCamel = require('./camelCase');

/**
    * Converts Object's keys from snake,kebab and space case to
    * [camel case](https://en.wikipedia.org/wiki/CamelCase).
    *
    * @param {Object} o The object to convert.
    * @returns {String} Returns the object with it's key's camelcased.
    * @example
    *
    * keysToCamel({foo_bar:{bar_meme:20}})
    * // => {fooBar:{bar_meme:20}}
    *
    * keysToCamel({foo_bar:{bar_meme:20}}, true)
    * // => {fooBar:{barMeme:20}}
    *
    */
function keysToCamel(o, recursive = false) {
    if (Array.isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }

    if (isObject(o)) {
        const n = {};

        for (const key in o) {
            n[toCamel(key)] = recursive ? keysToCamel(o[key], recursive) : o[key];
        }

        return n;
    }

    return o;
};
module.exports = keysToCamel;
