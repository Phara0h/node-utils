var nodeUtils = function()
{
  var _clone = require('./lib/clone.js');
  this.cloneDeepWith = _clone.cloneDeepWith;
  this.cloneDeep = _clone.cloneDeep;
  this.clone = _clone.clone;
  this.PGConnecter = require('./lib/postgres/PGConnecter');
  this.PGBaseModel = require('./lib/postgres/PGBaseModel');
  this.PGEncryptModel = require('./lib/postgres/PGEncryptModel');
  this.request = require('./lib/request');


  return this;
}();

module.exports = nodeUtils;
