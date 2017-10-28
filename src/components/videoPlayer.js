angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'  
  },
  controller: function() {
    this.videoUrl = function(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
