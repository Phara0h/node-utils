'use strict';

module.exports = function set(obj, query, value) {
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
