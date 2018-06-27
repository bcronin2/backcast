describe ('SearchView', function() {
  var view, collection;

  beforeEach(function() {
    collection = new Videos(fakeVideoData);
    sinon.spy(collection, 'search');

    view = new SearchView({ collection: collection });
    view.template = _.template('<input type="text"/><button></button>');
    view.render();  // re-render with test template
  });

  describe('when rendering live data from YouTube', function() {

    it('should initiate a search with input box value when a key is pressed/released', function() {
      view.$('input').val('something');
      view.$('input').trigger(jQuery.Event('keyup'));
      setTimeout(function() {
        expect(collection.search).to.have.been.called;
      }, 1000);
    });

  });

});
