var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.current = this.videos.first();
    this.videos.forEach(function(video) {
      video.on('select', function() {
        this.current = video;
        this.renderVideoPlayer();
      }, this);
    }, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderSearch();
    this.renderVideoPlayer();
    this.renderVideoList();
    return this;
  },

  renderSearch: function() {
    var search = new SearchView({ collection: this.videos });
    search.render();
  },

  renderVideoPlayer: function() {
    var videoPlayer = new VideoPlayerView({ model: this.current });
    videoPlayer.render();
  },

  renderVideoList: function() {
    var videoList = new VideoListView({ collection: this.videos });
    videoList.render();
  },

  template: templateURL('src/templates/app.html')

});
