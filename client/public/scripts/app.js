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
      url: "/projects/{projectname:linksupp|lfiscrapbook|comictycoon|jplc}",
      url: '/projects/:projectname',
      templateUrl: '/views/projects.detail.html',
      controller: 'projectsController'
    });
});
