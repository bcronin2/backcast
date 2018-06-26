var Videos = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        maxResults: 5,
        videoEmbeddable: 'true'
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
