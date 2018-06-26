var VideoListEntryView = Backbone.View.extend({

  selectVideo: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title')
      .on('click', this.selectVideo.bind(this));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
