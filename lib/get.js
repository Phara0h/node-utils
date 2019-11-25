'use strict';

module.exports = function get(obj, query, defaultReturn) {
    try {
        for (var i = 0; i < query.length; i++) {
            obj = obj[query[i]];
        }
        if (obj === undefined) {
            return defaultReturn === undefined ? null : defaultReturn;
        } else {
            return obj;
        }
    } catch (e) {
        return defaultReturn === undefined ? null : defaultReturn;
    }
};
