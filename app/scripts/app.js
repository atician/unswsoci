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
    'ui.router'
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
        url: 'home/details',
        templateUrl: 'views/home/home.html'
      })
      .state('root.about us', {
        url: 'about us/vision',
        templateUrl: 'views/about-us/vision.html'
      })
      // .state('root.home fields', {
      //   url: 'about us/home fields/village green',
      //   templateUrl: 'views/about-us/village-green.html'
      // })
      .state('root.events', {
        url: 'events/calendar',
        templateUrl: 'views/events/calendar.html'
      })
      .state('root.contact us', {
        url: 'contact us',
        templateUrl: 'views/contact-us/contact-us.html'
      })
      .state('root.online store', {
        url: 'online store',
        templateUrl: 'views/online-store/online-store.html'
      })
      // home
      .state('home', {
        url: '/home',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('home.details', {
        url: '/details',
        templateUrl: 'views/home/home.html'
      })
      .state('home.scores', {
        url: '/scores',
        templateUrl: 'views/home/scores.html'
      })
      .state('home.draw', {
        url: '/draw',
        templateUrl: 'views/home/draw.html'
      })
      .state('home.wet weather', {
        url: '/wet weather',
        templateUrl: 'views/home/wet-weather.html'
      })
      .state('home.applications', {
        url: '/applications',
        templateUrl: 'views/home/applications.html'
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
      })
      // // home fields
      // .state('about us.home fields', {
      //   url: '/home fields',
      //   abstract: true,
      //   template: '<ui-view/>'
      // })
      // .state('about us.home fields.village green', {
      //   url: '/village green',
      //   templateUrl: 'views/about-us/village-green.html'
      // })
      // .state('about us.home fields.asb', {
      //   url: '/asb',
      //   templateUrl: 'views/about-us/asb.html'
      // })
      // .state('about us.home fields.david phillips', {
      //   url: '/david phillips',
      //   templateUrl: 'views/about-us/david-phillips.html'
      // })
      // events
      .state('events', {
        url: '/events',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('events.calendar', {
        url: '/calendar',
        templateUrl: 'views/events/calendar.html'
      })
      // contact us
      .state('contact us', {
        url: '/contact us',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('contact us.contact us', {
        url: '/contact us',
        templateUrl: 'views/contact-us/contact-us.html'
      })
      // online store
      .state('online store', {
        url: '/online store',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('online store.online store', {
        url: '/online store',
        templateUrl: 'views/online-store/online-store.html'
      });
  }]);