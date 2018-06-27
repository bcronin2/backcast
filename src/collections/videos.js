var Videos = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: _.throttle(function(query) {
    var self = this;
    this.fetch({
      data: {
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      type: 'GET',
      success: function(data) {
        self.trigger('sync', self);
        console.log('backcast: Videos fetched');
      },
      error: function(data) {
        console.error('backcast: Failed to fetch videos', data);
      }
    });
  }, 500, { leading: false }),

  parse: function(data) {
    return data.items;
  },

  model: Video

});
