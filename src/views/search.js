var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'keyup input': 'search'
  },

  search: function(e) {
    if (e.key !== 'Enter') {
      var query = e.target.value;
      this.collection.search(query);
    } else {
      this.$el.find('input').val('');
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
