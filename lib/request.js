'use strict';

const qs = require('querystring');
const url = require('url');
const https = require('https');
const http = require('http');

const REDIRECT_CODES = [301, 302, 303, 307];

const client = {
    https,
    http,
};

const agent = {
    http: new client.http.Agent({
        keepAlive: true
    }),
    https: new client.https.Agent({
        keepAlive: true
    })
};

/**
 * Makes a HTTP/S Request to a given url.
 *
 * @param {Object} options Supports all of nodes HTTP/S Module's options + the folloing.
 * @param {String} options.uri fully qualified uri.
 * @param {String} options.method=GET http method.
 * @param {Object} options.headers={} http headers.
 * @param {Object} options.qs object containing querystring values to be appended to the `uri`.
 * @param {Boolean} options.simple=true throws an error for any non 2xx status code response.
 * @param {Boolean} options.resolveWithFullResponse=false set to true if the full response object is wanted instead of just the `body` data.
 * @param {Object} options.qs object containing querystring values to be appended to the `uri`.
 * @param {Object|Buffer|String|ReadSteam} options.body entity body for PATCH, POST and PUT requests. Must be a `Buffer`, `String` or `ReadStream`. If json is true, then `body` must be a JSON-serializable object.
 * @param {Object} options.form when passed an object or a querystring, this sets body to a querystring representation of value, and adds `Content-type: application/x-www-form-urlencoded header`.
 * @param {Boolean} options.json sets`body` to JSON representation of value and adds `Content-type: application/json header`. Additionally, parses the response body as JSON.
 * @param {Boolean} options.keepAlive=true set to `false` to turn off keepAlive sockets.
 * @param {Object} options.authorization.basic takes an object with `client` and `secret` props to create a `Authorization: Basic client:secret` base64 header.
 * @param {String} options.authorization.bearer creates a `Authorization: Bearer bearer` header.
 * @param {Number} options.redirectMax=5 number of times the request will follow a redirect from the server.
 * @param {Number} options.timeout milliseconds after which the request should time out with an error.
 * @param {Object} options.logger the pino logger to log errors.
 * @returns {Promise} Returns the promise that gets resolved or rejected.
 * @example
 *
 * await request({
 *        uri: 'http://127.0.0.1:4261/'),
 *        simple: false,
 *        resolveWithFullResponse: true
 *    });
 */

function request(rawOptions) {
    const options = _parseOptions(rawOptions);
    const protocol = options.uri.split(':')[0];
    const reqOpts = Object.assign({}, options, {
        agent: options.keepAlive === false ? null : agent[protocol],
    });

    return new Promise((resolve, reject) => {
        let timeoutTimer;

        const req = client[protocol].request(options.uri, reqOpts, (res) => {
            res.body = '';

            res.on('data', (chunk) => {
                res.body += chunk;
            });

            res.on('end', async () => {
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }

                try {
                    const response = await _handleResponse(res, options);

                    return resolve(response);
                } catch (err) {
                    return reject(err);
                }
            });
        });

        req.on('socket', function(socket) {
            socket.reUseCount = socket.reUseCount !== undefined ? socket.reUseCount + 1 : 0;
        })

        req.on('error', async (err) => {
            if (timeoutTimer) {
                clearTimeout(timeoutTimer);
            }

            try {
                const response = await _handleError(req, err, options);

                return resolve(response);
            } catch (err) {
                return reject(err);
            }
        });

        if (options.body) {
            req.write(options.json ? JSON.stringify(options.body) : options.body);
        }

        req.end();

        if (options.timeout) {
            timeoutTimer = setTimeout(() => {
                req.abort();

                const error = new Error('Request Timeout');
                error.type = 'timeout';

                reject(error);
            }, options.timeout);
        }
    });
}

function _parseOptions(options) {
    options.simple = options.simple !== false;

    if (options.qs) {
        const escQS = qs.stringify(options.qs);

        if (escQS.length > 0) {
            options.uri += (options.uri.indexOf('?') > -1 ? '&' : '?') + escQS;
        }
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

    options.redirectCount = options.redirectCount || 0;

    return options;
}

async function _handleResponse(res, options) {
    // Follow redirects
    if (REDIRECT_CODES.indexOf(res.statusCode) !== -1 && options.redirectCount < options.redirectMax) {
        options.redirectCount += 1;
        options.uri = url.resolve(options.uri, res.headers.location);

        return request(options);
    }

    const connection = res.info || res.connection;

    if (res.headers['content-type'] && res.headers['content-type'].indexOf('json') > -1) {
        try {
            res.body = JSON.parse(res.body);
        } catch (e) {
            throw {
                statusCode: res.statusCode,
                error: res.body,
                options,
                response: {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    remoteAddress: connection && connection.remoteAddress,
                    remotePort: connection && connection.remotePort,
                },
            };
        }
    }

    if (options.simple) {
        if (res.statusCode > 299 || res.statusCode < 200) {
            throw {
                statusCode: res.statusCode,
                error: res.body,
                options,
                response: {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    remoteAddress: connection && connection.remoteAddress,
                    remotePort: connection && connection.remotePort,
                },
            };
        }
    }

    return options.resolveWithFullResponse ? res : res.body;
}

async function _handleError(req, err, options) {
    // Retry on connection reset when reusing sockets
    if (err.code == "ECONNRESET" && req.socket.reUseCount > 0) {
        if (options.logger) {
            options.logger.info('node-utils request: Retrying request', {
                unindexed: {
                    options,
                    error: {
                        message: err.message,
                        code: err.code,
                    },
                },
            });
        }

        return request(options);
    }

    throw {
        cause: err,
        error: err,
        options: options,
    };
}

module.exports = request;
