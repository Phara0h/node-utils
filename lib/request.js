'use strict';

const qs = require('querystring');
const url = require('url');

const REDIRECT_CODES = [301, 302, 303, 307];

var client = {
    https: require('https'),
    http: require('http'),
};
var agent = {
    http: new client.http.Agent(
        {
            keepAlive: true
        }),
    https: new client.https.Agent(
        {
            keepAlive: true
        })
};

var request = function request(options) {
    options.simple = options.simple !== false;

    if (options.qs) {
        var escQS = qs.stringify(options.qs);

        if (escQS.length > 0) {
            options.uri += (options.uri.indexOf('?') > -1 ? '&' : '?') + escQS;
        }
    }

    function promiseRequest(resolve, reject, redirectsCount = 0) {

        var proto = options.uri.split(':')[0];

        if (options.keepAlive !== false) {
            options.agent = agent[proto];
        }

        if (!options.headers) {
            options.headers = {};
        }

        if (options.json) {
            options.headers['Content-Type'] = 'application/json';
        } else if (options.form) {
            options.body = qs.stringify(options.form);
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            options.headers['Content-Length'] = Buffer.byteLength(options.body);
        }

        if (options.authorization) {
            if (options.authorization.basic) {
                options.headers['Authorization'] = 'Basic ' + Buffer.from(options.authorization.basic.client + ':' + options.authorization.basic.secret, 'ascii').toString('base64');
            } else if (options.authorization.bearer) {
                options.headers['Authorization'] = 'Bearer ' + options.authorization.bearer;
            }

            delete options.authorization;
        }

        if (options.redirectMax == null) {
            options.redirectMax = 5;
        }

        var req = client[proto].request(options.uri, options, (res) => {
            res.body = '';
            res.on('data', (chunk) => {
                res.body += chunk;
            });
            res.on('end', () => {

                if (REDIRECT_CODES.indexOf(res.statusCode) !== -1 && redirectsCount < options.redirectMax) {
                    options.uri = url.resolve(options.uri, res.headers.location);
                    options.proto = options.uri.split(':')[0];
                    return promiseRequest(resolve, reject, ++redirectsCount);
                }
                const connection = res.info || res.connection;

                if (res.headers['content-type'] && res.headers['content-type'].indexOf('json') > -1) {
                    try {
                        res.body = JSON.parse(res.body);
                    } catch (e) {
                        // remove as causes circular references
                        delete options.agent;
                        reject(
                            {
                                statusCode: res.statusCode,
                                error: res.body,
                                options,
                                response: {
                                    statusCode: res.statusCode,
                                    headers: res.headers,
                                    remoteAddress: connection && connection.remoteAddress,
                                    remotePort: connection && connection.remotePort,
                                },
                            });
                        return;
                    }
                }
                if (options.simple) {
                    if (res.statusCode > 299 || res.statusCode < 200) {
                        // remove as causes circular references
                        delete options.agent;

                        reject({
                            statusCode: res.statusCode,
                            error: res.body,
                            options,
                            response: {
                                statusCode: res.statusCode,
                                headers: res.headers,
                                remoteAddress: connection && connection.remoteAddress,
                                remotePort: connection && connection.remotePort,
                            },
                        });
                        return;
                    }
                }
                resolve(options.resolveWithFullResponse ? res : res.body);

            });
        });

        req.on('error', async (e) => {

            if (e.code == 'ECONNRESET' && options.retryConnReset) {
                options.retryConnReset = false;

                if (options.logger) {
                    // remove as causes circular references
                    delete options.agent;
                    options.logger.info('node-utils request: Retrying request', {
                        unindexed: {
                            options,
                            error: {
                                message: e.message,
                                code: e.code,
                            },
                        },
                    });
                }

                try {
                    const res2 = await request(options);

                    resolve(res2);
                } catch (e) {
                    // remove as causes circular references
                    delete options.agent;
                    reject(e);
                }

                return;
            }
            // remove as causes circular references
            delete options.agent;

            reject({
                cause: e,
                error: e,
                options: options,
            });
        });

        if (options.body) {
            req.write(options.json ? JSON.stringify(options.body) : options.body);
        }

        req.end();
        return this;
    }
    return new Promise(promiseRequest);
};

module.exports = request;
