'use strict';

/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @param {Object} object The object to query.
     * @param {Array} path The path of the property to get.
     * @param {*} [defaultReturn] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * get(object, 'a[0].b.c');
     * // => 3
     *
     * get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     */
function get(obj, query, defaultReturn) {
    const length = query.length;
    let i = 0;

    try {
        while (i < length) {
            obj = obj[query[i]];
            i++;
        }
        if (obj === undefined) {
            return defaultReturn === undefined ? null : defaultReturn;
        } else {
            return obj;
        }
    } catch (e) {
        return defaultReturn === undefined ? null : defaultReturn;
    }

};
module.exports = get;
