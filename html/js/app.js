'use strict';
var ApiPath     = 'http://localhost:3000/api/v1/';

var App = angular.module('app', [
    'ngResource',
    'ui.bootstrap',
    'ui.router',
])
.run(['$rootScope', '$state', '$stateParams', '$http',
      function ($rootScope,   $state,   $stateParams ,$http) {

          $rootScope.$state       = $state;
          
          $rootScope.$stateParams = $stateParams;
          
          $rootScope.loading      = false;

          $rootScope.$on('$stateChangeStart', function (ev, toState, toParams){

          });
      }
])
.config(
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider) {
          $urlRouterProvider
              .otherwise('/app/dashboard');

          $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: "tpl/app.html",
            })

            // Dashboard
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'tpl/dashboard.html',
                controller : 'dashboard',
            })
      }
])
