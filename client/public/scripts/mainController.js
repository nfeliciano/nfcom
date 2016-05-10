nfcom.controller('mainController', ['$scope', '$http', 'currentlyFactory', function($scope, $http, currentlyFactory) {

  $scope.socialLinks = [
    { icon: 'icon-github',
      link: 'https://github.com/nfeliciano' },
    { icon: 'icon-twitter',
      link: 'https://twitter.com/nfeli' },
    { icon: 'icon-linkedin',
      link: 'https://ca.linkedin.com/in/noel-joseph-feliciano-a6702980' },
    { icon: 'icon-envelop',
      link: 'mailto:feliciano.noel@gmail.com' },
    { icon: 'icon-profile',
      link: '/images/resume.pdf' }
  ];

  $scope.projects = [
    { icon: 'icon-tablet',
      link: 'lfiscrapbook',
      name: 'LFI! Scrapbook' },
    { icon: 'icon-laptop',
      link: 'linksupp',
      name: 'Linksupp' },
    { icon: 'icon-mobile',
      link: 'comictycoon',
      name: 'Comic Tycoon' },
    { icon: 'icon-tablet',
      link: 'jplc',
      name: 'Jet Pack Laser Cat' },
  ];

  promise = currentlyFactory.getMusic();
  promise.then(function(music) {
    alert(music.music_text);
  }, function(error) {
    alert(error);
  });

}]);
