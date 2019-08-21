'use strict';

module.exports = function isEmpty(obj) {
    return obj ? Object.keys(obj).length == 0 : true;
}
