'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('MainCtrl', function ($scope, Projects) {

    $scope.pageClass = 'page-home';

    Projects.all().then(function(data){
      $scope.projects = data.data.projects
      $scope.quantity = 6;
    });


  });
