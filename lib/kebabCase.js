'use strict';

/**
    * Converts `string` to
    * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
    *
    * @param {string} [str=''] The string to convert.
    * @returns {string} Returns the kebab cased string.
    * @example
    *
    * kebabCase('Foo Bar');
    * // => 'foo-bar'
    *
    * kebabCase('fooBar');
    * // => 'foo-bar'
    *
    * kebabCase('__FOO_BAR__');
    * // => 'foo-bar'
    */
function kebabCase(str = '') {

    let i =  str.length - 1;
    let kebabCaseResult = '';
    let curLetter = '';
    let isCap = false;
    let isLower = false;
    let hitLetter = false;

    while (i >= 0) {
        curLetter = str[i];
        isCap = curLetter >= 'A' && curLetter <= 'Z';
        isLower = curLetter >= 'a' && curLetter <= 'z';

        if (isCap &&  str[i - 1] >= 'a' && str[i - 1] <= 'z') {
            kebabCaseResult =  '-' + curLetter.toLowerCase()  + kebabCaseResult;
        } else if ((curLetter === '_' || curLetter === ' ') && hitLetter && (str[i - 1] !== '_' && str[i - 1] !== ' ')) {
            kebabCaseResult = '-' + kebabCaseResult;
            hitLetter = false;
        } else if (isCap) {
            kebabCaseResult = curLetter.toLowerCase() + kebabCaseResult;
        } else if (isLower) {
            kebabCaseResult = curLetter + kebabCaseResult;
        }

        hitLetter = isCap || isLower;
        i--;
    }
    return kebabCaseResult;
};
module.exports = kebabCase;
