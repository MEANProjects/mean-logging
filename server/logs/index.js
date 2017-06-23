var logModule = process.env.LOG_MODULE || 'bunyan';
console.log("log module = " + logModule);
module.exports = require('./' + logModule + '.js');
