var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  // toggleAutoPlay: function() {
  //   this.autoPlay = !this.autoPlay;
  // },

  initialize: function() {
    this.current = this.collection.at(0);
    this.collection.on('select', this.updateVideo, this);
  },

  updateVideo: function(video) {
    this.current = video;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.current.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
