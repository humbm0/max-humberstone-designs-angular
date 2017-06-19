angular.module('angularSiteApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.$location = $location;

  }]);
