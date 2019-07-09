
describe('postgres', () => {

    var PGConnecter = require('..').PGConnecter;
    var pg = new PGConnecter({
        connectionString: 'postgres://postgres@localhost/pgtest',
    });
    var User = require('./includes/postgres/models/User');

    test('queryBatch init database', async () => {
        var createDB = await pg.queryBatch([
          {
              query: `DROP TABLE IF EXISTS users`,
              variables: null,
          },
            {
                query: `CREATE TABLE IF NOT EXISTS users (
                         id serial PRIMARY KEY,
                         username VARCHAR (50),
                         password VARCHAR (50),
                         email VARCHAR (355) ,
                         created_on TIMESTAMP,
                         last_login TIMESTAMP
                      );`,
                variables: null,
            },
            ]);

        expect(createDB != null).toBe(true);
    });

    var user1 = null;
    var user2 = null;
    var user3 = null;

     test('Create 3 users', () => {
        user1 = new User();
        user2 = new User();
        user3 = new User();
        expect(user1 != null && user2 != null && user3 != null).toBe(true);
    });

    test('Create user 1', async ()=>{
        var user1Model = await user1.create(
            {
                username: 'user1',
            });

        expect(user1Model[0].username).toBe('user1');
    });

    test('Create user 2', async ()=>{
          await user2.create(
              {
                  username: 'user2',
                  password: 'ilikememes',
              });

        expect(user2.models[0].password).toBe('ilikememes');
    });



    test('Delete All', async ()=>{
        await new User().deleteAll();
        var users = await new User().findAll();

        expect(users.length).toBe(0);
    });

    test('Close connection', async ()=>{
      var end = await pg.pool.end();
      expect(end).toBe(undefined)
    })
});

// wrapping in async to make demo easier to read with awaits
// (async () => {
//
//
//
//     // creating 3 users all with a differnt amount of Properties set.
//
//

//     await user3.create(
//         {
//             username: 'user3',
//             password: 'ilovemothers',
//             email: 'motherlover@hornpub.com',
//         });
//
//     // printing user1 model.
//     console.log('printing user1 model', user1Model);
//
//     // Eventhough we did not set a return varible for user2 or user3 we can still access the newly created model.
//     console.log('printing user2 model', user2.models);
//     console.log('printing user3 model', user3.models);
//
//     // create a user using a non basemodel function that only user has.
//     console.log(await new User().createUserWithRandomName(
//         {
//             password: 'whohaveibecome',
//         }));
//
//     // Find users
//
//     // find by id
//     console.log(await new User().findById(1));
//
//     // find all by Properties. We find user 1 and 2 by using a query object.
//     console.log(await new User().findAllBy(
//         {
//             username: ['user1', 'OR', 'user2'],
//         }));
//
//     // here is another example of find all using the query builder we find everyone with
//     // no email and having the username user2 or user3
//     // Note you can use the query builder in every base model CRUD function
//     console.log(await new User().findAllBy(
//         {
//             username: ['user2', 'OR', 'user3'],
//             email: null,
//         }, 'AND'));
//
//     // lets find everyone
//     console.log(await new User().findAll());
//
//     // Update users
//
//     // Lets update user1's email by their id .
//     console.log(await user1.updateById(user1.models[0].id,
//         {
//             email: 'swagboi@yolotown.usa',
//         }));
//
//     // Lets make sure everyone has a password and if not then add a default one.
//     console.log(await new User().updateAllBy(
//         {
//             password: null,
//         },
//         {
//             password: 'bestpasswordinalltheland12346969420',
//         }));
//
//     // You can also update all users at once which we will by setting all their last_login date.
//     console.log(await new User().updateAll(
//         {
//             last_login: new Date(),
//         }));
//
//     // Delete users
//
//     // Lets delete user2 by their id;
//     console.log(await user2.deleteById(user2.models[0].id));
//
//     // Delete people with swaggy emails
//
//     console.log(await new User().deleteAllBy(
//         {
//             email: 'swagboi@yolotown.usa',
//         }));
//
//     // Delete everyone with an email
//     // deleting all users
//     console.log(await new User().deleteAll());
//
// })();
//
//
// test('sample', () => {
//   expect(1===1).toBe(true);
// });
