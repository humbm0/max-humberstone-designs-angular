"use strict"

angular.module('angularSiteApp.services', [])

.factory('Projects', function($http, $q) {

  var projects = {};

   projects.all = function () {
    return  $http.get('../data/projects3.json');
   };

   return projects;

  // return {
  //   all: function() {
  //     return deferred.promise;
  //   },
  //   get: function(projectId) {
  //     for (var i = 0; i < deferred.promise.length; i++) {
  //       if (chats[i].id === parseInt(chatId)) {
  //         return chats[i];
  //       }
  //     }
  //     return null;
  //   }
  // };
});
