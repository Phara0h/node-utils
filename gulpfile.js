/* eslint-disable global-require */
'use strict';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    process.env.NODE_PATH = `${__dirname}/../src/lib`;
    require('module').Module._initPaths();
    require('dotenv').config();
}

var gulp = require('gulp');

/**
 * Create NameSpace for re-usable functions
 */
gulp.shared = {};

require('./gulp_tasks/postgress')();
