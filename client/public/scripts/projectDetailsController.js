nfcom.controller('projectDetailsController', ['$scope', '$stateParams', function($scope, $stateParams) {
  var projectName = $stateParams.projectname;                   //get project name from the link name

  $scope.project = {};

  var projectLfiscrapbook = {
    name: 'LFI Scrapbook!',
    type: 'iPad App',
    image: '/images/lfi/1.jpg',
    sides: true,
    summary: 'LFI! Scrapbook is an iPad app built for kids with Autism. The app contains various games that kids can play with using faces of important people in their lives - games that are meant to develop facial and emotional recognition.',
    role: 'I lead the team of students and volunteers during the latter stages of development and until app release, assigning tasks and mentoring programmers new to the language and the team. I was the primary developer of the UI and the CoreData model we used for the app.',
    links: [
      { type: 'App Store',
        link: 'https://itunes.apple.com/app/lets-face-it!-scrapbook/id1030111507?ls=1&mt=8' },
      { type: 'Website',
        link: 'http://web.uvic.ca/~carte/lfiscrapbook.html' },
      { type: 'Youtube',
        link: 'https://www.youtube.com/watch?v=LTBKKDj43tU' }
    ],
    icons: [
      '/images/lfi/1.jpg',
      '/images/lfi/2.jpg',
      '/images/lfi/3.jpg',
      '/images/lfi/4.jpg'
    ]
  };

  var projectLinksupp = {
    name: 'Linksupp',
    type: 'Web App',
    image: '/images/linksupp/1.png',
    sides: false,
    summary: 'Linksupp is a web application built on the MEAN Stack (MongoDB, ExpressJS, AngularJS, NodeJS). The application is aimed for outgoing groups of people who want to meet new contacts by meeting people informally for a meal.',
    role: 'In a team of 5, I primarily worked on the backend, using MongoDB and NoSQL to design and implement our database and how the front-end interacts with it. However, I was also involved with many aspects of the front-end, either through assisting the other developers, fixing bugs, or implementing features such as watching the database in real-time and reflecting changes on the front end.',
    links: [
    { type: 'GitHub',
      link: 'https://github.com/nfeliciano/mangiamo' },
    { type: 'Video Demo',
      link: 'https://www.youtube.com/watch?v=6ol6h0DApqQ' }
    ],
    icons: [
      '/images/linksupp/1.png',
      '/images/linksupp/2.png',
      '/images/linksupp/3.png',
      '/images/linksupp/4.png'
    ]
  };

  var projectComictycoon = {
    name: 'Comic Tycoon',
    type: 'iPhone / iPad App',
    image: '/images/comictycoon/1.jpg',
    sides: true,
    summary: 'Under Insatiable Genius, a mobile app for iOS devices where users can create comics from their images. This app was developed using Objective-C, and users can run their images through an engine to turn them into cartoons and organize them into a comic-like format, with many options for panels, headings, and speech bubbles. Users may also share their creations through various social media websites.',
    role: 'I worked primarily on developing the interface our group sketched out, arranging the views and implementing the comic features, such as giving the user control on the panels and the speech bubbles, auto-adjusting the page for headers, creating the layers system, and others. NOTE: The app has not been updated since a year after I left the company.',
    links: [
      { type: 'App Store (iPad)',
        link: 'https://itunes.apple.com/ca/app/comic-tycoon-hd/id609065885?mt=8' },
      { type: 'App Store (iPhone)',
        link: 'https://itunes.apple.com/us/app/comic-tycoon-for-iphone/id659102616?mt=8' },
      { type: 'Video Demo',
        link: 'https://www.youtube.com/watch?v=2ih0VSGr3HU' }
    ],
    icons: [
      '/images/comictycoon/5.jpg',
      '/images/comictycoon/2.jpg',
      '/images/comictycoon/3.jpg',
      '/images/comictycoon/4.jpg'
    ]
  };

  var projectJplc = {
    name: 'Jet Pack Laser Cat',
    type: 'iPad App',
    image: '/images/jplc/1.jpg',
    sides: false,
    summary: 'An iPad game where the player uses touch controls to lead the protagonist - the titular cat - towards tools to build a jetpack to escape. Developed using Objective-C and the Cocos2D library, JPLC tests dexterity and patience, making players guide the cat around borders and obstacles to victory.',
    role: 'In a team of 3, I was the programmer of the game. I developed the code base, delegating only a few coding tasks to another teammate after designing the code such that they could make levels by plugging in graphics and changing only a few lines of code. NOTE: The app is no longer on the App Store due to costs.',
    links: [
      { type: 'GitHub',
        link: 'https://github.com/nfeliciano/jplc' }
    ],
    icons: [
      '/images/jplc/1.jpg',
      '/images/jplc/2.jpg',
      '/images/jplc/3.jpg',
      '/images/jplc/4.jpg',
      '/images/jplc/5.jpg'
    ]
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

  $scope.changePicture = function(icon) {
    $scope.project.image = icon;
  };
}]);
