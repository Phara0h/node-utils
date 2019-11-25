
const colors = require('colors');
var Table = require('cli-table');

const {spawn} = require('child_process');

var table = new Table({
    head: [colors.blue('Name'), colors.blue('Node-Utils'), colors.blue('Old')]
});

const start = async () => {

    // Start REST Test Server
    const server = spawn('sh', [
        '-c',
        `node ${__dirname}/server.js`
    ]);

    await (new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, 500);
    }));

    // Bench Suites
    parseResults(await require('./suites/get-lodash.bench.js'));
    parseResults(await require('./suites/set-lodash.bench.js'));
    parseResults(await require('./suites/isObject-lodash.bench.js'));
    parseResults(await require('./suites/snakeCase-lodash.bench.js'));
    parseResults(await require('./suites/camelCase-lodash.bench.js'));
    parseResults(await require('./suites/kebabCase-lodash.bench.js'));
    parseResults(await require('./suites/mapKeys-lodash.bench.js'));
    parseResults(await require('./suites/mapKeys-altmap.bench.js'));
    parseResults(await require('./suites/forEach-lodash.bench.js'));
    parseResults(await require('./suites/debounce-lodash.bench.js'));
    parseResults(await require('./suites/clone-lodash.bench.js'));
    parseResults(await require('./suites/cloneDeep-lodash.bench.js'));
    parseResults(await require('./suites/request-RequestPromise.bench.js'));

    console.log(table.toString());

    server.kill();
    process.exit();
};

function parseResults(res) {

    var nodeUtilsPercent = ((res.results[1].ops / res.results[0].ops) * 100);
    var oldPercent = ((res.results[0].ops / res.results[1].ops) * 100);

    var nodeUtilsPercentString = nodeUtilsPercent > oldPercent ? colors.green('+' + (nodeUtilsPercent - 100).toFixed(2) + '%') : colors.red('x' + (oldPercent / 100).toFixed(2) + ' slower');
    var oldPercentString = oldPercent > nodeUtilsPercent ? colors.green('+' + (oldPercent - 100).toFixed(2) + '%') : colors.red('x' + (nodeUtilsPercent / 100).toFixed(2) + ' slower');

    var newRes = [colors.magenta(res.name), colors.cyan(res.results[1].ops + ' ops/s') + ' | ' + nodeUtilsPercentString, colors.cyan(res.results[0].ops + ' ops/s') + ' | ' + oldPercentString];

    table.push(newRes);
}

start();
