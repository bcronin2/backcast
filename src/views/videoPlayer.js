var VideoPlayerView = Backbone.View.extend({
  
  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
