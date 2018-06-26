var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.videos = new Videos(exampleVideoData);

    this.videoPlayerView = new VideoPlayerView({ collection: this.videos });

    this.videoListView = new VideoListView({ collection: this.videos });


    this.render();
  },

  // TODO: decouple search, player, and list rendering into helper functionss
  render: function() {
    this.$el.html(this.template());
    // this.$el.find('.search').replaceWith(this.search.render());
    this.$el.find('.player').replaceWith(this.videoPlayerView.render());
    this.$el.find('.list').replaceWith(this.videoListView.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
