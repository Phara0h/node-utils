'use strict';

const fastify = require('fastify');

module.exports = async function start(options = {}) {
  options = Object.assign(options, {
    host: '0.0.0.0',
    port: 4270,
    logger: false,
  });

  const server = fastifyServer(options);

  await server.listen(options.port, options.host)

  return {
    host: options.host,
    port: options.port,
    baseUrl: `http://${options.host}:${options.port}`,
    stop: async () => {
      await server.close();
    }
  }
}

function fastifyServer(options) {
  const server = fastify(options);

  function response(req, res, statusCode = 200) {
    res.code(statusCode).send({
      body: req.body,
      query: req.query,
      params: req.params,
      url: req.raw.url,
      method: req.raw.method,
      headers: req.headers,
      id: req.id,
      ip: req.ip,
      ips: req.ips,
      hostname: req.hostname,
    });
  }

  server.all('/ping', (req, res) => {
    return res.code(200).send('pong');
  });

  server.all('/econnreset', (req, res) => {
    req.raw.socket.destroy();
  });

  const connResetTimes = {};

  server.all('/econnreset/times/:id/:times', (req, res) => {
    if (!connResetTimes.hasOwnProperty(req.params.id)) {
      connResetTimes[req.params.id] = 0;
    }

    if (connResetTimes[req.params.id] >= req.params.times) {
      return res.code(200).send({
        times: connResetTimes[req.params.id],
      });
    }

    connResetTimes[req.params.id] += 1;

    req.raw.socket.destroy();
  });

  server.all('/wait', (req, res) => {
    setTimeout(() => response(req, res, req.query.statusCode), Number(req.query.timeout));
  });

  return server;
}
