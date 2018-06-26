var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.current = this.collection.first();
    this.collection.forEach(function(video) {
      video.on('select', function() {
        this.current = video;
        this.render();
      }, this);
    }, this);
  },

  render: function() {
    this.$el.html(this.template(this.current.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
