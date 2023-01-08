/*
  WRITE YOUR SOLUTION HERE
*/
// 1-Using Class Declaration
// class Movie {
//   constructor(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
//
// }
// Movie.prototype.getOverview = function () {
//   console.log(
//     `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
//   );
// };
// const Movie1 = new Movie("Superman", "Tom Hamks", "Fantasy", 2007, 4.7);
// Movie1.getOverview();

// 2-Using Function Declaration

function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function () {
  console.log(
    `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
  );
};

const movie2 = new Movie("Spiderman", "Spielberg", "Fantasy", 2004, 4.7);
movie2.getOverview();
