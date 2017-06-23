'use strict';


global.logger = require('pino')({browser: {asObject: true}});

logger.info('Sample pino info');

module.exports = exports = logger;