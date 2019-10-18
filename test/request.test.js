const {request} = require('..');

describe('Request', () => {
    var server;

    test('Start Test Server', async ()=>{
        server = require('@abeai/recho')({ip: '0.0.0.0',
            port: 4261});
        var p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, 500);
        });

        await p;

        expect(1).toEqual(1);
    });
    test('ECCONRESET Invalid', async () => {
        //  expect.assertions(1);
        expect(request({
            uri: 'http://127.0.0.1:4261/econnreset',
            simple: false,
            retryReset: true
        })).rejects.toBeDefined();
    });

    test('ECCONRESET', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/econnreset/flipflop',
            simple: false,
            retryReset: true,
            resolveWithFullResponse: true
        });

        expect(res.statusCode).toEqual(200);

    });

    test('Redirect', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/redirect?url=' + encodeURI('http://127.0.0.1:4261/redirected'),
            simple: false,
            retryReset: true,
            resolveWithFullResponse: true
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({body: null,
            query: {},
            params: {param1: 'redirected'},
            url: '/redirected',
            method: 'GET',
            headers: {host: '127.0.0.1:4261', connection: 'keep-alive'},
            id: 6,
            ip: '127.0.0.1',
            hostname: '127.0.0.1:4261'});

    });
});
