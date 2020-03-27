const {request} = require('..');

describe('Request', () => {
    var server;

    beforeAll(async () => {
        server = require('@abeai/recho')({ip: '0.0.0.0',
            port: 4261,
            log: false
        });
        var p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, 500);
        });

        await p;
    });

    test('ECCONRESET Invalid', async () => {
        //  expect.assertions(1);
        expect(request({
            uri: 'http://127.0.0.1:4261/econnreset',
            simple: false,
            retryConnReset: true
        })).rejects.toBeDefined();
    });

    test('ECCONRESET', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/econnreset/flipflop',
            simple: false,
            retryConnReset: true,
            resolveWithFullResponse: true
        });

        expect(res.statusCode).toEqual(200);

    });

    test('Redirect', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/redirect?url=' + encodeURI('http://127.0.0.1:4261/redirected'),
            simple: false,
            resolveWithFullResponse: true
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toMatchObject(
            {
                url: '/redirected',
                method: 'GET',
            });

    });

    test('Redirect Infinity Test [Stop after default 5]', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/redirect/loop/0',
            simple: false,
            resolveWithFullResponse: true
        });

        expect(res.statusCode).toEqual(302);
        expect(res.req.path).toEqual('/redirect/loop/5');

    });

    test('Redirect Infinity Test [Stop after 2]', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/redirect/loop/0',
            simple: false,
            resolveWithFullResponse: true,
            redirectMax: 2
        });

        expect(res.statusCode).toEqual(302);
        expect(res.req.path).toEqual('/redirect/loop/2');

    });

    test('Basic Auth', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/auth/',
            simple: false,
            resolveWithFullResponse: true,
            authorization: {basic: {client: 'test', secret: 'test'}}
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toMatchObject(
            {
                url: '/auth/',
                method: 'GET',
                headers: {
                    authorization: 'Basic dGVzdDp0ZXN0',
                    host: '127.0.0.1:4261',
                    connection: 'keep-alive'
                },
            });

    });

    test('Bearer Auth', async () => {

        var res = await request({
            uri: 'http://127.0.0.1:4261/auth/',
            simple: false,
            resolveWithFullResponse: true,
            authorization: {bearer: 'xxx'}
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toMatchObject(
            {
                url: '/auth/',
                method: 'GET',
                headers: {
                    authorization: 'Bearer xxx',
                    host: '127.0.0.1:4261',
                    connection: 'keep-alive'
                },
            });

    });

});
