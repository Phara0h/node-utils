var nodeUtils = function() {
    var _clone = require('./lib/clone');

    this.cloneDeepWith = _clone.cloneDeepWith;
    this.cloneDeep = _clone.cloneDeep;
    this.clone = _clone.clone;

    this.merge = _clone.merge;

    this.get = require('./lib/get');
    this.set = require('./lib/set');
    this.isEmpty = require('./lib/isEmpty');
    this.mapKeys = require('./lib/mapKeys');

    this.PGTypes = require('./lib/postgres/PGTypes');
    this.PGConnecter = require('./lib/postgres/PGConnecter');
    this.Base = require('./lib/postgres/Base');
    this.PGBaseModel = require('./lib/postgres/PGBaseModel');
    this.PGEncryptModel = require('./lib/postgres/PGEncryptModel');
    this.PGActiveModel = require('./lib/postgres/PGActiveModel');

    this.request = require('./lib/request');

    this.keysToCamel = require('./lib/camelCase');

    this.Timer = require('./lib/timer');

    this.redaction = require('./lib/redaction');

    this.defaultPublicServiceHeaders = require('./lib/defaultPublicServiceHeaders');

    return this;
}();

module.exports = nodeUtils;
