angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.input = '';
    this.search = (input) => {
      this.input = input;
    };
  },
  templateUrl: 'src/templates/app.html'
});
