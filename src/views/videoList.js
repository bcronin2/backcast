var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    // this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    console.log(this.$el);
    return this.$el;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({ model: video });
    this.$el.children().append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
