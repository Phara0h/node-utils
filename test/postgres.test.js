
describe('Postgres', () => {

    var PGConnecter = require('..').PGConnecter;
    var pg = new PGConnecter({
        connectionString: 'postgres://postgres@localhost/pgtest',
    });
    var User = require('./includes/postgres/models/User');
    var UserAD = require('./includes/postgres/models/UserAD');

    test('queryBatch init database', async () => {
        var createDB = await pg.queryBatch([
            {
                query: 'DROP TABLE IF EXISTS users',
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

    describe('Base Model', () => {
        var user1 = null;
        var user2 = null;
        var user3 = null;

        describe('Create', () => {
            test('Instantiate 3 users', () => {
                user1 = new User();
                user2 = new User();
                user3 = new User();
                expect(user1 != null && user2 != null && user3 != null).toBe(true);
            });

            test('Create user 1 with 1 property static [create()]', async ()=>{
                user1 = await User.create(
                    {
                        username: 'user1',
                    });

                expect(user1[0].username).toBe('user1');
            });

            test('Create user 2 with 2 properties static [create()]', async ()=>{
                user2 = await User.create(
                    {
                        username: 'user2',
                        password: 'ilikememes',
                    });

                expect(user2[0].password).toBe('ilikememes');
            });

            test('Create user 3 with 3 properties static [create()]', async ()=>{
                user3 = await User.create(
                    {
                        username: 'user3',
                        password: 'ilovemothers',
                        email: 'motherlover@hornpub.com',
                    });

                expect(user3[0].email).toBe('motherlover@hornpub.com');
            });

            test('Create user with random name; custom class method [.createUserWithRandomName()]', async ()=>{
                var nUser = await User.createUserWithRandomName(
                    {
                        password: 'whohaveibecome',
                    });

                expect(nUser[0].password).toBe('whohaveibecome');
            });
        });

        describe('Find', () => {
            test('Find user by id static [findById()]', async ()=>{
                var fUser = await User.findById(1);

                expect(fUser.id).toBe(1);
            });

            test('Find all by properties static [findALlBy()]', async ()=>{
                var fUser = await User.findAllBy(
                    {
                        username: ['user1', 'OR', 'user2'],
                    });

                expect(fUser.length).toBe(2);
            });

            test('Find all by multiple properties query static [findAllBy()]', async ()=>{
                var fUser = await User.findAllBy(
                    {
                        username: ['user2', 'OR', 'user3'],
                        email: null,
                    }, 'AND');

                expect(fUser[0].username).toBe('user2');
            });

            test('Find all static [findAll()]', async ()=>{
                var fUser = await User.findAll();

                expect(fUser.length).toBe(4);
            });
        });

        describe('Update', () => {
            test('Update user 3 password [.updateById()]', async ()=>{
                user3 = await User.updateById(user3[0].id,
                    {
                        password: 'password123',
                    });

                expect(user3[0]).toEqual(expect.objectContaining({
                    password: 'password123'
                }));
            });

            test('Update all users that have no passwords static [updateAllBy()]', async ()=>{

                var updatedUsers = await User.updateAllBy({password: null}, {password: 'bestpasswordinalltheland12346969420'});

                expect(updatedUsers).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            password: 'bestpasswordinalltheland12346969420'
                        })
                    ])
                );
            });

            test('Update All with last_login date static [updateAll()]', async ()=>{
                var date = new Date();
                var updatedUsers = await User.updateAll(
                    {
                        last_login: date,
                    });

                expect(updatedUsers).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            last_login: date,
                        })
                    ])
                );
            });
        });

        describe('Delete', () => {

            test('Delete user1 static [deleteById()]', async ()=>{

                user1 = await User.deleteById(user1[0].id);

                expect(user1).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            username: 'user1',
                        })
                    ])
                );
            });

            test('Delete by property static [deleteAllBy()]', async ()=>{
                var deletedUsers = await User.deleteAllBy(
                    {
                        email: 'motherlover@hornpub.com',
                    });

                expect(deletedUsers).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            email: 'motherlover@hornpub.com',
                        })
                    ])
                );
            });

            test('Delete All static [deleteAll()]', async ()=>{
                await User.deleteAll();
                var users = await User.findAll();

                expect(users.length).toBe(0);
            });
        });

    });

    describe('Active Model', () => {

        var user1 = null;
        var user2 = null;
        var user3 = null;

        describe('Create', () => {
            test('Instantiate 3 users', () => {
                user1 = new UserAD();
                user2 = new UserAD();
                user3 = new UserAD();
                expect(user1 != null && user2 != null && user3 != null).toBe(true);
            });

            test('Create user 1 with 1 property [.create()]', async ()=>{
                user1.username = 'user1';
                await user1.create();

                expect(user1.username).toBe('user1');
            });

            test('Create user 2 with 2 properties static [create()]', async ()=>{
                user2 = await UserAD.create(
                    {
                        username: 'user2',
                        password: 'ilikememes',
                    });

                expect(user2.password).toBe('ilikememes');
            });

            test('Create user 3 with 3 properties static [create()]', async ()=>{
                user3 = await UserAD.create(
                    {
                        username: 'user3',
                        password: 'ilovemothers',
                        email: 'motherlover@hornpub.com',
                    });
                expect(user3.email).toBe('motherlover@hornpub.com');
            });

            test('Create user with random name; custom class method [.createUserWithRandomName()]', async ()=>{
                var nUser = await UserAD.createUserWithRandomName(
                    {
                        password: 'whohaveibecome',
                    });

                expect(nUser.password).toBe('whohaveibecome');
            });
        });

        describe('Find', () => {
            test('Find user by id [.find()]', async ()=>{
                var fUser = new UserAD();

                fUser.id = user1.id;

                await fUser.find();

                expect(fUser.username).toBe('user1');
            });

            test('Find user by id static [.findById()]', async ()=>{
                var fUser = await UserAD.findById(user1.id);

                expect(fUser.username).toBe('user1');
            });

            test('Find all by properties static [findAllBy()]', async ()=>{
                var fUser = await UserAD.findAllBy(
                    {
                        username: ['user1', 'OR', 'user2'],
                    });

                expect(fUser[1].username).toBe('user2');
            });

            test('Find all by multiple properties query static [findAllBy()]', async ()=>{
                var fUser = await UserAD.findAllBy(
                    {
                        username: ['user2', 'OR', 'user3'],
                        email: null,
                    }, 'AND');

                expect(fUser[0].username).toBe('user2');
            });
        });

        describe('Update', () => {
            test('Update user 3 password [.save()]', async ()=>{
                user3.password = 'password123';
                user3.save();

                expect(user3).toEqual(expect.objectContaining({
                    password: 'password123'
                }));
            });

            test('Update all users that have no passwords static [updateAllBy()]', async ()=>{

                var updatedUsers = await UserAD.updateAllBy({password: null}, {password: 'bestpasswordinalltheland12346969420'});

                expect(updatedUsers).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            password: 'bestpasswordinalltheland12346969420'
                        })
                    ])
                );
            });

            test('Update All with last_login date static [updateAll()]', async ()=>{
                var date = new Date();
                var updatedUsers = await UserAD.updateAll(
                    {
                        last_login: date,
                    });

                expect(updatedUsers).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            last_login: date,
                        })
                    ])
                );
            });
        });

        describe('Delete', () => {
            test('Delete user1 [.delete()]', async ()=>{

                await user1.delete();

                expect(user1.username).toBe(null);
            });

            test('Delete by property static [deleteAllBy()]', async ()=>{
                var deletedUsers = await UserAD.deleteAllBy(
                    {
                        email: 'motherlover@hornpub.com',
                    });

                expect(deletedUsers[0].email).toBe('motherlover@hornpub.com');
            });

            test('Delete All static [deleteAll()]', async ()=>{
                await UserAD.deleteAll();
                var users = await UserAD.findAll();

                expect(users.length).toBe(0);
            });
        });
    });

    test('Close connection', async ()=>{
        var end = await pg.pool.end();

        expect(end).toBe(undefined);
    });
});
