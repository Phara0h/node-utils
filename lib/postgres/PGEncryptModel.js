'use strict';

const BaseModel = require('./PGBaseModel.js');
const PGConnecter = require('./PGConnecter.js');
const PGTypes = require('./PGTypes.js');
const AgentDek = require('@abeai/node-crypto').AgentDek;
const aes256 = require('@abeai/node-crypto').aes256;
const hash = require('@abeai/node-crypto').hash;

const pg = new PGConnecter();

class PGEncryptModel extends BaseModel {
    constructor(model, table, pk, encryptedProfileField, encryptProfile = 'default') {
        super(model, table, pk);
        this._encryptProfile = encryptProfile;
        this.encryptedProfileField = encryptedProfileField;
        this.ChildClass = this.constructor;
    }

    static async findById(id) {
      return super.findById(id).then(async newModel=>{
          return newModel ? await this.decrypt(newModel, this.getEncryptedProfile(newModel), true) : newModel;
      });
    }

    static async findAllBy(fieldValues, operator = 'AND') {
        return super.findAllBy(await this._queryFieldsHash(fieldValues, this.getEncryptedProfile(fieldValues)), operator).then(async newModels=>{
          for (var i = 0; i < newModels.length; i++) {
            if(newModels[i]) {
                newModels[i] = await this.decrypt(newModels[i], this.getEncryptedProfile(newModels[i]), true)
            }
          }
            return newModels;
        });
    }

    static async findAll() {
        return super.findAll().then(async newModels=>{
          for (var i = 0; i < newModels.length; i++) {
            if(newModels[i]) {
                newModels[i] = await this.decrypt(newModels[i], this.getEncryptedProfile(newModels[i]), true)
            }
          }
            return newModels;
        });
    }

    static async deleteById(id) {
        return super.deleteById(id);
    }

    static async deleteAllBy(fieldValues, operator = 'AND') {
        return super.deleteAllBy(await this._queryFieldsHash(fieldValues, this.getEncryptedProfile(fieldValues)), operator);
    }

    static async deleteAll() {
        return super.deleteAll();
    }

    static async create(model, returnModel = true, encryptProfile) {
        return super.create(
            await this.encrypt(
                model, encryptProfile), returnModel
        ).then(async newModel=>{
            return [await this.decrypt(newModel && newModel.length > 0 ? newModel[0] : {}, encryptProfile, true)];
        });
    }

    static async updateById(id, model, encryptProfile) {
        return super.updateById(id, await this.encrypt(model, encryptProfile)).then(async newModel=>{
            return newModel ? await this.decrypt(newModel, this.getEncryptedProfile(newModel), true) : newModel;
        });
    }

    static async updateAllBy(fieldValues, model, operator = 'AND', returnModel = true, encryptProfile) {
        return super.updateAllBy(await this._queryFieldsHash(fieldValues, encryptProfile), await this.encrypt(model, encryptProfile), operator, returnModel).then(async newModels=>{
          for (var i = 0; i < newModels.length; i++) {
            if(newModels[i]) {
                newModels[i] = await this.decrypt(newModels[i], this.getEncryptedProfile(newModels[i]), true)
            }
          }
            return newModels;
        });
    }

    static async updateAll(model) {
        return super.updateAll(await this.encrypt(model,this.getEncryptedProfile(model))).then(async newModels=>{
          for (var i = 0; i < newModels.length; i++) {
            if(newModels[i]) {
                newModels[i] = await this.decrypt(newModels[i], this.getEncryptedProfile(newModels[i]), true)
            }
          }
            return newModels;
        });
    }

    static getEncryptedProfile(model) {
      return model[this.encryptedProfileField] || this._encryptProfile || 'default';
    }

    static async decrypt(model, encryptProfile = 'default', onlyAutoCrypt = false) {
        await AgentDek.isReady;
        if (AgentDek.encryption) {
            var keys = Object.keys(this._encryptionFields);

            for (var i = 0; i < keys.length; i++) {
                var field = model[keys[i]];
                var key = keys[i];

                if (field !== undefined) {
                    switch (this._encryptionFields[key]) {
                        case PGTypes.Encrypt:
                        case PGTypes.EncryptWithoutHash:
                            if (onlyAutoCrypt) {break;}
                        case PGTypes.AutoCrypt:
                        case PGTypes.AutoCryptWithoutHash:
                            if (field) {
                                model[key] = await aes256.decrypt(field, AgentDek.getKey(encryptProfile));
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return model;
      }

    static async encrypt(model, encryptProfile = 'default') {
        await AgentDek.isReady;
        if (AgentDek.encryption) {
            var keys = Object.keys(this._encryptionFields);

            for (var i = 0; i < keys.length; i++) {
                var field = model[keys[i]];
                var key = keys[i];

                if (field !== undefined) {
                    switch (this._encryptionFields[key]) {
                        case PGTypes.AutoCrypt:
                        case PGTypes.Encrypt:
                            model[`__${key}`] = await hash.checksum(encryptProfile + field);
                        case PGTypes.AutoCryptWithoutHash:
                        case PGTypes.EncryptWithoutHash:
                            model[key] = await aes256.encrypt(field, AgentDek.getKey(encryptProfile));
                            break;
                        case PGTypes.Hash:
                            model[key] = await hash.hash(encryptProfile + field, AgentDek.getProfileSetting(encryptProfile, 'salt'));
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return model;
    }

    static async _queryFieldsHash(fields, encryptProfile = 'default') {
        await AgentDek.isReady;
        if (AgentDek.encryption) {
            var keys = Object.keys(this._encryptionFields);

            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var field = fields[key];

                if (field !== undefined && (PGTypes.AutoCrypt === this._encryptionFields[key] || PGTypes.Encrypt == this._encryptionFields[key]) ) {

                    //remove the unhashed filed nad replace it with the hashed version
                    fields[`__${key}`] = fields[key];
                    delete fields[key];
                    key = `__${key}`;
                    field = fields[key];

                    if(Array.isArray(field)) {
                        for (var j = 0; j < field.length; j++) {
                          //skip the operator in the query array.
                          if(j % 2 === 0){
                            field[j] =  await hash.checksum(encryptProfile + field[j]);
                          }
                        }
                        fields[key] = field;
                    }
                    else {
                      fields[key] = await hash.checksum(encryptProfile + field);
                    }
                }
            }
        }
        return fields;
    }

}

module.exports = PGEncryptModel;
