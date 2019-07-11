'use strict';
const BaseModel = require('../../../../lib/postgres/PGBaseModel.js');

class User extends BaseModel {
    constructor() {
        super('users',
            {
                id: 'PK',
                username: null,
                password: null,
                email: null,
                created_on: null,
                last_login: null,
            });
    }

    async createUserWithRandomName(model) {
        model.username = 'user' + Math.floor(Math.random() * 1000);
        return await super.create(model);
    }
}

module.exports = User;
