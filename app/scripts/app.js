'use strict';

/**
 * @ngdoc overview
 * @name angularSiteApp
 * @description
 * # angularSiteApp
 *
 * Main module of the application.
 */
angular
  .module('angularSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularSiteApp.services',
    'wu.masonry',
    'slick',
    'fox.scrollReveal'
  ])
  .run(function ($rootScope) {
        $rootScope.$on('$locationChangeSuccess', function (event) {
            jQuery("html, body").delay(700).animate({ scrollTop: 0 }, 80);
        });
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/work/:projectId', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/capabilities', {
        templateUrl: 'views/capabilities.html',
        controller: 'CapabilitiesCtrl',
        controllerAs: 'capabilities'
      })
      // .when('/contact', {
      //   templateUrl: 'views/contact.html',
      //   controller: 'ContactCtrl',
      //   controllerAs: 'contact'
      // })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'work'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
  }]);
