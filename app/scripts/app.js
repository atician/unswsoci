'use strict';

/**
 * @ngdoc overview
 * @name unswsociApp
 * @description
 * # unswsociApp
 *
 * Main module of the application.
 */
angular
  .module('unswsociApp', [
    'ngTouch',
    'ui.router',
    'ui.materialize'
  ])
  // .run(['$rootScope', function($rootScope) {
  //     $rootScope.$on('$stateChangeStart', 
  //     function(event, toState, toParams, fromState){ 
  //       console.log('from', fromState, 'to', toState);
  //     });
  // }])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/home/details');
    // Now set up the states
    $stateProvider
      .state('root', {
        url: '/',
        abstract: true,
        template: '<ui-view/>'
      })
      // top level routes; index pages
      .state('root.home', {
        url: 'home',
        templateUrl: 'views/home/home.html'
      })
      .state('root.about us', {
        url: 'about us/vision',
        templateUrl: 'views/about-us/vision.html'
      })
      .state('root.events', {
        url: 'events',
        templateUrl: 'views/events/events.html'
      })
      .state('root.contact us', {
        url: 'contact us',
        templateUrl: 'views/contact-us/contact-us.html'
      })
      .state('root.the comp', {
        url: 'the comp',
        templateUrl: 'views/online-store/online-store.html'
      })
      // about us
      .state('about us', {
        url: '/about us',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('about us.vision', {
        url: '/vision',
        templateUrl: 'views/about-us/vision.html'
      })
      .state('about us.history', {
        url: '/history',
        templateUrl: 'views/about-us/history.html'
      })
      .state('about us.executives', {
        url: '/excutives',
        templateUrl: 'views/about-us/executives.html'
      })
      .state('about us.home fields', {
        url: '/home fields',
        templateUrl: 'views/about-us/home-fields.html'
      });

  }]);