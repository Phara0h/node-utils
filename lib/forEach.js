'use strict';

module.exports = function forEach(collection, cb) {
    const isCollectionArray = Array.isArray(collection);

    if (isCollectionArray) {
        let i = 0;
        const length = collection.length;

        while (i < length) {
            cb(collection[i]);
            i++;
        }
    } else {
        let i = 0;
        const keys = Object.keys(collection);
        const length = keys.length;

        while (i < length) {
            cb(collection[keys[i]], keys[i]);
            i++;
        }
    }
};
