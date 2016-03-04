nfcom.controller('projectsController', ['$scope', function($scope) {
  $scope.empty = "Nothing here yet!"

  $scope.projects = [
    { name: 'LFI! Scrapbook',
      description: 'iPad App built for kids with Autism to improve identity and expression recognition skills. Under the Center for Autism Research, Technology, and Education.',
      link: {
        type: 'Website',
        link: 'http://web.uvic.ca/~carte/lfiscrapbook.html'
      }
    },
    { name: 'Linksupp',
      description: 'Web App built for people to connect with new people or friends over lunch. Course project.',
      link: {
        type: 'Video Demo',
        link: 'https://www.youtube.com/watch?v=6ol6h0DApqQ'
      }
    },
    { name: 'Comic Tycoon',
      description: 'iPhone and iPad app where users can create comics from their photos and videos. Under Insatiable Genius.',
      link: {
        type: 'Video Demo',
        link: 'https://www.youtube.com/watch?v=2ih0VSGr3HU'
      }
    },
    { name: 'Jet Pack Laser Cat',
      description: 'iPad game where player guides cat to building a jetpack using touch controls. External project.',
      link: {
        type: 'GitHub',
        link: 'https://github.com/nfeliciano/jplc'
      }
    },
    { name: 'PencilFX',
      description: 'iPhone and iPad app where users can turn their photos and videos into sketches. Under Insatiable Genius.',
      link: {
        type: 'Video Demo',
        link: 'https://www.youtube.com/watch?v=Mjk_-a40-oU'
      }
    },
    { name: 'My Mobile Experience',
      description: 'iPad app using Swift in development for a PhD study for children\'s education through content creation.',
      link: {
        type: 'GitHub',
        link: 'https://github.com/nfeliciano/mme'
      }
    },
    { name: 'Visualizing MOOCs',
      description: 'Interactive visualization built using data from Massively Open Online Courses from Harvard and MIT.',
      link: {
        type: 'Video Demo',
        link: 'https://www.youtube.com/watch?v=X4EzaJR6yPE'
      }
    },
    { name: 'Kinect Greeting Cards',
      description: 'Hackathon program where users can use the Kinect to automatically add their faces to various, pre-selected images.',
      link: {
        type: 'GitHub',
        link: 'https://github.com/dpotts/Thinklandia-Hack'
      }
    },
    {
      name: 'This Website',
      description: 'Built using AngularJS and Foundation for Apps.',
      link: {
        type: 'GitHub',
        link: 'https://github.com/nfeliciano/nfcom'
      }
    }
    // { name: 'Abe Music',
    //   description: 'Hackathon iOS app which uses Echonest API to make playlists using songs with similar tempos based on location.',
    //   link: {
    //     type: 'GitHub',
    //     link: 'https://github.com/brendanclement/hackathon'
    //   }
    // }
  ];

  $scope.papers = [
  {
    name: 'Student Experiences Using GitHub in Software Engineering Courses: A Case Study',
    conference: 'ICSE SEET \'16',
    role: 'Lead Author',
    link: 'http://keg.cs.uvic.ca/pubs/feliciano-ICSE2016.pdf'
  },
  {
    name: 'The Emergence of GitHub as a Collaborative Platform for Education',
    conference: 'CSCW \'15',
    role: 'Co-author',
    link: 'http://alexeyza.com/pdf/cscw15.pdf'
  },
  {
    name: 'SoundAnchoring: Content-based exploration of music collections with anchored self-organized maps',
    conference: 'SMC \'13',
    role: 'Co-author / Programmer',
    link: 'http://leandrocollares.github.io/files/p768-collares.pdf'
  },
  {
    name: 'MM-e at the Museum: A Mobile Memory e-portfolio Application for Young Children in Diverse Museum Environments',
    conference: 'EdMedia \'12',
    role: 'Co-author / Programmer',
    link: 'http://www.editlib.org/p/40807/'
  }
  ];
}]);
