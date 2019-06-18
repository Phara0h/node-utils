'use strict';

const PGConnecter = require('./PGConnecter');

module.exports = function(table, defaultModel, pg = new PGConnecter()) {
    table = table;
    _pkKey = null;

    var keys = Object.keys(_defaultModel);

    for (var i = 0; i < keys.length; i++) {
        if (_defaultModel[keys[i]] === 'PK') {
            _pkKey = keys[i];
            break;
        }
    }

    return {
        _convertToModel(results) {
            var models = [];

            if (results && results.rows) {
                var keys = Object.keys(_defaultModel);

                for (var i = 0; i < results.rows.length; i++) {
                    var model = {};

                    for (var j = 0; j < keys.length; j++) {
                        model[keys[j]] = results.rows[i][keys[j]];
                    }
                    models.push(model);
                }
                return models;
            } else {
                return results;
            }
        },

        _buildQueryFromFV(fieldValues, operator = 'AND', startIndex = 1) {
            var fieldValuesKey = Object.keys(fieldValues);
            var values = [];
            var query = '';

            for (var i = 0; i < fieldValuesKey.length; i++) {
                var val = fieldValues[fieldValuesKey[i]];

                if (val && Array.isArray(val)) {
                    for (var j = 0; j < val.length; j++) {
                        if (val[j + 1] === null) {
                            query += `${fieldValuesKey[i]} IS NULL${j < val.length ? ` ${val[j]} ` : ' ' }`;
                        } else {
                            values.push(val[j++]);
                            query += `${fieldValuesKey[i]}=$${startIndex}${j < val.length ? ` ${val[j]} ` : ' ' }`;
                            startIndex++;
                        }
                    }
                    if (fieldValuesKey.length > i + 1) {
                        query += ` ${operator} `;
                    }
                } else if (val === null) {
                    query += `${fieldValuesKey[i]} IS NULL${fieldValuesKey.length > i + 1 ? ` ${operator} ` : ' '}`;
                } else {
                    values.push(val);
                    query += `${fieldValuesKey[i]}=$${startIndex}${fieldValuesKey.length > i + 1 ? ` ${operator} ` : ' '}`;
                    startIndex++;
                }
            }
            return (
                {
                    query,
                    values,
                });
        },

        async findById(id) {
            return await findAllBy(
                {
                    [_pkKey]: id,
                });
        },

        async findAllBy(fieldValues, operator = 'AND') {
            var builtQuery = _buildQueryFromFV(fieldValues, operator);
            var query = `SELECT * FROM ${table} WHERE ${builtQuery.query}`;

            return _convertToModel(await pg.query(query, builtQuery.values));
        },

        async findAll() {
            return _convertToModel(await pg.query(`SELECT * FROM ${table}`));
        },

        async deleteById(id) {
            return await deleteAllBy(
                {
                    [_pkKey]: id,
                });
        },

        async deleteAllBy(fieldValues, operator = 'AND') {
            var builtQuery = _buildQueryFromFV(fieldValues, operator);
            var query = `DELETE FROM ${table} WHERE ${builtQuery.query} RETURNING *;`;

            return _convertToModel(await pg.query(query, builtQuery.values));
        },

        async deleteAll() {
            var query = `DELETE FROM ${table} RETURNING *;`;

            return _convertToModel(await pg.query(query));
        },

        async create(model, returnModel = true) {
            var keys = Object.keys(model);
            var query = `INSERT INTO ${table} (${keys.toString()}) VALUES(`;

            for (var i = 0; i < keys.length; i++) {
                query += '$' + (i + 1) + (keys.length > i + 1 ? ', ' : ')');
            }
            if (returnModel) {
                query += ' RETURNING *';
            }

            return _convertToModel(await pg.query(query, Object.values(model)));
        },

        async updateById(id, model) {
            return await updateAllBy(
                {
                    [_pkKey]: id,
                }, model);
        },

        async updateAllBy(fieldValues, model, operator = 'AND', returnModel = true) {
            var modelKeys = Object.keys(model);
            var modelValues = Object.values(model);

            var query = `UPDATE ${table} SET `;

            for (var i = 0; i < modelKeys.length; i++) {
                query += `${modelKeys[i]}=$${i + 1}${modelKeys.length > i + 1 ? ', ' : ' '}`;
            }

            var builtQuery = _buildQueryFromFV(fieldValues, operator, modelValues.length + 1);

            query += ` WHERE ${builtQuery.query}`;
            if (returnModel) {
                query += ' RETURNING *';
            }

            return _convertToModel(await pg.query(query, [...modelValues, ...builtQuery.values]));
        },

        async updateAll(model) {
            var modelKeys = Object.keys(model);

            var query = `UPDATE ${table} SET `;

            for (var i = 0; i < modelKeys.length; i++) {
                query += `${modelKeys[i]}=$${i + 1}${modelKeys.length < i + 1 ? ', ' : ''}`;
            }

            return _convertToModel(await pg.query(query, Object.values(model)));
        },
    };
};
