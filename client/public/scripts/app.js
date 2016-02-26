var nfcom = angular.module('nfcom', ['ui.router']);

nfcom.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/profile.html'
    })
    .state('projectDetail', {
      // url: "/projects/{projectname:linksupp|lfiscrapbook}",
      url: '/projects/:projectname',
      templateUrl: '/views/projects.detail.html',
      controller: 'projectsController'
    })
});

nfcom.controller('mainController', ['$scope', function($scope) {

}]);
