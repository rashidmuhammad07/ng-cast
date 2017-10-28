angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(input, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        q: input,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY
      },
    }).then(function success(results) {
      console.log(results.data.items);
      callback(results.data.items);
    }, function error(results) {
      console.log(`ERROR: ${JSON.stringify(results)}`);
    });
  };
});
