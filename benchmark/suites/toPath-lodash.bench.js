const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash');
const toPath = require('../../').toPath;
const regex = new RegExp(/./, 'g');

// This needs to happens since lodash cheats and caches its results with _.memoized.

function getRandomPath() {
    return Math.random().toString(36).substring(2).replace(regex, function(n, i) {
        if (!i) {
            return n;
        }
        return isNaN(n) ? `.${n}` : `[${n}]`;
    });
};

module.exports = suite(
    'toPath-Lodash',

    add('Old', () => {
        _.toPath(getRandomPath());
    }),

    add('Node-Utils', () => {
        toPath(getRandomPath());
    }),
    cycle(),
    complete()
);
