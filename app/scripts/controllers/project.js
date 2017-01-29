'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('ProjectCtrl', function ($scope, Projects, $routeParams, $filter, $timeout) {

    $scope.pageClass = 'page-project';

    Projects.all().then(function(data){
      var projects = data.data.projects;
      $scope.project = $filter('filter')(projects, {handle: $routeParams.projectId})[0];
      $scope.relatedProjects = $filter('filter')(projects, {type: $scope.project.type});
      console.log($scope.project);
      console.log($scope.relatedProjects);
    });

    $timeout(function() {
      $('.showcase-carousel').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 6000
      });
    });

  });
