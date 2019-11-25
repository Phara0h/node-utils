const {add, cycle, suite, complete} = require('benny');
const rp = require('request-promise');
const request = require('../../').request;
const options = {
    maxTime: 30
};

module.exports = suite(
    'Request-RequestPromise',

    add('Old', async () => {
        try {
            await rp({
                uri: 'http://127.0.0.1:4251/test',
                simple: false
            });
        } catch (e) {}
    }, options),

    add('Node-Utils', async () => {
        try {
            await request({
                uri: 'http://127.0.0.1:4251/test',
                simple: false
            });
        } catch (e) {}

    }, options),

    cycle(),
    complete()
);
