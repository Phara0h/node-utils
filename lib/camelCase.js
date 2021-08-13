'use strict';

/**
* Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
*
* @param {String} str='' The string to convert.
* @returns {String} Returns the camel cased string.
* @example
*
* camelCase('Foo Bar');
* // => 'fooBar'
*
* camelCase('--foo-bar--');
* // => 'fooBar'
*
* camelCase('__FOO_BAR__');
* // => 'fooBar'
*
* camelCase('fooBar');
* // => 'fooBar'
*
* camelCase('fooBAR');
* // => 'fooBar'
*/
function camelCase(str) {
    const strLength = str.length;
    let i = 0;
    let camelCaseResult = '';
    let hitSpacer = false;
    let hitUpperCase = false;

    while (i < strLength) {
        const curLetter = str[i];

        if (curLetter === '-' || curLetter === ' ' || curLetter === '_') {
            hitSpacer = true;
        } else {
            const isUpperCase = curLetter >= 'A' && curLetter <= 'Z';

            if (camelCaseResult.length > 0) {
                if (isUpperCase && (!hitUpperCase || (str[i+1] !== undefined && str[i+1] >= 'a' && str[i+1] <= 'z'))) {
                    camelCaseResult += curLetter;
                }
                else if (hitSpacer) {
                    camelCaseResult += curLetter.toUpperCase();
                } else {
                    camelCaseResult += curLetter.toLowerCase();
                }
            } else {
                camelCaseResult += curLetter.toLowerCase();
            }

            hitSpacer = false;
            hitUpperCase = isUpperCase;
        }

        i++;
    }

    return camelCaseResult;
};
module.exports = camelCase;
