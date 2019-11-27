'use strict';

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} cb The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, cb) {
    const isCollectionArray = Array.isArray(collection);

    if (isCollectionArray) {
        let i = 0;
        const length = collection.length;

        while (i < length) {
            if (cb(collection[i]) === false) {
                return;
            };
            i++;
        }
    } else {
        let i = 0;
        const keys = Object.keys(collection);
        const length = keys.length;

        while (i < length) {
            if (cb(collection[keys[i]], keys[i]) === false) {
                return;
            }
            i++;
        }
    }
};
module.exports = forEach;
