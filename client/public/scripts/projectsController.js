nfcom.controller('projectsController', ['$scope', '$stateParams', function($scope, $stateParams) {
  var projectName = $stateParams.projectname;

  $scope.project = {};
  var projectLfiscrapbook = {
    name: 'LFI Scrapbook!',
    about: 'Hahah kids!',
    link: 'http://www.google.com'
  };

  var projectLinksupp = {
    name: 'Linksupp!',
    about: 'LOL Lunch!',
    link: 'http://www.linksupp.com'
  };

  //pull information about project
  if (projectName.localeCompare("lfiscrapbook") === 0) {
    $scope.project = projectLfiscrapbook;
  } else if (projectName.localeCompare("linksupp") === 0) {
    $scope.project = projectLinksupp;
  }
}]);