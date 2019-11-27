'use strict';

const filterChars = ['\'', '"',  ']', '[', '.'];

/**
   * Converts `value` to a property path array.
   *
   * @param {String} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
function toPath(value) {
    let result = [];

    const length = value.length;
    let i = 0;
    let cur = '';

    while (i < length) {
        const l = value[i];
        const index = filterChars.indexOf(l);

        if (index > -1) {
            if (index > 2) {
                result.push(cur);
                cur = '';
            }
        } else {
            cur = cur + l;
        }
        i++;
    }
    result.push(cur);

    return result;
};
module.exports = toPath;
