var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('Star Wars');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.search = new SearchView({ collection: this.videos });
    this.videoList = new VideoListView({ collection: this.videos });
    this.videoPlayer = new VideoPlayerView({ collection: this.videos });
    return this;
  },

  template: templateURL('src/templates/app.html')

});
