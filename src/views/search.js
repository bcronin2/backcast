var SearchView = Backbone.View.extend({

  el: '.search',

  events: {
    'change input': 'search'
  },

  search: function(e) {
    var query = e.target.value;
    this.collection.search(query);
    this.$el.find('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
