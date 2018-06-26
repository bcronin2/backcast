var SearchView = Backbone.View.extend({

  el: '.search',

  search: function(e) {
    var query = e.target.value;
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('.form-control')
      .on('change', this.search.bind(this));
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
