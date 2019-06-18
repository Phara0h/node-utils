var client = {
    https: require('https'),
    http: require('http'),
};

var request = function request(options) {
    options.simple = options.simple !== false;
    function promiseRequest(resolve, reject) {
        if (options.json) {
            options.headers['Content-Type'] = 'application/json';
        }

        var req = client[options.uri.split(':')[0]].request(options.uri, options, (res)=>{
            res.body = '';
            res.on('data', (chunk) => {
                res.body += chunk;
            });
            res.on('end', () => {
                if (res.headers['content-type'] && res.headers['content-type'].indexOf('json') > -1) {
                    res.body = JSON.parse(res.body);
                }
                if (options.simple) {
                    if (res.statusCode > 299 || res.statusCode < 200) {
                        reject({
                            statusCode: res.statusCode,
                            error: res.body,
                            options: options,
                            response: res,
                        });
                    }
                }
                resolve(options.resolveWithFullResponse ? res : res.body);
            });
        });

        req.on('error', (e) => {
            reject({
                cause: e,
                error: e,
                options: options,
                request: req,
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
