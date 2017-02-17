'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('ProjectCtrl', function ($scope, Projects, $routeParams, $filter, $timeout, $window) {

    $scope.pageClass = 'page-project';

    Projects.all().then(function(data){
      var projects = data.data.projects;
      $scope.relatedProjects = [];
      $scope.project = $filter('filter')(projects, {handle: $routeParams.projectId})[0];
      $scope.data = $filter('filter')(projects, {type: $scope.project.type, handle: '!' + $routeParams.projectId});
      angular.forEach($scope.data, function(project){
        $scope.relatedProjects.push({
          project: project,
          order: 0.5 - $window.Math.random()
        });
      });


      console.log($scope.project);
      console.log($scope.relatedProjects);
    });

    // $timeout(function() {
    //   $('.showcase-carousel').slick({
    //     dots: true,
    //     infinite: false,
    //     autoplay: true,
    //     autoplaySpeed: 6000
    //   });
    // });

  });
