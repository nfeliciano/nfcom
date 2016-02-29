nfcom.controller('projectsController', ['$scope', '$stateParams', function($scope, $stateParams) {
  var projectName = $stateParams.projectname;                   //get project name from the link name

  //Just testing for now
  $scope.project = {};
  var projectLfiscrapbook = {
    name: 'LFI Scrapbook!',
    type: 'iPad App',
    image: '/images/lfi/1.jpg',
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
    name: 'Linksupp',
    type: 'Web App',
    image: '/images/linksupp/1.png',
    summary: 'Coming soon!',
    role: '',
    links: [

    ]
  };

  var projectComictycoon = {
    name: 'Comic Tycoon',
    type: 'iPhone / iPad App',
    image: '/images/comictycoon/1.jpg',
    summary: 'Coming soon! Note: the app has not been updated since a year after I left the company - may experience issues.',
    role: '',
    links: [
      { type: 'App Store (iPad)',
      link: 'https://itunes.apple.com/ca/app/comic-tycoon-hd/id609065885?mt=8' },
      { type: 'App Store (iPhone)',
      link: 'https://itunes.apple.com/us/app/comic-tycoon-for-iphone/id659102616?mt=8' }
    ]
  };

  var projectJplc = {
    name: 'Jet Pack Laser Cat',
    type: 'iPad App',
    image: '/images/jplc/1.jpg',
    summary: 'Coming soon!',
    role: '',
    links: []
  };

  //pull information about project depending on which project user is viewing
  if (projectName.localeCompare('lfiscrapbook') === 0) {
    $scope.project = projectLfiscrapbook;
  } else if (projectName.localeCompare('linksupp') === 0) {
    $scope.project = projectLinksupp;
  } else if(projectName.localeCompare('comictycoon') === 0) {
    $scope.project = projectComictycoon;
  } else if(projectName.localeCompare('jplc') === 0) {
    $scope.project = projectJplc;
  }
}]);
