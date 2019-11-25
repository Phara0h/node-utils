'use strict';

module.exports = function debounce(func, delay) {
    let inDebounce;

    return function() {
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => {
            func(...arguments);
        }, delay);
    };
};
