'use strict';

import angular from 'angular';

export default angular.module('meanLoggingApp.logs', [])
  .constant('logger', require('../../server/logs/index'))
  .name;
