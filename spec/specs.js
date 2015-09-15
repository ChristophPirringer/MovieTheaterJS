describe('Movie', function() {
  it('returns the title of the movie', function() {
    var testMovie = new Movie("The Matrix", ["5:00"]);
    expect(testMovie.title).to.equal("The Matrix");
  })
});
