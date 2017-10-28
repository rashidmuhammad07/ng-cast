angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    index: '<',
    onClick: '<'
  },
  controller: function() {
    
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
