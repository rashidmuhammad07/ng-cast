angular.module('video-player')

.component('app', {
  controller: function(youTube) {

    this.videos = [];
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.input = '';
    this.search = (input) => {
      console.log(input);
      youTube.search(input, this.searchResults);
    };
    this.searchResults = (results) => {
      this.videos = results;
      this.currentVideo = results[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});
