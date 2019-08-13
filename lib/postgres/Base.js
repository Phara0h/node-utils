'use strict';

const PGTypes = require('./PGTypes');

var Base = function(_class, tableName, model) {
    var _agg = class _Aggregate extends _class {
        constructor(...args) {

            /*  call base class constructor  */
            super(_agg.defaultModel, _agg.table, _agg.pkKey, ...args);

        }
        static set table(name) {
            this._table = name;
        }

        static get table() {
            return this._table;
        }

        static set defaultModel(name) {
            this._defaultModel = name;
        }

        static get defaultModel() {
            return this._defaultModel;
        }

        static set pkKey(name) {
            this._pkKey = name;
        }

        static get pkKey() {
            return this._pkKey;
        }
    };

    var keys = Object.keys(model);

    for (var i = 0; i < keys.length; i++) {
        if (model[keys[i]] === PGTypes.PK) {
            _agg.pkKey = keys[i];
            break;
        }
    }

    _agg.table = tableName;
    _agg.defaultModel = model;

    return _agg;
};

module.exports = Base;
