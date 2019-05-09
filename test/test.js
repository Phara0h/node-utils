var utils = require('..');

var opt = {
    a: {
    b: {
    c: {
    d: {
    e: {
    f: {
    g: {
    h: {
    i: {
    j: {
    k: {
    l: {
    m: [1,2,3,4,5]
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    };

console.log(JSON.stringify(utils.cloneDeep(opt)))
