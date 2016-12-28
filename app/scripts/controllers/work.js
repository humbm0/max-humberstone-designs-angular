'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('WorkCtrl', function ($scope, Projects) {

    Projects.all().then(function(data){
      $scope.projects = data.data.projects
      $scope.quantity = 6;
    });

    // $( window ).load(function() {
    //   // cache container
    //   var $container = $('.project-gallery .row');
    //   // initialize isotope
    //   $container.isotope({
    //     // options...
    //     itemSelector: '.tile'
    //   });
    //
    //   // filter items when filter link is clicked
    //   $('.filter-bar li').click(function(){
    //     var selector = $(this).attr('data-filter');
    //     $container.isotope({ filter: selector });
    //     console.log("clicked" + selector);
    //     $('.filter-bar li').removeClass('selected');
    //     $(this).addClass('selected');
    //     return false;
    //   });
    // });

  });
