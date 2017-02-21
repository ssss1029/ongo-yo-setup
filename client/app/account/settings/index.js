'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('yeomanTestApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
