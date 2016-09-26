'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('ProjectCtrl', function ($scope, Projects, $routeParams, $filter) {


    Projects.all().then(function(data){
      var projects = data.data.projects
      $scope.project = $filter('filter')(projects, {handle: $routeParams.projectId})[0];
      console.log(projects);
      console.log($routeParams.projectId);
      console.log($scope.project);
    });

  });
