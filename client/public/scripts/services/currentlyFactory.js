nfcom.factory('currentlyFactory', ['$q', 'httpFactory', 'settings', function($q, httpFactory, settings) {
  var factory = {}

  factory.getMusic = function() {
    var deferred = $q.defer();

    var url = settings.API_URL + '/currently/music';
    promise = httpFactory.getRequest(url);
    promise.then(function(music) {
      deferred.resolve(music[0]);
    }, function(error) {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  return factory;
}]);
