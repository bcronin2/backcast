var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  autoPlay: false,

  events: {
    'click .auto-play': 'toggleAutoPlay'
  },

  toggleAutoPlay: function() {
    this.autoPlay = !this.autoPlay;
  },

  initialize: function() {
    this.current = this.collection.at(0);
    this.collection.on('select', this.updateVideo, this);
  },

  updateVideo: function(video) {
    this.current = video;
    this.render();
  },

  render: function() {
    this.current.attributes.autoPlay = this.autoPlay ? 1 : 0;
    this.$el.html(this.template(this.current.attributes));
    this.$el.find('.auto-play .1').prop('checked', true);
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
