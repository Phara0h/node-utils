module.exports = function kebabCase(str) {

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
