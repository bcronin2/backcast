var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
