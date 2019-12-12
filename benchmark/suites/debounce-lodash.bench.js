const {add, cycle, suite, complete} = require('benny');
const _ = require('lodash/debounce');
const debounce = require('../../').debounce;

const test = function() {
    return 1 + 1;
};

module.exports = suite(
    'Debounce-Lodash',

    add('Old', () => {
        _(test, 20, null)();

    }, {delay: 1, maxTime: 2}),

    add('Node-Utils', () => {
        debounce(test, 20)();
    }, {delay: 1, maxTime: 2}),

    cycle(),
    complete()
);
