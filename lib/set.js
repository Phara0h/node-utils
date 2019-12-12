'use strict';

/**
    * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
    * it's created. Arrays are created for missing index properties while objects
    * are created for all other missing properties.
    *
    * **Note:** This method mutates `object`.
    *
    * @param {Object} object The object to modify.
    * @param {Array} path The path of the property to set.
    * @param {*} value The value to set.
    * @returns {Object} Returns `object`.
    * @example
    *
    * var object = { 'a': [{ 'b': { 'c': 3 } }] };
    *
    * set(object, ['x', '0', 'y', 'z'], 5);
    * console.log(object.x[0].y.z);
    * // => 5
    */
function set(obj, query, value) {
    const length = query.length;
    const lastIndex = length - 1;
    let cursor = obj;
    let i = 0;

    while (i < length) {
        let newValue = value;

        if (i != lastIndex) {
            if (typeof cursor[query[i]] === 'object') {
                newValue = cursor[query[i]];
            } else if (isNaN(query[i + 1])) {
                newValue = {};
            } else {
                newValue = [];
                query[i + 1] = Number(query[i + 1]);
            }
        }
        cursor = cursor[query[i]] = newValue;
        i++;
    }

    return obj;
};
module.exports = set;
