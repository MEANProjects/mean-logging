'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('meanLoggingApp.util', [])
  .factory('Util', UtilService)
  .name;
