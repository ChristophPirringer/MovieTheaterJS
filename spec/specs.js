describe('Movie', function() {
  it('returns the title of the movie', function() {
    var testMovie = new Movie("The Matrix", ["5:00"]);
    expect(testMovie.title).to.equal("The Matrix");
  })
  it('returns the show times of the movie', function() {
    var testMovie2 = new Movie("The Matrix", "5:00");
    expect(testMovie2.showTimes).to.eql(["5:00"]);
  })
});

describe('Customer', function() {
  it('returns the age of the customer', function() {
    var testCustomer = new Customer(18);
    expect(testCustomer.age).to.equal(18);
  })
});
