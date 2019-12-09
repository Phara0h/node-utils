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
*/
function camelCase(str = '') {

    let i =  str.length - 1;
    let camelCaseResult = '';
    let curLetter = '';
    let isCap = false;
    let isLower = false;
    let hitLetter = false;

    while (i >= 0) {
        curLetter = str[i];
        isCap = curLetter >= 'A' && curLetter <= 'Z';
        isLower = curLetter >= 'a' && curLetter <= 'z';

        if ((curLetter === '-' || curLetter === ' ' || curLetter === '_') && hitLetter && (str[i - 1] !== undefined && str[i - 1] !== '-' && str[i - 1] !== ' ' && str[i - 1] !== '_')) {
            camelCaseResult = camelCaseResult[0].toUpperCase() + camelCaseResult.substring(1);
            hitLetter = false;
        } else if (isCap) {
            camelCaseResult = curLetter.toLowerCase() + camelCaseResult;
            hitLetter = true;
        } else if (isLower) {
            camelCaseResult = curLetter + camelCaseResult;
            hitLetter = true;
        }
        i--;
    }
    return camelCaseResult;
};
module.exports = camelCase;
