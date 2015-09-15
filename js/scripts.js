function Show(movieTitle, showTimes, age) {
  this.showTimes = [showTimes];
  this.movieTitle = movieTitle;
  this.age = age;
  this.price = 5;
}

Show.prototype.movieTitle = function() {
  return this.movieTitle;
};

Show.prototype.showTimes = function() {
  return this.showTimes;
};

Show.prototype.age = function() {
  return this.age;
};




Show.prototype.calculatePrice = function() {
  if (this.movieTitle === "Terminator") {
    this.price += 5;
  }
  if (this.showTimes === ["10pm"]) {
    this.price += 2;
  }
  if (this.age === "0-4") {
    this.price += 1;
  }
  return this.price;
};
$(document).ready(function() {
  $("form#calculate").submit(function(event) {

    event.preventDefault();
    var movieTitle = $('input[name="movie_title"]:checked').val();
    var showTimes = $('input[name="show_time"]:checked').val();
    var customer_age = $('input[name="customer_age"]:checked').val();
    var newShow = new Show(movieTitle, showTimes, customer_age);
    
    $("#ticket").append("<li>" + "The movie, " + newShow.movieTitle + " playing at " + newShow.showTimes.join() + " " + "costs " + "$" + newShow.calculatePrice() + " because you are in the age bracket " + newShow.age + " years of age." + "</li>");
  });
});
