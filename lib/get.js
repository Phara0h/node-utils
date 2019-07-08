var get = function get(obj, query, defaultReturn) {
    try {

        if (!Array.isArray(query)) {
            query = query.replace(/\[/g, '.').replace(/\]/g, '').split('.');
            console.log(query);
        }

        for (var i = 0; i < query.length; i++) {
            obj = obj[query[i]];
        }

        return obj;
    } catch (e) {
        return defaultReturn === undefined ? null : defaultReturn;
    }
};

module.exports = get;
