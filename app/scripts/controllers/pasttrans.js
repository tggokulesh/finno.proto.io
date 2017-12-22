'use strict';

/**
 * @ngdoc function
 * @name protoApp.controller:PasttransCtrl
 * @description
 * # PasttransCtrl
 * Controller of the protoApp
 */
angular.module('protoApp')
  .controller('PasttransCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.$on('isAuthenticated',function(event,data){
      if(data){
        $scope.isAuthenticated = true;
      }else{
        $location.url('/login');
      }
    });

  });
