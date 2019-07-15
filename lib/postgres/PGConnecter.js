const {
    Pool
} = require('pg');

class PGConnecter {
    constructor(options) {

        if (!!PGConnecter.instance) {
            if (options != null) {
                PGConnecter.instance.options = options;
                PGConnecter.instance.pool = new Pool(options);
            }

            return PGConnecter.instance;
        }

        if (options != null) {
            this.options = options;
        }
        this.pool = new Pool(this.options);

        PGConnecter.instance = this;

        return this;
    }

    async query(query, variables) {
        return await this.pool.query(query, variables);
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
        try {
            var client = await this.pool.connect();
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
            await client.release();
            return response;
        }
    }

    //Does not work with native.

    // async queryStream(query, varibles = []) {
    //
    //     var client = await this.pool.connect();
    //     var response = null;
    //     var qs = new QueryStream(query, [])
    //     var stream = client.query(qs);
    //
    //     stream.on('end', client.release);
    //
    //     return stream;
    // }

}

module.exports = PGConnecter;
