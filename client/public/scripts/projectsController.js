nfcom.controller('projectsController', ['$scope', '$stateParams', function($scope, $stateParams) {
  var projectName = $stateParams.projectname;                   //get project name from the link name

  //Just testing for now
  $scope.project = {};
  var projectLfiscrapbook = {
    name: 'LFI Scrapbook!',
    type: 'iPad App',
    summary: 'LFI! Scrapbook is an iPad app built for kids with Autism. The app contains various games that kids can play with using faces of important people in their lives - games that are meant to develop facial and emotional recognition.',
    role: 'I lead the team of students and volunteers during the latter stages of development and until app release, assigning tasks and mentoring programmers new to the language and the team. I was the primary developer of the UI and the CoreData model we used for the app.',
    links: [
      { type: 'App Store',
        link: 'https://itunes.apple.com/app/lets-face-it!-scrapbook/id1030111507?ls=1&mt=8' },
      { type: 'Website',
        link: 'http://web.uvic.ca/~carte/lfiscrapbook.html' },
      { type: 'Youtube',
        link: 'https://www.youtube.com/watch?v=LTBKKDj43tU' }
    ]
  };

  var projectLinksupp = {
    name: 'Linksupp!',
    about: 'LOL Lunch!',
    link: 'http://www.linksupp.com'
  };

  //pull information about project depending on which project user is viewing
  if (projectName.localeCompare("lfiscrapbook") === 0) {
    $scope.project = projectLfiscrapbook;
  } else if (projectName.localeCompare("linksupp") === 0) {
    $scope.project = projectLinksupp;
  }
}]);
