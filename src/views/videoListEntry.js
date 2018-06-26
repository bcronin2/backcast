var VideoListEntryView = Backbone.View.extend({

  // events: {
  //   'click title': 'handleClick'
  // },
  //
  // handleClick: function() {
  //   this.model.select();
  // },

  initialize: function() {
    this.on('click', this.selectVideo, this);
  },

  selectVideo: function(e) {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
