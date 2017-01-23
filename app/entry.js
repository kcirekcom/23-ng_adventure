'use strict';

const angular = require('angular');

angular.module('ngAdventure', []);

// services
require('./service/map-service.js');
require('./service/select-box-service.js');
require('./service/player-service.js');

//components
require('./component/game-pad/game-pad.js');
