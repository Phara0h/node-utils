'use strict';

var {
    Pool,
} = require('pg').native;

class PGConnecter {
    constructor(options) {
        if (!!PGConnecter.instance) {
            return PGConnecter.instance;
        }

        PGConnecter.instance = this;

        if (options != null) {
            this.options = options;
        }

        this.pool = new Pool(this.options);

        return this;
    }

    async query(query, variables) {
        var response = null;

        try {
            console.log(query, variables);
            response = await this.pool.query(query, variables);
        } catch (e) {
            throw e;
        } finally {
            return response;
        }
    }

    /*
  *  array of query objects
  * query objects = {
      query: 'some query',
      variables: [1,'fish', 2, 'fish'],
      cb: async (results, nextQuery) => { return nextQuery; } // optional, return edited next query
    }

    WILL ROLLBACK ALL QUERIES IF ANY ERRORS HAPPEN
  */
    async queryBatch(queries) {
        var client = this.pool.connect();

        try {
            var response = null;

            await client.query('BEGIN');

            for (var i = 0; i < queries.length; i++) {
                var results = await client.query(queries[i].query, queries[i].variables);

                if (queries[i].cb) {
                    await queries[i].cb(results, queries.length < i + 1 ? queries[i + 1] : null);
                }
            }

            response = await client.query('COMMIT');
        } catch (e) {
            await client.query('ROLLBACK');
            throw e;
        } finally {
            client.release();
            return response;
        }
    }

    async queryStream(query, varibles) {
        var client = this.pool.connect();

        try {
            var response = null;

            const query = new QueryStream(query, varibles);
            const stream = client.query(query);

            stream.on('end', client.release);
        } catch (e) {
            throw e;
        } finally {
            return stream;
        }
    }

}

module.exports = PGConnecter;
