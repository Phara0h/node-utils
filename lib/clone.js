/**
Lodash version 1.0.1 Code
https://github.com/lodash/lodash/releases/tag/1.0.1
**/
/* eslint-disable */

try {
    var noNodeClass = toString.call(document) == objectClass && !(
        {
            toString: 0,
        } + '');
} catch (e) {}

var iteratorTemplate = function(obj) {

    var __p = 'var index, iterable = '
    + obj.firstArg
    + ', result = iterable;\nif (!iterable) return result;\n'
    + obj.top
    + ';\n';

    if (obj.arrays) {
        __p += 'var length = iterable.length; index = -1;\nif ('
      + obj.arrays
      + ') {  ';
        if (obj.noCharByIndex) {
            __p += '\n  if (isString(iterable)) {\n    iterable = iterable.split(\'\')\n  }  ';
        }
        __p += '\n  while (++index < length) {\n    '
      + obj.loop
      + '\n  }\n}\nelse {  ';
    } else if (obj.nonEnumArgs) {
        __p += '\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += \'\';\n      '
      + obj.loop
      + '\n    }\n  } else {  ';
    }

    if (obj.hasEnumPrototype) {
        __p += '\n  var skipProto = typeof iterable == \'function\';\n  ';
    }

    if (obj.isKeysFast && obj.useHas) {
        __p += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ';
        if (obj.hasEnumPrototype) {
            __p += 'if (!(skipProto && index == \'prototype\')) {\n  ';
        }
        __p
      += obj.loop
      + '';
        if (obj.hasEnumPrototype) {
            __p += '}\n';
        }
        __p += '  }  ';
    } else {
        __p += '\n  for (index in iterable) {';
        if (obj.hasEnumPrototype || obj.useHas) {
            __p += '\n    if (';
            if (obj.hasEnumPrototype) {
                __p += '!(skipProto && index == \'prototype\')';
            }
            if (obj.hasEnumPrototype && obj.useHas) {
                __p += ' && ';
            }
            if (obj.useHas) {
                __p += 'hasOwnProperty.call(iterable, index)';
            }
            __p += ') {    ';
        }
        __p
      += obj.loop
      + ';    ';
        if (obj.hasEnumPrototype || obj.useHas) {
            __p += '\n    }';
        }
        __p += '\n  }  ';
    }

    if (obj.hasDontEnumBug) {
        __p += '\n\n  var ctor = iterable.constructor;\n    ';
        for (var k = 0; k < 7; k++) {
            __p += '\n  index = \''
        + obj.shadowed[k]
        + '\';\n  if (';
            if (obj.shadowed[k] == 'constructor') {
                __p += '!(ctor && ctor.prototype === iterable) && ';
            }
            __p += 'hasOwnProperty.call(iterable, index)) {\n    '
        + obj.loop
        + '\n  }    ';
        }

    }

    if (obj.arrays || obj.nonEnumArgs) {
        __p += '\n}';
    }
    __p
    += obj.bottom
    + ';\nreturn result';

    return __p;
};

/** Reusable iterator options for `assign` and `defaults` */
var defaultsIteratorOptions = {
    args: 'object, source, guard',
    top: 'var args = arguments,\n'
    + '    argsIndex = 0,\n'
    + "    argsLength = typeof guard == 'number' ? 2 : args.length;\n"
    + 'while (++argsIndex < argsLength) {\n'
    + '  iterable = args[argsIndex];\n'
    + '  if (iterable && objectTypes[typeof iterable]) {',
    loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
    bottom: '  }\n}',
};

/** Reusable iterator options shared by `each`, `forIn`, and `forOwn` */
var eachIteratorOptions = {
    args: 'collection, callback, thisArg',
    top: "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
    arrays: "typeof length == 'number'",
    loop: 'if (callback(iterable[index], index, collection) === false) return result',
};

/** Reusable iterator options for `forIn` and `forOwn` */
var forOwnIteratorOptions = {
    top: 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
    arrays: false,
};

/** `Object#toString` result shortcuts */
var argsClass = '[object Arguments]';
var arrayClass = '[object Array]';
var boolClass = '[object Boolean]';
var dateClass = '[object Date]';
var funcClass = '[object Function]';
var numberClass = '[object Number]';
var objectClass = '[object Object]';
var regexpClass = '[object RegExp]';
var stringClass = '[object String]';

/** Used to lookup a built-in constructor by [[Class]] */
var ctorByClass = {};

ctorByClass[arrayClass] = Array;
ctorByClass[boolClass] = Boolean;
ctorByClass[dateClass] = Date;
ctorByClass[objectClass] = Object;
ctorByClass[numberClass] = Number;
ctorByClass[regexpClass] = RegExp;
ctorByClass[stringClass] = String;

/** Used to identify object classifications that `_.clone` supports */
var cloneableClasses = {};

cloneableClasses[funcClass] = false;
cloneableClasses[argsClass] = cloneableClasses[arrayClass]
  = cloneableClasses[boolClass] = cloneableClasses[dateClass]
  = cloneableClasses[numberClass] = cloneableClasses[objectClass]
  = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

/** Used to determine if values are of the language type Object */
var objectTypes = {
    boolean: false,
    function: true,
    object: true,
    number: false,
    string: false,
    undefined: false,
};
var reFlags = /\w*$/;

var keys = function(object) {
    if (!isObject(object)) {
        return [];
    }

    return nativeKeys(object);
};
var nativeKeys = Object.keys;

function forEach(collection, callback, thisArg) {
    if (callback && typeof thisArg === 'undefined' && isArray(collection)) {
        var index = -1;
        var length = collection.length;

        while (++index < length) {
            if (callback(collection[index], index, collection) === false) {
                break;
            }
        }
    } else {
        each(collection, callback, thisArg);
    }
    return collection;
}

var isArray = Array.isArray;

function isObject(value) {
    // check if the value is the ECMAScript language type of Object
    // http://es5.github.com/#x8
    // and avoid a V8 bug
    // http://code.google.com/p/v8/issues/detail?id=2291
    return value ? objectTypes[typeof value] : false;
}


function isArguments(value) {
    return toString.call(value) == argsClass;
}

function isString(value) {
    return typeof value === 'string' || toString.call(value) == stringClass;
}

function createCallback(func, thisArg, argCount) {
    if (func == null) {
        return identity;
    }
    var type = typeof func;

    if (type != 'function') {
        if (type != 'object') {
            return function(object) {
                return object[func];
            };
        }
        var props = keys(func);

        return function(object) {
            var length = props.length;
            var result = false;

            while (length--) {
                if (!(result = isEqual(object[props[length]], func[props[length]], indicatorObject))) {
                    break;
                }
            }
            return result;
        };
    }
    if (typeof thisArg !== 'undefined') {
        if (argCount === 1) {
            return function(value) {
                return func.call(thisArg, value);
            };
        }
        if (argCount === 2) {
            return function(a, b) {
                return func.call(thisArg, a, b);
            };
        }
        if (argCount === 4) {
            return function(accumulator, value, index, object) {
                return func.call(thisArg, accumulator, value, index, object);
            };
        }
        return function(value, index, object) {
            return func.call(thisArg, value, index, object);
        };
    }
    return func;
}

function createIterator() {
    var data = {
        hasDontEnumBug: false,
        hasEnumPrototype: false,
        isKeysFast: true,
        nonEnumArgs: false,
        noCharByIndex: false,
        shadowed: ['constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
        ],
        arrays: 'isArray(iterable)',
        bottom: '',
        loop: '',
        top: '',
        useHas: true,
    };

    // merge options into a template data object
    for (var index = 0, object; object = arguments[index]; index++) {
        for (var key in object) {
            data[key] = object[key];
        }
    }
    var args = data.args;

    data.firstArg = /^[^,]+/.exec(args)[0];

    // create the function factory
    var factory = Function(
        'createCallback, hasOwnProperty, isArguments, isArray, isString, '
    + 'objectTypes, nativeKeys',
        'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}'
    );
    // return the compiled function

    return factory(
        createCallback, hasOwnProperty, isArguments, isArray, isString,
        objectTypes, nativeKeys
    );
}

var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);

var assign = createIterator(defaultsIteratorOptions,
    {
        top: defaultsIteratorOptions.top.replace(';',
            ';\n'
    + "if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n"
    + '  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n'
    + "} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n"
    + '  callback = args[--argsLength];\n'
    + '}'
        ),
        loop: 'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]',
    });

var indicatorObject = {};

var isPlainObject = function(value) {
  if (!(value && typeof value == 'object')) {
    return false;
  }
  var valueOf = value.valueOf,
      objProto = typeof valueOf == 'function' && (objProto = Object.getPrototypeOf(valueOf)) && Object.getPrototypeOf(objProto);

  return  value == objProto || (Object.getPrototypeOf(value) == objProto && !isArguments(value))
};

function clone(value, deep, callback, thisArg, stackA, stackB, customizer) {
    var result;

    if (customizer) {
        result = customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    result = value;

    // allows working with "Collections" methods without using their `callback`
    // argument, `index|key`, for this method's `callback`
    if (typeof deep === 'function') {
        thisArg = callback;
        callback = deep;
        deep = false;
    }
    if (typeof callback === 'function') {
        callback = typeof thisArg === 'undefined' ? callback : createCallback(callback, thisArg, 1);
        result = callback(result);

        var done = typeof result !== 'undefined';

        if (!done) {
            result = value;
        }
    }

    // inspect [[Class]]
    var isObj = isObject(result);

    if (isObj) {
        var className = toString.call(result);

        if (!cloneableClasses[className] || noNodeClass && isNode(result)) {
            return result;
        }
        var isArr = isArray(result);
    }
    // shallow clone
    if (!isObj || !deep) {
        return isObj && !done
            ? isArr ? result.slice() : assign(
                {}, result)
            : result;
    }
    var ctor = ctorByClass[className];

    switch (className) {
        case boolClass:
        case dateClass:
            return done ? result : new ctor(+result);

        case numberClass:
        case stringClass:
            return done ? result : new ctor(result);

        case regexpClass:
            return done ? result : ctor(result.source, reFlags.exec(result));
    }
    // check for circular references and return corresponding clone
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;

    while (length--) {
        if (stackA[length] == value) {
            return stackB[length];
        }
    }
    // init cloned object
    if (!done) {
        result = isArr ? ctor(result.length)
            : {};

        // add array properties assigned by `RegExp#exec`
        if (isArr) {
            if (hasOwnProperty.call(value, 'index')) {
                result.index = value.index;
            }
            if (hasOwnProperty.call(value, 'input')) {
                result.input = value.input;
            }
        }
    }

    // add the source value to the stack of traversed objects
    // and associate it with its clone

    stackA.push(value);
    stackB.push(result);

    // recursively populate clone (susceptible to call stack limits)
    (isArr ? forEach : forOwn)(done ? result : value, function(objValue, key) {

        result[key] = clone(objValue, deep, callback, undefined, stackA, stackB, customizer);
    });

    return result;
}

function cloneDeep(value, callback, thisArg) {
    return clone(value, true, callback, thisArg);
}

function cloneDeepWith(value, customizer) {
    return clone(value, true, undefined, undefined, undefined, undefined, customizer);
}

function merge(object, source, deepIndicator) {
  var args = arguments,
      index = 0,
      length = 2;

  if (!isObject(object)) {
    return object;
  }
  if (deepIndicator === indicatorObject) {
    var callback = args[3],
        stackA = args[4],
        stackB = args[5];
  } else {
    stackA = [];
    stackB = [];

    // allows working with `_.reduce` and `_.reduceRight` without
    // using their `callback` arguments, `index|key` and `collection`
    if (typeof deepIndicator != 'number') {
      length = args.length;
    }
    if (length > 3 && typeof args[length - 2] == 'function') {
      callback = createCallback(args[--length - 1], args[length--], 2);
    } else if (length > 2 && typeof args[length - 1] == 'function') {
      callback = args[--length];
    }
  }
  while (++index < length) {
    (isArray(args[index]) ? forEach : forOwn)(args[index], function(source, key) {
      var found,
          isArr,
          result = source,
          value = object[key];

      if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
        // avoid merging previously merged cyclic sources
        var stackLength = stackA.length;
        while (stackLength--) {
          if ((found = stackA[stackLength] == source)) {
            value = stackB[stackLength];
            break;
          }
        }
        if (!found) {
          value = isArr
            ? (isArray(value) ? value : [])
            : (isPlainObject(value) ? value : {});

          if (callback) {
            result = callback(value, source);
            if (typeof result != 'undefined') {
              value = result;
            }
          }
          // add `source` and associated `value` to the stack of traversed objects
          stackA.push(source);
          stackB.push(value);

          // recursively merge objects and arrays (susceptible to call stack limits)
          if (!callback) {
            value = merge(value, source, indicatorObject, callback, stackA, stackB);
          }
        }
      }
      else {
        if (callback) {
          result = callback(value, source);
          if (typeof result == 'undefined') {
            result = source;
          }
        }
        if (typeof result != 'undefined') {
          value = result;
        }
      }
      object[key] = value;
    });
  }
  return object;
}

module.exports = {
    cloneDeepWith,
    cloneDeep,
    clone,
    merge
};
