var get = function get(obj, query, defaultReturn) {
    try {

        for (var i = 0; i < query.length; i++) {
            obj = obj[query[i]];
        }

        return obj;
    } catch (e) {
        return defaultReturn === undefined ? null : defaultReturn;
    }
};

module.exports = get;
