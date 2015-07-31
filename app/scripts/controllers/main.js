'use strict';

/**
 * @ngdoc function
 * @name unswsociApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unswsociApp
 */
angular.module('unswsociApp')
  .controller('MainCtrl', function ($rootScope) {
    console.log('init MainCtrl');
    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
        console.log('from', fromState, 'to', toState);
      });
  });
