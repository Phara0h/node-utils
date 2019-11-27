'use strict';

/**
    * Converts `string` to
    * [snake case](https://en.wikipedia.org/wiki/Snake_case).
    *
    * @param {string} [str=''] The string to convert.
    * @returns {string} Returns the snake cased string.
    * @example
    *
    * snakeCase('Foo Bar');
    * // => 'foo_bar'
    *
    * snakeCase('fooBar');
    * // => 'foo_bar'
    *
    * snakeCase('--FOO-BAR--');
    * // => 'foo_bar'
    */
function snakeCase(str = '') {

    let i =  str.length - 1;
    let snakeCaseResult = '';
    let curLetter = '';
    let isCap = false;
    let isLower = false;
    let hitLetter = false;

    while (i >= 0) {
        curLetter = str[i];
        isCap = curLetter >= 'A' && curLetter <= 'Z';
        isLower = curLetter >= 'a' && curLetter <= 'z';

        if (isCap &&  str[i - 1] >= 'a' && str[i - 1] <= 'z') {
            snakeCaseResult =  '_' + curLetter.toLowerCase()  + snakeCaseResult;
        } else if ((curLetter === '-' || curLetter === ' ') && hitLetter && (str[i - 1] !== '-' && str[i - 1] !== ' ')) {
            snakeCaseResult = '_' + snakeCaseResult;
            hitLetter = false;
        } else if (isCap) {
            snakeCaseResult = curLetter.toLowerCase() + snakeCaseResult;
        } else if (isLower) {
            snakeCaseResult = curLetter + snakeCaseResult;
        }

        hitLetter = isCap || isLower;
        i--;
    }
    return snakeCaseResult;
};
module.exports = snakeCase;
