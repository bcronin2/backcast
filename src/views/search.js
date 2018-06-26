var SearchView = Backbone.View.extend({

  el: '.search',

  search: function(e) {
    var query = e.target.value;
    this.collection.search(query);
    this.$el.find('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('input').on('change', this.search.bind(this));
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
