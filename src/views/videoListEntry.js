var VideoListEntryView = Backbone.View.extend({

  // events: {
  //   'click title': 'handleClick'
  // },
  //
  // handleClick: function() {
  //   this.model.select();
  // },

  initialize: function() {
    // this.on('click');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
