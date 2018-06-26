var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'keyup input': 'search'
  },

  search: function(e) {
    var query = e.target.value;
    this.collection.search(query);
    if (e.key === 'Enter') {
      this.$el.find('input').val('');
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
