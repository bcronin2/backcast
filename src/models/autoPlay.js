var AutoPlay = Backbone.Model.extend({

  // el: {
  //
  // },

  initialize: function() {
    this.value = 0;
  },

  render: function() {
    this.$el.html(_.template(this));
  },

  // template: _.template('<input type="checkbox"> auto play')

});
