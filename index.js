var nodeUtils = function()
{
  var _clone = require('./lib/clone.js');
  this.cloneDeepWith = _clone.cloneDeepWith;
  this.cloneDeep = _clone.cloneDeep;
  this.clone = _clone.clone;

  return this;
}();

module.exports = nodeUtils;
