/* eslint-disable global-require */
'use strict';

const gulp = require('gulp');
const pgtools = require('pgtools');

module.exports = function(gv) {

    gulp.task('db:create', function(cb) {
        pgtools.createdb(process.env.POSTGRES_URL, _getDatabaseName(), function(err, res) {
            if (err) {
                cb(err);
            } else {
                cb();
            }
        });
    });

    gulp.task('db:drop', function(cb) {
        pgtools.dropdb(process.env.POSTGRES_URL, _getDatabaseName(), function(err, res) {
            if (err) {
                if (err.name === 'invalid_catalog_name'
                    && err.message.match(/Cause: database ".*" does not exist/) !== null) {
                    cb();
                } else {
                    cb(err);
                }
            } else {
                cb();
            }
        });
    });
};

function _getDatabaseName() {
    return process.env.POSTGRES_URL.match(/\/([\w]+)$/)[1];
}
