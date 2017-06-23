'use strict';

var bunyan = require('bunyan');
var Elasticsearch = require('bunyan-elasticsearch');
 
var elasticHost = process.env.ELASTIC_HOST || "localhost";
var elasticPort = process.env.ELASTIC_PORT || "9200";

var esStream = new Elasticsearch({
  indexPattern: '[logstash-]YYYY.MM.DD',
  type: 'logs',
  host: elasticHost + ":" + elasticPort
});
esStream.on('error', function (err) {
  console.log('Elasticsearch Stream Error:', err.stack);
});

global.logger = bunyan.createLogger({
  name: "Rudolf",
  serializers: bunyan.stdSerializers
});

logger.addStream( { stream: esStream });
 
logger.info('Sample bunyan info');


module.exports = exports = logger;