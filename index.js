var nodeUtils = function() {
    var _clone = require('./lib/clone');

    this.merge = _clone.merge;
    this.cloneDeepWith = _clone.cloneDeepWith;
    this.cloneDeep = _clone.cloneDeep;
    this.clone = _clone.clone;

    this.get = require('./lib/get');
    this.set = require('./lib/set');
    this.toPath = require('./lib/toPath');
    this.isEmpty = require('./lib/isEmpty');
    this.isArray = require('./lib/isArray');
    this.isObject = require('./lib/isObject');
    this.mapKeys = require('./lib/mapKeys');
    this.forEach = require('./lib/forEach');
    this.snakeCase = require('./lib/snakeCase');
    this.camelCase = require('./lib/camelCase');
    this.kebabCase = require('./lib/kebabCase');
    this.debounce = require('./lib/debounce');

    this.PGTypes = require('./lib/postgres/PGTypes');
    this.PGConnecter = require('./lib/postgres/PGConnecter');
    this.Base = require('./lib/postgres/Base');
    this.PGBaseModel = require('./lib/postgres/PGBaseModel');
    this.PGEncryptModel = require('./lib/postgres/PGEncryptModel');
    this.PGActiveModel = require('./lib/postgres/PGActiveModel');

    this.request = require('./lib/request');

    this.keysToCamel = require('./lib/keysToCamel');

    this.Timer = require('./lib/timer');

    this.redaction = require('./lib/redaction');

    this.defaultPublicServiceHeaders = require('./lib/defaultPublicServiceHeaders');

    return this;
}();

module.exports = nodeUtils;
