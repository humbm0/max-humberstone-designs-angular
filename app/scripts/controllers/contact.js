'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('ContactCtrl', function ($scope, $http) {

    $scope.success = false;
    $scope.error = false;

    $scope.sendMessage = function( input ) {
      $http({
          method: 'POST',
          url: '../scripts/processForm.php',
          data: input,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success( function(data) {
        if ( data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
        }
      } );
    }

  });
