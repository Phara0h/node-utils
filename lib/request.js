'use strict';

const qs = require('querystring');

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

    function promiseRequest(resolve, reject) {

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

        var req = client[proto].request(options.uri, options, (res) => {
            res.body = '';
            res.on('data', (chunk) => {
                res.body += chunk;
            });
            res.on('end', () => {
                if (res.headers['content-type'] && res.headers['content-type'].indexOf('json') > -1) {
                    try {
                        res.body = JSON.parse(res.body);
                    } catch (e) {
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
                    }
                }
                if (options.simple) {
                    if (res.statusCode > 299 || res.statusCode < 200) {
                        const connection = res.info || res.connection;

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
                    }
                }
                resolve(options.resolveWithFullResponse ? res : res.body);
            });
        });

        req.on('error', (e) => {

            // remove as causes circular references
            delete options.agent;

            reject(
                {
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
