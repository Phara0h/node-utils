'use strict';

/**
    * Checks if `value` is an empty object or array
    *
    * Objects are considered empty if they have no own enumerable string keyed
    * properties.
    *
    *
    * @param {*} value The value to check.
    * @returns {boolean} Returns `true` if `value` is empty, else `false`.
    * @example
    *
    * isEmpty({});
    * // => true
    *
    * isEmpty([]);
    * // => true
    *
    * isEmpty([1, 2, 3]);
    * // => false
    *
    * isEmpty({ 'a': 1 });
    * // => false
    */
function isEmpty(obj) {
    return obj ? Object.keys(obj).length == 0 && !obj.length : true;
};
module.exports = isEmpty;
