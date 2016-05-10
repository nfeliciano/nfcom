var nfcom = angular.module('nfcom', ['ui.router']);

nfcom.constant('settings', angular.copy(nfcomSettings));
nfcomSettings = undefined;

//Ui-router: https://github.com/angular-ui/ui-router
nfcom.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/profile.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: '/views/projects.html',
      controller: 'projectsController'
    })
    .state('projectDetail', {
      url: "/projects/{projectname:linksupp|lfiscrapbook|comictycoon|jplc}",
      templateUrl: '/views/projects.detail.html',
      controller: 'projectDetailsController'
    });
});
