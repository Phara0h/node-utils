
const request = require('../../lib/request');
const testServer = require('./_helpers/testServer');
const uuid = require('uuid/v4');

describe('request', () => {
  let server;

  beforeAll(async () => {
    server = await testServer();
  });

  afterAll(() => {
    // Don't await because it takes ages (surprisingly)
    server.stop();
  });

  describe('timeout', () => {
    it('throws a timeout error if timeout gets reached', async () => {
      expect.assertions(3);

      try {
        const result = await request({
          uri: `${server.baseUrl}/wait?timeout=200`,
          simple: false,
          resolveWithFullResponse: true,
          timeout: 100,
        });
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Request Timeout');
        expect(error).toHaveProperty('type', 'timeout');
      }
    });

    it('doesn\'t throw a timeout error if timeout doesn\'t get reached with successful response', async () => {
      const result = await request({
        uri: `${server.baseUrl}/wait?timeout=100&statusCode=200`,
        simple: false,
        resolveWithFullResponse: true,
        timeout: 200,
      });

      expect(result.statusCode).toEqual(200);
    });

    it('doesn\'t throw a timeout error if timeout doesn\'t get reached with error response', async () => {
      const result = await request({
        uri: `${server.baseUrl}/wait?timeout=100&statusCode=500`,
        simple: false,
        resolveWithFullResponse: true,
        timeout: 200,
      });

      expect(result.statusCode).toEqual(500);
    });

    it('doesn\'t throw a timeout error if timeout doesn\'t get reached with failing request', async () => {
      expect.assertions(2);

      try {
        const result = await request({
          uri: `http://127.0.0.1:65535`,
          simple: false,
          resolveWithFullResponse: true,
          timeout: 200,
        });
      } catch (error) {
        expect(error.error).toHaveProperty('name', 'Error');
        expect(error.error).toHaveProperty('message', 'connect ECONNREFUSED 127.0.0.1:65535');
      }
    });
  });

  describe('internal ECONNRESET retry for reused sockets', () => {
    it('retries on a ECONNRESET error automatically if the socket was reused', async () => {
      await request({
        uri: `${server.baseUrl}/ping`,
        simple: false,
        resolveWithFullResponse: true,
      });

      const result = await request({
        uri: `${server.baseUrl}/econnreset/times/${uuid()}/1`,
        simple: false,
        resolveWithFullResponse: true,
      });

      expect(result.statusCode).toEqual(200);
      expect(result.body.times).toEqual(1);
    });

    it('doesn\'t retry on a ECONNRESET error automatically when the socket was not reused', async () => {
      await request({
        uri: `${server.baseUrl}/ping`,
        simple: false,
        resolveWithFullResponse: true,
        keepAlive: false,
      });

      expect.assertions(1);

      try {
        const result = await request({
          uri: `${server.baseUrl}/econnreset/times/${uuid()}/1`,
          simple: false,
          resolveWithFullResponse: true,
          keepAlive: false,
        });
      } catch (error) {
        expect(error.error).toHaveProperty('message', 'socket hang up');
      }
    });
  });
});
