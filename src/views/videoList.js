var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.updateList, this);
  },

  updateList: function() {
    this.collection.at(0).select();
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this.$el;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({ model: video });
    this.$el.children().append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
