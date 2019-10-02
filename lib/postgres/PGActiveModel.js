'use strict';

const BaseModel = require('./PGEncryptModel.js');
const PGConnecter = require('./PGConnecter.js');
const isEmpty = require('../isEmpty.js');
const {redactSensitiveDataSymbol} = require('../redaction');
const deepClone = require('../clone.js').cloneDeep;

const pg = new PGConnecter();

class PGActiveModel extends BaseModel {

    constructor(model, table, pk, encryptedProfileField, setModel, encryptProfile) {
        super(model, table, pk, encryptedProfileField, encryptProfile);

        this.changedProps = {};
        this._ = {};
        var keys = Object.keys(this._defaultModel);

        for (var i = 0; i < keys.length; i++) {
            const key = keys[i];

            Object.defineProperties(this, {
                [key]: {
                    get() {
                        return this._[key];
                    },
                    set(data) {
                        this.changedProps[key] = this._[key] = data;
                    }
                }
            });

            this._[key] = null;
        }
        this.changedProps = {};

        if (setModel) {
            var setKeys = Object.keys(setModel);

            for (var i = 0; i < setKeys.length; i++) {
                if (!setModel[setKeys[i]]) {
                    this[setKeys[i]] = setModel[setKeys[i]];
                } else if (Array.isArray(setModel[setKeys[i]])) {
                    this[setKeys[i]] = [...setModel[setKeys[i]]];
                } else if (setModel[setKeys[i]].constructor === Object) {
                    this[setKeys[i]] = deepClone(setModel[setKeys[i]]);
                } else {
                    this[setKeys[i]] = setModel[setKeys[i]];
                }
            }
        }

        if (encryptProfile && encryptedProfileField) {
            this[encryptedProfileField] = encryptProfile;
        }

        this.ChildClass = this.constructor;
    }

    addProperty(name, value) {
        Object.defineProperties(this, {
            [name]: {
                get() {
                    return this._[name];
                },
                set(data) {
                    this._[name] = data;
                }
            }
        });
        this[name] = value;
    }

    async find() {
        var foundModel = await this.ChildClass.findById(this[this._pkKey]);

        if (!foundModel) {
            throw new Error('Unable to find model with id ' + this[this.pkKey]);
        } else {
            this._setModel(foundModel);
        }
        return this;
    }

    async delete() {

        var deletedModel = await this.ChildClass.deleteById(this[this._pkKey]);

        if (deletedModel.length < 1) {
            throw new Error('Unable to delete model with id ' + this[this._pkKey]);
        } else {
            this._setModelPropsToNull();
        }

        return this;
    }

    async create() {

        var newModel = await this.ChildClass.create(this.changedProps, true, this.getEncryptedProfile());

        if (!newModel) {
            throw new Error('Unable to create new model with id ' + this._[this._pkKey]);
        } else {
            this._setModel(newModel);
        }

        return this;
    }
    static async create(model, nonStatic = false, encryptProfile) {
        var newModel = await super.create(model, true, encryptProfile || model[this.encryptedProfileField]);

        if (!newModel) {
            throw new Error('Unable to create new model');
        } else {
            newModel = nonStatic ? newModel[0] : new this(newModel[0]);
            newModel.changedProps = {};
        }

        return newModel;
    }

    async save() {
        if (!isEmpty(this.changedProps)) {
            await this.update(this.changedProps);
        }

        return this;
    }

    async update(model) {
        var updatedModel = await this.ChildClass.updateById(this[this._pkKey], model, true, false, this.getEncryptedProfile());

        if (!updatedModel) {
            throw new Error('Unable to update model with id ' + this[this._pkKey]);
        } else {
            this._setModel(updatedModel);
        }
        return this;
    }

    async decrypt(...props) {
        var fields = {};

        for (var i = 0; i < props.length; i++) {
            var key = props[i];

            if (this[key]) {
                fields[key] = this[key];
            }
        }
        this._setModel(await this.ChildClass.decrypt(isEmpty(fields) ? this._ : fields, this.getEncryptedProfile()));
        return this;
    }

    async encrypt(...props) {
        var fields = {};

        for (var i = 0; i < props.length; i++) {
            var key = props[i];

            if (this[key]) {
                fields[key] = this[key];
            }
        }
        this._setModel(await this.ChildClass.encrypt(isEmpty(fields) ? this._ : fields, this.getEncryptedProfile()));
        return this;
    }

    redactSensitiveData(redactionCensor = '[redacted]') {
        var keys = Object.keys(this.ChildClass.encryptionFields);

        for (var i = 0; i < keys.length; i++) {
            this._[keys[i]] = redactionCensor;
        }
        return this;
    }

    [redactSensitiveDataSymbol](redactionCensor = '[redacted]') {
        return this.redactSensitiveData(redactionCensor);
    }

    _setModelPropsToNull() {
        var keys = Object.keys(this._defaultModel);

        for (var i = 0; i < keys.length; i++) {
            this[keys[i]] = null;
        }
        this.changedProps = {};
    }

    _setModel(model) {
        var keys = Object.keys(this._defaultModel);

        for (var i = 0; i < keys.length; i++) {
            if (model[keys[i]] !== undefined) {
                this._[keys[i]] = model[keys[i]];
            }
        }
        this.changedProps = {};
    }

    getEncryptedProfile() {
        return this.ChildClass.getEncryptedProfile(this) || this.changedProps[this.encryptedProfileField];
    }

    static _toADModels(objects) {
        var modelArray = [];

        for (var i = 0; i < objects.length; i++) {
            var newModel = new this(objects[i]);

            newModel.changedProps = {};
            modelArray.push(newModel);
        }
        return modelArray;
    }

    static async findById(id) {

        return await this.findAllBy(
            {
                [this._pkKey]: id,
            }, 'AND', true).then(res=>{
            return res && res.length > 0 ? res[0] : null;
        });
    }

    static async findLimtedBy(fieldValues, operator = 'AND', limit) {
        var fModels = await super.findAllBy(fieldValues, operator, limit);

        return this._toADModels(fModels);
    }

    static async findAllBy(fieldValues, operator = 'AND', isById = false) {
        var fModels = await super.findAllBy(fieldValues, operator);

        return isById ? fModels : this._toADModels(fModels);
    }

    static async findAll() {
        return await this._toADModels(await super.findAll());
    }

    static async deleteLimitedBy(fieldValues, operator = 'AND', limit) {
        return this._toADModels(await super.deleteAllBy(fieldValues, operator, limit));
    }

    static async deleteAllBy(fieldValues, operator = 'AND') {
        return this._toADModels(await super.deleteAllBy(fieldValues, operator));
    }

    static async updateById(id, model, returnModel = true, isById = false, encryptProfile) {
        return await this.updateAllBy({
            [this._pkKey]: id,
        }, model, 'AND', returnModel, isById, encryptProfile).then(res=>{
            return res && res.length > 0 ? res[0] : null;
        });
    }

    static async updateLimitedBy(fieldValues, model, operator = 'AND', returnModel = true, limit, encryptProfile) {
        var uModels = await super.updateAllBy(fieldValues, model, operator, returnModel, encryptProfile, limit);

        return  this._toADModels(uModels);
    }

    static async updateAllBy(fieldValues, model, operator = 'AND', returnModel = true, isById = false, encryptProfile) {
        var uModels = await super.updateAllBy(fieldValues, model, operator, returnModel, encryptProfile);

        return isById ? uModels : this._toADModels(uModels);
    }

    static async updateAll(model) {
        return this._toADModels(await super.updateAll(model));
    }

    toJSON() {
        return {...this._};
    }

    toString() {
        return {...this._};
    }

}

module.exports = PGActiveModel;
