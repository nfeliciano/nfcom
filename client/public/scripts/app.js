var nfcom = angular.module('nfcom', ['ui.router']);

//Ui-router: https://github.com/angular-ui/ui-router
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
    });
});

//IF we're using this at all, put it in a different file
//This will likely contain list of projects, at the very least
nfcom.controller('mainController', ['$scope', function($scope) {

}]);
