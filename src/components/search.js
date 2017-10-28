angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    input: '<'
  },
  controller: function() {
  },
  templateUrl: 'src/templates/search.html'
});
