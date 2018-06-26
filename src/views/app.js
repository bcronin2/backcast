var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.current = this.videos.first();
    this.videos.forEach(function(video) {
      video.on('select', function() {
        this.current = video;
        this.render();
      }, this);
    }, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // this.$el.find('.search').replaceWith(this.search.render());
    this.renderVideoPlayer();
    this.renderVideoList();
    return this;
  },

  renderVideoPlayer: function() {
    var videoPlayer = new VideoPlayerView({ model: this.current });
    this.$el.find('.player').replaceWith(videoPlayer.render());
  },

  renderVideoList: function() {
    var videoList = new VideoListView({ collection: this.videos });
    this.$el.find('.list').replaceWith(videoList.render());
  },

  template: templateURL('src/templates/app.html')

});
