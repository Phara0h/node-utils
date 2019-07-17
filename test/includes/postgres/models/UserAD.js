
const BaseModel = require('../../../../lib/postgres/PGActiveModel.js');
const Base = require('../../../../lib/postgres/Base.js');
const PGTypes = require('../../../../lib/postgres/PGTypes.js');

class User extends Base(BaseModel, 'users', {
      id: PGTypes.PK,
      username: null,
      password: null,
      email: null,
      created_on: null,
      last_login: null,
  }) {
    constructor(setUser) {
      super(setUser);
    }

    static async createUserWithRandomName(model) {
        model.username = 'user' + Math.floor(Math.random() * 1000);
        return await super.create(model);
    }
}

module.exports = User;
