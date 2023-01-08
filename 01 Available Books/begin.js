/*
  WRITE YOUR SOLUTION HERE
*/
"use strict";

class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }
  get availability() {
    if (this.availableCopies === 0) return "Out of stock";
    if (this.availableCopies >= 10) return "In stock";
    if (this.availableCopies < 10) return "Low stock";
  }

  sell(numCopies = 1) {
    this.availableCopies -= numCopies;
  }
  restock(numCopies = 5) {
    this.availableCopies += numCopies;
  }
}

// const book1 = new Book("Learn JS", "John Doe", 1542365487, 3);

// console.log(book1.availability);
// book1.sell();
// book1.restock(10);

// console.log(book1.availableCopies);
// console.log(book1.availability);
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);
