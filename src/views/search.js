var SearchView = Backbone.View.extend({

  el: '.search',

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
