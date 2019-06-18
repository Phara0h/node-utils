'use strict';

const BaseModel = require('./PGBaseModel.js');
const PGConnecter = require('./PGConnecter.js');

const pg = new PGConnecter();

class PGEncryptModel extends BaseModel {
    constructor(table, defaultModel) {
        // super(table,defaultModel);
        // check env for type of encryption
        // if type is 'none' just dont encrypt or decrypt
        this.encryptType = 'aes-256-cbc'; // set type of encryption
    }

    async findById(id) {
        var result = super.findAllBy(id);

        return this.decrypt(result);// do decryption here
    }

    async findAllBy(fieldValues, operator = 'AND') {

    }

    async findAll() {

    }

    async deleteById(id) {

    }

    async deleteAllBy(fieldValues, operator = 'AND') {

    }

    async deleteAll() {

    }

    async create(model) {

    }

    async updateById(id, model) {

        // do model encryption here.

        // return super(id,model);
    }

    async updateAllBy(fieldValues, model, operator = 'AND') {

    }

    async updateAll(model, filter = {}) {

    }

    async decrypt(models, filter = {}) {

    }

    async encrypt(models, filters = {}) {

    }

}

module.exports = PGEncryptModel;
