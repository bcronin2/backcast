var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  render: function() {
    // this.model.attributes.url = `https://www.youtube.com/embed/${model.attributes.id.videoId}`;
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
