angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    input: '<',
    liveSearch: '<'
  },
  controller: function() {
  },
  templateUrl: 'src/templates/search.html'
});
