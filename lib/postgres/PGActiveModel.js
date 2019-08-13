'use strict';

const BaseModel = require('./PGBaseModel.js');
const PGConnecter = require('./PGConnecter.js');

const pg = new PGConnecter();

class PGActiveModel extends BaseModel {

    constructor(model, table, pk, setModel) {
        super(model, table, pk);

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

            if (setModel && setModel[key]) {
                this[key] = setModel[key];
            }
        }
        this.changedProps = {};
        this.ChildClass = this.constructor;
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

        var newModel = await this.ChildClass.create(this.changedProps, true);

        if (!newModel) {
            throw new Error('Unable to create new model with id ' + this._[this._pkKey]);
        } else {
            this._setModel(newModel);
        }

        return this;
    }
    static async create(model, nonStatic = false) {
        var newModel = await super.create(model);

        if (!newModel) {
            throw new Error('Unable to create new model');
        } else {
            newModel = nonStatic ? newModel[0] : new this(newModel[0]);
        }

        return newModel;
    }
    async save() {
        await this.update(this.changedProps);
        return this;
    }

    async update(model) {
        var updatedModel = await this.ChildClass.updateById(this[this._pkKey], model, true, false);

        if (!updatedModel) {
            throw new Error('Unable to update model with id ' + this[this._pkKey]);
        } else {
            this._setModel(updatedModel);
        }
    }

    _setModelPropsToNull() {
        var keys = Object.keys(this._defaultModel);

        for (var i = 0; i < keys.length; i++) {
            this[keys[i]] = null;
        }
    }

    _setModel(model) {
        var keys = Object.keys(this._defaultModel);

        for (var i = 0; i < keys.length; i++) {
          if(model[keys[i]] !== undefined)
          {
            this._[keys[i]] = model[keys[i]];
          }
        }
    }

    static _toADModels(objects) {
        var modelArray = [];

        for (var i = 0; i < objects.length; i++) {
            modelArray.push(new this(objects[i]));
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

    static async findAllBy(fieldValues, operator = 'AND', isById = false) {
        var fModels = await super.findAllBy(fieldValues, operator);

        return isById ? fModels : this._toADModels(fModels);
    }

    static async findAll() {
        return await this._toADModels(await super.findAll());
    }

    static async deleteAllBy(fieldValues, operator = 'AND') {
        return this._toADModels(await super.deleteAllBy(fieldValues, operator));
    }

    static async updateById(id, model, returnModel = true, isById = false) {
        return await this.updateAllBy(
            {
                [this._pkKey]: id,
            }, model, 'AND', returnModel, isById).then(res=>{
            return res && res.length > 0 ? res[0] : null;
        });
    }

    static async updateAllBy(fieldValues, model, operator = 'AND', returnModel = true, isById = false) {

        var uModels = await super.updateAllBy(fieldValues, model, operator, returnModel);

        return isById ? uModels : this._toADModels(uModels);
    }

    static async updateAll(model) {
        return this._toADModels(await super.updateAll(model));
    }

    toJSON() {
        return this._;
    }

    toString() {
        return this._;
    }

}

module.exports = PGActiveModel;
