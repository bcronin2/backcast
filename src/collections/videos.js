var Videos = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        maxResults: 5
      },
      type: 'GET',
      success: function(data) {
        console.log('backcast: Videos fetched');
      },
      error: function(data) {
        console.error('backcast: Failed to fetch videos', data);
      }
    });
  },

  parse: function(result) {
    return result.items;
  },

  model: Video

});
